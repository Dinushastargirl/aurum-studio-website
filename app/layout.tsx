import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import Script from "next/script";
// Import React to resolve React namespace issues for ReactNode type
import React from "react";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AURUM STUDIO | Premium Salon",
  description: "A premium luxury hair and beauty studio specializing in high-end transformations and bespoke styling. Experience modern elegance with our expert team.",
  icons: {
    icon: "https://i.ibb.co/7Tz8WwT/image.png",
    shortcut: "https://i.ibb.co/7Tz8WwT/image.png",
    apple: "https://i.ibb.co/7Tz8WwT/image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${montserrat.variable}`}>
      <head>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js" strategy="lazyOnload" />
      </head>
      <body className="bg-aurum-dark text-white font-sans overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}