import styled from "styled-components";

// 프로젝트 섹션 스타일
export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProjectCard = styled.div`
  background: linear-gradient(145deg, #333, #2a2a2a);
  border-radius: 16px;
  padding: 1.5rem;
  border: 2px solid #444;
  transition: all 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(56, 189, 248, 0.2);
    border-color: #38bdf8;
  }
`;

export const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const ProjectTitle = styled.h3`
  color: #38bdf8;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const ProjectDesc = styled.p`
  color: #e2e8f0;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

export const ProjectCategory = styled.span`
  background: linear-gradient(45deg, #38bdf8, #0ea5e9);
  color: white;
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  display: inline-block;
`;
