import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";

export const metadata = {
  title: "싱가폴항공 SLAEP | 항공유학 인사이트엣지",
};

const mtpCourses = [
  {
    name: "기체동력장치",
    duration: "115일",
    desc: "항공기 기체 구조 및 엔진 시스템 정비. 실제 항공기 정비 실습 포함.",
  },
  {
    name: "항공전자공학",
    duration: "107일",
    desc: "항공 전자장비, 통신 및 항법 시스템 정비. EASA B2 자격 연계.",
  },
  {
    name: "생산관리제어",
    duration: "45일",
    desc: "항공정비 품질관리, 생산계획 수립, 항공기 인증 절차 교육.",
  },
];

const siaepStats = [
  { label: "설립연도", value: "2008년" },
  { label: "정비사 규모", value: "600명+" },
  { label: "격납고 수", value: "3개" },
  { label: "EASA 승인 과정", value: "13개" },
];

export default function SingaporePage() {
  return (
    <>
      <PageHero
        label="항공정비 인턴"
        title="싱가폴항공 SLAEP"
        description="Singapore Airlines Engineering Pte Ltd(SIAEP) 연계 항공정비 인턴십 프로그램"
      />

      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* SIAEP 소개 */}
          <div className="rounded-2xl bg-navy-800/50 border border-border-navy p-6 md:p-8">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-sky-accent/10 border border-sky-accent/20 flex items-center justify-center text-sky-accent font-bold text-xs shrink-0">
                SIA
              </div>
              <div>
                <h2 className="text-text-primary font-bold text-xl">SIAEP</h2>
                <p className="text-text-muted text-sm">Singapore Airlines Engineering Pte Ltd</p>
              </div>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-5">
              싱가폴항공 엔지니어링(SIAEP)은 2008년 설립된 아시아 최고 수준의 MRO(정비·수리·점검) 전문 업체입니다.
              필리핀 클락에 위치하며, <strong className="text-text-primary">EASA 145-MRO 인증</strong>을 보유한 아시아 13개국 중
              유일한 EASA 교육기관입니다. 한국 내 미보유 EASA 145-MRO 인증 보유.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {siaepStats.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-navy-700/50 border border-border-navy p-3 text-center">
                  <div className="text-sky-accent font-bold text-sm mb-1">{stat.value}</div>
                  <div className="text-text-muted text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 격납고 규모 */}
          <div className="rounded-2xl bg-navy-800/50 border border-border-navy p-6 md:p-8">
            <h2 className="text-text-primary font-bold text-xl mb-5">시설 규모</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { no: "1호", size: "4,700㎡" },
                { no: "2호", size: "2,900㎡" },
                { no: "3호", size: "8,600㎡" },
              ].map((hangar) => (
                <div key={hangar.no} className="rounded-xl bg-navy-700/50 border border-border-navy p-4 text-center">
                  <div className="text-text-muted text-xs mb-2">격납고 {hangar.no}</div>
                  <div className="text-sky-accent font-bold text-xl">{hangar.size}</div>
                </div>
              ))}
            </div>
            <p className="text-text-muted text-xs mt-4 text-center">
              2009년 이후 A320 항공기 160대 이상 정비 실적
            </p>
          </div>

          {/* SLAEP 사업 목표 */}
          <div className="rounded-2xl bg-navy-800/50 border border-border-navy p-6 md:p-8">
            <h2 className="text-text-primary font-bold text-xl mb-5">SLAEP 프로그램 목표</h2>
            <div className="space-y-4">
              {[
                {
                  num: "01",
                  title: "전문화된 기술 인력 양성",
                  desc: "글로벌 기준에 부합하는 항공정비 기술 전문가 육성",
                },
                {
                  num: "02",
                  title: "교육의 현장성 국제화",
                  desc: "실제 항공기 정비 현장에서의 실무 경험 제공",
                },
                {
                  num: "03",
                  title: "다국적 기업 협력",
                  desc: "싱가폴항공 그룹과의 직접 연계를 통한 취업 기회 확보",
                },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-sky-accent/10 border border-sky-accent/20 flex items-center justify-center text-sky-accent text-xs font-bold shrink-0">
                    {item.num}
                  </div>
                  <div>
                    <div className="text-text-primary font-medium text-sm mb-1">{item.title}</div>
                    <div className="text-text-muted text-xs leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MTP 교육과정 */}
          <div>
            <h2 className="text-text-primary font-bold text-xl mb-2">MTP 교육과정</h2>
            <p className="text-text-muted text-sm mb-5">Maintenance Training Program</p>
            <div className="grid md:grid-cols-3 gap-4">
              {mtpCourses.map((course) => (
                <div
                  key={course.name}
                  className="rounded-2xl bg-navy-800/50 border border-border-navy p-5 hover:border-sky-accent/20 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-text-primary font-bold text-sm">{course.name}</h3>
                    <span className="text-sky-accent font-bold text-sm">{course.duration}</span>
                  </div>
                  <p className="text-text-muted text-xs leading-relaxed">{course.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-sky-accent/5 border border-sky-accent/15 p-4 text-center">
              <span className="text-text-secondary text-sm">
                총 교육 기간: <strong className="text-sky-accent">약 267일</strong> (기체동력장치 115일 + 항공전자 107일 + 생산관리 45일)
              </span>
            </div>
          </div>

          {/* 영어 환경 */}
          <div className="rounded-2xl bg-gradient-to-br from-navy-800 to-navy-700 border border-sky-accent/20 p-6 md:p-8">
            <h2 className="text-text-primary font-bold text-xl mb-4">영어 공용어 환경</h2>
            <p className="text-text-secondary text-sm leading-relaxed">
              필리핀은 영어를 공용어로 사용하는 국가로, SIAEP에서의 모든 교육 및 실무는 영어로 진행됩니다.
              이는 EASA 자격증 취득에 필요한 영어 필기시험 준비와 글로벌 항공사 취업에 큰 이점이 됩니다.
              아시아 13개국 중 EASA 인증 교육기관으로서 전 세계 항공 산업에서 인정받는 실무 교육을 제공합니다.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
