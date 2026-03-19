/* =============================================
   TREASURES COLLECTION — script.js
============================================= */

/* ── Navbar scroll effect ── */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

/* ── Mobile hamburger ── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

/* ── Scroll-fade-in ── */
const fadeEls = document.querySelectorAll(
  '.circle-item, .featured-img-wrap, .featured-text, .why-statement-wrap'
);
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.animation = 'fadeUp 0.6s ease both';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  fadeEls.forEach(el => { el.style.opacity = '0'; io.observe(el); });
}

/* ── Dynamic footer year ── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ── Price formatter ── */
const fmt = (n) => `GH₵ ${Number(n).toLocaleString()}`;

/* =============================================
   PRODUCT DATA
   Used ONLY by index.html (home page circles).
   product.html reads its data from data-products
   attributes in the HTML — no duplication needed.
============================================= */
const PRODUCTS = [
  { id:1,  category:'earpieces',   name:'Celestial Drop Earrings',    material:'18K Gold · Pearl',              price:380,  badge:'Bestseller', desc:'Elegant drop earrings featuring cultured freshwater pearls suspended in 18-karat gold frames.', images:['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80','https://images.unsplash.com/photo-1630734368315-31b742f5d0e6?w=600&q=80'], meta:{Material:'18K Gold',Stone:'Freshwater Pearl',Finish:'High Polish',Weight:'4.2g'} },
  { id:2,  category:'earpieces',   name:'Aurora Hoop Earrings',       material:'14K Gold · Diamond',           price:620,  badge:'New',        desc:'Delicate diamond-encrusted hoops that catch the light with every movement.', images:['https://images.unsplash.com/photo-1599459183200-59c7687a0c70?w=600&q=80','https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80'], meta:{Material:'14K Gold',Stone:'VS1 Diamonds',Finish:'Satin',Weight:'3.8g'} },
  { id:3,  category:'earpieces',   name:'Lotus Stud Earrings',        material:'22K Gold',                     price:245,  badge:null,         desc:'Inspired by the lotus flower, these intricate studs are hand-engraved to perfection.', images:['https://images.unsplash.com/photo-1630734368315-31b742f5d0e6?w=600&q=80','https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80'], meta:{Material:'22K Gold',Stone:'None',Finish:'Engraved',Weight:'2.6g'} },
  { id:4,  category:'earpieces',   name:'Sapphire Teardrop Studs',    material:'18K White Gold · Sapphire',    price:890,  badge:null,         desc:'Deep blue sapphires set in cool white gold. Timeless elegance.', images:['https://images.unsplash.com/photo-1608042314453-ae338d682c93?w=600&q=80','https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80'], meta:{Material:'18K White Gold',Stone:'Blue Sapphire',Finish:'Rhodium Plated',Weight:'3.1g'} },
  { id:5,  category:'earpieces',   name:'Tassel Chandelier Earrings', material:'18K Gold',                     price:460,  badge:'Limited',    desc:'Statement tassel earrings with cascading gold chains for extraordinary evenings.', images:['https://images.unsplash.com/photo-1599459183200-59c7687a0c70?w=600&q=80','https://images.unsplash.com/photo-1630734368315-31b742f5d0e6?w=600&q=80'], meta:{Material:'18K Gold',Stone:'None',Finish:'Matte & Polish',Weight:'6.5g'} },
  { id:6,  category:'neckpieces',  name:'Golden Heirloom Necklace',   material:'18K Gold · VVS Diamond',       price:2200, badge:'Signature',  desc:'Our most iconic piece. Hand-set VVS diamonds along an 18-karat gold link chain.', images:['https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80','https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80'], meta:{Material:'18K Gold',Stone:'VVS Diamonds',Length:'45cm',Weight:'14.8g'} },
  { id:7,  category:'neckpieces',  name:'Pearl Strand Necklace',      material:'18K Gold · South Sea Pearl',   price:1350, badge:'Bestseller', desc:'Lustrous South Sea pearls hand-knotted on silk with an 18-karat gold clasp.', images:['https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80','https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80'], meta:{Material:'18K Gold',Stone:'South Sea Pearl',Length:'50cm',Weight:'32g'} },
  { id:8,  category:'neckpieces',  name:'Emerald Pendant Necklace',   material:'18K Gold · Colombian Emerald', price:3400, badge:'New',        desc:'A breathtaking Colombian emerald suspended from a fine 18-karat gold chain.', images:['https://images.unsplash.com/photo-1574271143515-5cddf8da19be?w=600&q=80','https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80'], meta:{Material:'18K Gold',Stone:'Colombian Emerald',Length:'42cm',Weight:'6.2g'} },
  { id:9,  category:'neckpieces',  name:'Herringbone Chain Necklace', material:'14K Gold',                     price:780,  badge:null,         desc:'A sleek, flat herringbone chain that sits perfectly against the neckline.', images:['https://images.unsplash.com/photo-1573408301185-9519f94815f0?w=600&q=80','https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80'], meta:{Material:'14K Gold',Stone:'None',Length:'45cm',Weight:'9.1g'} },
  { id:10, category:'neckpieces',  name:'Ruby Heart Pendant',         material:'18K Rose Gold · Ruby',         price:1650, badge:'Limited',    desc:'A heart-shaped Burmese ruby framed in delicate 18-karat rose gold.', images:['https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80','https://images.unsplash.com/photo-1574271143515-5cddf8da19be?w=600&q=80'], meta:{Material:'18K Rose Gold',Stone:'Burmese Ruby',Length:'40cm',Weight:'5.4g'} },
  { id:11, category:'wristpieces', name:'Diamond Tennis Bracelet',    material:'18K White Gold · Diamond',     price:4800, badge:'Signature',  desc:'A perfect line of round brilliant diamonds set in 18-karat white gold.', images:['https://images.unsplash.com/photo-1573408301185-9519f94815f0?w=600&q=80','https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80'], meta:{Material:'18K White Gold',Stone:'2.5ct Diamonds',Length:'18cm',Weight:'8.4g'} },
  { id:12, category:'wristpieces', name:'Vintage Charm Bracelet',     material:'18K Gold',                     price:920,  badge:'Bestseller', desc:'A collection of individually crafted gold charms on a curb-link chain.', images:['https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80','https://images.unsplash.com/photo-1573408301185-9519f94815f0?w=600&q=80'], meta:{Material:'18K Gold',Stone:'None',Length:'19cm',Weight:'12.3g'} },
  { id:13, category:'wristpieces', name:'Bangle Stack Set',           material:'14K Gold',                     price:540,  badge:'New',        desc:'Three 14-karat gold bangles — textured, plain, and hammered — worn together or apart.', images:['https://images.unsplash.com/photo-1573408301185-9519f94815f0?w=600&q=80','https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80'], meta:{Material:'14K Gold',Stone:'None',Diameter:'60mm',Weight:'18g (set)'} },
  { id:14, category:'wristpieces', name:'Sapphire Cuff Bracelet',     material:'18K Gold · Sapphire',          price:2650, badge:null,         desc:'A statement cuff featuring graduated sapphires set in 18-karat gold.', images:['https://images.unsplash.com/photo-1608042314453-ae338d682c93?w=600&q=80','https://images.unsplash.com/photo-1573408301185-9519f94815f0?w=600&q=80'], meta:{Material:'18K Gold',Stone:'Blue Sapphires',Width:'22mm',Weight:'21.5g'} },
  { id:15, category:'wristpieces', name:'Gold Rope Bracelet',         material:'22K Gold',                     price:680,  badge:null,         desc:'A classic twisted rope bracelet in 22-karat gold.', images:['https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80','https://images.unsplash.com/photo-1573408301185-9519f94815f0?w=600&q=80'], meta:{Material:'22K Gold',Stone:'None',Length:'20cm',Weight:'11.7g'} },
  { id:16, category:'rings',       name:'Solitaire Diamond Ring',     material:'18K Gold · Diamond',           price:3800, badge:'Bestseller', desc:'A timeless 1-carat round brilliant solitaire diamond on an 18-karat gold band.', images:['https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80','https://images.unsplash.com/photo-1574271143515-5cddf8da19be?w=600&q=80'], meta:{Material:'18K Gold',Stone:'1ct VVS Diamond',Cut:'Round Brilliant',Weight:'3.8g'} },
  { id:17, category:'rings',       name:'Eternity Band',              material:'18K White Gold · Diamond',     price:2100, badge:'New',        desc:'A full eternity band with channel-set round brilliant diamonds.', images:['https://images.unsplash.com/photo-1574271143515-5cddf8da19be?w=600&q=80','https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80'], meta:{Material:'18K White Gold',Stone:'1.8ct Diamonds',Width:'3mm',Weight:'4.2g'} },
  { id:18, category:'rings',       name:'Ruby Cocktail Ring',         material:'18K Gold · Ruby · Diamond',    price:2800, badge:'Signature',  desc:'An oval Burmese ruby surrounded by a halo of brilliant-cut diamonds.', images:['https://images.unsplash.com/photo-1608042314453-ae338d682c93?w=600&q=80','https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80'], meta:{Material:'18K Gold',Stone:'Burmese Ruby + Diamonds',Size:'Available 5–10',Weight:'6.7g'} },
  { id:19, category:'rings',       name:'Twisted Band Ring',          material:'14K Rose Gold',                price:420,  badge:null,         desc:'A beautifully twisted rose gold band that catches light at every angle.', images:['https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80','https://images.unsplash.com/photo-1608042314453-ae338d682c93?w=600&q=80'], meta:{Material:'14K Rose Gold',Stone:'None',Width:'2mm',Weight:'2.8g'} },
  { id:20, category:'rings',       name:'Sapphire Vintage Ring',      material:'18K Gold · Sapphire · Diamond',price:3100, badge:'Limited',    desc:'A vintage-inspired cushion-cut sapphire with milgrain-edged diamond shoulders.', images:['https://images.unsplash.com/photo-1574271143515-5cddf8da19be?w=600&q=80','https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80'], meta:{Material:'18K Gold',Stone:'Sapphire + Diamonds',Style:'Vintage',Weight:'5.9g'} },
  { id:21, category:'anklets',     name:'Figaro Chain Anklet',        material:'14K Gold',                     price:320,  badge:'Bestseller', desc:'A classic figaro-link chain anklet in 14-karat gold.', images:['https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80','https://images.unsplash.com/photo-1573408301185-9519f94815f0?w=600&q=80'], meta:{Material:'14K Gold',Stone:'None',Length:'25cm (adj)',Weight:'3.6g'} },
  { id:22, category:'anklets',     name:'Charm Anklet',               material:'18K Gold',                     price:490,  badge:'New',        desc:'A dainty gold chain with five delicate hanging charms.', images:['https://images.unsplash.com/photo-1573408301185-9519f94815f0?w=600&q=80','https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80'], meta:{Material:'18K Gold',Stone:'None',Length:'23–26cm',Weight:'4.1g'} },
  { id:23, category:'anklets',     name:'Diamond Bezel Anklet',       material:'18K White Gold · Diamond',     price:1100, badge:'Signature',  desc:'Three bezel-set diamonds on a delicate white gold chain.', images:['https://images.unsplash.com/photo-1608042314453-ae338d682c93?w=600&q=80','https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80'], meta:{Material:'18K White Gold',Stone:'0.3ct Diamonds',Length:'24cm',Weight:'3.2g'} },
  { id:24, category:'anklets',     name:'Layered Strand Anklet',      material:'14K Gold',                     price:275,  badge:null,         desc:'Two delicate 14-karat gold chains for an effortless layered look.', images:['https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80','https://images.unsplash.com/photo-1608042314453-ae338d682c93?w=600&q=80'], meta:{Material:'14K Gold',Stone:'None',Length:'22–27cm',Weight:'2.8g'} },
  { id:25, category:'anklets',     name:'Pearl Beaded Anklet',        material:'14K Gold · Pearl',             price:360,  badge:'Limited',    desc:'Freshwater pearl beads with 14-karat gold spacers on a silk cord.', images:['https://images.unsplash.com/photo-1573408301185-9519f94815f0?w=600&q=80','https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80'], meta:{Material:'14K Gold + Silk',Stone:'Freshwater Pearl',Length:'25cm',Weight:'5.3g'} },
];

