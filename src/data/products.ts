export interface Product {
  id: number;
  name: string;
  category: string;
  subCategory: string;
  variants?: string; // e.g. "Blue, Red, Black" or "Small, Large"
}

export const products: Product[] = [
  // ═══════════════════════════════════════════════════════════
  // CLEANING SOLUTIONS & CHEMICALS
  // ═══════════════════════════════════════════════════════════

  // Floor Care
  { id: 1, name: 'Concentrate Phenyle', category: 'cleaning-solutions', subCategory: 'floor-care' },
  { id: 2, name: 'White Phenyle', category: 'cleaning-solutions', subCategory: 'floor-care' },
  { id: 3, name: 'Phenyl', category: 'cleaning-solutions', subCategory: 'floor-care' },
  { id: 4, name: 'Floor Cleaner', category: 'cleaning-solutions', subCategory: 'floor-care' },
  { id: 5, name: 'Lizol Floor Cleaner', category: 'cleaning-solutions', subCategory: 'floor-care' },

  // Disinfectants & Sanitizers
  { id: 6, name: 'Bleaching Liquid', category: 'cleaning-solutions', subCategory: 'disinfectants' },
  { id: 7, name: 'Bleaching Powder', category: 'cleaning-solutions', subCategory: 'disinfectants' },
  { id: 8, name: 'Hydrochloric Acid', category: 'cleaning-solutions', subCategory: 'disinfectants' },
  { id: 9, name: 'Hypo', category: 'cleaning-solutions', subCategory: 'disinfectants' },

  // Glass & Surface Cleaners
  { id: 10, name: 'Glass Cleaner', category: 'cleaning-solutions', subCategory: 'glass-surface' },
  { id: 11, name: 'Colin', category: 'cleaning-solutions', subCategory: 'glass-surface' },
  { id: 12, name: 'Vim Gel', category: 'cleaning-solutions', subCategory: 'glass-surface' },
  { id: 13, name: 'Vim Bar', category: 'cleaning-solutions', subCategory: 'glass-surface' },

  // Toilet & Bathroom
  { id: 14, name: 'Toilet Cleaner', category: 'cleaning-solutions', subCategory: 'toilet-bathroom' },

  // Professional TASKI Range
  { id: 15, name: 'TASKI 101', category: 'cleaning-solutions', subCategory: 'taski-range' },
  { id: 16, name: 'TASKI 103', category: 'cleaning-solutions', subCategory: 'taski-range' },
  { id: 17, name: 'TASKI D-7', category: 'cleaning-solutions', subCategory: 'taski-range' },
  { id: 18, name: 'Ternova', category: 'cleaning-solutions', subCategory: 'taski-range' },

  // R-Series Professional
  { id: 19, name: 'R-1 Bathroom Cleaner', category: 'cleaning-solutions', subCategory: 'r-series' },
  { id: 20, name: 'R-2 Glass Cleaner', category: 'cleaning-solutions', subCategory: 'r-series' },
  { id: 21, name: 'R-3 Floor Maintainer', category: 'cleaning-solutions', subCategory: 'r-series' },
  { id: 22, name: 'R-4 Furniture Polish', category: 'cleaning-solutions', subCategory: 'r-series' },
  { id: 23, name: 'R-5 Air Freshener Concentrate', category: 'cleaning-solutions', subCategory: 'r-series' },
  { id: 24, name: 'R-6 Carpet Cleaner', category: 'cleaning-solutions', subCategory: 'r-series' },
  { id: 25, name: 'R-9 Specialty Cleaner', category: 'cleaning-solutions', subCategory: 'r-series' },

  // Polishes & Specialty
  { id: 26, name: 'D7 Steel Polish', category: 'cleaning-solutions', subCategory: 'polishes' },
  { id: 27, name: 'Lemon Grass Oil', category: 'cleaning-solutions', subCategory: 'polishes' },
  { id: 28, name: 'Carpet Shampoo', category: 'cleaning-solutions', subCategory: 'polishes' },
  { id: 29, name: 'Thinner', category: 'cleaning-solutions', subCategory: 'polishes' },

  // Detergents
  { id: 30, name: 'Detergent Powder', category: 'cleaning-solutions', subCategory: 'detergents' },
  { id: 31, name: 'Fena Surf', category: 'cleaning-solutions', subCategory: 'detergents' },

  // Hand Hygiene
  { id: 32, name: 'Hand Wash / Liquid Soap', category: 'cleaning-solutions', subCategory: 'hand-hygiene' },
  { id: 33, name: 'Soap', category: 'cleaning-solutions', subCategory: 'hand-hygiene', variants: 'Bar, Guest Size, Regular' },

  // ═══════════════════════════════════════════════════════════
  // CLEANING TOOLS & EQUIPMENT
  // ═══════════════════════════════════════════════════════════

  // Brooms & Brushes
  { id: 34, name: 'Hard Broom', category: 'cleaning-tools', subCategory: 'brooms-brushes' },
  { id: 35, name: 'Soft Broom', category: 'cleaning-tools', subCategory: 'brooms-brushes' },
  { id: 36, name: 'Hard Broom Rod', category: 'cleaning-tools', subCategory: 'brooms-brushes' },
  { id: 37, name: 'Cob Web Brush', category: 'cleaning-tools', subCategory: 'brooms-brushes' },
  { id: 38, name: 'Feather Brush', category: 'cleaning-tools', subCategory: 'brooms-brushes' },
  { id: 39, name: 'Toilet Brush', category: 'cleaning-tools', subCategory: 'brooms-brushes' },

  // Mops & Mopping Systems
  { id: 40, name: 'Wet Mop Set with Rod', category: 'cleaning-tools', subCategory: 'mops-mopping' },
  { id: 41, name: 'Dry Mop Set', category: 'cleaning-tools', subCategory: 'mops-mopping' },
  { id: 42, name: 'Pochha (Mope)', category: 'cleaning-tools', subCategory: 'mops-mopping' },
  { id: 43, name: 'Bucket', category: 'cleaning-tools', subCategory: 'mops-mopping' },

  // Dusters & Wipers
  { id: 44, name: 'Floor Duster', category: 'cleaning-tools', subCategory: 'dusters-wipers' },
  { id: 45, name: 'Table Duster', category: 'cleaning-tools', subCategory: 'dusters-wipers' },
  { id: 46, name: 'Yellow Duster', category: 'cleaning-tools', subCategory: 'dusters-wipers' },
  { id: 47, name: 'Check Duster', category: 'cleaning-tools', subCategory: 'dusters-wipers' },
  { id: 48, name: 'Microfibre Duster', category: 'cleaning-tools', subCategory: 'dusters-wipers' },
  { id: 49, name: 'Wiper', category: 'cleaning-tools', subCategory: 'dusters-wipers', variants: 'Large, Small' },
  { id: 50, name: 'Kitchen Wiper', category: 'cleaning-tools', subCategory: 'dusters-wipers' },

  // Scrubbers & Pads
  { id: 51, name: 'Nylon Scrubber', category: 'cleaning-tools', subCategory: 'scrubbers-pads' },
  { id: 52, name: 'Steel Scrubber', category: 'cleaning-tools', subCategory: 'scrubbers-pads' },
  { id: 53, name: 'Steel Wool', category: 'cleaning-tools', subCategory: 'scrubbers-pads' },
  { id: 54, name: 'Scrubber Pad', category: 'cleaning-tools', subCategory: 'scrubbers-pads' },
  { id: 55, name: 'Scotch Brite', category: 'cleaning-tools', subCategory: 'scrubbers-pads' },
  { id: 56, name: 'Plastic Juna', category: 'cleaning-tools', subCategory: 'scrubbers-pads' },

  // Floor Pads (Machine)
  { id: 57, name: 'Floor Pads', category: 'cleaning-tools', subCategory: 'floor-pads', variants: 'Black (Stripping), Red (Buffing), White (Polishing)' },

  // Dustpans & Collection
  { id: 58, name: 'Dust Pan', category: 'cleaning-tools', subCategory: 'dustpans', variants: 'Standard, Small, Big' },
  { id: 59, name: 'Iron Patti', category: 'cleaning-tools', subCategory: 'dustpans' },

  // Accessories
  { id: 60, name: 'Plastic Mug', category: 'cleaning-tools', subCategory: 'cleaning-accessories' },
  { id: 61, name: 'Spray Bottle', category: 'cleaning-tools', subCategory: 'cleaning-accessories' },

  // ═══════════════════════════════════════════════════════════
  // WASTE MANAGEMENT
  // ═══════════════════════════════════════════════════════════

  { id: 62, name: 'Garbage Bags Large (32x42)', category: 'waste-management', subCategory: 'large-bags', variants: 'Black, Blue, Red, Yellow' },
  { id: 63, name: 'Garbage Bags Small (20x24)', category: 'waste-management', subCategory: 'small-bags', variants: 'Black, Blue, Red, Yellow' },
  { id: 64, name: 'Garbage Bag (19x21)', category: 'waste-management', subCategory: 'standard-bags' },
  { id: 65, name: 'Garbage Bag (30x37)', category: 'waste-management', subCategory: 'standard-bags' },
  { id: 66, name: 'Wheel Dustbin', category: 'waste-management', subCategory: 'dustbins', variants: '120 Ltr' },
  { id: 67, name: 'Floor Dustbin', category: 'waste-management', subCategory: 'dustbins', variants: '80 Ltr' },
  { id: 68, name: 'Pair Dustbin', category: 'waste-management', subCategory: 'dustbins', variants: '60 Ltr' },
  { id: 69, name: 'Colour Coded Dustbin Set', category: 'waste-management', subCategory: 'dustbins', variants: '65 Ltr, 4 Colors' },
  { id: 70, name: 'Small Dustbin', category: 'waste-management', subCategory: 'dustbins', variants: 'Standard, Foot-Operated (Paddle)' },
  { id: 71, name: 'Plastic Dustbin Green', category: 'waste-management', subCategory: 'dustbins' },
  { id: 72, name: 'Plastic Container', category: 'waste-management', subCategory: 'dustbins', variants: '250 ml, 500 ml' },

  // ═══════════════════════════════════════════════════════════
  // WASHROOM & HYGIENE
  // ═══════════════════════════════════════════════════════════

  // Tissue & Paper Products
  { id: 73, name: 'Toilet Roll', category: 'washroom-hygiene', subCategory: 'tissue-paper' },
  { id: 74, name: 'Z Fold Tissue Roll', category: 'washroom-hygiene', subCategory: 'tissue-paper' },
  { id: 75, name: 'Face Tissue Box', category: 'washroom-hygiene', subCategory: 'tissue-paper' },
  { id: 76, name: 'Tissue Paper', category: 'washroom-hygiene', subCategory: 'tissue-paper' },

  // Toilet & Urinal Care
  { id: 77, name: 'Urinal Cubes', category: 'washroom-hygiene', subCategory: 'toilet-urinal' },
  { id: 78, name: 'Urinal Jali (Drain Screen)', category: 'washroom-hygiene', subCategory: 'toilet-urinal' },
  { id: 79, name: 'Toilet Pump / Plunger', category: 'washroom-hygiene', subCategory: 'toilet-urinal', variants: 'Standard, Heavy Duty' },
  { id: 80, name: 'Naphthalene', category: 'washroom-hygiene', subCategory: 'toilet-urinal', variants: 'Balls, Bowl' },

  // Air Freshening
  { id: 81, name: 'Room Freshener', category: 'washroom-hygiene', subCategory: 'air-freshening', variants: 'Spray, Refill' },
  { id: 82, name: 'Odonil', category: 'washroom-hygiene', subCategory: 'air-freshening' },
  { id: 83, name: 'Diffuser', category: 'washroom-hygiene', subCategory: 'air-freshening', variants: 'Machine, Oil' },
  { id: 84, name: 'Air Jell Pocket', category: 'washroom-hygiene', subCategory: 'air-freshening' },
  { id: 85, name: 'T Light Candle', category: 'washroom-hygiene', subCategory: 'air-freshening' },

  // ═══════════════════════════════════════════════════════════
  // FACILITY MAINTENANCE & SAFETY
  // ═══════════════════════════════════════════════════════════

  // PPE
  { id: 86, name: 'Heavy Duty Gloves', category: 'facility-maintenance', subCategory: 'ppe' },
  { id: 87, name: 'Gum Boot', category: 'facility-maintenance', subCategory: 'ppe' },
  { id: 88, name: 'Crocs', category: 'facility-maintenance', subCategory: 'ppe' },
  { id: 89, name: 'Slipper', category: 'facility-maintenance', subCategory: 'ppe' },
  { id: 90, name: 'Safety Goggle', category: 'facility-maintenance', subCategory: 'ppe' },

  // Pest Control
  { id: 91, name: 'Hit Spray', category: 'facility-maintenance', subCategory: 'pest-control', variants: 'Cockroach (Red), Flying Insects (Black)' },
  { id: 92, name: 'Allout', category: 'facility-maintenance', subCategory: 'pest-control', variants: 'Set, Refill, Refill with Machine' },
  { id: 93, name: 'Mosquito Racket', category: 'facility-maintenance', subCategory: 'pest-control' },

  // Lighting & Electrical
  { id: 94, name: 'Torch (LED)', category: 'facility-maintenance', subCategory: 'lighting-electrical' },
  { id: 95, name: 'Batteries / Cells', category: 'facility-maintenance', subCategory: 'lighting-electrical', variants: 'AA, AAA, 9V, Heavy Duty | Eveready, Duracell' },

  // Hardware & Locks
  { id: 96, name: 'Padlock', category: 'facility-maintenance', subCategory: 'hardware-locks', variants: 'Small, Large, Iron' },

  // Grooming & Personal Care
  { id: 97, name: 'Razor', category: 'facility-maintenance', subCategory: 'grooming', variants: 'Disposable, Gillette (Pesto)' },
  { id: 98, name: 'Shaving Blade', category: 'facility-maintenance', subCategory: 'grooming' },
  { id: 99, name: 'Trimmer (Electric)', category: 'facility-maintenance', subCategory: 'grooming' },
  { id: 100, name: 'Nail Cutter', category: 'facility-maintenance', subCategory: 'grooming' },
  { id: 101, name: 'Utility Blade', category: 'facility-maintenance', subCategory: 'grooming' },

  // ═══════════════════════════════════════════════════════════
  // HEALTHCARE SUPPLIES
  // ═══════════════════════════════════════════════════════════

  { id: 102, name: 'Medicine Tray', category: 'healthcare', subCategory: 'medical-accessories', variants: 'Medium, Big' },
  { id: 103, name: 'Patient Kit', category: 'healthcare', subCategory: 'medical-accessories' },
  { id: 104, name: 'Dental Kit', category: 'healthcare', subCategory: 'medical-accessories' },

  // ═══════════════════════════════════════════════════════════
  // KITCHEN & PANTRY
  // ═══════════════════════════════════════════════════════════

  { id: 105, name: 'Tableware & Kitchen Ware', category: 'kitchen-pantry', subCategory: 'utensils-dining' },
  { id: 106, name: 'Paper Glass', category: 'kitchen-pantry', subCategory: 'utensils-dining' },
  { id: 107, name: 'Water Dispenser Tray', category: 'kitchen-pantry', subCategory: 'kitchen-accessories' },
  { id: 108, name: 'Coconut / Grape Oil', category: 'kitchen-pantry', subCategory: 'pantry-supplies' },

  // ═══════════════════════════════════════════════════════════
  // OFFICE & STATIONERY
  // ═══════════════════════════════════════════════════════════

  // Writing Instruments
  { id: 109, name: 'Pen - Cello', category: 'office-stationery', subCategory: 'writing-instruments', variants: 'Blue, Red, Black, Finegrip, Butterflow' },
  { id: 110, name: 'Pen - Luxor', category: 'office-stationery', subCategory: 'writing-instruments', variants: 'V-5 Blue, V-5 Black, Pilot series' },
  { id: 111, name: 'Pen - DOMS', category: 'office-stationery', subCategory: 'writing-instruments', variants: 'Blue, Red' },
  { id: 112, name: 'Pen - Pierre Cardin', category: 'office-stationery', subCategory: 'writing-instruments' },
  { id: 113, name: 'Pen - Pilot V7', category: 'office-stationery', subCategory: 'writing-instruments', variants: 'Blue, Red, Green, Black' },
  { id: 114, name: 'Pen - Uni Ball', category: 'office-stationery', subCategory: 'writing-instruments', variants: 'Blue, Black' },
  { id: 115, name: 'Pencil', category: 'office-stationery', subCategory: 'writing-instruments', variants: 'HB, Mechanical' },
  { id: 116, name: 'Permanent Marker', category: 'office-stationery', subCategory: 'writing-instruments', variants: 'Black, Blue, Red, Green' },
  { id: 117, name: 'Whiteboard Marker', category: 'office-stationery', subCategory: 'writing-instruments', variants: 'Blue, Red, Black, Green' },
  { id: 118, name: 'OHP Marker', category: 'office-stationery', subCategory: 'writing-instruments' },
  { id: 119, name: 'Highlighter', category: 'office-stationery', subCategory: 'writing-instruments', variants: 'Multiple Colors' },
  { id: 120, name: 'Whitener (Correction Fluid)', category: 'office-stationery', subCategory: 'writing-instruments' },

  // Paper & Notebooks
  { id: 121, name: 'A4 Paper', category: 'office-stationery', subCategory: 'paper-notebooks', variants: 'White, Pink, Blue, Green, Yellow, Bond' },
  { id: 122, name: 'A3 Paper', category: 'office-stationery', subCategory: 'paper-notebooks' },
  { id: 123, name: 'Photo Glossy Paper', category: 'office-stationery', subCategory: 'paper-notebooks' },
  { id: 124, name: 'Graph Paper', category: 'office-stationery', subCategory: 'paper-notebooks' },
  { id: 125, name: 'Semilog Paper', category: 'office-stationery', subCategory: 'paper-notebooks' },
  { id: 126, name: 'Carbon Paper', category: 'office-stationery', subCategory: 'paper-notebooks' },
  { id: 127, name: 'Brown Paper Sheet', category: 'office-stationery', subCategory: 'paper-notebooks' },
  { id: 128, name: 'Plastic Sheet', category: 'office-stationery', subCategory: 'paper-notebooks', variants: 'Blue, White' },

  // Registers & Record Books
  { id: 129, name: 'Plain Register', category: 'office-stationery', subCategory: 'registers-books', variants: '144, 240, 250, 384, 480 pages' },
  { id: 130, name: 'Stock Register', category: 'office-stationery', subCategory: 'registers-books', variants: '100, 250, 400, 500, 1000 pages' },
  { id: 131, name: 'Attendance Register', category: 'office-stationery', subCategory: 'registers-books', variants: 'Student, Staff' },
  { id: 132, name: 'Visitor Register', category: 'office-stationery', subCategory: 'registers-books' },
  { id: 133, name: 'Accession Register', category: 'office-stationery', subCategory: 'registers-books' },
  { id: 134, name: 'Dispatch Register', category: 'office-stationery', subCategory: 'registers-books' },
  { id: 135, name: 'Establishment Register', category: 'office-stationery', subCategory: 'registers-books' },
  { id: 136, name: 'Cash Book Register', category: 'office-stationery', subCategory: 'registers-books' },
  { id: 137, name: 'Log Book', category: 'office-stationery', subCategory: 'registers-books' },
  { id: 138, name: 'Notebook / Notepad', category: 'office-stationery', subCategory: 'registers-books' },
  { id: 139, name: 'Writing Pad', category: 'office-stationery', subCategory: 'registers-books' },
  { id: 140, name: 'Duplicate / Triplicate Book', category: 'office-stationery', subCategory: 'registers-books', variants: 'Duplicate, Triplicate' },

  // Files & Folders
  { id: 141, name: 'Box File (Cobra)', category: 'office-stationery', subCategory: 'files-folders' },
  { id: 142, name: 'Plastic File', category: 'office-stationery', subCategory: 'files-folders' },
  { id: 143, name: 'Guard File', category: 'office-stationery', subCategory: 'files-folders' },
  { id: 144, name: 'Index File', category: 'office-stationery', subCategory: 'files-folders' },
  { id: 145, name: 'L-Shape Folder', category: 'office-stationery', subCategory: 'files-folders' },
  { id: 146, name: 'Leather Folder', category: 'office-stationery', subCategory: 'files-folders' },
  { id: 147, name: 'Ring File', category: 'office-stationery', subCategory: 'files-folders' },
  { id: 148, name: 'Button Folder', category: 'office-stationery', subCategory: 'files-folders' },
  { id: 149, name: 'Envelope Holder', category: 'office-stationery', subCategory: 'files-folders' },
  { id: 150, name: 'File Tag', category: 'office-stationery', subCategory: 'files-folders' },
  { id: 151, name: 'File Separator / Divider', category: 'office-stationery', subCategory: 'files-folders' },

  // Adhesives & Tapes
  { id: 152, name: 'Glue Stick', category: 'office-stationery', subCategory: 'adhesives-tapes' },
  { id: 153, name: 'Gum', category: 'office-stationery', subCategory: 'adhesives-tapes', variants: 'Bottle, Tube' },
  { id: 154, name: 'Feviquick / Fevistick', category: 'office-stationery', subCategory: 'adhesives-tapes' },
  { id: 155, name: 'Cello Tape', category: 'office-stationery', subCategory: 'adhesives-tapes', variants: '½ inch, 1 inch, 1.5 inch, 2 inch' },
  { id: 156, name: 'Brown Tape', category: 'office-stationery', subCategory: 'adhesives-tapes', variants: '1 inch, 2 inch' },
  { id: 157, name: 'Double Side Tape', category: 'office-stationery', subCategory: 'adhesives-tapes' },
  { id: 158, name: 'Colour Tape', category: 'office-stationery', subCategory: 'adhesives-tapes' },
  { id: 159, name: 'Tape Dispenser', category: 'office-stationery', subCategory: 'adhesives-tapes' },

  // Office Tools & Accessories
  { id: 160, name: 'Stapler', category: 'office-stationery', subCategory: 'office-tools', variants: 'Small, Large, HD-10D, HD-45' },
  { id: 161, name: 'Stapler Pins', category: 'office-stationery', subCategory: 'office-tools', variants: '24x6, No. 10' },
  { id: 162, name: 'Punch Machine', category: 'office-stationery', subCategory: 'office-tools', variants: 'Single, Double, DP-600, 800mm' },
  { id: 163, name: 'Scissors', category: 'office-stationery', subCategory: 'office-tools', variants: 'Regular, Small, Tailor' },
  { id: 164, name: 'Paper Cutter', category: 'office-stationery', subCategory: 'office-tools' },
  { id: 165, name: 'Scale / Ruler', category: 'office-stationery', subCategory: 'office-tools', variants: 'Steel, Plastic' },
  { id: 166, name: 'Calculator', category: 'office-stationery', subCategory: 'office-tools', variants: 'Casio, Citizen' },
  { id: 167, name: 'Sharpener', category: 'office-stationery', subCategory: 'office-tools' },
  { id: 168, name: 'Eraser', category: 'office-stationery', subCategory: 'office-tools' },
  { id: 169, name: 'Rubber Band', category: 'office-stationery', subCategory: 'office-tools' },
  { id: 170, name: 'Sponge Damper', category: 'office-stationery', subCategory: 'office-tools' },

  // Pins & Clips
  { id: 171, name: 'Office Pins', category: 'office-stationery', subCategory: 'pins-clips', variants: 'All Pin, Push Pin, U Pin, Thumb Pin' },
  { id: 172, name: 'Binder Clip', category: 'office-stationery', subCategory: 'pins-clips', variants: 'Small, Large' },
  { id: 173, name: 'Clip Board', category: 'office-stationery', subCategory: 'pins-clips', variants: 'A4, Exam Size' },

  // Labels & Stickers
  { id: 174, name: 'Label Sticker', category: 'office-stationery', subCategory: 'labels-stickers', variants: 'ST-16, ST-65' },
  { id: 175, name: 'File Tag / Return Slip', category: 'office-stationery', subCategory: 'labels-stickers' },

  // Ink & Refills
  { id: 176, name: 'Whiteboard Marker Ink', category: 'office-stationery', subCategory: 'ink-refills', variants: 'Black, Blue, Green, Red' },
  { id: 177, name: 'Pilot Pen Ink', category: 'office-stationery', subCategory: 'ink-refills' },
  { id: 178, name: 'Stamp Pad & Ink', category: 'office-stationery', subCategory: 'ink-refills' },
  { id: 179, name: 'Sticky Notes / Post-It', category: 'office-stationery', subCategory: 'ink-refills', variants: 'Small, Multi-colour, Post-It' },

  // Presentation & Display
  { id: 180, name: 'White Board', category: 'office-stationery', subCategory: 'presentation-display', variants: '2x3 ft, 3x4 ft' },
  { id: 181, name: 'Notice Board', category: 'office-stationery', subCategory: 'presentation-display', variants: '2x3 ft, 4x3 ft' },
  { id: 182, name: 'OHP Transparency Film', category: 'office-stationery', subCategory: 'presentation-display' },
  { id: 183, name: 'Green Lace (Display Trim)', category: 'office-stationery', subCategory: 'presentation-display' },

  // Envelopes
  { id: 184, name: 'Envelope', category: 'office-stationery', subCategory: 'envelopes', variants: '8x10, 10x12, A3, A4, Small' },

  // Data Storage
  { id: 185, name: 'CD / DVD', category: 'office-stationery', subCategory: 'data-storage', variants: 'CD, DVD, Writex' },

  // Teaching Supplies
  { id: 186, name: 'Chalk (Dustless)', category: 'office-stationery', subCategory: 'teaching-supplies' },
  { id: 187, name: 'Board Duster', category: 'office-stationery', subCategory: 'teaching-supplies', variants: 'Blackboard, Whiteboard' },

  // Accessories
  { id: 188, name: 'Hook', category: 'office-stationery', subCategory: 'stationery-accessories' },
  { id: 189, name: 'Lanyard / I-Card Holder', category: 'office-stationery', subCategory: 'stationery-accessories' },
  { id: 190, name: 'Paper Weight', category: 'office-stationery', subCategory: 'stationery-accessories' },
];

// Helper functions
export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.category === categoryId);
}

export function getProductsBySubCategory(categoryId: string, subCategoryId: string): Product[] {
  return products.filter((p) => p.category === categoryId && p.subCategory === subCategoryId);
}

export function searchProducts(query: string): Product[] {
  const lower = query.toLowerCase().trim();
  if (!lower) return products;
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lower) ||
      (p.variants && p.variants.toLowerCase().includes(lower))
  );
}

export function getProductCount(categoryId?: string): number {
  if (!categoryId) return products.length;
  return products.filter((p) => p.category === categoryId).length;
}
