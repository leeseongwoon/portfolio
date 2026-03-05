import styled, { keyframes } from "styled-components";
import { fadeInUp } from "./CommonStyles";

//section
export const HomeSection = styled.section`
  height: 100vh;
  margin-bottom: 4rem;
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media (max-width: 768px) {
    padding-top: 6rem;
    padding-bottom: 3rem;
    gap: 3rem;
  }
`;

// 역할 뱃지 컨테이너
export const RoleBadges = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
`;

// 퍼블리셔 / 프론트엔드 뱃지
export const RoleBadge = styled.span`
  font-family: "Geist Mono", "SF Mono", "Fira Code", monospace;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  background: rgba(56, 189, 248, 0.15);
  border: 1px solid rgba(56, 189, 248, 0.4);
  color: #38bdf8;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.35rem 0.8rem;
  }
`;

// 메인 타이틀 (이름)
export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  color: #f8f9fa;
  letter-spacing: -2px;
  line-height: 1.2;
  text-align: center;
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;

  span {
    background: linear-gradient(135deg, #38bdf8, #0ea5e9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 2.1rem;
  }
`;

// 소개 문구
export const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #94a3b8;
  line-height: 1.8;
  max-width: 600px;
  text-align: center;
  animation: ${fadeInUp} 0.8s ease-out 0.6s both;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

// 기술 스택 태그 컨테이너
export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  animation: ${fadeInUp} 0.8s ease-out 0.9s both;
`;

// 기술 태그 (개발자 느낌)
export const TechTag = styled.span`
  font-family: "Geist Mono", "SF Mono", "Fira Code", monospace;
  font-size: 0.8rem;
  padding: 0.35rem 0.75rem;
  border-radius: 4px;
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(71, 85, 105, 0.6);
  color: #94a3b8;
  transition: all 0.25s ease;

  &:hover {
    border-color: rgba(56, 189, 248, 0.5);
    color: #38bdf8;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.3rem 0.6rem;
  }
`;

// 터미널/코드 블록 스타일
const codeGlow = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

export const CodeBlock = styled.div`
  padding: 1.25rem 1.75rem;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(71, 85, 105, 0.5);
  border-radius: 12px;
  max-width: 480px;
  font-family: "Geist Mono", "SF Mono", "Fira Code", monospace;
  font-size: 0.9rem;
  text-align: left;
  animation: ${fadeInUp} 0.8s ease-out 1.1s both;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 1rem 1.25rem;
    margin: 1rem 1rem 0;
  }
`;

export const CodeLine = styled.div`
  color: #64748b;
  margin-bottom: 0.25rem;

  .keyword {
    color: #38bdf8;
  }
  .string {
    color: #34d399;
  }
  .comment {
    color: #64748b;
  }
`;

// 타이핑 애니메이션 텍스트
export const TypingText = styled.p`
  font-size: 1rem;
  color: #38bdf8;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  animation: ${fadeInUp} 1s ease-out 1.4s both;

  &::after {
    content: "|";
    animation: ${codeGlow} 1s step-end infinite;
    margin-left: 2px;
  }
`;
