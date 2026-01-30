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
            <div style={styles.topRow}>
                <span style={{
                    ...styles.dateNumber,
                    color: date.getDay() === 0 ? '#ff5252' : (date.getDay() === 6 ? '#1e88e5' : 'inherit'),
                    opacity: isCurrentMonth ? 1 : 0.3
                }}>
                    {date.getDate()}
                </span>
                {tierData.specialLabel && (
                    <span style={styles.specialLabel}>
                        {tierData.specialLabel}
                    </span>
                )}
            </div>

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
        borderRadius: '12px',
        padding: '4px 6px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        backgroundColor: 'white',
        position: 'relative',
        overflow: 'hidden',
    },
    emptyCell: {
        height: '80px',
    },
    topRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        width: '100%',
        marginBottom: '2px',
    },
    specialLabel: {
        fontSize: '0.6rem',
        color: '#ff5252',
        fontWeight: 'bold',
        marginLeft: '4px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '60%',
    },
    dateNumber: {
        fontSize: '1rem',
        fontWeight: '600',
    },
    badgeContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    tierLabel: {
        fontSize: '0.85rem',
    }
};

export default DateCell;
