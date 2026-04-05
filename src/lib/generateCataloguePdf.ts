import jsPDF from 'jspdf';
import { categories } from '@/data/categories';
import { products, getProductsByCategory } from '@/data/products';
import type { Category } from '@/data/categories';
import type { Product } from '@/data/products';

// Brand colors (RGB tuples)
const C = {
  primary:  [27, 67, 50]     as const,  // #1B4332
  pLight:   [45, 106, 79]    as const,  // #2D6A4F
  accent:   [212, 168, 71]   as const,  // #D4A847
  bg:       [246, 244, 240]  as const,  // subtle warm gray for rows
  text:     [45, 45, 45]     as const,  // #2D2D2D
  textSec:  [130, 130, 130]  as const,
  white:    [255, 255, 255]  as const,
  line:     [215, 215, 215]  as const,
};

// Layout constants
const PAGE_W = 210;
const PAGE_H = 297;
const M = 18;                       // margin
const W = PAGE_W - M * 2;          // content width
const FOOTER_H = 10;
const ROW_H = 6;                    // product row height
const SUB_H = 7;                    // sub-category header height
const GAP_SUB = 2;                  // gap between sub-category groups

function groupBySub(items: Product[], cat: Category) {
  return cat.subCategories
    .map((s) => ({ name: s.name, items: items.filter((p) => p.subCategory === s.id) }))
    .filter((g) => g.items.length > 0);
}

export function generateCataloguePdf() {
  const doc = new jsPDF('portrait', 'mm', 'a4');
  let y = 0;
  let pageCount = 0;

  /* ── helpers ─────────────────────────────────────────────── */

  function newPage() {
    if (pageCount > 0) doc.addPage();
    pageCount++;
    y = 0;
  }

  function footer() {
    doc.setFillColor(...C.primary);
    doc.rect(0, PAGE_H - FOOTER_H, PAGE_W, FOOTER_H, 'F');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(...C.white);
    doc.text(
      'Kishkindha Industry  |  DLF Industrial Area, Moti Nagar, Delhi 110015  |  +91 9354162565 / 9810201088',
      PAGE_W / 2, PAGE_H - 3.5, { align: 'center' }
    );
  }

  // Returns true if space available, false if page break happened
  function need(h: number) {
    if (y + h > PAGE_H - FOOTER_H - 4) {
      footer();
      newPage();
      y = M;
      return false;
    }
    return true;
  }

  // Draw a filled rect at the current y
  function band(color: readonly [number, number, number], h: number) {
    doc.setFillColor(...color);
    doc.rect(M, y, W, h, 'F');
  }

  /* ── COVER PAGE ──────────────────────────────────────────── */

  newPage();
  doc.setFillColor(...C.primary);
  doc.rect(0, 0, PAGE_W, PAGE_H, 'F');

  // Top accent strip
  doc.setFillColor(...C.accent);
  doc.rect(0, 0, PAGE_W, 3, 'F');

  // Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(38);
  doc.setTextColor(...C.white);
  doc.text('KISHKINDHA', PAGE_W / 2, 90, { align: 'center' });
  doc.text('INDUSTRY', PAGE_W / 2, 106, { align: 'center' });

  // Gold line
  doc.setDrawColor(...C.accent);
  doc.setLineWidth(0.8);
  doc.line(PAGE_W / 2 - 28, 114, PAGE_W / 2 + 28, 114);

  // Subtitle
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(15);
  doc.text('Product Catalogue', PAGE_W / 2, 126, { align: 'center' });

  doc.setFontSize(10);
  doc.setTextColor(...C.accent);
  doc.text(`${products.length} Products  |  ${categories.length} Categories`, PAGE_W / 2, 137, { align: 'center' });

  // Category listing
  doc.setFontSize(9);
  doc.setTextColor(190, 210, 200);
  let cy = 156;
  for (const cat of categories) {
    doc.text(`${cat.name}  (${getProductsByCategory(cat.id).length})`, PAGE_W / 2, cy, { align: 'center' });
    cy += 7;
  }

  // Contact block
  doc.setFontSize(8.5);
  doc.setTextColor(...C.accent);
  doc.text('Property No. 26, Basement, DLF Industrial Area', PAGE_W / 2, 232, { align: 'center' });
  doc.text('Moti Nagar, Delhi - 110015', PAGE_W / 2, 239, { align: 'center' });
  doc.text('+91 9354162565 / +91 9810201088  |  support@kishkindhaindustry.com', PAGE_W / 2, 248, { align: 'center' });
  doc.text('GSTIN: 07ABFFK0271R1ZX', PAGE_W / 2, 255, { align: 'center' });

  // Bottom accent strip
  doc.setFillColor(...C.accent);
  doc.rect(0, PAGE_H - 3, PAGE_W, 3, 'F');

  /* ── PRODUCT CONTENT (continuous flow, no forced page breaks) ── */

  // Start first content page
  newPage();
  y = M;
  const CAT_HEADER_H = 14; // category header height
  const DESC_EXTRA = 6;    // space for description

  for (let ci = 0; ci < categories.length; ci++) {
    const cat = categories[ci];
    const catProducts = getProductsByCategory(cat.id);
    const groups = groupBySub(catProducts, cat);

    // ── Category header ──
    // Need space for header + description + at least one sub-header + 2 rows
    need(CAT_HEADER_H + DESC_EXTRA + SUB_H + ROW_H * 2);

    // Dark green category band (within margins)
    band(C.primary, CAT_HEADER_H);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(...C.white);
    doc.text(cat.name, M + 4, y + 6);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(...C.accent);
    doc.text(`${catProducts.length} products`, M + 4, y + 11);
    y += CAT_HEADER_H;

    // Description (compact)
    y += 1.5;
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7);
    doc.setTextColor(...C.textSec);
    const dl = doc.splitTextToSize(cat.description, W);
    doc.text(dl, M, y + 3);
    y += dl.length * 3 + 3;

    // ── Sub-categories ──
    for (let gi = 0; gi < groups.length; gi++) {
      const g = groups[gi];

      // Ensure header + at least 1 row fits
      need(SUB_H + ROW_H);

      // Sub-category header
      band(C.pLight, SUB_H);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(...C.white);
      doc.text(g.name, M + 3, y + 4.8);
      y += SUB_H;

      // Product rows
      for (let i = 0; i < g.items.length; i++) {
        need(ROW_H);
        const p = g.items[i];

        // Alternating row bg
        if (i % 2 === 0) band(C.bg, ROW_H);

        // Bottom hairline
        doc.setDrawColor(...C.line);
        doc.setLineWidth(0.1);
        doc.line(M, y + ROW_H, M + W, y + ROW_H);

        // Product name (vertically centered)
        const tY = y + ROW_H * 0.65;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(...C.text);
        doc.text(p.name, M + 3, tY);

        // Variants
        if (p.variants) {
          doc.setFontSize(6.5);
          doc.setTextColor(...C.textSec);
          const vt = p.variants.length > 50 ? p.variants.slice(0, 47) + '...' : p.variants;
          doc.text(vt, M + W - 2, tY, { align: 'right' });
        }

        y += ROW_H;
      }

      y += GAP_SUB;
    }

    // Small extra gap between categories (but not after last)
    if (ci < categories.length - 1) y += 3;
  }

  // Footer on every page
  const totalPages = doc.getNumberOfPages();
  for (let i = 2; i <= totalPages; i++) {
    doc.setPage(i);
    footer();
  }

  /* ── save ─────────────────────────────────────────────────── */
  doc.save('Kishkindha_Industry_Product_Catalogue.pdf');
}
