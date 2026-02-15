import React from 'react';

const GuideSection = () => {
    return (
        <section style={styles.container}>
            <h2 style={styles.title}>💍 최고의 결혼식 날짜를 고르는 기준</h2>

            <div style={styles.card}>
                <h3 style={styles.subtitle}>1. 계절 (Season)</h3>
                <p style={styles.text}>
                    <strong>봄(4~5월)과 가을(9~10월)</strong>은 결혼식의 황금기입니다.
                    너무 덥거나 춥지 않아 하객들이 방문하기 가장 쾌적하며, 야외 웨딩 촬영 결과물도 가장 아름답게 나옵니다.
                    반면, 한여름(7~8월)과 한겨울(1~2월)은 비수기로 분류되어 예식장 비용은 저렴하지만, 하객들의 불편함을 고려해야 합니다.
                </p>
            </div>

            <div style={styles.card}>
                <h3 style={styles.subtitle}>2. 요일 (Day of Week)</h3>
                <p style={styles.text}>
                    <strong>토요일 점심</strong>은 전통적으로 가장 선호되는 시간대입니다. 지방에서 올라오는 하객들도 부담 없이 참석할 수 있기 때문입니다.
                    <strong>일요일</strong>은 다음날 출근 부담으로 인해 토요일보다는 선호도가 낮지만, 예식장 예약이 상대적으로 수월합니다.
                    평일 예식은 하객 참석률이 현저히 떨어질 수 있어 신중한 선택이 필요합니다.
                </p>
            </div>

            <div style={styles.card}>
                <h3 style={styles.subtitle}>3. 공휴일 및 특수 일정 (Holidays)</h3>
                <p style={styles.text}>
                    <strong>설날, 추석 연휴</strong>는 최악의 결혼식 날짜로 꼽힙니다. 귀성길 정체와 가족 행사로 인해 하객들에게 큰 부담을 주기 때문입니다.
                    또한, 대한민국만의 특수한 행사인 <strong>수능(대학수학능력시험)</strong> 날짜 전후도 피하는 것이 좋습니다. 수험생 자녀를 둔 하객들은 이 시기에 모든 외부 활동을 자제하는 경향이 있습니다.
                </p>
            </div>

            <div style={styles.card}>
                <h3 style={styles.subtitle}>✨ Best Wedding Day 등급 안내</h3>
                <ul style={styles.list}>
                    <li><span style={{ color: 'hsl(45, 90%, 50%)', fontWeight: 'bold' }}>1티어 (Gold)</span>: 날씨, 요일, 일정이 완벽한 최고의 날</li>
                    <li><span style={{ color: 'hsl(200, 70%, 50%)', fontWeight: 'bold' }}>2티어 (Blue)</span>: 흠잡을 데 없는 훌륭한 날</li>
                    <li><span style={{ color: 'hsl(150, 40%, 40%)', fontWeight: 'bold' }}>3티어 (Green)</span>: 무난하고 좋은 날</li>
                    <li><span style={{ color: 'hsl(30, 40%, 50%)', fontWeight: 'bold' }}>4티어 (Bronze)</span>: 다소 아쉬운 점이 있는 날 (더위/추위 등)</li>
                    <li><span style={{ color: 'hsl(0, 0%, 60%)', fontWeight: 'bold' }}>5티어 (Gray)</span>: 평일, 명절, 수능 시즌 등 피하는 게 좋은 날</li>
                </ul>
            </div>

            <p style={styles.footer}>
                * 본 서비스는 일반적인 통계와 선호도를 바탕으로 추천 등급을 제공하며, 개인의 사정이나 길일(손 없는 날) 신앙에 따라 결과는 다를 수 있습니다.
            </p>
        </section>
    );
};

const styles = {
    container: {
        marginTop: '60px',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '16px',
        border: '1px solid #eee',
        maxWidth: '800px',
        margin: '60px auto 20px',
    },
    title: {
        fontSize: '1.5rem',
        color: 'hsl(var(--color-primary))',
        marginBottom: '30px',
        textAlign: 'center',
    },
    card: {
        marginBottom: '25px',
        paddingBottom: '20px',
        borderBottom: '1px solid #f0f0f0',
    },
    subtitle: {
        fontSize: '1.2rem',
        color: '#333',
        marginBottom: '10px',
    },
    text: {
        fontSize: '1rem',
        color: '#555',
        lineHeight: '1.6',
        wordBreak: 'keep-all',
    },
    list: {
        listStyle: 'none',
        padding: '0',
        lineHeight: '1.8',
        color: '#555',
    },
    footer: {
        fontSize: '0.8rem',
        color: '#999',
        textAlign: 'center',
        marginTop: '30px',
    }
};

export default GuideSection;
