export const site = {
  name: "SuperFight RP",
  tagline: "World RP urbano tra eroi e villain",
  description:
    "Un'esperienza roleplay cinematica ambientata tra la luce di Nova City e le ombre di Slum City."
};

export const links = {
  discord: "https://discord.gg/vfyHRay9b5",
  bssHotel: "https://bsshotel.it",
  bssGuide: "https://bsshotel.it"
};

export const nav = [
  { label: "Lore", href: "#lore" },
  { label: "Come giocare", href: "#come-giocare" },
  { label: "Combat", href: "#combattimento" },
  { label: "Comandi Live", href: "#comandi-live" },
  { label: "Economia 2.0", href: "#economia-2" },
  { label: "Missioni", href: "#missioni" },
  { label: "Setup PG", href: "#setup-pg" },
  { label: "Media", href: "#media" }
];

export const hero = {
  eyebrow: "World RP ufficiale",
  title: "SuperFight RP",
  subtitle:
    "Supereroi, villain e scelte che cambiano la citta. Ruola in un mondo originale, oscuro e premium, dove ogni decisione lascia un segno.",
  ctaDiscord: "Entra su Discord",
  ctaBss: "Come giocare su BSSHotel",
  image: "/images/face_off.png",
  highlights: [
    "World RP su BSSHotel",
    "Sistema di combattimento unico",
    "Due citta, due destini"
  ]
};

export const about = {
  title: "Cos'e SuperFight RP",
  subtitle: "Un world RP di supereroi e villain, originale e narrativo.",
  body: [
    "SuperFight RP e un world roleplay basato su personaggi originali. Qui non sei un clone di un eroe famoso: sei la tua leggenda.",
    "Si gioca su BSSHotel (BSS), un retro Habbo con stanze world dedicate, mentre la community si coordina su Discord per schede, eventi e sviluppo trama."
  ]
};

export const lore = {
  title: "Lore breve",
  subtitle: "Due citta. Due visioni. Una sola verita.",
  claim: "O muori da eroe, o vivi abbastanza a lungo da diventare il cattivo.",
  body: [
    'Nova City e luce, ordine e istituzioni forti: un HQ degli Eroi, una banca sorvegliata, e "The Nova Daily" che racconta la versione ufficiale dei fatti.',
    "Slum City e porto, magazzini e traffici: covi nascosti, mercato nero e alleanze che cambiano con la notte."
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
      text: "Trova l'utente SuperFight e apri il profilo."
    },
    {
      title: "Richiedi accesso al gruppo",
      text: "Chiedi l'accesso al gruppo ufficiale del World."
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
      "Grattacieli, tecnologia e leggi rigide. La citta degli eroi, dove la reputazione e una moneta e ogni crimine lascia una scia digitale.",
    points: ["HQ Eroi", "Banca di Nova", "The Nova Daily", "District governativi"],
    accent: "nova",
    cta: "Vedi la mappa"
  },
  {
    id: "slum",
    title: "Slum City",
    mood: "Ombre, traffici, potere sporco",
    description:
      "Porto, magazzini e vicoli. Qui il potere e nelle mani di chi osa, e il mercato nero e la vera legge.",
    points: ["Porto industriale", "Magazzini", "Mercato nero", "Covi e nascondigli"],
    accent: "slum",
    cta: "Vedi la mappa"
  }
];

