import Footer from "@/components/footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
//import AuthProvider from "./context/AuthProvider";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OfferUp",
  description: "OfferUp | Buy & Sell online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          {/* Navbar */}
          <div className="bg-emerald-800 p-2">
            <Navbar />
          </div>

          {children}

          {/* Footer */}
          <div className="mt-5">
            <img src="/footer-png-8.svg" alt="city logo" className="mx-auto" />
          </div>
        </ClerkProvider>
        <footer className="bg-white md:bg-emerald-800">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
