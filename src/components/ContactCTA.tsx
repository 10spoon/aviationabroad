export default function ContactCTA() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl bg-white border border-slate-200 p-8 md:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                지금 바로 상담하세요
              </h2>
              <p className="text-slate-500">
                365일 09:00~21:00 운영 · 서울 강남구 선릉로76길 27
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:025683111"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm rounded-xl transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                02-568-3111
              </a>
              <a
                href="https://pf.kakao.com/_hh6900"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-semibold text-sm rounded-xl transition-colors"
              >
                카카오톡 상담
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
