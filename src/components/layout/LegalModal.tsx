import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | null;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-navy-100 p-6 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-charcoal-muted hover:text-navy-950 hover:bg-navy-50 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-navy-100">
          <div className="w-10 h-10 rounded-lg bg-navy-50 border border-navy-100 flex items-center justify-center text-royal">
            {type === 'privacy' ? <ShieldCheck className="w-5 h-5 text-gold" /> : <FileText className="w-5 h-5 text-gold" />}
          </div>
          <div>
            <h3 id="legal-modal-title" className="text-xl font-serif font-bold text-navy-950">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms of Use & Regulatory Advisory'}
            </h3>
            <p className="text-xs text-charcoal-muted">SH Consultancy Services — Effective 2026</p>
          </div>
        </div>

        <div className="text-sm leading-relaxed text-charcoal-muted space-y-4">
          {type === 'privacy' ? (
            <>
              <p>
                At <strong>SH Consultancy Services</strong>, we value the trust and confidence placed in us by higher education institutions, management trusts, universities, and academic professionals across India.
              </p>
              <h4 className="text-base font-semibold text-navy-900 pt-2">1. Information We Collect</h4>
              <p>
                When you submit an inquiry or schedule a consultation via our website, we collect your name, institutional affiliation, official email address, mobile number, and specific consulting interests. We do not sell, rent, or trade institutional data to third parties.
              </p>
              <h4 className="text-base font-semibold text-navy-900 pt-2">2. Use of Institutional Information</h4>
              <p>
                All institutional data, documentation samples, and contact details are utilized strictly to assess your institutional requirements, prepare strategic advisory proposals, and facilitate communications with Dr. V. Bhagya Raju.
              </p>
              <h4 className="text-base font-semibold text-navy-900 pt-2">3. Confidentiality of Academic Records</h4>
              <p>
                We adhere to strict non-disclosure standards concerning institutional metrics, NIRF data, NAAC SSR drafts, NBA SAR files, and strategic university establishment blueprints.
              </p>
              <h4 className="text-base font-semibold text-navy-900 pt-2">4. Inquiries & Data Rights</h4>
              <p>
                For questions regarding your data or to request removal from our advisory communications, please contact us at <a href="mailto:drvbhagyaraju@shconsultancyservices.in" className="text-royal underline font-medium">drvbhagyaraju@shconsultancyservices.in</a>.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to the website of <strong>SH Consultancy Services</strong>, led by Dr. V. Bhagya Raju. By accessing or using this website, you agree to these Terms of Use.
              </p>
              <h4 className="text-base font-semibold text-navy-900 pt-2">1. Scope of Advisory Services</h4>
              <p>
                SH Consultancy Services provides strategic guidance, process planning, readiness audits, and documentation support for institutional accreditation (NBA, NAAC), national rankings (NIRF), and university establishment (Deemed & Private universities).
              </p>
              <h4 className="text-base font-semibold text-navy-900 pt-2">2. Regulatory & Legal Disclaimer</h4>
              <p className="p-3 bg-navy-50 rounded-lg border border-navy-100 text-navy-900 font-medium text-xs">
                Important: Consultancy services provide advisory and preparation support. Accreditation, ranking, approval, and university establishment decisions remain strictly subject to the competent statutory authorities (including NBA, NAAC, UGC, AICTE, State Governments, and Ministry of Education) and applicable regulatory acts. SH Consultancy Services does not guarantee approvals or statutory rankings.
              </p>
              <h4 className="text-base font-semibold text-navy-900 pt-2">3. Intellectual Property</h4>
              <p>
                All advisory frameworks, methodologies, website text, branding, and content are the intellectual property of SH Consultancy Services. Reproduction without written consent is prohibited.
              </p>
              <h4 className="text-base font-semibold text-navy-900 pt-2">4. Jurisdiction</h4>
              <p>
                Any legal inquiries arising out of website usage or consulting engagements are subject to the exclusive jurisdiction of the competent courts in Hyderabad / Ranga Reddy District, Telangana, India.
              </p>
            </>
          )}
        </div>

        <div className="mt-8 pt-4 border-t border-navy-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-navy-900 text-white rounded-lg text-sm font-semibold hover:bg-navy-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
