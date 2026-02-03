const KAKAO_KEY = import.meta.env.VITE_KAKAO_API_KEY || 'YOUR_KAKAO_JAVA_SCRIPT_KEY'; // User needs to set this

export const initKakao = () => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
        try {
            window.Kakao.init(KAKAO_KEY);
        } catch (error) {
            console.error('Failed to initialize Kakao SDK:', error);
        }
    }
};

export const shareToKakao = ({ date, tier, score, reasons, color }) => {
    if (!window.Kakao || !window.Kakao.isInitialized()) {
        initKakao();
    }

    if (!window.Kakao) {
        alert('카카오톡 공유 기능을 불러오지 못했습니다.');
        return;
    }

    try {
        window.Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: `💍 결혼하기 좋은 날: ${date}`,
                description: `${tier} (점수: ${score}점)\n${reasons[0]?.text || ''}`,
                imageUrl: 'https://bestweddingdaykorea.vercel.app/og-image-hook.png',
                link: {
                    mobileWebUrl: 'https://bestweddingdaykorea.vercel.app',
                    webUrl: 'https://bestweddingdaykorea.vercel.app',
                },
            },
            buttons: [
                {
                    title: '달력 보러가기',
                    link: {
                        mobileWebUrl: 'https://bestweddingdaykorea.vercel.app',
                        webUrl: 'https://bestweddingdaykorea.vercel.app',
                    },
                },
            ],
        });
    } catch (error) {
        console.error('Kakao Share Error:', error);
        alert('카카오톡 공유 중 오류가 발생했습니다. API 키를 확인해주세요.');
    }
};
