import React from 'react';

interface ShLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const ShLogo: React.FC<ShLogoProps> = ({ 
  className = '', 
  size = 'md',
  variant = 'light'
}) => {
  const dimensions = {
    sm: { box: 36, text: 16, stroke: 1 },
    md: { box: 46, text: 20, stroke: 1.2 },
    lg: { box: 58, text: 26, stroke: 1.5 },
  }[size];

  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Monogram Crest Emblem */}
      <div 
        className="relative flex items-center justify-center shrink-0 rounded-lg transition-transform duration-300 hover:scale-105"
        style={{ width: dimensions.box, height: dimensions.box }}
      >
        <svg 
          viewBox="0 0 48 48" 
          width={dimensions.box} 
          height={dimensions.box} 
          className="drop-shadow-sm"
        >
          <defs>
            <linearGradient id={`goldGradLogo-${size}-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EAD399" />
              <stop offset="50%" stopColor="#C7A45A" />
              <stop offset="100%" stopColor="#9E7B34" />
            </linearGradient>
            <linearGradient id={`bgGradLogo-${size}-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isLight ? "#102A43" : "#081421"} />
              <stop offset="100%" stopColor={isLight ? "#081421" : "#102A43"} />
            </linearGradient>
          </defs>

          {/* Shield / Outer Base */}
          <rect 
            x="2" 
            y="2" 
            width="44" 
            height="44" 
            rx="10" 
            fill={`url(#bgGradLogo-${size}-${variant})`} 
            stroke={`url(#goldGradLogo-${size}-${variant})`} 
            strokeWidth={dimensions.stroke} 
          />
          
          {/* Inner Accent Line */}
          <rect 
            x="5" 
            y="5" 
            width="38" 
            height="38" 
            rx="8" 
            fill="none" 
            stroke={`url(#goldGradLogo-${size}-${variant})`} 
            strokeWidth="0.6" 
            strokeDasharray="2 2" 
            opacity="0.6" 
          />

          {/* Monogram SH */}
          <text 
            x="24" 
            y="30" 
            fontFamily="'Playfair Display', Georgia, serif" 
            fontSize={dimensions.text} 
            fontWeight="700" 
            textAnchor="middle" 
            fill={`url(#goldGradLogo-${size}-${variant})`}
            letterSpacing="0.5"
          >
            SH
          </text>
        </svg>
      </div>

      {/* Typography Brand Name */}
      <div className="flex flex-col text-left">
        <span className={`font-serif font-bold tracking-tight leading-tight ${
          isLight ? 'text-navy-900' : 'text-white'
        } ${size === 'lg' ? 'text-2xl' : size === 'md' ? 'text-lg' : 'text-base'}`}>
          SH Consultancy Services
        </span>
        <span className={`text-[10px] sm:text-[11px] tracking-wider uppercase font-medium ${
          isLight ? 'text-charcoal-muted' : 'text-gold-light'
        }`}>
          Academic Excellence & Institutional Advisory
        </span>
      </div>
    </div>
  );
};
