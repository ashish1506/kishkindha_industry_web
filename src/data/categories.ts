export interface SubCategory {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string; // Lucide icon name
  subCategories: SubCategory[];
}

export const categories: Category[] = [
  {
    id: 'cleaning-solutions',
    name: 'Cleaning Solutions & Chemicals',
    description: 'Professional-grade cleaning chemicals and solutions for comprehensive facility hygiene',
    icon: 'Droplets',
    subCategories: [
      { id: 'floor-care', name: 'Floor Care' },
      { id: 'disinfectants', name: 'Disinfectants & Sanitizers' },
      { id: 'glass-surface', name: 'Glass & Surface Cleaners' },
      { id: 'toilet-bathroom', name: 'Toilet & Bathroom' },
      { id: 'taski-range', name: 'Professional TASKI Range' },
      { id: 'r-series', name: 'R-Series Professional' },
      { id: 'polishes', name: 'Polishes & Specialty' },
      { id: 'detergents', name: 'Detergents' },
      { id: 'hand-hygiene', name: 'Hand Hygiene' },
    ],
  },
  {
    id: 'cleaning-tools',
    name: 'Cleaning Tools & Equipment',
    description: 'Durable cleaning tools and equipment for professional housekeeping operations',
    icon: 'Brush',
    subCategories: [
      { id: 'brooms-brushes', name: 'Brooms & Brushes' },
      { id: 'mops-mopping', name: 'Mops & Mopping Systems' },
      { id: 'dusters-wipers', name: 'Dusters & Wipers' },
      { id: 'scrubbers-pads', name: 'Scrubbers & Pads' },
      { id: 'floor-pads', name: 'Floor Pads (Machine)' },
      { id: 'dustpans', name: 'Dustpans & Collection' },
      { id: 'cleaning-accessories', name: 'Accessories' },
    ],
  },
  {
    id: 'waste-management',
    name: 'Waste Management',
    description: 'Comprehensive waste segregation and disposal solutions compliant with biomedical and municipal guidelines',
    icon: 'Trash2',
    subCategories: [
      { id: 'large-bags', name: 'Garbage Bags - Large (32x42)' },
      { id: 'small-bags', name: 'Garbage Bags - Small (20x24)' },
      { id: 'standard-bags', name: 'Garbage Bags - Standard' },
      { id: 'dustbins', name: 'Dustbins & Containers' },
    ],
  },
  {
    id: 'washroom-hygiene',
    name: 'Washroom & Hygiene',
    description: 'Premium hygiene products for restrooms, washrooms, and sanitation facilities',
    icon: 'SprayCan',
    subCategories: [
      { id: 'tissue-paper', name: 'Tissue & Paper Products' },
      { id: 'toilet-urinal', name: 'Toilet & Urinal Care' },
      { id: 'air-freshening', name: 'Air Freshening' },
    ],
  },
  {
    id: 'facility-maintenance',
    name: 'Facility Maintenance & Safety',
    description: 'Essential supplies for facility maintenance, pest control, and staff safety',
    icon: 'HardHat',
    subCategories: [
      { id: 'ppe', name: 'Personal Protective Equipment' },
      { id: 'pest-control', name: 'Pest Control' },
      { id: 'lighting-electrical', name: 'Lighting & Electrical' },
      { id: 'hardware-locks', name: 'Hardware & Locks' },
      { id: 'grooming', name: 'Grooming & Personal Care' },
    ],
  },
  {
    id: 'healthcare',
    name: 'Healthcare Supplies',
    description: 'Specialized supplies for hospitals, clinics, and medical facilities',
    icon: 'HeartPulse',
    subCategories: [
      { id: 'medical-accessories', name: 'Medical Accessories' },
    ],
  },
  {
    id: 'kitchen-pantry',
    name: 'Kitchen & Pantry',
    description: 'Essential kitchen supplies, disposables, and pantry items for institutional use',
    icon: 'UtensilsCrossed',
    subCategories: [
      { id: 'utensils-dining', name: 'Utensils & Dining' },
      { id: 'kitchen-accessories', name: 'Accessories' },
      { id: 'pantry-supplies', name: 'Pantry Supplies' },
    ],
  },
  {
    id: 'office-stationery',
    name: 'Office & Stationery',
    description: 'Complete range of office stationery for administrative and documentation needs',
    icon: 'PenLine',
    subCategories: [
      { id: 'writing-instruments', name: 'Writing Instruments' },
      { id: 'paper-notebooks', name: 'Paper & Notebooks' },
      { id: 'registers-books', name: 'Registers & Record Books' },
      { id: 'files-folders', name: 'Files & Folders' },
      { id: 'adhesives-tapes', name: 'Adhesives & Tapes' },
      { id: 'office-tools', name: 'Office Tools & Accessories' },
      { id: 'pins-clips', name: 'Pins & Clips' },
      { id: 'labels-stickers', name: 'Labels & Stickers' },
      { id: 'ink-refills', name: 'Ink & Refills' },
      { id: 'presentation-display', name: 'Presentation & Display' },
      { id: 'envelopes', name: 'Envelopes' },
      { id: 'data-storage', name: 'Data Storage' },
      { id: 'teaching-supplies', name: 'Teaching Supplies' },
      { id: 'stationery-accessories', name: 'Accessories' },
    ],
  },
];

export const categoryMap = Object.fromEntries(categories.map((c) => [c.id, c]));

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getSubCategoryName(categoryId: string, subCategoryId: string): string {
  const category = getCategoryById(categoryId);
  const sub = category?.subCategories.find((s) => s.id === subCategoryId);
  return sub?.name || subCategoryId;
}
