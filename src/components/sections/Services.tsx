import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { SERVICES } from '../../data/content';
import { ServiceType } from '../../types';
import { 
  Award, 
  GraduationCap, 
  TrendingUp, 
  Briefcase, 
  Building2, 
  Landmark, 
  ArrowRight, 
  CheckCircle, 
  ShieldAlert 
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceKey: ServiceType) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-6 h-6 text-gold" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-gold" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-gold" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-gold" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-gold" />;
      case 'Landmark': return <Landmark className="w-6 h-6 text-gold" />;
      default: return <Award className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <section 
      id="services" 
      className="py-20 lg:py-28 bg-white relative border-b border-navy-100"
      aria-label="Our Consultancy Services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Specialized Institutional Advisory"
          title="Our Consulting Services"
          subtitle="Comprehensive advisory solutions tailored for engineering colleges, universities, and higher education leadership across India."
          align="center"
          theme="light"
        />

        {/* 6-Card Services Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between p-8 rounded-2xl bg-ivory/50 border border-ivory-border hover:border-gold/60 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle Card Accent Banner */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent group-hover:via-gold transition-all duration-300" />

              <div>
                {/* Icon & Category Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-navy-950 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-royal bg-royal/10 px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Advisory
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-serif font-bold text-navy-950 mb-3 group-hover:text-royal transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Strategic Highlights */}
                <ul className="space-y-2 mb-6 pt-4 border-t border-navy-100/60">
                  {service.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-charcoal font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contextual Inquiry CTA */}
              <div className="pt-4 border-t border-navy-100/40">
                <button
                  onClick={() => onSelectService(service.serviceKey)}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold text-navy-900 bg-white hover:bg-navy-900 hover:text-white border border-ivory-border hover:border-navy-900 transition-all duration-300 shadow-sm group-hover:border-gold/40"
                  aria-label={`${service.ctaText} for ${service.title}`}
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Regulatory & Advisory Disclaimer Notice */}
        <div className="mt-12 p-5 rounded-xl bg-navy-50 border border-navy-100/80 flex items-start gap-3.5 text-xs text-charcoal-muted">
          <ShieldAlert className="w-5 h-5 text-royal shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-navy-950">Statutory Advisory Note:</strong> All regulatory and accreditation services are rendered strictly as strategic consultancy, readiness evaluation, and preparation support. SH Consultancy Services does not guarantee accreditation grades, rankings, statutory approvals, or university status. All formal determinations remain subject to current regulations and the sole jurisdiction of competent authorities (including NBA, NAAC, NIRF, UGC, and respective State Governments).
          </p>
        </div>

      </div>
    </section>
  );
};
