import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";

export const metadata = { title: "싱가폴항공 SLAEP | 항공유학 인사이트엣지" };

const mtpCourses = [
  { name: "기체동력장치", duration: "115일", desc: "항공기 기체 구조 및 엔진 시스템 정비. 실제 항공기 정비 실습 포함." },
  { name: "항공전자공학", duration: "107일", desc: "항공 전자장비, 통신 및 항법 시스템 정비. EASA B2 자격 연계." },
  { name: "생산관리제어", duration: "45일", desc: "항공정비 품질관리, 생산계획 수립, 항공기 인증 절차 교육." },
];

export default function SingaporePage() {
  return (
    <>
      <PageHero label="항공정비 인턴" title="싱가폴항공 SLAEP" description="Singapore Airlines Engineering Pte Ltd(SIAEP) 연계 항공정비 인턴십 프로그램" />

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">

          <div className="group rounded-2xl bg-white border border-slate-900/[0.08] shadow-sm p-6 md:p-8">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-sky-50 group-hover:bg-sky-100 flex items-center justify-center text-sky-700 font-bold text-xs shrink-0 transition-colors duration-300">SIA</div>
              <div>
                <h2 className="text-slate-900 font-semibold text-xl tracking-tight">SIAEP</h2>
                <p className="text-slate-400 text-sm">Singapore Airlines Engineering Pte Ltd</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              싱가폴항공 엔지니어링(SIAEP)은 2008년 설립된 아시아 최고 수준의 MRO 전문 업체입니다. 필리핀 클락에 위치하며, <strong className="text-slate-900">EASA 145-MRO 인증</strong>을 보유한 아시아 13개국 중 유일한 EASA 교육기관입니다.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "설립연도", value: "2008년" },
                { label: "정비사 규모", value: "600명+" },
                { label: "격납고 수", value: "3개" },
                { label: "EASA 승인 과정", value: "13개" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl bg-slate-50 border border-slate-900/[0.06] p-3 text-center">
                  <div className="text-sky-600 font-bold text-sm mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-slate-900/[0.08] shadow-sm p-6 md:p-8">
            <h2 className="text-slate-900 font-semibold text-xl tracking-tight mb-5">시설 규모</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { no: "1호", size: "4,700㎡" },
                { no: "2호", size: "2,900㎡" },
                { no: "3호", size: "8,600㎡" },
              ].map((hangar) => (
                <div key={hangar.no} className="rounded-xl bg-slate-50 border border-slate-900/[0.06] p-4 text-center">
                  <div className="text-slate-400 text-xs mb-2">격납고 {hangar.no}</div>
                  <div className="text-sky-600 font-bold text-xl">{hangar.size}</div>
                </div>
              ))}
            </div>
            <p className="text-slate-400 text-xs mt-4 text-center">2009년 이후 A320 항공기 160대 이상 정비 실적</p>
          </div>

          <div className="rounded-2xl bg-white border border-slate-900/[0.08] shadow-sm p-6 md:p-8">
            <h2 className="text-slate-900 font-semibold text-xl tracking-tight mb-5">SLAEP 프로그램 목표</h2>
            <div className="space-y-4">
              {[
                { num: "01", title: "전문화된 기술 인력 양성", desc: "글로벌 기준에 부합하는 항공정비 기술 전문가 육성" },
                { num: "02", title: "교육의 현장성 국제화", desc: "실제 항공기 정비 현장에서의 실무 경험 제공" },
                { num: "03", title: "다국적 기업 협력", desc: "싱가폴항공 그룹과의 직접 연계를 통한 취업 기회 확보" },
              ].map((item) => (
                <div key={item.num} className="group flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 group-hover:bg-sky-100 flex items-center justify-center text-sky-700 text-xs font-bold shrink-0 transition-colors duration-300">{item.num}</div>
                  <div>
                    <div className="text-slate-900 font-medium text-sm mb-1">{item.title}</div>
                    <div className="text-slate-500 text-xs leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-slate-900 font-semibold text-xl tracking-tight mb-2">MTP 교육과정</h2>
            <p className="text-slate-400 text-sm mb-5">Maintenance Training Program</p>
            <div className="grid md:grid-cols-3 gap-4">
              {mtpCourses.map((course) => (
                <div key={course.name} className="group rounded-2xl bg-white border border-slate-900/[0.08] shadow-sm p-5 hover:shadow-md hover:border-sky-200 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-slate-900 font-semibold text-sm tracking-tight">{course.name}</h3>
                    <span className="text-sky-600 font-bold text-sm">{course.duration}</span>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">{course.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-sky-50 border border-sky-200 p-4 text-center">
              <span className="text-slate-600 text-sm">총 교육 기간: <strong className="text-sky-600">약 267일</strong></span>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
