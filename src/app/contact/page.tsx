'use client';

import { Main, Title, Subtitle } from '../../styles/ContactStyles';
import styled from 'styled-components';
import Image from 'next/image';

const ContactInfo = styled.div`
  font-size: 1.1rem;
  line-height: 2;
  max-width: 500px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
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

export default function Contact() {
  return (
    <Main>
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
          <ContactLabel>Kakao:</ContactLabel>
          <ContactLink href="https://open.kakao.com/o/sw0_0mm" target="_blank" rel="noopener noreferrer">
            sw0_0mm
          </ContactLink>
        </ContactItem>
      </ContactInfo>
      
      <KakaoSection>
        <KakaoProfile>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
          </div>
        </KakaoProfile>
      </KakaoSection>
    </Main>
  );
} 