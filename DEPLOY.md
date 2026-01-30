# Best Wedding Day 배포 가이드

이 프로젝트는 **React + Vite** 애플리케이션입니다. **Vercel**이나 **Netlify** 같은 최신 프론트엔드 호스팅 플랫폼에 쉽게 배포할 수 있습니다.

## 1. 사전 준비 (환경 변수)

배포하기 전에, 구글 애널리틱스와 검색 콘솔 연동을 위해 다음 ID들이 필요합니다:

- **Google Analytics (GA4)**: `VITE_GA_MEASUREMENT_ID` (형식: `G-XXXXXXXXXX`)
- **Google Search Console**: `VITE_GOOGLE_SITE_VERIFICATION` (HTML 태그 인증 방식의 코드 값)

## 2. Vercel에 배포하기 (추천)

1.  코드를 **GitHub**에 푸시(Push)합니다.
2.  [Vercel 대시보드](https://vercel.com/dashboard)로 이동하여 **"Add New Project"**를 클릭합니다.
3.  `bestweddingday` 저장소를 가져옵니다 (Import).
4.  **빌드 설정 (Build Settings)**: Vercel이 자동으로 Vite를 감지합니다.
    - Framework Preset: `Vite`
    - Build Command: `npm run build`
    - Output Directory: `dist`
5.  **환경 변수 (Environment Variables)**:
    - `VITE_GA_MEASUREMENT_ID` = `발급받은 GA ID`
    - `VITE_GOOGLE_SITE_VERIFICATION` = `발급받은 GSC 코드`
6.  **Deploy** 버튼을 클릭합니다.

## 3. Netlify에 배포하기

1.  코드를 **GitHub**에 푸시합니다.
2.  [Netlify](https://app.netlify.com/)로 이동하여 **"New site from Git"**을 클릭합니다.
3.  저장소를 선택합니다.
4.  **빌드 설정**:
    - Build command: `npm run build`
    - Publish directory: `dist`
5.  **환경 변수**:
    - **Site settings > Build & deploy > Environment > Environment variables** 메뉴로 이동합니다.
    - 위와 동일한 변수(GA4, GSC)를 추가합니다.
6.  **Deploy site**를 클릭합니다.

## 4. 구글 서치 콘솔 (GSC) 인증

사이트가 배포되면 (예: `https://bestweddingday.vercel.app`), 구글 서치 콘솔에 접속하여 소유권을 확인합니다. 환경 변수(`VITE_GOOGLE_SITE_VERIFICATION`)를 올바르게 설정했다면, **HTML 태그** 방식으로 즉시 인증될 것입니다.
