import styled from 'styled-components';

export const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 6rem 2rem;
  padding-top: 8rem; /* Fixed header를 위한 추가 공간 */
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  overflow: hidden;

  /* 웅장한 배경 그라데이션 */
  background: 
    radial-gradient(ellipse 80% 60% at 50% -20%, rgba(56, 189, 248, 0.2), transparent),
    radial-gradient(ellipse 60% 80% at 20% 120%, rgba(6, 182, 212, 0.15), transparent),
    radial-gradient(ellipse 100% 40% at 80% -10%, rgba(14, 165, 233, 0.1), transparent);

  @media (max-width: 1024px) {
    padding: 4rem 1.5rem;
    padding-top: 6rem;
    background: 
      radial-gradient(ellipse 60% 40% at 50% -10%, rgba(56, 189, 248, 0.1), transparent);
  }

  @media (max-width: 767px) {
    padding: 2rem 1rem;
    padding-top: 5rem;
    min-height: 80vh;
    background: none;
  }
`;

export const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 900;
  margin-bottom: 2.5rem;
  letter-spacing: -3px;
  line-height: 1.1;
  text-shadow: 0 4px 20px rgba(56, 189, 248, 0.3);

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

export const Subtitle = styled.p`
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

export const TechStack = styled.div`
  max-width: 800px;
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3.5rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 1024px) {
    max-width: 700px;
    gap: 1.2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 767px) {
    max-width: 550px;
    gap: 1rem;
    margin-bottom: 2.5rem;
  }
`;

export const TechItem = styled.span`
  background: linear-gradient(145deg, #333, #2a2a2a);
  border: 2px solid #444;
  border-radius: 999px;
  padding: 0.8rem 1.8rem;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: #38bdf8;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(56, 189, 248, 0.3);
  }

  @media (max-width: 1024px) {
    padding: 0.7rem 1.5rem;
    font-size: 1rem;
  }

  @media (max-width: 767px) {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
  }
`;

export const CTAButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #38bdf8, #0ea5e9);
  font-weight: 800;
  border-radius: 16px;
  padding: 1.2rem 3rem;
  font-size: 1.3rem;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 32px rgba(56, 189, 248, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #0ea5e9, #0284c7);
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 15px 40px rgba(56, 189, 248, 0.4);

    &::before {
      left: 100%;
    }
  }

  @media (max-width: 1024px) {
    padding: 1rem 2.5rem;
    font-size: 1.2rem;
    border-radius: 12px;
  }

  @media (max-width: 767px) {
    font-size: 1.1rem;
    padding: 0.9rem 2rem;
    border-radius: 10px;
  }
`; 