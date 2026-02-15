import React, { useState } from 'react';
import DateCell from './DateCell';
import TierDetail from './TierDetail';
import { sendGAEvent } from '../utils/analytics';

const Calendar = ({ customHolidays }) => {
    // Initialize with current date (default to today's month)
    const [currentDate, setCurrentDate] = useState(() => {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), 1);
    });
    const [selectedTier, setSelectedTier] = useState(null);
    const [considerHandless, setConsiderHandless] = useState(false);

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay(); // 0 (Sun) - 6 (Sat)

    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const handlePrevMonth = () => {
        sendGAEvent('button_click', {
            event_category: 'calendar_nav',
            event_label: 'prev_month',
            value: `${year}-${month}`
        });
        setCurrentDate(new Date(year, month - 1, 1));
    };

    const handleNextMonth = () => {
        // Limit navigation to December 2027
        if (year === 2027 && month === 11) {
            window.alert('2027년 이후 데이터는 추후 업데이트 예정입니다.');
            return;
        }
        sendGAEvent('button_click', {
            event_category: 'calendar_nav',
            event_label: 'next_month',
            value: `${year}-${month + 2}` // +2 because month is 0-indexed and we go next
        });
        setCurrentDate(new Date(year, month + 1, 1));
    };

    const handleDateSelect = (tierData) => {
        sendGAEvent('select_date', {
            event_category: 'calendar_interaction',
            event_label: tierData.dateString,
            value: tierData.score
        });
        setSelectedTier(tierData);
    };

    const days = [];
    // Empty slots for days before the 1st
    for (let i = 0; i < firstDay; i++) {
        days.push(<div key={`empty-${i}`} style={styles.dayWrapper}><DateCell date={new Date(year, month, 1)} isCurrentMonth={false} customHolidays={customHolidays} /></div>);
    }
    // Actual days
    for (let d = 1; d <= daysInMonth; d++) {
        const date = new Date(year, month, d);
        days.push(
            <div key={d} style={styles.dayWrapper}>
                <DateCell
                    date={date}
                    isCurrentMonth={true}
                    onSelect={handleDateSelect}
                    customHolidays={customHolidays}
                    considerHandless={considerHandless}
                />
            </div>
        );
    }

    return (
        <div>
            <div style={styles.header}>
                <button onClick={handlePrevMonth} style={styles.navButton}>&lt;</button>
                <h2 style={styles.monthTitle}>{year}년 {month + 1}월</h2>
                <button onClick={handleNextMonth} style={styles.navButton}>&gt;</button>
            </div>

            <div className="week-days">
                <div style={{ color: '#ff5252' }}>일</div>
                <div>월</div>
                <div>화</div>
                <div>수</div>
                <div>목</div>
                <div>금</div>
                <div style={{ color: '#1e88e5' }}>토</div>
            </div>

            <div className="calendar-grid">
                {days}
            </div>

            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <label style={styles.toggleLabel}>
                    <input
                        type="checkbox"
                        checked={considerHandless}
                        onChange={(e) => {
                            const newValue = e.target.checked;
                            setConsiderHandless(newValue);
                            sendGAEvent('button_click', {
                                event_category: 'feature_toggle',
                                event_label: 'handless_day',
                                value: newValue ? 1 : 0
                            });
                        }}
                        style={styles.checkbox}
                    />
                    <span style={{ marginLeft: '8px' }}>👻 손 없는 날 고려하기</span>
                </label>
            </div>

            <div style={styles.coupangContainer}>
                <a
                    href="https://link.coupang.com/a/dMZWM8"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sendGAEvent('coupang_click', {
                        event_category: 'affiliate',
                        event_label: 'wedding_planner'
                    })}
                    style={styles.coupangLink}
                >
                    결혼 준비 플래너 구경하기
                </a>
                <p style={styles.coupangDisclaimer}>
                    이 링크는 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
                </p>
            </div>

            {selectedTier && (
                <TierDetail
                    tierData={selectedTier}
                    onClose={() => setSelectedTier(null)}
                />
            )}
        </div>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        padding: '0 10px',
    },
    monthTitle: {
        fontSize: '1.5rem',
        color: 'hsl(var(--color-primary))',
    },
    navButton: {
        background: 'none',
        fontSize: '1.5rem',
        padding: '5px 15px',
        color: 'hsl(var(--color-text-light))',
        fontWeight: 'bold',
    },
    dayWrapper: {
        width: '100%',
    },
    toggleLabel: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        fontSize: '0.95rem',
        color: 'hsl(var(--color-primary))',
        fontWeight: '600',
        padding: '10px 20px',
        backgroundColor: '#fff',
        borderRadius: '25px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        border: '1px solid #eee',
        userSelect: 'none',
    },
    checkbox: {
        width: '18px',
        height: '18px',
        accentColor: 'hsl(var(--color-primary))',
        cursor: 'pointer',
    },
    coupangContainer: {
        marginTop: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: '20px',
        border: '1px dashed hsla(var(--color-primary), 0.3)',
    },
    coupangLink: {
        display: 'inline-block',
        padding: '12px 24px',
        backgroundColor: 'hsl(var(--color-primary))',
        color: '#fff',
        borderRadius: '15px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '0.95rem',
        boxShadow: 'var(--shadow-soft)',
        transition: 'transform 0.2s ease',
    },
    coupangDisclaimer: {
        fontSize: '0.75rem',
        color: 'hsl(var(--color-text-light))',
        textAlign: 'center',
        lineHeight: '1.4',
        margin: 0,
        maxWidth: '280px',
    }
};

export default Calendar;
