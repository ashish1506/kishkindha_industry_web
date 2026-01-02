import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Truck, Package, Tag, Leaf, Headphones, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Why Choose Kishkindha Foods | Quality, Reliability, Value',
  description:
    'Discover why businesses across India trust Kishkindha Foods for their food supply needs. Quality assurance, reliable delivery, competitive pricing, 100% vegetarian.',
};

const differentiators = [
  {
    icon: ShieldCheck,
    title: 'Quality You Can Trust',
    description:
      'Every product that leaves our facility has passed through rigorous quality checks. We maintain strict standards because we understand that your reputation depends on the ingredients you use.',
    points: [
      'Sourced from verified suppliers',
      'Quality testing at multiple stages',
      'Consistent product standards',
    ],
  },
  {
    icon: Truck,
    title: 'Reliable Supply Chain',
    description:
      "Running out of stock is not an option for your business. Our robust supply chain and inventory management ensure you always have what you need, when you need it.",
    points: [
      'Pan-India delivery network',
      'Consistent availability',
      'On-time delivery commitment',
    ],
  },
  {
    icon: Package,
    title: 'Bulk Order Specialists',
    description:
      "We understand bulk. From packaging to logistics, our entire operation is optimized for large-scale orders. Whether you need a single category or a complete range, we've got you covered.",
    points: [
      'Optimized for large orders',
      'Flexible packaging options',
      'Streamlined ordering process',
    ],
  },
  {
    icon: Tag,
    title: 'Competitive Pricing',
    description:
      "Quality doesn't have to be expensive. Our direct sourcing and efficient operations allow us to offer premium products at competitive prices.",
    points: [
      'Direct sourcing advantages',
      'Volume-based pricing',
      'Transparent quotations',
    ],
  },
  {
    icon: Leaf,
    title: '100% Pure Vegetarian',
    description:
      'Complete peace of mind. Our entire operation — from sourcing to storage to delivery — maintains strict vegetarian standards.',
    points: [
      'No non-vegetarian products handled',
      'Dedicated vegetarian supply chain',
      'Suitable for all vegetarian establishments',
    ],
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description:
      "You're not just another order number. Our team provides personalized attention to every business partner.",
    points: [
      'Single point of contact',
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
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero/spices-hero.jpg"
            alt="Quality background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Why Businesses Choose Kishkindha Foods
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Your success is built on reliable partnerships
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
              Six reasons why businesses across India trust us as their preferred food supply partner
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
              <Leaf className="w-6 h-6 text-[#D4A847]" />
              <span className="text-white font-medium">100% Pure Vegetarian</span>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="w-6 h-6 text-[#D4A847]" />
              <span className="text-white font-medium">Pan India Delivery</span>
            </div>
            <div className="flex items-center gap-3">
              <Package className="w-6 h-6 text-[#D4A847]" />
              <span className="text-white font-medium">Bulk Order Specialists</span>
            </div>
            <div className="flex items-center gap-3">
              <Headphones className="w-6 h-6 text-[#D4A847]" />
              <span className="text-white font-medium">24hr Response Time</span>
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
            Join hundreds of businesses that trust us for their food supply needs
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
