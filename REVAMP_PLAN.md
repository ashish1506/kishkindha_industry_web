# Kishkindha Industry - Website Revamp Plan

## Overview

**Goal:** Transform the existing Kishkindha Foods website (food B2B supplier) into Kishkindha Industry (institutional supplies B2B supplier) while retaining all brand styling (colors, fonts, UI/UX patterns).

**What stays the same:**
- Tech stack: Next.js 16, TypeScript, Tailwind CSS v4
- Brand colors: Primary dark green (#1B4332), Gold accent (#D4A847), Background (#FAF8F5)
- Fonts: Playfair Display (headings), Inter (body)
- UI patterns: ScrollProgress, WhatsAppButton, Header/Footer layout, card-hover, btn styles
- Component architecture: App Router, client components where needed
- Contact form with SendGrid integration
- WhatsApp floating button

**What changes:**
- All text content (company name, descriptions, taglines, product data)
- Product catalogue: 5 food categories (36 items) --> 8 institutional supply categories (325 items)
- Products page: complete rebuild with search, filter, sub-category navigation
- Contact form: update business types, product interest options, quantity options
- Navigation: updated for new categories
- Images: remove food product images, use category-level icons/illustrations instead
- SEO metadata

---

## Product Taxonomy (325 Products)

### Category 1: Cleaning Solutions & Chemicals (48 products)
| Sub-Category | Count | Key Products |
|---|---|---|
| Floor Care | 7 | Floor Cleaner, Lizol, Phenyl (1L/5L), Concentrate Phenyle, White Phenyle |
| Disinfectants | 4 | Bleaching Liquid, Bleaching Powder, Hydrochloric Acid, Hypo |
| Glass & Surface | 4 | Glass Cleaner, Colin, Vim Gel, Vim Bar |
| Toilet & Bathroom | 1 | Toilet Cleaner |
| Professional TASKI Range | 7 | TASKI 101, TASKI 103, TASKI D-7, Ternova (1L & 5L variants) |
| R-Series Professional | 14 | R-1 through R-9 (1L & 5L variants) |
| Polishes & Specialty | 4 | D7 Steel Polish, R4 Furniture Polish, Lemon Grass Oil, Shampoo |
| Detergents | 3 | Detergent Powder (110g/500g), Fena Surf |
| Hand Hygiene | 4 | Hand Wash 5L, Hand Soap, Soap Small, Soap Big |
| Specialty | 1 | Thinner |

### Category 2: Cleaning Tools & Equipment (33 products)
| Sub-Category | Count | Key Products |
|---|---|---|
| Brooms & Brushes | 6 | Hard Broom, Soft Broom, Hard Broom Rod, Cob Web Brush, Feather Brush, Toilet Brush |
| Mops & Mopping | 4 | Wet Mop Set, Dry Mop Set, Mope (Pochha), Bucket |
| Dusters & Wipers | 7 | Floor Duster, Table Duster, Yellow Duster, Check Duster, Microfibre, Wiper 24", Kitchen Wiper |
| Scrubbers & Pads | 6 | Nylon, Steel, Steel Wool, Scrubber Pad, Scotch Brite, Plastic Juna |
| Floor Pads | 3 | Black (Stripping), Red (Buffing), White (Polishing) |
| Dustpans & Collection | 4 | Dust Pan, Dust Pan Small, Dust Pan Big, Iron Patti |
| Accessories | 3 | Plastic Mug, Empty Spray Bottle, Wiper Small |

### Category 3: Waste Management (20 products)
| Sub-Category | Count | Key Products |
|---|---|---|
| Garbage Bags - Large (32x42) | 4 | Black, Blue, Red, Yellow |
| Garbage Bags - Small (20x24) | 4 | Black, Blue, Red, Yellow |
| Garbage Bags - Standard | 2 | 19x21, 30x37 |
| Dustbins | 7 | Wheel 120L, Floor 80L, Pair 60L, 65L (4 Color Set), 5L, Paddle 5L, Green |
| Containers | 3 | Plastic Container 250ml, 500ml + general |

### Category 4: Washroom & Hygiene Essentials (17 products)
| Sub-Category | Count | Key Products |
|---|---|---|
| Tissue & Paper | 4 | Toilet Roll, Z Fold Tissue, Face Tissue Box, Tissue Paper |
| Toilet & Urinal Care | 4 | Urinal Cubes, Urinal Jali, Toilet Chock Pump, Naphthalene Bowl |
| Air Freshening | 6 | Room Freshener (spray/refill), Odonil, Diffuser Machine/Oil, Air Jell Pocket |
| Pest Repellent | 2 | Naphthalene Balls, T Light Candle |

### Category 5: Facility Maintenance & Safety (27 products)
| Sub-Category | Count | Key Products |
|---|---|---|
| PPE | 5 | Gloves, Gum Boot, Crocs, Slipper, Goggle |
| Pest Control | 6 | Hit Red/Black, Allout Set/Refill/with Machine, Racket Mosquito |
| Lighting & Electrical | 6 | Torch, Eveready, Duracell, AAA, AA, 9V, HW Cell |
| Hardware & Locks | 3 | Lock Big, Lock Small, Iron Pad Lock |
| Grooming & Personal Care | 7 | Razor, Pesto Razor, Shaving Blade, Trimmer, Nail Cutter, Blade |

### Category 6: Healthcare Supplies (2 products)
| Sub-Category | Count | Key Products |
|---|---|---|
| Medical Accessories | 2 | Medicine Tray Medium, Medicine Tray Big |

### Category 7: Kitchen & Pantry (5 products)
| Sub-Category | Count | Key Products |
|---|---|---|
| Utensils & Dining | 2 | Tableware/Kitchen Ware, Paper Glass 150ml |
| Accessories | 2 | Water Dispenser Tray, Spray Bottle |
| Pantry Supplies | 1 | Coconut/Grape Oil |

### Category 8: Office & Stationery (173 products)
| Sub-Category | Count | Key Products |
|---|---|---|
| Writing Instruments | 33 | Pens (Cello, Luxor, Pilot, DOMS, Pierre Cardin), Pencils, Markers, Highlighters |
| Paper & Notebooks | 17 | A3/A4 reams (white + colored + bond), Glossy, Graph, Semilog, Carbon, Brown, Plastic Sheets |
| Registers & Books | 23 | 144/240/384/480 pg, Stock, Attendance, Visitor, Accession, Dispatch, Cash Book, Log Book, etc. |
| Files & Folders | 12 | Cobra, Plastic, Guard, Index, L-Shape, Leather, Ring File, Button Folder, etc. |
| Adhesives & Tapes | 15 | Glue Stick, Gum, Feviquick, Fevistick, Cello Tape (multiple widths), Brown Tape, Double Side |
| Office Tools | 18 | Staplers, Punch Machines, Scissors, Cutter, Scales, Calculator, Sharpener, Eraser, Rubber Band |
| Pins & Clips | 9 | All Pin, Push Pin, U Pin, Thumb Pin, Binder Clips, Clip Board, Exam Clip Board |
| Labels & Stickers | 4 | Label Sticker ST-16/ST-65, File Tags, Return Slip |
| Ink & Refills | 12 | WB Marker Ink (4 colors), Pilot Ink, Stamp Pad Ink, Sticky/Post-It Pads, Writing Pad |
| Presentation & Display | 8 | White Board (2x3/3x4), Notice Board (2x3/4x3), WB Marker, OHP Film, Green Lace, Whitener |
| Envelopes | 5 | 8x10, 10x12, A3, A4, Small |
| Data Storage | 3 | CD, DVD, Writex CD/DVD |
| Teaching Supplies | 3 | Chalk Dustless, Duster Wooden, Duster Magnetic |
| Accessories | 6 | Hook, Lanyard, I-Card with Dori, Paper Weight, Damper, Color Cello Tape |

---

## Site Architecture (Pages & Routes)

```
/                           Home (revamped hero, category overview, stats, CTA)
/about                      About Us (updated company story & values)
/products                   Product Catalogue (search, filter, browse - THE main page)
/products#[category-id]     Deep-link to specific category section
/why-us                     Why Choose Us (updated differentiators)
/contact                    Contact / Request Quote (updated form fields)
/api/contact                API endpoint (kept as-is, updated email fields)
```

**Navigation Structure:**
```
Home | About Us | Products (dropdown with 8 categories) | Why Choose Us | Contact Us
```

---

## Implementation Plan

### Phase 1: Data Layer & Product Structure
**Files to create/modify:**
- `src/data/products.ts` - Centralized product data (all 325 products with categories, sub-categories, HSN codes, units, sizes)
- `src/data/categories.ts` - Category & sub-category definitions with icons, descriptions, slugs

**Why:** Externalizing data from components makes it reusable across pages (home, products, contact, footer) and easy to maintain. Currently everything is hardcoded in page files.

### Phase 2: Shared Components Update
**Files to modify:**
- `src/components/Header.tsx` - Update nav links, product dropdown (8 categories instead of 5), company name
- `src/components/Footer.tsx` - Update tagline, product links, contact info (phone: +91 9354162565, email: Meenakshi.jss3011@gmail.com), company description
- `src/components/WhatsAppButton.tsx` - Update phone number (9354162565), pre-filled message
- `src/app/layout.tsx` - Update metadata (title, description, OG tags), company name in title template

### Phase 3: Home Page Revamp
**File:** `src/app/page.tsx`

Changes:
- **Hero:** New headline & subtext for institutional supplies. Remove food hero image, use a clean gradient/pattern background or solid with text focus
- **Category Grid:** 8 category cards (icon-based, no photos) with product count badges. Each links to `/products#category-id`
- **Stats Strip:** Update KPIs: "325+ Products", "Pan-India Delivery", "GST Invoiced", "Trusted by Hospitals & Universities"
- **About Preview:** Update company description text
- **Promise Section:** "Quality First", "Reliable Supply Chain", "Competitive Bulk Pricing" (same structure, new text)
- **CTA Banner:** "Need Institutional Supplies? Get a Quote Today"
- **Clients Section (NEW):** Add a "Trusted By" strip showing client names (GLA University, Umkal Healthcare, Park Medi World, Metro Hospital)

### Phase 4: Products Page Rebuild (Most Complex)
**File:** `src/app/products/page.tsx`

This is the core of the revamp. Must handle 325 products gracefully.

**Layout:**
```
[Search Bar - full width, prominent]
[Category Pills / Tabs - horizontal scroll on mobile]
[Active Filters / Breadcrumb]
[Product Count: "Showing X of 325 products"]
-----------------------------------------------
[Sidebar (desktop)]     |  [Product Grid/List]
  - Category tree       |    - Sub-category headers
  - Sub-category links  |    - Product rows (table-style)
                        |    - Each row: Name, Unit, Size
                        |    - "Request Quote" per section
-----------------------------------------------
[CTA: Download Catalogue / Request Full Price List]
```

**Features:**
1. **Search:** Real-time keyword search across product names, filtering results as you type
2. **Category Tabs:** Horizontal scrollable pills at top - click to filter to a category
3. **Sub-Category Sidebar (desktop) / Accordion (mobile):** Nested navigation within selected category
4. **Product Display:** Table/list format (not image cards) - product name, unit, size/packaging in clean rows. Grouped by sub-category with section headers
5. **Product Count Badge:** "Showing 48 of 325 products" updates in real-time
6. **Clear Filters:** One-click reset
7. **Scroll to section:** Hash-based navigation from category pills
8. **Request Quote CTA:** Per category section + floating bottom bar
9. **No individual product images:** Use Lucide icons per category for visual weight (e.g., Droplets for cleaning, Trash2 for waste, Package for stationery, etc.)

**Why table/list instead of cards:**
- 325 products with image cards = slow, cluttered, requires 325 images we don't have
- Table/list format is what B2B buyers expect - scannable, dense, efficient
- Sub-category grouping with collapse/expand keeps it navigable
- Card style reserved for the 8 top-level categories only

### Phase 5: About Page Update
**File:** `src/app/about/page.tsx`

Changes:
- Update "Our Story" - Founded as institutional supply partner, serving hospitals, hotels, universities, government bodies
- Update "Our Values" cards: Quality Assurance, Reliable Supply Chain, Transparent Pricing
- Update "Our Expertise": Bulk Procurement, Quality Checks, Pan-India Logistics, Dedicated Account Management
- Add "Industries We Serve" section: Healthcare, Hospitality, Education, Government, Corporate (with icons)
- Add "Key Clients" section: GLA University, Umkal Healthcare, Park Medi World, Metro Hospital

### Phase 6: Why Choose Us Page Update
**File:** `src/app/why-us/page.tsx`

Changes:
- Update 6 differentiator cards with institutional supply context:
  1. Quality Assured Products
  2. Reliable Supply Chain
  3. Bulk Order Specialists (institutional scale)
  4. Competitive Pricing (transparent, GST invoiced)
  5. Pan-India Delivery
  6. Dedicated Support
- Update trust indicators for B2B institutional context

### Phase 7: Contact Page Update
**File:** `src/app/contact/page.tsx`

Changes:
- Update contact details:
  - Phone: +91 9354162565
  - Email: Meenakshi.jss3011@gmail.com
  - Address: Ground Floor, 271 Block-C, Plot No. 65, Prahladpur Bangar, Prahlad Vihar, Delhi - 110042
  - GSTIN: 07ABFFK0271R1ZX
- Update "Business Type" options: Hospital/Clinic, Hotel/Resort, University/College, Government Office, Corporate Office, School, Restaurant, Industrial Unit, Other
- Replace "Products Interested In" checkboxes with the 8 new categories
- Update "Monthly Requirement" options: remove kg-based, use value-based or general: Small (under 25K), Medium (25K-1L), Large (1L-5L), Bulk (5L+)
- Add GSTIN field for B2B

### Phase 8: API & Email Update
**File:** `src/app/api/contact/route.ts`

Changes:
- Update email template with new product categories
- Update recipient email
- Update from name to "Kishkindha Industry Website"

### Phase 9: Static Assets & SEO
- **Remove:** All food product images from `/public/images/products/` and `/public/images/categories/`
- **Update:** Logos if needed (currently reference logo-full.svg and logo-white.svg)
- **Update:** Hero images - replace food hero with institutional/warehouse imagery or remove in favor of gradient
- **Update:** All metadata, page titles, descriptions for SEO
- **Add:** `/public/images/categories/` with 8 simple category illustration/icon images (optional - can use Lucide icons instead)

---

## File Change Summary

| File | Action | Scope |
|------|--------|-------|
| `src/data/products.ts` | **CREATE** | All 325 products with full taxonomy |
| `src/data/categories.ts` | **CREATE** | 8 categories + sub-categories + metadata |
| `src/app/layout.tsx` | MODIFY | Metadata, title, description |
| `src/app/globals.css` | NO CHANGE | Brand styling preserved |
| `src/app/page.tsx` | MODIFY | Full content rewrite, add clients section |
| `src/app/products/page.tsx` | **REBUILD** | Search, filter, table view, sidebar, 325 products |
| `src/app/about/page.tsx` | MODIFY | Content rewrite, add industries & clients |
| `src/app/why-us/page.tsx` | MODIFY | Content rewrite for institutional context |
| `src/app/contact/page.tsx` | MODIFY | Update contact info, form fields, categories |
| `src/app/api/contact/route.ts` | MODIFY | Update email config |
| `src/components/Header.tsx` | MODIFY | Nav links, dropdown (8 categories), branding |
| `src/components/Footer.tsx` | MODIFY | Links, contact info, tagline, product list |
| `src/components/WhatsAppButton.tsx` | MODIFY | Phone number |
| `src/components/ScrollProgress.tsx` | NO CHANGE | |
| `public/images/` | CLEANUP | Remove food images, optional category icons |

---

## Execution Order

```
Step 1  -->  Create data layer (products.ts, categories.ts)
Step 2  -->  Update layout.tsx (metadata) + shared components (Header, Footer, WhatsApp)
Step 3  -->  Rebuild Products page (biggest change)
Step 4  -->  Update Home page
Step 5  -->  Update About page
Step 6  -->  Update Why Us page
Step 7  -->  Update Contact page + API
Step 8  -->  Clean up images + final QA
```

Each step will be tested with `npm run dev` before proceeding to the next.

---

## Key Design Decisions

1. **No per-product images** - 325 products makes individual images impractical. Use Lucide icons per category and clean table/list layouts instead.

2. **Data externalized** - Products defined in `src/data/products.ts` not hardcoded in pages. Single source of truth used across homepage, products page, contact form, and footer.

3. **Search-first products page** - A prominent search bar is the primary navigation method. Category tabs and sidebar are secondary. B2B buyers know what they want.

4. **Table/list over cards** - Dense, scannable product listing grouped by sub-category. Cards only for the 8 top-level categories.

5. **Existing brand preserved** - Dark green + gold color scheme, Playfair Display + Inter fonts, card-hover effects, button styles all stay. Only content changes.

6. **Progressive disclosure** - Categories -> Sub-categories -> Products. User drills down, never overwhelmed by 325 items at once.

7. **Mobile-first filtering** - Category pills scroll horizontally, sidebar becomes accordion, search always accessible.
