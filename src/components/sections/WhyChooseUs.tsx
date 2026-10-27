import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { VALUE_PROPOSITIONS } from '../../data/content';
import { Compass, Target, FileCheck, ShieldCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-7 h-7 text-gold" />;
      case 'Target': return <Target className="w-7 h-7 text-gold" />;
      case 'FileCheck': return <FileCheck className="w-7 h-7 text-gold" />;
      case 'ShieldCheck': return <ShieldCheck className="w-7 h-7 text-gold" />;
      default: return <ShieldCheck className="w-7 h-7 text-gold" />;
    }
  };

  return (
    <section 
      id="expertise" 
      className="py-20 lg:py-28 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white relative overflow-hidden"
      aria-label="Why Choose SH Consultancy Services"
    >
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-royal/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Core Advisory Values"
          title="A Strategic Partner in Institutional Growth"
          subtitle="Built on methodical rigor, transparency, and a commitment to higher education development across India."
          align="center"
          theme="dark"
        />

        {/* 4 Value Propositions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUE_PROPOSITIONS.map((item, index) => (
            <div
              key={index}
              className="relative p-7 rounded-2xl bg-navy-900/80 border border-navy-700/60 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-navy-950 border border-gold/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-inner">
                  {getIcon(item.icon)}
                </div>

                {/* Proposition Title */}
                <h3 className="text-lg font-serif font-bold text-white mb-3 group-hover:text-gold-light transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-navy-100/80 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Number Index Marker */}
              <div className="mt-6 pt-4 border-t border-navy-800/80 flex items-center justify-between text-xs text-gold/60 font-mono">
                <span>0{index + 1}</span>
                <span className="w-8 h-[1px] bg-gold/30 group-hover:w-12 group-hover:bg-gold transition-all duration-300"></span>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Ethos Ribbon */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-navy-900/60 border border-gold/25 backdrop-blur-md max-w-4xl mx-auto text-center">
          <p className="text-base sm:text-lg font-serif italic text-gold-light">
            "We believe that true institutional excellence emerges when governance, teaching quality, and evidentiary documentation function in complete harmony."
          </p>
          <div className="mt-3 text-xs tracking-wider uppercase font-semibold text-white/70">
            Professional Advisory • Ethical Standards • Measurable Milestones
          </div>
        </div>

      </div>
    </section>
  );
};
