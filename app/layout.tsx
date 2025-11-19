import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const interSans = Inter({
  subsets: ["latin"],
  weight: ["400", "300", "700", "600", "900"],
  variable: "--font-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Travel Trucks",
  description: "Discover Your Perfect Camper Van for Unforgettable Adventures",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={interSans.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
