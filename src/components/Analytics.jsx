import { useEffect } from 'react';
import ReactGA from 'react-ga4';

const Analytics = () => {
    useEffect(() => {
        // 1. Google Analytics Setup
        const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;

        if (gaId) {
            ReactGA.initialize(gaId);
            ReactGA.send({ hitType: "pageview", page: window.location.pathname });
            console.log('GA Initialized:', gaId);
        } else {
            console.log('Analytics: No GA ID found (VITE_GA_MEASUREMENT_ID)');
        }

        // 2. Google Search Console Setup (Meta Tag Injection)
        const gscCode = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION;
        if (gscCode) {
            // Check if tag already exists
            if (!document.querySelector('meta[name="google-site-verification"]')) {
                const meta = document.createElement('meta');
                meta.name = 'google-site-verification';
                meta.content = gscCode;
                document.head.appendChild(meta);
                console.log('GSC Meta Tag Injected');
            }
        }
    }, []);

    return null; // This component doesn't render anything visual
};

export default Analytics;
