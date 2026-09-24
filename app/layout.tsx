import type { Metadata } from "next";
import { Toaster } from "sonner";

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
        <CartProvider>{children}</CartProvider>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
