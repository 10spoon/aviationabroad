import PageHero from "@/components/PageHero";

export const metadata = { title: "오시는 길 | 항공유학 인사이트엣지" };

export default function LocationPage() {
  return (
    <>
      <PageHero label="(주)인사이트엣지" title="오시는 길" description="서울 강남구에서 365일 상담을 운영하고 있습니다." />

      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="rounded-2xl overflow-hidden border border-slate-200 h-80 md:h-96 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.5024!2d127.0527593!3d37.5020583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDMwJzA3LjQiTiAxMjfCsDAzJzA5LjkiRQ!5e0!3m2!1sko!2skr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm space-y-4">
              <h3 className="text-slate-900 font-bold text-lg">주소 및 연락처</h3>
              <div className="space-y-3">
                {[
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />,
                    label: "주소", value: "서울특별시 강남구 선릉로76길 27, 2층",
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                    label: "전화", value: "02-568-3111", href: "tel:025683111",
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />,
                    label: "팩스", value: "02-501-9875",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600 shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">{item.icon}</svg>
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-slate-700 text-sm hover:text-sky-600 transition-colors">{item.value}</a>
                      ) : (
                        <div className="text-slate-700 text-sm">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm space-y-4">
              <h3 className="text-slate-900 font-bold text-lg">운영시간 및 상담</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2.5 border-b border-slate-100">
                  <span className="text-slate-500 text-sm">평일·주말</span>
                  <span className="text-slate-900 text-sm font-medium">09:00 ~ 21:00</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-slate-100">
                  <span className="text-slate-500 text-sm">점심시간</span>
                  <span className="text-slate-900 text-sm font-medium">12:00 ~ 13:00</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-slate-100">
                  <span className="text-slate-500 text-sm">365일</span>
                  <span className="text-sky-600 text-sm font-medium">연중무휴</span>
                </div>
                <div className="pt-2">
                  <a href="https://pf.kakao.com/_hh6900" target="_blank" rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-yellow-400 hover:bg-yellow-300 text-slate-900 text-sm font-medium rounded-xl transition-colors">
                    카카오톡 @hh6900 으로 상담하기
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
            <h3 className="text-slate-900 font-bold text-lg mb-4">교통 안내</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-600">
              <div>
                <div className="text-slate-900 font-medium mb-1">지하철</div>
                <p className="leading-relaxed">2호선 선릉역 또는 역삼역 하차<br />도보 약 5~10분</p>
              </div>
              <div>
                <div className="text-slate-900 font-medium mb-1">버스</div>
                <p className="leading-relaxed">선릉역 정류장 하차 후<br />선릉로76길 방면 이동</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
