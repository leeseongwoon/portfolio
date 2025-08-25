import styled, { keyframes } from "styled-components";

// 애니메이션 키프레임들
export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

export const blink = keyframes`
  0%, 50% { border-color: transparent; }
  51%, 100% { border-color: #38bdf8; }
`;

export const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const bounceIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%) scale(0.3);
  }
  50% {
    opacity: 1;
    transform: translateX(-50%) scale(1.05);
  }
  70% {
    transform: translateX(-50%) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }
`;

export const drawLine = keyframes`
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
`;

// 공통 섹션 스타일
export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  scroll-margin-top: 30px;
`;

export const SectionTitle = styled.h2`
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

export const SectionSubtitle = styled.p`
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

// 애니메이션 컴포넌트들
export const AnimatedSubtitle = styled(SectionSubtitle)`
  animation: ${fadeInUp} 1.5s ease-out 0.3s both;
  font-size: 2rem;
  font-weight: 700;

  span {
    padding-left: 10px;
    display: inline-flex;
    overflow: hidden;
    white-space: nowrap;
    color: #38bdf8;
    border-right: 3px solid #38bdf8;
    animation: ${typing} 3s steps(15, end), ${blink} 1s step-end infinite;
  }
`;

export const AnimatedTitle = styled(SectionTitle)`
  animation: ${fadeInUp} 1s ease-out;

  span {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    border-right: 3px solid #38bdf8;
    animation: ${typing} 3s steps(20, end), ${blink} 1s step-end infinite;
  }
`;

// CSS 애니메이션을 위한 스타일 태그 추가
export const GlobalAnimationStyles = styled.div`
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
