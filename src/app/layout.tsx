import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ea-syno.dev",
  description: "Jinho's blog",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='ko'>
      <body className={inter.className}>
        <div id='root' className='max-w-4xl mx-auto my-0'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