const COLLECTION_PRODUCTS = {
  earpieces:   PRODUCTS.filter(p => p.category === 'earpieces'),
  neckpieces:  PRODUCTS.filter(p => p.category === 'neckpieces'),
  wristpieces: PRODUCTS.filter(p => p.category === 'wristpieces'),
  rings:       PRODUCTS.filter(p => p.category === 'rings'),
  anklets:     PRODUCTS.filter(p => p.category === 'anklets'),
};

/* =============================================
   BUILD PRODUCT CARD
   Works for both index.html (uses PRODUCTS array)
   and product.html (uses data parsed from DOM).
   p.images[0] or p.img1 are both handled.
============================================= */
function buildProductCard(p, index = 0) {
  const img1 = p.images ? p.images[0] : p.img1;
  const waText = encodeURIComponent(`Hello, I want to buy the ${p.name}`);
  const waLink = `https://wa.me/233203213512?text=${waText}`;
  return `
    <div class="product-card" style="animation-delay:${index * 0.07}s">
      <div class="pc-img">
        <img src="${img1}" alt="${p.name}" loading="lazy" />
        ${p.badge ? `<span class="pc-badge">${p.badge}</span>` : ''}
      </div>
      <div class="pc-body">
        <p class="pc-name">${p.name}</p>
        <p class="pc-mat">${p.material}</p>
        <div class="pc-footer">
          <span class="pc-price">${fmt(p.price)}</span>
        </div>
        <a href="${waLink}" class="pc-buy" target="_blank" rel="noopener">Buy Now</a>
      </div>
    </div>`;
}

