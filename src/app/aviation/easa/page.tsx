import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";

export const metadata = { title: "EASA 자격증 | 항공유학 인사이트엣지" };

const certTypes = [
  { code: "A1", name: "Category A1", desc: "터빈 항공기에 대한 제한적 정비 작업 수행. 라인 정비 환경에서의 간단한 결함 수정 및 교체 작업.", career: "2~3년" },
  { code: "B1", name: "Category B1", desc: "동체, 엔진, 전기 계통, LRU 교체 및 간단한 테스트. B1.1~B1.4 4가지 세부 분류.", career: "4~5년" },
  { code: "B2", name: "Category B2", desc: "항공전자 및 전기 시스템 정비. 항공기 전자장비, 통신장비, 항법장비의 정비 및 인증.", career: "4~5년" },
  { code: "C", name: "Category C", desc: "대형 항공기 전체 정비 인증. B1 또는 B2 자격 취득 후 3년 이상 항공사 정비 경력 필요.", career: "B1/B2 취득 후 3년+" },
];

export default function EasaPage() {
  return (
    <>
      <PageHero label="항공유학" title="EASA 자격증" description="유럽항공안전기구(EASA)가 발행하는 전 세계에서 가장 영향력 있는 항공정비사 자격증" />

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">

          <div className="rounded-2xl bg-white border border-slate-900/[0.08] shadow-sm p-6 md:p-8">
            <h2 className="text-slate-900 font-semibold text-xl tracking-tight mb-4">EASA란?</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              <strong className="text-slate-900">EASA(European Aviation Safety Agency)</strong>는 2003년 9월 28일 설립된 유럽항공안전기구로, 항공 안전 및 환경 보호를 위한 유럽연합의 규정을 제정하고 시행합니다.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              EASA Part-66 자격증은 현재 전 세계에서 가장 영향력 있는 항공정비사 자격증으로, <strong className="text-sky-600">175개국 이상</strong>에서 통용됩니다.
            </p>
          </div>

          <div>
            <h2 className="text-slate-900 font-semibold text-xl tracking-tight mb-5">자격증 종류</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {certTypes.map((cert) => (
                <div key={cert.code} className="group rounded-2xl bg-white border border-slate-900/[0.08] shadow-sm p-5 hover:shadow-md hover:border-sky-200 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 group-hover:bg-sky-100 flex items-center justify-center text-sky-700 font-bold text-sm transition-colors duration-300">{cert.code}</div>
                    <div className="text-slate-900 font-semibold text-sm tracking-tight">{cert.name}</div>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed mb-3">{cert.desc}</p>
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-slate-400 text-xs">경력 요건: <span className="text-slate-600">{cert.career}</span></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-slate-900/[0.08] shadow-sm p-6 md:p-8">
            <h2 className="text-slate-900 font-semibold text-xl tracking-tight mb-5">시험 정보</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "합격 기준", value: "75점 이상 / 100점 만점" },
                { label: "자격 유효기간", value: "10년" },
                { label: "시험 언어", value: "영어" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-slate-50 border border-slate-900/[0.06] p-4 text-center">
                  <div className="text-slate-400 text-xs mb-2">{item.label}</div>
                  <div className="text-slate-900 font-semibold text-sm">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-slate-900/[0.08] shadow-sm p-6 md:p-8">
            <h2 className="text-slate-900 font-semibold text-xl tracking-tight mb-5">경력 요건</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-900/[0.06]">
                    <th className="text-left py-3 pr-4 text-slate-400 font-medium text-xs">등급</th>
                    <th className="text-left py-3 pr-4 text-slate-400 font-medium text-xs">무경험자</th>
                    <th className="text-left py-3 pr-4 text-slate-400 font-medium text-xs">타 자격 취득자</th>
                    <th className="text-left py-3 text-slate-400 font-medium text-xs">EASA 147 교육 이수자</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-900/[0.04]">
                  {[
                    { cat: "CAT A", vals: ["3년", "2년", "1년"] },
                    { cat: "CAT B", vals: ["4~5년", "3~4년", "2~3년"] },
                  ].map((row) => (
                    <tr key={row.cat}>
                      <td className="py-3 pr-4 text-sky-600 font-medium">{row.cat}</td>
                      {row.vals.map((v, i) => <td key={i} className="py-3 pr-4 text-slate-600">{v}</td>)}
                    </tr>
                  ))}
                  <tr>
                    <td className="py-3 pr-4 text-sky-600 font-medium">CAT C</td>
                    <td className="py-3 text-slate-400" colSpan={3}>B1 또는 B2 자격 취득 후 항공사 정비 3년 경력</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