export const combat = {
  title: "Il Giudizio dell'Asfalto",
  subtitle: "Sistema rapido, leggibile, cinematografico.",
  rules: [
    {
      id: "azione",
      title: "Azione e Reazione",
      body:
        "Ogni turno e una scelta. L'attacco genera una reazione: schivare, parare o contrattaccare. La narrazione e sempre al centro."
    },
    {
      id: "difesa",
      title: "Schivare / Parare / Contrattaccare",
      body:
        "Scegli la tua risposta al colpo: evitare il danno, assorbirlo o ribaltare l'azione in un contrattacco piu rischioso."
    },
    {
      id: "d20",
      title: "D20 + differenza",
      body:
        "Si tira un D20: la differenza tra i risultati determina l'esito. Piu ampia e la forbice, piu pesante sara l'impatto narrativo."
    },
    {
      id: "danno",
      title: "Danno per differenza",
      body:
        "1-4: colpo lieve. 5-9: ferita seria. 10+: colpo devastante. Le ferite restano e influenzano la scena."
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
      tagline: "Velocita e imprevedibilita.",
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
      bonus: "+1 dalla furtivita",
      malus: "-1 in scontri frontali",
      archetype: "Infiltratore noir"
    }
  ]
};

export const liveCommands = {
  title: "Comandi Live",
  subtitle: "Reference operativa aggiornata ai sistemi attuali del bot.",
  tabs: [
    {
      id: "pubblici",
      label: "Pubblici",
      commands: [
        {
          syntax: "/shop",
          description: "Apre lo shop interattivo con categorie e checkout finale.",
          who: "Tutti i player",
          example: "/shop categoria:weapon"
        },
        {
          syntax: "/role",
          description: "Mostra il tuo allineamento e permessi RP correnti.",
          who: "Tutti i player",
          example: "/role"
        },
        {
          syntax: "/allocate_stats",
          description: "Distribuisce i punti iniziali o i gettoni disponibili sulle statistiche.",
          who: "Tutti i player",
          example: "/allocate_stats forza:7 agilita:6 intelligenza:5"
        },
        {
          syntax: "/mission_join",
          description: "Ti unisce a una missione aperta dal mod.",
          who: "Tutti i player",
          example: "/mission_join id:OPS-032"
        }
      ]
    },
    {
      id: "mod",
      label: "Mod",
      commands: [
        {
          syntax: "/mission_create",
          description: "Crea una missione con tipo, reward, time slot e reminder.",
          who: "Solo Mod",
          example: "/mission_create tipo:legale reward:8000 time_slot:21:30"
        },
        {
          syntax: "/mission_close",
          description: "Conclude missione e distribuisce payout automatico.",
          who: "Solo Mod",
          example: "/mission_close id:OPS-032 esito:successo"
        },
        {
          syntax: "/mission_cancel",
          description: "Annulla missione senza payout.",
          who: "Solo Mod",
          example: "/mission_cancel id:OPS-032"
        },
        {
          syntax: "/catalog_edit_structure",
          description: "Modifica costo e guadagno settimanale delle strutture.",
          who: "Solo Mod",
          example: "/catalog_edit_structure struttura:laboratorio costo:420000 income:65000"
        }
      ]
    },
    {
      id: "speciali",
      label: "Ruoli Speciali",
      commands: [
        {
          syntax: "/lab_points_buy",
          description: "Acquista gettoni upgrade stat in base al tier del personaggio.",
          who: "Ruolo Laboratorio",
          example: "/lab_points_buy tipo:8_to_9 quantita:1"
        },
        {
          syntax: "/buy_structure",
          description: "Compra una struttura e riceve il ruolo associato.",
          who: "Player con budget adeguato",
          example: "/buy_structure nome:atelier"
        },
        {
          syntax: "/balance_all",
          description: "Visualizza il riepilogo totale cash e bank.",
          who: "Banchiere / Mod",
          example: "/balance_all utente:@Player"
        }
      ]
    }
  ],
  highlights: ["/shop", "/mission_*", "/allocate_stats", "/lab_points_buy", "/catalog_edit_structure", "/role"]
};

