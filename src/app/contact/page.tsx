'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const businessTypes = [
  'Restaurant',
  'Hotel',
  'Caterer',
  'Food Manufacturer',
  'Retailer/Wholesaler',
  'Institutional',
  'Other',
];

const productCategories = [
  'Flours & Atta',
  'Pulses & Lentils',
  'Spices',
  'Dry Fruits',
  'Rice & Grains',
];

const monthlyRequirements = [
  'Less than 100 kg',
  '100-500 kg',
  '500 kg - 1 ton',
  '1-5 tons',
  'More than 5 tons',
];

interface FormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  city: string;
  businessType: string;
  productsInterested: string[];
  monthlyRequirement: string;
  message: string;
  honeypot: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    city: '',
    businessType: '',
    productsInterested: [],
    monthlyRequirement: '',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Check for product parameter in URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const product = params.get('product');
    if (product) {
      setFormData((prev) => ({
        ...prev,
        message: `I'm interested in: ${product}\n\n`,
      }));
    }
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[\d\s-]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!formData.businessType) {
      newErrors.businessType = 'Please select a business type';
    }

    if (formData.productsInterested.length === 0) {
      newErrors.productsInterested = 'Please select at least one product category';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          businessName: formData.businessName,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          businessType: formData.businessType,
          productsInterested: formData.productsInterested,
          monthlyRequirement: formData.monthlyRequirement,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        businessName: '',
        email: '',
        phone: '',
        city: '',
        businessType: '',
        productsInterested: [],
        monthlyRequirement: '',
        message: '',
        honeypot: '',
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleProductChange = (product: string) => {
    setFormData((prev) => ({
      ...prev,
      productsInterested: prev.productsInterested.includes(product)
        ? prev.productsInterested.filter((p) => p !== product)
        : [...prev.productsInterested, product],
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-[#1B4332]">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero/spices-hero.jpg"
            alt="Contact background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Get in touch for quotes, inquiries, or to discuss your requirements
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#1B4332] mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1B4332]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#1B4332]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2D2D2D] mb-1">Email</h3>
                    <a
                      href="mailto:support@kishkindhafoods.com"
                      className="text-[#6B6B6B] hover:text-[#1B4332] transition-colors"
                    >
                      support@kishkindhafoods.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1B4332]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#1B4332]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2D2D2D] mb-1">Phone</h3>
                    <a
                      href="tel:+917042272565"
                      className="text-[#6B6B6B] hover:text-[#1B4332] transition-colors"
                    >
                      +91 7042272565
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2D2D2D] mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/917042272565?text=Hi,%20I'm%20interested%20in%20Kishkindha%20Foods%20products.%20Please%20share%20more%20details."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6B6B6B] hover:text-[#25D366] transition-colors block mb-3"
                    >
                      +91 7042272565
                    </a>
                    <a
                      href="https://wa.me/917042272565?text=Hi,%20I'm%20interested%20in%20Kishkindha%20Foods%20products.%20Please%20share%20more%20details."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp text-sm py-2 px-4 inline-block"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1B4332]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#1B4332]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2D2D2D] mb-1">Location</h3>
                    <p className="text-[#6B6B6B]">Delhi, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1B4332]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#1B4332]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2D2D2D] mb-1">Business Hours</h3>
                    <p className="text-[#6B6B6B]">
                      Monday - Saturday: 9:00 AM - 7:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-[#1B4332] mb-6">
                  Request a Quote
                </h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-800">Thank you for your inquiry!</h4>
                      <p className="text-sm text-green-700">
                        We&apos;ve received your request and will get back to you within 24 business hours.
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-red-800">Oops! Something went wrong.</h4>
                      <p className="text-sm text-red-700">
                        Please try again or contact us directly at support@kishkindhafoods.com
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-[#2D2D2D] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`form-input ${errors.fullName ? 'border-red-500' : ''}`}
                        placeholder="Your full name"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="businessName" className="block text-sm font-medium text-[#2D2D2D] mb-2">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className={`form-input ${errors.businessName ? 'border-red-500' : ''}`}
                        placeholder="Your business name"
                      />
                      {errors.businessName && (
                        <p className="mt-1 text-sm text-red-600">{errors.businessName}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#2D2D2D] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#2D2D2D] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                        placeholder="+91 XXXXX XXXXX"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-[#2D2D2D] mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className={`form-input ${errors.city ? 'border-red-500' : ''}`}
                        placeholder="Your city"
                      />
                      {errors.city && (
                        <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="businessType" className="block text-sm font-medium text-[#2D2D2D] mb-2">
                        Business Type *
                      </label>
                      <select
                        id="businessType"
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className={`form-input ${errors.businessType ? 'border-red-500' : ''}`}
                      >
                        <option value="">Select business type</option>
                        {businessTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.businessType && (
                        <p className="mt-1 text-sm text-red-600">{errors.businessType}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2D2D2D] mb-3">
                      Products Interested In *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {productCategories.map((product) => (
                        <label
                          key={product}
                          className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all ${
                            formData.productsInterested.includes(product)
                              ? 'border-[#1B4332] bg-[#1B4332]/5'
                              : 'border-[#E5E5E5] hover:border-[#1B4332]/50'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.productsInterested.includes(product)}
                            onChange={() => handleProductChange(product)}
                            className="w-4 h-4 text-[#1B4332] rounded border-[#E5E5E5] focus:ring-[#1B4332]"
                          />
                          <span className="text-sm text-[#2D2D2D]">{product}</span>
                        </label>
                      ))}
                    </div>
                    {errors.productsInterested && (
                      <p className="mt-2 text-sm text-red-600">{errors.productsInterested}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="monthlyRequirement" className="block text-sm font-medium text-[#2D2D2D] mb-2">
                      Monthly Requirement
                    </label>
                    <select
                      id="monthlyRequirement"
                      value={formData.monthlyRequirement}
                      onChange={(e) => setFormData({ ...formData, monthlyRequirement: e.target.value })}
                      className="form-input"
                    >
                      <option value="">Select approximate requirement</option>
                      {monthlyRequirements.map((req) => (
                        <option key={req} value={req}>
                          {req}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#2D2D2D] mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input resize-none"
                      placeholder="Tell us more about your requirements..."
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary flex-1 md:flex-none disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        'Submit Inquiry'
                      )}
                    </button>
                  </div>

                  <p className="text-sm text-[#6B6B6B]">
                    Your information is secure with us. We&apos;ll respond within 24 business hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Strip */}
      <section className="bg-[#2D6A4F] py-10 md:py-14">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center md:text-left">
            <p className="text-lg text-white font-medium">
              Prefer WhatsApp? Chat with us directly!
            </p>
            <a
              href="https://wa.me/917042272565?text=Hi,%20I'm%20interested%20in%20Kishkindha%20Foods%20products.%20Please%20share%20more%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
