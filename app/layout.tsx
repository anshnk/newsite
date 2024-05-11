import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Themes } from "./providers";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "anshnk",
  description: "Huh whar guh?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Themes>
        <Navbar />
        {children}
        </Themes>
      </body>
    </html>
  );
}
