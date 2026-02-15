export const sendGAEvent = (eventName, params = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
        // Enforce global parameter for cross-service tracking
        const enhancedParams = {
            ...params,
            service_name: 'best-wedding-day'
        };

        window.gtag('event', eventName, enhancedParams);

        // Only log in dev mode if needed for debugging
        if (import.meta.env.DEV) {
            console.log(`[GA Event] ${eventName}`, enhancedParams);
        }
    } else {
        if (import.meta.env.DEV) {
            console.warn(`[GA Event Skipped] ${eventName} - gtag not found`);
        }
    }
};