export const economy2 = {
  title: "Economia 2.0",
  subtitle: "Flussi economici chiari tra wallet personali, proprieta e reward missioni.",
  split: [
    {
      type: "Cash",
      details: "Liquidita immediata usata per spese giornaliere e attivita di strada.",
      commands: ["/buy_atelier", "/buy_pharmacy", "/give_money"]
    },
    {
      type: "Bank",
      details: "Capitale strategico per armi, strutture e investimenti principali.",
      commands: ["/buy_weapon", "/buy_structure", "/lab_points_buy"]
    }
  ],
  flow: [
    "buy_weapon => paga Bank",
    "buy_atelier / buy_pharmacy => paga Cash",
    "buy_structure => paga Bank + assegna ruolo"
  ],
  autoMovements: [
    {
      source: "Vendite Atelier / Pharmacy",
      destination: "Cash proprietario",
      cadence: "Realtime",
      note: "Ogni vendita genera log con item e totale."
    },
    {
      source: "Payout missioni",
      destination: "Cash player partecipanti",
      cadence: "A chiusura missione",
      note: "Distribuzione automatica in base ai partecipanti validati."
    },
    {
      source: "Guadagno strutture",
      destination: "Bank proprietario",
      cadence: "Settimanale",
      note: "Income automatico in base al catalogo strutture attivo."
    }
  ]
};

export const structures = {
  title: "Strutture e Proprieta",
  subtitle: "Asset economici acquistabili che sbloccano ruoli e rendite.",
  items: [
    {
      name: "Atelier",
      cost: "150.000",
      role: "Proprietario Atelier",
      income: "20.000 / settimana",
      command: "/buy_structure nome:atelier"
    },
    {
      name: "Farmacia",
      cost: "190.000",
      role: "Farmacista",
      income: "28.000 / settimana",
      command: "/buy_structure nome:farmacia"
    },
    {
      name: "Laboratorio",
      cost: "350.000",
      role: "Laboratorio",
      income: "45.000 / settimana",
      command: "/buy_structure nome:laboratorio"
    },
    {
      name: "Studio Tatuaggi",
      cost: "175.000",
      role: "Tattoo Artist",
      income: "24.000 / settimana",
      command: "/buy_structure nome:studio_tatuaggi"
    },
    {
      name: "Future Slot",
      cost: "TBD",
      role: "Da definire",
      income: "Variabile",
      command: "/catalog_structure"
    }
  ],
  modNote:
    "I mod possono aggiornare costi e income in live usando /catalog_edit_structure per bilanciare la stagione."
};

export const laboratory = {
  title: "Laboratorio e Upgrade Stat",
  subtitle: "Sistema progressivo di token per superare i limiti iniziali del personaggio.",
  tokens: [
    { tier: "Base (fino a 8)", price: "10.000", rule: "Acquisto standard" },
    { tier: "8 -> 9", price: "50.000", rule: "Upgrade avanzato" },
    { tier: "9 -> 10", price: "100.000", rule: "Upgrade elite" }
  ],
  requirement: "Richiede ruolo Laboratorio attivo.",
  commands: ["/lab_points_buy", "/allocate_stats"],
  techFaq: [
    {
      q: "Che differenza c'e tra punti iniziali e gettoni laboratorio?",
      a: "I punti iniziali si allocano alla creazione PG. I gettoni laboratorio sono extra e si comprano nel tempo."
    },
    {
      q: "Qual e il limite massimo per stat?",
      a: "Nessuna statistica puo superare 10."
    }
  ]
};

export const statsSystem = {
  title: "Sistema Caratteristiche PG",
  subtitle: "11 statistiche base con growth progressivo e lettura immediata della potenza.",
  stats: [
    "Forza",
    "Agilita",
    "Resistenza",
    "Intelligenza",
    "Percezione",
    "Carisma",
    "Tecnica",
    "Volonta",
    "Stealth",
    "Controllo",
    "Fortuna"
  ],
  range: "Range consigliato per stat: 1-10",
  formula: "Power Level = somma delle 11 stats",
  tiers: [
    { name: "Rookie", color: "Grigio", threshold: "fino a 55" },
    { name: "Operativo", color: "Blu", threshold: "56-70" },
    { name: "Veterano", color: "Viola", threshold: "71-85" },
    { name: "Legend", color: "Oro", threshold: "86+" }
  ],
  guide: [
    "1) /allocate_stats",
    "2) Conferma distribuzione",
    "3) Upgrade futuri via laboratorio"
  ],
  modifier: "Modificatore stat = valore - 5"
};

