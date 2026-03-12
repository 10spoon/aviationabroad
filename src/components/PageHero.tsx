interface PageHeroProps {
  label: string;
  title: string;
  description?: string;
}

export default function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 relative overflow-hidden">
      {/* background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-navy-800)_0%,_transparent_60%)] opacity-60" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-accent/10 border border-sky-accent/20 rounded-full text-sky-accent text-xs font-medium mb-4">
          {label}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
          {title}
        </h1>
        {description && (
          <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
