'use client';

import {
  Main,
  Title,
  CardsContainer,
  ProjectCard,
  PreviewImg,
  CardTitle,
  CardDesc
} from '@/styles/ProjectsStyles';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const CategoryTabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const CategoryTab = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  background: ${props => props.$active ? '#38bdf8' : 'transparent'};
  color: ${props => props.$active ? 'white' : '#666'};
  border-radius: 20px;
  cursor: pointer;
  font-weight: ${props => props.$active ? '600' : '400'};
  transition: all 0.2s;
  
  &:hover {
    background: ${props => props.$active ? '#38bdf8' : '#f0f0f0'};
  }
`;

const projects = [
  {
    id: 'hello-money',
    image: '/images/images.png',
    title: 'HELLO, MONEY',
    desc: '지출관리 및 시각화 애플리케이션',
    category: 'React'
  },
  {
    id: 'favorite-countries',
    image: '/images/images.png',
    title: 'FAVORITE COUNTRIES',
    desc: '좋아하는 국가 리스트 만들기 웹사이트',
    category: 'Next.js'
  },
];

export default function Projects() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const handleProjectClick = (id: string) => {
    router.push(`/projects/${id}`);
  };
  
  const categories = ['All', 'React', 'Next.js', 'Flutter', '기타'];
  
  // 선택된 카테고리에 따라 프로젝트 필터링
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <Main>
      <Title>Projects</Title>
      <CategoryTabs>
        {categories.map(category => (
          <CategoryTab 
            key={category}
            $active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </CategoryTab>
        ))}
      </CategoryTabs>
      <CardsContainer>
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            onClick={() => isClient && handleProjectClick(project.id)}
          >
            <PreviewImg src={project.image} alt={project.title} />
            <CardTitle>{project.title}</CardTitle>
            <CardDesc>{project.desc}</CardDesc>
            <CategoryBadge>{project.category}</CategoryBadge>
          </ProjectCard>
        ))}
      </CardsContainer>
    </Main>
  );
}

const CategoryBadge = styled.span`
  background: #f0f0f0;
  color: #555;
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  margin-top: 0.7rem;
  display: inline-block;
`; 