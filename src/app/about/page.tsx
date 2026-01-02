import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Handshake, Leaf, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Kishkindha Foods | Your Trusted Food Supply Partner',
  description:
    'Learn about Kishkindha Foods - Delhi-based B2B food supplier serving restaurants, hotels, caterers, and food manufacturers across India with premium quality products.',
};

const values = [
  {
    icon: Award,
    title: 'Uncompromising Quality',
    description:
      'We never cut corners. Every product is sourced from verified suppliers and undergoes quality checks before dispatch.',
  },
  {
    icon: Handshake,
    title: 'Business Partnership',
    description:
      "We don't just supply products — we build lasting partnerships. Your success is our success.",
  },
  {
    icon: Leaf,
    title: 'Pure & Vegetarian',
    description:
      '100% vegetarian operations. No compromise on purity and sanctity of food products.',
  },
];

const expertise = [
  {
    title: 'Sourcing Excellence',
    description: 'Direct relationships with farmers, mills, and processors across India',
  },
  {
    title: 'Quality Assurance',
    description: 'Systematic quality control at every stage',
  },
  {
    title: 'Logistics Mastery',
    description: 'Efficient pan-India distribution network',
  },
  {
    title: 'Customer Focus',
    description: 'Dedicated support for every business partner',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-[#1B4332]">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero/spices-hero.jpg"
            alt="About us background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            The Kishkindha Story
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Building India&apos;s Most Trusted B2B Food Supply Network
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-[#6B6B6B] space-y-6">
              <p className="leading-relaxed">
                Kishkindha Foods emerged from a simple observation — businesses across India struggle to find reliable, consistent sources for quality food supplies. Too often, they face inconsistent quality, unreliable deliveries, and opaque pricing.
              </p>
              <p className="leading-relaxed font-semibold text-[#1B4332]">
                We set out to change that.
              </p>
              <p className="leading-relaxed">
                Named after the legendary kingdom of abundance from Indian heritage, Kishkindha Foods is built on the foundation of trust, quality, and reliability. Our team combines decades of experience in food sourcing, supply chain management, and quality assurance to serve businesses of all sizes.
              </p>
              <p className="leading-relaxed">
                From our base in Delhi, we&apos;ve developed a pan-India network that ensures every order — whether it&apos;s premium basmati rice for a five-star hotel or bulk pulses for a food manufacturer — is delivered on time and meets our exacting standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-[#1B4332]">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="absolute -top-5 left-8">
                  <div className="w-14 h-14 bg-[#D4A847] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] mb-4 text-center">
              Our Expertise
            </h2>
            <p className="text-lg text-[#6B6B6B] text-center mb-10">
              Our team brings specialized expertise across the food supply chain
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {expertise.map((item, index) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#E5E5E5]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1B4332] rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1B4332] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[#6B6B6B] text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2D6A4F] py-16 md:py-20">
        <div className="container px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s Discuss How We Can Support Your Business
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Partner with Kishkindha Foods for reliable, quality food supplies
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 min-h-[48px] px-8 py-3 bg-[#D4A847] text-white hover:bg-[#C49A3F] text-base"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
