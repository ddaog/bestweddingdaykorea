export const sendGAEvent = (eventName, params = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, params);
        // Only log in dev mode if needed for debugging
        if (import.meta.env.DEV) {
            console.log(`[GA Event] ${eventName}`, params);
        }
    } else {
        if (import.meta.env.DEV) {
            console.warn(`[GA Event Skipped] ${eventName} - gtag not found`);
        }
    }
};
