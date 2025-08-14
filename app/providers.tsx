// app/providers.tsx
"use client";

import {HeroUIProvider} from '@heroui/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {ToastProvider} from "@heroui/toast";

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <ToastProvider />
      <NextThemesProvider enableSystem attribute="class" defaultTheme='light'>
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  )
}