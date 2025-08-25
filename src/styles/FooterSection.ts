import styled from "styled-components";
import { fadeInUp } from "./CommonStyles";

// Footer 섹션 스타일
export const FooterSection = styled.footer`
width: 100%;
  border-top: 1px solid rgba(56, 189, 248, 0.2);
  padding: 2rem 0;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #38bdf8, transparent);
  }
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeInUp} 1s ease-out 0.5s both;
`;

export const FooterCopyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #6b7280;
  font-size: 0.85rem;
`;

export const CopyrightText = styled.p`
  margin: 0;
  opacity: 0.8;
`;

export const CopyrightYear = styled.span`
  color: #38bdf8;
  font-weight: 600;
`;