/* =============================================
   INDEX.HTML — Home page circles
============================================= */
const circleItemsHome = document.querySelectorAll(
  '#collections .circle-item'   // only home page has #collections
);
const productsRevealHome = document.getElementById('productsReveal');
const productsGridHome   = document.getElementById('productsGrid');
const revealTitleHome    = document.getElementById('revealTitle');
const closeRevealHome    = document.getElementById('closeReveal');

let activeCollectionHome = null;

if (circleItemsHome.length && productsRevealHome) {
  circleItemsHome.forEach(item => {
    item.addEventListener('click', () => {
      const key = item.dataset.collection;
      if (item.classList.contains('active') && activeCollectionHome === key) {
        item.classList.remove('active');
        productsRevealHome.classList.remove('visible');
        activeCollectionHome = null;
        return;
      }
      circleItemsHome.forEach(ci => ci.classList.remove('active'));
      item.classList.add('active');
      activeCollectionHome = key;
      const prods = COLLECTION_PRODUCTS[key] || [];
      revealTitleHome.textContent = item.querySelector('.circle-label').textContent;
      productsGridHome.innerHTML = prods.map((p, i) => buildProductCard(p, i)).join('');
      productsRevealHome.classList.add('visible');
      setTimeout(() => productsRevealHome.scrollIntoView({ behavior:'smooth', block:'start' }), 100);
      wireAddButtons(productsGridHome);
      wireBuyButtons(productsGridHome);
    });
  });
  closeRevealHome && closeRevealHome.addEventListener('click', () => {
    productsRevealHome.classList.remove('visible');
    circleItemsHome.forEach(ci => ci.classList.remove('active'));
    activeCollectionHome = null;
  });
}

