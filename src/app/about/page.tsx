'use client';

import { TechStack, TechItem, CTAButton } from '../../styles/HomeStyles';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import styled, { keyframes } from 'styled-components';
import PageLayout from '../../components/PageLayout';

// 애니메이션 키프레임들
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  0%, 50% { border-color: transparent; }
  51%, 100% { border-color: #38bdf8; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// About 페이지 전용 Title 스타일 (원래의 화려한 스타일 복원)
const AboutTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: 900;
  margin-bottom: 2.5rem;
  letter-spacing: -3px;
  line-height: 1.1;
  text-shadow: 0 4px 20px rgba(56, 189, 248, 0.3);
  text-align: center;
  position: relative;

  @media (max-width: 1024px) {
    font-size: 3.5rem;
    margin-bottom: 2rem;
    letter-spacing: -2px;
  }

  @media (max-width: 767px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    letter-spacing: -1px;
    text-shadow: none;
  }
`;

// About 페이지 전용 Subtitle 스타일
const AboutSubtitle = styled.p`
  font-size: 1.4rem;
  max-width: 800px;
  margin-bottom: 3rem;
  color: #e2e8f0;
  line-height: 1.6;
  opacity: 0.9;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
    max-width: 700px;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 767px) {
    font-size: 1.1rem;
    max-width: 600px;
    margin-bottom: 2rem;
  }
`;

// 애니메이션 컴포넌트들
const AnimatedTitle = styled(AboutTitle)`
  animation: ${fadeInUp} 1s ease-out;
  
  span {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    border-right: 3px solid #38bdf8;
    animation: ${typing} 3s steps(20, end), ${blink} 1s step-end infinite;
  }
`;

const AnimatedSubtitle = styled(AboutSubtitle)`
  animation: ${fadeInUp} 1s ease-out 0.5s both;
`;

const AnimatedTechStack = styled(TechStack)`
  animation: ${fadeInUp} 1s ease-out 1s both;
`;

const AnimatedTechItem = styled(TechItem)`
  animation: ${float} 3s ease-in-out infinite;
  
  &:hover {
    animation: ${pulse} 0.5s ease-in-out;
    transform: scale(1.1);
    box-shadow: 0 10px 25px rgba(56, 189, 248, 0.3);
  }
`;

const AnimatedCTAButton = styled(CTAButton)`
  animation: ${fadeInUp} 1s ease-out 1.5s both;
  background: linear-gradient(-45deg, #38bdf8, #0ea5e9, #0284c7, #0369a1);
  background-size: 400% 400%;
  animation: ${fadeInUp} 1s ease-out 1.5s both, ${gradient} 3s ease infinite;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(56, 189, 248, 0.4);
  }
`;

export default function About() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    document.title = "About - 이성운 포트폴리오";
  }, []);

  if (!isClient) return null;

  return (
    <PageLayout variant="home">
      <Head>
        <title>About - 이성운 포트폴리오</title>
      </Head>

      
      <AnimatedTitle>
        안녕하세요,<br />
        저는 <span style={{ color: '#38bdf8' }}>웹 개발자</span><br />
        이성운입니다.
      </AnimatedTitle>
      
      <AnimatedSubtitle>
        사용자 경험을 최우선으로 생각하며,<br />
        깔끔하고 효율적인 UI 개발을 지향합니다.<br />
        React, Next.js, TypeScript, Styled-Component를 주로 사용합니다.
      </AnimatedSubtitle>
      
      <AnimatedTechStack>
        <AnimatedTechItem>HTML</AnimatedTechItem>
        <AnimatedTechItem>CSS</AnimatedTechItem>
        <AnimatedTechItem>JavaScript</AnimatedTechItem>
        <AnimatedTechItem>React</AnimatedTechItem>
        <AnimatedTechItem>Next.js</AnimatedTechItem>
        <AnimatedTechItem>TypeScript</AnimatedTechItem>
        <AnimatedTechItem>Styled-Component</AnimatedTechItem>
        <AnimatedTechItem>Firebase</AnimatedTechItem>
      </AnimatedTechStack>
      
      <AnimatedCTAButton href="/projects">
        프로젝트 보러가기 →
      </AnimatedCTAButton>
    </PageLayout>
  );
}
