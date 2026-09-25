"use client";

import Link from "next/link";
import { useState } from "react";

import { useCart } from "@/context/cartContext";

type CheckoutForm = {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  note: string;
};

export default function CheckoutPage() {
  const { items, totalItems, totalPrice, clearCart } = useCart();

  const [form, setForm] = useState<CheckoutForm>({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    note: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof CheckoutForm, string>>
  >({});

  const updateField = (field: keyof CheckoutForm, value: string) => {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [field]: "",
    }));
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof CheckoutForm, string>> = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!form.address.trim()) {
      newErrors.address = "Delivery address is required";
    }

    if (!form.city.trim()) {
      newErrors.city = "City is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const orderDetails = items
      .map(
        (item) =>
          `${item.product.name}\n` +
          `Size: ${item.size}\n` +
          `Quantity: ${item.quantity}\n` +
          `Price: ₦${item.product.price.toLocaleString()}\n` +
          `Subtotal: ₦${(item.product.price * item.quantity).toLocaleString()}`,
      )
      .join("\n\n");

    const message = [
      "Hi KWNF, I'd like to place an order.",
      "",
      "ORDER DETAILS",
      "--------------------",
      orderDetails,
      "",
      `ORDER TOTAL: ₦${totalPrice.toLocaleString()}`,
      "",
      "CUSTOMER DETAILS",
      "--------------------",
      `Name: ${form.fullName}`,
      `Phone: ${form.phone}`,
      `Address: ${form.address}`,
      `City: ${form.city}`,
      ...(form.note.trim() ? ["", `Note: ${form.note}`] : []),
    ].join("\n");

    const whatsappUrl = `https://wa.me/2348055921614?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    clearCart();
  };

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        {" "}
        <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-5 text-center">
          {" "}
          <p className="text-6xl font-black tracking-tighter text-primary/20">
            KWNF{" "}
          </p>
          <h1 className="mt-6 text-3xl font-black uppercase tracking-tight">
            Your cart is empty
          </h1>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted">
            Add some kicks to your cart before heading to checkout.
          </p>
          <Link
            href="/shop"
            className="mt-8 flex h-12 items-center rounded-full bg-primary px-8 text-sm font-black uppercase tracking-wide text-black transition-colors hover:bg-primary-hover"
          >
            Shop Kicks
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {" "}
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        {" "}
        <div className="border-b border-border pb-8">
          {" "}
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
            Checkout{" "}
          </p>
          <h1 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-6xl">
            Complete Your Order
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]"
        >
          <section className="space-y-8">
            <div className="border border-border bg-surface p-6 sm:p-8">
              <h2 className="text-lg font-black uppercase tracking-tight">
                Customer Information
              </h2>

              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="fullName" className="text-sm font-bold">
                    Full Name
                  </label>

                  <input
                    id="fullName"
                    type="text"
                    value={form.fullName}
                    onChange={(event) =>
                      updateField("fullName", event.target.value)
                    }
                    placeholder="Enter your full name"
                    className="mt-2 h-12 w-full rounded-lg border border-border bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted focus:border-primary"
                  />

                  {errors.fullName && (
                    <p className="mt-2 text-xs font-semibold text-red-400">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="text-sm font-bold">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(event) =>
                      updateField("phone", event.target.value)
                    }
                    placeholder="08012345678"
                    className="mt-2 h-12 w-full rounded-lg border border-border bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted focus:border-primary"
                  />

                  {errors.phone && (
                    <p className="mt-2 text-xs font-semibold text-red-400">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="address" className="text-sm font-bold">
                    Delivery Address
                  </label>

                  <textarea
                    id="address"
                    value={form.address}
                    onChange={(event) =>
                      updateField("address", event.target.value)
                    }
                    placeholder="Enter your full delivery address"
                    rows={4}
                    className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-primary"
                  />

                  {errors.address && (
                    <p className="mt-2 text-xs font-semibold text-red-400">
                      {errors.address}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="city" className="text-sm font-bold">
                    City
                  </label>

                  <input
                    id="city"
                    type="text"
                    value={form.city}
                    onChange={(event) =>
                      updateField("city", event.target.value)
                    }
                    placeholder="Ibadan"
                    className="mt-2 h-12 w-full rounded-lg border border-border bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted focus:border-primary"
                  />

                  {errors.city && (
                    <p className="mt-2 text-xs font-semibold text-red-400">
                      {errors.city}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="note" className="text-sm font-bold">
                    Order Note{" "}
                    <span className="font-normal text-muted">(Optional)</span>
                  </label>

                  <textarea
                    id="note"
                    value={form.note}
                    onChange={(event) =>
                      updateField("note", event.target.value)
                    }
                    placeholder="Anything we should know about your order?"
                    rows={3}
                    className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-primary"
                  />
                </div>
              </div>
            </div>
          </section>

          <aside className="h-fit border border-border bg-surface p-6 sm:p-8">
            <h2 className="text-lg font-black uppercase tracking-tight">
              Order Summary
            </h2>

            <div className="mt-6 space-y-5 border-b border-border pb-6">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="flex gap-4"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center bg-background">
                    <span className="text-xs font-black text-primary/30">
                      KWNF
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-black uppercase">
                      {item.product.name}
                    </h3>

                    <p className="mt-1 text-xs text-muted">
                      Size {item.size} · Qty {item.quantity}
                    </p>

                    <p className="mt-1 text-sm font-bold text-primary">
                      ₦{(item.product.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-4">
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

            <div className="mt-6 flex items-center justify-between border-t border-border pt-6">
              <span className="font-black uppercase">Total</span>

              <span className="text-xl font-black text-primary">
                ₦{totalPrice.toLocaleString()}
              </span>
            </div>

            <button
              type="submit"
              className="mt-8 flex h-14 w-full items-center justify-center rounded-full bg-primary px-8 text-sm font-black uppercase tracking-wide text-black transition-colors hover:bg-primary-hover"
            >
              Order on WhatsApp
            </button>

            <Link
              href="/cart"
              className="mt-4 flex h-12 w-full items-center justify-center text-sm font-bold uppercase tracking-wide text-muted transition-colors hover:text-primary"
            >
              Back to Cart
            </Link>
          </aside>
        </form>
      </div>
    </main>
  );
}
