'use strict';

// RX CLOTHS local learning catalogue. Prices and stock are demonstration data;
// this file is not sent to Supabase.
window.RXProductData = {
  mode: 'local-demo',
  categories: {
    men: ['Shirts', 'T-Shirts', 'Jeans', 'Trousers & Pants', 'Jackets', 'Winter Wear'],
    women: ['Tops', 'T-Shirts', 'Shirts', 'Dresses', 'Jeans', 'Trousers', 'Skirts', 'Jackets', 'Coats', 'Knitwear'],
    kids: ['T-Shirts', 'Shirts', 'Tops', 'Dresses', 'Jeans', 'Skirts', 'Hoodies', 'Jackets', 'Sweatshirts']
  },
  menuGroups: {
    men: [
      { title: 'Shirts', items: ['Boxy Fit Shirts', 'Formal Shirts', 'Linen Shirts'] },
      { title: 'T-Shirts', items: ['Boxy Fit T-Shirts', 'Oversized T-Shirts', 'Regular Fit T-Shirts', 'Polo T-Shirts'] },
      { title: 'Jeans', items: ['Baggy Fit Jeans', 'Bootcut Jeans', 'Straight Fit Jeans'] },
      { title: 'Trousers & Pants', items: ['Straight Fit Trousers', 'Relaxed Fit Trousers'] },
      { title: 'Jackets', items: ['Denim Jackets', 'Leather Jackets'] },
      { title: 'Winter Wear', items: ['Hoodies', 'Sweaters', 'Sweatshirts'] }
    ],
    women: [
      { title: 'Clothing', items: ['Tops', 'T-Shirts', 'Shirts', 'Dresses', 'Jeans', 'Trousers', 'Skirts'] },
      { title: 'Layers & more', items: ['Jackets', 'Coats', 'Knitwear'] }
    ],
    kids: [
      { title: 'Clothing', items: ['T-Shirts', 'Shirts', 'Tops', 'Dresses', 'Jeans', 'Skirts'] },
      { title: 'Seasonal & occasion', items: ['Hoodies', 'Jackets', 'Sweatshirts'] }
    ]
  },
  products: [
    {
      id: 'rx-men-overshirt',
      audience: 'men',
      category: 'Shirts',
      subcategory: 'Boxy Fit Shirts',
      name: 'Dark Green Striped Shirt',
      description: 'A dark green short-sleeve shirt with fine stripes and a large back graphic.',
      price: 1499,
      createdAt: '2026-10-10',
      colors: ['Olive', 'Sand'],
      sizes: ['S', 'M', 'L', 'XL'],
      variants: [
        { color: 'Olive', size: 'S', stock: 4 }, { color: 'Olive', size: 'M', stock: 6 },
        { color: 'Olive', size: 'L', stock: 3 }, { color: 'Olive', size: 'XL', stock: 0 },
        { color: 'Sand', size: 'S', stock: 2 }, { color: 'Sand', size: 'M', stock: 5 },
        { color: 'Sand', size: 'L', stock: 4 }, { color: 'Sand', size: 'XL', stock: 1 }
      ],
      images: [
        { src: 'images/men cloths/SHIRT/BOXY FIT SHIRT/Dark green striped shirt.jpg', alt: 'Dark green striped shirt' }
      ]
    },
    {
      id: 'rx-men-cotton-tee',
      audience: 'men',
      category: 'T-Shirts',
      subcategory: 'Regular Fit T-Shirts',
      name: 'Everyday Slate T-shirt',
      description: 'A slate-coloured short-sleeve T-shirt with a crew neckline.',
      price: 899,
      createdAt: '2026-10-06',
      colors: ['Ivory', 'Charcoal'],
      sizes: ['S', 'M', 'L', 'XL'],
      variants: [
        { color: 'Ivory', size: 'S', stock: 7 }, { color: 'Ivory', size: 'M', stock: 8 },
        { color: 'Ivory', size: 'L', stock: 5 }, { color: 'Ivory', size: 'XL', stock: 3 },
        { color: 'Charcoal', size: 'S', stock: 4 }, { color: 'Charcoal', size: 'M', stock: 6 },
        { color: 'Charcoal', size: 'L', stock: 0 }, { color: 'Charcoal', size: 'XL', stock: 2 }
      ],
      images: [
        { src: 'images/men cloths/T-SHIRT/REGULAR FIT T-SHIRT/Cotton On Men - Everyday Fit T-Shirt - Slate stone.jpg', alt: 'Slate-coloured short-sleeve T-shirt' }
      ]
    },
    {
      id: 'rx-men-straight-jeans',
      audience: 'men',
      category: 'Jeans',
      subcategory: 'Straight Fit Jeans',
      name: 'Straight-Leg Denim',
      description: 'Blue jeans with a straight-leg shape and front pockets.',
      price: 1999,
      createdAt: '2026-09-28',
      colors: ['Mid blue', 'Dark indigo'],
      sizes: ['30', '32', '34', '36'],
      variants: [
        { color: 'Mid blue', size: '30', stock: 2 }, { color: 'Mid blue', size: '32', stock: 5 },
        { color: 'Mid blue', size: '34', stock: 4 }, { color: 'Mid blue', size: '36', stock: 1 },
        { color: 'Dark indigo', size: '30', stock: 3 }, { color: 'Dark indigo', size: '32', stock: 0 },
        { color: 'Dark indigo', size: '34', stock: 2 }, { color: 'Dark indigo', size: '36', stock: 2 }
      ],
      images: [
        { src: 'images/men cloths/JEANS/STRAIGHT FIT JEAN/Men\'s Casual Loose Fit Straight Leg Jeans With Pockets.jpg', alt: 'Blue straight-leg jeans with pockets' }
      ]
    },
    {
      id: 'rx-men-knit-polo',
      audience: 'men',
      category: 'T-Shirts',
      subcategory: 'Regular Fit T-Shirts',
      name: 'Raglan Short-Sleeve T-shirt',
      description: 'A light neutral T-shirt with darker raglan sleeves and a crew neckline.',
      price: 1099,
      createdAt: '2026-09-18',
      colors: ['Stone', 'Deep green'],
      sizes: ['S', 'M', 'L', 'XL'],
      variants: [
        { color: 'Stone', size: 'S', stock: 2 }, { color: 'Stone', size: 'M', stock: 4 },
        { color: 'Stone', size: 'L', stock: 3 }, { color: 'Stone', size: 'XL', stock: 1 },
        { color: 'Deep green', size: 'S', stock: 3 }, { color: 'Deep green', size: 'M', stock: 5 },
        { color: 'Deep green', size: 'L', stock: 0 }, { color: 'Deep green', size: 'XL', stock: 2 }
      ],
      images: [
        { src: 'images/men cloths/T-SHIRT/REGULAR FIT T-SHIRT/Next REGULAR FIT - SMART SOFT TOUCH HEAVYWEIGHT T-SHIRT _ - T-shirt basic - neutral raglan.jpg', alt: 'Neutral short-sleeve T-shirt' }
      ]
    },
    {
      id: 'rx-women-midi-dress',
      audience: 'women',
      category: 'Dresses',
      name: 'Sky Floral Dress',
      subcategory: 'Floral Dresses',
      description: 'A pale blue floral dress with puff sleeves and a gathered hem.',
      price: 2299,
      createdAt: '2026-10-11',
      colors: ['Olive', 'Black'],
      sizes: ['XS', 'S', 'M', 'L'],
      variants: [
        { color: 'Olive', size: 'XS', stock: 2 }, { color: 'Olive', size: 'S', stock: 4 },
        { color: 'Olive', size: 'M', stock: 3 }, { color: 'Olive', size: 'L', stock: 0 },
        { color: 'Black', size: 'XS', stock: 1 }, { color: 'Black', size: 'S', stock: 3 },
        { color: 'Black', size: 'M', stock: 4 }, { color: 'Black', size: 'L', stock: 2 }
      ],
      images: [
        { src: 'images/women cloth/CLOTHING/DRESSES/Sky Blossom Floral Midi Dress.jpg', alt: 'Floral-print midi dress' }
      ]
    },
    {
      id: 'rx-women-linen-top',
      audience: 'women',
      category: 'Tops',
      name: 'Mint Floral Puff-Sleeve Top',
      subcategory: 'Puff-Sleeve Tops',
      description: 'A mint-green floral top with puff sleeves and a shaped bodice.',
      price: 999,
      createdAt: '2026-10-04',
      colors: ['Ivory', 'Terracotta'],
      sizes: ['XS', 'S', 'M', 'L'],
      variants: [
        { color: 'Ivory', size: 'XS', stock: 2 }, { color: 'Ivory', size: 'S', stock: 5 },
        { color: 'Ivory', size: 'M', stock: 5 }, { color: 'Ivory', size: 'L', stock: 2 },
        { color: 'Terracotta', size: 'XS', stock: 1 }, { color: 'Terracotta', size: 'S', stock: 4 },
        { color: 'Terracotta', size: 'M', stock: 3 }, { color: 'Terracotta', size: 'L', stock: 0 }
      ],
      images: [
        { src: 'images/women cloth/CLOTHING/TOPS/Mint Green Puff Top.jpg', alt: 'Mint-green puff-sleeve top' }
      ]
    },
    {
      id: 'rx-women-wide-trouser',
      audience: 'women',
      category: 'Trousers',
      name: 'Relaxed Wide-Leg Trouser',
      subcategory: 'Wide-Leg Trousers',
      description: 'Brown trousers with a wide-leg shape.',
      price: 1699,
      createdAt: '2026-09-29',
      colors: ['Charcoal', 'Sand'],
      sizes: ['XS', 'S', 'M', 'L'],
      variants: [
        { color: 'Charcoal', size: 'XS', stock: 2 }, { color: 'Charcoal', size: 'S', stock: 4 },
        { color: 'Charcoal', size: 'M', stock: 3 }, { color: 'Charcoal', size: 'L', stock: 1 },
        { color: 'Sand', size: 'XS', stock: 0 }, { color: 'Sand', size: 'S', stock: 3 },
        { color: 'Sand', size: 'M', stock: 4 }, { color: 'Sand', size: 'L', stock: 2 }
      ],
      images: [
        { src: 'images/women cloth/CLOTHING/TROUSERS/Brown Wide-Leg Trousers.jpg', alt: 'Brown wide-leg trousers' }
      ]
    },
    {
      id: 'rx-women-poplin-blouse',
      audience: 'women',
      category: 'Blouses',
      name: 'White Bow-Print Shirt',
      subcategory: 'Bow-Print Shirts',
      description: 'A white collared shirt with a small bow print.',
      price: 1399,
      createdAt: '2026-09-20',
      colors: ['White', 'Sky blue'],
      sizes: ['XS', 'S', 'M', 'L'],
      variants: [
        { color: 'White', size: 'XS', stock: 3 }, { color: 'White', size: 'S', stock: 4 },
        { color: 'White', size: 'M', stock: 4 }, { color: 'White', size: 'L', stock: 2 },
        { color: 'Sky blue', size: 'XS', stock: 1 }, { color: 'Sky blue', size: 'S', stock: 3 },
        { color: 'Sky blue', size: 'M', stock: 0 }, { color: 'Sky blue', size: 'L', stock: 2 }
      ],
      images: [
        { src: 'images/women cloth/CLOTHING/SHIRTS/White Bow Shirt.jpg', alt: 'White collared shirt with a bow detail' }
      ]
    },
  ]
};

