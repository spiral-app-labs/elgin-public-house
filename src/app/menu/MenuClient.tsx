"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

type MenuItem = {
  name: string;
  desc: string;
  price?: string;
  img?: string;
  featured?: boolean;
};

type MenuCategory = {
  label: string;
  tagline: string;
  note?: string;
  items: MenuItem[];
};

type MenuData = Record<string, MenuCategory>;

const categoryKeys = [
  "appetizers",
  "soups_salads",
  "burgers",
  "sandwiches",
  "tacos",
  "entrees",
  "kids",
  "desserts",
];

export default function MenuClient({ menuData }: { menuData: MenuData }) {
  const [active, setActive] = useState("appetizers");

  return (
    <section className="py-12 sm:py-16 bg-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Category Navigation */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 scrollbar-hide sm:flex-wrap sm:justify-center">
          {categoryKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                active === key
                  ? "bg-copper text-cream shadow-md"
                  : "bg-white text-navy/60 hover:text-navy hover:bg-cream-dark"
              }`}
            >
              {menuData[key].label}
            </button>
          ))}
        </div>

        {/* Active Category */}
        {categoryKeys.map((key) => {
          if (key !== active) return null;
          const cat = menuData[key];

          return (
            <div key={key}>
              <AnimatedSection className="text-center mb-8 sm:mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-1">
                  {cat.label}
                </h2>
                <p className="text-navy/50 text-sm">{cat.tagline}</p>
                {cat.note && (
                  <p className="text-copper/80 text-xs mt-2 italic max-w-xl mx-auto">
                    {cat.note}
                  </p>
                )}
              </AnimatedSection>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {cat.items.map((item, i) => (
                  <AnimatedSection
                    key={item.name}
                    animation="animate-fade-up"
                    delay={`delay-${Math.min((i % 6 + 1) * 100, 600)}`}
                  >
                    <div
                      className={`bg-white rounded-lg overflow-hidden shadow-sm menu-item h-full flex flex-col ${
                        item.featured
                          ? "ring-2 ring-copper/30"
                          : ""
                      }`}
                    >
                      {item.img && (
                        <div className="relative overflow-hidden aspect-[16/10]">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          {item.featured && (
                            <span className="absolute top-3 right-3 bg-copper text-cream text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                              Popular
                            </span>
                          )}
                        </div>
                      )}
                      <div className="p-4 sm:p-5 flex flex-col flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-navy font-bold text-base leading-tight">
                            {item.name}
                          </h3>
                          {item.price && (
                            <span className="text-copper font-bold text-sm whitespace-nowrap">
                              {item.price}
                            </span>
                          )}
                        </div>
                        <p className="text-navy/50 text-sm mt-1.5 leading-relaxed flex-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Order CTA */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-12 sm:mt-16">
        <div className="bg-navy rounded-lg p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-cream mb-3">
            Hungry Yet?
          </h3>
          <p className="text-cream/60 text-sm sm:text-base mb-6">
            Kitchen open &apos;til midnight, every night. Walk in or order
            delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8474688810"
              className="bg-copper hover:bg-copper-light text-cream px-8 py-3.5 rounded text-sm font-semibold tracking-wide transition-all"
            >
              Call to Order
            </a>
            <a
              href="https://www.ubereats.com/store/elgin-public-house/rIZ-rYlNTjygkE4VfUyv7g"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-cream/30 hover:border-cream/60 text-cream px-8 py-3.5 rounded text-sm font-semibold tracking-wide transition-all"
            >
              Order on Uber Eats
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
