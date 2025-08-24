"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import styled, { keyframes } from "styled-components";
import PageLayout from "../components/PageLayout";
import MouseTracker from "../components/MouseTracker";

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
/* 
const glow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px rgba(56, 189, 248, 0.3),
                0 0 40px rgba(56, 189, 248, 0.2),
                0 0 60px rgba(56, 189, 248, 0.1);
  }
  50% { 
    box-shadow: 0 0 30px rgba(56, 189, 248, 0.5),
                0 0 60px rgba(56, 189, 248, 0.3),
                0 0 90px rgba(56, 189, 248, 0.2);
  }
`;
 */
// 홈 페이지 전용 Subtitle 스타일 (이름 제거)
const HomeSubtitle = styled.p`
  font-size: 2rem;
  max-width: 1000px;
  margin-bottom: 5rem;
  color: #e2e8f0;
  line-height: 1.8;
  opacity: 0.95;
  text-align: center;
  font-weight: 400;
  text-shadow: 0 2px 10px rgba(56, 189, 248, 0.3);
  letter-spacing: 0.5px;

  @media (max-width: 1024px) {
    font-size: 1.6rem;
    max-width: 900px;
    margin-bottom: 4rem;
  }

  @media (max-width: 767px) {
    font-size: 1.3rem;
    max-width: 800px;
    margin-bottom: 3rem;
  }
`;

// 타이핑 애니메이션 텍스트
const TypingText = styled.div`
  font-size: 1.4rem;
  color: #38bdf8;
  font-weight: 500;
  margin-bottom: 1rem;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid #38bdf8;
  animation: ${typing} 4s steps(25, end), ${blink} 1s step-end infinite;
  width: 0;
  animation-fill-mode: forwards;
  text-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
`;

// 애니메이션 컴포넌트들
const AnimatedSubtitle = styled(HomeSubtitle)`
  animation: ${fadeInUp} 1.5s ease-out 0.3s both;
  font-size: 2rem;
  font-weight: 700;

  span {
    display: inline-flex;
    overflow: hidden;
    white-space: nowrap;
    color: #38bdf8;
    border-right: 3px solid #38bdf8;
    animation: ${typing} 3s steps(15, end), ${blink} 1s step-end infinite;
  }
`;

// 하단 타이핑 텍스트 컨테이너
const TypingContainer = styled.div`
  margin-top: 6rem;
  text-align: center;
  animation: ${fadeInUp} 1.5s ease-out 2s both;
`;

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    document.title = "이성운 - 웹 개발자 포트폴리오";
  }, []);

  if (!isClient) return null;

  return (
    <PageLayout variant="home">
      <Head>
        <title>이성운 - 웹 개발자 포트폴리오</title>
      </Head>

      {/* 마우스 추적 요소 */}
      <MouseTracker />

      <AnimatedSubtitle>
        사용자의 즐거운 경험을 설계하는
        <span>웹 개발자 이성운입니다.</span>
        <br />
        복잡한 문제일수록 단순하고 명쾌한 UI로 풀어내는 것을 즐기며,
        <br />
        일상에 작은 영감을 주는 인터랙션을 구현합니다.
      </AnimatedSubtitle>

      {/* 타이핑 애니메이션 텍스트 */}
      <TypingContainer>
        <TypingText>Welcome to my portfolio...</TypingText>
      </TypingContainer>
    </PageLayout>
  );
}
