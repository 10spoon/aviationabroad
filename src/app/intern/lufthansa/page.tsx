import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";

export const metadata = {
  title: "루프트한자 인턴십 | 항공유학 인사이트엣지",
};

export default function LufthansaPage() {
  return (
    <>
      <PageHero
        label="항공정비 인턴"
        title="루프트한자"
        description="독일 루프트한자 그룹과 연계한 항공정비 인턴십 프로그램"
      />

      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* 소개 */}
          <div className="rounded-2xl bg-navy-800/50 border border-border-navy p-6 md:p-8">
            <h2 className="text-text-primary font-bold text-xl mb-4">루프트한자 인턴십 소개</h2>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              독일 루프트한자 그룹의 항공정비 계열사와 연계한 글로벌 항공정비 인턴십 프로그램입니다.
              세계 최고 수준의 항공정비 기술과 독일 항공산업의 노하우를 현장에서 직접 배울 수 있는 기회입니다.
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              EASA 자격증 취득 후 루프트한자 인턴십으로 연결되는 체계적인 경력 개발 경로를 제공합니다.
            </p>
          </div>

          {/* 준비 중 안내 */}
          <div className="rounded-2xl border border-sky-accent/20 bg-sky-accent/5 p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-sky-accent/10 border border-sky-accent/20 flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-sky-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-text-primary font-bold text-xl mb-2">상세 내용 준비 중</h3>
            <p className="text-text-secondary text-sm leading-relaxed max-w-md mx-auto">
              루프트한자 인턴십 프로그램의 상세 내용은 현재 준비 중입니다.
              관련 문의는 전화 또는 카카오톡으로 상담해 주세요.
            </p>
          </div>

          {/* 연락처 안내 */}
          <div className="rounded-2xl bg-navy-800/50 border border-border-navy p-6 text-center">
            <p className="text-text-muted text-sm mb-4">
              루프트한자 인턴십 상담 및 모집 일정 문의
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="tel:025683111"
                className="flex items-center gap-2 px-5 py-2.5 bg-sky-accent/10 border border-sky-accent/30 text-sky-accent text-sm rounded-xl hover:bg-sky-accent/20 transition-colors"
              >
                02-568-3111
              </a>
              <a
                href="https://pf.kakao.com/_hh6900"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-sm rounded-xl hover:bg-yellow-400/20 transition-colors"
              >
                카카오톡 @hh6900
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
