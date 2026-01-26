const regalosEl = [
  { id: 1, nombre: "Reloj Clásico de Acero", precio: 28500, imagen: "https://picsum.photos/seed/watch/600/600", categoria: "regalos-el" },
  { id: 2, nombre: "Billetera de Cuero Premium", precio: 14500, imagen: "https://picsum.photos/seed/wallet/600/600", categoria: "regalos-el" },
  { id: 3, nombre: "Kit de Afeitado Profesional", precio: 19800, imagen: "https://picsum.photos/seed/shaving/600/600", categoria: "regalos-el" },
  { id: 4, nombre: "Pulsera de Acero Inoxidable", precio: 9200, imagen: "https://picsum.photos/seed/bracelet/600/600", categoria: "regalos-el" },
  { id: 5, nombre: "Auriculares Bluetooth", precio: 32500, imagen: "https://picsum.photos/seed/headphones/600/600", categoria: "regalos-el" },
  { id: 6, nombre: "Lentes de Sol UV400", precio: 17500, imagen: "https://picsum.photos/seed/sunglasses/600/600", categoria: "regalos-el" },
  { id: 7, nombre: "Perfume Amaderado Masculino", precio: 41200, imagen: "https://picsum.photos/seed/perfume/600/600", categoria: "regalos-el" },
  { id: 8, nombre: "Mochila Urbana Premium", precio: 38900, imagen: "https://picsum.photos/seed/backpack/600/600", categoria: "regalos-el" },
  { id: 9, nombre: "Cinturón de Cuero Negro", precio: 9900, imagen: "https://picsum.photos/seed/belt/600/600", categoria: "regalos-el" },
  { id: 10, nombre: "Kit de Whisky con Vasos", precio: 26800, imagen: "https://picsum.photos/seed/whisky/600/600", categoria: "regalos-el" },
  { id: 11, nombre: "Agenda Ejecutiva", precio: 7800, imagen: "https://picsum.photos/seed/notebook/600/600", categoria: "regalos-el" },
  { id: 12, nombre: "Parlante Bluetooth Portátil", precio: 29900, imagen: "https://picsum.photos/seed/speaker/600/600", categoria: "regalos-el" },
  { id: 13, nombre: "Set de Corbata + Gemelos", precio: 15900, imagen: "https://picsum.photos/seed/tie/600/600", categoria: "regalos-el" },
  { id: 14, nombre: "Gorra Minimalista", precio: 8200, imagen: "https://picsum.photos/seed/cap/600/600", categoria: "regalos-el" },
  { id: 15, nombre: "Kit de Cuidado de Barba", precio: 13600, imagen: "https://picsum.photos/seed/beard/600/600", categoria: "regalos-el" },
  { id: 16, nombre: "Termo Acero Inoxidable", precio: 21400, imagen: "https://picsum.photos/seed/thermos/600/600", categoria: "regalos-el" },
  { id: 17, nombre: "Mouse Inalámbrico Ergonómico", precio: 12400, imagen: "https://picsum.photos/seed/mouse/600/600", categoria: "regalos-el" },
  { id: 18, nombre: "Camisa Casual Slim Fit", precio: 27900, imagen: "https://picsum.photos/seed/shirt/600/600", categoria: "regalos-el" },
  { id: 19, nombre: "Llavero Metálico Premium", precio: 4200, imagen: "https://picsum.photos/seed/keychain/600/600", categoria: "regalos-el" },
  { id: 20, nombre: "Set de Herramientas Compacto", precio: 18900, imagen: "https://picsum.photos/seed/tools/600/600", categoria: "regalos-el" }
];

