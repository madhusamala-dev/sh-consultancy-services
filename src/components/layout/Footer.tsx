import React from 'react';
import { ShLogo } from '../ui/ShLogo';
import { CONTACT_INFO, SERVICES } from '../../data/content';
import { ServiceType } from '../../types';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp,
  ShieldAlert
} from 'lucide-react';

const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

interface FooterProps {
  onSelectService: (serviceKey: ServiceType) => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService, onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Social media profile URLs (kept configurable per prompt guidelines)
  const socialLinks = [
    { name: 'LinkedIn', icon: <LinkedInIcon />, href: '#', title: 'LinkedIn Profile' },
    { name: 'Facebook', icon: <FacebookIcon />, href: '#', title: 'Facebook Page' },
    { name: 'Instagram', icon: <InstagramIcon />, href: '#', title: 'Instagram Profile' },
    { name: 'YouTube', icon: <YoutubeIcon />, href: '#', title: 'YouTube Channel' },
  ];

  return (
    <footer className="bg-navy-950 text-white border-t border-navy-800 relative z-10" aria-label="Site Footer">
      
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1 — Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <ShLogo size="md" variant="dark" />
            
            <p className="text-sm text-navy-100/80 leading-relaxed font-light pr-4">
              Strategic Guidance for Academic and Institutional Excellence. Partnering with higher education leadership to achieve sustainable quality milestones.
            </p>

            <div className="p-3.5 rounded-xl bg-navy-900/80 border border-navy-800 text-xs text-gold-light space-y-1">
              <span className="font-semibold block text-white">Lead Consultant:</span>
              <span>Dr. V. Bhagya Raju (B.E., M.Tech., Ph.D.)</span>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-charcoal-subtle font-semibold block mb-2.5">
                Institutional Media Channels
              </span>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    onClick={(e) => {
                      if (social.href === '#') {
                        e.preventDefault();
                        alert(`Official ${social.name} profile link is configurable via project deployment settings.`);
                      }
                    }}
                    className="w-9 h-9 rounded-lg bg-navy-900 border border-navy-800 hover:border-gold hover:text-gold flex items-center justify-center text-white/80 transition-colors shadow-sm"
                    title={social.title}
                    aria-label={social.title}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2 — Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-serif font-bold text-gold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-navy-100/80 font-medium">
              <li>
                <a 
                  href="#hero" 
                  onClick={(e) => handleSmoothScroll(e, '#hero')}
                  className="hover:text-gold transition-colors inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleSmoothScroll(e, '#about')}
                  className="hover:text-gold transition-colors inline-block"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleSmoothScroll(e, '#services')}
                  className="hover:text-gold transition-colors inline-block"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#expertise" 
                  onClick={(e) => handleSmoothScroll(e, '#expertise')}
                  className="hover:text-gold transition-colors inline-block"
                >
                  Expertise
                </a>
              </li>
              <li>
                <a 
                  href="#approach" 
                  onClick={(e) => handleSmoothScroll(e, '#approach')}
                  className="hover:text-gold transition-colors inline-block"
                >
                  Approach
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleSmoothScroll(e, '#contact')}
                  className="hover:text-gold transition-colors inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 — Our Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-serif font-bold text-gold uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm text-navy-100/80 font-medium">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onSelectService(s.serviceKey)}
                    className="hover:text-gold transition-colors text-left text-sm"
                  >
                    {s.shortTitle}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Get in Touch (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-serif font-bold text-gold uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-navy-100/80">
              <a 
                href={`tel:${CONTACT_INFO.phoneRaw}`} 
                className="flex items-center gap-2.5 hover:text-gold transition-colors font-medium"
              >
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </a>

              <a 
                href={`mailto:${CONTACT_INFO.email}`} 
                className="flex items-start gap-2.5 hover:text-gold transition-colors font-medium break-all"
              >
                <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                <span className="text-xs leading-relaxed text-white/70">
                  {CONTACT_INFO.shortAddress}
                </span>
              </div>

              <div className="pt-2">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-700 text-xs text-gold-light hover:bg-navy-800 transition-colors"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Back to Top</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimer Banner */}
        <div className="mt-12 p-4 rounded-xl bg-navy-900/90 border border-navy-800 flex items-start gap-3 text-xs text-navy-100/80 leading-relaxed">
          <ShieldAlert className="w-4 h-4 text-gold shrink-0 mt-0.5" />
          <p>
            <strong className="text-white font-semibold">Regulatory Disclaimer: </strong>
            Consultancy services provide advisory and preparation support. Accreditation, ranking, and regulatory decisions remain subject to the relevant authorities and applicable regulations.
          </p>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-8 pt-8 border-t border-navy-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-subtle">
          <p>
            © 2026 SH Consultancy Services. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-gold transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-navy-700">•</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-gold transition-colors cursor-pointer"
            >
              Terms of Use
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
