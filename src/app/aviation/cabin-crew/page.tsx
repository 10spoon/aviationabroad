import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";

export const metadata = { title: "승무원 유학 | 항공유학 인사이트엣지" };

const programs = [
  { name: "ACE 프로그램", full: "Airline Cabin Crew English", desc: "국내외 항공사 면접에 특화된 영어 교육 프로그램. 항공사 면접 상황별 롤플레이, 영어 발표, 비즈니스 영어 등을 집중 훈련합니다." },
  { name: "파워스피킹 7", full: "Power Speaking 7", desc: "1:1 집중 7시간 영어 스피킹 훈련. 발음 교정부터 자연스러운 회화까지 단기간에 영어 실력을 향상시킵니다." },
  { name: "일반 영어 과정", full: "General English", desc: "하루 최대 10시간 영어 수업. 아침 7시부터 저녁까지 총 11개 레슨 진행. 필리핀 영어 공용 환경에서의 완전 몰입 교육." },
];

const grades = [
  { code: "CSD", name: "사무장", desc: "Chief Steward/Stewardess. 객실 최고 책임자" },
  { code: "CS", name: "부사무장", desc: "Cabin Supervisor. 사무장 보좌 및 팀 관리" },
  { code: "F1", name: "1등석 담당", desc: "First Class 서비스 전담 승무원" },
  { code: "F2", name: "비즈니스석", desc: "Business Class 서비스 전담 승무원" },
  { code: "L4", name: "일반석", desc: "이코노미 클래스 및 갤리 담당 승무원" },
];

export default function CabinCrewPage() {
  return (
    <>
      <PageHero label="항공유학" title="승무원 유학" description="글로벌 항공사 취업을 목표로 한 영어 집중 승무원 양성 프로그램" />

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">

          <div className="rounded-2xl bg-white border border-slate-900/[0.08] shadow-sm p-6 md:p-8">
            <h2 className="text-slate-900 font-semibold text-xl tracking-tight mb-4">객실 승무원이란?</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              객실 승무원(Cabin Crew)은 항공기 운항 중 객실 내 안전 관리 및 고객 서비스를 담당하는 항공업무종사자입니다. 안전 절차 숙지, 비상 상황 대응, 기내 서비스 제공이 주요 업무이며, 국제선 운항 시 외국어 능력이 매우 중요합니다.
            </p>
          </div>

          <div>
            <h2 className="text-slate-900 font-semibold text-xl tracking-tight mb-5">직급 체계</h2>
            <div className="space-y-2">
              {grades.map((grade, i) => (
                <div key={grade.code} className="group flex items-center gap-4 rounded-xl bg-white border border-slate-900/[0.08] shadow-sm px-5 py-4 hover:border-sky-200 hover:shadow-md transition-all duration-300">
                  <div className="w-7 h-7 rounded-lg bg-sky-50 group-hover:bg-sky-100 flex items-center justify-center text-sky-700 text-xs font-bold shrink-0 transition-colors duration-300">{i + 1}</div>
                  <div className="w-10 shrink-0"><span className="text-sky-600 font-bold text-xs">{grade.code}</span></div>
                  <div className="flex-1">
                    <span className="text-slate-900 font-medium text-sm">{grade.name}</span>
                    <span className="text-slate-400 text-xs ml-2">— {grade.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-slate-900 font-semibold text-xl tracking-tight mb-2">Jocson College 교육 프로그램</h2>
            <p className="text-slate-400 text-sm mb-5">필리핀 클락의 영어 몰입 환경에서 항공사 면접에 특화된 교육을 받습니다.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {programs.map((prog) => (
                <div key={prog.name} className="group rounded-2xl bg-white border border-slate-900/[0.08] shadow-sm p-5 hover:shadow-md hover:border-sky-200 transition-all duration-300">
                  <div className="text-sky-600 text-xs font-medium mb-1">{prog.full}</div>
                  <h3 className="text-slate-900 font-semibold text-sm tracking-tight mb-3">{prog.name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{prog.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 border border-slate-900/[0.06] p-6 md:p-8">
            <h2 className="text-slate-900 font-semibold text-xl tracking-tight mb-5">교육 특징</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: "🕗", title: "하루 최대 10시간 영어 수업", desc: "아침 7시부터 체계적 스케줄" },
                { icon: "👤", title: "1:1 집중 수업", desc: "파워스피킹 7시간 1:1 트레이닝" },
                { icon: "✈️", title: "항공사 특화 영어", desc: "ACE 프로그램으로 실전 면접 준비" },
                { icon: "🌍", title: "영어 공용어 환경", desc: "필리핀 현지에서 완전 몰입 교육" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <div>
                    <div className="text-slate-900 font-medium text-sm mb-0.5">{item.title}</div>
                    <div className="text-slate-500 text-xs">{item.desc}</div>
                  </div>
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