const kidsImageGroups = [
  ['Dresses', 'CLOTHING/DRESSES', [
    '(6) Instagram.jpg',
    '2pcs set childrens baby casual collared contrast….jpg',
    '892135007456300528.jpg',
    '933934041499270789.jpg',
    'Conjunto para niño.jpg',
    'kids-casual-set.jpg',
    'Shein 2pcs set.jpg',
    'SHEIN 2pcs_Set Unisex Baby Boy_Girl Casual Cute Striped Short Sleeve T-Shirt And Denim Shorts Set, Baby Outfit Sets, Streetwear, Spring_Summer.jpg',
    'Trendy Baby Dress.jpg',
    'Trendy Unisex Baby Embroidered Tee & Denim Shorts Set 🧸👖 _ Casual.jpg'
  ]],
  ['Jeans', 'CLOTHING/JEANS', [
    '1141803311762040519.jpg',
    '447404544254392155.jpg',
    '460844974390200556.jpg',
    '843791680204907652.jpg',
    'Jeans.jpg',
    'KIDSCOOL SPACE Baby Little Big Boys Shorts,Girls Ribbed Elastic Waist Summer Half Pants Cargo Jeans.jpg',
    'Shop Trendy Korean Clothing Online at KKAMI_nl - Page 3.jpg',
    'Sonbahar kış erkek pantolon moda kot baskılı mektup Patchwork çocuk giyim kalınlaşmak sıcak kot pantolon 4 5 6 7 8 9 yıl erkek - AliExpress 1501.jpg',
    'View All _ ZARA United States.jpg',
    "Women's & Men's Clothing, Shop Online Fashion.jpg"
  ]],
  ['Skirts', 'CLOTHING/SKIRTS', [
    '626352260670044117.jpg',
    'Apricot Preppy Suede Plain Pleated Embellished….jpg',
    'Boden Clothing for Women and Children.jpg',
    'Cotton On Kids - Frill Denim Skirt - Balmoral Black  Size - 3-4 Women.jpg',
    'Girls Bow Front Striped Skirt _ SHEIN USA.jpg',
    'Girls’ Skirts & Skorts.jpg',
    'Jupe à motif - Enfant fille.jpg',
    'Look at this Chocolate.jpg',
    "Mayoral Kids' Clothing.jpg",
    "Otter Avenue Clothes  _ Carter's.jpg"
  ]],
  ['T-Shirts', 'CLOTHING/T-SHIRTS', [
    '1059471881123434733.jpg',
    '121175046221131918.jpg',
    'Boden Clothing for Women and Children.jpg',
    'Boys Clothes & Pajamas _ Sizes 2-12 _ Hanna Andersson.jpg',
    "Boys' T Shirts _ ZARA Ireland.jpg",
    'Buy Blue_Green_Yellow Digger - Manica corta - T-shirt a blocchi di colore (3mesi -7anni) (3mesi -7anni) da Next Italy.jpg',
    'Camisa de colores.jpg',
    'Once Kids on Instagram_ _Vintage Gymboree Rainbow.jpg',
    'Shop Kids Clothing _ Target Australia.jpg',
    'ZARA United States _ New Collection Online.jpg'
  ]],
  ['Tops', 'CLOTHING/TOPS', [
    '512988213826611219.jpg',
    '757238124887842719.jpg',
    '865817097120791386.jpg',
    '885379607990356980.jpg',
    '987343918314760396.jpg',
    'BLUSA VOLANTES CUADRO VICHY.jpg',
    'Embroidery Long Sleeve Children Shirts Cotton Girls Blouse for Kids Spring Cute Toddler Lace Tops Girls Clothing for 12M-8Y.jpg',
    'Flutter-Sleeve Tie-Back Matching Print Top for….jpg',
    'STRIPED DENIM TOP.jpg',
    'Vestido Aurora.jpg'
  ]],
  ['Hoodies', 'Seasonal & occasion/HODDIES', [
    '1127377719235963867.jpg',
    '440438038578850923.jpg',
    '505599495673941705.jpg',
    '894949757185518818.jpg',
    '978477456575601016.jpg',
    'Lefties  UAE - Dubai_Sharjah_Ajman_UAQ_Fujairah _ Fashion for woman, man, kids and babies.jpg',
    'Our extra-soft hoodie was made for mischievous….jpg',
    'SHEIN Toddler Boys Letter Patched Colorblock Hoodie.jpg',
    'Special Prices Collection _ ZARA Hungary.jpg',
    "_Keep your little one cozy with our Children's….jpg"
  ]],
  ['Jackets', 'Seasonal & occasion/JECKETS', [
    '116530709107069423.jpg',
    '527202700142538415.jpg',
    '668925350943070543.jpg',
    '714383559665071033.jpg',
    '772719248582214829.jpg',
    'Color Block Puffer Jacket, Sherpa Lined Hood, Olive Beige Tan Kids Outerwear.jpg',
    'Corduroy jacket Sherpa lined! Perfect for toddler boys or toddler girls.jpg',
    'natureza viva - denim industry - infantil meninos.jpg',
    'Toddler Girls Zip Up Flap Pocket Teddy Panel….jpg',
    'Young Girl Solid Color Front Button Long Sleeve Jacket, Autumn_Winter.jpg'
  ]],
  ['Sweatshirts', 'Seasonal & occasion/SWEATSHIRTS', [
    "1½ - 6 Years _ Boy Baby Boys' Clothes _ ZARA Spain.jpg",
    '363736107426540874.jpg',
    '543950461264376117.jpg',
    '605593481132196827.jpg',
    "Baby Boys' Sweatshirt _ ZARA United States.jpg",
    'Colour block printed sweatshirt - Sweatshirts….jpg',
    'Moletom com Gola Falsa de 2 Peças para Menino Jovem, Novo Moletom Grosso de Manga Longa para Menino Jovem no Outono_Inverno.jpg',
    'New Autumn Baby Boys Clothes Children Girls Fashion Striped T-Shirt Toddler Casual Costume Kids Outfits Infant Sportswear - AliExpress 1501.jpg',
    'POLO PUNTO RAYAS SNOOPY PEANUTS™.jpg',
    'Sudaderitas para niña pequeña baratas.jpg'
  ]]
];

