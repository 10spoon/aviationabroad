import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";

export const metadata = {
  title: "조종사 유학 | 항공유학 인사이트엣지",
};

const routes = [
  { num: "01", title: "공군사관학교", desc: "공군 조종장교 양성 과정" },
  { num: "02", title: "항공운항학과 대학", desc: "국내 항공운항학과 개설 대학 진학" },
  { num: "03", title: "공군 조종장학생", desc: "일반 대학교 공군 조종장학생 선발" },
  { num: "04", title: "국토부 전문교육기관", desc: "국토교통부 지정 전문교육기관 수료" },
  {
    num: "05",
    title: "해외 항공대학교 유학",
    desc: "필리핀 등 해외 항공전문대학 유학 (인사이트엣지 추천)",
    highlight: true,
  },
];

const partners = [
  {
    name: "Alpha Aviation Group",
    desc: "필리핀 최대 규모의 조종사 양성 학교. CAAP 인증 전문 교육기관.",
  },
  {
    name: "Omni Aviation",
    desc: "필리핀 클락 소재. 다양한 비행 훈련 과정 운영.",
  },
];

export default function PilotPage() {
  return (
    <>
      <PageHero
        label="항공유학"
        title="조종사 유학"
        description="필리핀 해외 항공대학교를 통한 조종사 자격증 취득 프로그램"
      />

      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* 조종사 경로 */}
          <div>
            <h2 className="text-text-primary font-bold text-xl mb-2">조종사가 되는 방법</h2>
            <p className="text-text-muted text-sm mb-5">
              항공기를 직접 조종하는 항공업무종사자(자가용·사업용·운송용)가 되기 위한 다양한 경로입니다.
            </p>
            <div className="space-y-3">
              {routes.map((route) => (
                <div
                  key={route.num}
                  className={`flex items-center gap-4 rounded-xl px-5 py-4 border transition-colors ${
                    route.highlight
                      ? "bg-sky-accent/10 border-sky-accent/30"
                      : "bg-navy-800/50 border-border-navy hover:border-sky-accent/20"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                      route.highlight
                        ? "bg-sky-accent text-navy-950"
                        : "bg-navy-700 border border-border-navy text-text-muted"
                    }`}
                  >
                    {route.num}
                  </div>
                  <div>
                    <div className={`font-medium text-sm ${route.highlight ? "text-sky-accent" : "text-text-primary"}`}>
                      {route.title}
                    </div>
                    <div className="text-text-muted text-xs mt-0.5">{route.desc}</div>
                  </div>
                  {route.highlight && (
                    <span className="ml-auto text-xs text-sky-accent border border-sky-accent/30 rounded-md px-2 py-0.5 shrink-0">
                      추천
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 필리핀 조종사 유학 과정 */}
          <div className="rounded-2xl bg-navy-800/50 border border-border-navy p-6 md:p-8">
            <h2 className="text-text-primary font-bold text-xl mb-5">필리핀 조종사 유학 과정</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl bg-navy-700/50 border border-border-navy p-4">
                <div className="text-sky-accent text-xs font-bold mb-2">대졸자 과정</div>
                <div className="text-text-primary font-bold text-sm mb-1">14개월 / 300시간</div>
                <div className="text-text-muted text-xs leading-relaxed">
                  4년제 대학 졸업자 대상. 14개월 내 300시간 비행 훈련 이수.
                </div>
              </div>
              <div className="rounded-xl bg-navy-700/50 border border-border-navy p-4">
                <div className="text-sky-accent text-xs font-bold mb-2">고졸자 과정</div>
                <div className="text-text-primary font-bold text-sm mb-1">2년 / 300시간</div>
                <div className="text-text-muted text-xs leading-relaxed">
                  고등학교 졸업자 대상. 2년 내 300시간 비행 훈련 이수.
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-navy-950/40 border border-border-navy p-4">
              <div className="text-text-secondary text-xs font-medium mb-2">교관 추가 경험</div>
              <p className="text-text-muted text-xs leading-relaxed">
                훈련 수료 후 1년간 교관(Flight Instructor)으로 추가 경력 쌓기 가능.
                시간당 $20 지급. 비행 시간 추가 확보 기회.
              </p>
            </div>
          </div>

          {/* 입학 조건 */}
          <div className="rounded-2xl bg-navy-800/50 border border-border-navy p-6 md:p-8">
            <h2 className="text-text-primary font-bold text-xl mb-5">입학 조건</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "학력", value: "고등학교 졸업 이상" },
                { label: "항공신체검사", value: "항공신체검사증명 취득" },
                { label: "영어 (IELTS)", value: "IELTS 5.5 이상" },
                { label: "영어 (토익)", value: "TOEIC 600점 이상" },
                { label: "연령", value: "제한 없음 (일반적으로 35세 이하 권장)" },
                { label: "시력", value: "교정시력 기준 충족 필요" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center rounded-lg bg-navy-700/50 border border-border-navy px-4 py-3"
                >
                  <span className="text-text-muted text-xs">{item.label}</span>
                  <span className="text-text-primary text-xs font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 협력 기관 */}
          <div>
            <h2 className="text-text-primary font-bold text-xl mb-5">협력 교육기관</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {partners.map((p) => (
                <div
                  key={p.name}
                  className="rounded-2xl bg-navy-800/50 border border-border-navy p-5 hover:border-sky-accent/20 transition-colors"
                >
                  <h3 className="text-text-primary font-bold text-sm mb-2">{p.name}</h3>
                  <p className="text-text-muted text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
