import React from 'react';

const LogoIcon: React.FC = () => (
    <svg width="56" height="56" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FDE08D" />
                <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
        </defs>
        <g>
            {/* Outer Circle Frame */}
            <path d="M 89.5 67 A 45 45 0 1 1 10.5 67" fill="none" stroke="#0A2342" strokeWidth="6"/>
            <path d="M 10.5 33 A 45 45 0 1 1 89.5 33" fill="none" stroke="#0A2342" strokeWidth="6"/>
            <path d="M 7 50 l 4 -4 l 4 4 l -4 4 z" fill="url(#goldGradient)"/>
            <path d="M 93 50 l -4 -4 l -4 4 l 4 4 z" fill="url(#goldGradient)"/>

            {/* Buildings */}
            <g stroke="#243b55" strokeWidth="0.5" fill="#0A2342">
                {/* Center Building */}
                <path d="M47,32 h6 v58 h-6 z" />
                {/* Left Building */}
                <path d="M32,45 l15,-10 v55 h-15 z" />
                {/* Right Building */}
                <path d="M68,45 l-15,-10 v55 h15 z" />
            </g>
            
            {/* Building Windows */}
            <g fill="#FFFFFF44" stroke="none">
                <rect x="48" y="35" width="4" height="4" />
                <rect x="48" y="41" width="4" height="4" />
                <rect x="48" y="47" width="4" height="4" />
                <rect x="35" y="50" width="4" height="4" />
                <rect x="35" y="56" width="4" height="4" />
                <rect x="35" y="62" width="4" height="4" />
                <rect x="61" y="50" width="4" height="4" />
                <rect x="61" y="56" width="4" height="4" />
                <rect x="61" y="62" width="4" height="4" />
            </g>
            
            {/* R Letter */}
            <g>
                <path d="M 38 65 V 90 H 34 V 65 H 45 C 52,65 56,69 56,75 C 56,81 52,85 45,85 H 41 L 52 90 H 47 L 38 83 V 65" fill="url(#goldGradient)"/>
                <path d="M 38 71 H 45 C 48,71 50,72 50,75 C 50,78 48,79 45,79 H 38 Z" fill="#0A2342" />
            </g>

            {/* C Letter */}
            <path d="M 69 64 C 60 64 56 70 56 77.5 C 56 85 60 91 69 91 V 87 C 62 87 60 83 60 77.5 C 60 72 62 68 69 68 V 64 Z" fill="#0A2342" stroke="url(#goldGradient)" strokeWidth="2.5" />
            
            {/* Crown */}
            <g fill="url(#goldGradient)">
                <path d="M35,40 C 40,32 60,32 65,40 L 68,25 L 50,18 L 32,25 Z" />
                <circle cx="31" cy="23" r="3" />
                <circle cx="50" cy="16" r="3" />
                <circle cx="69" cy="23" r="3" />
            </g>
        </g>
    </svg>
);

export default LogoIcon;