const kidsImageProducts = kidsImageGroups.flatMap(([category, folder, filenames]) =>
  filenames.map((filename, index) => {
    const encodedPath = `${folder}/${filename}`.split('/').map(encodeURIComponent).join('/');
    const name = `Kids ${category} - ${filename.replace(/\.[^.]+$/, '')}`;
    const sizes = ['2-3Y', '4-5Y', '6-7Y', '8-9Y'];
    return {
      id: `rx-kids-style-${category.toLowerCase().replace(/[^a-z]+/g, '-')}-${String(index + 1).padStart(2, '0')}`,
      audience: 'kids',
      category,
      subcategory: category,
      name,
      description: `${category} from the kids collection.`,
      price: 699,
      createdAt: '2026-10-21',
      colors: ['As shown'],
      sizes,
      variants: sizes.map((size, sizeIndex) => ({
        color: 'As shown',
        size,
        stock: 3 + ((index + sizeIndex) % 4)
      })),
      images: [{
        src: `images/kids%20cloths/${encodedPath}`,
        alt: `Kids' ${category.toLocaleLowerCase()} style`
      }]
    };
  })
);
window.RXProductData.products = [
  ...window.RXProductData.products.filter((product) => product.audience !== 'kids'),
  ...kidsImageProducts
];

const menImageManifest = window.RXMenImageManifest;
if (Array.isArray(menImageManifest)) {
  const existingMenProductIds = new Map([
    ['images/men cloths/SHIRT/BOXY FIT SHIRT/Dark green striped shirt.jpg', 'rx-men-overshirt'],
    ['images/men cloths/T-SHIRT/REGULAR FIT T-SHIRT/Cotton On Men - Everyday Fit T-Shirt - Slate stone.jpg', 'rx-men-cotton-tee'],
    ['images/men cloths/JEANS/STRAIGHT FIT JEAN/Men\'s Casual Loose Fit Straight Leg Jeans With Pockets.jpg', 'rx-men-straight-jeans'],
    ['images/men cloths/T-SHIRT/REGULAR FIT T-SHIRT/Next REGULAR FIT - SMART SOFT TOUCH HEAVYWEIGHT T-SHIRT _ - T-shirt basic - neutral raglan.jpg', 'rx-men-knit-polo']
  ]);
  const imageBackedMenProducts = menImageManifest.map((image, index) => {
    const name = `${image.subcategory.replace(/s$/, '')} ${String(index + 1).padStart(2, '0')}`;
    const sizes = image.category === 'Jeans' || image.category === 'Trousers & Pants'
      ? ['30', '32', '34', '36']
      : ['S', 'M', 'L', 'XL'];

    return {
      id: existingMenProductIds.get(decodeURIComponent(image.src)) || `rx-men-style-${String(index + 1).padStart(3, '0')}`,
      audience: 'men',
      category: image.category,
      subcategory: image.subcategory,
      name,
      description: `${image.subcategory} from the men's collection.`,
      price: 699,
      createdAt: '2026-10-21',
      colors: ['As shown'],
      sizes,
      variants: sizes.map((size, sizeIndex) => ({
        color: 'As shown',
        size,
        stock: 3 + ((index + sizeIndex) % 4)
      })),
      images: [{ src: image.src, alt: image.alt }]
    };
  });
  window.RXProductData.products = [
    ...imageBackedMenProducts,
    ...window.RXProductData.products.filter((product) => product.audience !== 'men')
  ];
}

