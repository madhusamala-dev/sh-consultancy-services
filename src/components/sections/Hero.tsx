import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, Award, GraduationCap, Building2 } from 'lucide-react';

interface HeroProps {
  onScheduleConsultation: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onScheduleConsultation,
  onExploreServices
}) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white py-12 lg:py-16"
      aria-label="Welcome and Introduction"
    >
      {/* Background Architectural Canvas Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-15 mix-blend-luminosity scale-105 transform pointer-events-none transition-transform duration-1000"
        style={{ backgroundImage: `url('/images/campus-architecture.jpg')` }}
        aria-hidden="true"
      />

      {/* Decorative Gold & Navy Atmospheric Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-royal/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-navy-950/60 to-navy-950 pointer-events-none" />

      {/* Subtle Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Small Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-gold/40 text-gold-light text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>ACADEMIC EXCELLENCE. STRATEGIC GUIDANCE.</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-serif font-bold text-white tracking-tight leading-[1.15]">
              Empowering Institutions.{' '}
              <span className="block mt-1 sm:mt-2 text-gold-gradient">
                Elevating Academic Excellence.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-navy-100/90 leading-relaxed max-w-2xl font-light">
              SH Consultancy Services partners with higher education institutions to navigate accreditation, national rankings, consultancy projects, and university establishment processes with strategic guidance and expert support.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                onClick={onScheduleConsultation}
                rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
                className="shadow-gold-glow"
              >
                Schedule a Consultation
              </Button>

              <Button
                variant="navy"
                size="lg"
                onClick={onExploreServices}
                className="bg-navy-800/90 hover:bg-navy-700 border-navy-600/70 text-white"
              >
                Explore Our Services
              </Button>
            </div>

            {/* Trust Statement */}
            <div className="pt-4 border-t border-navy-800/80 flex items-center flex-wrap gap-x-3 gap-y-2 text-xs sm:text-sm text-gold-light font-medium tracking-wide">
              <span>Strategic Guidance</span>
              <span className="text-gold/60">•</span>
              <span>Institutional Excellence</span>
              <span className="text-gold/60">•</span>
              <span>Sustainable Growth</span>
            </div>

            {/* Advisory Pillars Quick Badge Row */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="p-2.5 rounded-lg bg-navy-900/60 border border-navy-800 backdrop-blur-sm flex items-center gap-2.5">
                <Award className="w-4 h-4 text-gold shrink-0" />
                <div className="text-[11px] leading-tight text-white/90">
                  <span className="font-semibold block">NBA & NAAC</span>
                  <span className="text-white/60">Accreditation</span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-navy-900/60 border border-navy-800 backdrop-blur-sm flex items-center gap-2.5">
                <GraduationCap className="w-4 h-4 text-gold shrink-0" />
                <div className="text-[11px] leading-tight text-white/90">
                  <span className="font-semibold block">NIRF Ready</span>
                  <span className="text-white/60">Metrics Audit</span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-navy-900/60 border border-navy-800 backdrop-blur-sm flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-gold shrink-0" />
                <div className="text-[11px] leading-tight text-white/90">
                  <span className="font-semibold block">Universities</span>
                  <span className="text-white/60">Establishment</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Portrait of Dr. V. Bhagya Raju (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Decorative Outer Aura / Frame Backdrop */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-gold/30 via-royal/20 to-gold/40 blur-lg opacity-70 transform rotate-1" />
              
              {/* Editorial Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-navy-900 border-2 border-gold/40 shadow-2xl">
                
                {/* Genuine Uploaded Photograph */}
                <div className="relative aspect-[3/4] overflow-hidden bg-navy-950">
                  <img
                    src="/images/bhagyaraju-sir.jpeg"
                    alt="Dr. V. Bhagya Raju, Lead Academic Consultant at SH Consultancy Services"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    loading="eager"
                    fetchPriority="high"
                  />
                  
                  {/* Subtle Gradient Overlay at bottom for seamless text blending */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent pointer-events-none" />
                </div>

                {/* Floating Profile Card over Portrait base */}
                <div className="absolute bottom-3 inset-x-3 p-3.5 rounded-xl bg-navy-950/95 border border-gold/40 backdrop-blur-md shadow-xl text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-serif font-bold text-white tracking-wide">
                        Dr. V. Bhagya Raju
                      </h3>
                      <p className="text-xs text-gold font-medium">
                        Academic Consultant
                      </p>
                    </div>
                    
                    <span className="inline-flex px-2 py-1 rounded bg-gold/15 text-[10px] font-semibold text-gold-light border border-gold/30">
                      Lead Advisor
                    </span>
                  </div>
                  
                  <div className="mt-2 pt-2 border-t border-navy-800 flex items-center justify-between text-[11px] text-navy-100 font-mono tracking-wider">
                    <span>B.E.</span>
                    <span className="text-gold/70">|</span>
                    <span>M.Tech.</span>
                    <span className="text-gold/70">|</span>
                    <span>Ph.D.</span>
                  </div>
                </div>

              </div>

              {/* Decorative Corner Badge */}
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gold-gradient border-2 border-navy-950 flex items-center justify-center shadow-lg text-navy-950 font-bold text-xs">
                ★
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
