
import React from 'react';

const RaydiumLogo = () => {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#46E2FF" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
            </defs>
            <path d="M24 3L43.8823 14.25V36.75L24 48L4.11774 36.75V14.25L24 3Z" stroke="url(#logoGradient)" strokeWidth="2.5" />
            <path d="M30 18H22.5C20.0147 18 18 20.0147 18 22.5V22.5C18 24.9853 20.0147 27 22.5 27H30" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24 27V33" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="31" cy="17" r="2.5" fill="url(#logoGradient)" />
        </svg>
    );
};

export default RaydiumLogo;
