import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";

export const metadata = { title: "루프트한자 인턴십 | 항공유학 인사이트엣지" };

export default function LufthansaPage() {
  return (
    <>
      <PageHero label="항공정비 인턴" title="루프트한자" description="독일 루프트한자 그룹과 연계한 항공정비 인턴십 프로그램" />

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-5">

          <div className="rounded-2xl bg-white border border-slate-900/[0.08] shadow-sm p-6 md:p-8">
            <h2 className="text-slate-900 font-semibold text-xl tracking-tight mb-4">루프트한자 인턴십 소개</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              독일 루프트한자 그룹의 항공정비 계열사와 연계한 글로벌 항공정비 인턴십 프로그램입니다. 세계 최고 수준의 항공정비 기술과 독일 항공산업의 노하우를 현장에서 직접 배울 수 있는 기회입니다.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              EASA 자격증 취득 후 루프트한자 인턴십으로 연결되는 체계적인 경력 개발 경로를 제공합니다.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 border border-slate-900/[0.06] p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-white border border-slate-900/[0.08] shadow-sm flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-slate-900 font-semibold text-xl tracking-tight mb-2">상세 내용 준비 중</h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-md mx-auto">
              루프트한자 인턴십 프로그램의 상세 내용은 현재 준비 중입니다. 관련 문의는 전화 또는 카카오톡으로 상담해 주세요.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-slate-900/[0.08] shadow-sm p-6 text-center">
            <p className="text-slate-400 text-sm mb-4">루프트한자 인턴십 상담 및 모집 일정 문의</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:025683111" className="inline-flex items-center gap-2 px-6 py-2.5 bg-navy-900 hover:bg-navy-800 text-white text-sm font-semibold rounded-lg shadow-lg shadow-slate-900/10 transition-all duration-300">02-568-3111</a>
              <a href="https://pf.kakao.com/_hh6900" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-slate-900/20 text-slate-900 hover:bg-slate-50 text-sm font-semibold rounded-lg transition-colors duration-300">카카오톡 @hh6900</a>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
