"use client";

import Link from "next/link";
import { useState } from "react";

import { useCart } from "@/context/cartContext";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="border-b border-border">
      {" "}
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        {" "}
        <Link
          href="/"
          className="text-xl font-black uppercase tracking-tighter sm:text-2xl"
        >
          KICKS <span className="text-primary">WEY</span> NO GO FAR{" "}
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>

          <Link
            href="/shop"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Shop
          </Link>

          <Link
            href="/#about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </Link>

          <Link
            href="/#contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/cart"
            className="hidden text-sm font-semibold transition-colors hover:text-primary sm:block"
          >
            Cart ({totalItems})
          </Link>

          <Link
            href="/shop"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-black transition-colors hover:bg-primary-hover sm:block"
          >
            Shop Now
          </Link>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-lg md:hidden"
          >
            {isMenuOpen ? "×" : "☰"}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="border-t border-border bg-surface px-5 py-6 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-5">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-wide hover:text-primary"
            >
              Home
            </Link>

            <Link
              href="/shop"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-wide hover:text-primary"
            >
              Shop
            </Link>

            <Link
              href="/#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-wide hover:text-primary"
            >
              About
            </Link>

            <Link
              href="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-wide hover:text-primary"
            >
              Contact
            </Link>

            <Link
              href="/cart"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-wide hover:text-primary"
            >
              Cart ({totalItems})
            </Link>

            <Link
              href="/shop"
              onClick={() => setIsMenuOpen(false)}
              className="flex h-12 items-center justify-center rounded-full bg-primary text-sm font-black uppercase tracking-wide text-black"
            >
              Shop Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
