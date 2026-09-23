import Link from "next/link";
import { notFound } from "next/navigation";

import { products } from "@/lib/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        <Link
          href="/shop"
          className="text-sm font-semibold uppercase tracking-wider text-muted transition-colors hover:text-primary"
        >
          ← Back to Shop
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Product Image */}
          <div className="aspect-square bg-surface">
            <div className="flex h-full items-center justify-center">
              <span className="text-7xl font-black uppercase tracking-tighter text-primary/20 sm:text-9xl">
                KWNF
              </span>
            </div>
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
              KWNF Collection
            </p>

            <h1 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-6xl">
              {product.name}
            </h1>

            <p className="mt-5 text-2xl font-bold text-primary">
              ₦{product.price.toLocaleString()}
            </p>

            <p className="mt-6 max-w-xl leading-7 text-muted">
              {product.description}
            </p>

            {/* Size */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold uppercase tracking-wider">
                  Select Size
                </p>

                <button
                  type="button"
                  className="text-xs font-semibold uppercase text-muted hover:text-primary"
                >
                  Size Guide
                </button>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className="flex h-12 w-14 items-center justify-center border border-border text-sm font-bold transition-colors hover:border-primary hover:text-primary"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-sm font-bold uppercase tracking-wider">
                Quantity
              </p>

              <div className="mt-4 flex h-12 w-fit items-center border border-border">
                <button
                  type="button"
                  className="flex h-full w-12 items-center justify-center text-lg transition-colors hover:bg-surface"
                >
                  −
                </button>

                <span className="flex h-full w-12 items-center justify-center border-x border-border text-sm font-bold">
                  1
                </span>

                <button
                  type="button"
                  className="flex h-full w-12 items-center justify-center text-lg transition-colors hover:bg-surface"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="h-14 flex-1 rounded-full bg-primary px-8 text-sm font-black uppercase tracking-wide text-black transition-colors hover:bg-primary-hover"
              >
                Add to Cart
              </button>

              <a
                href={`https://wa.me/2349038319865?text=${encodeURIComponent(
                  `Hi KWNF, I'm interested in the ${product.name} for ₦${product.price.toLocaleString()}.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 flex-1 items-center justify-center rounded-full border border-border px-8 text-sm font-black uppercase tracking-wide transition-colors hover:border-primary hover:text-primary"
              >
                Order on WhatsApp
              </a>
            </div>

            {/* Delivery Information */}
            <div className="mt-10 grid gap-4 border-t border-border pt-8 sm:grid-cols-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider">
                  Delivery
                </p>
                <p className="mt-1 text-xs text-muted">Nationwide</p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider">
                  Location
                </p>
                <p className="mt-1 text-xs text-muted">Ibadan, Nigeria</p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider">
                  Support
                </p>
                <p className="mt-1 text-xs text-muted">WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
