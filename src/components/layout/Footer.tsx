import React from "react";
import Link from "next/link";
import { MapPin, Phone, Clock, CreditCard, Droplet, ArrowUpRight } from "lucide-react";
import { contactDetails } from "@/config/seo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-white">
              <div className="flex items-center justify-center w-8 h-8 rounded bg-indigo-600">
                <Droplet className="w-4 h-4 fill-current text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">Somani Sales</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Established in 2018, Somani Sales is Indore's premier wholesaler and retailer for commercial plumbing accessories, valves, and agricultural piping.
            </p>
            <div className="mt-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-400">GSTIN:</span> 23BYRPS8516H1ZV
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Product Categories</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#products" className="hover:text-indigo-400 flex items-center gap-1 group">
                  <span>Pipes & Hoses</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-indigo-400 flex items-center gap-1 group">
                  <span>Bathroom Fittings</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-indigo-400 flex items-center gap-1 group">
                  <span>Valves & Spares</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-1">Get In Touch</h3>
            <address className="not-italic space-y-3 text-sm">
              <div className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                <span className="leading-relaxed">
                  B No. 11/1, Maharani Road, New Siyagunj Market, 31/2, Kachi Mohalla, Chimni Wali Gali, Indore, MP 452006, India.
                </span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href="tel:01143364336" className="hover:text-white transition-colors">
                  011-43364336
                </a>
              </div>
              <div className="flex gap-2.5 items-center">
                <Clock className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Mon - Sun: 10:00 AM - 8:00 PM</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <CreditCard className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="text-xs text-slate-500">
                  CAD (Cash Against Delivery) | CA (Cash Advance)
                </span>
              </div>
            </address>
          </div>

          {/* Interactive Map placeholder */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Our Location</h3>
            <div className="relative w-full h-40 rounded-lg overflow-hidden bg-slate-800 border border-slate-700/60 flex items-center justify-center">
              {/* Fallback mockup style for Map */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
              <div className="flex flex-col items-center justify-center text-center p-4 z-10">
                <MapPin className="w-7 h-7 text-indigo-500 mb-2 animate-bounce" />
                <span className="text-xs font-semibold text-slate-300">Maharani Road, Indore</span>
                <span className="text-[10px] text-slate-500 mt-1">New Siyagunj Market Hub</span>
                <a
                  href="https://maps.google.com/?q=Maharani+Road+New+Siyagunj+Indore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-xs bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-1 px-3 rounded transition-colors"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} Somani Sales. All rights reserved. Indore, India.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <span>Proprietor: Mr. Gourav Somani</span>
            <span className="text-slate-700">|</span>
            <Link href="/#faqs" className="hover:text-indigo-400 transition-colors">
              Help FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
