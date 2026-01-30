import { useState } from "react";
import { gallery } from "../data/content";

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  const [errors, setErrors] = useState({});

  const handleError = (id) => {
    setErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <>
      <div className="columns-1 gap-4 space-y-4 sm:columns-2 xl:columns-3">
        {gallery.items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setLightbox(item)}
            className="group w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 text-left"
          >
            {!errors[item.id] ? (
              <img
                src={item.src}
                alt={item.title}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                onError={() => handleError(item.id)}
              />
            ) : (
              <div className="flex h-56 w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950">
                <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Placeholder immagine
                </span>
              </div>
            )}
            <div className="p-4">
              <p className="text-sm font-semibold text-novaWhite">{item.title}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                {item.tag}
              </p>
            </div>
          </button>
        ))}
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6">
          <button
            className="absolute right-6 top-6 rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-200"
            onClick={() => setLightbox(null)}
          >
            Chiudi
          </button>
          <div className="w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80">
            {!errors[lightbox.id] ? (
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="max-h-[70vh] w-full object-cover"
                onError={() => handleError(lightbox.id)}
              />
            ) : (
              <div className="flex h-[60vh] w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950">
                <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Placeholder immagine
                </span>
              </div>
            )}
            <div className="p-5">
              <p className="text-lg font-semibold text-novaWhite">{lightbox.title}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                {lightbox.tag}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
