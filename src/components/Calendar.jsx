import React, { useState } from 'react';
import DateCell from './DateCell';
import TierDetail from './TierDetail';

const Calendar = ({ customHolidays }) => {
    // Initialize with current date (default to today's month)
    const [currentDate, setCurrentDate] = useState(() => {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), 1);
    });
    const [selectedTier, setSelectedTier] = useState(null);

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay(); // 0 (Sun) - 6 (Sat)

    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const handlePrevMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
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
                    onSelect={setSelectedTier}
                    customHolidays={customHolidays}
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
                <div style={{ padding: '5px', color: '#ff5252' }}>일</div>
                <div style={{ padding: '5px' }}>월</div>
                <div style={{ padding: '5px' }}>화</div>
                <div style={{ padding: '5px' }}>수</div>
                <div style={{ padding: '5px' }}>목</div>
                <div style={{ padding: '5px' }}>금</div>
                <div style={{ padding: '5px', color: '#1e88e5' }}>토</div>
            </div>

            <div className="calendar-grid">
                {days}
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
    }
};

export default Calendar;
