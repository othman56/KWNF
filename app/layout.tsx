import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
