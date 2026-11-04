import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, CheckCircle2, ArrowUpRight, Send } from 'lucide-react';
import { Property, EnquirySubmission } from '../types';

interface ContactSectionProps {
  properties: Property[];
  prefilledProperty?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  properties,
  prefilledProperty = '',
}) => {
  const [formData, setFormData] = useState<EnquirySubmission>({
    fullName: '',
    phone: '',
    email: '',
    propertyInterest: prefilledProperty || 'General Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquirySubmission, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedRef, setSubmittedRef] = useState('');

  const validate = () => {
    const errs: Partial<Record<keyof EnquirySubmission, string>> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message or details regarding your search';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const refCode = `TAR-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(refCode);
      setIsSubmitted(true);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Tarex Estates, my name is ${formData.fullName || 'a client'}. I would like to inquire about ${formData.propertyInterest || 'your architectural properties'}.`
  );

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F7F5EF] relative overflow-hidden">
      {/* Curved Forest Green Decorative Shape */}
      <div className="absolute top-0 right-0 w-80 h-80 sm:w-96 sm:h-96 rounded-bl-[160px] bg-[#183B32] -z-0 opacity-95 hidden md:block" />
      <div className="absolute top-12 right-12 w-32 h-32 rounded-full border border-[#C6A66B]/30 hidden md:block pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Contact Information */}
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C6A66B] block mb-2">
              Private Inquiries
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#183B32] font-normal tracking-tight leading-tight mb-6">
              Let's find your next home.
            </h2>
            <p className="text-base text-[#252A27]/75 font-normal leading-relaxed mb-10">
              Whether you are acquiring a coastal sanctuary or seeking a bespoke architectural residence, our private advisors guide you with absolute discretion.
            </p>

            {/* Direct Connect Options */}
            <div className="space-y-6 pt-4 border-t border-[#183B32]/10">
              <a
                href={`https://wa.me/33612345678?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#E5EBE1] hover:bg-[#183B32] hover:text-[#F7F5EF] text-[#183B32] transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#183B32] shadow-xs group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5 text-[#183B32]" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider block">
                    Direct WhatsApp
                  </span>
                  <span className="text-sm font-medium opacity-85">
                    Connect directly with our team
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 ml-auto text-[#C6A66B]" />
              </a>

              <a
                href="tel:+33493000000"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white hover:bg-[#E5EBE1] text-[#183B32] border border-[#183B32]/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-[#E5EBE1] flex items-center justify-center text-[#183B32] group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider block text-[#C6A66B]">
                    Private Concierge
                  </span>
                  <span className="text-sm font-medium text-[#252A27]">
                    +33 (0)4 93 00 00 00
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 ml-auto opacity-40 group-hover:opacity-100" />
              </a>

              <a
                href="mailto:curator@tarexestates.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white hover:bg-[#E5EBE1] text-[#183B32] border border-[#183B32]/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-[#E5EBE1] flex items-center justify-center text-[#183B32] group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider block text-[#C6A66B]">
                    Email Advisory
                  </span>
                  <span className="text-sm font-medium text-[#252A27]">
                    advisory@tarexestates.com
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 ml-auto opacity-40 group-hover:opacity-100" />
              </a>
            </div>
          </div>

          {/* Right Column: Functional Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[#183B32]/10">
              {isSubmitted ? (
                <div className="py-10 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#E5EBE1] text-[#183B32] flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-[#183B32]" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A66B] mb-2">
                    Enquiry Logged
                  </span>
                  <h3 className="font-editorial text-3xl text-[#183B32] mb-3">
                    Thank you, {formData.fullName}.
                  </h3>
                  <p className="text-sm text-[#252A27]/75 max-w-md mx-auto mb-4">
                    Your enquiry for <span className="font-semibold text-[#183B32]">{formData.propertyInterest}</span> has been logged. A Tarex private partner will contact you shortly via email or phone.
                  </p>
                  <div className="bg-[#F7F5EF] py-2 px-4 rounded-full text-xs text-[#252A27]/70 font-mono mb-8 tabular-nums">
                    Reference ID: {submittedRef}
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          propertyInterest: 'General Inquiry',
                          message: '',
                        });
                      }}
                      className="px-6 py-3 rounded-full border border-[#183B32]/30 text-xs font-semibold uppercase tracking-wider text-[#183B32] hover:bg-[#E5EBE1] cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                    <a
                      href={`https://wa.me/33612345678?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-[#183B32] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#183B32]/90 flex items-center gap-2 cursor-pointer"
                    >
                      <span>Chat on WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C6A66B]" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#183B32] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Lady Jacqueline Moreau"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#252A27] bg-[#F7F5EF]/60 focus:bg-white focus:outline-none transition-all ${
                          errors.fullName
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-[#183B32]/15 focus:border-[#183B32]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#183B32] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+33 6 12 34 56 78"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#252A27] bg-[#F7F5EF]/60 focus:bg-white focus:outline-none transition-all ${
                          errors.phone
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-[#183B32]/15 focus:border-[#183B32]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#183B32] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="client@residence.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#252A27] bg-[#F7F5EF]/60 focus:bg-white focus:outline-none transition-all ${
                          errors.email
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-[#183B32]/15 focus:border-[#183B32]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Interested Property */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#183B32] mb-1.5">
                        Interested Property
                      </label>
                      <select
                        value={formData.propertyInterest}
                        onChange={(e) =>
                          setFormData({ ...formData, propertyInterest: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-[#183B32]/15 bg-[#F7F5EF]/60 text-sm text-[#252A27] focus:bg-white focus:outline-none focus:border-[#183B32] transition-all cursor-pointer"
                      >
                        <option value="General Inquiry">General Portfolio Advisory</option>
                        {properties.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name} — {p.location}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#183B32] mb-1.5">
                      Your Message or Architectural Preferences *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Please let us know your timeframe, preferred architectural style, or if you would like to arrange a private viewing."
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#252A27] bg-[#F7F5EF]/60 focus:bg-white focus:outline-none transition-all ${
                        errors.message
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-[#183B32]/15 focus:border-[#183B32]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-600 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#183B32] text-[#F7F5EF] text-xs font-semibold uppercase tracking-wider hover:bg-[#183B32]/90 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Private Enquiry</span>
                    <Send className="w-3.5 h-3.5 text-[#C6A66B]" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
