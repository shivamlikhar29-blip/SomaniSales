"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { contactDetails } from "@/config/seo";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-md max-h-[85vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-2xl z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800/60 mb-6">
              <div>
                <span className="text-[10px] font-extrabold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
                  Somani Sales
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mt-0.5">
                  Contact Information
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Info Items */}
            <div className="space-y-6">
              {/* Phone Row */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">
                    Call / Phone Numbers
                  </span>
                  <a
                    href="tel:01143364336"
                    className="text-lg font-extrabold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block"
                  >
                    011-43364336
                  </a>
                  <span className="text-xs text-slate-500">Click to call wholesale support</span>
                </div>
              </div>

              {/* Location Row */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">
                    Store Location
                  </span>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                    B No. 11/1, Maharani Road, New Siyagunj Market, 31/2, Kachi Mohalla, Chimni Wali Gali, Indore, Madhya Pradesh, 452006, India.
                  </p>
                  <a
                    href="https://maps.google.com/?q=Maharani+Road+New+Siyagunj+Indore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Timing Row */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">
                    Working Hours
                  </span>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    10:00 AM - 8:00 PM
                  </p>
                  <span className="text-xs text-slate-500">Open Monday to Sunday</span>
                </div>
              </div>
            </div>

            {/* CTA Footer */}
            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold py-2.5 px-4 rounded-xl text-sm text-center transition-colors cursor-pointer"
              >
                Close Dialog
              </button>
              <a
                href="tel:01143364336"
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-4 rounded-xl text-sm text-center transition-colors cursor-pointer shadow-md shadow-indigo-600/10"
              >
                Call Hotline
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
