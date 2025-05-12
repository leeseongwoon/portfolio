"use client";
import React from "react";
import { Main, Title, Subtitle } from "@/styles/ProjectsStyles";
import { notFound } from "next/navigation";
import Image from "next/image";

const projectDetails: Record<
  string,
  { title: string; desc: string; content: string; image: string }
> = {
  "hello-money": {
    title: "HELLO, MONEY",
    desc: "지출관리 및 시각화 애플리케이션",
    image: "/images/images.png",
    content: `
      • 주요 기능: 카테고리별 지출 입력, 월별 통계, 시각화 그래프 제공\n
      • 사용 기술: React, Next.js, TypeScript, Styled-components\n
      • 설명: 쉽고 직관적으로 지출을 관리할 수 있도록 만든 개인용 가계부 웹앱입니다.\n
      • 특징: 반응형 UI, 데이터 시각화, 간편한 입력 UX
    `,
  },
  "favorite-countries": {
    title: "FAVORITE COUNTRIES",
    desc: "좋아하는 국가 리스트 만들기 웹사이트",
    image: "/images/images.png",
    content: `
      • 주요 기능: 국가 검색, 즐겨찾기 추가/삭제, 국가별 정보 제공\n
      • 사용 기술: React, Next.js, TypeScript, Styled-components\n
      • 설명: 세계 여러 나라의 정보를 한눈에 보고, 내가 좋아하는 나라를 리스트로 관리할 수 있는 웹사이트입니다.\n
      • 특징: 깔끔한 UI, 빠른 검색, 국가별 상세 정보
    `,
  },
};

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const project = projectDetails[id];  if (!project) return notFound();
  return (
    <Main>
      <Title>{project.title}</Title>
      <Subtitle>{project.desc}</Subtitle>
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
      <pre
        style={{
          textAlign: "left",
          background: "#333",
          borderRadius: 8,
          fontSize: "1.05rem",
        }}
      >
        {project.content}
      </pre>
    </Main>
  );
}
