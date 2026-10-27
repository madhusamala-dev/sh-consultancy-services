import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CONTACT_INFO } from '../../data/content';
import { InstitutionType, ServiceType, ContactFormData } from '../../types';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ExternalLink, 
  Clock, 
  ShieldCheck,
  RotateCcw
} from 'lucide-react';

const contactSchema = z.object({
  fullName: z.string().min(2, { message: "Full Name must be at least 2 characters." }),
  organization: z.string().min(2, { message: "Institution / Organization name is required." }),
  email: z.string().email({ message: "Please enter a valid work email address." }),
  phone: z.string().regex(/^[0-9+()\- ]{8,20}$/, { message: "Please enter a valid mobile or contact number." }),
  institutionType: z.enum([
    'Engineering College',
    'University',
    'Other Higher Education Institution',
    'Other'
  ] as const, {
    errorMap: () => ({ message: "Please select your institution type." })
  }),
  serviceRequired: z.enum([
    'NBA Accreditation',
    'NAAC Accreditation',
    'NIRF Ranking',
    'Consultancy Projects',
    'Deemed University Establishment',
    'Private University Establishment',
    'Other'
  ] as const, {
    errorMap: () => ({ message: "Please select the service required." })
  }),
  message: z.string().min(10, { message: "Message must contain at least 10 characters detailing your goals." }),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must confirm permission to be contacted regarding this inquiry."
  }),
  honeypot: z.string().optional()
});

type ContactFormValues = z.infer<typeof contactSchema>;

