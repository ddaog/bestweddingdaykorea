import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>개인정보처리방침</h1>
            <p style={styles.date}>시행일자: 2026년 1월 31일</p>

            <section style={styles.section}>
                <h2>1. 개인정보의 처리 목적</h2>
                <p>'Best Wedding Day'(이하 '서비스')는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
                <ul>
                    <li>서비스 제공: 별도의 회원가입 없이 결혼 날짜 추천 서비스를 제공합니다.</li>
                    <li>사용자 분석: Google Analytics를 통한 비식별 접속 통계 분석.</li>
                </ul>
            </section>

            <section style={styles.section}>
                <h2>2. 개인정보의 처리 및 보유 기간</h2>
                <p>본 서비스는 회원가입 기능을 제공하지 않으므로, 사용자의 이름, 전화번호, 이메일 등의 직접적인 개인정보를 수집하거나 서버에 저장하지 않습니다.</p>
            </section>

            <section style={styles.section}>
                <h2>3. 제3자 제공에 관한 사항</h2>
                <p>본 서비스는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.</p>
            </section>

            <section style={styles.section}>
                <h2>4. 쿠키(Cookie)의 운용 및 거부</h2>
                <p>본 서비스는 Google Analytics 및 Google AdSense를 이용하며, 이 과정에서 쿠키가 생성될 수 있습니다.</p>
                <ul>
                    <li>쿠키: 웹사이트 접속 시 사용자의 브라우저에 저장되는 작은 텍스트 파일.</li>
                    <li>거부 방법: 사용자는 웹 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다.</li>
                </ul>
            </section>

            <section style={styles.section}>
                <h2>5. 개인정보 보호책임자</h2>
                <p>서비스 관련 문의는 아래 이메일로 연락 바랍니다.</p>
                <p>이메일: contact@bestweddingdaykr.vercel.app</p>
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

export default PrivacyPolicy;
