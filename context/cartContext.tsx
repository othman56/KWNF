"use client";

import { createContext, useContext, useState } from "react";

import type { Product } from "@/lib/products";

export type CartItem = {
  product: Product;
  size: number;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (product: Product, size: number, quantity: number) => void;
  removeFromCart: (productId: string, size: number) => void;
  updateQuantity: (productId: string, size: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, size: number, quantity: number) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.product.id === product.id && item.size === size,
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.product.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [...currentItems, { product, size, quantity }];
    });
  };

  const removeFromCart = (productId: string, size: number) => {
    setItems((currentItems) =>
      currentItems.filter(
        (item) => !(item.product.id === productId && item.size === size),
      ),
    );
  };

  const updateQuantity = (
    productId: string,
    size: number,
    quantity: number,
  ) => {
    if (quantity <= 0) {
      removeFromCart(productId, size);
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.product.id === productId && item.size === size
          ? { ...item, quantity }
          : item,
      ),
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
