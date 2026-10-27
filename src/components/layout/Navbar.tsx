import React, { useState, useEffect } from 'react';
import { ShLogo } from '../ui/ShLogo';
import { Button } from '../ui/Button';
import { Menu, X, Phone, CalendarCheck } from 'lucide-react';
import { CONTACT_INFO } from '../../data/content';

interface NavbarProps {
  onBookConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Approach', href: '#approach' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-navy-100'
            : 'bg-white/80 backdrop-blur-sm py-4 border-b border-navy-100/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo and Monogram */}
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, '#hero')}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg p-1"
              aria-label="SH Consultancy Services Home"
            >
              <ShLogo size={isScrolled ? 'sm' : 'md'} variant="light" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3.5 py-2 text-sm font-medium text-navy-900 hover:text-royal rounded-md transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a 
                href={`tel:${CONTACT_INFO.phoneRaw}`} 
                className="hidden xl:inline-flex items-center text-xs font-semibold text-navy-800 hover:text-royal px-2.5 py-1.5 rounded-md hover:bg-navy-50 transition-colors"
                title="Call Dr. V. Bhagya Raju"
              >
                <Phone className="w-3.5 h-3.5 text-gold mr-1.5" />
                <span>+91 99853 27001</span>
              </a>

              <Button
                variant="gold"
                size={isScrolled ? 'sm' : 'md'}
                onClick={onBookConsultation}
                rightIcon={<CalendarCheck className="w-4 h-4 ml-1" />}
                className="shadow-sm"
              >
                Book a Consultation
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-navy-900 hover:bg-navy-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[100%] bg-white/98 backdrop-blur-lg border-b border-navy-100 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen ? 'max-h-[480px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0 pointer-events-none'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 text-base font-semibold text-navy-900 hover:bg-navy-50 hover:text-royal rounded-lg transition-colors border-l-2 border-transparent hover:border-gold"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-navy-100 flex flex-col gap-3">
              <a 
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-navy-800 bg-navy-50 rounded-lg hover:bg-navy-100 transition-colors"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Call Dr. V. Bhagya Raju: +91 99853 27001</span>
              </a>

              <Button
                variant="gold"
                size="md"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookConsultation();
                }}
                className="w-full justify-center"
                rightIcon={<CalendarCheck className="w-4 h-4 ml-1" />}
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </header>
      {/* Spacer so content doesn't jump under sticky header */}
      <div className={isScrolled ? 'h-16' : 'h-20'} />
    </>
  );
};
