import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = ''
}) => {
  const isDark = theme === 'dark';
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-3 ${
          isDark 
            ? 'bg-navy-800/80 text-gold-light border border-gold/30' 
            : 'bg-navy-50 text-navy-800 border border-navy-100'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block"></span>
          {eyebrow}
        </div>
      )}

      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4 ${
        isDark ? 'text-white' : 'text-navy-950'
      }`}>
        {title}
      </h2>

      {/* Decorative Gold Accent Rule */}
      <div className={`flex items-center gap-3 mb-5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="h-[2px] w-12 bg-gold"></div>
        <div className="w-2 h-2 rotate-45 border border-gold bg-gold/30"></div>
        <div className="h-[2px] w-12 bg-gold"></div>
      </div>

      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          isDark ? 'text-navy-100/90' : 'text-charcoal-muted'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
