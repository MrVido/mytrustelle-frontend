import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyTrustelle: Luxury Resale Marketplace | Safe, Fast & Trusted",
  description: "Discover MyTrustelle, the premier online marketplace for luxury resale goods. Experience unparalleled safety, speed, and trust as you buy and sell high-end items. Our platform is designed for discerning buyers and sellers who prioritize elegance, ensuring a seamless and secure transaction process. Join our community where luxury meets reliability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">``
      <main className={inter.className}>{children}</main>
    </html>
  );
}
