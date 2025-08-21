"use client";

import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import GalleryModal, { GalleryData } from "@/components/GalleryModal";

// 애니메이션 키프레임
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

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const bounceIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%) scale(0.3);
  }
  50% {
    opacity: 1;
    transform: translateX(-50%) scale(1.05);
  }
  70% {
    transform: translateX(-50%) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }
`;

const drawLine = keyframes`
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
`;

// 스타일 컴포넌트
const CareerContainer = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  text-align: start;
  padding: 6rem 2rem;
  font-family: "Pretendard", -apple-system, BlinkMacSystemFont, system-ui,
    Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  overflow-x: hidden;

  /* 데스크톱에서 더 임팩트 있는 배경 그라데이션 */
  background: radial-gradient(
      ellipse 80% 50% at 50% -20%,
      rgba(56, 189, 248, 0.15),
      transparent
    ),
    radial-gradient(
      ellipse 60% 80% at 80% 120%,
      rgba(56, 189, 248, 0.1),
      transparent
    );

  @media (max-width: 1024px) {
    padding: 4rem 1.5rem;
    background: none;
  }

  @media (max-width: 767px) {
    padding: 2rem 1rem;
    min-height: auto;
  }
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 900;
  margin-bottom: 3rem;
  letter-spacing: -3px;
  background: linear-gradient(135deg, #38bdf8, #0ea5e9, #06b6d4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${fadeInUp} 1s ease-out;
  position: relative;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 6px;
    background: linear-gradient(90deg, #38bdf8, #0ea5e9);
    border-radius: 2px;
    opacity: 1;
  }

  @media (max-width: 1024px) {
    font-size: 3.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 767px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    letter-spacing: -1px;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 3rem auto 0;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 100%;
    background: linear-gradient(to bottom, #38bdf8, #0ea5e9, #06b6d4);
    border-radius: 3px;
    animation: ${drawLine} 2s ease-out 0.5s both;
    box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
  }

  @media (max-width: 1024px) {
    max-width: 900px;
    margin: 2rem auto 0;

    &::before {
      width: 4px;
      box-shadow: 0 0 15px rgba(56, 189, 248, 0.2);
    }
  }

  @media (max-width: 768px) {
    margin: 1.5rem auto 0;
    max-width: 700px;

    &::before {
      left: 15px;
      width: 3px;
      box-shadow: none;
    }
  }

  @media (max-width: 480px) {
    &::before {
      left: 12px;
      width: 2px;
    }
  }
`;

const TimelineItem = styled.div<{ $isLeft?: boolean; $delay: number }>`
  position: relative;
  margin-bottom: 6rem;
  animation: ${(props) => (props.$isLeft ? slideInLeft : slideInRight)} 0.8s
    ease-out ${(props) => props.$delay + 0.8}s both;

  @media (max-width: 1024px) {
    margin-bottom: 4rem;
  }

  @media (max-width: 768px) {
    margin-left: 50px;
    margin-bottom: 3rem;
    animation: ${slideInRight} 0.8s ease-out ${(props) => props.$delay + 0.8}s
      both;
  }

  @media (max-width: 480px) {
    margin-left: 40px;
    margin-bottom: 2rem;
  }
`;

const TimelineContent = styled.div<{ $isLeft?: boolean }>`
  position: relative;
  width: 48%;
  padding: 2.5rem;
  background: linear-gradient(145deg, #333, #2a2a2a);
  border-radius: 24px;
  border: 2px solid #444;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  backdrop-filter: blur(10px);

  ${(props) => (props.$isLeft ? "margin-left: 0; margin-right: auto;" : "margin-left: auto; margin-right: 0;")}

  &:hover {
    transform: translateY(-12px) scale(1.03);
    box-shadow: 0 25px 50px rgba(56, 189, 248, 0.25),
      0 0 40px rgba(56, 189, 248, 0.1);
    border-color: #38bdf8;
    background: linear-gradient(145deg, #353535, #2d2d2d);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 2px;
    background: linear-gradient(
      145deg,
      rgba(56, 189, 248, 0.3),
      rgba(6, 182, 212, 0.1)
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }

  &:hover::after {
    opacity: 1;
  }

  &:hover::before {
    ${(props) =>
      props.$isLeft
        ? `border-left-color: #38bdf8;`
        : `border-right-color: #38bdf8;`}
  }

  @media (max-width: 1024px) {
    width: 45%;
    padding: 1.3rem;
  }

  @media (max-width: 768px) {
    width: calc(100% - 50px);
    margin-left: 0 !important;
    padding: 1.2rem;

    /* 터치 디바이스에서 호버 효과 조정 */
    @media (hover: none) {
      &:active {
        transform: translateY(-4px) scale(1.01);
        box-shadow: 0 8px 20px rgba(56, 189, 248, 0.15);
        border-color: #38bdf8;
      }
    }

    &:hover::before {
      border-right-color: #38bdf8 !important;
      border-left-color: transparent !important;
    }
  }

  @media (max-width: 480px) {
    width: calc(100% - 40px);
    padding: 1rem;
    border-radius: 12px;

    &::before {
      top: calc(0.5rem + 3px);
      left: -20px !important;
      border-width: 10px;
    }
  }
