"use client";

import React from "react";
import { HelpCircle } from "lucide-react";
import FAQAccordion from "../common/FAQAccordion";

export default function FAQs() {
  const faqData = [
    {
      question: "When was Somani Sales established?",
      answer: "Somani Sales was established in the year 2018. Over the years, we have built a reputation for trust, quality, and exceptional customer service in Indore.",
    },
    {
      question: "Who is the Proprietor of Somani Sales?",
      answer: "Our Proprietor is Mr. Gourav Somani, who brings leadership and extensive experience in the distribution of industrial valves, sanitary ware, and agricultural piping.",
    },
    {
      question: "Where are you located in Indore?",
      answer: "We operate from Indore, Madhya Pradesh. Our main store is centrally located at B No. 11/1, Maharani Road, New Siyagunj Market, 31/2, Kachi Mohalla, Chimni Wali Gali, Indore, Madhya Pradesh, 452006, India.",
    },
    {
      question: "Do you take bulk orders?",
      answer: "Yes, we specialize in bulk and wholesale supplies. We supply bathroom accessories, piping products, and control valves in commercial quantities for contractors, retailers, and agricultural cooperatives at the most competitive wholesale prices.",
    },
  ];

  return (
    <section id="faqs" className="py-20 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800/40 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-amber-600 dark:text-amber-400">
            <span className="w-5 h-0.5 bg-amber-500 rounded-full inline-block" />
            Frequently Asked Questions
            <span className="w-5 h-0.5 bg-amber-500 rounded-full inline-block" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mt-2 flex items-center justify-center gap-2.5">
            <HelpCircle className="w-8 h-8 text-amber-500 dark:text-amber-400 shrink-0" />
            <span>Got Questions?</span>
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-3 leading-relaxed">
            Find answers to common inquiries regarding our business, location, product supplies, and ordering methods.
          </p>
        </div>

        {/* Accordion List */}
        <FAQAccordion items={faqData} />
      </div>
    </section>
  );
}
