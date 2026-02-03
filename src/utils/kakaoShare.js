const KAKAO_KEY = import.meta.env.VITE_KAKAO_API_KEY || '526d9a156d8e7e365da57f3901f1e05d';

export const initKakao = () => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
        try {
            window.Kakao.init(KAKAO_KEY);
            console.log('Kakao SDK Initialized');
        } catch (error) {
            console.error('Failed to initialize Kakao SDK:', error);
        }
    } else if (window.Kakao && window.Kakao.isInitialized()) {
        // Already initialized
    } else {
        console.warn('Kakao SDK not loaded yet');
    }
};

export const shareToKakao = ({ date, tier, score, reasons, color }) => {
    if (!window.Kakao) {
        alert('카카오톡 공유 기능을 불러오지 못했습니다. 잠시 후 다시 시도해주세요.');
        return;
    }

    if (!window.Kakao.isInitialized()) {
        initKakao();
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
                    title: '결혼 길일 확인하기',
                    link: {
                        mobileWebUrl: 'https://bestweddingdaykorea.vercel.app',
                        webUrl: 'https://bestweddingdaykorea.vercel.app',
                    },
                },
            ],
        });
    } catch (error) {
        console.error('Kakao Share Error:', error);
        alert('카카오톡 공유 전송 중 오류가 발생했습니다.');
    }
};
