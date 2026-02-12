import { shopInteractive } from "../data/content";

export default function ShopInteractiveSection() {
  return (
    <div className="grid gap-5">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {shopInteractive.features.map((feature, index) => (
          <div key={feature} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Fase {index + 1}</p>
            <p className="mt-2 text-sm text-slate-200">{feature}</p>
          </div>
        ))}
      </div>
      <p className="rounded-2xl border border-amber-400/30 bg-amber-400/5 p-4 text-sm text-slate-200">
        {shopInteractive.note}
      </p>
    </div>
  );
}
