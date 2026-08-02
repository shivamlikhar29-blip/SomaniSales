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
      className="flex flex-col h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-amber-950/20 hover:border-amber-300/50 dark:hover:border-amber-700/30 transition-all duration-300 relative group cursor-pointer"
    >
      {/* Product Image Frame */}
      {image && (
        <div className="relative w-full h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-950">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          {/* Category Badge Floating on Image */}
          <div className="absolute top-4 left-4 z-10">
            <span className="text-[10px] font-extrabold tracking-wider uppercase bg-white/90 dark:bg-zinc-900/90 text-amber-600 dark:text-amber-400 py-1 px-3 rounded-full border border-amber-200/40 dark:border-zinc-800/50 backdrop-blur-sm">
              {category}
            </span>
          </div>
        </div>
      )}

      {/* Gold hover top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Card Content */}
      <div className="flex flex-col flex-grow p-6">
        {!image && (
          <div className="flex items-start justify-between mb-4">
            <span className="text-[10px] font-bold tracking-wider uppercase bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 py-1 px-2.5 rounded-full border border-amber-100/50 dark:border-amber-900/30">
              {category}
            </span>
          </div>
        )}

        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-base font-bold text-zinc-800 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-200 leading-tight">
            {name}
          </h3>
          {icon && (
            <div className="p-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 text-zinc-500 group-hover:text-amber-600 dark:group-hover:text-amber-400 group-hover:bg-amber-50 dark:group-hover:bg-amber-950/40 transition-colors duration-200 shrink-0">
              {icon}
            </div>
          )}
        </div>

        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {features.length > 0 && (
          <ul className="space-y-2 border-t border-zinc-100 dark:border-zinc-800 pt-4">
            {features.map((feat, index) => (
              <li key={index} className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
