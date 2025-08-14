'use client';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import { ThemeSwitch } from "../ThemeSwitcher";

export default function Header() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Navbar 
        isBlurred={false}
        className="bg-hero-bg backdrop-blur-sm pt-10 pb-5"
        maxWidth="full"
        height="40px"
      >
        <div className="flex w-full justify-between mx-4 sm:mx-8 lg:mx-20">

        <NavbarBrand>
          <h1 className="text-2xl sm:text-4xl font-bold text-background">
            Ergo Smart
          </h1>
        </NavbarBrand>
        
        <NavbarContent justify="end">
          <NavbarItem>
            
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>
              </div>
      </Navbar>
    </motion.div>
  );
}