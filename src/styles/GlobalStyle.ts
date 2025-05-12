import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* CSS 초기화 */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-color: #222222;
    color: #f8f9fa;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  /* 기존 스타일 */
  :root {
    --background: #222222;
    --foreground: #f8f9fa;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background: #222222;
      --foreground: #f8f9fa;
    }
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  /* 반응형 미디어 쿼리 */
  @media (min-width: 1024px) {
    /* desktop */
    body {
      font-size: 16px;
    }
  }

  @media (max-width: 1023px) {
    /* tablet */
    body {
      font-size: 16px;
    }
  }

  @media (max-width: 767px) {
    /* mobile */
    body {
      font-size: 16px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`;

export default GlobalStyle; 