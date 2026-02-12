import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import CityCards from "./components/CityCards";
import CombatTabs from "./components/CombatTabs";
import LiveCommandsTabs from "./components/LiveCommandsTabs";
import EconomyV2 from "./components/EconomyV2";
import StructuresTable from "./components/StructuresTable";
import LaboratorySection from "./components/LaboratorySection";
import StatsSystemSection from "./components/StatsSystemSection";
import MissionsSection from "./components/MissionsSection";
import ShopInteractiveSection from "./components/ShopInteractiveSection";
import RolesMatrix from "./components/RolesMatrix";
import ChangelogSection from "./components/ChangelogSection";
import QuickSetupSection from "./components/QuickSetupSection";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import {
  about,
  lore,
  howTo,
  combat,
  liveCommands,
  economy2,
  structures,
  laboratory,
  statsSystem,
  missions,
  shopInteractive,
  rolesPermissions,
  seasonChangelog,
  quickSetup,
  gallery,
  faq
} from "./data/content";

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <Section id="about" title={about.title} subtitle={about.subtitle}>
        <div className="grid gap-6 lg:grid-cols-2">
          {about.body.map((paragraph) => (
            <p key={paragraph} className="text-base text-slate-300">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section id="lore" title={lore.title} subtitle={lore.subtitle}>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-base text-slate-300">
            {lore.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Claim
            </p>
            <p className="mt-4 text-2xl font-display text-novaWhite">“{lore.claim}”</p>
          </div>
        </div>
      </Section>

      <Section id="come-giocare" title={howTo.title} subtitle={howTo.subtitle}>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {howTo.steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neonBlue/40 text-sm font-semibold text-neonBlue">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-display text-novaWhite">
                  {step.title}
                </h3>
              </div>
              <p className="mt-3 text-sm text-slate-300">{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="citta" title="Nova City & Slum City" subtitle="Due metropoli, due regole del gioco.">
        <CityCards />
      </Section>

      <Section id="combattimento" title={combat.title} subtitle={combat.subtitle}>
        <CombatTabs />
      </Section>

      <Section id="comandi-live" title={liveCommands.title} subtitle={liveCommands.subtitle}>
        <LiveCommandsTabs />
      </Section>

      <Section id="economia-2" title={economy2.title} subtitle={economy2.subtitle}>
        <EconomyV2 />
      </Section>

      <Section id="strutture" title={structures.title} subtitle={structures.subtitle}>
        <StructuresTable />
      </Section>

      <Section id="laboratorio" title={laboratory.title} subtitle={laboratory.subtitle}>
        <LaboratorySection />
      </Section>

      <Section id="stats" title={statsSystem.title} subtitle={statsSystem.subtitle}>
        <StatsSystemSection />
      </Section>

      <Section id="missioni" title={missions.title} subtitle={missions.subtitle}>
        <MissionsSection />
      </Section>

      <Section id="shop-live" title={shopInteractive.title} subtitle={shopInteractive.subtitle}>
        <ShopInteractiveSection />
      </Section>

      <Section id="ruoli" title={rolesPermissions.title} subtitle={rolesPermissions.subtitle}>
        <RolesMatrix />
      </Section>

      <Section id="changelog" title={seasonChangelog.title} subtitle={seasonChangelog.subtitle}>
        <ChangelogSection />
      </Section>

      <Section id="setup-pg" title={quickSetup.title} subtitle={quickSetup.subtitle}>
        <QuickSetupSection />
      </Section>

      <Section id="media" title={gallery.title} subtitle={gallery.subtitle}>
        <Gallery />
      </Section>

      <Section id="faq" title={faq.title} subtitle={faq.subtitle}>
        <FAQ />
      </Section>

      <Footer />
    </div>
  );
}
