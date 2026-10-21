export type ProductCategory =
  | 'todos'
  | 'novedades'
  | 'mas-vendidos'
  | 'ofertas'
  | 'bodys'
  | 'corsets'
  | 'vestidos'
  | 'faldas'
  | 'conjuntos'
  | 'accesorios';

export interface ProductColor {
  name: string;
  hex: string;
  image?: string;
}

export type ProductSize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'ÚNICA';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryName: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  images: string[];
  colors: ProductColor[];
  sizes: ProductSize[];
  description: string;
  fabric: string;
  care: string;
  fit: string;
  isNew?: boolean;
  isSale?: boolean;
  isBestSeller?: boolean;
  tag?: string;
  stock: number;
}

export interface CartItem {
  product: Product;
  selectedColor: ProductColor;
  selectedSize: ProductSize;
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  location: string;
  rating: number;
  comment: string;
  productName: string;
  date: string;
  verified: boolean;
}

export interface CategoryInfo {
  id: ProductCategory;
  title: string;
  subtitle: string;
  image: string;
  itemCount: number;
}
