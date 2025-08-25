"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import PageLayout from "../components/PageLayout";
import MouseTracker from "../components/MouseTracker";

import Image from "next/image";
import GalleryModal, { GalleryData } from "@/components/GalleryModal";

// 스타일 import
import {
  GlobalAnimationStyles,
  Section,
  SectionSubtitle,
  AnimatedSubtitle,
  AnimatedTitle,
} from "../styles/CommonStyles";

import {
  HomeSection,
  TypingText,
  TypingContainer,
} from "../styles/HomeSection";

import {
  SkillsSection,
  SkillsContainer,
  StickyTitleContainer,
  SkillsTitle,
  SkillsSubtitle,
  SkillsCardsContainer,
  SkillCard,
  SkillCardTitle,
  SkillList,
  SkillItem,
  SkillDot,
  SkillText,
} from "../styles/SkillsSection";

import {
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectTitle,
  ProjectDesc,
  ProjectCategory,
} from "../styles/ProjectsSection";

import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  CompanyName,
  Position,
  Period,
  Description,
} from "../styles/CareerSection";

import {
  ContactContainer,
  ContactForm,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
  ContactInfoSection,
  ContactInfo,
  ContactItem,
  ContactLabel,
  ContactLink,
} from "../styles/ContactSection";

import {
  FooterSection,
  FooterContainer,
  FooterCopyright,
  CopyrightText,
  CopyrightYear,
} from "../styles/FooterSection";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState<GalleryData | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  


  useEffect(() => {
    setIsClient(true);
    document.title = "이성운 - 웹 개발자 포트폴리오";
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("이메일이 성공적으로 전송되었습니다!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert(`오류: ${result.error}`);
      }
    } catch (error) {
      console.error("이메일 전송 오류:", error);
      alert("이메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const openModal = (galleryData: GalleryData) => {
    setSelectedGallery(galleryData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGallery(null);
  };

  if (!isClient) return null;

  const projects = [
    {
      id: "wealthwise",
      image:
        "https://api.microlink.io?url=https://wealthwise-71d31.web.app&screenshot=true&meta=false&embed=screenshot.url",
      title: "WealthWise",
      desc: "자산 관리 및 재무 계획 웹 애플리케이션",
      category: "React",
      url: "https://wealthwise-71d31.web.app/",
    },
    {
      id: "job-counseling-chatbot",
      image:
        "https://api.microlink.io?url=https://job-counseling-chatbot.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
      title: "Job Counseling Chatbot",
      desc: "AI 기반 취업 상담 챗봇 서비스",
      category: "Next.js",
      url: "https://job-counseling-chatbot.vercel.app/",
    },
    {
      id: "tosspaments-cafe",
      image:
        "https://api.microlink.io?url=https://tosspaments-cafe.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
      title: "Tosspaments Cafe",
      desc: "토스페이먼츠 결제 연동 카페 주문 서비스",
      category: "Next.js",
      url: "https://tosspaments-cafe.vercel.app/",
    },
    {
      id: "memo-app",
      image: "/images/memo-app.png",
      title: "Memo App",
      desc: "실시간 메모 공유 웹 애플리케이션",
      category: "Flutter",
      url: "https://memo-app-bfad2.web.app/",
    },
    {
      id: "webbler",
      image: "/images/webbler.png",
      title: "Webbler",
      desc: "전문적인 웹사이트 제작 에이전시",
      category: "기타",
      url: "http://df00.dothome.co.kr/webbler/",
    },
  ];

  const careerData = [
    {
      company: "소프트웨어공작소",
      position: "퍼블리셔, 프론트엔드 개발자",
      period: "2024. 11 - 2025. 06",
      description:
        "다양한 클라이언트와 협업하여 웹 개발 및 유지보수를 담당. TOYOTA 오퍼레이터 대시보드, 콜센터 대시보드 등",
      techStack: ["HTML", "CSS", "JavaScript", "JQuery"],
      gallery: {
        title: "소프트웨어공작소",
        subtitle: "퍼블리셔, 프론트엔드 개발자",
        description:
          "TOYOTA 오퍼레이터 대시보드와 콜센터 대시보드 개발을 담당했습니다.",
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
          "아이스크림미디어의 초등학교 수학 디지털 교과서 컨텐츠를 제작했습니다.",
        images: ["/images/images.png"],
        techStack: ["HTML5", "CSS3", "JavaScript"],
        links: [],
      },
    },
    {
      company: "학습 과정",
      position: "웹 개발 학습",
      period: "2023년 10월 - 현재",
      description:
        "웹 개발에 필요한 언어를 학습 중입니다. HTML, CSS, JavaScript 기초부터 시작하여 React, Next.js 등 모던 프론트엔드 기술을 습득했습니다.",
      techStack: [
        "HTML",
        "JavaScript(ES6+, JQuery)",
        "React",
        "Next.js",
        "TypeScript",
        "Firebase",
        "CSS(scss, Module.css, Styled-Components)",
      ],
      gallery: {
        title: "개인 학습 프로젝트",
        subtitle: "웹 개발 포트폴리오",
        description: "웹 개발 학습 과정에서 만든 다양한 프로젝트들입니다.",
        images: ["/images/memo-app.png", "/images/webbler.png"],
        techStack: [
          "HTML",
          "CSS(scss, Module.css, Styled-Components)",
          "JavaScript(ES6+, JQuery)",
          "React",
          "Next.js",
          "TypeScript",
          "Firebase",
        ],
        links: [
          { label: "GitHub 보기", url: "https://github.com/leeseongwoon" },
        ],
      },
    },
  ];

  return (
    <PageLayout variant="home">
      <Head>
        <title>이성운 - 웹 개발자 포트폴리오</title>
      </Head>

      {/* 전역 애니메이션 스타일 */}
      <GlobalAnimationStyles />

      {/* 마우스 추적 요소 */}
      <MouseTracker />

      {/* Home 섹션 */}
      <HomeSection id="home">
          <AnimatedSubtitle>
            사용자의 즐거운 경험을 설계하는
            <span>웹 개발자 이성운입니다.</span>
            <br />
            복잡한 문제일수록 단순하고 명쾌한 UI로 풀어내는 것을 즐기며,
            <br />
            일상에 작은 영감을 주는 인터랙션을 구현합니다.
          </AnimatedSubtitle>

          {/* 타이핑 애니메이션 텍스트 */}
          <TypingContainer>
            <TypingText>Welcome to my portfolio...</TypingText>
          </TypingContainer>
      </HomeSection>

      {/* Skills 섹션 */}
      <SkillsSection id="skills">
        <SkillsContainer>
          {/* 좌측: 스티키 제목 */}
          <StickyTitleContainer>
            <SkillsTitle>Skills</SkillsTitle>
            <SkillsSubtitle>
              경험을 설계하는 기술 스택
              <br />더 나은 사용자 경험을 위한 기술
            </SkillsSubtitle>
          </StickyTitleContainer>

          {/* 우측: 스킬 카드들 */}
          <SkillsCardsContainer>
            {/* 퍼블리싱 */}
            <SkillCard>
              <SkillCardTitle>Publishing</SkillCardTitle>
              <SkillList>
                {[
                  "HTML5",
                  "CSS3",
                  "SCSS",
                  "반응형 웹",
                  "크로스 브라우징",
                  "웹 접근성",
                ].map((skill) => (
                  <SkillItem key={skill}>
                    <SkillDot />
                    <SkillText>{skill}</SkillText>
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCard>

            {/* 프론트엔드 */}
            <SkillCard>
              <SkillCardTitle>Frontend</SkillCardTitle>
              <SkillList>
                {[
                  "JavaScript",
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Styled-Components",
                  "CSS Modules",
                ].map((skill) => (
                  <SkillItem key={skill}>
                    <SkillDot />
                    <SkillText>{skill}</SkillText>
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCard>

            {/* 툴스 */}
            <SkillCard>
              <SkillCardTitle>Tools</SkillCardTitle>
              <SkillList>
                {["Git Hub", "VS Code", "cursor"].map((skill) => (
                  <SkillItem key={skill}>
                    <SkillDot />
                    <SkillText>{skill}</SkillText>
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCard>

            {/* 익스퍼리언스 */}
            <SkillCard>
              <SkillCardTitle>Experience</SkillCardTitle>
              <SkillList>
                {[
                  "SEO 최적화",
                  "성능 최적화",
                  "사용자 경험 설계",
                  "애니메이션 구현",
                  "상태 관리",
                ].map((skill) => (
                  <SkillItem key={skill}>
                    <SkillDot />
                    <SkillText>{skill}</SkillText>
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCard>
          </SkillsCardsContainer>
        </SkillsContainer>
      </SkillsSection>

      {/* Projects 섹션 */}
      <Section id="projects">
        <AnimatedTitle as="h2">Projects</AnimatedTitle>
        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              onClick={() => (window.location.href = `/projects/${project.id}`)}
            >
              <ProjectImage>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </ProjectImage>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDesc>{project.desc}</ProjectDesc>
              <ProjectCategory>{project.category}</ProjectCategory>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Section>

      {/* Career 섹션 */}
      <Section id="career">
        <AnimatedTitle as="h2">Career</AnimatedTitle>
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
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginTop: "0.8rem",
                  }}
                >
                  {item.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      style={{
                        background: "#444",
                        border: "1px solid #555",
                        borderRadius: "999px",
                        padding: "0.3rem 0.8rem",
                        fontSize: "0.8rem",
                        color: "#f8f9fa",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#38bdf8";
                        e.currentTarget.style.color = "#000";
                        e.currentTarget.style.transform =
                          "translateY(-2px) scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#444";
                        e.currentTarget.style.color = "#f8f9fa";
                        e.currentTarget.style.transform =
                          "translateY(0) scale(1)";
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Section>

      {/* Contact 섹션 */}
      <Section id="contact">
        <AnimatedTitle as="h2">Contact</AnimatedTitle>
        <SectionSubtitle>
          문의사항이 있으시면 아래 폼을 작성해주세요.
        </SectionSubtitle>

        <ContactContainer>
          {/* 좌측: 컨택트 폼 */}
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="name">이름 *</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="이름을 입력해주세요"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="email">이메일 *</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="이메일을 입력해주세요"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="subject">제목 *</FormLabel>
              <FormInput
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="문의 제목을 입력해주세요"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="message">메시지 *</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="문의 내용을 자세히 입력해주세요"
                required
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "전송 중..." : "메일 보내기"}
            </SubmitButton>
          </ContactForm>

          {/* 우측: 연락처 정보 */}
          <ContactInfoSection>
            <ContactInfo>
              <ContactItem>
                <ContactLabel>Email:</ContactLabel>
                <ContactLink href="mailto:sw0523_dr@kakao.com">
                  sw0523_dr@kakao.com
                </ContactLink>
              </ContactItem>
              <ContactItem>
                <ContactLabel>GitHub:</ContactLabel>
                <ContactLink
                  href="https://github.com/leeseongwoon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/leeseongwoon
                </ContactLink>
              </ContactItem>
              <ContactItem>
                <ContactLabel>LinkedIn:</ContactLabel>
                <ContactLink
                  href="https://www.linkedin.com/in/%EC%84%B1%EC%9A%B4-%EC%9D%B4-468387355/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Seongwoon Lee
                </ContactLink>
              </ContactItem>
              <ContactItem>
                <ContactLabel>Kakao:</ContactLabel>
                <ContactLink
                  href="https://open.kakao.com/o/sw0_0mm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  sw0_0mm
                </ContactLink>
              </ContactItem>
            </ContactInfo>
          </ContactInfoSection>
        </ContactContainer>
      </Section>

      <GalleryModal
        isOpen={isModalOpen}
        onClose={closeModal}
        data={selectedGallery}
      />

      {/* Footer 섹션 */}
      <FooterSection>
        <FooterContainer>
          <FooterCopyright>
            <CopyrightText>
              © <CopyrightYear>{new Date().getFullYear()}</CopyrightYear>{" "}
              이성운. All rights reserved.
            </CopyrightText>
          </FooterCopyright>
        </FooterContainer>
      </FooterSection>
    </PageLayout>
  );
}
