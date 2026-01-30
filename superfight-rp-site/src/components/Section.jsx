export default function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="container-wide py-16 sm:py-20">
      <div className="reveal" data-reveal>
        {eyebrow && <p className="pill">{eyebrow}</p>}
        {title && (
          <h2 className="mt-5 text-3xl font-display text-novaWhite sm:text-4xl">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base text-slate-300 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}
