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
            className="date-cell"
            style={{
                backgroundColor: backgroundColor,
                borderColor: isToday ? 'hsl(var(--color-primary))' : borderColor,
                boxShadow: tierData.score >= 90 ? '0 4px 12px rgba(255, 215, 0, 0.3)' : 'none',
                transform: tierData.score >= 90 ? 'scale(1.02)' : 'none',
                zIndex: tierData.score >= 90 ? 1 : 0,
            }}
            onClick={() => onSelect(tierData)}
        >
            <div className="date-top-row">
                <span className="date-number" style={{
                    color: date.getDay() === 0 ? '#ff5252' : (date.getDay() === 6 ? '#1e88e5' : 'inherit'),
                    opacity: isCurrentMonth ? 1 : 0.3
                }}>
                    {date.getDate()}
                </span>
                {tierData.specialLabel && (
                    <span className="special-label">
                        {tierData.specialLabel}
                    </span>
                )}
            </div>

            <div className="tier-badge">
                <span className="tier-text" style={{
                    color: `hsl(${tierData.colorHSL})`,
                    fontWeight: tierData.score >= 90 ? '800' : '600',
                }}>{tierData.tier}</span>
            </div>
        </div>
    );
};

const styles = {
    emptyCell: {
        minHeight: '65px',
        aspectRatio: '4/5',
    }
};

export default DateCell;
