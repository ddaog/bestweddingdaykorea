import { useEffect } from 'react';
import ReactGA from 'react-ga4';

const Analytics = () => {
    useEffect(() => {
        // 1. Google Analytics Setup
        // User provided ID: G-P14YDMV3CN
        const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-P14YDMV3CN';

        if (gaId) {
            ReactGA.initialize(gaId);
            ReactGA.send({ hitType: "pageview", page: window.location.pathname });
        }

        // 2. Google Search Console & AdSense are now in index.html for static verification
    }, []);

    return null; // This component doesn't render anything visual
};

export default Analytics;
