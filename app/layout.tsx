import { Suspense } from "react";
import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";
import { PlanProvider } from "@/context/PlanContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description: "A dark, no-nonsense gym companion. Train hard, log honest.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${oswald.variable} font-body flex min-h-screen flex-col antialiased`}
      >
        <PlanProvider>
          <Suspense fallback={null}>
            <Navbar />
          </Suspense>
          <div className="flex-1">{children}</div>
          <Footer />
          <Toast />
        </PlanProvider>
      </body>
    </html>
  );
}
