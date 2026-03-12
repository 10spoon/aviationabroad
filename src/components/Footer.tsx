import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-border-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-sky-accent/10 border border-sky-accent/30 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-sky-accent">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
              </div>
              <div>
                <div className="text-text-primary font-bold text-sm">인사이트엣지</div>
                <div className="text-text-muted text-xs">항공유학 전문</div>
              </div>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              나의 꿈에 비상의 날개를 달아라!<br />
              항공정비·승무원·조종사 유학 전문 기관
            </p>
          </div>

          {/* 회사 소개 */}
          <div>
            <h3 className="text-text-secondary text-sm font-semibold mb-4">회사 소개</h3>
            <ul className="space-y-2">
              {[
                { label: "CEO 인사", href: "/about/ceo" },
                { label: "회사연혁", href: "/about/history" },
                { label: "MOA·MOU", href: "/about/moa-mou" },
                { label: "오시는 길", href: "/about/location" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-text-muted text-sm hover:text-sky-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 항공유학 */}
          <div>
            <h3 className="text-text-secondary text-sm font-semibold mb-4">항공유학</h3>
            <ul className="space-y-2">
              {[
                { label: "EASA 자격증", href: "/aviation/easa" },
                { label: "항공정비 유학", href: "/aviation/maintenance" },
                { label: "승무원 유학", href: "/aviation/cabin-crew" },
                { label: "조종사 유학", href: "/aviation/pilot" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-text-muted text-sm hover:text-sky-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="text-text-secondary text-sm font-semibold mb-4">상담 문의</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:025683111"
                  className="flex items-center gap-2 text-text-muted text-sm hover:text-sky-accent transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  02-568-3111
                </a>
              </li>
              <li className="text-text-muted text-sm pl-6">
                평일·주말 09:00~21:00
              </li>
              <li>
                <span className="flex items-center gap-2 text-text-muted text-sm">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  서울 강남구 선릉로76길 27, 2층
                </span>
              </li>
              <li>
                <a
                  href="https://pf.kakao.com/_hh6900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-yellow-400/70 text-sm hover:text-yellow-400 transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.53 1.554 4.77 3.906 6.094L5 21l4.688-2.344A12.06 12.06 0 0012 19c5.523 0 10-3.477 10-7.5S17.523 3 12 3z"/>
                  </svg>
                  카카오톡 @hh6900
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border-navy flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © 2024 (주)인사이트엣지. All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            대표: 허헌 · 사업자등록번호: 문의 요망 · 팩스: 02-501-9875
          </p>
        </div>
      </div>
    </footer>
  );
}
