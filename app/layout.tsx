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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-300 to-blue-700">
      <div className="flex justify-center items-center p-24">{children}</div>
      </body>
    </html>

  )
}