`;

const TimelineDot = styled.div<{ $delay: number }>`
  position: absolute;
  left: 50%;
  top: 9rem;
  transform: translateX(-50%);
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #38bdf8, #0ea5e9);
  border: 4px solid #222222;
  border-radius: 50%;
  z-index: 1;
  animation: ${bounceIn} 0.6s ease-out ${(props) => props.$delay + 1.2}s
    forwards;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.4);

  &:hover {
    animation: none;
    transform: translateX(-50%) scale(1.4);
    box-shadow: 0 0 30px rgba(56, 189, 248, 0.8);
  }

  @media (max-width: 1024px) {
    width: 18px;
    height: 18px;
    border-width: 3px;
    top: calc(1.3rem + 6px);
    transition: transform 0.3s ease;

    &:hover {
      animation: none;
      transform: translateX(-50%) scale(1.25);
    }
  }

  @media (max-width: 768px) {
    left: -43px;
    transform: translateX(0);
    width: 16px;
    height: 16px;
    border-width: 3px;
    top: 1.2rem;
    transition: transform 0.3s ease;
    animation: none;

    /* 터치 디바이스에서 호버 효과 조정 */
    @media (hover: none) {
      &:active {
        transform: translateX(0) scale(1.2);
        box-shadow: 0 0 15px rgba(56, 189, 248, 0.5);
      }
    }

    &:hover {
      transform: translateX(0) scale(1.3);
    }
  }
  /* 
  @media (max-width: 480px) {
    left: 12px;
    transform: translateX(0);
    width: 14px;
    height: 14px;
    border-width: 2px;
    top: calc(1rem + 0.5rem);
    
    &:hover {
      transform: translateX(0) scale(1.2);
    }
  } */
