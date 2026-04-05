import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Truck, Package, Tag, FileText, Headphones, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Why Choose Kishkindha Industry | Quality, Reliability, Value',
  description:
    'Discover why institutions across India trust Kishkindha Industry for their facility management supplies. Quality assured products, reliable supply chain, competitive pricing, GST invoiced.',
};

const differentiators = [
  {
    icon: ShieldCheck,
    title: 'Quality Assured Products',
    description:
      'Every product we supply is sourced from reputed manufacturers and undergoes quality checks before dispatch. We ensure consistency across batches so your operations never miss a beat.',
    points: [
      'Sourced from reputed manufacturers',
      'Quality checks before dispatch',
      'Consistent across batches',
    ],
  },
  {
    icon: Truck,
    title: 'Reliable Supply Chain',
    description:
      'Running out of essential supplies is not an option for your facility. Our robust supply chain and logistics network ensure timely delivery across India with full order tracking.',
    points: [
      'Pan-India delivery network',
      'Timely dispatch commitment',
      'Order tracking available',
    ],
  },
  {
    icon: Package,
    title: 'Bulk Order Specialists',
    description:
      'Our entire operation is optimized for institutional scale. From flexible minimum order quantities to streamlined ordering processes, we make bulk procurement effortless.',
    points: [
      'Optimized for institutional scale',
      'Flexible MOQs',
      'Streamlined ordering process',
    ],
  },
  {
    icon: Tag,
    title: 'Competitive Pricing',
    description:
      'Our direct procurement from manufacturers and efficient operations allow us to pass on bulk pricing advantages to you. Transparent pricing with no hidden charges.',
    points: [
      'Bulk procurement advantages',
      'Transparent pricing',
      'No hidden charges',
    ],
  },
  {
    icon: FileText,
    title: 'GST Invoiced',
    description:
      'Proper GST invoicing on every order. We also offer credit facility for regular customers and support multiple payment options to suit your procurement workflow.',
    points: [
      'Proper GST invoicing',
      'Credit facility for regular customers',
      'Multiple payment options',
    ],
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description:
      "You're not just another order number. Every client gets a dedicated account manager who ensures quick response times and proactive communication.",
    points: [
      'Dedicated account managers',
      'Quick response times',
      'Proactive communication',
    ],
  },
];

export default function WhyUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-[#1B4332]">
        <div className="container relative px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Why Institutions Choose Kishkindha Industry
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Your trusted partner for institutional facility management supplies
          </p>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] mb-4">
              The Kishkindha Advantage
            </h2>
            <p className="text-[#6B6B6B] max-w-2xl mx-auto">
              Six reasons why institutions across India trust us as their preferred supply partner
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {differentiators.map((item, index) => (
              <div
                key={item.title}
                className={`bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#E5E5E5] ${
                  index === differentiators.length - 1 && differentiators.length % 2 !== 0
                    ? 'md:col-span-2 md:max-w-2xl md:mx-auto'
                    : ''
                }`}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-[#D4A847]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-[#D4A847]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#1B4332] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#6B6B6B] mb-5 leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="space-y-2">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#1B4332] flex-shrink-0 mt-0.5" />
                          <span className="text-[#2D2D2D] text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-[#1B4332] py-12 md:py-16">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-16">
            <div className="flex items-center gap-3">
              <Package className="w-6 h-6 text-[#D4A847]" />
              <span className="text-white font-medium">190+ Products</span>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="w-6 h-6 text-[#D4A847]" />
              <span className="text-white font-medium">Pan India Delivery</span>
            </div>
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-[#D4A847]" />
              <span className="text-white font-medium">GST Invoiced</span>
            </div>
            <div className="flex items-center gap-3">
              <Headphones className="w-6 h-6 text-[#D4A847]" />
              <span className="text-white font-medium">24hr Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2D6A4F] py-16 md:py-20">
        <div className="container px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience the Kishkindha Difference?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join leading institutions that trust us for their facility management supply needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 min-h-[48px] px-8 py-3 bg-[#D4A847] text-white hover:bg-[#C49A3F] text-base"
            >
              Get in Touch
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 min-h-[48px] px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1B4332] text-base"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
