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
   PRODUCT DATA  (used by index.html circles)
   product.html reads from data-products in HTML.

   Replace each src value with your own image:
   e.g.  src: 'images/my-earring.jpg'
============================================= */
const PRODUCTS = [
  { id:1,  category:'earpieces',   name:'Celestial Drop Earrings',    material:'18K Gold · Pearl',              price:380,  badge:'Bestseller', src:'images/earrings-celestial.jpg',  weight:'4.2g' },
  { id:2,  category:'earpieces',   name:'Aurora Hoop Earrings',       material:'14K Gold · Diamond',            price:620,  badge:'New',        src:'images/earrings-aurora.jpg',      weight:'3.8g' },
  { id:3,  category:'earpieces',   name:'Lotus Stud Earrings',        material:'22K Gold',                      price:245,  badge:null,         src:'images/earrings-lotus.jpg',       weight:'2.6g' },
  { id:4,  category:'earpieces',   name:'Sapphire Teardrop Studs',    material:'18K White Gold · Sapphire',     price:890,  badge:null,         src:'images/earrings-sapphire.jpg',    weight:'3.1g' },
  { id:5,  category:'earpieces',   name:'Tassel Chandelier Earrings', material:'18K Gold',                      price:460,  badge:'Limited',    src:'images/earrings-tassel.jpg',      weight:'6.5g' },
  { id:6,  category:'neckpieces',  name:'Golden Heirloom Necklace',   material:'18K Gold · VVS Diamond',        price:2200, badge:'Signature',  src:'images/necklace-heirloom.jpg',   length:'45cm', weight:'14.8g' },
  { id:7,  category:'neckpieces',  name:'Pearl Strand Necklace',      material:'18K Gold · South Sea Pearl',    price:1350, badge:'Bestseller', src:'images/necklace-pearl.jpg',      length:'50cm', weight:'32g' },
  { id:8,  category:'neckpieces',  name:'Emerald Pendant Necklace',   material:'18K Gold · Colombian Emerald',  price:3400, badge:'New',        src:'images/necklace-emerald.jpg',    length:'42cm', weight:'6.2g' },
  { id:9,  category:'neckpieces',  name:'Herringbone Chain Necklace', material:'14K Gold',                      price:780,  badge:null,         src:'images/necklace-herringbone.jpg',length:'45cm', weight:'9.1g' },
  { id:10, category:'neckpieces',  name:'Ruby Heart Pendant',         material:'18K Rose Gold · Ruby',          price:1650, badge:'Limited',    src:'images/necklace-ruby.jpg',       length:'40cm', weight:'5.4g' },
  { id:11, category:'wristpieces', name:'Diamond Tennis Bracelet',    material:'18K White Gold · Diamond',      price:4800, badge:'Signature',  src:'images/bracelet-tennis.jpg',     length:'18cm', weight:'8.4g' },
  { id:12, category:'wristpieces', name:'Vintage Charm Bracelet',     material:'18K Gold',                      price:920,  badge:'Bestseller', src:'images/bracelet-charm.jpg',      length:'19cm', weight:'12.3g' },
  { id:13, category:'wristpieces', name:'Bangle Stack Set',           material:'14K Gold',                      price:540,  badge:'New',        src:'images/bracelet-bangle.jpg',     weight:'18g' },
  { id:14, category:'wristpieces', name:'Sapphire Cuff Bracelet',     material:'18K Gold · Sapphire',           price:2650, badge:null,         src:'images/bracelet-sapphire.jpg',   weight:'21.5g' },
  { id:15, category:'wristpieces', name:'Gold Rope Bracelet',         material:'22K Gold',                      price:680,  badge:null,         src:'images/bracelet-rope.jpg',       length:'20cm', weight:'11.7g' },
  { id:16, category:'rings',       name:'Solitaire Diamond Ring',     material:'18K Gold · Diamond',            price:3800, badge:'Bestseller', src:'images/ring-solitaire.jpg',      weight:'3.8g' },
  { id:17, category:'rings',       name:'Eternity Band',              material:'18K White Gold · Diamond',      price:2100, badge:'New',        src:'images/ring-eternity.jpg',       weight:'4.2g' },
  { id:18, category:'rings',       name:'Ruby Cocktail Ring',         material:'18K Gold · Ruby · Diamond',     price:2800, badge:'Signature',  src:'images/ring-ruby.jpg',           weight:'6.7g' },
  { id:19, category:'rings',       name:'Twisted Band Ring',          material:'14K Rose Gold',                 price:420,  badge:null,         src:'images/ring-twisted.jpg',        weight:'2.8g' },
  { id:20, category:'rings',       name:'Sapphire Vintage Ring',      material:'18K Gold · Sapphire · Diamond', price:3100, badge:'Limited',    src:'images/ring-sapphire.jpg',       weight:'5.9g' },
  { id:21, category:'anklets',     name:'Figaro Chain Anklet',        material:'14K Gold',                      price:320,  badge:'Bestseller', src:'images/anklet-figaro.jpg',       length:'25cm',    weight:'3.6g' },
  { id:22, category:'anklets',     name:'Charm Anklet',               material:'18K Gold',                      price:490,  badge:'New',        src:'images/anklet-charm.jpg',        length:'23-26cm', weight:'4.1g' },
  { id:23, category:'anklets',     name:'Diamond Bezel Anklet',       material:'18K White Gold · Diamond',      price:1100, badge:'Signature',  src:'images/anklet-diamond.jpg',      length:'24cm',    weight:'3.2g' },
  { id:24, category:'anklets',     name:'Layered Strand Anklet',      material:'14K Gold',                      price:275,  badge:null,         src:'images/anklet-layered.jpg',      length:'22-27cm', weight:'2.8g' },
  { id:25, category:'anklets',     name:'Pearl Beaded Anklet',        material:'14K Gold · Pearl',              price:360,  badge:'Limited',    src:'images/anklet-pearl.jpg',        length:'25cm',    weight:'5.3g' },
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
   p.src  = local image path  e.g. images/foo.jpg
   p.img1 = fallback (legacy)
   Shows weight/length tags where available.
============================================= */
function buildProductCard(p, index = 0) {
  const imgSrc = p.src || p.img1 || '';
  
  // 1. Build a detailed descriptive text
  // We use %0A for line breaks to make it look organized in WhatsApp
  const message = `Hello! I'm interested in buying this item:
  
*Product:* ${p.name}
*Price:* ${fmt(p.price)}
*Material:* ${p.material || 'N/A'}
${p.length ? `*Length:* ${p.length}%0A` : ''}${p.weight ? `*Weight:* ${p.weight}%0A` : ''}
*Product Image:* ${window.location.origin}/${imgSrc}`;

  // 2. Encode the text for the URL
  const waText = encodeURIComponent(message);
  const waLink = `https://wa.me/233203213512?text=${waText}`;

  const tags = [];
  if (p.length) tags.push(`<span class="pc-tag">${p.length}</span>`);
  if (p.weight) tags.push(`<span class="pc-tag">${p.weight}</span>`);
  const tagsHtml = tags.length ? `<div class="pc-tags">${tags.join('')}</div>` : '';

  return `
    <div class="product-card" style="animation-delay:${index * 0.07}s">
      <div class="pc-img">
        <img src="${imgSrc}" alt="${p.name}" loading="lazy" />
        ${p.badge ? `<span class="pc-badge">${p.badge}</span>` : ''}
      </div>
      <div class="pc-body">
        <p class="pc-name">${p.name}</p>
        <p class="pc-mat">${p.material}</p>
        ${tagsHtml}
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
const circleItemsHome    = document.querySelectorAll('#collections .circle-item');
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
      productsGridHome.innerHTML  = prods.map((p, i) => buildProductCard(p, i)).join('');
      productsRevealHome.classList.add('visible');
      setTimeout(() => productsRevealHome.scrollIntoView({ behavior:'smooth', block:'start' }), 100);
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
}

if (shopCircleItems.length && shopReveal) {

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

  if (showAllBtn) {
    showAllBtn.addEventListener('click', () => {
      shopCircleItems.forEach(ci => ci.classList.remove('active'));
      activeShopCollection = null;
      renderShopProducts(getAllShopProducts(), 'All Collections');
    });
  }

  if (window.location.hash === '#view-all') {
    renderShopProducts(getAllShopProducts(), 'All Collections');
  }

  shopCloseReveal && shopCloseReveal.addEventListener('click', () => {
    shopReveal.classList.remove('visible');
    shopCircleItems.forEach(ci => ci.classList.remove('active'));
    activeShopCollection = null;
  });
}