const regalosElla = [
  { id: 21, nombre: "Cartera Elegante", precio: 36500, imagen: "https://picsum.photos/seed/handbag/600/600", categoria: "regalos-ella" },
  { id: 22, nombre: "Set de Maquillaje Profesional", precio: 24800, imagen: "https://picsum.photos/seed/makeup/600/600", categoria: "regalos-ella" },
  { id: 23, nombre: "Pulsera de Plata", precio: 13900, imagen: "https://picsum.photos/seed/silver-bracelet/600/600", categoria: "regalos-ella" },
  { id: 24, nombre: "Collar Minimalista", precio: 11800, imagen: "https://picsum.photos/seed/necklace/600/600", categoria: "regalos-ella" },
  { id: 25, nombre: "Reloj Fashion Mujer", precio: 31200, imagen: "https://picsum.photos/seed/women-watch/600/600", categoria: "regalos-ella" },
  { id: 26, nombre: "Kit Spa Relax", precio: 22400, imagen: "https://picsum.photos/seed/spa/600/600", categoria: "regalos-ella" },
  { id: 27, nombre: "Perfume Floral Femenino", precio: 42800, imagen: "https://picsum.photos/seed/floral-perfume/600/600", categoria: "regalos-ella" },
  { id: 28, nombre: "Bolso de Mano Premium", precio: 34900, imagen: "https://picsum.photos/seed/handbag-premium/600/600", categoria: "regalos-ella" },
  { id: 29, nombre: "Set de Brochas de Maquillaje", precio: 15400, imagen: "https://picsum.photos/seed/makeup-brushes/600/600", categoria: "regalos-ella" },
  { id: 30, nombre: "Bufanda de Diseño", precio: 9900, imagen: "https://picsum.photos/seed/scarf/600/600", categoria: "regalos-ella" },
  { id: 31, nombre: "Kit de Skincare", precio: 28900, imagen: "https://picsum.photos/seed/skincare/600/600", categoria: "regalos-ella" },
  { id: 32, nombre: "Aretes Elegantes", precio: 8600, imagen: "https://picsum.photos/seed/earrings/600/600", categoria: "regalos-ella" },
  { id: 33, nombre: "Vela Aromática Premium", precio: 7400, imagen: "https://picsum.photos/seed/scented-candle/600/600", categoria: "regalos-ella" },
  { id: 34, nombre: "Agenda Personalizada", precio: 6900, imagen: "https://picsum.photos/seed/planner/600/600", categoria: "regalos-ella" },
  { id: 35, nombre: "Set de Tazas Decorativas", precio: 12900, imagen: "https://picsum.photos/seed/mugs/600/600", categoria: "regalos-ella" },
  { id: 36, nombre: "Neceser de Viaje", precio: 11400, imagen: "https://picsum.photos/seed/toiletry-bag/600/600", categoria: "regalos-ella" },
  { id: 37, nombre: "Kit de Manicuría", precio: 9800, imagen: "https://picsum.photos/seed/manicure/600/600", categoria: "regalos-ella" },
  { id: 38, nombre: "Pantuflas Soft", precio: 14500, imagen: "https://picsum.photos/seed/slippers/600/600", categoria: "regalos-ella" },
  { id: 39, nombre: "Caja de Chocolates Premium", precio: 16800, imagen: "https://picsum.photos/seed/chocolates/600/600", categoria: "regalos-ella" },
  { id: 40, nombre: "Porta Joyas Compacto", precio: 8700, imagen: "https://picsum.photos/seed/jewelry-box/600/600", categoria: "regalos-ella" }
];

const fragancias = [
  { id: 41, nombre: "Perfume Importado Amaderado", precio: 49500, imagen: "https://picsum.photos/seed/frag1/600/600", categoria: "fragancias" },
  { id: 42, nombre: "Perfume Floral Intenso", precio: 46800, imagen: "https://picsum.photos/seed/frag2/600/600", categoria: "fragancias" },
  { id: 43, nombre: "Eau de Toilette Cítrico", precio: 38900, imagen: "https://picsum.photos/seed/frag3/600/600", categoria: "fragancias" },
  { id: 44, nombre: "Perfume Unisex Premium", precio: 52000, imagen: "https://picsum.photos/seed/frag4/600/600", categoria: "fragancias" },
  { id: 45, nombre: "Perfume Oriental", precio: 47200, imagen: "https://picsum.photos/seed/frag5/600/600", categoria: "fragancias" }
//   { id: 46, nombre: "Set Mini Fragancias", precio: 29800, imagen: "https://picsum.photos/seed/frag6/600/600", categoria: "fragancias" },
//   { id: 47, nombre: "Perfume Gourmand", precio: 45500, imagen: "frag7.jpg", categoria: "fragancias" },
//   { id: 48, nombre: "Colonia Fresca Diaria", precio: 21400, imagen: "frag8.jpg", categoria: "fragancias" },
//   { id: 49, nombre: "Perfume Intenso Nocturno", precio: 53800, imagen: "frag9.jpg", categoria: "fragancias" },
//   { id: 50, nombre: "Perfume Clásico Elegante", precio: 48900, imagen: "frag10.jpg", categoria: "fragancias" },
//   { id: 51, nombre: "Set Perfume + Crema", precio: 56500, imagen: "frag11.jpg", categoria: "fragancias" },
//   { id: 52, nombre: "Perfume Frutal", precio: 39900, imagen: "frag12.jpg", categoria: "fragancias" },
//   { id: 53, nombre: "Perfume Masculino Sport", precio: 44200, imagen: "frag13.jpg", categoria: "fragancias" },
//   { id: 54, nombre: "Perfume Femenino Deluxe", precio: 52800, imagen: "frag14.jpg", categoria: "fragancias" },
//   { id: 55, nombre: "Fragancia Suave Diaria", precio: 29800, imagen: "frag15.jpg", categoria: "fragancias" },
//   { id: 56, nombre: "Perfume Importado Limited", precio: 61200, imagen: "frag16.jpg", categoria: "fragancias" },
//   { id: 57, nombre: "Perfume Natural Herbal", precio: 33400, imagen: "frag17.jpg", categoria: "fragancias" },
//   { id: 58, nombre: "Perfume Elegance", precio: 48700, imagen: "frag18.jpg", categoria: "fragancias" },
//   { id: 59, nombre: "Perfume Signature", precio: 55900, imagen: "frag19.jpg", categoria: "fragancias" },
//   { id: 60, nombre: "Perfume Fresh Night", precio: 42100, imagen: "frag20.jpg", categoria: "fragancias" }
];

