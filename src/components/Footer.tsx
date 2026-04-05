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
                  href="mailto:Meenakshi.jss3011@gmail.com"
                  className="flex items-start gap-3 text-white/80 hover:text-[#D4A847] transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Meenakshi.jss3011@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919354162565"
                  className="flex items-start gap-3 text-white/80 hover:text-[#D4A847] transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>+91 9354162565</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919354162565?text=Hi,%20I'm%20interested%20in%20Kishkindha%20Industry%20products.%20Please%20share%20more%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/80 hover:text-[#D4A847] transition-colors text-sm"
                >
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>WhatsApp: +91 9354162565</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Prahlad Vihar, Delhi - 110042</span>
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
