import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div style={styles.wrapper}>
            <header style={styles.header}>
                <div style={styles.container}>
                    <Link to="/" style={styles.logo}>Best Wedding Day</Link>
                    <nav style={styles.nav}>
                        <Link to="/" style={styles.navLink}>달력</Link>
                        <Link to="/guide" style={styles.navLink}>웨딩 가이드</Link>
                        <Link to="/faq" style={styles.navLink}>FAQ</Link>
                    </nav>
                </div>
            </header>

            <main style={styles.main}>
                <Outlet />
            </main>

            <footer style={styles.footer}>
                <div style={styles.footerContent}>
                    <div style={styles.footerLinks}>
                        <Link to="/privacy" style={styles.footerLink}>개인정보처리방침</Link>
                        <Link to="/terms" style={styles.footerLink}>이용약관</Link>
                    </div>
                    <p style={styles.copyright}>© 2026 Best Wedding Day. All rights reserved.</p>
                    <p style={styles.disclaimer}>본 서비스는 참고용 정보만을 제공하며, 실제 예식장 사정과는 다를 수 있습니다.</p>
                </div>
            </footer>
        </div>
    );
};

const styles = {
    wrapper: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        backgroundColor: '#fff',
        borderBottom: '1px solid #eee',
        padding: '15px 0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
    },
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: 'hsl(var(--color-primary))',
        textDecoration: 'none',
    },
    nav: {
        display: 'flex',
        gap: '20px',
    },
    navLink: {
        textDecoration: 'none',
        color: '#555',
        fontWeight: '500',
        fontSize: '0.95rem',
    },
    main: {
        flex: 1,
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
    },
    footer: {
        backgroundColor: '#f9f9f9',
        borderTop: '1px solid #eee',
        padding: '40px 0',
        marginTop: '60px',
    },
    footerContent: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 20px',
        textAlign: 'center',
    },
    footerLinks: {
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
    },
    footerLink: {
        textDecoration: 'none',
        color: '#666',
        fontSize: '0.9rem',
    },
    copyright: {
        color: '#999',
        fontSize: '0.85rem',
        marginBottom: '5px',
    },
    disclaimer: {
        color: '#bbb',
        fontSize: '0.8rem',
    }
};

export default Layout;
