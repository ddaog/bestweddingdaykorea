import React, { useMemo } from 'react';
import { calculateTier } from '../domain/weddingLogic';

const DateCell = ({ date, isCurrentMonth, onSelect, customHolidays, considerHandless }) => {
    const tierData = useMemo(() => calculateTier(date, customHolidays, considerHandless), [date, customHolidays, considerHandless]);

    const isToday = new Date().toDateString() === date.toDateString();

    if (!isCurrentMonth) {
        return <div className="date-cell empty"></div>;
    }

    // Using HSL values for dynamic styling
    const backgroundColor = `hsla(${tierData.colorHSL}, 0.15)`;

    // Determine text color (Holiday > Sunday > Saturday > Default)
    // Assuming specialLabel indicating a holiday means we should color it red
    const isHoliday = !!tierData.specialLabel;
    const dayOfWeek = date.getDay();

    let dateColor = 'inherit';
    if (isHoliday || dayOfWeek === 0) {
        dateColor = '#ff5252'; // Red for Holiday or Sunday
    } else if (dayOfWeek === 6) {
        dateColor = '#1e88e5'; // Blue for Saturday
    }

    return (
        <div
            className={`date-cell ${isToday ? 'today' : ''}`}
            style={{
                backgroundColor: backgroundColor,
                // Soft glow for high tier instead of hard scale/shadow
                boxShadow: tierData.score >= 90 ? `0 4px 15px hsla(${tierData.colorHSL}, 0.4)` : 'none',
            }}
            onClick={() => onSelect(tierData)}
        >
            <div className="date-top-row">
                <span className="date-number" style={{
                    color: dateColor,
                    opacity: isCurrentMonth ? 1 : 0.3
                }}>
                    {date.getDate()}
                </span>
                {tierData.specialLabel && (
                    <span className="special-label-text">
                        {tierData.specialLabel}
                    </span>
                )}
                {tierData.isHandless && (
                    <span className="handless-icon" style={{ fontSize: '0.7rem', marginLeft: '2px' }} title="손 없는 날">👻</span>
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
