import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import LightweightNavbar from "@/components/ui/LightweightNavbar";
import Footer from "@/components/ui/Footer";
import { ThemeProvider } from "@/lib/context/ThemeContext";
import { LanguageProvider } from "@/lib/context/LanguageContext";


const font = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "CDF Studio - Premium Apparel Manufacturing",
  description: "ISO-certified manufacturing facility specializing in high-quality garment production for global brands",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${font.className} antialiased selection:bg-blue-600/30 selection:text-blue-900`}>
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
