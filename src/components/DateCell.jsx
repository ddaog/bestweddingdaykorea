import React, { useMemo } from 'react';
import { calculateTier } from '../domain/weddingLogic';

const DateCell = ({ date, isCurrentMonth, onSelect, customHolidays }) => {
    const tierData = useMemo(() => calculateTier(date, customHolidays), [date, customHolidays]);

    const isToday = new Date().toDateString() === date.toDateString();

    if (!isCurrentMonth) {
        return <div style={styles.emptyCell}></div>;
    }

    // Using HSL values for dynamic styling
    const backgroundColor = `hsla(${tierData.colorHSL}, 0.15)`;
    const borderColor = `hsla(${tierData.colorHSL}, 0.5)`;

    return (
        <div
            style={{
                ...styles.cell,
                backgroundColor: backgroundColor,
                borderColor: isToday ? 'hsl(var(--color-primary))' : borderColor,
                boxShadow: tierData.score >= 90 ? '0 4px 12px rgba(255, 215, 0, 0.3)' : 'none',
                transform: tierData.score >= 90 ? 'scale(1.02)' : 'none',
                zIndex: tierData.score >= 90 ? 1 : 0,
            }}
            onClick={() => onSelect(tierData)}
        >
            <span style={{
                ...styles.dateNumber,
                color: date.getDay() === 0 ? '#ff5252' : (date.getDay() === 6 ? '#1e88e5' : 'inherit'),
                opacity: isCurrentMonth ? 1 : 0.3
            }}>
                {date.getDate()}
            </span>

            <div style={styles.badgeContainer}>
                <span style={{
                    ...styles.tierLabel,
                    color: `hsl(${tierData.colorHSL})`,
                    fontWeight: tierData.score >= 90 ? '800' : '600',
                }}>{tierData.tier}</span>
            </div>
        </div>
    );
};

const styles = {
    cell: {
        height: '80px', // Fixed height for consistency
        border: '1px solid #f0f0f0',
        borderRadius: '8px',
        padding: '6px',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        backgroundColor: 'white',
        position: 'relative',
        overflow: 'hidden',
    },
    emptyCell: {
        height: '80px',
    },
    dateNumber: {
        fontSize: '0.9rem',
        fontWeight: '600',
        marginBottom: '4px',
    },
    badgeContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // Center content
        flexDirection: 'column',  // Stack dot and label
        flex: 1,
        gap: '4px',
    },
    tierLabel: {
        fontSize: '0.8rem', // Slightly larger
        fontWeight: '500',
    }
};

export default DateCell;
