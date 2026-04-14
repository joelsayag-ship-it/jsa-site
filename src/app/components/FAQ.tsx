"use client";

import { useState } from "react";
import { FAQS } from "./faq-data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="space-y-3">
      {FAQS.map((faq, i) => (
        <div
          key={i}
          className="bg-[#F1F8EA] rounded-xl border border-turquoise-100 overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900 text-sm md:text-base">
              {faq.q}
            </span>
            <span
              className={`flex-shrink-0 w-6 h-6 rounded-full bg-turquoise-500 text-white flex items-center justify-center text-lg font-bold transition-transform duration-300 ${
                open === i ? "rotate-45" : ""
              }`}
              aria-hidden="true"
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === i ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="px-6 pb-5 text-gray-600 text-sm md:text-base leading-relaxed">
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
