import Link from "next/link";

export function Footer() {
  return (
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
              <Link href="/shop" className="transition-colors hover:text-white">
                All Sneakers
              </Link>

              <Link href="/cart" className="transition-colors hover:text-white">
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
  );
}
