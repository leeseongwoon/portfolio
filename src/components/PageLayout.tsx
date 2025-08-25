"use client";

import styled from "styled-components";
import { ReactNode } from "react";

const MainContainer = styled.main<{
  $variant?: "home" | "projects" | "career" | "contact";
}>`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Pretendard", -apple-system, BlinkMacSystemFont, system-ui,
    Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  overflow: visible;

  /* 페이지별 배경 그라데이션 */
  ${(props) => {
    switch (props.$variant) {
      case "home":
        return `
          background: 
            radial-gradient(ellipse 80% 60% at 50% -20%, rgba(56, 189, 248, 0.2), transparent),
            radial-gradient(ellipse 60% 80% at 20% 120%, rgba(6, 182, 212, 0.15), transparent),
            radial-gradient(ellipse 100% 40% at 80% -10%, rgba(14, 165, 233, 0.1), transparent);
        `;
      case "projects":
        return `
          background: 
            radial-gradient(ellipse 70% 50% at 30% -10%, rgba(56, 189, 248, 0.15), transparent),
            radial-gradient(ellipse 80% 60% at 70% 110%, rgba(14, 165, 233, 0.1), transparent);
        `;
      case "career":
        return `
          background: 
            radial-gradient(ellipse 80% 60% at 50% -20%, rgba(56, 189, 248, 0.2), transparent),
            radial-gradient(ellipse 60% 80% at 20% 120%, rgba(6, 182, 212, 0.15), transparent);
        `;
      case "contact":
        return `
          background: 
            radial-gradient(ellipse 60% 80% at 80% -20%, rgba(56, 189, 248, 0.2), transparent),
            radial-gradient(ellipse 80% 50% at 20% 120%, rgba(6, 182, 212, 0.15), transparent);
        `;
      default:
        return `
          background: 
            radial-gradient(ellipse 80% 60% at 50% -20%, rgba(56, 189, 248, 0.1), transparent);
        `;
    }
  }}
/* 
  @media (max-width: 1024px) {
    padding: 4rem 1.5rem;
    padding-top: 6rem;
    background: radial-gradient(
      ellipse 60% 40% at 50% -10%,
      rgba(56, 189, 248, 0.1),
      transparent
    );
  }

  @media (max-width: 767px) {
    padding: 2rem 1rem;
    padding-top: 5rem;
    min-height: 80vh;
    background: none;
  } */
`;

const PageTitle = styled.h1<{
  $variant?: "home" | "projects" | "career" | "contact";
}>`
  font-size: 4.5rem;
  font-weight: 900;
  margin-bottom: 2rem;
  letter-spacing: -3px;
  line-height: 1.1;
  text-shadow: 0 4px 20px rgba(56, 189, 248, 0.3);
  background: linear-gradient(135deg, #38bdf8, #0ea5e9, #06b6d4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: ${(props) => (props.$variant === "projects" ? "120px" : "100px")};
    height: 5px;
    background: linear-gradient(90deg, #38bdf8, #0ea5e9);
    border-radius: 2px;
    margin-bottom: 10px;
  }

  @media (max-width: 1024px) {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    letter-spacing: -2px;
  }

  @media (max-width: 767px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    letter-spacing: -1px;
    text-shadow: none;
  }
`;

const PageSubtitle = styled.p<{
  $variant?: "home" | "projects" | "career" | "contact";
}>`
  font-size: 1.4rem;
  max-width: 800px;
  margin-bottom: 3rem;
  color: #e2e8f0;
  line-height: 1.6;
  opacity: 0.9;

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

interface PageLayoutProps {
  variant?: "home" | "projects" | "career" | "contact";
  title?: string;
  subtitle?: string;
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  variant = "home",
  title,
  subtitle,
  children,
}) => {
  return (
    <MainContainer $variant={variant}>
      {title && <PageTitle $variant={variant}>{title}</PageTitle>}
      {subtitle && <PageSubtitle $variant={variant}>{subtitle}</PageSubtitle>}
      {children}
    </MainContainer>
  );
};

export default PageLayout;
export { MainContainer, PageTitle, PageSubtitle };
