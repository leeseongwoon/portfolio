# 포트폴리오 웹사이트

Next.js와 React를 사용하여 제작된 개인 포트폴리오 웹사이트입니다.

## 기술 스택

- **프레임워크**: Next.js 15.3.2
- **언어**: TypeScript
- **스타일링**: Styled Components
- **분석 도구**: 
  - Vercel Analytics
  - Vercel Speed Insights

## 시작하기

### 필수 조건

- Node.js (최신 LTS 버전 권장)
- npm

### 설치

1. 저장소를 클론합니다:
```bash
git clone [repository-url]
cd portfolio
```

2. 의존성을 설치합니다:
```bash
npm install
```

3. 개발 서버를 실행합니다:
```bash
npm run dev
```

4. 브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하여 확인합니다.

## 사용 가능한 스크립트

- `npm run dev`: 개발 서버 실행 (Turbopack 사용)
- `npm run build`: 프로덕션용 빌드 생성
- `npm run start`: 프로덕션 모드로 서버 실행
- `npm run lint`: ESLint를 사용한 코드 검사

## 프로젝트 구조

```
portfolio/
├── src/              # 소스 코드
├── public/           # 정적 파일
├── .next/            # Next.js 빌드 파일
├── node_modules/     # 의존성 패키지
└── package.json      # 프로젝트 설정 및 의존성
```

## 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.
