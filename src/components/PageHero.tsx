interface PageHeroProps {
  label: string;
  title: string;
  description?: string;
}

export default function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="pt-32 pb-12 px-4 sm:px-6 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 rounded-full text-sky-700 text-xs font-medium mb-4">
          {label}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          {title}
        </h1>
        {description && (
          <p className="text-slate-500 text-base md:text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
