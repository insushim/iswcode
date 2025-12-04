import React from 'react';

interface AppLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeMap = {
  sm: 'w-10 h-10',
  md: 'w-14 h-14',
  lg: 'w-20 h-20',
  xl: 'w-24 h-24',
};

const AppLogo: React.FC<AppLogoProps> = ({ size = 'md', className = '' }) => {
  return (
    <div className={`${sizeMap[size]} ${className} rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/30`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#6366f1' }} />
            <stop offset="50%" style={{ stopColor: '#a855f7' }} />
            <stop offset="100%" style={{ stopColor: '#ec4899' }} />
          </linearGradient>
          <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#ffffff' }} />
            <stop offset="100%" style={{ stopColor: '#e2e8f0' }} />
          </linearGradient>
          <linearGradient id="flameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#fbbf24' }} />
            <stop offset="50%" style={{ stopColor: '#f97316' }} />
            <stop offset="100%" style={{ stopColor: '#ef4444' }} />
          </linearGradient>
        </defs>
        {/* 배경 */}
        <rect width="100" height="100" rx="22" fill="url(#bgGrad)" />
        {/* 로켓 몸체 */}
        <ellipse cx="50" cy="42" rx="14" ry="24" fill="url(#rocketGrad)" />
        {/* 로켓 머리 */}
        <path d="M50 18 L38 35 Q50 30 62 35 Z" fill="url(#rocketGrad)" />
        {/* 창문 */}
        <circle cx="50" cy="38" r="7" fill="#6366f1" />
        <circle cx="50" cy="38" r="5" fill="#a5b4fc" />
        <ellipse cx="48" cy="36" rx="2" ry="1.5" fill="white" opacity="0.8" />
        {/* 날개 */}
        <path d="M36 52 L28 65 L36 58 Z" fill="#c4b5fd" />
        <path d="M64 52 L72 65 L64 58 Z" fill="#c4b5fd" />
        {/* 불꽃 */}
        <ellipse cx="50" cy="72" rx="8" ry="12" fill="url(#flameGrad)" />
        <ellipse cx="50" cy="70" rx="5" ry="8" fill="#fef3c7" />
        <ellipse cx="50" cy="68" rx="3" ry="5" fill="white" />
        {/* 코드 기호 */}
        <text x="20" y="25" fontFamily="monospace" fontSize="12" fontWeight="bold" fill="white" opacity="0.9">&lt;</text>
        <text x="75" y="25" fontFamily="monospace" fontSize="12" fontWeight="bold" fill="white" opacity="0.9">/&gt;</text>
      </svg>
    </div>
  );
};

export default AppLogo;