`;

const CompanyName = styled.h3`
  color: #38bdf8;
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 0.8rem;
  text-shadow: 0 0 10px rgba(56, 189, 248, 0.3);
  letter-spacing: -0.5px;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
    margin-bottom: 0.6rem;
  }

  @media (max-width: 767px) {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    text-shadow: none;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const Position = styled.h4`
  color: #f8f9fa;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  opacity: 0.9;

  @media (max-width: 1024px) {
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
  }

  @media (max-width: 767px) {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Period = styled.p`
  color: #ccc;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  font-weight: 500;

  @media (max-width: 1023px) {
    font-size: 0.9rem;
  }

  @media (max-width: 767px) {
    font-size: 0.85rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Description = styled.p`
  color: #e2e8f0;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.9;

  @media (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 767px) {
    font-size: 0.95rem;
    line-height: 1.4;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.3;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
  justify-content: start;

  @media (max-width: 1023px) {
    gap: 0.6rem;
    margin-top: 0.8rem;
  }

  @media (max-width: 767px) {
    gap: 0.5rem;
    margin-top: 0.6rem;
  }

  @media (max-width: 480px) {
    gap: 0.4rem;
  }
`;

const TechItem = styled.span<{ $index: number }>`
  background: #444;
  border: 1px solid #555;
  border-radius: 999px;
  padding: 0.375rem 1rem;
  font-size: 0.875rem;
  color: #f8f9fa;
  transition: all 0.3s ease;
  animation: ${scaleIn} 0.4s ease-out ${(props) => props.$index * 0.1 + 1.8}s
    both;
  cursor: pointer;

  &:hover {
    background: #38bdf8;
    color: #000;
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 4px 12px rgba(56, 189, 248, 0.3);
  }

  @media (max-width: 1023px) {
    font-size: 0.85rem;
    padding: 0.35rem 0.9rem;
  }

  @media (max-width: 767px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;

    /* 터치 디바이스에서 호버 효과 조정 */
    @media (hover: none) {
      &:active {
        background: #38bdf8;
        color: #000;
        transform: translateY(-1px) scale(1.02);
        box-shadow: 0 2px 8px rgba(56, 189, 248, 0.3);
      }
    }
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 0.25rem 0.7rem;

    &:hover {
      transform: translateY(-1px) scale(1.03);
    }
  }
`;

export default function Career() {
  const [isClient, setIsClient] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState<GalleryData | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    document.title = "Career - 이성운 포트폴리오";
  }, []);

  const openModal = (galleryData: GalleryData) => {
    setSelectedGallery(galleryData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGallery(null);
  };

  if (!isClient) return null;

  const careerData = [
    {
      company: "소프트웨어공작소",
      position: "퍼블리셔, 프론트엔드 개발자",
      period: "2024. 11 - 2025. 0",
      description:
        "다양한 클라이언트와 협업하여 웹 개발 및 유지보수를 담당. TOYOTA 오퍼레이터 대시보드, 콜센터 대시보드 등",
      techStack: ["HTML", "CSS", "JavaScript", "JQuery"],
      gallery: {
        title: "소프트웨어공작소",
        subtitle: "퍼블리셔, 프론트엔드 개발자",
        description:
          "TOYOTA 오퍼레이터 대시보드와 콜센터 대시보드 개발을 담당했습니다. 사용자 친화적인 인터페이스와 반응형 웹 디자인을 구현하여 운영 효율성을 크게 향상시켰습니다.",
        images: ["/images/images.png", "/images/webbler.png"],
        techStack: ["HTML5", "CSS3", "JavaScript ES6+", "jQuery"],
        links: [],
      },
    },
    {
      company: "프리아이브",
      position: "퍼블리셔",
      period: "2024. 06 - 2024. 08",
      description:
        "[AIDT] 아이스크림미디어의 초등학교 영어, 수학 디지털 교과서 컨텐츠 제작",
      techStack: ["HTML", "CSS", "JavaScript"],
      gallery: {
        title: "프리아이브",
        subtitle: "AIDT 디지털 교과서 컨텐츠 제작",
        description:
          "아이스크림미디어의 초등학교 수학 디지털 교과서 컨텐츠를 제작했습니다. 인터랙티브한 학습 경험을 제공하기 위해 애니메이션과 게임 요소를 포함한 교육용 웹 컨텐츠를 개발했습니다.",
        images: ["/images/images.png"],
        techStack: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
        links: [],
      },
    },
    {
      company: "학습 과정",
      position: "웹 개발 학습",
      period: "2023년 10월 - 현재",
      description:
        "웹 개발의 기초부터 고급 기술까지 학습 중입니다. HTML, CSS, JavaScript 기초부터 시작하여 React, Next.js 등 모던 프론트엔드 기술을 습득했습니다.",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "JQuery",
        "Git",
        "React",
        "Firebase",
      ],
      gallery: {
        title: "개인 학습 프로젝트",
        subtitle: "웹 개발 포트폴리오",
        description:
          "웹 개발 학습 과정에서 만든 다양한 프로젝트들입니다. 메모 앱, 포트폴리오 웹사이트, 그리고 다양한 실습 프로젝트를 통해 프론트엔드 개발 역량을 키워왔습니다.",
        images: ["/images/memo-app.png", "/images/webbler.png"],
        techStack: [
          "React",
          "Next.js",
          "TypeScript",
          "Styled-Components",
          "Firebase",
        ],
        links: [
          {
            label: "GitHub 보기",
            url: "https://github.com/leeseongwoon",
          },
        ],
      },
    },
  ];

  return (
    <CareerContainer>
      <Title>Career</Title>
      <Timeline>
        {careerData.map((item, index) => (
          <TimelineItem
            key={index}
            $isLeft={index % 2 === 0}
            $delay={index * 0.3}
          >
            <TimelineDot $delay={index * 0.3} />
            <TimelineContent
              $isLeft={index % 2 === 0}
              onClick={() => openModal(item.gallery)}
            >
              <CompanyName>{item.company}</CompanyName>
              <Position>{item.position}</Position>
              <Period>{item.period}</Period>
              <Description>{item.description}</Description>
              <TechStack>
                {item.techStack.map((tech, techIndex) => (
                  <TechItem key={techIndex} $index={techIndex}>
                    {tech}
                  </TechItem>
                ))}
              </TechStack>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>

      <GalleryModal
        isOpen={isModalOpen}
        onClose={closeModal}
        data={selectedGallery}
      />
    </CareerContainer>
  );
}
