import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";

export const metadata = {
  title: "MOA·MOU | 항공유학 인사이트엣지",
};

const agreements = [
  {
    partner: "Jocson College",
    type: "MOA",
    year: "2022",
    location: "필리핀 클락",
    desc: "항공정비, 승무원, 조종사 유학 프로그램 연계 협정. 한국입학처 운영 및 입학 지원, EASA 자격증 취득 커리큘럼 공동 운영.",
    highlights: ["한국입학처 공식 지정", "EASA 자격증 연계 과정", "입학 지원 및 학사 관리"],
  },
  {
    partner: "Gentry International Technical College (GITC)",
    type: "MOA",
    year: "2022",
    location: "필리핀",
    desc: "기술전문교육 분야 협력 협정. 항공 관련 기술 인력 양성 프로그램 공동 운영.",
    highlights: ["기술전문 교육 협력", "인력 양성 프로그램"],
  },
];

export default function MoaMouPage() {
  return (
    <>
      <PageHero
        label="(주)인사이트엣지"
        title="MOA · MOU"
        description="인사이트엣지의 글로벌 파트너십 협정 현황입니다."
      />

      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {agreements.map((ag) => (
            <div
              key={ag.partner}
              className="rounded-2xl bg-navy-800/50 border border-border-navy p-6 md:p-8 hover:border-sky-accent/20 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2.5 py-0.5 bg-sky-accent/10 border border-sky-accent/20 text-sky-accent text-xs font-bold rounded-md">
                      {ag.type}
                    </span>
                    <span className="text-text-muted text-sm">{ag.year}년 체결</span>
                  </div>
                  <h3 className="text-text-primary font-bold text-xl">{ag.partner}</h3>
                  <p className="text-text-muted text-sm mt-1">{ag.location}</p>
                </div>
              </div>

              <p className="text-text-secondary text-sm leading-relaxed mb-5">{ag.desc}</p>

              <div className="flex flex-wrap gap-2">
                {ag.highlights.map((h) => (
                  <span
                    key={h}
                    className="px-3 py-1.5 bg-navy-700 border border-border-navy text-text-muted text-xs rounded-lg"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="rounded-xl bg-navy-800/30 border border-border-navy p-5 text-center">
            <p className="text-text-muted text-sm">
              파트너십 관련 문의는 아래 연락처로 상담해 주세요.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
