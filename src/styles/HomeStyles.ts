import styled from 'styled-components';

export const Main = styled.main`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4rem 1rem;
  background: #000;
  color: #fff;
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  letter-spacing: -2px;
  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  max-width: 600px;
  margin-bottom: 2.5rem;
  color: #ccc;
  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

export const TechStack = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 767px) {
    gap: 0.75rem;
  }
`;

export const TechItem = styled.span`
  background: #222;
  border-radius: 999px;
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
  @media (max-width: 767px) {
    font-size: 0.875rem;
    padding: 0.375rem 1rem;
  }
`;

export const CTAButton = styled.a`
  display: inline-block;
  background: #38bdf8;
  color: #000;
  font-weight: 700;
  border-radius: 8px;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  text-decoration: none;
  transition: background 0.2s;
  &:hover {
    background: #0ea5e9;
  }
  @media (max-width: 767px) {
    font-size: 1rem;
    padding: 0.625rem 1.5rem;
  }
`; 