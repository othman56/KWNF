import { ProductCard } from "@/components/products/productCard";
import { products } from "@/lib/products";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-6 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
              KWNF Collection
            </p>

            <h1 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-6xl">
              Shop Kicks
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-muted sm:text-base">
              Find your next pair. Premium sneakers selected for everyday
              movement and street style.
            </p>
          </div>

          <p className="text-sm font-semibold uppercase tracking-wider text-muted">
            {products.length} Products
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              slug={product.slug}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
