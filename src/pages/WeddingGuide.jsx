import React from 'react';

const WeddingGuide = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>웨딩 날짜 선택 완벽 가이드</h1>
            <p style={styles.intro}>
                결혼 날짜는 단순한 숫자가 아닙니다. 웨딩 분위기, 계절의 변화, 그리고 가족과 친지의 일정까지 고려해야 하는 중요한 결정입니다.
                평생에 한 번뿐인 결혼식을 더욱 완벽하게 만들어줄 날짜 선택의 3가지 핵심 팁을 소개합니다.
            </p>

            <section style={styles.section}>
                <h2 style={styles.subtitle}>1. 계절별 장단점 (Season)</h2>
                <div style={styles.content}>
                    <h3 style={styles.h3}>🌸 봄 (4월, 5월)</h3>
                    <p>
                        결혼식의 '황금기'라고 불리는 시즌입니다. 춥지도 덥지도 않은 완벽한 날씨 덕분에 야외 웨딩이나 가벼운 드레스를 입기에 최적입니다.
                        하객들의 활동성도 좋아 참석률이 높지만, 그만큼 예식장 예약 경쟁이 치열하고 비용이 가장 비쌉니다.
                    </p>
                    <h3 style={styles.h3}>☀️ 여름 (7월, 8월)</h3>
                    <p>
                        전통적인 웨딩 비수기입니다. 장마와 무더위로 인해 하객들의 불쾌지수가 높아질 수 있습니다.
                        하지만 예식장 비용이 가장 저렴하고, 프로모션을 많이 이용할 수 있어 '가성비'를 중요시하는 커플에게는 기회가 될 수 있습니다.
                    </p>
                    <h3 style={styles.h3}>🍁 가을 (9월, 10월, 11월)</h3>
                    <p>
                        봄과 함께 가장 인기 있는 시즌입니다. 맑고 높은 하늘 덕분에 사진이 매우 잘 나옵니다.
                        다만 추석 연휴와 겹치지 않도록 날짜를 잘 확인해야 합니다.
                    </p>
                </div>
            </section>

            <section style={styles.section}>
                <h2 style={styles.subtitle}>2. 요일별 특징 (Day of Week)</h2>
                <div style={styles.content}>
                    <p>
                        <strong>토요일 점심 (12시~2시):</strong> 누구나 선호하는 최고의 골든타임입니다. 멀리서 오는 하객들도 부담 없이 참석하고 귀가할 수 있습니다.
                        다만 예약이 가장 빨리 마감되며, 식대와 대관료가 가장 높습니다.
                    </p>
                    <p>
                        <strong>일요일:</strong> 토요일보다는 예약이 수월합니다. 다음날 출근 부담이 있는 하객들을 위해 오후 늦은 시간보다는 점심 예식을 추천합니다.
                    </p>
                    <p>
                        <strong>평일 (금요일 저녁):</strong> 최근 늘어나고 있는 추세입니다. 퇴근 후 파티 형식의 웨딩을 즐길 수 있지만, 직장인 하객들의 참석이 어려울 수 있습니다.
                    </p>
                </div>
            </section>

            <section style={styles.section}>
                <h2 style={styles.subtitle}>3. 피해야 할 날짜 (Bad Dates)</h2>
                <ul style={styles.list}>
                    <li><strong>명절 연휴 (설날, 추석):</strong> 귀성길 교통 체증과 가족 행사로 인해 하객들에게 큰 부담을 줍니다.</li>
                    <li><strong>수능 당일 및 직전 주말:</strong> 수험생 자녀를 둔 하객들은 참석이 어렵습니다. 또한 교통 통제로 인해 이동이 불편할 수 있습니다.</li>
                    <li><strong>연말연시 (12월 말 ~ 1월 초):</strong> 송년회와 신년회 등 모임이 많아 하객들의 일정을 맞추기 어렵습니다.</li>
                </ul>
            </section>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        lineHeight: '1.7',
        color: '#444',
    },
    title: {
        fontSize: '2rem',
        marginBottom: '20px',
        color: 'hsl(var(--color-primary))',
        borderBottom: '2px solid #eee',
        paddingBottom: '15px',
    },
    intro: {
        fontSize: '1.1rem',
        marginBottom: '40px',
        color: '#666',
    },
    section: {
        marginBottom: '40px',
    },
    subtitle: {
        fontSize: '1.5rem',
        marginBottom: '15px',
        color: '#333',
        fontWeight: 'bold',
    },
    h3: {
        fontSize: '1.1rem',
        marginBottom: '8px',
        color: 'hsl(var(--color-primary))',
        marginTop: '15px',
    },
    content: {
        fontSize: '1rem',
        paddingLeft: '10px',
    },
    list: {
        listStyleType: 'disc',
        paddingLeft: '20px',
        marginTop: '10px',
    }
};

export default WeddingGuide;
