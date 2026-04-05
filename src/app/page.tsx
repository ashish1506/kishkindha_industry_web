import Link from 'next/link';
import {
  ArrowRight,
  Package,
  Truck,
  FileText,
  Clock,
  Award,
  Tag,
  Droplets,
  Brush,
  Trash2,
  SprayCan,
  HardHat,
  HeartPulse,
  UtensilsCrossed,
  PenLine,
  Building2,
  MessageCircle,
} from 'lucide-react';
import { categories } from '@/data/categories';
import { getProductCount } from '@/data/products';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Droplets,
  Brush,
  Trash2,
  SprayCan,
  HardHat,
  HeartPulse,
  UtensilsCrossed,
  PenLine,
};

const stats = [
  { icon: Package, value: '190+', label: 'Products' },
  { icon: Truck, value: 'Pan India', label: 'Delivery' },
  { icon: FileText, value: 'GST', label: 'Invoiced' },
  { icon: Clock, value: '24hr', label: 'Response Time' },
];

const promises = [
  {
    icon: Award,
    title: 'Quality Assured',
    description:
      'Every product is sourced from trusted manufacturers and undergoes strict quality checks before dispatch to your facility.',
  },
  {
    icon: Clock,
    title: 'Reliable Supply Chain',
    description:
      'Consistent stock availability and on-time deliveries so your operations never face downtime due to supply gaps.',
  },
  {
    icon: Tag,
    title: 'Competitive Bulk Pricing',
    description:
      'Institutional-scale procurement means better rates. We pass bulk advantages directly to you without compromising on quality.',
  },
];

const trustedClients = [
  'GLA University',
  'Umkal Healthcare',
  'Park Medi World',
  'Metro Hospital',
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#1B4332] to-[#2D6A4F]">
        <div className="container px-4 md:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Trusted Partner for Institutional Supplies
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Delivering quality housekeeping, stationery, hygiene, and facility supplies to hospitals, hotels, universities, and corporate houses across India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 min-h-[44px] px-7 py-3.5 bg-[#D4A847] text-white hover:bg-[#E4C067] text-base"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 min-h-[44px] px-7 py-3.5 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1B4332] text-base"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Introduction Strip */}
      <section className="bg-[#FAF8F5] section-padding">
        <div className="container px-4 md:px-6 lg:px-8">
          <p className="max-w-3xl mx-auto text-center text-lg md:text-xl text-[#6B6B6B] leading-relaxed">
            Kishkindha Industry is a trusted B2B supplier of housekeeping materials, cleaning chemicals, washroom hygiene products, facility maintenance essentials, and office stationery. We partner with institutions that demand consistent quality, reliable delivery, and competitive pricing at scale.
          </p>
        </div>
      </section>

      {/* Category Grid */}
      <section className="bg-white section-padding">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] mb-4">
              Our Product Categories
            </h2>
            <p className="text-[#6B6B6B] max-w-2xl mx-auto">
              Comprehensive institutional supplies across 8 categories
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => {
              const IconComponent = iconMap[category.icon];
              const count = getProductCount(category.id);

              return (
                <Link
                  key={category.id}
                  href={`/products#${category.id}`}
                  className="bg-white rounded-xl p-5 md:p-6 border border-[#E5E5E5] card-hover text-center group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#FAF8F5] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1B4332] transition-colors duration-300">
                    {IconComponent && (
                      <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-[#1B4332] group-hover:text-white transition-colors duration-300" />
                    )}
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-[#2D2D2D] mb-2 leading-snug">
                    {category.name}
                  </h3>
                  <span className="inline-block text-xs font-medium text-[#1B4332] bg-[#1B4332]/10 px-3 py-1 rounded-full">
                    {count} products
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-[#1B4332] py-12 md:py-16">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-10 h-10 md:w-12 md:h-12 text-[#D4A847] mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-[#FAF8F5] section-padding">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Placeholder Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#2D6A4F] flex items-center justify-center">
              <Building2 className="w-24 h-24 text-white/30" />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] mb-6">
                Built on Trust, Driven by Quality
              </h2>
              <p className="text-[#6B6B6B] mb-6 leading-relaxed">
                Founded in Delhi, Kishkindha Industry was established with a clear mission — to become the most dependable institutional supply partner for organizations across India. We serve hospitals, hotels, universities, government bodies, and corporate houses with a comprehensive range of facility and housekeeping supplies.
              </p>
              <p className="text-[#6B6B6B] mb-8 leading-relaxed">
                Our team brings together deep expertise in procurement, quality control, and logistics to ensure your facility never runs short on essential supplies. From cleaning chemicals and washroom hygiene products to office stationery and safety equipment, we cover it all.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#1B4332] font-medium hover:text-[#2D6A4F] transition-colors"
              >
                Learn More About Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="bg-[#1B4332] section-padding">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Promise to You
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              What sets us apart as your trusted institutional supply partner
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {promises.map((promise) => (
              <div
                key={promise.title}
                className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="absolute -top-5 left-8">
                  <div className="w-14 h-14 bg-[#D4A847] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <promise.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {promise.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {promise.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-white section-padding">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] mb-4">
              Trusted By Leading Institutions
            </h2>
            <p className="text-[#6B6B6B] max-w-2xl mx-auto">
              We are proud to serve some of the most respected organizations in healthcare, education, and hospitality
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {trustedClients.map((client) => (
              <div
                key={client}
                className="px-6 py-3 bg-[#FAF8F5] border border-[#E5E5E5] rounded-full text-[#2D2D2D] font-medium text-sm md:text-base"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#132A21] py-16 md:py-20">
        <div className="container px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Institutional Supplies? Get a Quote Today
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Tell us your requirements and our team will get back to you with a customized quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 min-h-[44px] px-7 py-3.5 bg-white text-[#1B4332] hover:bg-[#D4A847] hover:text-white"
            >
              <MessageCircle className="w-5 h-5" />
              Get in Touch
            </Link>
            <a
              href="https://wa.me/919354162565?text=Hi,%20I'm%20interested%20in%20Kishkindha%20Industry%20products.%20Please%20share%20more%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