const promociones = [
  { id: 61, nombre: "Combo Reloj + Billetera", precio: 37900, imagen: "https://picsum.photos/seed/promo-watch-wallet/600/600", categoria: "promociones" },
  { id: 62, nombre: "Pack Perfume + Desodorante", precio: 41800, imagen: "https://picsum.photos/seed/promo-perfume/600/600", categoria: "promociones" },
  { id: 63, nombre: "Set Regalo Deluxe Ella", precio: 46500, imagen:"https://picsum.photos/seed/promo-deluxe/600/600", categoria: "promociones" },
  { id: 64, nombre: "Pack Skincare Básico", precio: 29800, imagen: "https://picsum.photos/seed/promo-skincare/600/600", categoria: "promociones" }
//   { id: 65, nombre: "Combo Auriculares + Parlante", precio: 54900, imagen: "promo5.jpg", categoria: "promociones" },
//   { id: 66, nombre: "Pack Fragancias Mini", precio: 25900, imagen: "promo6.jpg", categoria: "promociones" },
//   { id: 67, nombre: "Set Relax Hogar", precio: 22400, imagen: "promo7.jpg", categoria: "promociones" },
//   { id: 68, nombre: "Combo Oficina Premium", precio: 31200, imagen: "promo8.jpg", categoria: "promociones" },
//   { id: 69, nombre: "Pack Regalo Masculino", precio: 39800, imagen: "promo9.jpg", categoria: "promociones" },
//   { id: 70, nombre: "Set Belleza Completo", precio: 48900, imagen: "promo10.jpg", categoria: "promociones" },
//   { id: 71, nombre: "Combo Mate Premium", precio: 27900, imagen: "promo11.jpg", categoria: "promociones" },
//   { id: 72, nombre: "Pack Aromas Hogar", precio: 19800, imagen: "promo12.jpg", categoria: "promociones" },
//   { id: 73, nombre: "Set Accesorios Elegantes", precio: 35400, imagen: "promo13.jpg", categoria: "promociones" },
//   { id: 74, nombre: "Combo Fitness Básico", precio: 33500, imagen: "promo14.jpg", categoria: "promociones" },
//   { id: 75, nombre: "Pack Regalo Express", precio: 18900, imagen: "promo15.jpg", categoria: "promociones" },
//   { id: 76, nombre: "Set Aromaterapia", precio: 24800, imagen: "promo16.jpg", categoria: "promociones" },
//   { id: 77, nombre: "Combo Tech Essentials", precio: 46200, imagen: "promo17.jpg", categoria: "promociones" },
//   { id: 78, nombre: "Pack Detalles Premium", precio: 32800, imagen: "promo18.jpg", categoria: "promociones" },
//   { id: 79, nombre: "Set Regalo Corporativo", precio: 51900, imagen: "promo19.jpg", categoria: "promociones" },
//   { id: 80, nombre: "Combo Regalo Especial", precio: 28900, imagen: "promo20.jpg", categoria: "promociones" }
];


const todosLosProductos = [
  ...regalosEl,
  ...regalosElla,
  ...fragancias,
  ...promociones
];
