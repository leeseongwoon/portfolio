import styled from "styled-components";
import { slideInLeft, slideInRight, bounceIn, drawLine } from "./CommonStyles";

// Career 섹션 스타일
export const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 3rem auto 0;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 100%;
    background: linear-gradient(to bottom, #38bdf8, #0ea5e9, #06b6d4);
    border-radius: 3px;
    animation: ${drawLine} 2s ease-out 0.5s both;
    box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
  }

  @media (max-width: 768px) {
    &::before {
      left: 15px;
      width: 3px;
    }
  }
`;

export const TimelineItem = styled.div<{ $isLeft?: boolean; $delay: number }>`
  position: relative;
  margin-bottom: 6rem;
  animation: ${(props) => (props.$isLeft ? slideInLeft : slideInRight)} 0.8s
    ease-out ${(props) => props.$delay + 0.8}s both;

  @media (max-width: 768px) {
    margin-left: 50px;
    animation: ${slideInRight} 0.8s ease-out ${(props) => props.$delay + 0.8}s
      both;
  }
`;

export const TimelineContent = styled.div<{ $isLeft?: boolean }>`
  position: relative;
  width: 48%;
  padding: 2rem;
  background: linear-gradient(145deg, #333, #2a2a2a);
  border-radius: 16px;
  border: 2px solid #444;
  transition: all 0.4s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);

  ${(props) =>
    props.$isLeft
      ? "margin-left: 0; margin-right: auto;"
      : "margin-left: auto; margin-right: 0;"}

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(56, 189, 248, 0.2);
    border-color: #38bdf8;
  }

  @media (max-width: 768px) {
    width: calc(100% - 50px);
    margin-left: 0 !important;
  }
`;

export const TimelineDot = styled.div<{ $delay: number }>`
  position: absolute;
  left: 50%;
  top: 40%;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #38bdf8, #0ea5e9);
  border: 4px solid #222222;
  border-radius: 50%;
  z-index: 1;
  animation: ${bounceIn} 0.6s ease-out ${(props) => props.$delay + 1.2}s
    forwards;
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.4);

  @media (max-width: 768px) {
    left: -35px;
  }
`;

export const CompanyName = styled.h3`
  color: #38bdf8;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const Position = styled.h4`
  color: #f8f9fa;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const Period = styled.p`
  color: #ccc;
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
`;

export const Description = styled.p`
  color: #e2e8f0;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;
