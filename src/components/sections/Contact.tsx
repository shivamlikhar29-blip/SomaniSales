"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, CreditCard, MapPin, Send, MessageSquare } from "lucide-react";
import { contactDetails } from "@/config/seo";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    category: "pipes",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", phone: "", category: "pipes", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-zinc-950/80 border-t border-zinc-200/60 dark:border-zinc-800/40 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C9A84C]">
            <span className="w-5 h-0.5 bg-[#C9A84C] rounded-full inline-block" />
            Get In Touch
            <span className="w-5 h-0.5 bg-[#C9A84C] rounded-full inline-block" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mt-2">
            Request a Quote
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-3 leading-relaxed">
            Contact us for wholesale pricing, catalog requests, or direct bulk orders. Our team replies within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quick Call Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/50 text-[#C9A84C] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 animate-bounce" />
                </div>
                <div>
                  <span className="text-xs font-bold text-zinc-400 block uppercase tracking-wider">
                    Wholesale Order Hotline
                  </span>
                  <a
                    href="tel:01143364336"
                    className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white hover:text-[#C9A84C] transition-colors"
                  >
                    011-43364336
                  </a>
                </div>
              </div>
              <a
                href="tel:01143364336"
                className="w-full sm:w-auto bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-200"
              >
                Call Support Now
              </a>
            </motion.div>

            {/* Request Form */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 shadow-sm"
            >
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#C9A84C]" />
                <span>Quick Inquiry Form</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-name" className="text-xs font-bold text-zinc-600 dark:text-zinc-400">
                      Your Name / Company *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      placeholder="e.g. Somani Traders"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl py-3 px-4 text-sm bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-[#C9A84C] transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-phone" className="text-xs font-bold text-zinc-600 dark:text-zinc-400">
                      Phone Number *
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl py-3 px-4 text-sm bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-[#C9A84C] transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-category" className="text-xs font-bold text-zinc-600 dark:text-zinc-400">
                    Product Requirements *
                  </label>
                  <select
                    id="form-category"
                    value={formState.category}
                    onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                    className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl py-3 px-4 text-sm bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-[#C9A84C] transition-colors"
                  >
                    <option value="pipes">Pipes &amp; Agriculture Hoses</option>
                    <option value="bathroom">Sanitary Ware &amp; Accessories</option>
                    <option value="valves">Valves &amp; Industrial Spares</option>
                    <option value="bulk">Bulk Mixed Order Inquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-message" className="text-xs font-bold text-zinc-600 dark:text-zinc-400">
                    Message / Spec Details
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    placeholder="Describe size configurations or specific bulk quantities required..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full border border-zinc-200 dark:border-zinc-800 rounded-xl py-3 px-4 text-sm bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-[#C9A84C] transition-colors resize-none placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A8872E] text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 cursor-pointer active:scale-[0.99] disabled:bg-emerald-500 disabled:cursor-not-allowed"
                >
                  {submitted ? (
                    <span>Thank you! Quote request sent successfully.</span>
                  ) : (
                    <>
                      <span>Submit Quote Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 shadow-sm space-y-6"
            >
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#C9A84C]" />
                <span>Store Location</span>
              </h3>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium">
                    B No. 11/1, Maharani Road, New Siyagunj Market, 31/2, Kachi Mohalla, Chimni Wali Gali, Indore, Madhya Pradesh, 452006, India.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex gap-2 items-center">
                    <Clock className="w-4 h-4 text-[#C9A84C] shrink-0" />
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">10:00 AM - 8:00 PM (Daily)</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <CreditCard className="w-4 h-4 text-[#C9A84C] shrink-0" />
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-semibold">CAD / Cash Advance</span>
                  </div>
                  <div className="flex gap-2 items-center sm:col-span-2">
                    <Mail className="w-4 h-4 text-[#C9A84C] shrink-0" />
                    <a href={`mailto:${contactDetails.email}`} className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-[#C9A84C] hover:underline transition-colors">
                      {contactDetails.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative w-full aspect-video sm:aspect-square sm:max-h-[300px] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-inner">
                <iframe
                  title="Somani Sales Store Location, Indore"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.201479854743!2d75.86178347597405!3d22.71963282756041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0be27d812d%3A0xb2773641320ef340!2sMaharani%20Rd%2C%20Siyaganj%2C%20Indore%2C%20Madhya%20Pradesh%20452007!5e0!3m2!1sen!2sin!4v1722610000000!5m2!1sen!2sin"
                  width="100%"
                  height="105%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