export const missions = {
  title: "Missioni RP",
  subtitle: "Pipeline completa dal briefing mod fino al payout automatico.",
  flow: [
    "Mod crea missione",
    "Player join",
    "Mod conclude o cancella",
    "Reward automatica"
  ],
  rules: [
    "Missioni legali riservate al percorso Eroe",
    "Missioni illegali riservate al percorso Villain"
  ],
  support: "Ogni missione supporta time_slot e reminder automatico a -15 minuti nel log."
};

export const shopInteractive = {
  title: "Shop Interattivo",
  subtitle: "Nuova UX dello /shop pensata per acquisti rapidi e tracciabili.",
  features: [
    "Sidebar categorie",
    "Selezione item",
    "Carrello temporaneo",
    "Checkout con log item-per-item"
  ],
  note: "Il carrello non persiste se chiudi il comando."
};

export const rolesPermissions = {
  title: "Ruoli e Permessi",
  subtitle: "Matrice unificata con capability operative e comandi associati.",
  matrix: [
    { role: "Mod", can: "Gestione missioni e cataloghi", commands: "/mission_*, /catalog_edit_structure, /salary" },
    { role: "Banchiere", can: "Controllo movimenti e bilanci", commands: "/balance_all, /money_add, /money_remove" },
    { role: "Proprietario Atelier", can: "Gestione vendite atelier", commands: "/shop, /catalog_atelier" },
    { role: "Farmacista", can: "Gestione consumabili e cure", commands: "/shop, /catalog_pharmacy" },
    { role: "Laboratorio", can: "Vendita gettoni upgrade stat", commands: "/lab_points_buy, /allocate_stats" },
    { role: "Eroe", can: "Accesso missioni legali", commands: "/mission_join, /role" },
    { role: "Villain", can: "Accesso missioni illegali", commands: "/mission_join, /role" }
  ]
};

export const seasonChangelog = {
  title: "Changelog Stagione",
  subtitle: "Timeline patch con impatto gameplay per tenere traccia del meta.",
  patches: [
    {
      date: "2026-02-01",
      feature: "Shop interattivo con checkout loggato",
      command: "/shop",
      impact: "Acquisti piu rapidi e audit economico migliore"
    },
    {
      date: "2026-02-03",
      feature: "Sistema missioni live completo",
      command: "/mission_create, /mission_join, /mission_close",
      impact: "Loop RP piu costante e reward automatiche"
    },
    {
      date: "2026-02-06",
      feature: "Upgrade stats via laboratorio",
      command: "/lab_points_buy, /allocate_stats",
      impact: "Progressione endgame piu profonda"
    },
    {
      date: "2026-02-09",
      feature: "Bilanciamento strutture dinamico",
      command: "/catalog_edit_structure",
      impact: "Economia di stagione piu stabile"
    }
  ]
};

export const quickSetup = {
  title: "Setup PG Rapido",
  subtitle: "Percorso in 60 secondi per entrare subito nel loop RP attivo.",
  steps: [
    "Entra su Discord",
    "Crea scheda PG",
    "Alloca stats",
    "Scegli percorso: Eroe / Villain / Economia",
    "Entra nella prima missione"
  ],
  cta: "Inizia ora su Discord"
};

export const gallery = {
  title: "Media & Screenshot",
  subtitle: "Scorci dalle due citta e dal loro caos.",
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
        "No. Il mondo e originale: puoi ispirarti, ma qui si crea qualcosa di nuovo."
    },
    {
      question: "Posso fare personaggi originali?",
      answer:
        "Si. Anzi, e il cuore di SuperFight RP: identita uniche e credibili."
    },
    {
      question: "Come funziona l'ON ROLE?",
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
  credits: "SuperFight RP © 2026 - Tutti i diritti riservati.",
  note: "Rusty - Owner"
};
