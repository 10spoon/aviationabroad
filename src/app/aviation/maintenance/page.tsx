import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";

export const metadata = { title: "항공정비 유학 | 항공유학 인사이트엣지" };

const courses = [
  { title: "2년제 전문대 과정", tag: "고졸 입학 가능", desc: "고등학교 졸업 이상이면 입학 가능. OJT 1,200시간 포함.", highlights: ["고졸 입학 가능", "OJT 1,200시간", "전문학사 학위"] },
  { title: "4년제 대학 과정", tag: "편입 가능", desc: "고졸 또는 편입으로 입학. OJT 1,200시간 포함. 학사 학위 취득.", highlights: ["학사 학위 취득", "OJT 1,200시간", "편입 가능"] },
  { title: "12개월 인턴 과정", tag: "실무 특화", desc: "고졸 또는 항공 전공자 대상. 싱가폴항공 엔지니어링(SIAEP) 연계 실무 경험.", highlights: ["SIAEP 연계", "실무 집중", "취업 직결"] },
];

export default function MaintenancePage() {
  return (
    <>
      <PageHero label="항공유학" title="항공정비 유학" description="필리핀 Jocson College에서 EASA 기반 항공정비사를 양성합니다." />

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">

          <div className="group rounded-2xl bg-white border border-slate-900/[0.08] shadow-sm p-6 md:p-8">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-sky-50 group-hover:bg-sky-100 flex items-center justify-center text-sky-700 font-bold text-xs shrink-0 transition-colors duration-300">JC</div>
              <div>
                <h2 className="text-slate-900 font-semibold text-xl tracking-tight">Jocson College</h2>
                <p className="text-slate-400 text-sm">필리핀 클락 (Clark) · 1950년 설립 · 72년 전통</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              필리핀 클락공항 인근에 위치한 Jocson College는 1950년에 설립된 72년 역사의 항공전문 대학교입니다. 이론 수업과 항공기 정비 실습을 병행하는 커리큘럼으로, EASA 자격증 취득을 목표로 하는 학생들에게 최적의 교육 환경을 제공합니다.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "설립연도", value: "1950년" },
                { label: "위치", value: "필리핀 클락" },
                { label: "교육 방식", value: "이론 + 실습" },
                { label: "협정", value: "MOA 2022" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-slate-50 border border-slate-900/[0.06] p-3 text-center">
                  <div className="text-slate-400 text-xs mb-1">{item.label}</div>
                  <div className="text-slate-900 font-semibold text-xs">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-slate-900 font-semibold text-xl tracking-tight mb-5">교육 과정</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {courses.map((course) => (
                <div key={course.title} className="group rounded-2xl bg-white border border-slate-900/[0.08] shadow-sm p-5 hover:shadow-md hover:border-sky-200 transition-all duration-300">
                  <span className="inline-block px-2.5 py-0.5 bg-sky-50 border border-sky-200 text-sky-700 text-xs rounded-md mb-3">{course.tag}</span>
                  <h3 className="text-slate-900 font-semibold text-sm tracking-tight mb-2">{course.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">{course.desc}</p>
                  <ul className="space-y-1.5">
                    {course.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-slate-600 text-xs">
                        <svg className="w-3.5 h-3.5 text-sky-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-navy-900 p-6 md:p-8">
            <h2 className="text-white font-semibold text-xl tracking-tight mb-2">SIAEP 연계 취업 경로</h2>
            <p className="text-white/50 text-sm mb-6">Singapore Airlines Engineering Pte Ltd</p>
            <div className="flex flex-col md:flex-row items-stretch gap-3">
              {[
                { step: "1", text: "EASA 자격증 취득" },
                { step: "2", text: "SIAEP 주니어 정비공" },
                { step: "3", text: "글로벌 항공사 취업" },
              ].map((item, i, arr) => (
                <div key={item.step} className="flex items-center gap-3 flex-1">
                  <div className="flex-1 rounded-xl bg-white/[0.06] border border-white/[0.1] p-4 text-center">
                    <div className="text-sky-accent text-xs font-bold mb-1">Step {item.step}</div>
                    <div className="text-white text-sm font-medium">{item.text}</div>
                  </div>
                  {i < arr.length - 1 && (
                    <svg className="w-4 h-4 text-white/20 shrink-0 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
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
