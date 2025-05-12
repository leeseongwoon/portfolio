import styled from 'styled-components';

export const PageContainer = styled.div`
  --gray-rgb: 0, 0, 0;
  --gray-alpha-200: rgba(var(--gray-rgb), 0.08);
  --gray-alpha-100: rgba(var(--gray-rgb), 0.05);
  --button-primary-hover: #383838;
  --button-secondary-hover: #f2f2f2;

  display: grid;
  grid-template-rows: 20px 1fr 20px;
  align-items: center;
  justify-items: center;
  min-height: 100svh;
  padding: 80px;
  gap: 64px;
  font-family: var(--font-geist-sans);

  @media (prefers-color-scheme: dark) {
    --gray-rgb: 255, 255, 255;
    --gray-alpha-200: rgba(var(--gray-rgb), 0.145);
    --gray-alpha-100: rgba(var(--gray-rgb), 0.06);
    --button-primary-hover: #ccc;
    --button-secondary-hover: #1a1a1a;
  }

  @media (max-width: 600px) {
    padding: 32px;
    padding-bottom: 80px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 32px;
  grid-row-start: 2;

  @media (max-width: 600px) {
    align-items: center;
  }
`;

export const List = styled.ol`
  font-family: var(--font-geist-mono);
  padding-left: 0;
  margin: 0;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  list-style-position: inside;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const ListItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

export const Code = styled.code`
  font-family: inherit;
  background: var(--gray-alpha-100);
  padding: 2px 4px;
  border-radius: 4px;
  font-weight: 600;
`;

export const CTA = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Button = styled.a<{ variant?: 'primary' | 'secondary' }>`
  appearance: none;
  border-radius: 128px;
  height: 48px;
  padding: 0 20px;
  border: none;
  border: 1px solid transparent;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;

  ${props => props.variant === 'primary' && `
    background: var(--foreground);
    color: var(--background);
    gap: 8px;
  `}

  ${props => props.variant === 'secondary' && `
    border-color: var(--gray-alpha-200);
    min-width: 158px;
  `}

  @media (max-width: 600px) {
    font-size: 14px;
    height: 40px;
    padding: 0 16px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: ${props => 
        props.variant === 'primary' 
          ? 'var(--button-primary-hover)' 
          : 'var(--button-secondary-hover)'
      };
      border-color: transparent;
    }
  }
`;

export const Footer = styled.footer`
  grid-row-start: 3;
  display: flex;
  gap: 24px;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const FooterLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      text-decoration: underline;
      text-underline-offset: 4px;
    }
  }
`;

export const FooterImage = styled.img`
  flex-shrink: 0;
`; 