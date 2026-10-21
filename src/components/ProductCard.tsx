import React, { useState } from 'react';
import { Heart, Eye, ShoppingBag, Star, Check, Zap } from 'lucide-react';
import { Product, ProductColor, ProductSize } from '../types';
import { formatCOP } from '../utils/formatCurrency';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, color: ProductColor, size: ProductSize) => void;
  onBuyNow?: (product: Product, color: ProductColor, size: ProductSize) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  isWishlisted,
}) => {
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<ProductSize>(product.sizes[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAddQuick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedColor, selectedSize);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  const handleDirectBuy = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onBuyNow) {
      onBuyNow(product, selectedColor, selectedSize);
    } else {
      onAddToCart(product, selectedColor, selectedSize);
    }
  };

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div 
      id={`product-card-${product.id}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#EFE5E0] hover:border-[#DAC2B9] transition-all duration-300 hover:shadow-xl relative"
    >
      {/* Top Image Container */}
      <div 
        className="relative aspect-[3/4] overflow-hidden bg-[#FAF4F3] cursor-pointer"
        onClick={() => onQuickView(product)}
        onMouseEnter={() => product.images.length > 1 && setCurrentImageIndex(1)}
        onMouseLeave={() => setCurrentImageIndex(0)}
      >
        {/* Main & Secondary Image Transition */}
        <img
          src={product.images[currentImageIndex] || product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Badges (New, Sale, Best Seller) */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {product.isNew && (
            <span className="bg-[#5E2B38] text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-xs">
              Nuevo
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-[#C5A059] text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-xs">
              Top Ventas
            </span>
          )}
          {discountPercent && (
            <span className="bg-[#C74D68] text-white text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full shadow-xs">
              -{discountPercent}%
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          id={`btn-wishlist-${product.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all duration-200 z-10 ${
            isWishlisted 
              ? 'bg-rose-50 text-[#C74D68] shadow-sm' 
              : 'bg-white/80 hover:bg-white text-[#5A4A4D] hover:text-[#C74D68]'
          }`}
          title={isWishlisted ? "Quitar de favoritos" : "Guardar en favoritos"}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#C74D68]' : ''}`} />
        </button>

        {/* Quick View Button on Image hover */}
        <div className="absolute inset-x-3 bottom-3 hidden lg:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            id={`btn-quickview-${product.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="w-full bg-white/95 hover:bg-white text-[#3D1E26] py-2.5 px-3 rounded-xl text-xs font-semibold tracking-wider uppercase shadow-md flex items-center justify-center gap-1.5 transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-[#8C6D73]" />
            <span>Vista Rápida</span>
          </button>
        </div>
      </div>

      {/* Product Details Information */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-[#8C6D73] mb-1.5">
            <span className="uppercase tracking-widest text-[10px] text-[#A06C76] font-semibold">
              {product.categoryName}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
              <span className="font-semibold text-[#3D1E26] text-xs">{product.rating}</span>
              <span className="text-[#A89498] text-[10px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => onQuickView(product)}
            className="font-serif-luxury text-base sm:text-lg font-medium text-[#2C1A20] hover:text-[#7D3545] transition-colors cursor-pointer line-clamp-1 mb-1.5"
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-[#735E63] font-light line-clamp-2 leading-relaxed mb-3">
            {product.description}
          </p>

          {/* Price in COP */}
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-lg sm:text-xl font-bold font-sans-clean text-[#3D1E26]">
              {formatCOP(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#A89498] line-through">
                {formatCOP(product.originalPrice)}
              </span>
            )}
          </div>
        </div>

        {/* Options: Colors & Sizes */}
        <div className="pt-3 border-t border-[#F5EDE8] space-y-3">
          {/* Colors Selection Swatches */}
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-[#735E63] font-medium">
              Color: <span className="text-[#3D1E26] font-semibold">{selectedColor.name}</span>
            </span>
            <div className="flex items-center gap-1.5">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c)}
                  className={`w-4 h-4 rounded-full border transition-all ${
                    selectedColor.name === c.name 
                      ? 'ring-2 ring-[#5E2B38] ring-offset-1 scale-110' 
                      : 'border-[#DAC2B9] hover:scale-105'
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                  aria-label={c.name}
                />
              ))}
            </div>
          </div>

          {/* Size Badges */}
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-[#735E63] font-medium">Tallas:</span>
            <div className="flex items-center gap-1">
              {product.sizes.map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`text-[10px] px-2 py-0.5 rounded border font-medium transition-colors ${
                    selectedSize === sz
                      ? 'bg-[#5E2B38] text-white border-[#5E2B38]'
                      : 'bg-[#FAF6F4] text-[#5A4A4D] border-[#E8DAD4] hover:bg-[#F2E8E4]'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons: "Comprar ahora" and "Agregar a bolsa" */}
          <div className="pt-2 flex flex-col gap-2">
            <button
              id={`btn-buynow-${product.id}`}
              onClick={handleDirectBuy}
              className="w-full bg-[#5E2B38] hover:bg-[#471E28] text-white py-2.5 px-4 rounded-xl text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm transition-all duration-200 active:scale-98"
            >
              <Zap className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span>Comprar ahora</span>
            </button>

            <button
              id={`btn-addcart-${product.id}`}
              onClick={handleAddQuick}
              disabled={addedAnimation}
              className={`w-full py-2 px-3 rounded-xl text-xs font-semibold tracking-wider transition-all duration-200 flex items-center justify-center gap-2 border ${
                addedAnimation
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-[#FAF4F3] hover:bg-[#F5EAE6] text-[#5E2B38] border-[#ECDAD5]'
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>¡Agregado a la Bolsa!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5 text-[#5E2B38]" />
                  <span>Agregar a la Bolsa</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
