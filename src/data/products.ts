import { Product, CategoryInfo, Review } from '../types';

export const CATEGORIES_DATA: CategoryInfo[] = [
  {
    id: 'bodys',
    title: 'Bodys Moldeadores',
    subtitle: 'Tejido de punto rib, mesh con encaje y cortes cut-out favorecedores',
    image: '/br-11134207-7r98o-lzyv06nfhjf9cf.jfif',
    itemCount: 4
  },
  {
    id: 'corsets',
    title: 'Corsets Streetwear Chic',
    subtitle: 'Cuero sintético biker, satén con varillas, encaje y denim Y2K',
    image: '/corset-streetwear-chic.jpg',
    itemCount: 4
  },
  {
    id: 'vestidos',
    title: 'Vestidos Versátiles',
    subtitle: 'Para salir de fiesta, ir a comer o crear contenido aesthetic',
    image: '/vestidos-versatiles.jpg',
    itemCount: 4
  },
  {
    id: 'faldas',
    title: 'Faldas con Actitud',
    subtitle: 'Minifaldas denim vintage con cinturón, tablas tenniscore y ecocuero',
    image: '/faldas-con-actitud.jpg',
    itemCount: 4
  },
  {
    id: 'conjuntos',
    title: 'Sets & Outfits Listos',
    subtitle: 'Prendas de punto acanalado, jeans y outfits completos para tus planes',
    image: '/sets-outfits-listos.jpg',
    itemCount: 3
  },
  {
    id: 'accesorios',
    title: 'Accesorios Statement',
    subtitle: 'Gafas de sol cat-eye, cadenas doradas, bisutería chic y bolsos',
    image: '/accesorios-statement.jpg',
    itemCount: 3
  }
];

