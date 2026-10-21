import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { Product, ProductColor, ProductSize } from '../types';
import { formatCOP } from '../utils/formatCurrency';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveWishlist: (product: Product) => void;
  onAddToCart: (product: Product, color: ProductColor, size: ProductSize) => void;
  onQuickView: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveWishlist,
  onAddToCart,
  onQuickView,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end">
      <div className="flex-1" onClick={onClose} />

      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300 border-l border-[#EFE5E0]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#F0E4DE] bg-[#FAF6F4] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#C74D68] fill-[#C74D68]" />
            <h2 className="text-lg font-serif-luxury font-medium text-[#2C1A20]">
              Lista de Deseos ({wishlistProducts.length})
            </h2>
          </div>
          <button
            id="btn-close-wishlist"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white text-[#735E63] hover:text-[#2C1A20] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-[#F5EDE8]">
          {wishlistProducts.length === 0 ? (
            <div className="text-center py-16 px-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FAF0F2] text-[#C74D68] flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8" />
              </div>
              <p className="font-serif-luxury text-lg text-[#3D1E26]">No tienes prendas guardadas</p>
              <p className="text-xs text-[#8C6D73] max-w-xs mx-auto">
                Toca el corazón en cualquier prenda para guardarla y revisarla cuando quieras.
              </p>
            </div>
          ) : (
            wishlistProducts.map((product) => (
              <div key={product.id} className="pt-4 first:pt-0 flex gap-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-20 h-24 object-cover rounded-xl bg-[#FAF4F3] border border-[#EADECE] cursor-pointer"
                  onClick={() => { onClose(); onQuickView(product); }}
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 
                        onClick={() => { onClose(); onQuickView(product); }}
                        className="font-serif-luxury text-sm font-medium text-[#2C1A20] hover:text-[#7D3545] cursor-pointer line-clamp-1"
                      >
                        {product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveWishlist(product)}
                        className="text-[#A89498] hover:text-[#C74D68] p-1 transition-colors"
                        title="Eliminar de favoritos"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-xs font-bold text-[#3D1E26] mt-1">
                      {formatCOP(product.price)}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      onAddToCart(product, product.colors[0], product.sizes[0]);
                      onRemoveWishlist(product);
                    }}
                    className="mt-2 w-full bg-[#FAF4F3] hover:bg-[#5E2B38] text-[#5E2B38] hover:text-white border border-[#ECDAD5] py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Mover a la Bolsa</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {wishlistProducts.length > 0 && (
          <div className="p-5 border-t border-[#F0E4DE] bg-[#FAF6F4]">
            <button
              onClick={onClose}
              className="w-full bg-[#5E2B38] hover:bg-[#471E28] text-white py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Continuar Explorando
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
