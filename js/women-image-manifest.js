'use strict';

const womenImageGroups = [
  ['Dresses', 'CLOTHING/DRESSES', [
    "Bluebell Floral Maxi Dress.jpg",
    "Blush Rose Elegant Maxi Dress.jpg",
    "Butterfly Blush Mini Dress.jpg",
    "Dusty Pink Dream Maxi Dress.jpg",
    "Ocean Bloom Boho Maxi Dress.jpg",
    "Peach Petal Floral Midi Dress.jpg",
    "Roselle Floral Maxi Dress.jpg",
    "Scarlet Bloom Maxi Dress.jpg",
    "Sky Blossom Floral Midi Dress.jpg",
    "Vintage Blossom Maxi Dress.jpg"
  ]],
  ['Jeans', 'CLOTHING/JEANS', [
    "Butterfly Wide-Leg Jean.jpg",
    "Classic Blue Baggy.jpg",
    "Classic Light Jeans.jpg",
    "Faded Blue Denim.jpg",
    "Grey Heart Baggy.jpg",
    "Raw Edge Denim.jpg",
    "Relaxed Blue Jeans.jpg",
    "Retro Washed Denim.jpg",
    "Vintage Dark Denim.jpg",
    "Vintage Grey Denim.jpg"
  ]],
  ['Shirts', 'CLOTHING/SHIRTS', [
    "Dark Denim Shirt.jpg",
    "Flower Print Brown Shirt.jpg",
    "Maroon Plaid Shir.jpg",
    "Olive Green Oversized Shirt.jpg",
    "Pocket Burgundy Shirt.jpg",
    "Soft Pink Casual Shirt.jpg",
    "White Bow Shirt.jpg",
    "Yellow Cropped Shirt.jpg",
    "Yellow Gingham Shir.jpg",
    "Yellow Plaid Shirt.jpg"
  ]],
  ['Skirts', 'CLOTHING/SKIRTS', [
    "Belted Corduroy Skirt.jpg",
    "Black Bow Flare Skir.jpg",
    "Brown Flared Skirt.jpg",
    "Classic Black Skirt.jpg",
    "Cream High-Waist Skirt.jpg",
    "Denim Wrap Skirt.jpg",
    "High-Waist Denim Skir.jpg",
    "Mocha Draped Skirt.jpg",
    "Olive Ruffled Maxi Skirt.jpg",
    "Wine Red Ruffle Skirt.jpg"
  ]],
  ['T-Shirts', 'CLOTHING/T-SHIRTS', [
    "Block Graphic Oversized Tee.jpg",
    "Floral Graphic T-Shirt.jpg",
    "Graphic Collar T-Shirt.jpg",
    "Los Angeles Polo Top.jpg",
    "Maroon Bow Oversized Tee.jpg",
    "Red & Navy Striped Tee.jpg",
    "Retro Slim Fit Polo.jpg",
    "Varsity Chicago T-Shirt.jpg",
    "Varsity Maroon Oversized Tee.jpg",
    "Varsity V-Neck T-Shirt.jpg"
  ]],
  ['Tops', 'CLOTHING/TOPS', [
    "Black Floral Corset Top.jpg",
    "Blue Floral Corset Top.jpg",
    "Blue Plaid Puff Top.jpg",
    "Blue Toile Corset Top.jpg",
    "Cottagecore Floral Top.jpg",
    "Mint Green Puff Top.jpg",
    "Pink Butterfly Mesh Top.jpg",
    "Pink Floral Corset Top.jpg",
    "Wine Wrap Bodice Top.jpg"
  ]],
  ['Trousers', 'CLOTHING/TROUSERS', [
    "Brown Wide-Leg Trousers.jpg",
    "Classic Beige Trousers.jpg",
    "Cream Flared Trousers.jpg",
    "Formal Pleated Trousers.jpg",
    "Ivory Korean Trousers.jpg",
    "Pastel Pink Trousers.jpg",
    "Pure White Trouser.jpg",
    "Streetwear Wide Trousers.jpg",
    "Tailored Blue Trousers.jpg",
    "Taupe Pleated Trousers.jpg"
  ]],
  ['Coats', 'LAYERS & MORE/COATS', [
    "302796774965233295.jpg",
    "591519732324612081.jpg",
    "618611698818553396.jpg",
    "881157483346570109.jpg",
    "1022246815424812962.jpg",
    "Massimo Dutti United Kingdom _ New Collection _ Online Store.jpg",
    "Premium Bow Gray Wool Coat Women Clothing Autumn and Winter New Korean College Style Mid Length.jpg",
    "Sweetra Plus Size Women Faux Fur Collar Patchwork Waist Woolen Coat.jpg",
    "Woolen Coats.jpg",
    "\u265B\uD83D\uDD06beautiful,elegant,gorgeous winter coat\u265B\uD83D\uDD06.jpg"
  ]],
  ['Jackets', 'LAYERS & MORE/JACKETS', [
    "6 Grandma Trends That Will Be Huge for Fall.jpg",
    "Dames Korte Jas met Knopen en Zakken.jpg",
    "KURZJACKE AUS GEKOCHTEM WOLL-MIX - BEIGE MELIERT _ COS.jpg",
    "Lapel check wool coat-Outfit - Grey _ M.jpg",
    "Marzo ya está aquí y estas son las 15 prendas….jpg",
    "Serisse Jaqueta Feminina de Inverno, Ajuste Folgado, Zíper até a Gola, Forro Térmico, Jaqueta Casual para Outono_Inverno, Casaco Feminino de Inverno.jpg",
    "Women's Cropped Vegan Suede Sherpa Jacket….jpg",
    "Women's Gingham Quilted Jacket.jpg",
    "Women's Jackets _ Blazers, Denim & Leather Jackets.jpg",
    "Women's capsule wardrobe for travel - une femme x susan blakey.jpg"
  ]],
  ['Knitwear', 'LAYERS & MORE/KNITWEAR', [
    "#winterfashion.jpg",
    "254805291410763558.jpg",
    "A Classic Cable-Knit Sweater Is the One Knit I Swear By.jpg",
    "Brown Cable Knit Crop Cardigan _ Cozy Button Front Chunky Sweater for Women.jpg",
    "Cozy Winter Woolen Sweater Lookbook.jpg",
    "Elegant Maroon Off-Shoulder Knit Sweater _ Cozy Winter Fashion.jpg",
    "Not my pin.jpg",
    "Shop New In Fall & Winter Clothing _ SHEIN USA.jpg",
    "Winter Shopping_ A Few Cosy Pieces for Chilly Days….jpg",
    "ha beautiful winter top.jpg"
  ]]
];

window.RXWomenImageManifest = womenImageGroups.flatMap(([category, folder, filenames]) =>
  filenames.map((filename) => ({
    category,
    subcategory: category,
    src: `images/women%20cloth/${`${folder}/${filename}`.split('/').map(encodeURIComponent).join('/')}`,
    alt: `Women's ${category.toLocaleLowerCase()} product`
  }))
);
