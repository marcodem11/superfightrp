export const site = {
  name: "SuperFight RP",
  tagline: "World RP urbano tra eroi e villain",
  description:
    "Un’esperienza roleplay cinematica ambientata tra la luce di Nova City e le ombre di Slum City."
};

export const links = {
  discord: "https://discord.gg/vfyHRay9b5",
  bssHotel: "https://bsshotel.it",
  bssGuide: "https://bsshotel.it"
};

export const nav = [
  { label: "Lore", href: "#lore" },
  { label: "Come giocare", href: "#come-giocare" },
  { label: "Città", href: "#citta" },
  { label: "Combattimento", href: "#combattimento" },
  { label: "Economia", href: "#economia" },
  { label: "Media", href: "#media" }
];

export const hero = {
  eyebrow: "World RP ufficiale",
  title: "SuperFight RP",
  subtitle:
    "Supereroi, villain e scelte che cambiano la città. Ruola in un mondo originale, oscuro e premium, dove ogni decisione lascia un segno.",
  ctaDiscord: "Entra su Discord",
  ctaBss: "Come giocare su BSSHotel",
  image: "/images/face_off.png",
  highlights: [
    "World RP su BSSHotel",
    "Sistema di combattimento unico",
    "Due città, due destini"
  ]
};

export const about = {
  title: "Cos’è SuperFight RP",
  subtitle: "Un world RP di supereroi e villain, originale e narrativo.",
  body: [
    "SuperFight RP è un world roleplay basato su personaggi originali. Qui non sei un clone di un eroe famoso: sei la tua leggenda.",
    "Si gioca su BSSHotel (BSS), un retro Habbo con stanze world dedicate, mentre la community si coordina su Discord per schede, eventi e sviluppo trama."
  ]
};

export const lore = {
  title: "Lore breve",
  subtitle: "Due città. Due visioni. Una sola verità.",
  claim: "O muori da eroe, o vivi abbastanza a lungo da diventare il cattivo.",
  body: [
    "Nova City è luce, ordine e istituzioni forti: un HQ degli Eroi, una banca sorvegliata, e “The Nova Daily” che racconta la versione ufficiale dei fatti.",
    "Slum City è porto, magazzini e traffici: covi nascosti, mercato nero e alleanze che cambiano con la notte."
  ]
};

export const howTo = {
  title: "Come entrare nel World",
  subtitle: "Pochi step e sei subito ON ROLE.",
  steps: [
    {
      title: "Registrati su BSSHotel",
      text: "Crea il tuo account su BSS e prepara il tuo avatar."
    },
    {
      title: "Entra nel gioco",
      text: "Accedi e apri la lista amici."
    },
    {
      title: "Cerca SuperFight",
      text: "Trova l’utente SuperFight e apri il profilo."
    },
    {
      title: "Richiedi accesso al gruppo",
      text: "Chiedi l’accesso al gruppo ufficiale del World."
    },
    {
      title: "Entra nelle room",
      text: "Da questo momento sei ON ROLE: ogni scelta conta."
    },
    {
      title: "Crea la scheda PG",
      text: "Vai su Discord, compila la scheda e inizia a ruolare."
    }
  ]
};

export const cities = [
  {
    id: "nova",
    title: "Nova City",
    mood: "Luce, ordine, istituzioni forti",
    description:
      "Grattacieli, tecnologia e leggi rigide. La città degli eroi, dove la reputazione è una moneta e ogni crimine lascia una scia digitale.",
    points: ["HQ Eroi", "Banca di Nova", "The Nova Daily", "District governativi"],
    accent: "nova",
    cta: "Vedi la mappa"
  },
  {
    id: "slum",
    title: "Slum City",
    mood: "Ombre, traffici, potere sporco",
    description:
      "Porto, magazzini e vicoli. Qui il potere è nelle mani di chi osa, e il mercato nero è la vera legge.",
    points: ["Porto industriale", "Magazzini", "Mercato nero", "Covi e nascondigli"],
    accent: "slum",
    cta: "Vedi la mappa"
  }
];

