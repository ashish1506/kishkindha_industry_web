import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Products', href: '/products' },
  { name: 'Why Choose Us', href: '/why-us' },
  { name: 'Contact Us', href: '/contact' },
];

const productLinks = [
  { name: 'Cleaning Solutions', href: '/products#cleaning-solutions' },
  { name: 'Cleaning Tools', href: '/products#cleaning-tools' },
  { name: 'Waste Management', href: '/products#waste-management' },
  { name: 'Washroom & Hygiene', href: '/products#washroom-hygiene' },
  { name: 'Facility Maintenance', href: '/products#facility-maintenance' },
  { name: 'Healthcare Supplies', href: '/products#healthcare' },
  { name: 'Kitchen & Pantry', href: '/products#kitchen-pantry' },
  { name: 'Office & Stationery', href: '/products#office-stationery' },
];

export default function Footer() {
  return (
    <footer className="bg-[#132A21] text-white pt-4">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Image
              src="/logo-white.svg"
              alt="Kishkindha Industry"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
            <p className="text-[#D4A847] font-medium italic">
              &ldquo;Your Trusted Institutional Supply Partner&rdquo;
            </p>
            <p className="text-white/80 text-sm leading-relaxed">
              Comprehensive facility management supplies for hospitals, hotels, universities, government bodies, and corporate houses across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-[#D4A847] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-[#D4A847] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@kishkindhaindustry.com"
                  className="flex items-start gap-3 text-white/80 hover:text-[#D4A847] transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>support@kishkindhaindustry.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919354162565"
                  className="flex items-start gap-3 text-white/80 hover:text-[#D4A847] transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>+91 9354162565 / +91 9810201088</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Property No. 26, Basement, DLF Industrial Area, Moti Nagar, Delhi-110015</span>
              </li>
            </ul>
            <p className="text-white/50 text-xs mt-4">GSTIN: 07ABFFK0271R1ZX</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 pb-4">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Kishkindha Industry. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <span className="inline-flex items-center gap-1.5 bg-[#1B4332] px-3 py-1.5 rounded-full">
              <svg className="w-4 h-4 text-[#D4A847]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white/90">Trusted B2B Supplier</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
