'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FileText } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'flours', name: 'Flours & Atta' },
  { id: 'pulses', name: 'Pulses & Lentils' },
  { id: 'spices', name: 'Spices' },
  { id: 'dry-fruits', name: 'Dry Fruits' },
  { id: 'rice-grains', name: 'Rice & Grains' },
];

const products = {
  flours: {
    title: 'Flours & Atta',
    description:
      'From everyday wheat flour to specialty items, our flour range caters to diverse culinary needs. All products are fresh, finely milled, and perfect for bulk usage.',
    image: '/images/categories/flours.jpg',
    items: [
      {
        name: 'Wheat Flour (Atta)',
        description: 'Premium whole wheat flour, ideal for rotis and parathas',
        image: '/images/products/flours/wheat-flour.jpg',
      },
      {
        name: 'Besan (Gram Flour)',
        description: 'Fine chickpea flour for pakoras, sweets, and batters',
        image: '/images/products/flours/besan.jpg',
      },
      {
        name: 'Maida (Refined Flour)',
        description: 'Finely milled white flour for baking and frying',
        image: '/images/products/flours/maida.jpg',
      },
      {
        name: 'Sooji (Semolina)',
        description: 'Coarse wheat semolina for halwa, upma, and pasta',
        image: '/images/products/flours/sooji.jpg',
      },
      {
        name: 'Multigrain Atta',
        description: 'Nutritious blend of multiple grains',
        image: '/images/products/flours/multigrain-atta.jpg',
      },
      {
        name: 'Rice Flour',
        description: 'Fine rice flour for dosas, idlis, and sweets',
        image: '/images/products/flours/rice-flour.jpg',
      },
    ],
  },
  pulses: {
    title: 'Pulses & Lentils',
    description:
      "India's kitchens run on dal. Our comprehensive range of pulses ensures you have access to the finest quality lentils — cleaned, sorted, and ready for your kitchen.",
    image: '/images/categories/pulses.jpg',
    items: [
      {
        name: 'Toor Dal (Arhar)',
        description: 'Split pigeon peas, staple for sambar and dal fry',
        image: '/images/products/pulses/toor-dal.jpg',
      },
      {
        name: 'Chana Dal',
        description: 'Split chickpeas, nutty flavor for dals and sweets',
        image: '/images/products/pulses/chana-dal.jpg',
      },
      {
        name: 'Moong Dal',
        description: 'Split green gram, light and easily digestible',
        image: '/images/products/pulses/moong-dal.jpg',
      },
      {
        name: 'Masoor Dal',
        description: 'Red lentils, quick-cooking and nutritious',
        image: '/images/products/pulses/masoor-dal.jpg',
      },
      {
        name: 'Urad Dal',
        description: 'Split black gram, essential for South Indian cuisine',
        image: '/images/products/pulses/urad-dal.jpg',
      },
      {
        name: 'Rajma',
        description: 'Red kidney beans, perfect for Punjabi rajma',
        image: '/images/products/pulses/rajma.jpg',
      },
      {
        name: 'Kabuli Chana',
        description: 'White chickpeas for chole and salads',
        image: '/images/products/pulses/kabuli-chana.jpg',
      },
      {
        name: 'Black Chana',
        description: 'Desi chickpeas, protein-rich',
        image: '/images/products/pulses/black-chana.jpg',
      },
    ],
  },
  spices: {
    title: 'Spices',
    description:
      'The soul of Indian cuisine. Our spices are sourced from the finest growing regions, processed to retain maximum flavor and aroma.',
    image: '/images/categories/spices.jpg',
    items: [
      {
        name: 'Red Chilli Powder',
        description: 'Vibrant color and balanced heat',
        image: '/images/products/spices/red-chilli-powder.jpg',
      },
      {
        name: 'Turmeric Powder',
        description: 'High curcumin content, golden yellow',
        image: '/images/products/spices/turmeric-powder.jpg',
      },
      {
        name: 'Coriander Powder',
        description: 'Fresh, aromatic ground coriander',
        image: '/images/products/spices/coriander-powder.jpg',
      },
      {
        name: 'Cumin (Jeera)',
        description: 'Whole and ground, earthy aroma',
        image: '/images/products/spices/cumin-jeera.jpg',
      },
      {
        name: 'Garam Masala',
        description: 'Traditional blend of warming spices',
        image: '/images/products/spices/garam-masala.jpg',
      },
      {
        name: 'Black Pepper',
        description: 'Whole and ground, premium quality',
        image: '/images/products/spices/black-pepper.jpg',
      },
      {
        name: 'Cardamom',
        description: 'Green elaichi, intensely aromatic',
        image: '/images/products/spices/cardamom.jpg',
      },
      {
        name: 'Cloves',
        description: 'Premium quality, whole cloves',
        image: '/images/products/spices/cloves.jpg',
      },
      {
        name: 'Cinnamon',
        description: 'True Ceylon and cassia varieties',
        image: '/images/products/spices/cinnamon.jpg',
      },
    ],
  },
  'dry-fruits': {
    title: 'Dry Fruits',
    description:
      'Premium dry fruits and nuts for restaurants, sweet shops, and food manufacturers. Sourced from the best growing regions worldwide.',
    image: '/images/categories/dry-fruits.jpg',
    items: [
      {
        name: 'Almonds (Badam)',
        description: 'California and Indian varieties',
        image: '/images/products/dry-fruits/almonds.jpg',
      },
      {
        name: 'Cashews (Kaju)',
        description: 'Whole, splits, and pieces available',
        image: '/images/products/dry-fruits/cashews.jpg',
      },
      {
        name: 'Raisins (Kishmish)',
        description: 'Golden and black varieties',
        image: '/images/products/dry-fruits/raisins.jpg',
      },
      {
        name: 'Walnuts (Akhrot)',
        description: 'Premium quality halves and pieces',
        image: '/images/products/dry-fruits/walnuts.jpg',
      },
      {
        name: 'Pistachios (Pista)',
        description: 'Iranian and American varieties',
        image: '/images/products/dry-fruits/pistachios.jpg',
      },
      {
        name: 'Dates (Khajoor)',
        description: 'Multiple varieties available',
        image: '/images/products/dry-fruits/dates.jpg',
      },
      {
        name: 'Anjeer (Figs)',
        description: 'Dried figs, premium quality',
        image: '/images/products/dry-fruits/anjeer.jpg',
      },
    ],
  },
  'rice-grains': {
    title: 'Rice & Grains',
    description:
      'From aromatic basmati to everyday varieties, our rice and grains range meets every business requirement.',
    image: '/images/categories/rice.jpg',
    items: [
      {
        name: 'Basmati Rice',
        description: 'Premium long-grain, aromatic',
        image: '/images/products/rice-grains/basmati-rice.jpg',
      },
      {
        name: 'Sona Masuri',
        description: 'Medium-grain, everyday rice',
        image: '/images/products/rice-grains/sona-masuri.jpg',
      },
      {
        name: 'Ponni Rice',
        description: 'South Indian favorite',
        image: '/images/products/rice-grains/ponni-rice.jpg',
      },
      {
        name: 'Brown Rice',
        description: 'Whole grain, health-conscious choice',
        image: '/images/products/rice-grains/brown-rice.jpg',
      },
      {
        name: 'Poha (Flattened Rice)',
        description: 'Thick and thin varieties',
        image: '/images/products/rice-grains/poha.jpg',
      },
      {
        name: 'Daliya (Broken Wheat)',
        description: 'Nutritious cracked wheat',
        image: '/images/products/rice-grains/daliya.jpg',
      },
    ],
  },
};

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Handle hash navigation
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && categories.find((c) => c.id === hash)) {
      setActiveCategory(hash);
    }
  }, []);

  const filteredCategories =
    activeCategory === 'all'
      ? Object.keys(products)
      : [activeCategory];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-[#1B4332]">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero/spices-hero.jpg"
            alt="Products background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Product Range
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Premium quality ingredients for your business needs
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 md:top-20 z-40 bg-white shadow-sm">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? 'bg-[#1B4332] text-white'
                    : 'bg-[#FAF8F5] text-[#6B6B6B] hover:bg-[#1B4332]/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="container px-4 md:px-6 lg:px-8">
          {filteredCategories.map((categoryKey) => {
            const category = products[categoryKey as keyof typeof products];
            return (
              <div key={categoryKey} id={categoryKey} className="mb-16 last:mb-0 scroll-mt-32">
                {/* Category Header */}
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1B4332] mb-3">
                    {category.title}
                  </h2>
                  <p className="text-[#6B6B6B] max-w-3xl">
                    {category.description}
                  </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.items.map((product) => (
                    <div
                      key={product.name}
                      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="relative aspect-square">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-[#1B4332] mb-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-[#6B6B6B] mb-4">
                          {product.description}
                        </p>
                        <Link
                          href={`/contact?product=${encodeURIComponent(product.name)}`}
                          className="inline-flex items-center justify-center w-full gap-2 font-medium rounded-lg transition-all duration-300 min-h-[40px] px-4 py-2 bg-[#1B4332] text-white hover:bg-[#2D6A4F] text-sm"
                        >
                          Request Quote
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Pricing Notice */}
          <div className="mt-12 bg-white rounded-xl p-6 md:p-8 border border-[#E5E5E5] shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#D4A847]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-[#D4A847]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1B4332] mb-2">
                  Prices on Request
                </h3>
                <p className="text-[#6B6B6B] mb-4">
                  We offer competitive bulk pricing customized to your order volume. Contact us for a detailed quote tailored to your business needs.
                </p>
                <Link href="/contact" className="btn btn-primary">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