export const combat = {
  title: "Il Giudizio dell’Asfalto",
  subtitle: "Sistema rapido, leggibile, cinematografico.",
  rules: [
    {
      id: "azione",
      title: "Azione e Reazione",
      body:
        "Ogni turno è una scelta. L’attacco genera una reazione: schivare, parare o contrattaccare. La narrazione è sempre al centro."
    },
    {
      id: "difesa",
      title: "Schivare / Parare / Contrattaccare",
      body:
        "Scegli la tua risposta al colpo: evitare il danno, assorbirlo o ribaltare l’azione in un contrattacco più rischioso."
    },
    {
      id: "d20",
      title: "D20 + differenza",
      body:
        "Si tira un D20: la differenza tra i risultati determina l’esito. Più ampia è la forbice, più pesante sarà l’impatto narrativo."
    },
    {
      id: "danno",
      title: "Danno per differenza",
      body:
        "1–4: colpo lieve. 5–9: ferita seria. 10+: colpo devastante. Le ferite restano e influenzano la scena."
    },
    {
      id: "momentum",
      title: "Momentum",
      body:
        "Le azioni incisive generano momentum, un vantaggio narrativo che spinge il combattimento verso il tuo ritmo."
    },
    {
      id: "coerenza",
      title: "Coerenza",
      body:
        "Ferite persistenti, un gadget per sessione, zero powergame. La coerenza rende epica ogni vittoria."
    }
  ],
  approaches: [
    {
      name: "Cacciatore",
      tagline: "Precisione fredda, colpi chirurgici.",
      bonus: "+1 quando prepari il terreno",
      malus: "-1 se sei circondato",
      archetype: "Vigilante tattico"
    },
    {
      name: "Fulmine",
      tagline: "Velocità e imprevedibilità.",
      bonus: "+1 nelle azioni rapide",
      malus: "-1 nei colpi pesanti",
      archetype: "Acrobata metropolitano"
    },
    {
      name: "Muro",
      tagline: "Resistenza, controllo, presenza.",
      bonus: "+1 quando proteggi",
      malus: "-1 negli inseguimenti",
      archetype: "Tank urbano"
    },
    {
      name: "Scienziato Pazzo",
      tagline: "Gadget, caos e strategie improbabili.",
      bonus: "+1 con gadget",
      malus: "-1 quando agisci senza preparazione",
      archetype: "Inventore ossessivo"
    },
    {
      name: "Ombra",
      tagline: "Sparire, colpire, sparire di nuovo.",
      bonus: "+1 dalla furtività",
      malus: "-1 in scontri frontali",
      archetype: "Infiltratore noir"
    }
  ]
};

export const economy = {
  title: "SuperFight Economy Bot",
  subtitle: "Cash, bank e una città che gira anche per denaro.",
  body:
    "Ogni personaggio riceve una paga settimanale. Il cash serve per spese rapide, la bank per investimenti e attività più grandi. I ruoli economici muovono davvero il mondo.",
  roles: ["Mod", "Banchiere", "Proprietario Atelier"],
  commands: [
    { cmd: "/balance", desc: "Mostra il tuo saldo cash/bank." },
    { cmd: "/balance_all", desc: "Visualizza il saldo totale." },
    { cmd: "/buy", desc: "Acquista un oggetto dal catalogo." },
    { cmd: "/catalog_weapon", desc: "Catalogo armi disponibili." },
    { cmd: "/catalog_atelier", desc: "Catalogo atelier e costumi." },
    { cmd: "/inventory", desc: "Controlla gli oggetti posseduti." },
    { cmd: "/use_item", desc: "Usa un oggetto in roleplay." },
    { cmd: "/give_money", desc: "Trasferisci denaro a un altro player." }
  ],
  staffCommands: [
    { cmd: "/money_add", desc: "Aggiunge denaro." },
    { cmd: "/money_remove", desc: "Rimuove denaro." },
    { cmd: "/robbery", desc: "Gestisce rapine roleplay." },
    { cmd: "/jail", desc: "Invia in prigione." },
    { cmd: "/arrest", desc: "Gestisce arresti." },
    { cmd: "/hospital", desc: "Gestisce ricoveri." },
    { cmd: "/salary", desc: "Assegna la paga settimanale." }
  ]
};

export const gallery = {
  title: "Media & Screenshot",
  subtitle: "Scorci dalle due città e dal loro caos.",
  items: [
    { id: 1, title: "The Hub (Off Role)", tag: "World Hub", src: "/images/thehub.png" },
    { id: 2, title: "Slum City", tag: "Slum", src: "/images/slum_city.png" },
    { id: 3, title: "Nova City", tag: "Nova", src: "/images/nova_city.png" },
    { id: 4, title: "Magazzino Segreto Villain", tag: "Covo", src: "/images/covo.png" },
    { id: 5, title: "HQ Eroi", tag: "Nova", src: "/images/hq_eroi.png" }
  ]
};

export const faq = {
  title: "FAQ",
  subtitle: "Dubbi rapidi, risposte dirette.",
  items: [
    {
      question: "Serve conoscere DC/Marvel?",
      answer:
        "No. Il mondo è originale: puoi ispirarti, ma qui si crea qualcosa di nuovo."
    },
    {
      question: "Posso fare personaggi originali?",
      answer:
        "Sì. Anzi, è il cuore di SuperFight RP: identità uniche e credibili."
    },
    {
      question: "Come funziona l’ON ROLE?",
      answer:
        "Una volta entrato nelle room del World, sei ON ROLE: le azioni hanno peso narrativo."
    },
    {
      question: "Serve master?",
      answer:
        "Gli staff moderano e guidano gli eventi principali, ma il world vive di roleplay spontaneo."
    },
    {
      question: "Dove trovo le mappe?",
      answer:
        "Nella sezione Media trovi la galleria e le mappe ufficiali in costante aggiornamento."
    }
  ]
};

export const footer = {
  credits: "SuperFight RP © 2026 — Tutti i diritti riservati.",
  note: "Rusty - Owner"
};
