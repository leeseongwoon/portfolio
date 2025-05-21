"use client";
import React, { useState } from "react";
import { Main, Title, Subtitle } from "@/styles/ProjectsStyles";
import { notFound } from "next/navigation";
import Image from "next/image";
import styled from "styled-components";

// 스타일 컴포넌트 추가
const ContentSection = styled.div`
  text-align: left;
  background: #333;
  border: 1px solid #444;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 2rem;
  width: 100%;
  max-width: 720px;
  line-height: 1.7;
`;

const FeatureList = styled.ul`
  margin: 0.5rem 0;
  padding-left: 1.5rem;
`;

const FeatureItem = styled.li`
  margin-bottom: 0.7rem;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  background: #38bdf8;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  
  &:hover {
    background: #0ea5e9;
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

const ProjectImageWrapper = styled.div`
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const projectDetails: Record<
  string,
  { 
    title: string; 
    desc: string; 
    content: string; 
    image: string;
    features: string[];
    tech: string[];
    url?: string;
  }
> = {
  "wealthwise": {
    title: "WealthWise(개발중)",
    desc: "자산 관리 및 재무 계획 웹 애플리케이션",
    image: "https://api.microlink.io?url=https://wealthwise-71d31.web.app&screenshot=true&meta=false&embed=screenshot.url",
    features: [
      "자산 및 부채 관리 대시보드",
      "예산 계획 및 지출 추적",
      "재무 목표 설정 및 진행 상황 모니터링",
      "투자 포트폴리오 분석",
      "실시간 데이터 시각화"
    ],
    tech: ["React", "Firebase", "Redux", "Styled-Components"],
    content: "WealthWise는 개인 및 가계 자산을 효율적으로 관리할 수 있는 React 기반 웹 애플리케이션입니다. 직관적인 대시보드를 통해 사용자의 자산, 부채, 수입, 지출을 한눈에 파악할 수 있습니다. Firebase를 활용한 실시간 데이터베이스로 정보가 즉시 업데이트되며, 차트 및 그래프를 통해 재무 상태를 시각적으로 분석할 수 있습니다. 예산 계획 기능으로 월간/연간 지출 목표를 설정하고 추적할 수 있으며, 투자 포트폴리오 분석 도구를 통해 투자 성과를 모니터링할 수 있습니다. 모바일 환경에서도 최적화된 반응형 디자인을 제공합니다.",
    url: "https://wealthwise-71d31.web.app/"
  },
  "job-counseling-chatbot": {
    title: "Job Counseling Chatbot",
    desc: "AI 기반 취업 상담 챗봇 서비스",
    image: "https://api.microlink.io?url=https://job-counseling-chatbot.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    features: [
      "선택 기반 Q&A 시스템",
      "단계별 대화 흐름 구현",
      "간편한 네비게이션",
      "직관적인 채팅 UI",
      "관리자 페이지",
      "RESTful API 서버"
    ],
    tech: ["Next.js 15", "React", "TypeScript", "Styled-Components"],
    content: "Next.js와 React를 기반으로 구축된 웹 기반 취업 상담 챗봇 애플리케이션입니다. 사용자는 미리 정의된 질문 옵션을 선택하여 취업, 학습, 진로 관련 정보를 얻을 수 있습니다. 선택 기반 Q&A 시스템, 단계별 대화 흐름, 간편한 네비게이션, 직관적인 채팅 UI, 관리자 페이지, RESTful API 서버 등 다양한 기능을 포함합니다. 스타일 컴포넌트를 분리하여 코드 가독성과 유지보수성을 향상했습니다.",
    url: "https://job-counseling-chatbot.vercel.app/"
  },
  "tosspaments-cafe": {
    title: "Tosspaments Cafe",
    desc: "토스페이먼츠 결제 연동 카페 주문 서비스",
    image: "https://api.microlink.io?url=https://tosspaments-cafe.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    features: [
      "메뉴 탐색 및 카테고리별 분류",
      "장바구니 기능 및 수량 관리",
      "토스페이먼츠 SDK 결제 시스템",
      "오프라인 대응 및 상태 감지",
      "모바일 최적화 반응형 디자인"
    ],
    tech: ["Next.js 15", "React 19", "TypeScript", "토스페이먼츠 API"],
    content: "Next.js 15와 토스페이먼츠 결제 API를 활용한 모바일 최적화 카페 주문 애플리케이션입니다. 사용자는 메뉴를 카테고리별로 탐색하고, 장바구니에 상품을 추가한 후 토스페이먼츠를 통해 간편하게 결제할 수 있습니다. 모바일 환경에 최적화된 반응형 디자인을 적용했으며, 터치 친화적 인터페이스로 직관적인 사용이 가능합니다. 네트워크 연결 상태 감지 및 재연결 시 자동 처리 기능도 구현되어 있어 사용자 경험을 향상시켰습니다. React Hooks와 LocalStorage를 활용한 상태 관리 시스템을 갖추고 있습니다.",
    url: "https://tosspaments-cafe.vercel.app/"
  },
  "memo-app": {
    title: "Memo App",
    desc: "Flutter 기반 메모 관리 애플리케이션",
    image: "/images/memo-app.png",
    features: [
      "메모 생성, 수정, 삭제 기능",
      "폴더 생성 및 관리",
      "메모 폴더 간 이동",
      "메모 색상 변경",
      "메모 검색 및 자동 저장"
    ],
    tech: ["Flutter", "Dart", "SQLite", "Provider", "Flutter Staggered Grid View"],
    content: "아기자기한 UI를 가진 Flutter 기반 메모 애플리케이션입니다. 메모를 폴더별로 관리하고, 색상 변경과 검색 기능을 제공합니다. SQLite 데이터베이스를 활용해 메모와 폴더 데이터를 로컬에 저장하며, Provider 패턴으로 상태 관리를 구현했습니다. 메모 생성, 수정, 삭제 기능 외에도 폴더 관리, 메모 색상 변경, 검색, 자동 저장 기능을 제공합니다. Flutter의 Staggered Grid View를 활용해 다양한 크기의 메모 카드를 표시하며, 메모 내용에 따라 동적으로 카드 크기가 조절됩니다. 날짜 포맷 유틸리티를 통해 상대적 시간 표시(오늘, 어제, n일 전 등)를 제공합니다.",
    url: "https://memo-app-bfad2.web.app/"
  },
  "webbler": {
    title: "Webbler",
    desc: "전문적인 웹사이트 제작 에이전시",
    image: "/images/webbler.png",
    features: [
      "다양한 웹디자인 템플릿 제공 (200+)",
      "맞춤형 UI 위젯 (100+)",
      "기획부터 디자인, 개발까지 통합 서비스",
      "5단계 웹사이트 제작 프로세스",
      "전략적 콘텐츠 설계 및 UI 구현"
    ],
    tech: ["HTML5/CSS3", "JavaScript", "PHP", "UI/UX 디자인"],
    content: "  webbler는 '싸고, 빠르고, 아름답게' 웹사이트를 제작하는 디지털 에이전시입니다. 200개 이상의 웹디자인 템플릿과 100개 이상의 맞춤 UI 위젯을 보유하고 있으며, 기획부터 디자인, 개발까지 5단계 과정을 통해 전문적인 웹사이트를 제작합니다. webbler는 단순히 노코드 툴이 아닌, 목적에 맞게 콘텐츠를 전략적으로 설계하고 편리한 사용성을 고려하여 웹사이트를 개발하는 전문 에이전시입니다. 기본 제작 비용은 200만원부터 시작하며, 기획자, 디자이너, 개발자가 의뢰인과 함께 소통하며 웹사이트를 만드는 서비스를 제공합니다.",
    url: "http://df00.dothome.co.kr/webbler/"
  },
};

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const project = projectDetails[id];
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  
  if (!project) return notFound();
  
  const openImageModal = () => setIsImageModalOpen(true);
  const closeImageModal = () => setIsImageModalOpen(false);
  
  return (
    <Main>
      <Title>{project.title}</Title>
      <Subtitle>{project.desc}</Subtitle>
      
      <ProjectImageWrapper onClick={openImageModal}>
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
          priority
          style={{
            width: '100%',
            maxWidth: '500px',
            height: 'auto',
            borderRadius: '12px',
            margin: '2rem 0',
          }}
        />
      </ProjectImageWrapper>
      
      {isImageModalOpen && (
        <ModalOverlay onClick={closeImageModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalCloseButton onClick={closeImageModal}>✕</ModalCloseButton>
            <Image
              src={project.image}
              alt={project.title}
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
      
      <ContentSection>
        <h3>프로젝트 소개</h3>
        <p style={{marginBottom:'1rem', textIndent: '0.5em'}}>{project.content}</p>
        
        <h3>주요 기능</h3>
        <FeatureList>
          {project.features.map((feature, index) => (
            <FeatureItem key={index}>{feature}</FeatureItem>
          ))}
        </FeatureList>
        
        <h3>사용 기술</h3>
        <FeatureList>
          {project.tech.map((tech, index) => (
            <FeatureItem key={index}>{tech}</FeatureItem>
          ))}
        </FeatureList>
        
        {project.url && (
          <ProjectLink href={project.url} target="_blank" rel="noopener noreferrer">
            프로젝트 보러가기 →
          </ProjectLink>
        )}
      </ContentSection>
    </Main>
  );
}
