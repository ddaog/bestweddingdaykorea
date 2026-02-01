import { useState, useEffect } from 'react'
// Deployment trigger: v2.1
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WeddingGuide from './pages/WeddingGuide';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import { HOLIDAYS_2025 } from './domain/holidays';

function App() {
  const [holidays, setHolidays] = useState(HOLIDAYS_2025);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        // Fetch 2025, 2026, 2027 holidays in parallel
        const years = [2025, 2026, 2027];
        const responses = await Promise.all(
          years.map(year => fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/KR`))
        );

        const allData = await Promise.all(
          responses.map(res => {
            if (!res.ok) throw new Error('API Failed');
            return res.json();
          })
        );

        const holidayMap = {};

        // Merge data from all years
        allData.flat().forEach(h => {
          holidayMap[h.date] = h.localName;
        });

        setHolidays(prev => ({ ...prev, ...holidayMap }));
      } catch (error) {
        console.warn("Failed to fetch holidays, using local fallback.", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHolidays();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home holidays={holidays} loading={loading} />} />
          <Route path="guide" element={<WeddingGuide />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfUse />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
