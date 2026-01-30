# SuperFight RP — Landing Page

Sito statico frontend per il progetto **SuperFight RP**. Design cinematografico, moderno e responsive, basato su Vite + React + Tailwind.

## Setup rapido (come richiesto)

```bash
npm create vite@latest superfight-rp-site -- --template react
cd superfight-rp-site
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm run dev
```

## Avvio

```bash
npm install
npm run dev
```

## Struttura

- `index.html`
- `src/main.jsx`
- `src/App.jsx`
- `src/components/*`
- `src/data/content.js`
- `src/index.css`
- `public/images/*`

## Personalizzazione rapida

- Testi e link: `src/data/content.js`
- Immagini: inserisci i file in `public/images/` con i nomi indicati in `content.js`
- Palette/typography: `tailwind.config.js` + `src/index.css`

## Note

- I link Discord/BSSHotel sono placeholder. Sostituiscili in `src/data/content.js`.
- La galleria usa fallback se le immagini non sono presenti.
