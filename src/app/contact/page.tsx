'use client';

import { Main, Title, Subtitle } from '../../styles/ContactStyles';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import { useState, useEffect } from 'react';
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

// 애니메이션 컴포넌트들
const AnimatedTitle = styled(Title)`
  animation: ${fadeInUp} 1s ease-out;
`;

const AnimatedSubtitle = styled(Subtitle)`
  animation: ${fadeInUp} 1s ease-out 0.3s both;
`;

const AnimatedContactInfo = styled.div` 
  font-size: 1.1rem;
  line-height: 2;
  max-width: 500px;
  animation: ${fadeInUp} 1s ease-out 0.6s both;
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
    content: '';
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
  
  useEffect(() => {
    // 페이지 타이틀 설정
    document.title = "연락처 - 이성운 포트폴리오";
  }, []);
  
  const openImageModal = () => setIsImageModalOpen(true);
  const closeImageModal = () => setIsImageModalOpen(false);
  
  return (
    <Main>
      <Head>
        <title>연락처 - 이성운 포트폴리오</title>
      </Head>
      <AnimatedTitle>Contact</AnimatedTitle>
      <AnimatedSubtitle>아래 연락처로 문의해주세요.</AnimatedSubtitle>
      
      <AnimatedContactInfo>
        <AnimatedContactItem>
          <AnimatedContactLabel>Email:</AnimatedContactLabel>
          <AnimatedContactLink href="mailto:sw0523_dr@kakao.com">sw0523_dr@kakao.com</AnimatedContactLink>
        </AnimatedContactItem>
        <AnimatedContactItem>
          <AnimatedContactLabel>GitHub:</AnimatedContactLabel>
          <AnimatedContactLink href="https://github.com/leeseongwoon" target="_blank" rel="noopener noreferrer">
            github.com/leeseongwoon
          </AnimatedContactLink>
        </AnimatedContactItem>
        <AnimatedContactItem>
          <AnimatedContactLabel>Kakao:</AnimatedContactLabel>
          <AnimatedContactLink href="https://open.kakao.com/o/sw0_0mm" target="_blank" rel="noopener noreferrer">
            sw0_0mm
          </AnimatedContactLink>
        </AnimatedContactItem>
      </AnimatedContactInfo>
      
      <AnimatedKakaoSection>
        <AnimatedKakaoProfile>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <AnimatedProfileImageWrapper onClick={openImageModal}>
              <Image 
                src="/images/KakaoTalk_Profile.png" 
                alt="카카오톡 프로필" 
                width={200}
                height={0}
                style={{ 
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '200px',
                  borderRadius: '12px' 
                }}
                priority
              />
            </AnimatedProfileImageWrapper>
          </div>
        </AnimatedKakaoProfile>
      </AnimatedKakaoSection>
      
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
                width: 'auto',
                height: 'auto',
                maxWidth: '100%',
                maxHeight: '90vh',
                borderRadius: '12px',
              }}
              priority
            />
          </ModalContent>
        </ModalOverlay>
      )}
    </Main>
  );
} 