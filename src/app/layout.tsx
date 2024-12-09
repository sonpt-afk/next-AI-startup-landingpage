import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../sections/Header/Header";
import { Hero } from "@/sections/Hero";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Startup Landing Page",
  description: "A landing page for an AI startup created with Frontend Tribe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <Header></Header>
        <Hero></Hero>
        {children}
      </body>
    </html>
  );
}
