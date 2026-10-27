import { useState, useCallback } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { ConsultingApproach } from './components/sections/ConsultingApproach';
import { ContactSection } from './components/sections/ContactSection';
import { GoogleMapsSection } from './components/sections/GoogleMapsSection';
import { NewsletterSection } from './components/sections/NewsletterSection';
import { Footer } from './components/layout/Footer';
import { LegalModal } from './components/layout/LegalModal';
import { ServiceType } from './types';

export function App() {
  const [selectedService, setSelectedService] = useState<ServiceType>('NBA Accreditation');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToContact = useCallback(() => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const scrollToServices = useCallback(() => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleSelectService = useCallback((serviceKey: ServiceType) => {
    setSelectedService(serviceKey);
    scrollToContact();
  }, [scrollToContact]);

  return (
    <div className="min-h-screen bg-ivory text-charcoal flex flex-col font-sans selection:bg-gold selection:text-navy-950">
      
      {/* 3. Sticky Header and Navigation */}
      <Navbar onBookConsultation={scrollToContact} />

      <main className="flex-grow">
        {/* 4. Hero Section */}
        <Hero
          onScheduleConsultation={scrollToContact}
          onExploreServices={scrollToServices}
        />

        {/* 5. About the Consultant */}
        <About onDiscussRequirements={scrollToContact} />

        {/* 6. Our Services (6-card responsive grid) */}
        <Services onSelectService={handleSelectService} />

        {/* 7. Why Choose SH Consultancy Services? (Navy blue section) */}
        <WhyChooseUs />

        {/* 8. Our Consulting Approach (5-step process timeline) */}
        <ConsultingApproach />

        {/* 9. Contact and Consultation Form */}
        <ContactSection initialService={selectedService} />

        {/* 10. Google Maps Office Location */}
        <GoogleMapsSection />

        {/* 11. Newsletter Subscription */}
        <NewsletterSection />
      </main>

      {/* 12. Footer */}
      <Footer 
        onSelectService={handleSelectService}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Accessible Modals for Privacy Policy & Terms of Use */}
      <LegalModal
        isOpen={legalModalType !== null}
        onClose={() => setLegalModalType(null)}
        type={legalModalType}
      />

    </div>
  );
}

export default App;
