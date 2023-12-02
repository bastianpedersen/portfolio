import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { Inter } from "next/font/google";
import clsx from "clsx";

import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Bastian Pedersen",
  description:
      "I am a full-stack software engineer who basically just enjoys creating things.",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body
          className={clsx(
              inter.className,
              "antialiased bg-primary text-primary width-full"
          )}
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
      >
        <Navigation />
        <div
            className={
              "px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[700px] mx-auto"
            }
        >
            {children}
            <Analytics />
        </div>
      </ThemeProvider>
      </body>
      </html>
  );
}
