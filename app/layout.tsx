// app/layout.tsx
import type { Metadata } from "next";
import "@/styles/globals.css";
import { Providers } from "./providers"; // klientkomponent (under)
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: "swap",
  preload: true
})

export const metadata: Metadata = {
  title: "Ergo Smart",
  description: "Ergonomiske hygieniske kluter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
    lang="no"
    className={`light text-background bg-foreground`}
    suppressHydrationWarning>
      <head />
      <body className={`${inter.className}`}>
        <Providers>
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
