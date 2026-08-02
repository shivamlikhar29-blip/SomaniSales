"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={index}
            className={`border rounded-xl overflow-hidden backdrop-blur-sm shadow-sm transition-all duration-200 ${
              isOpen
                ? "border-amber-300/60 dark:border-amber-700/40 bg-white dark:bg-zinc-900"
                : "border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/60 hover:border-amber-200/60 dark:hover:border-amber-800/30"
            }`}
          >
            <button
              className={`w-full flex items-center justify-between p-5 text-left font-semibold transition-colors duration-200 cursor-pointer ${
                isOpen
                  ? "text-amber-600 dark:text-amber-400"
                  : "text-zinc-900 dark:text-zinc-100 hover:text-amber-600 dark:hover:text-amber-400"
              }`}
              onClick={() => toggleAccordion(index)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className={`shrink-0 transition-colors ${isOpen ? "text-amber-500" : "text-zinc-400"}`}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <div className="p-5 pt-0 text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed border-t border-amber-100 dark:border-zinc-800/40 bg-amber-50/30 dark:bg-amber-950/10">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
