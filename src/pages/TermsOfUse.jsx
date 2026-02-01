import React from 'react';

const TermsOfUse = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>이용약관</h1>
            <p style={styles.date}>시행일자: 2026년 1월 31일</p>

            <section style={styles.section}>
                <h2>제1조 (목적)</h2>
                <p>이 약관은 'Best Wedding Day'(이하 "서비스")가 제공하는 결혼 날짜 추천 및 관련 제반 서비스의 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
            </section>

            <section style={styles.section}>
                <h2>제2조 (용어의 정의)</h2>
                <p>"서비스"라 함은 구현되는 단말기(PC, 휴대형단말기 등 각종 유무선 장치를 포함)와 상관없이 이용자가 이용할 수 있는 본 날짜 추천 서비스를 의미합니다.</p>
            </section>

            <section style={styles.section}>
                <h2>제3조 (서비스의 내용)</h2>
                <p>서비스는 알고리즘을 기반으로 결혼하기 좋은 날짜(Tier)를 추천하는 정보 제공 서비스입니다. 제공되는 정보는 통계적, 일반적 기준에 따른 것이며, 실제 예식장의 상황이나 개인적인 신념과는 다를 수 있습니다. 본 서비스의 결과를 맹신하여 발생한 손해에 대해 서비스 제공자는 책임을 지지 않습니다.</p>
            </section>

            <section style={styles.section}>
                <h2>제4조 (저작권의 귀속)</h2>
                <p>서비스가 작성한 저작물에 대한 저작권 및 기타 지적재산권은 서비스 제공자에게 귀속됩니다. 이용자는 서비스를 이용함으로써 얻은 정보를 서비스 제공자의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.</p>
            </section>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        lineHeight: '1.6',
        color: '#333',
    },
    title: {
        fontSize: '2rem',
        marginBottom: '10px',
        color: 'hsl(var(--color-primary))',
    },
    date: {
        color: '#888',
        marginBottom: '40px',
    },
    section: {
        marginBottom: '30px',
    }
};

export default TermsOfUse;
