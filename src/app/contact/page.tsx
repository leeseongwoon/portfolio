"use client";

import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { useState, useEffect } from "react";
import Head from "next/head";
import PageLayout, { PageTitle, PageSubtitle } from "@/components/PageLayout";

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

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// 메인 컨테이너 (좌우 분할 레이아웃)
const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

// 애니메이션 컴포넌트들
const AnimatedTitle = styled(PageTitle)`
  animation: ${fadeInUp} 1s ease-out;
`;

const AnimatedSubtitle = styled(PageSubtitle)`
  animation: ${fadeInUp} 1s ease-out 0.3s both;
`;

// 컨택트 폼 스타일
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: ${fadeInUp} 1s ease-out 0.6s both;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: #e2e8f0;
  text-align: start;
  padding-left: 10px;
`;

const FormInput = styled.input`
  padding: 1rem;
  border: 2px solid rgba(56, 189, 248, 0.2);
  border-radius: 12px;
  background: rgba(56, 189, 248, 0.05);
  color: #e2e8f0;
  font-size: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:focus {
    outline: none;
    border-color: rgba(56, 189, 248, 0.6);
    background: rgba(56, 189, 248, 0.1);
    box-shadow: 0 0 20px rgba(56, 189, 248, 0.2);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const FormTextarea = styled.textarea`
  padding: 1rem;
  border: 2px solid rgba(56, 189, 248, 0.2);
  border-radius: 12px;
  background: rgba(56, 189, 248, 0.05);
  color: #e2e8f0;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: rgba(56, 189, 248, 0.6);
    background: rgba(56, 189, 248, 0.1);
    box-shadow: 0 0 20px rgba(56, 189, 248, 0.2);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #38bdf8, #0ea5e9);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background: linear-gradient(135deg, #0ea5e9, #0284c7);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(56, 189, 248, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

// 우측 연락처 정보 스타일
const ContactInfoSection = styled.div`
  animation: ${fadeInUp} 1s ease-out 0.8s both;

  @media (max-width: 1024px) {
    max-width: 350px;
    margin: 0 auto;
  }
`;

const AnimatedContactInfo = styled.div`
  font-size: 1.1rem;
  line-height: 2;
  max-width: 500px;
`;

const AnimatedContactItem = styled.div`
  display: flex;
  align-items: center;
  text-align: start;
  padding: 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(56, 189, 248, 0.1);
    transform: translateX(10px);
    box-shadow: 0 5px 15px rgba(56, 189, 248, 0.2);
  }
`;

const AnimatedContactLabel = styled.span`
  font-weight: bold;
  width: 80px;
  color: #38bdf8;
`;

const AnimatedContactLink = styled.a`
  color: #38bdf8;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: #0ea5e9;
    text-decoration: underline;
    transform: translateY(-2px);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #38bdf8, #0ea5e9);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const AnimatedKakaoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  animation: ${fadeInUp} 1s ease-out 0.9s both;
`;

const AnimatedKakaoProfile = styled.div`
  text-align: center;
  width: 100%;
`;

const AnimatedProfileImageWrapper = styled.div`
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05) translateY(-5px);
    box-shadow: 0 20px 40px rgba(56, 189, 248, 0.3);
    animation: ${bounce} 1s ease;
  }

  &:active {
    animation: ${pulse} 0.3s ease;
  }
`;

// 모달 컴포넌트 추가
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  backdrop-filter: blur(5px);
  animation: ${fadeInUp} 0.3s ease-out;
`;

const ModalContent = styled.div`
  max-width: 90%;
  max-height: 90%;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1001;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }
`;

export default function Contact() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // 페이지 타이틀 설정
    document.title = "연락처 - 이성운 포트폴리오";
  }, []);

  const openImageModal = () => setIsImageModalOpen(true);
  const closeImageModal = () => setIsImageModalOpen(false);

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
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('이메일이 성공적으로 전송되었습니다!');
        // 폼 초기화
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
      console.error('이메일 전송 오류:', error);
      alert('이메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout variant="contact">
      <Head>
        <title>연락처 - 이성운 포트폴리오</title>
      </Head>
      <AnimatedTitle>Contact</AnimatedTitle>
      <AnimatedSubtitle>
        문의사항이 있으시면 아래 폼을 작성해주세요.
      </AnimatedSubtitle>

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
          <AnimatedContactInfo>
            <AnimatedContactItem>
              <AnimatedContactLabel>Email:</AnimatedContactLabel>
              <AnimatedContactLink href="mailto:sw0523_dr@kakao.com">
                sw0523_dr@kakao.com
              </AnimatedContactLink>
            </AnimatedContactItem>
            <AnimatedContactItem>
              <AnimatedContactLabel>GitHub:</AnimatedContactLabel>
              <AnimatedContactLink
                href="https://github.com/leeseongwoon"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/leeseongwoon
              </AnimatedContactLink>
            </AnimatedContactItem>
            <AnimatedContactItem>
              <AnimatedContactLabel>LinkedIn:</AnimatedContactLabel>
              <AnimatedContactLink
                href="https://www.linkedin.com/in/%EC%84%B1%EC%9A%B4-%EC%9D%B4-468387355/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Seongwoon Lee
              </AnimatedContactLink>
            </AnimatedContactItem>
            <AnimatedContactItem>
              <AnimatedContactLabel>Kakao:</AnimatedContactLabel>
              <AnimatedContactLink
                href="https://open.kakao.com/o/sw0_0mm"
                target="_blank"
                rel="noopener noreferrer"
              >
                sw0_0mm
              </AnimatedContactLink>
            </AnimatedContactItem>
          </AnimatedContactInfo>

          <AnimatedKakaoSection>
            <AnimatedKakaoProfile>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AnimatedProfileImageWrapper onClick={openImageModal}>
                  <Image
                    src="/images/KakaoTalk_Profile.png"
                    alt="카카오톡 프로필"
                    width={200}
                    height={0}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "200px",
                      borderRadius: "12px",
                    }}
                    priority
                  />
                </AnimatedProfileImageWrapper>
              </div>
            </AnimatedKakaoProfile>
          </AnimatedKakaoSection>
        </ContactInfoSection>
      </ContactContainer>

      {isImageModalOpen && (
        <ModalOverlay onClick={closeImageModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalCloseButton onClick={closeImageModal}>✕</ModalCloseButton>
            <Image
              src="/images/KakaoTalk_Profile.png"
              alt="카카오톡 프로필"
              width={800}
              height={0}
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "90vh",
                borderRadius: "12px",
              }}
              priority
            />
          </ModalContent>
        </ModalOverlay>
      )}
    </PageLayout>
  );
}
