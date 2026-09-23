import { Navbar } from "@/components/layout/Navbar";
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

            <div className="relative flex aspect-square w-full max-w-lg items-center justify-center border border-border bg-surface">
              <div className="px-8 text-center">
                <p className="text-7xl font-black uppercase tracking-tighter text-primary sm:text-8xl">
                  KWNF
                </p>

                <p className="mt-2 text-xs font-bold uppercase tracking-[0.35em] text-muted">
                  Your next pair starts here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:grid-cols-3 lg:px-8">
          <div>
            <p className="text-sm font-black uppercase text-primary">01</p>
            <h2 className="mt-3 text-xl font-black uppercase">Premium Kicks</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Carefully selected sneakers built for everyday style.
            </p>
          </div>

          <div>
            <p className="text-sm font-black uppercase text-primary">02</p>
            <h2 className="mt-3 text-xl font-black uppercase">Street Energy</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              A Nigerian sneaker brand made for people who stand out.
            </p>
          </div>

          <div>
            <p className="text-sm font-black uppercase text-primary">03</p>
            <h2 className="mt-3 text-xl font-black uppercase">Nationwide</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Based in Ibadan and delivering your kicks across Nigeria.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
