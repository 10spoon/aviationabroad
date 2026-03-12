export default function ContactCTA() {
  return (
    <section className="py-32 px-4 sm:px-6 bg-navy-950 relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-accent/[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-sky-accent/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/[0.06] border border-white/[0.1] rounded-full text-white/70 text-xs font-medium">
          365일 09:00~21:00 · 서울 강남구 선릉로76길 27
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          지금 바로 상담하세요
        </h2>

        <p className="text-white/50 max-w-md mx-auto text-sm leading-relaxed">
          항공정비, 승무원, 조종사 유학에 관한 모든 궁금증을<br />
          전문 상담사가 직접 안내해드립니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <a
            href="tel:025683111"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-sky-accent hover:bg-sky-light text-navy-950 font-bold rounded-lg shadow-lg shadow-black/20 transition-all duration-300 text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            02-568-3111 전화 상담
          </a>
          <a
            href="https://pf.kakao.com/_hh6900"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.15] hover:border-white/[0.3] text-white font-semibold rounded-lg transition-all duration-300 text-sm"
          >
            카카오톡 @hh6900
          </a>
        </div>
      </div>
    </section>
  );
}
