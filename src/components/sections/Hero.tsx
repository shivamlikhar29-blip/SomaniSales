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
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Background glowing blobs */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-indigo-500/10 dark:indigo-500/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-sky-500/10 dark:sky-500/5 rounded-full filter blur-3xl" />

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 py-1.5 px-3.5 rounded-full text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Indore's Premier Plumbing & Valves Partner</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white"
          >
            Welcome to Somani Sales – Your Trusted{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500 dark:from-indigo-400 dark:to-sky-400">
              Plumbing & Hardware
            </span>{" "}
            Partner in Indore
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300 mt-6 max-w-2xl"
          >
            Premium Bathroom Accessories, Heavy-Duty Pipes, and Industrial Valves for Retail and Wholesale.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-4 leading-relaxed max-w-2xl"
          >
            Since 2018, Somani Sales has been Indore’s premier supplier, wholesaler, and trading company for top-quality hardware and plumbing solutions. From heavy-duty lapeta pipes for agricultural use to elegant stainless steel bathroom accessories for modern homes, we provide supreme quality components with guaranteed durability and reliability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto z-10"
          >
            <motion.a
              whileHover={{ scale: 1.025, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#products"
              className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 px-7 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/15 hover:shadow-indigo-600/30 text-center cursor-pointer"
            >
              <span>Explore Our Products</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.025, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="flex items-center justify-center gap-2 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 font-semibold py-3.5 px-7 rounded-xl transition-all duration-200 text-center cursor-pointer"
            >
              Contact for Bulk Orders
            </motion.a>
          </motion.div>
        </div>

        {/* Right Graphic Column: Big Auto Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative w-full"
        >
          <div className="relative w-full max-w-[540px] aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 group">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full h-full relative"
              >
                <img
                  src={slides[currentIndex].src}
                  alt={slides[currentIndex].alt}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay shading gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent pointer-events-none" />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-900 text-slate-700 dark:text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-md"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-900 text-slate-700 dark:text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-md"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute top-4 right-4 z-20 flex gap-1.5 bg-slate-950/40 backdrop-blur-md py-1.5 px-3 rounded-full border border-white/10">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx
                      ? "bg-indigo-400 w-5"
                      : "bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Dynamic floating badge */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/40 dark:border-slate-800/50 shadow-lg flex items-center justify-between z-20">
              <div>
                <span className="text-[9px] sm:text-[10px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest block">
                  Store Showcase
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                  {slides[currentIndex].title}
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-indigo-600 bg-indigo-50 dark:text-indigo-400 dark:bg-indigo-950/50 py-1 px-2.5 sm:px-3 rounded-lg border border-indigo-100/50 dark:border-indigo-900/40">
                {slides[currentIndex].tag}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
