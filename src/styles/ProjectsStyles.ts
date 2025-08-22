import styled from "styled-components";

// 이제 PageLayout을 사용하므로 Main, Title, Subtitle는 필요 없음
// Projects 페이지 전용 컴포넌트들만 유지

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  margin-top: 2rem;
  max-width: 1400px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2.5rem;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 500px;
  }
`;

export const ProjectCard = styled.div`
  background: linear-gradient(145deg, #333, #2a2a2a);
  border-radius: 24px;
  border: 2px solid #444;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 2px;
    background: linear-gradient(145deg, rgba(56, 189, 248, 0.3), rgba(6, 182, 212, 0.1));
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 25px 50px rgba(56, 189, 248, 0.25), 
                0 0 40px rgba(56, 189, 248, 0.1);
    border-color: #38bdf8;
    background: linear-gradient(145deg, #353535, #2d2d2d);

    &::after {
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    padding: 1.5rem;
    border-radius: 20px;
  }

  @media (max-width: 767px) {
    padding: 1.2rem;
    border-radius: 16px;
  }
`;

export const PreviewImg = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    height: 200px;
    border-radius: 12px;
  }

  @media (max-width: 767px) {
    height: 180px;
    border-radius: 10px;
  }
`;

export const CardTitle = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.6rem;
  font-weight: 700;
  color: #38bdf8;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 767px) {
    font-size: 1.3rem;
    margin-bottom: 0.6rem;
  }
`;

export const CardDesc = styled.p`
  font-size: 1.1rem;
  text-align: center;
  color: #e2e8f0;
  line-height: 1.5;
  opacity: 0.9;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 767px) {
    font-size: 0.95rem;
  }
`;
