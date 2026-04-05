'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

const productCategories = [
  { name: 'All Products', href: '/products' },
  { name: 'Cleaning Solutions & Chemicals', href: '/products#cleaning-solutions' },
  { name: 'Cleaning Tools & Equipment', href: '/products#cleaning-tools' },
  { name: 'Waste Management', href: '/products#waste-management' },
  { name: 'Washroom & Hygiene', href: '/products#washroom-hygiene' },
  { name: 'Facility Maintenance & Safety', href: '/products#facility-maintenance' },
  { name: 'Healthcare Supplies', href: '/products#healthcare' },
  { name: 'Kitchen & Pantry', href: '/products#kitchen-pantry' },
  { name: 'Office & Stationery', href: '/products#office-stationery' },
];

const navLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products', hasDropdown: true },
  { name: 'Why Choose Us', href: '/why-us' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-full.svg"
              alt="Kishkindha Industry"
              width={180}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <div
                    className="flex items-center gap-1 cursor-pointer py-2"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className="text-[#2D2D2D] hover:text-[#1B4332] font-medium transition-colors"
                    >
                      {link.name}
                    </Link>
                    <ChevronDown className="w-4 h-4 text-[#6B6B6B]" />

                    {/* Dropdown */}
                    <div
                      className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                        isProductsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}
                    >
                      <div className="bg-white rounded-lg shadow-lg border border-[#E5E5E5] py-2 min-w-[280px]">
                        {productCategories.map((category) => (
                          <Link
                            key={category.name}
                            href={category.href}
                            className="block px-4 py-2 text-sm text-[#2D2D2D] hover:bg-[#FAF8F5] hover:text-[#1B4332] transition-colors"
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="text-[#2D2D2D] hover:text-[#1B4332] font-medium transition-colors py-2"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Contact CTA Button */}
            <Link
              href="/contact"
              className="btn btn-primary text-sm"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#2D2D2D] hover:text-[#1B4332] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen pb-6' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col gap-2 pt-4 border-t border-[#E5E5E5]">
            <Link
              href="/"
              className="py-3 text-[#2D2D2D] hover:text-[#1B4332] font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className="py-3 text-[#2D2D2D] hover:text-[#1B4332] font-medium transition-colors block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-4 flex flex-col gap-1">
                    {productCategories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        className="py-2 text-sm text-[#6B6B6B] hover:text-[#1B4332] transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="btn btn-primary mt-4 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
