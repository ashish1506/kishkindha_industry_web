'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import {
  Search,
  X,
  Droplets,
  Brush,
  Trash2,
  SprayCan,
  HardHat,
  HeartPulse,
  UtensilsCrossed,
  PenLine,
  ArrowRight,
  MessageCircle,
  Download,
} from 'lucide-react';
import { categories } from '@/data/categories';
import type { Category } from '@/data/categories';
import { products, searchProducts, getProductsByCategory, getProductCount } from '@/data/products';
import type { Product } from '@/data/products';

/* ------------------------------------------------------------------ */
/*  Icon lookup                                                        */
/* ------------------------------------------------------------------ */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Droplets, Brush, Trash2, SprayCan, HardHat, HeartPulse, UtensilsCrossed, PenLine,
};

function CatIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name];
  return Icon ? <Icon className={className} /> : null;
}

/* ------------------------------------------------------------------ */
/*  Group products by sub-category within a category                   */
/* ------------------------------------------------------------------ */
function groupBySubCategory(items: Product[], cat: Category) {
  return cat.subCategories
    .map((sub) => ({
      name: sub.name,
      products: items.filter((p) => p.subCategory === sub.id),
    }))
    .filter((g) => g.products.length > 0);
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */
export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Handle hash on mount
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const found = categories.find((c) => c.id === hash);
      if (found) {
        setActiveCategory(hash);
        requestAnimationFrame(() => {
          sectionRefs.current[hash]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    }
  }, []);

  // Search results
  const searchResults = useMemo(() => {
    const q = searchQuery.trim();
    if (!q) return null;
    return searchProducts(q);
  }, [searchQuery]);

  const isSearching = searchResults !== null;

  // Category click: scroll to section
  const scrollToCategory = (catId: string) => {
    setActiveCategory(catId);
    setSearchQuery('');
    history.replaceState(null, '', `#${catId}`);
    requestAnimationFrame(() => {
      sectionRefs.current[catId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const showAll = () => {
    setActiveCategory(null);
    setSearchQuery('');
    history.replaceState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalCount = getProductCount();

  return (
    <>
      {/* ============================================================ */}
      {/*  Hero                                                         */}
      {/* ============================================================ */}
      <section className="bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] py-16 md:py-24">
        <div className="container px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
            Product Catalogue
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto mb-5">
            {totalCount} products across {categories.length} categories
          </p>
          <button
            onClick={async () => {
              const { generateCataloguePdf } = await import('@/lib/generateCataloguePdf');
              generateCataloguePdf();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4A847] text-white rounded-lg font-medium text-sm hover:bg-[#C49A3F] transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Catalogue PDF
          </button>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Sticky search bar                                            */}
      {/* ============================================================ */}
      <div className="sticky top-16 md:top-20 z-40 bg-[#FAF8F5] border-b border-[#E5E5E5] shadow-sm">
        <div className="container px-4 md:px-6 lg:px-8 py-3">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6B6B]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products... e.g. Mop, Stapler, Phenyl"
              className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-[#2D2D2D] text-sm focus:outline-none focus:border-[#1B4332] focus:ring-2 focus:ring-[#1B4332]/10 transition-all placeholder:text-[#6B6B6B]/60"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#6B6B6B] hover:text-[#2D2D2D]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {isSearching && (
            <p className="text-sm text-[#6B6B6B] mt-2">
              Found <span className="font-semibold text-[#1B4332]">{searchResults.length}</span> product{searchResults.length !== 1 ? 's' : ''} for &ldquo;{searchQuery}&rdquo;
            </p>
          )}
        </div>
      </div>

      {/* ============================================================ */}
      {/*  Search results (shown only when searching)                   */}
      {/* ============================================================ */}
      {isSearching ? (
        <section className="section-padding bg-[#FAF8F5] min-h-[50vh]">
          <div className="container px-4 md:px-6 lg:px-8">
            {searchResults.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-[#6B6B6B] mb-2">No products found</p>
                <p className="text-sm text-[#6B6B6B]">Try a different keyword</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {searchResults.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-start gap-3 px-4 py-3 bg-white rounded-lg border border-[#E5E5E5]/60"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#D4A847] flex-shrink-0 mt-1.5" />
                    <div>
                      <span className="text-[#2D2D2D] text-sm font-medium">{p.name}</span>
                      {p.variants && (
                        <span className="text-[#6B6B6B] text-xs block mt-0.5">{p.variants}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ) : (
        <>
          {/* ============================================================ */}
          {/*  Category quick-jump cards                                    */}
          {/* ============================================================ */}
          <section className="bg-white py-6 md:py-8 border-b border-[#E5E5E5]">
            <div className="container px-4 md:px-6 lg:px-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 md:gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => scrollToCategory(cat.id)}
                    className={`flex flex-col items-center gap-1.5 px-2 py-3 rounded-xl text-center transition-all duration-200 hover:bg-[#1B4332] hover:text-white group ${
                      activeCategory === cat.id
                        ? 'bg-[#1B4332] text-white'
                        : 'bg-[#FAF8F5] text-[#2D2D2D]'
                    }`}
                  >
                    <CatIcon
                      name={cat.icon}
                      className={`w-5 h-5 transition-colors ${
                        activeCategory === cat.id ? 'text-[#D4A847]' : 'text-[#1B4332] group-hover:text-[#D4A847]'
                      }`}
                    />
                    <span className="text-xs font-medium leading-tight">{cat.name.split('&')[0].trim()}</span>
                    <span className="text-[10px] opacity-60">{getProductCount(cat.id)}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* ============================================================ */}
          {/*  Full catalogue - all categories rendered, just scroll        */}
          {/* ============================================================ */}
          <section className="bg-[#FAF8F5] pb-12">
            <div className="container px-4 md:px-6 lg:px-8">
              {categories.map((cat) => {
                const catProducts = getProductsByCategory(cat.id);
                const groups = groupBySubCategory(catProducts, cat);

                return (
                  <div
                    key={cat.id}
                    id={cat.id}
                    ref={(el) => { sectionRefs.current[cat.id] = el; }}
                    className="scroll-mt-36 pt-8 md:pt-12"
                  >
                    {/* Category header */}
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-10 h-10 rounded-lg bg-[#1B4332] flex items-center justify-center flex-shrink-0">
                        <CatIcon name={cat.icon} className="w-5 h-5 text-[#D4A847]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl md:text-2xl font-bold text-[#1B4332] leading-tight">
                          {cat.name}
                        </h2>
                      </div>
                      <span className="text-xs font-medium text-[#6B6B6B] bg-white px-2.5 py-1 rounded-full border border-[#E5E5E5] flex-shrink-0">
                        {catProducts.length}
                      </span>
                    </div>
                    <p className="text-sm text-[#6B6B6B] mb-5 ml-[52px]">{cat.description}</p>

                    {/* Sub-categories with product names */}
                    <div className="space-y-4">
                      {groups.map((group) => (
                        <div key={group.name} className="bg-white rounded-xl border border-[#E5E5E5]/60 overflow-hidden">
                          {/* Sub-category label */}
                          <div className="px-4 py-2.5 bg-[#FAF8F5] border-b border-[#E5E5E5]/40">
                            <h3 className="text-sm font-semibold text-[#1B4332]">{group.name}</h3>
                          </div>
                          {/* Product list - simple names in a flowing layout */}
                          <div className="px-4 py-3">
                            <div className="flex flex-wrap gap-2">
                              {group.products.map((p) => (
                                <span
                                  key={p.id}
                                  className="inline-flex items-baseline gap-1.5 px-3 py-1.5 bg-[#FAF8F5] rounded-full text-sm text-[#2D2D2D] border border-[#E5E5E5]/50 hover:border-[#1B4332]/30 hover:bg-[#1B4332]/5 transition-colors"
                                >
                                  {p.name}
                                  {p.variants && (
                                    <span className="text-[10px] text-[#6B6B6B] font-normal">({p.variants})</span>
                                  )}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Divider between categories */}
                    <div className="mt-8 border-b border-[#E5E5E5]" />
                  </div>
                );
              })}
            </div>
          </section>

          {/* ============================================================ */}
          {/*  Bottom CTA                                                   */}
          {/* ============================================================ */}
          <section className="bg-[#1B4332] py-12 md:py-16">
            <div className="container px-4 md:px-6 lg:px-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Need a Price List or Custom Quote?
              </h2>
              <p className="text-white/70 mb-6 max-w-xl mx-auto">
                We offer competitive bulk pricing customized to your order volume
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 font-medium rounded-lg min-h-[44px] px-6 py-3 bg-[#D4A847] text-white hover:bg-[#C49A3F] transition-all"
                >
                  Request Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/919354162565?text=Hi,%20I%20need%20a%20price%20list%20for%20Kishkindha%20Industry%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
