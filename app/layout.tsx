import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import MainBanner from "./components/headings/MainBanner";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "THE Free QR",
  description:
    "THE Free and Open Source QR Code generator and tracker with no bad practices!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} scrollbar`}>
        <MainBanner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
