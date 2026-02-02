import { HOLIDAYS_2025, MAJOR_HOLIDAY_PERIODS } from './holidays';
import KoreanLunarCalendar from 'korean-lunar-calendar';

const lunarCalendar = new KoreanLunarCalendar();

export const calculateTier = (date, customHolidays = null, considerHandless = false) => {
    const year = date.getFullYear();
    const month = date.getMonth(); // 0-11
    const day = date.getDate();
    const dayOfWeek = date.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
    const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

    let score = 50; // Base score
    let reasons = [];

    // 0. Handless Day Logic (Optional)
    let isHandless = false;
    if (considerHandless) {
        lunarCalendar.setSolarDate(year, month + 1, day);
        const { day: lunarDay } = lunarCalendar.getLunarCalendar();

        // Handless days end in 9 or 0 (9, 10, 19, 20, 29, 30)
        if (lunarDay % 10 === 9 || lunarDay % 10 === 0) {
            isHandless = true;
            score += 15; // Bonus
            reasons.push({ type: 'good', text: '손 없는 날: 악귀가 없는 길일로 이사나 결혼하기 아주 좋은 날입니다.' });
        } else {
            score -= 5; // Slight penalty if user cares but it's not Handless
            // reasons.push({ type: 'neutral', text: '손 있는 날: 평범한 날입니다.' }); // Optional to show
        }
    }

    // 1. Day of Week Logic
    if (dayOfWeek === 6) { // Saturday
        score += 40;
        reasons.push({ type: 'good', text: '토요일: 하객들이 참석하기 가장 좋은 요일입니다.' });
    } else if (dayOfWeek === 0) { // Sunday
        score += 10;
        reasons.push({ type: 'neutral', text: '일요일: 종교 활동이나 다음날 출근 부담으로 토요일보다는 비선호됩니다.' });
    } else if (dayOfWeek === 5) { // Friday
        score += 5;
        reasons.push({ type: 'neutral', text: '금요일: 저녁 예식은 가능하지만, 하객들의 퇴근길과 겹칠 수 있습니다.' });
    } else { // Mon-Thu
        score -= 30;
        reasons.push({ type: 'bad', text: '평일: 일반적인 하객들이 참석하기 매우 어렵습니다.' });
    }

    // 2. Season/Weather Logic
    if ([3, 4].includes(month)) { // Apr, May
        score += 20;
        reasons.push({ type: 'good', text: '봄: 춥지도 덥지도 않은 결혼식 최고의 계절입니다.' });
    } else if ([8, 9, 10].includes(month)) { // Sep, Oct, Nov
        score += 20;
        reasons.push({ type: 'good', text: '가을: 맑은 날씨와 적당한 기온으로 인기가 높습니다.' });
    } else if ([5, 6, 7].includes(month)) { // Jun, Jul, Aug
        score -= 20;
        if (month === 6 || month === 7) {
            reasons.push({ type: 'bad', text: '여름: 장마와 무더위로 하객들이 불쾌지수를 느낄 수 있습니다.' });
        } else {
            reasons.push({ type: 'neutral', text: '초여름: 다소 더울 수 있습니다.' });
        }
    } else { // Winter + March
        score -= 10;
        reasons.push({ type: 'neutral', text: '겨울/환절기: 날씨가 춥거나 변덕스러울 수 있습니다.' });
    }

    // 3. Holiday Logic
    const holidays = customHolidays || HOLIDAYS_2025;
    const holidayName = holidays[dateString];

    if (holidayName) {
        score -= 40; // Penalty for holiday
        reasons.push({ type: 'bad', text: `공휴일(${holidayName}): 하객들의 개인 일정이나 휴식과 겹쳐 민폐가 될 수 있습니다.` });
    }

    // Major Holiday Periods
    // Note: This logic assumes MAJOR_HOLIDAY_PERIODS are mainly for 2025 or static. 
    // For 2026/2027, the API might catch the holiday itself, but the 'period' logic (heavy penalty for Seollal week) 
    // needs dynamic calculation or year-specific data. 
    // Since major lunar holidays shift, simply relying on the single specific 'red days' from API is safer for future years 
    // unless we fully implement lunar calendar conversion.
    // The current MAJOR_HOLIDAY_PERIODS const only has 2025 dates.
    // We will skip this hardcoded check for non-2025 years to avoid false positives, relying on the API's red days (Tier decrease).
    // Or we could try to detect "Seollal/Chuseok" in the name and apply a bigger penalty.
    if (holidayName && (holidayName.includes('Seollal') || holidayName.includes('설날') || holidayName.includes('Chuseok') || holidayName.includes('추석'))) {
        score -= 20; // Extra penalty for major family holidays on top of holiday penalty
        reasons.push({ type: 'critical', text: '명절(설/추석): 귀성길 전쟁과 가족 행사로 인해 결혼식 날짜로 매우 부적절합니다.' });
    } else {
        // Fallback to hardcoded 2025 periods if year matches
        for (const period of MAJOR_HOLIDAY_PERIODS) {
            if (dateString >= period.start && dateString <= period.end) {
                score -= 50;
                reasons.push({ type: 'critical', text: `${period.name}: 명절 연휴 기간은 귀성길 전쟁과 가족 행사로 인해 결혼식 날짜로 최악입니다.` });
            }
        }
    }

    // 4. Special Periods Logic (CSAT & Year-End)

    // CSAT (Suneung) Dates
    const csatDates = {
        2025: '2025-11-13',
        2026: '2026-11-19',
        2027: '2027-11-18'
    };

    const csatDate = csatDates[year];
    if (csatDate) {
        // Calculate 2 weeks prior start date
        const csat = new Date(csatDate);
        const twoWeeksPrior = new Date(csat);
        twoWeeksPrior.setDate(csat.getDate() - 14);
        const twoWeeksPriorStr = twoWeeksPrior.toISOString().split('T')[0];

        if (dateString >= twoWeeksPriorStr && dateString <= csatDate) {
            score -= 20;
            reasons.push({ type: 'bad', text: '수능 시즌: 수험생이 있는 하객(친지 등)들이 예민한 시기라 참석이 어려울 수 있습니다.' });
        }
    }

    // Year-End / New Year - Dec 15 - Jan 15
    if ((month === 11 && day >= 15) || (month === 0 && day <= 15)) {
        score -= 20;
        reasons.push({ type: 'bad', text: '연말/연초: 송년회/신년회 등 각종 모임과 행사가 많아 하객들이 시간을 내기 부담스러울 수 있습니다.' });
    }

    // Cap score
    score = Math.max(0, Math.min(100, score));

    // Determine Tier
    let tier = '';
    let colorHSL = '';
    let color = '';

    if (score >= 90) {
        tier = '1티어';
        colorHSL = '45, 90%, 50%'; // Solid Gold
    } else if (score >= 70) {
        tier = '2티어';
        colorHSL = '200, 70%, 50%'; // Solid Blue
    } else if (score >= 50) {
        tier = '3티어';
        colorHSL = '150, 40%, 40%'; // Solid Green
    } else if (score >= 30) {
        tier = '4티어';
        colorHSL = '30, 40%, 50%'; // Solid Bronze
    } else {
        tier = '5티어';
        colorHSL = '0, 0%, 60%'; // Grey
    }

    color = `hsl(${colorHSL})`;

    return {
        score,
        tier,
        colorHSL,
        color,
        reasons,
        dateString,
        dayOfWeek,
        specialLabel: holidayName || (csatDate && dateString >= csatDate && dateString <= csatDate ? '수능' : null),
        isHandless
    };
};
