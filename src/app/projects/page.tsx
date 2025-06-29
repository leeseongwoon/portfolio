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
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import Head from 'next/head';

// 애니메이션 키프레임들
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 5px rgba(56, 189, 248, 0.3); }
  50% { box-shadow: 0 0 20px rgba(56, 189, 248, 0.6); }
`;

// 애니메이션 컴포넌트들
const AnimatedTitle = styled(Title)`
  animation: ${fadeInUp} 1s ease-out;
`;

const AnimatedCategoryTabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  animation: ${slideIn} 0.8s ease-out 0.3s both;
  
  @media (max-width: 450px) {
    justify-content: center;
    gap: 0.5rem;
    
    > * {
      flex: 0 0 30%;
    }
  }
`;

const AnimatedCategoryTab = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  background: ${props => props.$active ? '#38bdf8' : 'transparent'};
  color: ${props => props.$active ? 'white' : '#666'};
  border-radius: 20px;
  cursor: pointer;
  font-weight: ${props => props.$active ? '600' : '400'};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background: ${props => props.$active ? '#38bdf8' : '#f0f0f0'};
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(56, 189, 248, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const AnimatedCardsContainer = styled(CardsContainer)`
  animation: ${fadeInUp} 1s ease-out 0.5s both;
`;

const AnimatedProjectCard = styled(ProjectCard)`
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    animation: ${glow} 2s ease-in-out infinite;
  }
  
  &:hover ${CardTitle} {
    color: #38bdf8;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.1), transparent);
    transition: left 0.5s;
    z-index: 1;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const AnimatedImageContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background-color: #f0f0f0;
  
  img {
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.1);
  }
`;

const AnimatedCategoryBadge = styled.span`
  background: linear-gradient(45deg, #38bdf8, #0ea5e9);
  color: white;
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  margin-top: 0.7rem;
  display: inline-block;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 5px 15px rgba(56, 189, 248, 0.3);
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
    id: 'wealthwise',
    image: 'https://api.microlink.io?url=https://wealthwise-71d31.web.app&screenshot=true&meta=false&embed=screenshot.url',
    title: 'WealthWise',
    desc: '자산 관리 및 재무 계획 웹 애플리케이션',
    category: 'React',
    url: 'https://wealthwise-71d31.web.app/'
  },
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
    image: '/images/memo-app.png',
    title: 'Memo App',
    desc: '실시간 메모 공유 웹 애플리케이션',
    category: 'Flutter',
    url: 'https://memo-app-bfad2.web.app/'
  },
  {
    id: 'webbler',
    image: '/images/webbler.png',
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
    // 페이지 타이틀 설정
    document.title = "프로젝트 - 이성운 포트폴리오";
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
      <Head>
        <title>프로젝트 - 이성운 포트폴리오</title>
      </Head>
      <AnimatedTitle>Projects</AnimatedTitle>
      <AnimatedCategoryTabs>
        {categories.map(category => (
          <AnimatedCategoryTab 
            key={category}
            $active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </AnimatedCategoryTab>
        ))}
      </AnimatedCategoryTabs>
      <AnimatedCardsContainer>
        {filteredProjects.map((project) => (
          <AnimatedProjectCard 
            key={project.id} 
            onClick={() => handleProjectClick(project)}
          >
            <AnimatedImageContainer>
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
            </AnimatedImageContainer>
            <CardTitle>{project.title}</CardTitle>
            <CardDesc>{project.desc}</CardDesc>
            <AnimatedCategoryBadge>{project.category}</AnimatedCategoryBadge>
          </AnimatedProjectCard>
        ))}
      </AnimatedCardsContainer>
    </Main>
  );
}