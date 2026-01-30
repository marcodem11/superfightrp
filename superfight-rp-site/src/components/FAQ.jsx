import { useState } from "react";
import { faq } from "../data/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="grid gap-4">
      {faq.items.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <div
            key={item.question}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
          >
            <button
              className="flex w-full items-center justify-between text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className="text-base font-semibold text-novaWhite">
                {item.question}
              </span>
              <span className="text-xl text-neonBlue">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <p className="mt-3 text-sm text-slate-300">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
