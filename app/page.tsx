import { Navbar } from "@/components/layout/Navbar";
import { ProductCard } from "@/components/products/productCard";
import { products } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Announcement Bar */}
      <div className="border-b border-border bg-primary px-4 py-2 text-center text-xs font-bold uppercase tracking-wider text-black">
        Nationwide Delivery Available • Ibadan, Nigeria
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[calc(100vh-120px)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          {/* Hero Content */}
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-primary">
              Step Different
            </p>

            <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              Kicks
              <br />
              Wey
              <br />
              <span className="text-primary">No Go Far.</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-muted sm:text-lg">
              Premium sneakers for people who move different. Discover your next
              pair and make every step count.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/shop"
                className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-sm font-black uppercase tracking-wide text-black transition-transform hover:scale-[1.02]"
              >
                Shop Collection
              </Link>

              <Link
                href="https://wa.me/2349038319865"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center rounded-full border border-border px-8 text-sm font-black uppercase tracking-wide transition-colors hover:border-primary hover:text-primary"
              >
                Order on WhatsApp
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-wider text-muted">
              <span>✓ Quality Sneakers</span>
              <span>✓ Nationwide Delivery</span>
              <span>✓ Ibadan Based</span>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[600px]">
            <div className="absolute h-72 w-72 rounded-full bg-primary/10 blur-3xl sm:h-96 sm:w-96" />

            <div className="relative aspect-square w-full max-w-lg overflow-hidden border border-border bg-surface">
              <Image
                src="/images/products/street-runner.jpg"
                alt="Street Runner sneaker"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/30 to-transparent p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  Featured
                </p>

                <p className="mt-2 text-2xl font-black uppercase tracking-tight">
                  Street Runner
                </p>

                <p className="mt-1 text-sm font-semibold text-white/70">
                  ₦85,000
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
                Featured
              </p>

              <h2 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-5xl">
                Fresh Kicks
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-muted sm:text-base">
                Step into some of our latest pairs. Built for everyday movement
                and made to stand out.
              </p>
            </div>

            <Link
              href="/shop"
              className="text-sm font-black uppercase tracking-wider transition-colors hover:text-primary"
            >
              View All →
            </Link>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 6).map((product) => (
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
      </section>

      {/* Brand Statement */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
              Why KWNF
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">
              We&apos;re not just selling sneakers.
              <br />
              <span className="text-primary">
                We&apos;re building a movement.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              KICKS WEY NO GO FAR is built for people who move with confidence,
              express themselves through their style, and never settle for
              ordinary.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
            <div className="bg-surface p-7 sm:p-8">
              <p className="text-sm font-black uppercase text-primary">01</p>

              <h3 className="mt-4 text-xl font-black uppercase">
                Premium Kicks
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted">
                Carefully selected sneakers built for everyday style and
                movement.
              </p>
            </div>

            <div className="bg-surface p-7 sm:p-8">
              <p className="text-sm font-black uppercase text-primary">02</p>

              <h3 className="mt-4 text-xl font-black uppercase">
                Street Energy
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted">
                A Nigerian sneaker brand made for people who want their style to
                speak for itself.
              </p>
            </div>

            <div className="bg-surface p-7 sm:p-8">
              <p className="text-sm font-black uppercase text-primary">03</p>

              <h3 className="mt-4 text-xl font-black uppercase">Nationwide</h3>

              <p className="mt-3 text-sm leading-6 text-muted">
                Based in Ibadan and delivering your kicks across Nigeria.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* WhatsApp CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="relative overflow-hidden border border-border bg-black px-6 py-12 sm:px-10 sm:py-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-black/10 blur-3xl" />

            <div className="relative max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-white">
                Need help choosing?
              </p>

              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl">
                Your next pair is
                <br />
                one message away.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-6 text-white sm:text-base">
                Got questions about sizes, availability, or delivery? Chat with
                us directly on WhatsApp and let&apos;s get you sorted.
              </p>

              <a
                href="https://wa.me/2349038319865"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-sm font-black uppercase tracking-wide text-white transition-transform hover:scale-[1.02]"
              >
                Chat on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Link
                href="/"
                className="text-2xl font-black uppercase tracking-tight"
              >
                KWNF<span className="text-primary">.</span>
              </Link>

              <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
                KICKS WEY NO GO FAR. Premium sneakers for people who move
                different. Based in Ibadan, delivering nationwide.
              </p>

              <a
                href="https://wa.me/2349038319865"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary"
              >
                WhatsApp Us →
              </a>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                Shop
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm text-muted">
                <Link
                  href="/shop"
                  className="transition-colors hover:text-white"
                >
                  All Sneakers
                </Link>

                <Link
                  href="/cart"
                  className="transition-colors hover:text-white"
                >
                  Cart
                </Link>

                <Link
                  href="/checkout"
                  className="transition-colors hover:text-white"
                >
                  Checkout
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                Connect
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm text-muted">
                <a
                  href="https://wa.me/2349038319865"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp
                </a>

                <a href="#" className="transition-colors hover:text-white">
                  Instagram
                </a>

                <a href="#" className="transition-colors hover:text-white">
                  TikTok
                </a>

                <p>Ibadan, Nigeria</p>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} KICKS WEY NO GO FAR. All rights
              reserved.
            </p>

            <p className="uppercase tracking-wider">Step Different.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
