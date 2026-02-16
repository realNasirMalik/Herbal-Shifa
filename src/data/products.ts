export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  price: string;
  netWeight?: string;
  badges: string[];
  ingredients: string[];
  benefits: string[];
  targetAudience: string[];
  usage: string;
  warning?: string;
  featured: boolean;
  order: number;
  gradient: string;
  iconEmoji: string;
}

export const products: Product[] = [
  {
    slug: 'organic-healing-balm',
    name: 'Organic Healing Balm',
    tagline: 'Pure. Simple. A blessing in a jar.',
    description: 'Our signature Organic Healing Balm is 100% natural, non-toxic, and free from synthetic fragrances, parabens, or preservatives. Every small batch is handcrafted with intention, using therapeutic and pure essential oils.',
    longDescription: `Every small batch is handcrafted with intention, using therapeutic and pure essential oils — nothing more, nothing less. This balm is safe for body, hands, muscles, joints, and blemish-free skin, offering a timeless remedy for joint and muscle soreness that reconnects you to the earth's wisdom and simplicity.

Our Organic Healing Balm is more than just a moisturizer — it is a therapeutic remedy rooted in herbal tradition. Designed for those who seek natural alternatives, this balm harnesses the power of pure essential oils to soothe, heal, and protect.`,
    price: 'Contact for pricing',
    badges: ['Halal', 'Chemical Free', 'Handmade', 'Therapeutic'],
    ingredients: [
      'Organic Beeswax',
      'Coconut Oil',
      'Shea Butter',
      'Therapeutic Essential Oils',
      'Vitamin E Oil',
    ],
    benefits: [
      'Soothes muscle and joint soreness',
      'Safe for body, hands, muscles, and joints',
      'Non-toxic and free from synthetic fragrances',
      'Handcrafted in small batches for quality',
    ],
    targetAudience: ['Athletes', 'People with Pain', 'Nurses', 'Older People'],
    usage: 'Apply a small amount to clean, dry skin. Massage gently into affected areas such as muscles, joints, and hands. Use daily for best results. Store in a cool place.',
    warning: 'For external use only. Avoid contact with eyes. If condition worsens or persists for more than seven days, discontinue use and consult a physician. May cause an allergic reaction in some individuals with sensitive skin; test on a small area before use. Do not apply to wounds or damaged skin. Do not bandage tightly. Keep out of reach of children.',
    featured: true,
    order: 1,
    gradient: 'from-amber-800 via-amber-600 to-yellow-500',
    iconEmoji: '🫙',
  },
  {
    slug: 'moisturizing-skin-cream',
    name: 'Moisturizing Skin Cream',
    tagline: 'Deep hydration for dry, itchy skin.',
    description: 'Our Moisturizing Skin Cream is formulated with high-quality organic ingredients to nourish and soothe dry, itchy skin. Free from harsh chemicals, parabens, and artificial fragrances.',
    longDescription: `Specially crafted for those with dry, itchy, or sensitive skin, our Moisturizing Skin Cream delivers deep, lasting hydration without any harsh chemicals. Made with organic ingredients and essential oils, this cream absorbs beautifully and leaves your skin feeling soft, smooth, and nourished.

Whether you're dealing with seasonal dryness, sensitive skin conditions, or simply want a cleaner skincare option, our cream provides the gentle care your skin deserves.`,
    price: 'Contact for pricing',
    badges: ['Halal', 'Chemical Free', 'Organic', 'Handmade'],
    ingredients: [
      'Shea Butter',
      'Coconut Oil',
      'Organic Beeswax',
      'Vegetable Glycerin',
      'Vitamin E Oil',
      'Organic Essential Oils',
    ],
    benefits: [
      'Deeply moisturizes dry and itchy skin',
      'Free from parabens and artificial fragrances',
      'Gentle enough for sensitive skin',
      'Made with quality organic ingredients',
    ],
    targetAudience: ['Sensitive Skin', 'Older People', 'Nurses', 'Teenagers'],
    usage: 'Apply generously to clean skin, focusing on dry areas. Massage in circular motions until absorbed. Use morning and evening for best results.',
    featured: true,
    order: 2,
    gradient: 'from-sky-700 via-sky-500 to-cyan-400',
    iconEmoji: '🧴',
  },
  {
    slug: 'moisturizing-lotion-bars',
    name: 'Moisturizing Lotion Bars',
    tagline: 'Nourish and hydrate your skin on-the-go.',
    description: '100% Organic chemical-free Lotion Bars! Small batch and handmade with love. Just gently glide over your arms, legs, and hands — the warmth from your body will slightly melt the bar and leave a light layer of lotion on your skin.',
    longDescription: `Lotion bars are a healthier and eco-friendly alternative to traditional lotions. Unlike bottled lotions filled with preservatives, emulsifiers, and unnecessary chemicals, our lotion bars are made with pure natural oils, butters, and waxes — nothing extra.

Since they are water-free and concentrated, lotion bars provide deep nourishment and long-lasting moisture without fillers. Plus, they come in plastic-free packaging like reusable rose gold tin containers, making them a zero-waste option.

Available in two scents: Avocado Cucumber and Lavender. Scents are made from organic essential oils.`,
    price: '$15 + shipping',
    badges: ['Halal', 'Chemical Free', 'Eco-Friendly', 'Handmade'],
    ingredients: [
      'Shea Butter',
      'Cocoa Butter',
      'Organic Beeswax',
      'Vegetable Glycerin',
      'Vitamin E Oil',
      'Organic Essential Oils',
    ],
    benefits: [
      'Deep nourishment and long-lasting moisture',
      'Water-free and concentrated formula',
      'Eco-friendly, plastic-free packaging',
      'Compact and travel-friendly',
      'Available in Avocado Cucumber and Lavender',
    ],
    targetAudience: ['Sensitive Skin', 'Bougie', 'Teenagers', 'Athletes'],
    usage: 'Gently glide the bar over your arms, legs, and hands. The warmth from your body will slightly melt the bar and leave a light layer of lotion on your skin. Comes in a rose gold tin container.',
    featured: true,
    order: 3,
    gradient: 'from-emerald-700 via-emerald-500 to-green-400',
    iconEmoji: '🧈',
  },
  {
    slug: 'natural-lip-balm',
    name: 'Natural Lip Balm with Herbal Tint',
    tagline: 'Treat your lips to the best, naturally.',
    description: 'Luxurious, therapeutic lip balm made with natural, real ingredients. Our lips absorb what we apply, so choosing safe, natural ingredients matters. Free from parabens, petroleum, and synthetic preservatives.',
    longDescription: `Ditch those store-bought lip balms loaded with unnecessary toxins and switch to a luxurious, therapeutic lip balm made with natural, real ingredients. Crafted with clean, simple ingredients, perfect for gifting to loved ones or treating yourself.

Our lips absorb (and ingest!) what we apply, so choosing safe, natural ingredients matters. Many conventional lip balms contain parabens, petroleum, and synthetic preservatives. Our natural lip balm is free from synthetic ingredients, using only organic goodness.

The Acai Blackberry variant offers deep hydration that melts into your lips, locking in moisture all day. The acai and blackberry blend gives a fresh, fruity vibe and antioxidant protection.`,
    price: 'Contact for pricing',
    netWeight: '10ml (0.35 fl oz)',
    badges: ['Halal', 'Chemical Free', 'Organic', 'Handmade'],
    ingredients: [
      'Helianthus Annuus (Sunflower) Seed Oil',
      'Beeswax',
      'Ricinus Communis (Castor) Seed Oil',
      'Persea Americana (Avocado) Seed Oil',
      'Olea Europaea (Olive) Fruit Oil',
      'Cocos Nucifera (Coconut Oil)',
      'Butyrospermum Parkii (Shea Butter)',
      'Vitamin E',
      'Natural Flavor/Scent Sources',
      'Essential Oils and Food-Based Colors',
    ],
    benefits: [
      'Deep hydration that locks in moisture all day',
      'Free from parabens, petroleum, and synthetics',
      'Antioxidant protection from natural ingredients',
      'Perfect for daily use and gifting',
    ],
    targetAudience: ['Teenagers', 'Bougie', 'Sensitive Skin', 'Muslims'],
    usage: 'Scoop a small amount from the tin with a clean finger, then apply liberally to clean, dry lips for instant hydration. Reapply as needed throughout the day, especially after eating or in dry weather. Store in a cool place to maintain smooth texture.',
    featured: false,
    order: 4,
    gradient: 'from-rose-700 via-pink-500 to-rose-400',
    iconEmoji: '💋',
  },
  {
    slug: 'chemical-free-deodorant',
    name: 'Natural Chemical-Free Deodorant',
    tagline: 'Stay fresh, naturally.',
    description: 'Our Natural Chemical-Free Deodorant keeps you fresh all day without the use of aluminum, parabens, or synthetic fragrances. Made with organic ingredients that are gentle on your skin.',
    longDescription: `Say goodbye to harsh chemicals and hello to natural freshness. Our Chemical-Free Deodorant is formulated with organic ingredients that neutralize odor naturally while being gentle on even the most sensitive skin.

Unlike conventional deodorants loaded with aluminum compounds and synthetic fragrances, our formula relies on the natural antibacterial properties of essential oils and the absorbent power of natural ingredients to keep you feeling fresh and confident all day long.`,
    price: 'Contact for pricing',
    badges: ['Halal', 'Chemical Free', 'Natural', 'Handmade'],
    ingredients: [
      'Coconut Oil',
      'Shea Butter',
      'Beeswax',
      'Arrowroot Powder',
      'Baking Soda',
      'Organic Essential Oils',
      'Vitamin E Oil',
    ],
    benefits: [
      'Aluminum-free and paraben-free',
      'Gentle on sensitive skin',
      'Natural odor protection all day',
      'Made with organic ingredients',
    ],
    targetAudience: ['Athletes', 'Sensitive Skin', 'Teenagers', 'Health-Conscious'],
    usage: 'Apply a thin layer to clean, dry underarms. A little goes a long way. Allow a moment to absorb before dressing. Reapply as needed.',
    featured: false,
    order: 5,
    gradient: 'from-violet-700 via-purple-500 to-indigo-400',
    iconEmoji: '🌿',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured).sort((a, b) => a.order - b.order);
}
