import React, { useState } from 'react';
import { sendGAEvent } from '../utils/analytics';

const FeedbackModal = ({ isOpen, onClose }) => {
    const [text, setText] = useState('');

    if (!isOpen) return null;

    const handleSubmit = () => {
        if (!text.trim()) return;

        // Track valid submission
        sendGAEvent('feedback_submit', {
            feedback_content: text
        });

        // UI simulation only
        window.alert('소중한 의견 감사합니다! 더 좋은 서비스가 되도록 노력하겠습니다. ✨');
        setText('');
        onClose();
    };

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <div style={styles.header}>
                    <h3 style={styles.title}>✨ 의견 보내기</h3>
                    <button onClick={onClose} style={styles.closeButton}>×</button>
                </div>

                <p style={styles.description}>
                    서비스를 이용하며 불편했던 점이나,<br />
                    추가되었으면 하는 기능을 자유롭게 적어주세요.
                </p>

                <textarea
                    style={styles.textarea}
                    placeholder="예: 2028년 달력도 보고 싶어요, 색감이 너무 쨍해요 등"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    autoFocus
                />

                <div style={styles.footer}>
                    <button onClick={onClose} style={styles.cancelButton}>취소</button>
                    <button onClick={handleSubmit} style={styles.submitButton}>보내기</button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px',
    },
    modal: {
        backgroundColor: '#fff',
        borderRadius: '24px',
        padding: '25px',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
        animation: 'fadeIn 0.2s ease-out',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '15px',
    },
    title: {
        margin: 0,
        fontSize: '1.2rem',
        color: 'hsl(var(--color-primary))',
    },
    closeButton: {
        background: 'none',
        border: 'none',
        fontSize: '1.5rem',
        color: '#999',
        cursor: 'pointer',
        padding: '0 5px',
    },
    description: {
        fontSize: '0.9rem',
        color: '#666',
        marginBottom: '20px',
        lineHeight: '1.5',
    },
    textarea: {
        width: '100%',
        height: '120px',
        padding: '15px',
        borderRadius: '16px',
        border: '1px solid #eee',
        backgroundColor: '#f9f9f9',
        fontSize: '0.95rem',
        fontFamily: 'inherit',
        resize: 'none',
        marginBottom: '20px',
        outline: 'none',
    },
    footer: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '10px',
    },
    cancelButton: {
        padding: '10px 20px',
        borderRadius: '12px',
        backgroundColor: '#f5f5f5',
        color: '#666',
        fontWeight: '600',
        fontSize: '0.9rem',
        transition: 'background-color 0.2s',
    },
    submitButton: {
        padding: '10px 20px',
        borderRadius: '12px',
        backgroundColor: 'hsl(var(--color-primary))',
        color: '#fff',
        fontWeight: '600',
        fontSize: '0.9rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s',
    }
};

export default FeedbackModal;
