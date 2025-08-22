"use client";

import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import GlobalStyle from "@/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import StyledComponentsRegistry from "@/lib/registry";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import ParticleBackground from "@/components/ParticleBackground";
import { useState, useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const HeaderStyle = styled.header`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all 0.3s ease;
  transform: translateY(0);

  /* 스크롤 시 자연스럽게 사라짐 */
  &.scrolled {
    transform: translateY(-100%);
  }

  @media (max-width: 1024px) {
    padding: 0.8rem 1.5rem;
  }

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0.7rem 1rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: #e2e8f0;
  position: relative;
  text-decoration: none;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;

  &:hover {
    color: #38bdf8;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;



const NavText = styled.span`
  width: 100%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #38bdf8, #0ea5e9);
    transition: width 0.3s ease;
    border-radius: 1px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 0.2rem;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #e2e8f0;
  padding: 0.8rem 1.2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);

  /* 독특한 호버 효과 */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(56, 189, 248, 0.1),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    color: #38bdf8;
    background: rgba(56, 189, 248, 0.08);
    border-color: rgba(56, 189, 248, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(56, 189, 248, 0.15);

    &::before {
      left: 100%;
    }

    &::after {
      width: 80%;
    }

    ${NavText}::after {
      width: 100%;
    }
  }

  &.active {
    color: #38bdf8;
    background: rgba(56, 189, 248, 0.12);
    border-color: rgba(56, 189, 248, 0.4);

    &::after {
      width: 80%;
    }
  }

  @media (max-width: 1024px) {
    padding: 0.7rem 1rem;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 0.8rem;
    font-size: 0.9rem;
    border-radius: 8px;
  }
`;

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 스크롤이 100px 이상일 때만 헤더 숨김 로직 적용
      if (currentScrollY > 100) {
        // 아래로 스크롤할 때 헤더 숨김
        if (currentScrollY > lastScrollY) {
          setIsScrolled(true);
        }
        // 위로 스크롤할 때 헤더 보임
        else {
          setIsScrolled(false);
        }
      } else {
        // 상단 근처에서는 항상 헤더 보임
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <HeaderStyle className={isScrolled ? "scrolled" : ""}>
      <Logo href="/">
        이성운
      </Logo>
      <NavLinks>
        <NavLink href="/">
          <NavText>Home</NavText>
        </NavLink>
        <NavLink href="/about">
          <NavText>About</NavText>
        </NavLink>
        <NavLink href="/projects">
          <NavText>Projects</NavText>
        </NavLink>
        <NavLink href="/career">
          <NavText>Career</NavText>
        </NavLink>
        <NavLink href="/contact">
          <NavText>Contact</NavText>
        </NavLink>
      </NavLinks>
    </HeaderStyle>
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
        <meta
          name="description"
          content="React, Next.js, TypeScript를 주로 사용하는 웹 개발자 이성운의 포트폴리오입니다."
        />
        <meta
          name="keywords"
          content="이성운, 포트폴리오, 프론트엔드, 프론트엔드 개발자, 이성운 포트폴리오, 이성운 프론트엔드, 프론트엔드 포트폴리오, 이성운 웹개발자, 웹개발자, 웹개발자 포트폴리오, 이성운 퍼블리셔, 퍼블리셔, 퍼블리셔 포트폴리오, React, Next.js, TypeScript, 웹 개발자"
        />
        <meta name="author" content="이성운" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph 태그 */}
        <meta property="og:title" content="이성운 - 웹 개발자 포트폴리오" />
        <meta
          property="og:description"
          content="React, Next.js, TypeScript를 주로 사용하는 프론트엔드 개발자 이성운의 포트폴리오입니다."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com" />
        <meta
          property="og:image"
          content="https://your-domain.com/og-image.jpg"
        />

        {/* Twitter Card 태그 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="이성운 - 프론트엔드 개발자 포트폴리오"
        />
        <meta
          name="twitter:description"
          content="React, Next.js, TypeScript를 주로 사용하는 프론트엔드 개발자 이성운의 포트폴리오입니다."
        />

        {/* 추가 SEO 태그 */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://your-domain.com" />
        <meta
          name="naver-site-verification"
          content="7696abbf7828e9d61cc324117172e6908cae0e8b"
        />

        {/* 구조화된 데이터 (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "이성운",
              jobTitle: "프론트엔드 개발자",
              description:
                "React, Next.js, TypeScript를 주로 사용하는 프론트엔드 개발자",
              url: "https://your-domain.com",
              sameAs: ["https://github.com/leeseongwoon"],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "HTML",
                "CSS",
                "Styled-Components",
                "Firebase",
              ],
              worksFor: {
                "@type": "Organization",
                name: "프리랜서",
              },
            }),
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
            <ParticleBackground />
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
