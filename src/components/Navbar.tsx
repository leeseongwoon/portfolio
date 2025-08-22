"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all 0.3s ease;
  transform: translateY(0);

  /* 스크롤 시 자연스럽게 사라짐 */
  &.scrolled {
    transform: translateY(-100%);
  }

  @media (max-width: 1024px) {
    padding: 0.8rem 1.5rem;
  }

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0.7rem 1rem;
    justify-content: center;
  }
`;

const NavText = styled.span`
  width: 100%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #38bdf8, #0ea5e9);
    transition: width 0.3s ease;
    border-radius: 1px;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 0.3rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #e2e8f0;
  padding: 0.8rem 1.2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);

  /* 독특한 호버 효과 */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(56, 189, 248, 0.1),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    color: #38bdf8;
    background: rgba(56, 189, 248, 0.08);
    border-color: rgba(56, 189, 248, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(56, 189, 248, 0.15);

    &::before {
      left: 100%;
    }

    &::after {
      width: 80%;
    }

    ${NavText}::after {
      width: 100%;
    }
  }

  &.active {
    color: #38bdf8;
    background: rgba(56, 189, 248, 0.12);
    border-color: rgba(56, 189, 248, 0.4);

    &::after {
      width: 80%;
    }
  }

  @media (max-width: 1024px) {
    padding: 0.7rem 1rem;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 0.7rem;
    font-size: 0.8rem;
    border-radius: 8px;
  }
`;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          // 아래로 스크롤
          setIsScrolled(true);
        } else {
          // 위로 스크롤
          setIsScrolled(false);
        }
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <HeaderStyle className={isScrolled ? "scrolled" : ""}>
      <NavLinks>
        <NavLink href="/">
          <NavText>Home</NavText>
        </NavLink>
        {/* 
        <NavLink href="/about">
          <NavText>About</NavText>
        </NavLink>
         */}
        <NavLink href="/projects">
          <NavText>Projects</NavText>
        </NavLink>
        <NavLink href="/career">
          <NavText>Career</NavText>
        </NavLink>
        <NavLink href="/contact">
          <NavText>Contact</NavText>
        </NavLink>
      </NavLinks>
    </HeaderStyle>
  );
}
