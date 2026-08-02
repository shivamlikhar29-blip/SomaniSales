"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, FileText, Landmark, User, ShieldCheck } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Calendar className="w-6 h-6 text-indigo-600" />,
      label: "Established Year",
      value: "2018",
    },
    {
      icon: <FileText className="w-6 h-6 text-indigo-600" />,
      label: "GST Number",
      value: "23BYRPS8516H1ZV",
    },
    {
      icon: <Landmark className="w-6 h-6 text-indigo-600" />,
      label: "Business Operations",
      value: "Wholesaler & Retailer",
    },
    {
      icon: <User className="w-6 h-6 text-indigo-600" />,
      label: "Proprietor",
      value: "Mr. Gourav Somani",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/40 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                Corporate Profile
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-2">
                About Somani Sales
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base text-slate-650 dark:text-slate-300 leading-relaxed"
            >
              Established in 2018, Somani Sales has gained immense expertise in the supply and trading of high-quality hardware and sanitary products. Located in the heart of Indore, Madhya Pradesh, we have quickly grown into one of the region's leading sellers.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base text-slate-650 dark:text-slate-300 leading-relaxed"
            >
              Under the leadership of our Proprietor, <span className="font-semibold text-slate-800 dark:text-white">Mr. Gourav Somani</span>, we are committed to providing exceptional service and competitive pricing. Whether you are a homeowner looking for a single fixture or a contractor needing bulk supplies, we are fully equipped to meet your demands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/40 flex gap-3.5 items-start max-w-xl"
            >
              <ShieldCheck className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                Our operations conform to the highest Indian quality metrics, facilitating smooth wholesale distribution networks across Madhya Pradesh.
              </p>
            </motion.div>
          </div>

          {/* Right Highlights Grid Column */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-955/20 border border-slate-200/50 dark:border-slate-800/40 flex flex-col justify-between min-h-[140px] sm:h-40 shadow-sm"
                >
                  <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl w-max border border-slate-200/40 dark:border-slate-800/40">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">
                      {item.label}
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white mt-1 block">
                      {item.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
