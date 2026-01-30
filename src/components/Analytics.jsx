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

        // 2. Google Search Console Setup (Meta Tag Injection)
        // User provided code: SbDCqO5WPYHuoaOc7Ln5Ct_6lyYNHtQz76-xzrlD5TE
        const gscCode = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION || 'SbDCqO5WPYHuoaOc7Ln5Ct_6lyYNHtQz76-xzrlD5TE';
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
