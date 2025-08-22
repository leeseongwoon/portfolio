# 포트폴리오 웹사이트

## 🚀 **실제 이메일 전송 기능 설정**

### **카카오메일 SMTP 설정 방법**

1. **카카오메일 계정 준비**
   - 카카오메일 계정이 필요합니다
   - 일반 비밀번호를 사용합니다 (앱 비밀번호 불필요)

2. **환경변수 설정**
   - 프로젝트 루트에 `.env.local` 파일 생성
   ```bash
   KAKAO_MAIL_USER=your-email@kakao.com
   KAKAO_MAIL_PASSWORD=your-kakao-mail-password
   ```

4. **서버 재시작**
   ```bash
   npm run dev
   ```

### **주의사항**
- `.env.local` 파일은 `.gitignore`에 포함되어 있어야 합니다
- 카카오메일 계정의 비밀번호를 안전하게 보관하세요
- SMTP 포트 465는 SSL을 사용합니다

## 🛠️ **기술 스택**

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Styled-Components
- **Email**: Nodemailer (카카오메일 SMTP)
- **Deployment**: Vercel

## 📁 **프로젝트 구조**

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   │   └── send-email/    # 이메일 전송 API
│   ├── about/             # About 페이지
│   ├── career/            # Career 페이지
│   ├── contact/           # Contact 페이지
│   ├── projects/          # Projects 페이지
│   └── layout.tsx         # 메인 레이아웃
├── components/             # 공통 컴포넌트
│   ├── PageLayout.tsx     # 페이지 레이아웃
│   ├── ParticleBackground.tsx # 파티클 배경
│   └── GalleryModal.tsx   # 갤러리 모달
└── styles/                 # 스타일 파일들
```

## 🚀 **실행 방법**

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 실행
npm start
```

## ✨ **주요 기능**

- **반응형 디자인**: 모든 디바이스에서 최적화
- **인터랙티브 홈페이지**: 마우스 추적, 3D 카드 회전
- **실제 이메일 전송**: Nodemailer를 통한 문의 폼
- **파티클 배경**: 모든 페이지에서 사용 가능한 애니메이션
- **갤러리 모달**: 프로젝트 상세 정보 표시
- **스크롤 기반 애니메이션**: 헤더 숨김/표시, 카드 회전

## 📧 **문의하기**

포트폴리오 웹사이트의 문의 폼을 통해 연락하실 수 있습니다.
