import styled from "styled-components";
import { typing, blink, fadeInUp } from "./CommonStyles";

//section
export const HomeSection = styled.section`
  height: 100vh;
  margin-bottom: 4rem;
  padding-top: 18rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding-top: 11rem;
  }
`;
// 타이핑 애니메이션 텍스트
export const TypingText = styled.div`
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

// 하단 타이핑 텍스트 컨테이너
export const TypingContainer = styled.div`
  margin-top: 6rem;
  text-align: center;
  animation: ${fadeInUp} 1.5s ease-out 2s both;
`;
