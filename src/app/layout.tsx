import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "항공유학 인사이트엣지 | 항공정비·승무원·조종사 유학 전문",
  description:
    "EASA 자격증 기반 항공정비, 승무원, 조종사 유학 전문 기관. 필리핀 Jocson College 한국입학처. 싱가폴항공 SLAEP 인턴십. 서울 강남구, 365일 상담.",
  keywords: "항공유학, EASA자격증, 항공정비유학, 승무원유학, 조종사유학, 인사이트엣지, Jocson College",
  openGraph: {
    title: "항공유학 인사이트엣지",
    description: "항공정비·승무원·조종사 유학 전문 기관",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
