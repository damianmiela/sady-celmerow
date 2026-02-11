'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { href: '#soki', label: 'Soki' },
  { href: '#onas', label: 'O nas' },
  { href: '#odmiany', label: 'Odmiany jabłek' },
  { href: '#kontakt', label: 'Kontakt' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for active section highlighting
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-30% 0px -60% 0px' },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#hero"
          onClick={handleNavClick}
          className="relative z-50 flex items-center"
        >
          <Image
            src="/images/logo.png"
            alt="Sady Celmerów"
            width={scrolled ? 140 : 160}
            height={scrolled ? 46 : 52}
            className="h-auto transition-all duration-300"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${
                scrolled
                  ? activeSection === link.href.replace('#', '')
                    ? 'text-primary-500'
                    : 'text-muted-700 hover:text-primary-500'
                  : activeSection === link.href.replace('#', '')
                    ? 'text-white'
                    : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
              {activeSection === link.href.replace('#', '') && (
                <motion.div
                  layoutId="activeNav"
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                    scrolled ? 'bg-primary-500' : 'bg-white'
                  }`}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`relative z-50 md:hidden ${
            scrolled || mobileOpen ? 'text-muted-800' : 'text-white'
          }`}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`text-2xl font-medium uppercase tracking-wider ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-primary-500'
                      : 'text-muted-700'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
