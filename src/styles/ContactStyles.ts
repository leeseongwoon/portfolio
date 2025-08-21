import styled from 'styled-components';

export const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 6rem 2rem;
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  overflow: hidden;

  /* 웅장한 배경 그라데이션 */
  background: 
    radial-gradient(ellipse 60% 80% at 80% -20%, rgba(56, 189, 248, 0.2), transparent),
    radial-gradient(ellipse 80% 50% at 20% 120%, rgba(6, 182, 212, 0.15), transparent);

  @media (max-width: 1024px) {
    padding: 4rem 1.5rem;
    background: 
      radial-gradient(ellipse 60% 40% at 50% -10%, rgba(56, 189, 248, 0.1), transparent);
  }

  @media (max-width: 767px) {
    padding: 2rem 1rem;
    min-height: 80vh;
    background: none;
  }
`;

export const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 900;
  margin-bottom: 2rem;
  letter-spacing: -3px;
  background: linear-gradient(135deg, #38bdf8, #0ea5e9, #06b6d4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 6px;
    background: linear-gradient(90deg, #38bdf8, #0ea5e9);
    border-radius: 3px;
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