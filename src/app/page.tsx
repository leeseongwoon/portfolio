'use client';

// import Image from "next/image";
// import styles from "./page.module.css";
import { Main, Title, Subtitle, TechStack, TechItem, CTAButton } from '../styles/HomeStyles';
import { useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  useEffect(() => {
    // 페이지 타이틀 설정
    document.title = "이성운 - 프론트엔드 개발자 포트폴리오";
  }, []);

  return (
    <Main>
      <Head>
        <title>이성운 - 프론트엔드 개발자 포트폴리오</title>
      </Head>
      <Title>
        안녕하세요,<br />저는 <span style={{ color: '#38bdf8' }}>프론트엔드 개발자</span><br />이성운입니다.
      </Title>
      <Subtitle>
        사용자 경험을 최우선으로 생각하며,<br />깔끔하고 효율적인 UI 개발을 지향합니다.<br />React, Next.js, TypeScript, Styled-Component를 주로 사용합니다.
      </Subtitle>
      <TechStack>
        <TechItem>HTML</TechItem>
        <TechItem>CSS</TechItem>
        <TechItem>JavaScript</TechItem>
        <TechItem>React</TechItem>
        <TechItem>Next.js</TechItem>
        <TechItem>TypeScript</TechItem>
        <TechItem>Styled-Component</TechItem>
        <TechItem>css.modules</TechItem>
        <TechItem>Firebase</TechItem>
      </TechStack>
      <CTAButton href="/projects">
        프로젝트 보러가기 →
      </CTAButton>
    </Main>
  );
}