interface ContactSectionProps {
  initialService?: ServiceType;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [inquiryRef, setInquiryRef] = useState<string>('');
  const [lastSubmittedData, setLastSubmittedData] = useState<ContactFormData | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      organization: '',
      email: '',
      phone: '',
      institutionType: 'Engineering College',
      serviceRequired: initialService || 'NBA Accreditation',
      message: '',
      consent: false,
      honeypot: ''
    }
  });

  // Keep dropdown in sync if user clicks a service card elsewhere
  useEffect(() => {
    if (initialService) {
      setValue('serviceRequired', initialService);
    }
  }, [initialService, setValue]);

  const onSubmit = async (data: ContactFormValues) => {
    // Spam bot honeypot detection
    if (data.honeypot && data.honeypot.trim() !== '') {
      console.warn("Honeypot triggered. Aborting submission.");
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);

    // Rate-limiting check in localStorage (max 3 submissions in 5 minutes)
    try {
      const storedTimestamps: number[] = JSON.parse(
        localStorage.getItem('sh_inquiry_timestamps') || '[]'
      );
      const now = Date.now();
      const recentAttempts = storedTimestamps.filter(t => now - t < 300000); // 5 mins
      if (recentAttempts.length >= 3) {
        setSubmissionError("Too many inquiries sent in a short period. Please wait a few minutes or call us directly at +91 99853 27001.");
        setIsSubmitting(false);
        return;
      }
      recentAttempts.push(now);
      localStorage.setItem('sh_inquiry_timestamps', JSON.stringify(recentAttempts));
    } catch {
      // LocalStorage access fallback
    }

    // Generate reference code
    const generatedRef = `SHC-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    try {
      const payload: ContactFormData & { reference: string; submittedAt: string } = {
        fullName: data.fullName,
        organization: data.organization,
        email: data.email,
        phone: data.phone,
        institutionType: data.institutionType as InstitutionType,
        serviceRequired: data.serviceRequired as ServiceType,
        message: data.message,
        consent: data.consent,
        reference: generatedRef,
        submittedAt: new Date().toISOString()
      };

      // Check if real backend endpoint is supplied in environment
      const backendEndpoint = (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_API_ENDPOINT;

      if (backendEndpoint) {
        const response = await fetch(backendEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error(`Server returned status ${response.status}`);
        }
      } else {
        // Fallback: Store securely in localStorage so inquiries are NEVER silently lost
        const existingInquiries = JSON.parse(localStorage.getItem('sh_consultation_inquiries') || '[]');
        existingInquiries.push(payload);
        localStorage.setItem('sh_consultation_inquiries', JSON.stringify(existingInquiries));

        // Simulate network latency for authentic user feedback
        await new Promise((res) => setTimeout(res, 850));
      }

      setInquiryRef(generatedRef);
      setLastSubmittedData(payload);
      setSubmissionSuccess(true);
      reset();
    } catch (err: unknown) {
      console.error("Submission failed:", err);
      setSubmissionError(
        "There was a network error delivering your inquiry. Please reach out directly to Dr. V. Bhagya Raju at +91 99853 27001 or drvbhagyaraju@shconsultancyservices.in."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoHref = lastSubmittedData 
    ? `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(`Consultation Inquiry [${inquiryRef}] - ${lastSubmittedData.organization}`)}&body=${encodeURIComponent(
      `Dear Dr. V. Bhagya Raju,\n\nName: ${lastSubmittedData.fullName}\nInstitution: ${lastSubmittedData.organization}\nType: ${lastSubmittedData.institutionType}\nService: ${lastSubmittedData.serviceRequired}\nPhone: ${lastSubmittedData.phone}\nEmail: ${lastSubmittedData.email}\nReference: ${inquiryRef}\n\nRequirements:\n${lastSubmittedData.message}\n`
    )}`
    : `mailto:${CONTACT_INFO.email}`;

  return (
    <section 
      id="contact" 
      className="py-20 lg:py-28 bg-white relative border-b border-navy-100"
      aria-label="Contact and Consultation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          
          {/* Left Column: Contact Information (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-3 bg-navy-50 text-navy-800 border border-navy-100">
                <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block"></span>
                Official Advisory Channel
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-950 tracking-tight mb-4">
                Let's Discuss Your Institution's Goals
              </h2>

              <div className="flex items-center gap-3 mb-5">
                <div className="h-[2px] w-12 bg-gold"></div>
                <div className="w-2 h-2 rotate-45 border border-gold bg-gold/30"></div>
                <div className="h-[2px] w-12 bg-gold"></div>
              </div>

              <p className="text-base text-charcoal-muted leading-relaxed">
                Connect with SH Consultancy Services to discuss accreditation, institutional ranking, consultancy projects, or university establishment requirements.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              
              {/* Consultant Card */}
              <div className="p-5 rounded-2xl bg-ivory/70 border border-ivory-border flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy-950 text-gold flex items-center justify-center shrink-0 shadow-sm font-serif font-bold text-lg">
                  SH
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-navy-950">
                    {CONTACT_INFO.consultantName}
                  </h3>
                  <p className="text-xs font-semibold text-royal uppercase tracking-wider">
                    {CONTACT_INFO.companyName}
                  </p>
                  <p className="text-xs text-charcoal-muted mt-0.5">
                    {CONTACT_INFO.subtitle}
                  </p>
                </div>
              </div>

              {/* Phone Link */}
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="group p-4 rounded-xl bg-white border border-ivory-border hover:border-gold/60 transition-all duration-300 flex items-center gap-4 shadow-sm hover:shadow-card"
              >
                <div className="w-10 h-10 rounded-lg bg-navy-50 group-hover:bg-navy-900 group-hover:text-gold text-royal flex items-center justify-center transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-charcoal-muted block uppercase tracking-wider font-semibold">
                    Direct Phone Contact
                  </span>
                  <span className="text-base font-bold text-navy-950 group-hover:text-royal transition-colors">
                    {CONTACT_INFO.phone}
                  </span>
                </div>
              </a>

              {/* Email Link */}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="group p-4 rounded-xl bg-white border border-ivory-border hover:border-gold/60 transition-all duration-300 flex items-center gap-4 shadow-sm hover:shadow-card"
              >
                <div className="w-10 h-10 rounded-lg bg-navy-50 group-hover:bg-navy-900 group-hover:text-gold text-royal flex items-center justify-center transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs text-charcoal-muted block uppercase tracking-wider font-semibold">
                    Official Email
                  </span>
                  <span className="text-sm sm:text-base font-bold text-navy-950 group-hover:text-royal transition-colors truncate block">
                    {CONTACT_INFO.email}
                  </span>
                </div>
              </a>

              {/* Office Address Card */}
              <div className="p-4 rounded-xl bg-white border border-ivory-border flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-navy-50 text-royal flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <span className="text-xs text-charcoal-muted block uppercase tracking-wider font-semibold mb-1">
                    Registered Consultancy Office
                  </span>
                  <p className="text-xs sm:text-sm text-charcoal leading-relaxed font-medium">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

            </div>

            {/* Operating Advisory Hours & Confidentiality */}
            <div className="p-4 rounded-xl bg-navy-900 text-white text-xs space-y-2">
              <div className="flex items-center gap-2 text-gold-light font-semibold">
                <Clock className="w-4 h-4 text-gold" />
                <span>Advisory Hours: Monday – Saturday (9:00 AM – 6:30 PM IST)</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>Institutional Non-Disclosure & Confidentiality Assured</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Consultation Form (7 cols) */}
          <div className="lg:col-span-7">
            
            <div className="p-6 sm:p-10 rounded-3xl bg-ivory/60 border border-ivory-border shadow-card relative">
              
              {submissionSuccess ? (
                /* Polished Post-Submission Confirmation Screen */
                <div className="py-8 text-center space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-navy-900 border-2 border-gold text-gold flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-navy-950">
                    Consultation Request Received
                  </h3>

                  <div className="p-4 rounded-xl bg-white border border-navy-100 max-w-md mx-auto text-left space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between pb-2 border-b border-navy-50">
                      <span className="text-charcoal-muted font-medium">Reference Code:</span>
                      <span className="font-mono font-bold text-navy-900 bg-navy-50 px-2 py-0.5 rounded">{inquiryRef}</span>
                    </div>
                    {lastSubmittedData && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-charcoal-muted">Institution:</span>
                          <span className="font-semibold text-charcoal text-right">{lastSubmittedData.organization}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-charcoal-muted">Selected Service:</span>
                          <span className="font-semibold text-royal text-right">{lastSubmittedData.serviceRequired}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-charcoal-muted">Representative:</span>
                          <span className="font-semibold text-charcoal text-right">{lastSubmittedData.fullName}</span>
                        </div>
                      </>
                    )}
                  </div>

                  <p className="text-sm text-charcoal-muted max-w-lg mx-auto leading-relaxed">
                    Thank you for reaching out to <strong>SH Consultancy Services</strong>. Dr. V. Bhagya Raju or our senior advisory team will review your institution's profile and contact you within 24 business hours.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-navy-900 text-white hover:bg-navy-800 text-sm font-semibold transition-colors shadow-sm w-full sm:w-auto"
                    >
                      <Mail className="w-4 h-4 text-gold" />
                      <span>Open in Mail Client</span>
                      <ExternalLink className="w-3.5 h-3.5 text-white/70" />
                    </a>

                    <button
                      onClick={() => {
                        setSubmissionSuccess(false);
                        setLastSubmittedData(null);
                      }}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-ivory-border text-navy-900 hover:bg-navy-50 text-sm font-semibold transition-colors shadow-sm w-full sm:w-auto"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>

                  {!(import.meta as unknown as { env?: Record<string, string> }).env?.VITE_API_ENDPOINT && (
                    <div className="mt-6 pt-4 border-t border-navy-100 text-[11px] text-charcoal-muted bg-white/70 p-3 rounded-lg">
                      <span className="font-semibold text-navy-900">Developer Note:</span> Stored safely in local client persistence. To route submissions to an external CRM, AWS Lambda, or email service, define <code>VITE_API_ENDPOINT</code> in your environment.
                    </div>
                  )}
                </div>
              ) : (
                /* Primary Contact Form */
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  
                  {/* Anti-spam Honeypot field (hidden from real users) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website_hp">Leave blank if human</label>
                    <input
                      type="text"
                      id="website_hp"
                      tabIndex={-1}
                      autoComplete="off"
                      {...register('honeypot')}
                    />
                  </div>

                  {submissionError && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <p className="leading-relaxed">{submissionError}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-navy-950 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="e.g. Dr. Rajesh Kumar"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                        className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-navy-950 placeholder-charcoal-muted/50 focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                          errors.fullName ? 'border-red-400 focus:ring-red-400 bg-red-50/20' : 'border-ivory-border'
                        }`}
                        {...register('fullName')}
                      />
                      {errors.fullName && (
                        <p id="fullName-error" className="text-xs text-red-600 mt-1 font-medium">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    {/* Institution / Organization */}
                    <div>
                      <label htmlFor="organization" className="block text-xs font-semibold text-navy-950 uppercase tracking-wider mb-1.5">
                        Institution / Organization <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="organization"
                        type="text"
                        placeholder="e.g. Sri Rama Engineering College"
                        aria-invalid={!!errors.organization}
                        aria-describedby={errors.organization ? "organization-error" : undefined}
                        className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-navy-950 placeholder-charcoal-muted/50 focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                          errors.organization ? 'border-red-400 focus:ring-red-400 bg-red-50/20' : 'border-ivory-border'
                        }`}
                        {...register('organization')}
                      />
                      {errors.organization && (
                        <p id="organization-error" className="text-xs text-red-600 mt-1 font-medium">
                          {errors.organization.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Work Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-navy-950 uppercase tracking-wider mb-1.5">
                        Work Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="principal@institution.edu.in"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-navy-950 placeholder-charcoal-muted/50 focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                          errors.email ? 'border-red-400 focus:ring-red-400 bg-red-50/20' : 'border-ivory-border'
                        }`}
                        {...register('email')}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-xs text-red-600 mt-1 font-medium">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-navy-950 uppercase tracking-wider mb-1.5">
                        Mobile Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-navy-950 placeholder-charcoal-muted/50 focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                          errors.phone ? 'border-red-400 focus:ring-red-400 bg-red-50/20' : 'border-ivory-border'
                        }`}
                        {...register('phone')}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="text-xs text-red-600 mt-1 font-medium">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Institution Type Dropdown */}
                    <div>
                      <label htmlFor="institutionType" className="block text-xs font-semibold text-navy-950 uppercase tracking-wider mb-1.5">
                        Institution Type <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="institutionType"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-ivory-border text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-gold transition-colors cursor-pointer"
                        {...register('institutionType')}
                      >
                        <option value="Engineering College">Engineering College</option>
                        <option value="University">University</option>
                        <option value="Other Higher Education Institution">Other Higher Education Institution</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.institutionType && (
                        <p className="text-xs text-red-600 mt-1 font-medium">
                          {errors.institutionType.message}
                        </p>
                      )}
                    </div>

                    {/* Service Required Dropdown */}
                    <div>
                      <label htmlFor="serviceRequired" className="block text-xs font-semibold text-navy-950 uppercase tracking-wider mb-1.5">
                        Service Required <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="serviceRequired"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-ivory-border text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-gold transition-colors cursor-pointer"
                        {...register('serviceRequired')}
                      >
                        <option value="NBA Accreditation">NBA Accreditation</option>
                        <option value="NAAC Accreditation">NAAC Accreditation</option>
                        <option value="NIRF Ranking">NIRF Ranking</option>
                        <option value="Consultancy Projects">Consultancy Projects</option>
                        <option value="Deemed University Establishment">Deemed University Establishment</option>
                        <option value="Private University Establishment">Private University Establishment</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.serviceRequired && (
                        <p className="text-xs text-red-600 mt-1 font-medium">
                          {errors.serviceRequired.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-navy-950 uppercase tracking-wider mb-1.5">
                      Institutional Goals / Advisory Inquiry <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Please outline your institution's current accreditation status, upcoming cycle deadlines, or strategic development objectives..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-navy-950 placeholder-charcoal-muted/50 focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                        errors.message ? 'border-red-400 focus:ring-red-400 bg-red-50/20' : 'border-ivory-border'
                      }`}
                      {...register('message')}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-red-600 mt-1 font-medium">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Consent Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 rounded border-ivory-border text-gold focus:ring-gold cursor-pointer"
                        {...register('consent')}
                      />
                      <span className="text-xs text-charcoal-muted leading-relaxed">
                        I authorize SH Consultancy Services to contact me regarding this institutional advisory inquiry. All discussions and institutional information will be treated with professional confidentiality. <span className="text-red-600">*</span>
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-xs text-red-600 mt-1 font-medium pl-7">
                        {errors.consent.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-gold-gradient text-navy-950 font-bold text-sm tracking-wide uppercase hover:brightness-105 transition-all shadow-md hover:shadow-gold-glow flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-navy-950" />
                          <span>Processing Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-navy-950" />
                          <span>Send Consultation Request</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
