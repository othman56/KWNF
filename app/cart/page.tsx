"use client";

import Link from "next/link";

import { useCart } from "@/context/cartContext";

export default function CartPage() {
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart } =
    useCart();

  return (
    <main className="min-h-screen bg-background text-foreground">
      {" "}
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        {" "}
        <div className="border-b border-border pb-8">
          {" "}
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
            Your Cart{" "}
          </p>
          <h1 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-6xl">
            Shopping Cart
          </h1>
        </div>
        {items.length === 0 ? (
          <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
            <p className="text-6xl font-black uppercase tracking-tighter text-primary/20">
              KWNF
            </p>

            <h2 className="mt-6 text-2xl font-black uppercase">
              Your cart is empty
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-muted">
              You haven&apos;t added anything to your cart yet. Find your next
              pair and make your move.
            </p>

            <Link
              href="/shop"
              className="mt-8 flex h-12 items-center rounded-full bg-primary px-8 text-sm font-black uppercase tracking-wide text-black transition-colors hover:bg-primary-hover"
            >
              Shop Kicks
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]">
            <div className="space-y-6">
              {items.map((item) => (
                <article
                  key={`${item.product.id}-${item.size}`}
                  className="flex gap-5 border-b border-border pb-6"
                >
                  <div className="flex h-28 w-28 shrink-0 items-center justify-center bg-surface sm:h-36 sm:w-36">
                    <span className="text-2xl font-black tracking-tighter text-primary/20 sm:text-3xl">
                      KWNF
                    </span>
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col justify-between">
                    <div>
                      <h2 className="font-black uppercase tracking-tight">
                        {item.product.name}
                      </h2>

                      <p className="mt-1 text-sm text-muted">
                        Size {item.size}
                      </p>

                      <p className="mt-2 text-sm font-bold text-primary">
                        ₦{item.product.price.toLocaleString()}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-4">
                      <div className="flex h-9 items-center rounded-full border border-border">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.size,
                              item.quantity - 1,
                            )
                          }
                          className="flex h-9 w-9 items-center justify-center text-lg font-bold text-muted transition-colors hover:text-primary"
                          aria-label={`Decrease quantity of ${item.product.name}`}
                        >
                          −
                        </button>

                        <span className="min-w-8 text-center text-sm font-bold">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.size,
                              item.quantity + 1,
                            )
                          }
                          className="flex h-9 w-9 items-center justify-center text-lg font-bold text-muted transition-colors hover:text-primary"
                          aria-label={`Increase quantity of ${item.product.name}`}
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          removeFromCart(item.product.id, item.size)
                        }
                        className="text-xs font-bold uppercase tracking-wider text-muted transition-colors hover:text-primary"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <p className="hidden text-sm font-bold sm:block">
                    ₦{(item.product.price * item.quantity).toLocaleString()}
                  </p>
                </article>
              ))}
            </div>

            <aside className="h-fit border border-border bg-surface p-6 sm:p-8">
              <h2 className="text-lg font-black uppercase tracking-tight">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4 border-b border-border pb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted">Items</span>
                  <span className="font-semibold">{totalItems}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted">Subtotal</span>
                  <span className="font-semibold">
                    ₦{totalPrice.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted">Delivery</span>
                  <span className="font-semibold">Calculated at checkout</span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="font-black uppercase">Total</span>

                <span className="text-xl font-black text-primary">
                  ₦{totalPrice.toLocaleString()}
                </span>
              </div>

              <button
                type="button"
                className="mt-8 flex h-14 w-full items-center justify-center rounded-full bg-primary px-8 text-sm font-black uppercase tracking-wide text-black transition-colors hover:bg-primary-hover"
              >
                Proceed to Checkout
              </button>

              <Link
                href="/shop"
                className="mt-4 flex h-12 w-full items-center justify-center text-sm font-bold uppercase tracking-wide text-muted transition-colors hover:text-primary"
              >
                Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
