// app/layout.tsx
import type { Metadata } from "next";
import "@/styles/globals.css";
import { Providers } from "./providers"; // klientkomponent (under)
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Ergo Smart",
  description: "Ergonomiske hygieniske kluter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
    lang="no"
    className={`light text-background bg-foreground ${inter.className}`}
    suppressHydrationWarning>
      <head />
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
