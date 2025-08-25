'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';

// 프로젝트 타입 정의
interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  url: string;
}

const ProjectContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const ProjectHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const ProjectTitle = styled.h1`
  font-size: 3rem;
  color: #38bdf8;
  margin-bottom: 1rem;
`;

const ProjectCategory = styled.span`
  background: linear-gradient(45deg, #38bdf8, #0ea5e9);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1rem;
`;

const ProjectImage = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto 2rem;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`;

const ProjectDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #e2e8f0;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
`;

const ProjectLink = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #38bdf8, #0ea5e9);
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(56, 189, 248, 0.3);
  }
`;

const BackButton = styled.button`
  background: transparent;
  border: 2px solid #38bdf8;
  color: #38bdf8;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background: #38bdf8;
    color: white;
    transform: translateY(-2px);
  }
`;

const projects: Project[] = [
  {
    id: 'wealthwise',
    title: 'WealthWise',
    category: 'React',
    description: '자산 관리 및 재무 계획을 위한 종합적인 웹 애플리케이션입니다. 사용자가 개인 재무 상황을 파악하고 목표를 설정할 수 있도록 도와주는 직관적인 인터페이스를 제공합니다.',
    image: 'https://api.microlink.io?url=https://wealthwise-71d31.web.app&screenshot=true&meta=false&embed=screenshot.url',
    url: 'https://wealthwise-71d31.web.app/'
  },
  {
    id: 'job-counseling-chatbot',
    title: 'Job Counseling Chatbot',
    category: 'Next.js',
    description: 'AI 기반 취업 상담 챗봇 서비스로, 사용자의 경력과 관심사를 바탕으로 맞춤형 취업 조언을 제공합니다. 자연스러운 대화를 통해 진로 상담을 받을 수 있습니다.',
    image: 'https://api.microlink.io?url=https://job-counseling-chatbot.vercel.app&screenshot=true&meta=false&embed=screenshot.url',
    url: 'https://job-counseling-chatbot.vercel.app/'
  },
  {
    id: 'tosspaments-cafe',
    title: 'Tosspaments Cafe',
    category: 'Next.js',
    description: '토스페이먼츠 결제 시스템을 연동한 카페 주문 서비스입니다. 사용자가 온라인으로 메뉴를 선택하고 안전하게 결제할 수 있는 플랫폼을 제공합니다.',
    image: 'https://api.microlink.io?url=https://tosspaments-cafe.vercel.app&screenshot=true&meta=false&embed=screenshot.url',
    url: 'https://tosspaments-cafe.vercel.app/'
  },
  {
    id: 'memo-app',
    title: 'Memo App',
    category: 'Flutter',
    description: '실시간 메모 공유 웹 애플리케이션으로, 사용자들이 동시에 메모를 작성하고 편집할 수 있습니다. 협업과 아이디어 공유에 최적화된 플랫폼입니다.',
    image: '/images/memo-app.png',
    url: 'https://memo-app-bfad2.web.app/'
  },
  {
    id: 'webbler',
    title: 'Webbler',
    category: '기타',
    description: '전문적인 웹사이트 제작 에이전시의 포트폴리오 사이트입니다. 다양한 웹 개발 서비스와 프로젝트 사례를 소개하는 회사 소개 페이지입니다.',
    image: '/images/webbler.png',
    url: 'http://df00.dothome.co.kr/webbler/'
  }
];

export default function ProjectDetail() {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const projectId = params.id as string;
    const foundProject = projects.find(p => p.id === projectId);
    if (foundProject) {
      setProject(foundProject);
    } else {
      setProject(null);
    }
  }, [params.id]);

  const goBack = () => {
    window.history.back();
  };

  if (!project) {
    return (
      <PageLayout variant="projects">
        <ProjectContainer>
          <ProjectHeader>
            <ProjectTitle>프로젝트를 찾을 수 없습니다</ProjectTitle>
            <BackButton onClick={goBack}>뒤로 가기</BackButton>
          </ProjectHeader>
        </ProjectContainer>
      </PageLayout>
    );
  }

  return (
    <PageLayout variant="projects">
      <ProjectContainer>
        <ProjectHeader>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectCategory>{project.category}</ProjectCategory>
        </ProjectHeader>

        <ProjectImage>
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={400}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover'
            }}
          />
        </ProjectImage>

        <ProjectDescription>{project.description}</ProjectDescription>

        <div style={{ textAlign: 'center' }}>
          <ProjectLink href={project.url} target="_blank" rel="noopener noreferrer">
            프로젝트 보러가기 →
          </ProjectLink>
        </div>

        <div style={{ textAlign: 'center' }}>
          <BackButton onClick={goBack}>뒤로 가기</BackButton>
        </div>
      </ProjectContainer>
    </PageLayout>
  );
}
