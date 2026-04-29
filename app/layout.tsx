"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LightweightNavbar from "@/components/ui/LightweightNavbar";
import Footer from "@/components/ui/Footer";
import { ThemeProvider } from "@/lib/context/ThemeContext";
import { LanguageProvider } from "@/lib/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <LightweightNavbar />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
