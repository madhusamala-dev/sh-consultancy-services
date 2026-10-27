import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { TIMELINE_STEPS } from '../../data/content';

export const ConsultingApproach: React.FC = () => {
  return (
    <section 
      id="approach" 
      className="py-20 lg:py-28 bg-ivory relative border-b border-ivory-border overflow-hidden"
      aria-label="Our Consulting Approach"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Methodology & Execution"
          title="Our Consulting Approach"
          subtitle="A structured 5-stage advisory framework designed to ensure comprehensive institutional readiness and lasting excellence."
          align="center"
          theme="light"
        />

        {/* Process Timeline */}
        {/* Desktop Layout: Horizontal 5-Step Process */}
        <div className="hidden lg:block relative mt-8">
          
          {/* Horizontal Connecting Guide Line */}
          <div className="absolute top-1/2 left-10 right-10 -translate-y-12 h-[2px] bg-gradient-to-r from-gold/30 via-gold to-gold/30 z-0" />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {TIMELINE_STEPS.map((step, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center text-center group"
              >
                {/* Number Circle Marker */}
                <div className="w-16 h-16 rounded-2xl bg-navy-950 border-2 border-gold text-gold font-serif font-bold text-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-royal transition-all duration-300 mb-6 relative">
                  <span>{step.step}</span>
                  <div className="absolute -inset-1 rounded-2xl border border-gold/30 scale-95 group-hover:scale-105 transition-transform" />
                </div>

                {/* Step Card Content */}
                <div className="p-5 rounded-xl bg-white border border-ivory-border shadow-sm hover:shadow-card hover:border-gold/50 transition-all duration-300 w-full min-h-[175px] flex flex-col justify-start">
                  <h3 className="text-base font-serif font-bold text-navy-950 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Mobile & Tablet Layout: Vertical Connected Timeline */}
        <div className="lg:hidden relative pl-6 sm:pl-8 border-l-2 border-gold/60 space-y-8 ml-3 sm:ml-4">
          {TIMELINE_STEPS.map((step, idx) => (
            <div key={idx} className="relative group">
              
              {/* Vertical Timeline Pin */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-10 h-10 rounded-xl bg-navy-950 border-2 border-gold text-gold font-serif font-bold text-sm flex items-center justify-center shadow-md">
                {step.step}
              </div>

              {/* Step Card Content */}
              <div className="p-5 rounded-xl bg-white border border-ivory-border shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-royal bg-royal/10 px-2.5 py-0.5 rounded-full inline-block mb-1.5">
                  Stage {step.step}
                </span>
                <h3 className="text-base sm:text-lg font-serif font-bold text-navy-950 mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
