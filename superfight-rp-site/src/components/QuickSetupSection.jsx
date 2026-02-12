import { links, quickSetup } from "../data/content";

export default function QuickSetupSection() {
  return (
    <div className="rounded-3xl border border-neonBlue/30 bg-gradient-to-br from-slate-900/80 to-[#0d1628] p-6 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <h3 className="text-3xl font-display text-novaWhite">{quickSetup.title}</h3>
          <p className="mt-3 text-sm text-slate-300">{quickSetup.subtitle}</p>
          <ul className="mt-5 grid gap-2 text-sm text-slate-200">
            {quickSetup.steps.map((step, index) => (
              <li key={step} className="rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2">
                {index + 1}. {step}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <a className="btn btn-primary w-full max-w-xs" href={links.discord}>
            {quickSetup.cta}
          </a>
        </div>
      </div>
    </div>
  );
}
