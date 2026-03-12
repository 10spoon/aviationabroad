interface PageHeroProps {
  label: string;
  title: string;
  description?: string;
}

export default function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-14 px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Decorative blur */}
      <div className="absolute top-0 right-0 w-96 h-64 bg-sky-400/[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-48 bg-sky-600/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 rounded-full text-sky-700 text-xs font-medium mb-4">
          {label}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-3">
          {title}
        </h1>
        {description && (
          <p className="text-slate-500 text-base max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
