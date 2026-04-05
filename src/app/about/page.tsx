import { Metadata } from 'next';
import Link from 'next/link';
import { Award, Handshake, Receipt, CheckCircle, Hospital, Hotel, GraduationCap, Building2, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Kishkindha Industry | Your Trusted Institutional Supply Partner',
  description:
    'Learn about Kishkindha Industry - Delhi-based B2B institutional supply company serving hospitals, hotels, universities, government offices, and corporate houses across India with comprehensive facility management supplies.',
};

const values = [
  {
    icon: Award,
    title: 'Uncompromising Quality',
    description:
      'Every product is sourced from reputed manufacturers and undergoes quality checks before dispatch. No compromises, ever.',
  },
  {
    icon: Handshake,
    title: 'Business Partnership',
    description:
      "We don't just supply products — we build lasting partnerships. Your operational efficiency is our success.",
  },
  {
    icon: Receipt,
    title: 'Transparent Pricing',
    description:
      'Clear, competitive pricing with proper GST invoicing. No hidden charges, no surprises — just honest business.',
  },
];

const expertise = [
  {
    title: 'Bulk Procurement',
    description: 'Direct sourcing from manufacturers for the best prices and consistent supply',
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous quality checks before every dispatch to ensure product consistency',
  },
  {
    title: 'Pan-India Logistics',
    description: 'Efficient delivery network ensuring timely supply across the country',
  },
  {
    title: 'Dedicated Support',
    description: 'Assigned account managers for every client, ensuring personalized attention',
  },
];

const industries = [
  {
    icon: Hospital,
    title: 'Healthcare',
    description: 'Hospitals, clinics, and medical facilities requiring hygiene and healthcare supplies.',
  },
  {
    icon: Hotel,
    title: 'Hospitality',
    description: 'Hotels, resorts, and service apartments needing housekeeping and cleaning solutions.',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Universities, colleges, and schools requiring stationery and facility maintenance products.',
  },
  {
    icon: Building2,
    title: 'Government',
    description: 'Government offices and public sector undertakings with institutional supply needs.',
  },
  {
    icon: Briefcase,
    title: 'Corporate',
    description: 'Corporate houses and office complexes needing pantry, washroom, and maintenance supplies.',
  },
];

const keyClients = [
  { name: 'GLA University', location: 'Mathura' },
  { name: 'Umkal Healthcare', location: 'Gurgaon' },
  { name: 'Park Medi World', location: 'Panchkula' },
  { name: 'Metro Hospital', location: 'Gurgaon' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-[#1B4332]">
        <div className="container relative px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            The Kishkindha Story
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Building India&apos;s Most Trusted Institutional Supply Network
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
                Kishkindha Industry was founded with a clear mission — to become the most reliable institutional supply partner for organizations across India. We observed that businesses struggle to find a single, dependable source for the wide range of facility management products they need daily.
              </p>
              <p className="leading-relaxed font-semibold text-[#1B4332]">
                We set out to change that.
              </p>
              <p className="leading-relaxed">
                Based in Delhi, we serve hospitals, hotels, universities, government offices, and corporate houses with a comprehensive range of supplies — from cleaning chemicals and housekeeping products to washroom hygiene, waste management, healthcare supplies, and office stationery.
              </p>
              <p className="leading-relaxed">
                Our team combines deep expertise in procurement, quality control, and logistics to ensure every order is fulfilled on time and meets our exacting standards. We work directly with reputed manufacturers, cutting out middlemen to deliver the best products at competitive prices.
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
              Our team brings specialized expertise across the institutional supply chain
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {expertise.map((item) => (
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

      {/* Industries We Serve Section */}
      <section className="section-padding bg-white">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] mb-4">
              Industries We Serve
            </h2>
            <p className="text-[#6B6B6B] max-w-2xl mx-auto">
              Trusted by institutions across diverse sectors for their facility management needs
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="bg-[#FAF8F5] rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300 border border-[#E5E5E5]"
              >
                <div className="w-14 h-14 bg-[#1B4332]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-7 h-7 text-[#1B4332]" />
                </div>
                <h3 className="font-semibold text-[#1B4332] mb-2">
                  {industry.title}
                </h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Clients Section */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] mb-4">
              Key Clients
            </h2>
            <p className="text-[#6B6B6B] max-w-2xl mx-auto">
              Trusted by leading institutions across India
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {keyClients.map((client) => (
              <div
                key={client.name}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-[#E5E5E5]"
              >
                <h3 className="font-semibold text-[#1B4332] mb-1">
                  {client.name}
                </h3>
                <p className="text-[#6B6B6B] text-sm">
                  {client.location}
                </p>
              </div>
            ))}
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
            Partner with Kishkindha Industry for reliable, quality institutional supplies
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
