import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, Loader2, BellRing } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      setErrorMessage("Please enter a valid academic or professional email address.");
      return;
    }

    if (!consent) {
      setErrorMessage("Please confirm consent to receive institutional advisory updates.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Check for duplicate in localStorage
      const existingList: string[] = JSON.parse(
        localStorage.getItem('sh_newsletter_subscribers') || '[]'
      );

      const normalizedEmail = email.trim().toLowerCase();
      if (existingList.includes(normalizedEmail)) {
        setErrorMessage("This email is already subscribed to institutional updates.");
        setIsSubmitting(false);
        return;
      }

      // Check for real subscription endpoint in environment
      const newsletterEndpoint = (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_NEWSLETTER_ENDPOINT;

      if (newsletterEndpoint) {
        const res = await fetch(newsletterEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: normalizedEmail, consentedAt: new Date().toISOString() })
        });
        if (!res.ok) throw new Error("Subscription provider error");
      } else {
        // Save to persistent client store so subscriber list is maintained
        existingList.push(normalizedEmail);
        localStorage.setItem('sh_newsletter_subscribers', JSON.stringify(existingList));
        await new Promise((res) => setTimeout(res, 600));
      }

      setSuccess(true);
      setEmail('');
      setConsent(false);
    } catch (err) {
      console.error("Newsletter error:", err);
      setErrorMessage("Unable to process subscription right now. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      className="py-16 bg-ivory relative border-b border-ivory-border"
      aria-label="Newsletter Subscription"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle Decorative Crest Icon */}
        <div className="w-12 h-12 rounded-full bg-navy-900 border border-gold text-gold flex items-center justify-center mx-auto mb-4 shadow-sm">
          <BellRing className="w-5 h-5" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 mb-3 tracking-tight">
          Insights for Institutional Excellence
        </h2>

        {/* Supporting Text */}
        <p className="text-sm sm:text-base text-charcoal-muted max-w-2xl mx-auto mb-8 leading-relaxed">
          Stay informed about accreditation developments, institutional rankings, regulatory updates, and higher education advisory insights.
        </p>

        {success ? (
          <div className="p-6 rounded-2xl bg-white border border-gold/40 shadow-card max-w-lg mx-auto text-center space-y-3 animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-navy-50 text-royal flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7 text-gold" />
            </div>
            <h3 className="text-lg font-serif font-bold text-navy-950">
              Subscription Confirmed
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              Thank you for subscribing. You will receive periodic regulatory digests and institutional excellence briefs from SH Consultancy Services.
            </p>
            <p className="text-[11px] text-charcoal-muted/80">
              You can unsubscribe at any time via the link in our email communications.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="text-xs font-semibold text-royal hover:underline pt-2"
            >
              Subscribe another email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="max-w-xl mx-auto space-y-4 text-left">
            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-charcoal-muted">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your academic or work email"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-ivory-border text-sm text-navy-950 placeholder-charcoal-muted/60 focus:outline-none focus:ring-2 focus:ring-gold transition-colors shadow-sm"
                  aria-label="Email address for advisory insights newsletter"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-xl bg-gold-gradient text-navy-950 font-bold text-xs uppercase tracking-wider hover:brightness-105 transition-all shadow-md hover:shadow-gold-glow shrink-0 flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-navy-950" />
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <span>Subscribe</span>
                )}
              </button>
            </div>

            {/* Explicit Consent and Unsubscribe Notice */}
            <div className="pt-1">
              <label className="flex items-start gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-ivory-border text-gold focus:ring-gold cursor-pointer"
                />
                <span className="text-xs text-charcoal-muted leading-tight">
                  I consent to receive occasional academic advisory briefs and regulatory alerts. You may unsubscribe anytime at no cost.
                </span>
              </label>
            </div>

            {!(import.meta as unknown as { env?: Record<string, string> }).env?.VITE_NEWSLETTER_ENDPOINT && (
              <p className="text-[10px] text-center text-charcoal-muted/70 pt-2">
                Subscribers are stored locally. Configure <code>VITE_NEWSLETTER_ENDPOINT</code> for external email marketing sync (Mailchimp/SendGrid).
              </p>
            )}
          </form>
        )}

      </div>
    </section>
  );
};
