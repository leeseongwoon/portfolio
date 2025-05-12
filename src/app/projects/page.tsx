'use client';

import {
  Main,
  Title,
  CardsContainer,
  ProjectCard,
  CardTitle,
  CardDesc
} from '@/styles/ProjectsStyles';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

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

// 프로젝트 타입 정의
type Project = {
  id: string;
  image: string;
  title: string;
  desc: string;
  category: string;
  url: string;
};

const projects: Project[] = [
  {
    id: 'job-counseling-chatbot',
    image: 'https://api.microlink.io?url=https://job-counseling-chatbot.vercel.app&screenshot=true&meta=false&embed=screenshot.url',
    title: 'Job Counseling Chatbot',
    desc: 'AI 기반 취업 상담 챗봇 서비스',
    category: 'Next.js',
    url: 'https://job-counseling-chatbot.vercel.app/'
  },
  {
    id: 'tosspaments-cafe',
    image: 'https://api.microlink.io?url=https://tosspaments-cafe.vercel.app&screenshot=true&meta=false&embed=screenshot.url',
    title: 'Tosspaments Cafe',
    desc: '토스페이먼츠 결제 연동 카페 주문 서비스',
    category: 'Next.js',
    url: 'https://tosspaments-cafe.vercel.app/'
  },
  {
    id: 'memo-app',
    image: '/images/images.png',
    title: 'Memo App',
    desc: '실시간 메모 공유 웹 애플리케이션',
    category: 'Flutter',
    url: 'https://memo-app-bfad2.web.app/'
  },
  {
    id: 'webbler',
    image: '/images/images.png',
    title: 'Webbler',
    desc: '전문적인 웹사이트 제작 에이전시',
    category: '기타',
    url: 'http://df00.dothome.co.kr/webbler/'
  }
];

export default function Projects() {
  const [isClient, setIsClient] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const handleProjectClick = (project: Project) => {
    if (isClient) {
      window.location.href = `/projects/${project.id}`;
    }
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
            onClick={() => handleProjectClick(project)}
          >
            <div style={{ width: '100%', position: 'relative', overflow: 'hidden', borderRadius: '8px', backgroundColor: '#f0f0f0' }}>
              <Image 
                src={project.image} 
                alt={project.title}
                width={350}
                height={180}
                style={{ 
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                priority
              />
            </div>
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