const womenImageManifest = window.RXWomenImageManifest;
if (Array.isArray(womenImageManifest)) {
  const existingWomenProducts = new Map(
    window.RXProductData.products
      .filter((product) => product.audience === 'women')
      .flatMap((product) => product.images.map((image) => [decodeURIComponent(image.src), product]))
  );
  const imageBackedWomenProducts = womenImageManifest.map((image, index) => {
    const existingProduct = existingWomenProducts.get(decodeURIComponent(image.src));
    const sizes = ['XS', 'S', 'M', 'L', 'XL'];
    return {
      ...existingProduct,
      id: existingProduct?.id || `rx-women-style-${String(index + 1).padStart(3, '0')}`,
      audience: 'women',
      category: image.category,
      subcategory: image.subcategory,
      name: existingProduct?.name || decodeURIComponent(image.src).split('/').pop().replace(/\.[^.]+$/, ''),
      description: existingProduct?.description || `${image.subcategory} from the women's collection.`,
      createdAt: existingProduct?.createdAt || '2026-10-21',
      colors: ['As shown'],
      sizes,
      variants: sizes.map((size, sizeIndex) => ({
        color: 'As shown',
        size,
        stock: existingProduct?.variants.find((variant) => variant.size === size)?.stock ?? 3 + ((index + sizeIndex) % 4)
      })),
      images: [{ src: image.src, alt: image.alt }]
    };
  });
  window.RXProductData.products = [
    ...window.RXProductData.products.filter((product) => product.audience !== 'women'),
    ...imageBackedWomenProducts
  ];
}

window.RXProductData.products.forEach((product, index, products) => {
  const priceRange = 2994 - 699;
  product.price = 699 + Math.floor(index * priceRange / (products.length - 1));
});
