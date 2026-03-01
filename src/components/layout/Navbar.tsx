"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-cream-300/60 bg-cream-50/95 shadow-sm backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center px-4 py-1 sm:px-6 lg:px-8">
          {/* Spacer to balance hamburger on mobile */}
          <div className="w-[42px] min-[820px]:hidden" />

          {/* Logo — centered on mobile, left on desktop */}
          <Link href="/" className="flex flex-1 items-center justify-center min-[820px]:flex-none min-[820px]:justify-start">
            <Image
              src="/images/logo-512.png"
              alt="Sady Celmerów"
              width={480}
              height={180}
              className="h-20 w-auto min-[820px]:h-28"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 min-[820px]:ml-auto min-[820px]:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "nav-link relative rounded-md px-4 py-2 text-base font-medium transition-all duration-300",
                    pathname === link.href
                      ? "text-sage-700"
                      : "text-sage-600 hover:text-sage-800",
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-sage-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger — right side */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-sage-600 transition-colors hover:bg-sage-500/10 min-[820px]:hidden"
            aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </header>

      {/* Mobile fullscreen menu — OUTSIDE header, on top of everything */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-cream-50 min-[820px]:hidden"
          >
            {/* Top bar with centered logo + close button */}
            <div className="relative flex items-center justify-center border-b border-cream-300/60 px-4 py-1 sm:px-6">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center">
                <Image
                  src="/images/logo-512.png"
                  alt="Sady Celmerów"
                  width={480}
                  height={180}
                  className="h-20 w-auto"
                  priority
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 rounded-md p-2 text-sage-600 transition-colors hover:bg-sage-500/10"
                aria-label="Zamknij menu"
              >
                <X size={26} />
              </button>
            </div>

            {/* Nav links */}
            <ul className="flex flex-col items-center gap-2 px-6 pt-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block rounded-lg px-4 py-3 text-center text-lg font-medium transition-all duration-200",
                      pathname === link.href
                        ? "bg-sage-500/15 text-sage-700"
                        : "text-sage-600 hover:bg-sage-500/10 hover:text-sage-800",
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
