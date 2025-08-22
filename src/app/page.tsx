"use client";

import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import styled, { keyframes } from "styled-components";
import PageLayout from "../components/PageLayout";

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

// 인터랙티브 카드들 (보더 완전 제거)
const InteractiveCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 4rem;
  max-width: 1400px;
  width: 100%;
  margin-top: 4rem;
  perspective: 1200px;
`;

// 3D 회전 카드 (보더 없이 그라데이션만)
const RotatingCard = styled.div<{ $rotation: number }>`
  width: 100%;
  height: 350px;
  background: linear-gradient(
    135deg,
    rgba(56, 189, 248, 0.08),
    rgba(14, 165, 233, 0.04),
    rgba(6, 182, 212, 0.06)
  );
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  transform: rotateY(${(props) => props.$rotation}deg)
    rotateX(${(props) => props.$rotation * 0.05}deg);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);
  animation: ${glow} 4s ease-in-out infinite;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 30px;
    background: linear-gradient(
      135deg,
      rgba(56, 189, 248, 0.1),
      rgba(14, 165, 233, 0.05),
      rgba(6, 182, 212, 0.08)
    );
    opacity: 0;
    transition: opacity 0.6s ease;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 30px;
    background: radial-gradient(
      circle at 50% 0%,
      rgba(56, 189, 248, 0.15),
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.6s ease;
  }

  &:hover {
    transform: rotateY(${(props) => props.$rotation + 20}deg)
      rotateX(${(props) => props.$rotation * 0.05 + 8}deg) scale(1.08);
    background: linear-gradient(
      135deg,
      rgba(56, 189, 248, 0.15),
      rgba(14, 165, 233, 0.08),
      rgba(6, 182, 212, 0.12)
    );

    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    height: 300px;
    border-radius: 25px;
  }
`;

// 마우스 추적 요소 (더 부드럽게)
const MouseTracker = styled.div<{ $x: number; $y: number }>`
  position: fixed;
  width: 30px;
  height: 30px;
  background: radial-gradient(
    circle,
    rgba(56, 189, 248, 0.6),
    rgba(56, 189, 248, 0.2),
    transparent
  );
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(${(props) => props.$x}px, ${(props) => props.$y}px);
  transition: transform 0.15s ease;
  mix-blend-mode: screen;
  filter: blur(1px);
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

// 카드 제목 (보더 없이 그라데이션)
const CardTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #38bdf8, #0ea5e9, #06b6d4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  text-shadow: none;
`;

// 카드 설명 (더 부드럽게)
const CardDescription = styled.p`
  font-size: 1.1rem;
  color: #d1d5db;
  text-align: center;
  line-height: 1.7;
  opacity: 0.9;
  max-width: 280px;
  font-weight: 400;
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
    animation: ${typing} 3s steps(20, end), ${blink} 1s step-end infinite;
  }
`;

const AnimatedInteractiveCards = styled(InteractiveCards)`
  animation: ${fadeInUp} 1.5s ease-out 0.8s both;
`;

const AnimatedRotatingCard = styled(RotatingCard)`
  animation: ${fadeInUp} 1.5s ease-out 1s both;

  &:nth-child(2) {
    animation-delay: 1.3s;
  }

  &:nth-child(3) {
    animation-delay: 1.6s;
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cardRotations, setCardRotations] = useState([0, 0, 0]);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
    document.title = "이성운 - 웹 개발자 포트폴리오";
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX - 15, y: e.clientY - 15 });
    };

    const handleScroll = () => {
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        Array.from(cards).forEach((card, index) => {
          const rect = card.getBoundingClientRect();
          const scrollProgress =
            (window.innerHeight - rect.top) / window.innerHeight;
          if (scrollProgress > 0 && scrollProgress < 1) {
            setCardRotations((prev) => {
              const newRotations = [...prev];
              newRotations[index] = scrollProgress * 360;
              return newRotations;
            });
          }
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isClient) return null;

  return (
    <PageLayout variant="home">
      <Head>
        <title>이성운 - 웹 개발자 포트폴리오</title>
      </Head>

      {/* 마우스 추적 요소 */}
      <MouseTracker $x={mousePosition.x} $y={mousePosition.y} />

      <AnimatedSubtitle>
        사용자의 즐거운 경험을 설계하는
        <span>웹 개발자 이성운입니다.</span>
        <br />
        복잡한 문제일수록 단순하고 명쾌한 UI로 풀어내는 것을 즐기며,
        <br />
        일상에 작은 영감을 주는 인터랙션을 구현합니다.
      </AnimatedSubtitle>

      <AnimatedInteractiveCards ref={cardsRef}>
        <AnimatedRotatingCard $rotation={cardRotations[0]}>
          <CardTitle>Creative Design</CardTitle>
          <CardDescription>
            사용자 경험을 고려한 창의적인 디자인과 인터랙션을 구현합니다
          </CardDescription>
        </AnimatedRotatingCard>

        <AnimatedRotatingCard $rotation={cardRotations[1]}>
          <CardTitle>Performance</CardTitle>
          <CardDescription>
            최적화된 코드와 빠른 로딩 속도를 제공하는 웹 애플리케이션을
            개발합니다
          </CardDescription>
        </AnimatedRotatingCard>

        <AnimatedRotatingCard $rotation={cardRotations[2]}>
          <CardTitle>Innovation</CardTitle>
          <CardDescription>
            최신 기술 트렌드를 활용하여 혁신적인 솔루션을 제공합니다
          </CardDescription>
        </AnimatedRotatingCard>
      </AnimatedInteractiveCards>

      {/* 타이핑 애니메이션 텍스트 */}
      <TypingContainer>
        <TypingText>Welcome to my interactive portfolio...</TypingText>
      </TypingContainer>
    </PageLayout>
  );
}
