"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Droplet, Menu, X, PhoneCall } from "lucide-react";
import ThemeToggle from "../common/ThemeToggle";
import ContactModal from "../common/ContactModal";

import BrandLogo from "../common/BrandLogo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll reliably when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  // Close mobile menu on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#" },
    { name: "About Us", href: "/#about" },
    { name: "Products", href: "/#products" },
    { name: "FAQs", href: "/#faqs" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 shadow-sm ${
          scrolled ? "py-3" : "py-4 sm:py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/#" className="flex items-center gap-2.5 group" aria-label="Somani Sales Home">
            <BrandLogo className="w-9 h-9 sm:w-10 sm:h-10 shrink-0" />
            <span className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center">
              Somani<span className="text-[#C9A84C] font-extrabold ml-1">Sales</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block" aria-label="Desktop Navigation">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-zinc-600 hover:text-[#C9A84C] dark:text-zinc-300 dark:hover:text-[#C9A84C] transition-colors duration-200 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#C9A84C] group-hover:w-full transition-all duration-300 rounded-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:flex items-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-white text-sm font-semibold py-2.5 px-5 rounded-full transition-all duration-200 hover:-translate-y-0.5 cursor-pointer active:translate-y-0"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Now</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors duration-200 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop Overlay - placed outside header to avoid stacking context issues */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-zinc-950/70 backdrop-blur-xs z-[998] md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed top-0 bottom-0 right-0 h-dvh w-full max-w-[280px] sm:max-w-sm bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 shadow-2xl p-6 transition-transform duration-300 ease-in-out z-[999] md:hidden flex flex-col justify-between overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-100 dark:border-zinc-900">
            <span className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <BrandLogo className="w-6 h-6 shrink-0" />
              Somani <span className="text-[#C9A84C]">Sales</span>
            </span>
            <button
              className="flex items-center justify-center w-9 h-9 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 cursor-pointer transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav aria-label="Mobile Navigation">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base font-semibold text-zinc-800 dark:text-zinc-200 hover:text-[#C9A84C] dark:hover:text-[#C9A84C] block py-3 px-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="pt-6 border-t border-zinc-100 dark:border-zinc-900 mt-6">
          <button
            onClick={() => {
              setIsOpen(false);
              setIsModalOpen(true);
            }}
            className="flex items-center justify-center gap-2 w-full bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold py-3 rounded-xl transition-all duration-200 cursor-pointer active:scale-[0.98]"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Hotline</span>
          </button>
        </div>
      </div>

      {/* Info Popup Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
