import { useState, useEffect } from 'react'
import Calendar from './components/Calendar'
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
    <div className="container">
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2rem', color: 'hsl(var(--color-primary))', marginBottom: '8px' }}>
          Best Wedding Day
        </h1>
        <p style={{ color: 'hsl(var(--color-text-light))' }}>
          2025년 ~ 2027년, 완벽한 결혼식 날짜를 찾아드려요
        </p>
      </header>

      <main>
        {loading ? (
          <div style={{ padding: '40px', textAlign: 'center' }}>데이터 불러오는 중...</div>
        ) : (
          <Calendar customHolidays={holidays} />
        )}
      </main>
      <footer style={{ marginTop: '50px', textAlign: 'center', color: '#888', fontSize: '0.8rem' }}>
        <p>© 2026 Best Wedding Day. All rights reserved.</p>
        <p>Deployment Test: v2.0</p>
      </footer>
    </div>
  )
}

export default App
