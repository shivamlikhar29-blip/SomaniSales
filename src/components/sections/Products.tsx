"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sliders, Sparkles, Settings, FileSpreadsheet } from "lucide-react";
import ProductCard from "../common/ProductCard";

export default function Products() {
  const categories = [
    { id: "all", name: "All Products", icon: <FileSpreadsheet className="w-4 h-4" /> },
    { id: "pipes", name: "Pipes & Hoses", icon: <Sliders className="w-4 h-4" /> },
    { id: "bathroom", name: "Bathroom Accessories", icon: <Sparkles className="w-4 h-4" /> },
    { id: "valves", name: "Valves & Fittings", icon: <Settings className="w-4 h-4" /> },
  ];

  const [activeTab, setActiveTab] = useState("all");

  const productsData = [
    // Category 1: Pipes & Hoses
    {
      category: "Pipes & Hoses",
      categoryId: "pipes",
      image: "/images/lapeta-pipe.png",
      name: "Heavy Duty Lapeta Pipe",
      description: "Supreme quality, guaranteed durability engineered for high pressure agriculture and heavy fluid conveyance.",
      features: ["Supreme quality polymer", "Burst-resistant reinforcement", "High sunlight tolerance"],
    },
    {
      category: "Pipes & Hoses",
      categoryId: "pipes",
      image: "/images/garden-pipe.png",
      name: "PVC Garden Pipes",
      description: "Highly flexible, weather-proof PVC pipes with seamless designs for home gardens and nurseries.",
      features: ["Flexible kink-free body", "Anti-algae interior liner", "UV-stabilized casing"],
    },
    {
      category: "Pipes & Hoses",
      categoryId: "pipes",
      image: "/images/hdpe-pipe.png",
      name: "PVC Flexible, FRP, & HDPE Pipes",
      description: "Specialized heavy piping configurations ideal for municipal water supply and chemical conveyance.",
      features: ["Corrosion resistant material", "High tensile strength", "Standard length options"],
    },
    // Category 2: Bathroom Accessories
    {
      category: "Bathroom Accessories",
      categoryId: "bathroom",
      image: "/images/ss-accessories.png",
      name: "Stainless Steel Accessories",
      description: "Rust-free, highly durable premium stainless steel structures with polished elegant chrome finishes.",
      features: ["Grade 304 Stainless Steel", "Mirror chrome finish", "Concealed mounting kit included"],
    },
    {
      category: "Bathroom Accessories",
      categoryId: "bathroom",
      image: "/images/plastic-accessories.png",
      name: "Plastic Accessories",
      description: "Lightweight, cost-effective, and easy-to-maintain polymer sanitary wares for utility applications.",
      features: ["Food-grade virgin plastic", "Impact-resistant material", "Easy clean surfaces"],
    },
    {
      category: "Bathroom Accessories",
      categoryId: "bathroom",
      image: "/images/brass-fittings.png",
      name: "Fittings & Valves",
      description: "Premium brass control cocks, concealed bath valves, and wall mixers designed for leak-free operations.",
      features: ["Solid brass inner core", "Quarter-turn ceramic disc", "Optimized water flow design"],
    },
    // Category 3: Valves & Industrial Fittings
    {
      category: "Valves & Industrial Fittings",
      categoryId: "valves",
      image: "/images/ball-valves.png",
      name: "Ball Valves",
      description: "Precision-molded polymer and stainless steel ball valves designed for easy flow control and zero maintenance.",
      features: ["Zero-leak seals", "Stainless Steel/PVC options", "Smooth lever action"],
    },
    {
      category: "Valves & Industrial Fittings",
      categoryId: "valves",
      image: "/images/flanged-valves.png",
      name: "Flanged Ball Valves",
      description: "Heavy-duty industrial valves for large fluid volume control in chemical and commercial piping networks.",
      features: ["ANSI class rating", "Flanged bolt alignment", "High temperature packing"],
    },
    {
      category: "Valves & Industrial Fittings",
      categoryId: "valves",
      image: "/images/valves.png",
      name: "Pump Spare Parts",
      description: "Engineered spare parts including high-efficiency brass impellers, shafts, and pressure rings.",
      features: ["Dynamically balanced", "Wear-resistant castings", "OEM sizing parameters"],
    },
  ];

  const filteredProducts = activeTab === "all" 
    ? productsData 
    : productsData.filter(p => p.categoryId === activeTab);

  const getIcon = (catId: string) => {
    switch(catId) {
      case "pipes": return <Sliders className="w-4 h-4 text-[#C9A84C]" />;
      case "bathroom": return <Sparkles className="w-4 h-4 text-blue-500" />;
      case "valves": return <Settings className="w-4 h-4 text-[#C9A84C]" />;
      default: return null;
    }
  };

  return (
    <section id="products" className="py-20 bg-gray-50 dark:bg-zinc-950/80 border-t border-zinc-200/60 dark:border-zinc-800/40 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C9A84C]">
            <span className="w-5 h-0.5 bg-[#C9A84C] rounded-full inline-block" />
            Product Catalog
            <span className="w-5 h-0.5 bg-[#C9A84C] rounded-full inline-block" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mt-2">
            Our Products
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-3 leading-relaxed">
            Browse our wide selection of certified hardware, sanitary wares, pipes, and control valves built for longevity.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 text-sm font-semibold py-2.5 px-5 rounded-full transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#C9A84C] text-white"
                  : "bg-white dark:bg-zinc-900 text-zinc-600 hover:text-[#C9A84C] dark:text-zinc-400 dark:hover:text-[#C9A84C] border border-zinc-200 dark:border-zinc-800 hover:border-amber-200 dark:hover:border-amber-800/40"
              }`}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProducts.map((product, idx) => (
            <motion.div
              layout
              key={product.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <ProductCard
                category={product.category}
                image={product.image}
                name={product.name}
                description={product.description}
                features={product.features}
                icon={getIcon(product.categoryId)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
