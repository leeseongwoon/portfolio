"use client";

import styled from "styled-components";
import { useMousePosition } from "@/lib/useMousePosition";

const MouseTrackerElement = styled.div<{ $x: number; $y: number }>`
  position: fixed;
  width: 30px;
  height: 30px;
  background: radial-gradient(
    circle,
    rgba(56, 189, 248, 0.6),
    rgba(56, 189, 248, 0.2),
    transparent
  );
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  left: ${(props) => props.$x - 15}px;
  top: ${(props) => props.$y - 15}px;
  transition: all 0.15s ease;
  mix-blend-mode: screen;
  filter: blur(1px);
`;

export default function MouseTracker() {
  const mousePosition = useMousePosition();

  return <MouseTrackerElement $x={mousePosition.x} $y={mousePosition.y} />;
}
