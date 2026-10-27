import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { CONTACT_INFO } from '../../data/content';
import { MapPin, Navigation, ExternalLink, Compass } from 'lucide-react';

export const GoogleMapsSection: React.FC = () => {
  return (
    <section 
      id="location" 
      className="py-20 lg:py-24 bg-ivory relative border-b border-ivory-border"
      aria-label="Office Location and Directions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Consultancy Presence"
          title="Visit Our Office"
          subtitle="Connect with us for a discussion about your institution's academic and strategic requirements."
          align="center"
          theme="light"
        />

        {/* Map and Location Details Container */}
        <div className="p-4 sm:p-6 lg:p-8 rounded-3xl bg-white border border-ivory-border shadow-card overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Office Address & Get Directions (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-navy-950 text-gold flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-navy-950">
                    Hyderabad Headquarters
                  </h3>
                  <p className="text-xs text-charcoal-muted uppercase tracking-wider font-semibold">
                    SH Consultancy Services
                  </p>
                </div>
              </div>

              {/* Exact Address Box */}
              <div className="p-5 rounded-2xl bg-ivory/60 border border-ivory-border space-y-3">
                <div className="flex items-start gap-2.5">
                  <Compass className="w-5 h-5 text-royal shrink-0 mt-0.5" />
                  <div className="text-sm text-charcoal leading-relaxed">
                    <p className="font-semibold text-navy-950 mb-1">Registered Address:</p>
                    <p>{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-navy-100/60 flex items-center justify-between text-xs text-charcoal-muted font-medium">
                  <span>Region: Hyderabad Urban Area</span>
                  <span className="text-royal font-semibold">PIN: 500070</span>
                </div>
              </div>

              {/* Get Directions Button */}
              <div>
                <a
                  href={CONTACT_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-navy-900 text-white hover:bg-navy-800 text-sm font-semibold transition-all duration-300 shadow-md group hover:shadow-navy-glow"
                >
                  <Navigation className="w-4 h-4 text-gold group-hover:rotate-45 transition-transform" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-4 h-4 text-white/70" />
                </a>
                <p className="text-[11px] text-center text-charcoal-muted mt-2">
                  Opens Google Maps directly with plot and colony search coordinates.
                </p>
              </div>

              {/* Proximity / Accessibility note */}
              <div className="p-4 rounded-xl bg-navy-50 border border-navy-100/80 text-xs text-charcoal-muted leading-relaxed">
                <strong className="text-navy-900 block mb-1">Appointment Advisory:</strong>
                Institutional leadership delegations and college managements are requested to schedule an appointment prior to visiting to ensure Dr. V. Bhagya Raju's availability.
              </div>

            </div>

            {/* Right: Embedded Interactive Google Map (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden border-2 border-ivory-border shadow-inner bg-navy-50">
                <iframe
                  title="SH Consultancy Services Office Location - Vanasthalipuram, Hyderabad"
                  src="https://maps.google.com/maps?q=South+Entrance+Portion,+Plot+No.+136,+HIG+Phase-IV,+Gateway+Colony,+Vanasthalipuram,+Hyderabad,+Telangana+500070&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[10%] contrast-[105%]"
                />
                
                {/* Floating Map Pin Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-navy-950/90 text-white backdrop-blur-md px-4 py-2.5 rounded-xl border border-gold/40 shadow-lg text-xs flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-gold animate-ping" />
                    <span className="font-semibold text-gold-light">SH Consultancy Services</span>
                  </div>
                  <span className="text-[11px] text-white/70 font-mono">Vanasthalipuram, Hyderabad</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
