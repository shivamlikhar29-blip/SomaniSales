"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Droplet, Menu, X, PhoneCall } from "lucide-react";
import ThemeToggle from "../common/ThemeToggle";
import ContactModal from "../common/ContactModal";

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
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/60 shadow-sm ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/#" className="flex items-center gap-2 group" aria-label="Somani Sales Home">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-600 text-white shadow-md shadow-indigo-500/20 group-hover:bg-indigo-700 transition-colors duration-200">
            <Droplet className="w-5 h-5 fill-current animate-pulse" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center">
            Somani<span className="text-indigo-600 dark:text-indigo-400 font-semibold ml-1">Sales</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block" aria-label="Desktop Navigation">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden sm:flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2.5 px-5 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/25 cursor-pointer active:translate-y-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Now</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors duration-200 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-slate-950 border-l border-slate-200 dark:border-slate-800 shadow-2xl p-6 transition-transform duration-300 z-[99] md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ height: "100vh" }}
      >
        <div className="flex items-center justify-between mb-8">
          <span className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            Somani Sales
          </span>
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav aria-label="Mobile Navigation">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-base font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 block py-1.5 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-900">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsModalOpen(true);
                }}
                className="flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/10 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Hotline</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>

    </header>

    {/* Info Popup Modal */}
    <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
  </>
);
}
