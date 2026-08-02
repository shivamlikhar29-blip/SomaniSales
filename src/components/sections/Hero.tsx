"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const slides = [
    {
      src: "/ShopImage.jpg",
      alt: "Somani Sales Main Storefront in Siyagunj Market Indore",
      title: "Somani Sales Storefront",
      tag: "Main Wholesale Hub",
    },
    {
      src: "/inside.jpg",
      alt: "Inside view of Somani Sales hardware warehouse and stock",
      title: "Store Interior & Inventory",
      tag: "Ready Wholesale Stock",
    },
    {
      src: "/ss.jpg",
      alt: "Stainless Steel fittings and sanitary accessories",
      title: "Premium SS Fittings",
      tag: "Grade 304 Quality",
    },
    {
      src: "/images/hero.png",
      alt: "Industrial valves and heavy duty pipe fittings",
      title: "Valves & Industrial Spares",
      tag: "100% Quality Tested",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-20 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">
      {/* Subtle background tones only */}
      <div className="absolute top-[10%] left-[5%] w-56 h-56 sm:w-72 sm:h-72 bg-amber-400/5 dark:bg-amber-400/3 rounded-full filter blur-3xl" />
      <div className="absolute bottom-[10%] right-[5%] w-72 h-72 sm:w-96 sm:h-96 bg-blue-900/5 dark:bg-blue-900/5 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/30 py-1.5 px-3 sm:px-3.5 rounded-full text-[11px] sm:text-xs font-bold text-amber-700 dark:text-amber-400 mb-4 sm:mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>Indore's Premier Plumbing &amp; Valves Partner</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] sm:leading-[1.1] text-zinc-900 dark:text-white"
          >
            Welcome to Somani Sales – Your Trusted{" "}
            <span className="text-gold-gradient">
              Plumbing &amp; Hardware
            </span>{" "}
            Partner in Indore
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl font-medium text-zinc-700 dark:text-zinc-300 mt-4 sm:mt-6 max-w-2xl"
          >
            Premium Bathroom Accessories, Heavy-Duty Pipes, and Industrial Valves for Retail and Wholesale.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xs sm:text-base text-zinc-500 dark:text-zinc-400 mt-3 sm:mt-4 leading-relaxed max-w-2xl"
          >
            Since 2018, Somani Sales has been Indore's premier supplier, wholesaler, and trading company for top-quality hardware and plumbing solutions. From heavy-duty lapeta pipes for agricultural use to elegant stainless steel bathroom accessories for modern homes, we provide supreme quality components with guaranteed durability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto z-10"
          >
            <motion.a
              whileHover={{ scale: 1.025, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#products"
              className="flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold py-3 sm:py-3.5 px-6 sm:px-7 rounded-xl transition-all duration-200 text-center text-sm sm:text-base cursor-pointer"
            >
              <span>Explore Our Products</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.025, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="flex items-center justify-center gap-2 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:border-amber-200 dark:hover:border-amber-800/50 font-semibold py-3 sm:py-3.5 px-6 sm:px-7 rounded-xl transition-all duration-200 text-center text-sm sm:text-base cursor-pointer"
            >
              Contact for Bulk Orders
            </motion.a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            {["Since 2018", "GST Verified", "Wholesale Pricing", "Bulk Orders"].map((badge) => (
              <span key={badge} className="text-[10px] font-bold text-zinc-500 dark:text-zinc-500 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 py-1 px-2.5 rounded-full">
                ✦ {badge}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Graphic Column: Mobile-Optimized Big Auto Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative w-full mt-4 lg:mt-0"
        >
          {/* Simple ring */}
          <div className="relative w-full max-w-[540px] aspect-[4/3] sm:aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border border-amber-200/30 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 group">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-full relative"
              >
                <img
                  src={slides[currentIndex].src}
                  alt={slides[currentIndex].alt}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay shading gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent pointer-events-none" />
              </motion.div>
            </AnimatePresence>

            {/* Touch-Friendly Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/80 dark:bg-zinc-900/80 hover:bg-white dark:hover:bg-zinc-900 text-zinc-700 dark:text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-80 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer shadow-md"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/80 dark:bg-zinc-900/80 hover:bg-white dark:hover:bg-zinc-900 text-zinc-700 dark:text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-80 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer shadow-md"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex gap-1.5 bg-zinc-950/50 backdrop-blur-md py-1 px-2.5 sm:py-1.5 sm:px-3 rounded-full border border-white/10">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx
                      ? "bg-amber-400 w-4 sm:w-5"
                      : "bg-white/40 hover:bg-white/70 w-1.5"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-amber-200/30 dark:border-zinc-800/50 shadow-lg flex items-center justify-between z-20">
              <div className="min-w-0 pr-2">
                <span className="text-[8px] sm:text-[10px] font-extrabold text-amber-600 dark:text-amber-400 uppercase tracking-widest block">
                  Store Showcase
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-zinc-900 dark:text-white truncate block">
                  {slides[currentIndex].title}
                </span>
              </div>
              <span className="text-[9px] sm:text-xs font-bold text-amber-700 bg-amber-50 dark:text-amber-400 dark:bg-amber-950/50 py-1 px-2 sm:px-3 rounded-lg border border-amber-200/50 dark:border-amber-900/40 shrink-0">
                {slides[currentIndex].tag}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
