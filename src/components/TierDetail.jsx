import React, { useEffect } from 'react';
import { shareToKakao, initKakao } from '../utils/kakaoShare';
import { sendGAEvent } from '../utils/analytics';

const TierDetail = ({ tierData, onClose }) => {
    // Initialize Kakao SDK on mount if needed
    useEffect(() => {
        initKakao();
    }, []);

    if (!tierData) return null;

    const { tier, score, color, reasons, dateString, dayOfWeek } = tierData;

    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
    const formattedDate = new Date(dateString).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }) + ` (${dayNames[dayOfWeek]})`;

    const handleShare = () => {
        // Track Share Event
        sendGAEvent('share_date', {
            event_category: 'social_share',
            event_label: dateString, // Changed to dateString (YYYY-MM-DD)
            value: score
        });

        // Trigger Kakao Share
        shareToKakao({
            date: formattedDate,
            tier,
            score,
            reasons,
            color
        });
    };

    return (
        <div style={styles.overlay} onClick={onClose}>
            <div style={styles.modal} onClick={e => e.stopPropagation()}>
                <button style={styles.closeBtn} onClick={onClose}>×</button>

                <h2 style={styles.date}>{formattedDate}</h2>

                {tierData.specialLabel && (
                    <div style={styles.holidayLabel}>
                        {tierData.specialLabel}
                    </div>
                )}

                <div style={{ ...styles.badge, backgroundColor: color }}>
                    {tier}
                </div>

                <p style={styles.score}>결혼하기 좋은 점수: <strong>{score}점</strong></p>

                <div style={styles.reasons}>
                    {reasons.map((reason, idx) => (
                        <div key={idx} style={{
                            ...styles.reasonItem,
                            borderLeft: `4px solid ${getReasonColor(reason.type)}`
                        }}>
                            <p style={styles.reasonText}>{reason.text}</p>
                        </div>
                    ))}
                </div>

                {score >= 90 && <p style={styles.summary}>✨ 강력 추천하는 최고의 결혼식 날짜입니다! ✨</p>}
                {score < 30 && <p style={styles.summary}>⚠️ 하객들을 위해 다른 날짜를 고려해보세요.</p>}

                <button onClick={handleShare} style={styles.shareBtn}>
                    💬 카카오톡으로 날짜 공유하기
                </button>
            </div>
        </div>
    );
};

const getReasonColor = (type) => {
    switch (type) {
        case 'good': return '#4CAF50';
        case 'bad': return '#FF5252';
        case 'critical': return '#D32F2F';
        default: return '#9E9E9E';
    }
};

const styles = {
    overlay: {
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', // Center on desktop
        zIndex: 1000,
        backdropFilter: 'blur(4px)',
    },
    modal: {
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '16px',
        width: '90%',
        maxWidth: '400px',
        position: 'relative',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        animation: 'slideUp 0.3s ease-out',
    },
    closeBtn: {
        position: 'absolute',
        top: '15px',
        right: '20px',
        fontSize: '28px',
        background: 'none',
        color: '#999',
        padding: 0,
    },
    date: {
        fontSize: '1.25rem',
        marginBottom: '10px',
        textAlign: 'center',
        color: '#333',
    },
    badge: {
        display: 'inline-block',
        padding: '8px 20px',
        borderRadius: '20px',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        marginBottom: '15px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        width: '100%',
        textAlign: 'center',
    },
    holidayLabel: {
        textAlign: 'center',
        color: '#ff5252',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        marginBottom: '10px',
    },
    score: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#666',
    },
    reasons: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginBottom: '20px',
    },
    reasonItem: {
        padding: '12px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        fontSize: '0.95rem',
    },
    reasonText: {
        margin: 0,
        lineHeight: 1.4,
    },
    summary: {
        textAlign: 'center',
        fontWeight: '600',
        color: '#333',
        marginTop: '10px',
    },
    shareBtn: {
        width: '100%',
        marginTop: '20px',
        padding: '12px',
        borderRadius: '12px',
        border: 'none',
        backgroundColor: '#FEE500', // Kakao Yellow
        color: '#191919',
        fontSize: '1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
    }
};

export default TierDetail;
