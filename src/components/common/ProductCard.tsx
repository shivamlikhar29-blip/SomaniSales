"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ProductProps {
  name: string;
  description: string;
  features?: string[];
  category: string;
  icon?: React.ReactNode;
  image?: string;
}

export default function ProductCard({ name, description, features = [], category, icon, image }: ProductProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-indigo-950/20 hover:border-indigo-500/40 transition-all duration-300 relative group cursor-pointer"
    >
      {/* Product Image Frame */}
      {image && (
        <div className="relative w-full h-48 overflow-hidden bg-slate-100 dark:bg-slate-950">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          {/* Category Badge Floating on Image */}
          <div className="absolute top-4 left-4 z-10">
            <span className="text-[10px] font-extrabold tracking-wider uppercase bg-white/90 dark:bg-slate-900/90 text-indigo-600 dark:text-indigo-400 py-1 px-3 rounded-full border border-slate-200/40 dark:border-slate-800/50 backdrop-blur-sm">
              {category}
            </span>
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className="flex flex-col flex-grow p-6">
        {!image && (
          <div className="flex items-start justify-between mb-4">
            <span className="text-[10px] font-bold tracking-wider uppercase bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 py-1 px-2.5 rounded-full">
              {category}
            </span>
          </div>
        )}

        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-base font-bold text-slate-905 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200 leading-tight">
            {name}
          </h3>
          {icon && (
            <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-805 text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/40 transition-colors duration-250 shrink-0">
              {icon}
            </div>
          )}
        </div>

        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {features.length > 0 && (
          <ul className="space-y-2 border-t border-slate-100 dark:border-slate-800 pt-4">
            {features.map((feat, index) => (
              <li key={index} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-350">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
