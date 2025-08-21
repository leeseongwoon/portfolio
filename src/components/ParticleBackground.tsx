'use client';

import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// 파티클 플로팅 애니메이션
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const ParticleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
`;

const Particle = styled.div<{ $delay: number }>`
  position: absolute;
  width: 4px;
  height: 4px;
  background: #38bdf8;
  border-radius: 50%;
  opacity: 0.6;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
`;

interface ParticleBackgroundProps {
  particleCount?: number;
}

export default function ParticleBackground({ particleCount = 30 }: ParticleBackgroundProps) {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <ParticleContainer>
      {[...Array(particleCount)].map((_, i) => (
        <Particle
          key={i}
          $delay={Math.random() * 6}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </ParticleContainer>
  );
}
