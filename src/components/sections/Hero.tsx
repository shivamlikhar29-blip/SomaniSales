"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle } from "lucide-react";

export default function Hero() {
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
            className="inline-flex items-center gap-2 bg-indigo-55/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 py-1.5 px-3 rounded-full text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-6"
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
            className="text-lg sm:text-xl font-medium text-slate-705 dark:text-slate-300 mt-6 max-w-2xl"
          >
            Premium Bathroom Accessories, Heavy-Duty Pipes, and Industrial Valves for Retail and Wholesale.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base text-slate-550 dark:text-slate-400 mt-4 leading-relaxed max-w-2xl"
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

        {/* Right Graphic Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          <div className="relative w-full max-w-[440px] aspect-square rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 group">
            {/* Animated card container */}
            <motion.div 
              whileHover={{ scale: 1.025 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-full h-full relative cursor-pointer"
            >
              <img
                src="/images/hero.png"
                alt="Premium valves and plumbing fixtures showcase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay shading gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              
              {/* floating badge */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/40 dark:border-slate-800/50 shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-[9px] sm:text-[10px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest block">Product Quality</span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">Certified Hardware</span>
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-indigo-600 bg-indigo-50 dark:text-indigo-400/20 dark:bg-indigo-950/40 py-1 px-2.5 sm:px-3 rounded-lg border border-indigo-100/50 dark:border-indigo-900/30">
                  100% Tested
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