/* =============================================
   PRODUCT.HTML — Collections page
   Reads product data from data-products attr
   in each circle-item. "View All" shows all.
============================================= */
const shopCircleItems = document.querySelectorAll('.shop-page .circle-item');
const shopReveal      = document.getElementById('productsReveal');
const shopGrid        = document.getElementById('productsGrid');
const shopRevealTitle = document.getElementById('revealTitle');
const shopCloseReveal = document.getElementById('closeReveal');
const showAllBtn      = document.getElementById('showAllBtn');

let activeShopCollection = null;

/* Parse all products from all circles on this page */
function getAllShopProducts() {
  const all = [];
  shopCircleItems.forEach(item => {
    try {
      const prods = JSON.parse(item.dataset.products || '[]');
      const cat   = item.dataset.collection;
      prods.forEach(p => { p.category = cat; all.push(p); });
    } catch(e) {}
  });
  return all;
}

function renderShopProducts(products, title) {
  if (!shopGrid) return;
  shopRevealTitle.textContent = title;
  shopGrid.innerHTML = products.map((p, i) => buildProductCard(p, i)).join('');
  shopReveal.classList.add('visible');
  setTimeout(() => shopReveal.scrollIntoView({ behavior:'smooth', block:'start' }), 100);
  wireAddButtons(shopGrid, true);
  wireBuyButtons(shopGrid, true);
}

if (shopCircleItems.length && shopReveal) {

  /* Circle clicks */
  shopCircleItems.forEach(item => {
    item.addEventListener('click', () => {
      const key = item.dataset.collection;
      if (item.classList.contains('active') && activeShopCollection === key) {
        item.classList.remove('active');
        shopReveal.classList.remove('visible');
        activeShopCollection = null;
        return;
      }
      shopCircleItems.forEach(ci => ci.classList.remove('active'));
      item.classList.add('active');
      activeShopCollection = key;
      let prods = [];
      try { prods = JSON.parse(item.dataset.products || '[]'); } catch(e) {}
      prods.forEach(p => { p.category = key; });
      renderShopProducts(prods, item.querySelector('.circle-label').textContent);
    });
  });

  /* View All button */
  if (showAllBtn) {
    showAllBtn.addEventListener('click', () => {
      shopCircleItems.forEach(ci => ci.classList.remove('active'));
      activeShopCollection = null;
      renderShopProducts(getAllShopProducts(), 'All Collections');
    });
  }

  /* Auto-reveal all collections when URL contains #view-all */
  if (window.location.hash === '#view-all') {
    renderShopProducts(getAllShopProducts(), 'All Collections');
  }

  /* Close */
  shopCloseReveal && shopCloseReveal.addEventListener('click', () => {
    shopReveal.classList.remove('visible');
    shopCircleItems.forEach(ci => ci.classList.remove('active'));
    activeShopCollection = null;
  });
}