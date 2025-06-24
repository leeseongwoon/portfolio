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
