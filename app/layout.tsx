import type { Metadata } from "next";
import { Toaster } from "sonner";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/context/cartContext";

import "./globals.css";

export const metadata: Metadata = {
  title: "KICKS WEY NO GO FAR",
  description:
    "Shop premium sneakers and footwear from KICKS WEY NO GO FAR. Based in Ibadan, delivering nationwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <div className="min-h-screen bg-background text-foreground">
            {/* Announcement Bar */}
            <div className="border-b border-border bg-primary px-4 py-2 text-center text-xs font-bold uppercase tracking-wider text-black">
              Nationwide Delivery Available • Ibadan, Nigeria
            </div>

            <Navbar />

            {children}

            <Footer />
          </div>
        </CartProvider>

        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
