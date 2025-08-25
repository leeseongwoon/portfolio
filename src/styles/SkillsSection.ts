import styled from "styled-components";
import { fadeInUp } from "./CommonStyles";

// 스킬 섹션 스타일
export const SkillsSection = styled.section`
  min-height: 100vh;
  padding: 2rem 0;
  position: relative;
  overflow: visible;
  isolation: isolate;
  scroll-margin-top: 100px;

  @media (max-width: 768px) {
    padding-top: 0;
  }
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const StickyTitleContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 120px;
  text-align: center;
  z-index: 100;
  height: fit-content;
  width: 300px;
  will-change: position;
  align-self: start;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
`;

export const SkillsTitle = styled.h2`
  font-size: 4.5rem;
  font-weight: 900;
  margin-bottom: 2.5rem;
  letter-spacing: -3px;
  line-height: 1.1;
  text-shadow: 0 4px 20px rgba(56, 189, 248, 0.3);
  text-align: center;
  position: relative;
  color: #e2e8f0;
  animation: ${fadeInUp} 1s ease-out;
`;

export const SkillsSubtitle = styled.p`
  font-size: 1.2rem;
  color: #e2e8f0;
  line-height: 1.6;
  opacity: 0.9;
  margin-top: 1rem;
`;

export const SkillsCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: ${fadeInUp} 1s ease-out 0.5s both;
  flex: 1;
  min-height: 150vh;

  @media (max-width: 768px) {
    min-height: auto;
  }
`;

export const SkillCard = styled.div`
  width: 600px;
  background: linear-gradient(145deg, #333, #2a2a2a);
  border-radius: 16px;
  padding: 1.5rem;
  border: 2px solid #444;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(56, 189, 248, 0.2);
    border-color: #38bdf8;
  }

  @media (max-width: 1024px) {
    max-width: 300px;
  }

  @media (max-width: 768px) {
    width: 400px;
    min-width: 100%;
  }
`;

export const SkillCardTitle = styled.h3`
  color: #38bdf8;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
`;

export const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SkillDot = styled.div`
  width: 8px;
  height: 8px;
  background: #38bdf8;
  border-radius: 50%;
`;

export const SkillText = styled.span`
  color: #e2e8f0;
  font-size: 0.95rem;
`;
