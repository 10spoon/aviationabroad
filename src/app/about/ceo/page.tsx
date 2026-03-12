import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";

export const metadata = {
  title: "CEO 인사 | 항공유학 인사이트엣지",
};

export default function CeoPage() {
  return (
    <>
      <PageHero
        label="(주)인사이트엣지"
        title="CEO 인사"
        description="대표이사 허헌의 인사말"
      />

      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-navy-800/50 border border-border-navy p-8 md:p-12">
            {/* Quote mark */}
            <div className="text-sky-accent/20 text-8xl font-serif leading-none mb-4 select-none">"</div>

            <div className="space-y-6 text-text-secondary text-base leading-relaxed">
              <p>
                안녕하십니까.<br />
                항공유학 인사이트엣지 대표이사 <strong className="text-text-primary">허헌</strong>입니다.
              </p>
              <p>
                저희 인사이트엣지는 <strong className="text-sky-accent">항공정비사, 항공조종사, 승무원</strong> 유학생을 모집하고,
                최고 수준의 항공유학 프로그램을 제공하기 위해 설립되었습니다.
              </p>
              <p>
                필리핀 클락에 위치한 <strong className="text-text-primary">Jocson College</strong>와의 MOA 협정을 통해
                EASA 자격증 기반의 체계적인 커리큘럼을 구축하였으며,
                싱가폴항공 엔지니어링(SIAEP)의 SLAEP 프로그램과 연계하여
                실무 현장에서 바로 통하는 인재를 양성하고 있습니다.
              </p>
              <p>
                항공 산업은 전 세계적으로 급성장하고 있으며, 숙련된 항공정비사와 조종사에 대한
                수요는 날로 증가하고 있습니다. 저희 인사이트엣지는 여러분이 그 기회를 잡을 수 있도록
                최선의 지원을 다하겠습니다.
              </p>
              <p>
                <strong className="text-text-primary">나의 꿈에 비상의 날개를 달아라!</strong><br />
                여러분의 항공 커리어를 인사이트엣지와 함께 시작하시기 바랍니다.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-border-navy flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-sky-accent/10 border border-sky-accent/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-sky-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <div className="text-text-primary font-bold">허 헌</div>
                <div className="text-text-muted text-sm">(주)인사이트엣지 대표이사</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