export const PRODUCTS_DATA: Product[] = [
  // ⚡ BODYS (Tejidos de punto, mesh/encaje y suplex moldeador)
  {
    id: 'cb-bd01',
    name: 'Body Asimétrico Cut-Out Sculpt',
    category: 'bodys',
    categoryName: 'Bodys Moldeadores',
    price: 49900,
    originalPrice: 69900,
    rating: 4.9,
    reviewsCount: 94,
    images: [
      '/br-11134207-7r98o-lzyv06nfhjf9cf.jfif',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Negro Street (Neutro)', hex: '#18181B' },
      { name: 'Blanco Marfil (Neutro)', hex: '#F8FAFC' },
      { name: 'Rosa Fucsia (Tendencia)', hex: '#E11D48' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Diseñado para chicas de 15 a 25 años que buscan una silueta impecable. Este body combina un corte asimétrico de un solo hombro con abertura cut-out en cintura que afina la figura. Confeccionado en tejido moldeador premium de textura suave y elástica. ¡Versátil para salir a comer con amigas con jeans anchos o elevarlo con una falda de cuero para salir de fiesta!',
    fabric: 'Tejido Compresivo Moldeador (88% Suplex Doble Faz, 12% Spandex) que no transparenta',
    care: 'Lavar en ciclo delicado con agua fría. No usar lejía. Secar a la sombra.',
    fit: 'Corte ultra favorecedor efecto segunda piel con broche inferior ajustable de 3 posiciones.',
    isNew: true,
    isSale: true,
    isBestSeller: true,
    tag: 'Favorecedor & Viral',
    stock: 45
  },
  {
    id: 'cb-bd02',
    name: 'Body Seamless Ribbed Cuello Cuadrado',
    category: 'bodys',
    categoryName: 'Bodys Moldeadores',
    price: 52900,
    originalPrice: 74900,
    rating: 5.0,
    reviewsCount: 110,
    images: [
      '/body-seamless-ribbed.jpg',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Blanco Marfil (Neutro)', hex: '#F8FAFC' },
      { name: 'Moka Nude (Neutro Cálido)', hex: '#9A7B6B' },
      { name: 'Negro Carbón (Neutro)', hex: '#111827' },
      { name: 'Rosa Pastel (Tendencia Y2K)', hex: '#FDA4AF' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'La textura de tejido de punto acanalado (rib) más buscada del momento. Presenta un escote cuadrado súper estilizador que realza el escote y una espalda abierta baja perfecta para fotos de espaldas en redes sociales. Su tejido elástico sin costuras abraza tu figura sin apretar, haciéndolo el básico streetwear favorito para planes con amigos o tardes de café.',
    fabric: 'Tejido de Punto Rib Seamless (92% Microfibra Acanalada, 8% Elastano)',
    care: 'Lavar a mano o en funda para prendas finas. No planchar a alta temperatura.',
    fit: 'Calce suave y flexible que se amolda a tu torso realzando la cintura.',
    isNew: true,
    isBestSeller: true,
    tag: 'Esencial Streetwear',
    stock: 38
  },
  {
    id: 'cb-bd03',
    name: 'Body Mesh & Encaje Cyber Aura',
    category: 'bodys',
    categoryName: 'Bodys Moldeadores',
    price: 54900,
    rating: 4.9,
    reviewsCount: 58,
    images: [
      '/body-mesh-encaje-aura.jpg',
      'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=900&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Blanco Glitter Semitraslúcido (Tendencia)', hex: '#F8FAFC' },
      { name: 'Negro Grunge Encaje (Neutro)', hex: '#18181B' },
      { name: 'Aura Sunset (Degradé Tendencia)', hex: '#FB7185' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Mezcla vanguardista de textura mesh semitraslúcida con bordes en encaje delicado y estampado aura difuminado. Cuenta con forro doble en busto para lucirlo con total seguridad sin brasier. Ideal para festivales, noche de fiesta o sesiones de fotos aesthetic donde quieras ser el centro de atención.',
    fabric: 'Textura Mesh Suave & Encaje Elástico (90% Poliamida, 10% Spandex con Forro Anti-Transparencia)',
    care: 'Lavar a mano con jabón suave para cuidar el encaje y el estampado.',
    fit: 'Corte ceñido y elástico de tacto suave sobre la piel.',
    isNew: true,
    tag: 'Foto Aesthetic',
    stock: 30
  },
  {
    id: 'cb-bd04',
    name: 'Body Halter Tiras Strappy Espalda Libre',
    category: 'bodys',
    categoryName: 'Bodys Moldeadores',
    price: 46900,
    originalPrice: 65900,
    rating: 4.8,
    reviewsCount: 45,
    images: [
      '/body-halter-espalda-libre.jpg',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Negro Onix (Neutro)', hex: '#18181B' },
      { name: 'Blanco Puro (Neutro)', hex: '#FFFFFF' },
      { name: 'Rojo Cherry (Tendencia)', hex: '#BE123C' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Prenda clave para outfits de impacto: escote halter cruzado al cuello que despeja los hombros y espalda descubierta con tiras finas geométricas. Combínalo con una falda cargo o jeans baggy para ir a cenar y continuar la noche de fiesta con un look fresco y moderno.',
    fabric: 'Punto de Algodón Peinado Stretch (85% Algodón, 15% Spandex)',
    care: 'Lavar en agua fría. No centrifugar con fuerza para cuidar las tiras.',
    fit: 'Ajuste ceñido favorecedor que resalta la clavícula y la espalda.',
    isSale: true,
    tag: 'Night Out',
    stock: 25
  },

  // 💎 CORSETS (Satén con varillas, Cuero sintético, Encaje y Denim Y2K)
  {
    id: 'cb-cr01',
    name: 'Corset Satén & Varillas Bella Push-Up',
    category: 'corsets',
    categoryName: 'Corsets Streetwear Chic',
    price: 74900,
    originalPrice: 104900,
    rating: 5.0,
    reviewsCount: 142,
    images: [
      '/corset-streetwear-chic.jpg',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Negro Brillante (Neutro Elegante)', hex: '#09090B' },
      { name: 'Rosa Barbie Satén (Tendencia)', hex: '#FB7185' },
      { name: 'Champagne Perla (Neutro)', hex: '#FDE68A' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'El corset estructurado número uno en ventas. Confeccionado en satén premium de textura brillante con varillas flexibles de polímero que esculpen la cintura sin incomodar. Escote corazón armado que realza el busto y cremallera metálica trasera reforzada. Diseñado para salir de fiesta o una cena especial donde quieras sentirte empoderada y sofisticada.',
    fabric: 'Satén Estructurado Premium con 8 Varillas Flex y Forro Interior Antitranspirante',
    care: 'Limpieza en seco o lavado cuidadoso a mano.',
    fit: 'Efecto reductor visual de cintura con copas armadas que dan soporte completo.',
    isNew: true,
    isSale: true,
    isBestSeller: true,
    tag: 'Top 1 Noche & Fiesta',
    stock: 50
  },
  {
    id: 'cb-cr02',
    name: 'Corset Denim Vintage Lace-Up Y2K',
    category: 'corsets',
    categoryName: 'Corsets Streetwear Chic',
    price: 79900,
    rating: 4.9,
    reviewsCount: 92,
    images: [
      '/corset-denim-vintage.jpg',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=900&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Denim Azul Medio Vintage', hex: '#2563EB' },
      { name: 'Denim Azul Claro Lavado', hex: '#7DD3FC' },
      { name: 'Denim Negro Desgastado (Neutro)', hex: '#27272A' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Corte streetwear favorecedor confeccionado en jean 100% algodón con costuras de contraste en color miel, corte en pico inferior que estiliza el abdomen y lazada cruzada trasera regulable para un ajuste personalizado al milímetro. La prenda ideal para festivales, fotos de TikTok o un plan de tarde con amigos.',
    fabric: '100% Algodón Denim Rígido con Cordones Reforzados en Espalda',
    care: 'Lavar al revés en lavadora con agua fría.',
    fit: 'Ajustable en espalda; puedes ceñirlo tanto como desees.',
    isNew: true,
    isBestSeller: true,
    tag: 'Aesthetic Y2K',
    stock: 35
  },
  {
    id: 'cb-cr03',
    name: 'Corset Biker en Cuero Sintético Mate',
    category: 'corsets',
    categoryName: 'Corsets Streetwear Chic',
    price: 69900,
    originalPrice: 89900,
    rating: 4.9,
    reviewsCount: 65,
    images: [
      '/corset-biker-cuero.jpg',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=900&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Ecocuero Negro Lace-Up (Neutro Absoluto)', hex: '#18181B' },
      { name: 'Plata Chrome Metálico (Tendencia)', hex: '#CBD5E1' },
      { name: 'Marrón Chocolate (Neutro Cálido)', hex: '#451A03' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Corset estructurado de silueta esculpida en cuero sintético mate con tirantes finos ajustables, escote redondeado y detalle frontal lace-up con ojetes metálicos plateados y lazo satinado cruzado. Bajo en pico invertido pronunciado que afina visualmente la cintura y alarga el torso.',
    fabric: 'Cuero Sintético (Ecocuero) Premium con Forro de Algodón Aterciopelado y Varillas Flexibles',
    care: 'Limpiar con toalla suave ligeramente húmeda.',
    fit: 'Ceñido al cuerpo con lazada frontal regulable para un ajuste a medida.',
    isSale: true,
    tag: 'Biker & Night',
    stock: 28
  },
  {
    id: 'cb-cr04',
    name: 'Corset Cargo Utility con Ojaletes Plateados',
    category: 'corsets',
    categoryName: 'Corsets Streetwear Chic',
    price: 72900,
    rating: 4.9,
    reviewsCount: 54,
    images: [
      '/corset-cargo-ojaletes.jpg',
      'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=900&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Marrón Café Espresso (Neutro Cálido)', hex: '#4A2E1B' },
      { name: 'Verde Militar Oliva (Tendencia)', hex: '#4B5320' },
      { name: 'Beige Arena Desierto (Neutro)', hex: '#D6C7B2' },
      { name: 'Negro Carbón (Neutro)', hex: '#1F2937' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Fusión de la silueta femenina del corset con detalles utilitarios urbanos: cargaderas con ojaletes metálicos en acabado plateado brillante y lazos decorativos al frente, cuerpo entallado con costuras verticales que afinan el torso y bajo curvo que realza la cintura. Diseñado para un look streetwear chic con jeans o faldas cargo.',
    fabric: 'Sarga de Algodón Pesado Estructurado con Ojaletes Níquel Reforzados',
    care: 'Lavar en frío a mano o ciclo delicado.',
    fit: 'Silueta estructurada ceñida al busto y cintura con cargaderas de ojaletes.',
    isNew: true,
    tag: 'Street Chic',
    stock: 22
  },

  // 👗 VESTIDOS (Para salir de fiesta, ir a comer o crear contenido aesthetic)
  {
    id: 'cb-v01',
    name: 'Vestido de Punto Rib Maxi Versátil',
    category: 'vestidos',
    categoryName: 'Vestidos Versátiles',
    price: 84900,
    originalPrice: 114900,
    rating: 4.9,
    reviewsCount: 118,
    images: [
      '/vestidos-versatiles.jpg',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=900&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Negro Intenso (Neutro)', hex: '#0F172A' },
      { name: 'Rosa Shocking (Tendencia)', hex: '#E11D48' },
      { name: 'Verde Lima Neón (Acento)', hex: '#84CC16' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'El vestido definitivo para salir de fiesta y deslumbrar. Cuenta con un corte asimétrico con abertura cut-out lateral en cintura y escote halter cruzado al cuello. Su tejido de punto scuba crepé de elasticidad en 4 direcciones abraza y realza tu silueta haciéndote sentir segura y fabulosa durante toda la noche.',
    fabric: 'Punto Scuba Crepé Ultra Elástico y Compresivo (90% Poliéster, 10% Elastano)',
    care: 'Lavar en ciclo delicado con agua fría. No retorcer.',
    fit: 'Ceñido al cuerpo con largo mini ultra favorecedor.',
    isNew: true,
    isSale: true,
    isBestSeller: true,
    tag: 'Favorito de Fiesta',
    stock: 40
  },
  {
    id: 'cb-v02',
    name: 'Vestido Mini de Punto Rib Cuello Alto',
    category: 'vestidos',
    categoryName: 'Vestidos Versátiles',
    price: 69900,
    rating: 4.8,
    reviewsCount: 82,
    images: [
      '/vestido-mini-cuello-alto.jpg',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=900&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Beige Arena Champagne (Neutro Cálido)', hex: '#E7DEC8' },
      { name: 'Negro Elegance (Neutro)', hex: '#111827' },
      { name: 'Blanco Crudo Marfil (Neutro)', hex: '#F8FAFC' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Vestido mini sofisticado con cuello alto mock, abertura cut-out diagonal asimétrica en el pecho y drapeado cruzado en cadera con hebilla circular metálica. Confeccionado en tejido suave de punto elástico de alta densidad que abraza la silueta con total comodidad. Ideal para cenas, eventos especiales, cócteles y salidas de noche.',
    fabric: 'Punto Elástico Soft Touch Premium (95% Poliéster Suave, 5% Elastano)',
    care: 'Lavar en lavadora con agua fría en ciclo delicado o a mano.',
    fit: 'Silueta bodycon entallada con drapeado que estiliza la cintura y cadera.',
    isNew: true,
    tag: 'Cena & Eventos',
    stock: 35
  },
  {
    id: 'cb-v03',
    name: 'Vestido Cargo Parachute Mini Utility',
    category: 'vestidos',
    categoryName: 'Vestidos Versátiles',
    price: 89900,
    originalPrice: 119900,
    rating: 5.0,
    reviewsCount: 64,
    images: [
      '/vestido-cargo-utility.jpg',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=900&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Taupe Khaki Safari (Neutro Cálido)', hex: '#8B8579' },
      { name: 'Beige Arena Cargo (Neutro)', hex: '#D4C3A3' },
      { name: 'Negro Streetwear (Neutro)', hex: '#18181B' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Estilo preppy utilitario en tendencia viral: vestido pichi mini sin mangas con escote redondo, talle bajo acentuado con cinturón de hebilla y falda inferior de tablas plisadas. Diseñado para lucir en layering sobre camisa blanca de cuello camisero, ideal para salidas a comer, universidad y fotos aesthetic.',
    fabric: 'Sarga Sastrería Estructurada con Plisado Duradero (65% Poliéster, 35% Algodón)',
    care: 'Lavar en ciclo suave con agua fría. Planchar las tablas a temperatura media.',
    fit: 'Corte recto con talle bajo ceñido mediante cinturón y vuelo de tablas.',
    isSale: true,
    isBestSeller: true,
    tag: 'Streetwear Chic',
    stock: 24
  },
  {
    id: 'cb-v04',
    name: 'Vestido Babydoll Romantic con Encaje',
    category: 'vestidos',
    categoryName: 'Vestidos Versátiles',
    price: 79900,
    rating: 4.9,
    reviewsCount: 76,
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=900&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Rosa Pastel Floral (Tendencia)', hex: '#F472B6' },
      { name: 'Blanco Nube (Neutro Puro)', hex: '#FAF5FF' },
      { name: 'Lila Soft (Acento)', hex: '#DDD6FE' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Vestido corto con falda amplia con vuelo, busto fruncido con lazo de ajuste y ribetes de encaje delicado en el escote. Un outfit femenino y aesthetic para ir a comer a un restaurante bonito o hacerte fotos increíbles para tus historias de Instagram.',
    fabric: 'Gasa de Algodón y Detalles de Encaje (100% Algodón con Forro Anti-Transparencias)',
    care: 'Lavar a mano en agua fría y colgar a la sombra.',
    fit: 'Cuerpo ajustado en busto con falda amplia con movimiento natural.',
    isNew: true,
    tag: 'Aesthetic & Fotos',
    stock: 30
  },

  // 🩷 FALDAS (Cuero sintético, Tablas tennis con short, Cargos y Denim)
  {
    id: 'cb-f01',
    name: 'Falda Tablonada Tenniscore con Short Interior',
    category: 'faldas',
    categoryName: 'Faldas con Actitud',
    price: 64900,
    originalPrice: 84900,
    rating: 5.0,
    reviewsCount: 168,
    images: [
      '/falda-tablonada-tenniscore.jpg',
      'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=900&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Azul Celeste Pastel (Tendencia Tenniscore)', hex: '#BAE6FD' },
      { name: 'Blanco Tennis (Neutro)', hex: '#FFFFFF' },
      { name: 'Negro Classic (Neutro)', hex: '#18181B' },
      { name: 'Rosa Pastel (Tendencia)', hex: '#FBCFE8' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'La falda de tablas más viral en tendencia tenniscore. Plisado de alta densidad que nunca pierde su forma, pretina ancha de tiro alto que aplana el abdomen y short interior incorporado en tela elástica que te da 100% de libertad y seguridad para bailar en la fiesta, salir de paseo o crear contenido aesthetic.',
    fabric: 'Poliéster Sastrería Antiarrugas (95% Poliéster, 5% Spandex) + Short Interior 100% Algodón',
    care: 'Lavar en frío en ciclo suave y colgar estirada para mantener los pliegues perfectos.',
    fit: 'Tiro alto ultra favorecedor con short de protección invisible integrado.',
    isNew: true,
    isSale: true,
    isBestSeller: true,
    tag: 'Bestseller Viral',
    stock: 65
  },
  {
    id: 'cb-f02',
    name: 'Minifalda Cargo Street con Bolsillos Maxi',
    category: 'faldas',
    categoryName: 'Faldas con Actitud',
    price: 69900,
    rating: 4.9,
    reviewsCount: 95,
    images: [
      '/minifalda-cargo-street.jpg',
      'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=900&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Khaki Arena Sand (Neutro)', hex: '#D2B48C' },
      { name: 'Verde Militar Oliva (Tendencia)', hex: '#556B2F' },
      { name: 'Negro Urbano (Neutro)', hex: '#111827' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Corte streetwear en tendencia: falda corta en sarga de algodón denim con maxibolsillos cargo frontales con tapetas/solapa, trabillas para cinturón y cierre con botón metálico. Combínala con crop tops, bodys o corsets para salir a comer o armar un lookazo aesthetic con tenis blancos.',
    fabric: 'Sarga de Algodón Denim Estructurado y Cómodo (100% Algodón)',
    care: 'Lavar en lavadora con agua fría al revés.',
    fit: 'Tiro medio con silueta recta y bolsillos utilitarios.',
    isNew: true,
    isBestSeller: true,
    tag: 'Streetwear Must-Have',
    stock: 40
  },
  {
    id: 'cb-f03',
    name: 'Minifalda en Cuero Sintético con Doble Cremallera',
    category: 'faldas',
    categoryName: 'Faldas con Actitud',
    price: 69900,
    originalPrice: 89900,
    rating: 4.9,
    reviewsCount: 74,
    images: [
      '/minifalda-cuero-volante.jpg',
      'https://images.unsplash.com/photo-1552874869-5c39ec9288dc?q=80&w=900&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Marrón Chocolate Café (Neutro Cálido)', hex: '#451A03' },
      { name: 'Ecocuero Negro Vinilo (Neutro)', hex: '#09090B' },
      { name: 'Rojo Cherry Borgoña (Tendencia)', hex: '#881337' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'La textura de cuero sintético (ecocuero) que eleva cualquier look. Confeccionada con canesú entallado de tiro alto a la cintura y bajo con volante amplio que aporta movimiento y estiliza la figura. Forro interior suave para máxima comodidad. La compañera ideal para salir de fiesta o una cena con botas altas.',
    fabric: 'Cuero Sintético (Ecocuero Premium) con Forro Interior Suave',
    care: 'Limpiar con un paño húmedo. No usar plancha directa.',
    fit: 'Tiro alto ceñido en cintura que estiliza la cadera con vuelo acampanado.',
    isSale: true,
    tag: 'Noche de Fiesta',
    stock: 30
  },
  {
    id: 'cb-f04',
    name: 'Minifalda Denim Clásica con Trabillas & Tiro Alto',
    category: 'faldas',
    categoryName: 'Faldas con Actitud',
    price: 64900,
    rating: 4.9,
    reviewsCount: 64,
    images: [
      '/faldas-con-actitud.jpg',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=900&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Denim Azul Clásico Vintage (Neutro)', hex: '#2563EB' },
      { name: 'Denim Celeste Lavado (Tendencia)', hex: '#93C5FD' },
      { name: 'Denim Negro Urbano (Neutro)', hex: '#18181B' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Minifalda denim estructurada de tiro alto con trabillas para cinturón y acabado limpio en bajo. El básico infalible para combinar con camisas oversize, tops o bodys y armar looks aesthetic y juveniles.',
    fabric: '100% Algodón Denim Premium Estructurado',
    care: 'Lavar en lavadora con prendas del mismo tono.',
    fit: 'Tiro alto ceñido que estiliza la silueta y realza la cintura.',
    isNew: true,
    tag: 'Streetwear Icon',
    stock: 35
  },

  // ✨ SETS & CONJUNTOS (Tejido de punto, parachute y dúos a juego)
  {
    id: 'cb-c01',
    name: 'Set Parachute Balloon & Strapless Crop',
    category: 'conjuntos',
    categoryName: 'Sets & Outfits Listos',
    price: 119900,
    originalPrice: 149900,
    rating: 5.0,
    reviewsCount: 96,
    images: [
      '/sets-outfits-listos.jpg',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Gris Humo & Negro (Neutros)', hex: '#4B5563' },
      { name: 'Rosa Pastel & Gris (Tendencia)', hex: '#F472B6' },
      { name: 'Crema Arena (Neutro)', hex: '#E7E5E4' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'El conjunto viral de dos piezas más cómodo y estiloso: pantalón parachute de silueta balloon holgada con tancas elásticas ajustables en bota y cintura, acompañado de un top strapless crop ceñido con banda interna antideslizante. El look completo para fotos en redes o salir a comer con amigas.',
    fabric: 'Nailon Técnico Ultraligero Transpirable (100% Poliamida)',
    care: 'Lavado a máquina en ciclo rápido.',
    fit: 'Contraste favorecedor: parte inferior holgada con top ajustado que define la cintura.',
    isNew: true,
    isSale: true,
    isBestSeller: true,
    tag: 'Set Viral 10/10',
    stock: 25
  },
  {
    id: 'cb-c02',
    name: 'Set Biker & Chaqueta Crop Motomami',
    category: 'conjuntos',
    categoryName: 'Sets & Outfits Listos',
    price: 114900,
    originalPrice: 139900,
    rating: 4.9,
    reviewsCount: 68,
    images: [
      'https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=900&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Negro & Blanco Biker (Neutros)', hex: '#18181B' },
      { name: 'Fucsia Neón & Negro (Tendencia)', hex: '#DB2777' },
      { name: 'Azul Cobalto & Negro (Acento)', hex: '#1E40AF' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Set deportivo y chic de inspiración motomami: chaqueta crop ajustada con cremallera frontal y cuello alto, combinada con falda short de paneles contrastantes. Ideal para salir de noche, eventos urbanos o crear contenido con actitud.',
    fabric: 'Tejido Compresivo Moldeador (85% Suplex Grueso, 15% Elastano)',
    care: 'Lavar en frío.',
    fit: 'Ajuste aerodinámico y moldeador que estiliza la silueta.',
    isSale: true,
    tag: 'Motomami Vibes',
    stock: 20
  },
  {
    id: 'cb-c03',
    name: 'Gaban Para Mujer De Paño Con Correa Unicolor Moderno',
    category: 'conjuntos',
    categoryName: 'Sets & Outfits Listos',
    price: 139900,
    originalPrice: 169900,
    rating: 4.9,
    reviewsCount: 88,
    images: [
      '/gaban-pano-camel.jpg',
      'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=900&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Camel Toffee (Neutro Cálido)', hex: '#C19A6B' },
      { name: 'Negro Clásico (Neutro)', hex: '#111827' },
      { name: 'Beige Arena Crema (Neutro)', hex: '#E5D3B3' },
      { name: 'Rojo Borgoña Vino (Tendencia)', hex: '#6B1D2F' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Gabán de paño estructurado unicolor con cuello solapa clásico y corte sastre moderno. Incorpora correa de tela a juego para ceñir la cintura y estilizar la figura femenina, bolsillos laterales ribeteados y forro interior completo. La prenda exterior infaltable para elevar cualquier outfit de día o de noche con máxima elegancia.',
    fabric: 'Paño de Lana y Poliéster de Alta Calidad con Forro Satinado Interior',
    care: 'Limpieza en seco o lavado suave a mano.',
    fit: 'Corte sastre estructurado con entalle a la cintura mediante correa regulable.',
    isNew: true,
    isBestSeller: true,
    tag: 'Prenda Estrella',
    stock: 25
  },

  // 👜 ACCESORIOS STREETWEAR (Plata, Cuero sintético y Toques Y2K)
  {
    id: 'cb-a01',
    name: 'Shoulder Bag Baguette en Ecocuero Plata Y2K',
    category: 'accesorios',
    categoryName: 'Accesorios Statement',
    price: 59900,
    originalPrice: 79900,
    rating: 5.0,
    reviewsCount: 104,
    images: [
      '/shoulder-bag-baguette-y2k.jpg',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=900&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Rosa Pastel Baby (Tendencia)', hex: '#F9A8D4' },
      { name: 'Blanco Nieve Marfil (Neutro)', hex: '#F8FAFC' },
      { name: 'Marrón Chocolate Moka (Neutro)', hex: '#4A2E1B' },
      { name: 'Negro Streetwear (Neutro)', hex: '#09090B' }
    ],
    sizes: ['ÚNICA'],
    description: 'El bolso baguette de hombro en tendencia aesthetic que eleva cualquier outfit. Confeccionado en ecocuero suave con tira frontal de hebilla metálica cuadrada plateada, cadena gruesa drapeada al frente y detalles de ojaletes remachados. Cuenta con asa al hombro y espacio ideal para celular, llaves, gloss y billetera.',
    fabric: 'Ecocuero PU Suave con Cadena Plateada y Herrajes Metálicos Inoxidables',
    care: 'Limpiar con un paño suave ligeramente húmedo.',
    fit: 'Medidas compactas pero espaciosas para celular, llaves, gloss y billetera (24 x 13 x 6 cm).',
    isNew: true,
    isSale: true,
    isBestSeller: true,
    tag: 'Bestseller Accesorio',
    stock: 45
  },
  {
    id: 'cb-a02',
    name: 'Choker Candado Corazón & Cadena Doble Grunge',
    category: 'accesorios',
    categoryName: 'Accesorios Statement',
    price: 29900,
    originalPrice: 42900,
    rating: 4.9,
    reviewsCount: 78,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=900&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Plata Grunge Pulido', hex: '#CBD5E1' },
      { name: 'Oro Cálido', hex: '#FBBF24' }
    ],
    sizes: ['ÚNICA'],
    description: 'Collar doble superpuesto con dije de mini candado con corazón grabado. El toque streetwear chic perfecto para elevar tus escotes de bodys y corsets.',
    fabric: 'Acero Inoxidable Quirúrgico Hipoalergénico con Baño de Rodio / Oro',
    care: 'Evitar contacto directo con perfumes para prolongar el brillo.',
    fit: 'Largo ajustable de 38 cm + extensión de 5 cm.',
    isSale: true,
    tag: 'Detalle Chic',
    stock: 60
  },
  {
    id: 'cb-a03',
    name: 'Gafas de Sol Cat-Eye Vintage & Set Joyería Chic',
    category: 'accesorios',
    categoryName: 'Accesorios Statement',
    price: 34900,
    rating: 4.9,
    reviewsCount: 92,
    images: [
      '/accesorios-statement.jpg',
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=900&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Negro Total Gloss (Neutro)', hex: '#18181B' },
      { name: 'Carey Ámbar Vintage (Neutro)', hex: '#78350F' },
      { name: 'Rosa Transparente (Tendencia)', hex: '#FBCFE8' }
    ],
    sizes: ['ÚNICA'],
    description: 'Montura rectangular compacta en acetato grueso con protección solar total UV400. El accesorio viral de TikTok para tus fotos de street style.',
    fabric: 'Montura de Acetato Reforzado y Lentes de Policarbonato UV400',
    care: 'Guardar siempre en funda protectora.',
    fit: 'Ajuste liviano y universal.',
    isNew: true,
    isBestSeller: true,
    tag: 'Viral en TikTok',
    stock: 55
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'Mariana Duque (21 años)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    location: 'Medellín, Colombia',
    rating: 5,
    comment: '¡El Corset Satén Bella con la falda de cuero para salir de fiesta es OTRO NIVEL! Horma la cintura increíble y el tejido no se resbala. Me sentí súper segura y las fotos quedaron hermosas.',
    productName: 'Corset Satén Bella & Minifalda Cuero',
    date: 'Hace 1 día',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Salomé Cardona (19 años)',
    avatar: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=200&auto=format&fit=crop',
    location: 'Robledo, Medellín',
    rating: 5,
    comment: 'El Body Cut-Out en suplex doble faz no transparenta absolutamente nada y moldea la cintura. Fui a comer con mis amigas y luego de fiesta sin tener que cambiarme de outfit. 10/10.',
    productName: 'Body Asimétrico Cut-Out Sculpt',
    date: 'Hace 3 días',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Valeria Gómez (23 años)',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    location: 'Envigado, Colombia',
    rating: 5,
    comment: 'La falda tablonada tennis con short interior y el shoulder bag plateado son una maravilla. El short incorporado te da muchísima tranquilidad para moverte. Llegó en menos de 24 horas y pagué contra entrega.',
    productName: 'Falda Tablonada Tenniscore & Baguette Plata',
    date: 'Hace 5 días',
    verified: true
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=600&auto=format&fit=crop',
    likes: '4.8k',
    tag: '@chicbloom_moda • Night Out & Cut-Outs'
  },
  {
    id: 'ig-2',
    image: '/corset-streetwear-chic.jpg',
    likes: '6.2k',
    tag: '#ChicBloomStreet • Corset Streetwear Chic'
  },
  {
    id: 'ig-3',
    image: '/faldas-con-actitud.jpg',
    likes: '5.8k',
    tag: '@chicbloom_moda • Minifalda Denim & Camisa Oversize'
  },
  {
    id: 'ig-4',
    image: '/sets-outfits-listos.jpg',
    likes: '7.4k',
    tag: '#BloomGirls • Sets & Outfits Listos'
  }
];
