# Best Wedding Day 배포 가이드

이 프로젝트는 **React + Vite** 애플리케이션입니다. **Vercel**이나 **Netlify** 같은 최신 프론트엔드 호스팅 플랫폼에 쉽게 배포할 수 있습니다.

## 1. 사전 준비 (환경 변수)

배포하기 전에, 구글 애널리틱스와 검색 콘솔 연동을 위해 다음 ID들이 필요합니다:

- **Google Analytics (GA4)**: `VITE_GA_MEASUREMENT_ID` (형식: `G-XXXXXXXXXX`)
- **Google Search Console**: `VITE_GOOGLE_SITE_VERIFICATION` (HTML 태그 인증 방식의 코드 값)

## 2. Vercel에 배포하기 (추천: 가장 빠름)

1.  코드를 **GitHub**에 푸시합니다 (완료됨).
2.  [Vercel 대시보드](https://vercel.com/dashboard)로 이동하여 **"Add New Project"**를 클릭합니다.
3.  `bestweddingdaykorea` 저장소를 가져옵니다 (Import).
4.  **빌드 설정 (Build Settings)**: Vercel이 자동으로 Vite를 감지합니다.
    - Framework Preset: `Vite`
    - Build Command: `npm run build`
    - Output Directory: `dist`
5.  **환경 변수 (Environment Variables)**:
    - 만약 GA4/GSC를 쓰신다면 여기서 추가해주세요.
    - `VITE_GA_MEASUREMENT_ID` = `...`
    - `VITE_GOOGLE_SITE_VERIFICATION` = `...`
6.  **Deploy** 버튼을 클릭합니다.

*참고: Vercel 무료(Hobby) 요금제는 상업적 광고(AdSense 등)가 금지되어 있습니다. 나중에 광고를 붙이려면 **Vercel Pro**로 업그레이드하거나 **Netlify**로 이동하는 것을 고려하세요.*

## 3. Netlify에 배포하기 (대안: 광고용)

광고(AdSense)를 붙이실 계획이라면 **Netlify**가 무료 플랜에서 더 유연합니다.

1.  [Netlify](https://app.netlify.com/) → **"New site from Git"**.
2.  GitHub → `bestweddingdaykorea` 선택.
3.  **Deploy site** 클릭.

## 4. 구글 서치 콘솔 (GSC) 인증

사이트가 배포되면 (예: `https://bestweddingday.vercel.app`), 구글 서치 콘솔에 접속하여 소유권을 확인합니다. 환경 변수(`VITE_GOOGLE_SITE_VERIFICATION`)를 올바르게 설정했다면, **HTML 태그** 방식으로 즉시 인증될 것입니다.
