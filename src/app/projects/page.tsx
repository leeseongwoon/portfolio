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

// 모달 컴포넌트 추가
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
`;

const ModalContent = styled.div`
  max-width: 90%;
  max-height: 90%;
  position: relative;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  cursor: pointer;
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background-color: #f0f0f0;
  
  &:hover img {
    transform: scale(1.05);
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>('');
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const handleProjectClick = (project: Project) => {
    if (isClient) {
      window.location.href = `/projects/${project.id}`;
    }
  };
  
  const openImageModal = (e: React.MouseEvent, image: string, title: string) => {
    e.stopPropagation();
    setSelectedImage(image);
    setSelectedTitle(title);
  };
  
  const closeImageModal = () => {
    setSelectedImage(null);
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
            <ImageContainer onClick={(e) => openImageModal(e, project.image, project.title)}>
              <Image 
                src={project.image} 
                alt={project.title}
                width={350}
                height={180}
                style={{ 
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  transition: 'transform 0.3s ease'
                }}
                priority
              />
            </ImageContainer>
            <CardTitle>{project.title}</CardTitle>
            <CardDesc>{project.desc}</CardDesc>
            <CategoryBadge>{project.category}</CategoryBadge>
          </ProjectCard>
        ))}
      </CardsContainer>
      
      {selectedImage && (
        <ModalOverlay onClick={closeImageModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalCloseButton onClick={closeImageModal}>✕</ModalCloseButton>
            <Image
              src={selectedImage}
              alt={selectedTitle}
              width={1000}
              height={600}
              priority
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: '100%',
                maxHeight: '90vh',
                borderRadius: '8px',
              }}
            />
          </ModalContent>
        </ModalOverlay>
      )}
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