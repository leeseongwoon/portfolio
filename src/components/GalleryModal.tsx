'use client';

import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// 애니메이션 키프레임
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// 스타일 컴포넌트
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.3s ease-out;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ModalContent = styled.div`
  background: #333;
  border-radius: 20px;
  padding: 2rem;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: ${slideUp} 0.4s ease-out;
  border: 1px solid #444;

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    max-height: 95vh;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid #38bdf8;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #38bdf8;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background: #38bdf8;
    color: #000;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 1.1rem;
  }
`;

const ProjectTitle = styled.h2`
  color: #38bdf8;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  margin-right: 3rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-right: 2.5rem;
  }
`;

const ProjectSubtitle = styled.h3`
  color: #f8f9fa;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

const ProjectDescription = styled.p`
  color: #e2e8f0;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    margin-bottom: 1.5rem;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid #444;
  transition: all 0.3s ease;
  animation: ${zoomIn} 0.5s ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    border-color: #38bdf8;
    box-shadow: 0 8px 25px rgba(56, 189, 248, 0.2);
  }

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechItem = styled.span`
  background: #444;
  border: 1px solid #555;
  border-radius: 999px;
  padding: 0.3rem 0.8rem;
  font-size: 0.85rem;
  color: #f8f9fa;
  transition: all 0.3s ease;

  &:hover {
    background: #38bdf8;
    color: #000;
    transform: translateY(-1px);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #38bdf8;
  color: #000;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #0ea5e9;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(56, 189, 248, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;

// 갤러리 데이터 타입
interface GalleryData {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  techStack: string[];
  links?: {
    label: string;
    url: string;
  }[];
}

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: GalleryData | null;
}

export default function GalleryModal({ isOpen, onClose, data }: GalleryModalProps) {
  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        
        <ProjectTitle>{data.title}</ProjectTitle>
        <ProjectSubtitle>{data.subtitle}</ProjectSubtitle>
        <ProjectDescription>{data.description}</ProjectDescription>

        {data.images && data.images.length > 0 && (
          <ImageGrid>
            {data.images.map((image, index) => (
              <ProjectImage
                key={index}
                src={image}
                alt={`${data.title} 스크린샷 ${index + 1}`}
                loading="lazy"
              />
            ))}
          </ImageGrid>
        )}

        <TechStack>
          {data.techStack.map((tech, index) => (
            <TechItem key={index}>{tech}</TechItem>
          ))}
        </TechStack>

        {data.links && data.links.length > 0 && (
          <ProjectLinks>
            {data.links.map((link, index) => (
              <ProjectLink
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </ProjectLink>
            ))}
          </ProjectLinks>
        )}
      </ModalContent>
    </ModalOverlay>
  );
}

export type { GalleryData };
