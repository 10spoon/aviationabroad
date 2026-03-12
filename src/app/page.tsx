import Link from "next/link";
import ContactCTA from "@/components/ContactCTA";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-sky-600">
        <path d="M22.5 6.908c-.5-1.717-2.2-2.5-3.9-1.767L14.5 7l-8-4-2 .667 5.333 4.666-3.666 1.334-2-1.334-1.5.5 2.5 3.5 1.5.5 4-1.334 5.333 9.334 2-.667-2-10 4.167-1.666c1.666-.667 2.833-2.1 2.333-3.292z" />
      </svg>
    ),
    label: "EASA · 항공정비 · 승무원 · 조종사",
    title: "항공유학 프로그램",
    desc: "필리핀 Jocson College와 연계하여 EASA 자격증 취득, 승무원·조종사 양성 등 체계적인 항공유학 커리큘럼을 제공합니다.",
    links: [
      { label: "EASA 자격증", href: "/aviation/easa" },
      { label: "항공정비 유학", href: "/aviation/maintenance" },
      { label: "승무원 유학", href: "/aviation/cabin-crew" },
      { label: "조종사 유학", href: "/aviation/pilot" },
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-sky-600">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
    label: "싱가폴항공 SLAEP · 루프트한자",
    title: "항공정비 인턴십",
    desc: "싱가폴항공 엔지니어링(SIAEP) SLAEP 프로그램과 루프트한자를 통해 글로벌 항공정비 현장에서 실무 경험을 쌓으세요.",
    links: [
      { label: "싱가폴항공 SLAEP", href: "/intern/singapore" },
      { label: "루프트한자", href: "/intern/lufthansa" },
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-sky-600">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
    label: "CEO 인사 · 연혁 · MOA·MOU",
    title: "인사이트엣지 소개",
    desc: "2017년 설립 이후 Jocson College, SIAEP 등 글로벌 파트너십을 구축하며 항공유학 전문 기관으로 성장했습니다.",
    links: [
      { label: "CEO 인사", href: "/about/ceo" },
      { label: "회사연혁", href: "/about/history" },
      { label: "오시는 길", href: "/about/location" },
    ],
  },
];

const stats = [
  { value: "2017", label: "설립연도" },
  { value: "EASA", label: "국제 자격증 연계" },
  { value: "365일", label: "상담 가능" },
  { value: "강남", label: "서울 강남구" },
];

const partners = [
  { name: "Jocson College", desc: "필리핀 항공전문 대학 · 1950년 설립" },
  { name: "SIAEP", desc: "싱가폴항공 엔지니어링 · EASA 인증" },
  { name: "Alpha Aviation", desc: "조종사 유학 파트너" },
  { name: "Omni Aviation", desc: "조종사 유학 파트너" },
];

const careerSteps = [
  {
    step: "01",
    title: "Jocson College 입학",
    desc: "필리핀 클락 소재, 1950년 설립. 2년제 또는 4년제 항공정비학과",
  },
  {
    step: "02",
    title: "EASA 자격증 취득",
    desc: "A1·B1·B2·C 등급. 전 세계 175개국 통용 항공정비 자격증",
  },
  {
    step: "03",
    title: "SIAEP 인턴십",
    desc: "싱가폴항공 엔지니어링. EASA 145-MRO 인증. 실무 정비 현장",
  },
  {
    step: "04",
    title: "글로벌 항공사 취업",
    desc: "국내외 항공사 정비직 취업. 주니어 정비공으로 커리어 시작",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-50 border border-sky-200 rounded-full text-sky-700 text-xs font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
              항공유학 전문 기관 · 서울 강남 · 365일 상담
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              나의 꿈에
              <br />
              <span className="text-sky-600">비상의 날개</span>를 달아라
            </h1>

            <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              EASA 자격증 기반 항공정비, 승무원, 조종사 유학의 모든 것.
              <br />
              인사이트엣지가 여러분의 항공 커리어를 설계합니다.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:025683111"
                className="flex items-center gap-2.5 px-7 py-4 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                무료 전화 상담
              </a>
              <a
                href="https://pf.kakao.com/_hh6900"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-7 py-4 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-semibold rounded-xl transition-colors text-sm"
              >
                카카오톡 @hh6900
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-slate-50 border border-slate-200 p-4"
              >
                <div className="text-2xl font-bold text-sky-600 mb-1">{stat.value}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 rounded-full text-sky-700 text-xs font-medium mb-4">
              프로그램
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              항공 커리어의 시작
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl bg-white border border-slate-200 p-6 hover:border-sky-300 hover:shadow-md transition-all duration-300 shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-50 flex items-center justify-center mb-5 group-hover:bg-sky-100 transition-colors">
                  {service.icon}
                </div>
                <div className="text-sky-600 text-xs font-medium mb-2">{service.label}</div>
                <h3 className="text-slate-900 text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-200 text-slate-600 hover:text-sky-600 text-xs rounded-lg transition-all"
                    >
                      {link.label}
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Path */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 rounded-full text-sky-700 text-xs font-medium mb-4">
              취업 경로
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              항공정비사 취업까지의 여정
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4 relative">
            {careerSteps.map((item, i) => (
              <div key={item.step} className="relative">
                <div className="rounded-2xl bg-white border border-slate-200 p-6 h-full shadow-sm hover:shadow-md hover:border-sky-200 transition-all">
                  <div className="text-sky-600 text-xs font-bold mb-3">{item.step}</div>
                  <div className="text-slate-900 font-bold text-sm mb-2">{item.title}</div>
                  <div className="text-slate-500 text-xs leading-relaxed">{item.desc}</div>
                </div>
                {i < careerSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                    <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 rounded-full text-sky-700 text-xs font-medium mb-4">
              협력 기관
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              글로벌 파트너와 함께합니다
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="rounded-xl bg-slate-50 border border-slate-200 p-5 hover:border-sky-200 hover:bg-sky-50/50 transition-colors"
              >
                <div className="text-slate-900 font-bold text-sm mb-1.5">{partner.name}</div>
                <div className="text-slate-500 text-xs leading-relaxed">{partner.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
