'use client';

import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import GlobalStyle from "@/styles/GlobalStyle";
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import StyledComponentsRegistry from '@/lib/registry';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  border-bottom: 1px solid #f8f9fa;
  font-size: 1.2rem;
  font-weight: 700;
`;

function Navbar() {
  return (
    <NavStyle>
      <Link href="/">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </NavStyle>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>이성운 - 프론트엔드 개발자 포트폴리오</title>
        <meta name="description" content="React, Next.js, TypeScript를 주로 사용하는 프론트엔드 개발자 이성운의 포트폴리오입니다." />
        <meta name="keywords" content="이성운, 포트폴리오, 프론트엔드, 프론트엔드 개발자, 이성운 포트폴리오, 이성운 프론트엔드, 프론트엔드 포트폴리오, 퍼블리셔, 퍼블리셔 포트폴리오, React, Next.js, TypeScript, 웹 개발자" />
        <meta name="author" content="이성운" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph 태그 */}
        <meta property="og:title" content="이성운 - 프론트엔드 개발자 포트폴리오" />
        <meta property="og:description" content="React, Next.js, TypeScript를 주로 사용하는 프론트엔드 개발자 이성운의 포트폴리오입니다." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com" />
        <meta property="og:image" content="https://your-domain.com/og-image.jpg" />
        
        {/* Twitter Card 태그 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="이성운 - 프론트엔드 개발자 포트폴리오" />
        <meta name="twitter:description" content="React, Next.js, TypeScript를 주로 사용하는 프론트엔드 개발자 이성운의 포트폴리오입니다." />
        
        {/* 추가 SEO 태그 */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://your-domain.com" />
        
        {/* 구조화된 데이터 (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "이성운",
              "jobTitle": "프론트엔드 개발자",
              "description": "React, Next.js, TypeScript를 주로 사용하는 프론트엔드 개발자",
              "url": "https://your-domain.com",
              "sameAs": [
                "https://github.com/leeseongwoon"
              ],
              "knowsAbout": [
                "React",
                "Next.js", 
                "TypeScript",
                "JavaScript",
                "HTML",
                "CSS",
                "Styled-Components",
                "Firebase"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "프리랜서"
              }
            })
          }}
        />
        
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={{}}>
            <GlobalStyle />
            <Navbar />
            {children}
            <SpeedInsights />
            <Analytics />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
