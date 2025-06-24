'use client';

import { Main, Title, Subtitle } from '../../styles/ContactStyles';
import styled from 'styled-components';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Head from 'next/head';

const ContactInfo = styled.div` 
  font-size: 1.1rem;
  line-height: 2;
  max-width: 500px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  text-align: start;
`;

const ContactLabel = styled.span`
  font-weight: bold;
  width: 80px;
`;

const ContactLink = styled.a`
  color: #38bdf8;
  text-decoration: none;
  transition: color 0.2s;
  
  &:hover {
    color: #0ea5e9;
    text-decoration: underline;
  }
`;

const KakaoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const KakaoProfile = styled.div`
  text-align: center;
  width: 100%;
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
  top: 5px;
  right: 15px;
  background: transparent;
  border: none;
  color: black;
  font-size: 24px;
  cursor: pointer;
`;

const ProfileImageWrapper = styled.div`
  cursor: pointer;
  transition: transform 0.2s;
  display: inline-block;
  
  &:hover {
    transform: scale(1.05);
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
      <Title>Contact</Title>
      <Subtitle>아래 연락처로 문의해주세요.</Subtitle>
      
      <ContactInfo>
        <ContactItem>
          <ContactLabel>Email:</ContactLabel>
          <ContactLink href="mailto:sw0523_dr@kakao.com">sw0523_dr@kakao.com</ContactLink>
        </ContactItem>
        <ContactItem>
          <ContactLabel>GitHub:</ContactLabel>
          <ContactLink href="https://github.com/leeseongwoon" target="_blank" rel="noopener noreferrer">
            github.com/leeseongwoon
          </ContactLink>
        </ContactItem>
        <ContactItem>
          <ContactLabel>LinkedIn:</ContactLabel>
          <ContactLink href="https://www.linkedin.com/in/%EC%84%B1%EC%9A%B4-%EC%9D%B4-468387355/" target="_blank" rel="noopener noreferrer">
          www.linkedin.com/in/이성운
          </ContactLink>
        </ContactItem>
        <ContactItem>
          <ContactLabel>Kakao:</ContactLabel>
          <ContactLink href="https://open.kakao.com/o/sw0_0mm" target="_blank" rel="noopener noreferrer">
            sw0_0mm
          </ContactLink>
        </ContactItem>
      </ContactInfo>
      
      <KakaoSection>
        <KakaoProfile>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ProfileImageWrapper onClick={openImageModal}>
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
            </ProfileImageWrapper>
          </div>
        </KakaoProfile>
      </KakaoSection>
      
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