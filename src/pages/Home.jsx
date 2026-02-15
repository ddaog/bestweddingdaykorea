import React from 'react';
import Calendar from '../components/Calendar';
import GuideSection from '../components/GuideSection';
import { HOLIDAYS_2025 } from '../domain/holidays';

const Home = ({ holidays, loading }) => {
    return (
        <>
            <section style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1 style={{ fontSize: '2rem', color: 'hsl(var(--color-primary))', marginBottom: '15px' }}>
                    Best Wedding Day
                </h1>
                <p style={{ color: '#555', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
                    수능일, 명절, 계절 날씨, 요일별 편의성을 종합적으로 분석하여<br />
                    <strong>최고의 결혼식 날짜(Wedding Tier)</strong>를 추천해 드립니다.
                </p>
            </section>

            {loading ? (
                <div style={{ padding: '80px', textAlign: 'center', color: '#999' }}>
                    📅 날짜 데이터를 분석 중입니다...
                </div>
            ) : (
                <>
                    <Calendar customHolidays={holidays} />
                    <div style={{ marginTop: '40px' }}>
                        <GuideSection />
                    </div>
                </>
            )}
        </>
    );
};

export default Home;
