import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Leaf, Package, Truck, ShieldCheck, Award, Clock, Tag } from 'lucide-react';

const productCategories = [
  {
    name: 'Flours & Atta',
    description: 'Premium wheat flour, besan, maida, sooji & specialty flours',
    href: '/products#flours',
    image: '/images/categories/flours.jpg',
  },
  {
    name: 'Pulses & Lentils',
    description: 'Complete range of dals — toor, chana, moong, masoor & more',
    href: '/products#pulses',
    image: '/images/categories/pulses.jpg',
  },
  {
    name: 'Whole & Ground Spices',
    description: 'Authentic Indian spices — pure, aromatic & flavorful',
    href: '/products#spices',
    image: '/images/categories/spices.jpg',
  },
  {
    name: 'Dry Fruits',
    description: 'Premium quality almonds, cashews, raisins & more',
    href: '/products#dry-fruits',
    image: '/images/categories/dry-fruits.jpg',
  },
  {
    name: 'Rice & Grains',
    description: 'Basmati, sona masuri & specialty rice varieties',
    href: '/products#rice-grains',
    image: '/images/categories/rice.jpg',
  },
];

const stats = [
  { icon: Leaf, value: '100%', label: 'Pure Vegetarian' },
  { icon: Package, value: 'Bulk', label: 'Order Specialists' },
  { icon: Truck, value: 'Pan India', label: 'Delivery Network' },
  { icon: ShieldCheck, value: 'Consistent', label: 'Quality Assurance' },
];

const promises = [
  {
    icon: Award,
    title: 'Quality First',
    description: 'Every product undergoes rigorous quality checks before reaching you. We source directly from trusted farmers and processors.',
  },
  {
    icon: Clock,
    title: 'Reliable Supply',
    description: "Consistent availability and timely deliveries — because your business can't afford delays.",
  },
  {
    icon: Tag,
    title: 'Competitive Pricing',
    description: "Bulk order advantages passed directly to you. Quality doesn't have to come at a premium.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/spices-hero.jpg"
            alt="Premium spices and grains"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 md:px-6 lg:px-8 text-center md:text-left">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Trusted Partner for Premium Food Supplies
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Delivering quality flours, pulses, spices, dry fruits, and grains to businesses across India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/contact" className="btn btn-primary text-base">
                Request a Quote
              </Link>
              <a href="#products" className="inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 min-h-[44px] px-7 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1B4332] text-base">
                Explore Products
              </a>
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
            At Kishkindha Foods, we understand that quality ingredients are the foundation of every successful food business. We partner with restaurants, caterers, retailers, and food manufacturers to deliver pure, premium-grade products — consistently and reliably.
          </p>
        </div>
      </section>

      {/* Product Categories Section */}
      <section id="products" className="bg-white section-padding">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] mb-4">
              Our Product Range
            </h2>
            <p className="text-[#6B6B6B] max-w-2xl mx-auto">
              Premium quality ingredients for every culinary need
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category, index) => (
              <Link
                key={category.name}
                href={category.href}
                className={`group relative overflow-hidden rounded-xl aspect-[4/3] card-hover ${
                  index >= 3 ? 'lg:col-span-1' : ''
                } ${index === 3 ? 'lg:col-start-1' : ''}`}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-sm mb-3">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#D4A847] font-medium text-sm opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    View Products <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
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
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/hero/warehouse.jpg"
                alt="Kishkindha Foods warehouse"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] mb-6">
                Built on Trust, Driven by Quality
              </h2>
              <p className="text-[#6B6B6B] mb-6 leading-relaxed">
                Kishkindha Foods was founded with a clear mission — to become the most reliable food supply partner for businesses across India. Based in Delhi, we&apos;ve built a robust supply chain that ensures our partners receive the finest quality products, every single time.
              </p>
              <p className="text-[#6B6B6B] mb-8 leading-relaxed">
                Our team brings together deep expertise in food sourcing, quality control, and logistics to serve restaurants, hotels, caterers, food manufacturers, and retail chains.
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

      {/* Our Promise Section */}
      <section className="bg-[#1B4332] section-padding">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Promise to You
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              What sets us apart as your trusted food supply partner
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {promises.map((promise, index) => (
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

      {/* CTA Banner */}
      <section className="bg-[#132A21] py-16 md:py-20">
        <div className="container px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Get a customized quote for your business requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 min-h-[44px] px-7 py-3.5 bg-white text-[#1B4332] hover:bg-[#D4A847] hover:text-white">
              Get in Touch
            </Link>
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
