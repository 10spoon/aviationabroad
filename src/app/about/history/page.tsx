import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";

export const metadata = { title: "회사연혁 | 항공유학 인사이트엣지" };

const history = [
  { year: "2017", events: ["항공유학 114 설립"] },
  { year: "2018", events: ["Jocson College 한국입학처 설립"] },
  { year: "2020", events: ["(주)인사이트엣지 설립", "강남구학원연합회 B2B 파트너십 참여"] },
  { year: "2021", events: ["(주)인사이트엣지 강남 확장 이전"] },
  { year: "2022", events: ["Jocson College & Gentry International Technical College(GITC)와 MOA 협정 체결"] },
];

export default function HistoryPage() {
  return (
    <>
      <PageHero label="(주)인사이트엣지" title="회사연혁" description="2017년 설립 이후 글로벌 항공교육 파트너십을 구축해왔습니다." />

      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-16 md:left-20 top-0 bottom-0 w-px bg-slate-200" />

            <div className="space-y-8">
              {history.map((item) => (
                <div key={item.year} className="relative flex gap-8 md:gap-12">
                  <div className="w-16 md:w-20 shrink-0 pt-1 text-right">
                    <span className="text-sky-600 font-bold text-sm">{item.year}</span>
                  </div>
                  <div className="absolute left-16 md:left-20 top-2 w-2.5 h-2.5 rounded-full bg-sky-500 border-2 border-white shadow -translate-x-1/2" />
                  <div className="flex-1 space-y-3 pb-2">
                    {item.events.map((event, i) => (
                      <div key={i} className="rounded-xl bg-white border border-slate-200 px-5 py-4 text-slate-600 text-sm leading-relaxed shadow-sm hover:border-sky-200 transition-colors">
                        {event}
                      </div>
                    ))}
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
