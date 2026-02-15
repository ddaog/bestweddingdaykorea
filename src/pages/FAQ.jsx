import React from 'react';

const FAQ = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>자주 묻는 질문 (FAQ)</h1>

            <div style={styles.item}>
                <h3 style={styles.question}>Q. 웨딩 티어(Tier) 점수는 어떻게 산출되나요?</h3>
                <p style={styles.answer}>
                    Best Wedding Day의 알고리즘은 <strong>요일, 계절, 공휴일, 특수 일정(수능 등)</strong>을 종합적으로 분석합니다.
                    예를 들어, 5월의 토요일은 높은 점수를 받지만, 설날 당일이나 혹한기 평일은 낮은 점수를 받게 됩니다.
                    이는 일반적인 선호도를 반영한 것으로, 절대적인 기준은 아닙니다.
                </p>
            </div>

            <div style={styles.item}>
                <h3 style={styles.question}>Q. 2026년 이후의 공휴일 데이터는 정확한가요?</h3>
                <p style={styles.answer}>
                    네, 본 서비스는 공신력 있는 글로벌 공휴일 API를 통해 2025년, 2026년, 2027년의 최신 공휴일 데이터를 실시간으로 반영합니다.
                    대체공휴일 규정이 변경되더라도 자동으로 업데이트됩니다.
                </p>
            </div>

            <div style={styles.item}>
                <h3 style={styles.question}>Q. '손 없는 날'도 반영되어 있나요?</h3>
                <p style={styles.answer}>
                    현재 버전에서는 음력 기준의 '손 없는 날'은 점수에 반영되지 않습니다.
                    현대적인 웨딩 트렌드인 '하객 편의성'과 '날씨'를 최우선으로 고려하여 추천해 드립니다.
                </p>
            </div>

            <div style={styles.item}>
                <h3 style={styles.question}>Q. 회원가입이 필요한가요?</h3>
                <p style={styles.answer}>
                    아니요, 별도의 회원가입 없이 모든 기능을 무료로 이용하실 수 있습니다.
                    개인정보를 수집하지 않으니 안심하고 이용하세요.
                </p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        lineHeight: '1.6',
    },
    title: {
        fontSize: '2rem',
        marginBottom: '30px',
        color: 'hsl(var(--color-primary))',
    },
    item: {
        marginBottom: '30px',
        backgroundColor: '#fafafa',
        padding: '20px',
        borderRadius: '12px',
    },
    question: {
        fontSize: '1.1rem',
        marginBottom: '10px',
        color: '#333',
    },
    answer: {
        color: '#666',
        fontSize: '0.95rem',
    }
};

export default FAQ;
