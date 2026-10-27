import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { QUALIFICATIONS } from '../../data/content';
import { GraduationCap, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  onDiscussRequirements: () => void;
}

export const About: React.FC<AboutProps> = ({ onDiscussRequirements }) => {
  return (
    <section 
      id="about" 
      className="py-20 lg:py-24 bg-ivory relative border-b border-ivory-border"
      aria-label="About Dr. V. Bhagya Raju"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Leadership & Academic Advisory"
          title="Guiding Institutions Towards Excellence"
          subtitle="Experienced Academic Leadership. Strategic Institutional Development."
          align="center"
          theme="light"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Biography Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-charcoal">
            
            <div className="space-y-4 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                <strong>Dr. V. Bhagya Raju</strong> serves as the lead consultant at <strong>SH Consultancy Services</strong>, partnering with engineering colleges, universities, leadership teams, and higher education institutions to navigate institutional accreditation, national ranking frameworks, and regulatory expansion.
              </p>
              
              <p className="text-charcoal-muted">
                With a deep understanding of academic governance and quality assurance frameworks, Dr. Bhagya Raju assists institutional leaders, IQAC coordinators, and accreditation steering committees in translating statutory guidelines into clear, actionable institutional roadmaps.
              </p>
              
              <p className="text-charcoal-muted">
                His advisory engagements emphasize meticulous evidence management, data integrity, outcome-based education (OBE) alignment, and continuous quality improvement—empowering colleges and universities to build sustainable academic excellence.
              </p>
            </div>

            {/* Strategic Advisory Focus Points */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-navy-900">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-ivory-border shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>Accreditation Readiness & SAR/SSR Documentation</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-ivory-border shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>Institutional Ranking Metrics & Data Structuring</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-ivory-border shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>Academic Consultancy Projects & R&D Strategy</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-ivory-border shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>Deemed & Private University Regulatory Planning</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button
                variant="navy"
                size="lg"
                onClick={onDiscussRequirements}
                rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
              >
                Discuss Your Institution's Requirements
              </Button>
            </div>

          </div>

          {/* Educational Credentials Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl bg-white border border-ivory-border shadow-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-ivory-border">
                <div className="w-10 h-10 rounded-xl bg-navy-900 text-gold flex items-center justify-center shadow-sm">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-navy-950">
                    Academic Qualifications
                  </h3>
                  <p className="text-xs text-charcoal-muted uppercase tracking-wider font-semibold">
                    Higher Education Credentials
                  </p>
                </div>
              </div>

              {/* Credential Cards */}
              <div className="space-y-4">
                {QUALIFICATIONS.map((qual, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-ivory/60 border border-ivory-border hover:border-gold/60 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-royal bg-royal/10 px-2.5 py-0.5 rounded-full">
                        {qual.badge}
                      </span>
                      <ShieldCheck className="w-4 h-4 text-gold" />
                    </div>
                    <h4 className="text-base font-serif font-bold text-navy-950">
                      {qual.degree}
                    </h4>
                    <p className="text-xs sm:text-sm text-charcoal-muted mt-1 font-medium">
                      {qual.institution}
                    </p>
                  </div>
                ))}
              </div>

              {/* Advisory Philosophy Note */}
              <div className="mt-6 p-4 rounded-xl bg-navy-900 text-white text-xs leading-relaxed border border-navy-800">
                <p className="italic text-navy-100/90 font-serif">
                  "Institutional quality is not a one-time compliance milestone, but a continuous culture of evidence, rigor, and academic dedication."
                </p>
                <p className="mt-2 text-gold-light font-semibold not-italic">
                  — Dr. V. Bhagya Raju
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
