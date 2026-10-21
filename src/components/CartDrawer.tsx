import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  ArrowRight, 
  ShoppingBag, 
  Sparkles, 
  Truck, 
  ShieldCheck,
  Tag
} from 'lucide-react';
import { CartItem } from '../types';
import { formatCOP } from '../utils/formatCurrency';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onProceedToCheckout: (appliedDiscountPercent: number) => void;
  onExploreCatalog: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  onExploreCatalog,
}) => {
  if (!isOpen) return null;

  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const discountPercent = promoApplied ? 10 : 0;
  const discountAmount = (subtotal * discountPercent) / 100;
  
  const freeShippingThreshold = 150000;
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - (subtotal - discountAmount));
  const shippingCost = subtotal > 0 && amountNeededForFreeShipping === 0 ? 0 : subtotal > 0 ? 12000 : 0;
  const total = subtotal - discountAmount + shippingCost;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'BLOOM10' || promoCode.trim().toUpperCase() === 'CHIC10') {
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Código no válido. Usa BLOOM10 para 10% OFF');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end">
      {/* Drawer Overlay Area to close */}
      <div className="flex-1" onClick={onClose} />

      {/* Slide-over Content Container */}
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300 border-l border-[#EFE5E0]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#F0E4DE] bg-[#FAF6F4] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#5E2B38]" />
            <h2 className="text-lg font-serif-luxury font-medium text-[#2C1A20]">
              Bolsa de Compras ({cartItems.reduce((s, i) => s + i.quantity, 0)})
            </h2>
          </div>
          <button
            id="btn-close-cart-drawer"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white text-[#735E63] hover:text-[#2C1A20] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-[#FAF0F2] px-5 py-3 border-b border-[#ECD1D5]">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-[#7D3545] font-semibold flex items-center gap-1">
              <Truck className="w-3.5 h-3.5" />
              {amountNeededForFreeShipping === 0 ? (
                <strong className="text-emerald-700">¡Felicidades! Tienes ENVÍO GRATIS 🎉</strong>
              ) : (
                <span>Agrega <strong>{formatCOP(amountNeededForFreeShipping)}</strong> más para envío gratis</span>
              )}
            </span>
            <span className="text-[10px] text-[#A06C76]">Meta: {formatCOP(freeShippingThreshold)}</span>
          </div>
          <div className="w-full bg-[#EAD4D8] h-2 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-[#C5A059] to-[#5E2B38] h-full transition-all duration-500 rounded-full"
              style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-[#F5EDE8]">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 px-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FAF2ED] text-[#8C6D73] flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8 text-[#C5A059]" />
              </div>
              <p className="font-serif-luxury text-lg text-[#3D1E26]">Tu bolsa está vacía</p>
              <p className="text-xs text-[#8C6D73] max-w-xs mx-auto">
                Descubre nuestros vestidos de seda, blusas con lazos y conjuntos exclusivos para ti.
              </p>
              <button
                onClick={() => { onClose(); onExploreCatalog(); }}
                className="bg-[#5E2B38] hover:bg-[#471E28] text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors inline-block"
              >
                Explorar Catálogo
              </button>
            </div>
          ) : (
            cartItems.map((item, idx) => (
              <div key={`${item.product.id}-${item.selectedColor.name}-${item.selectedSize}-${idx}`} className="pt-4 first:pt-0 flex gap-4">
                {/* Thumbnail */}
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-20 h-24 object-cover rounded-xl bg-[#FAF4F3] border border-[#EADECE] shrink-0"
                />

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="font-serif-luxury text-sm font-medium text-[#2C1A20] line-clamp-1">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(idx)}
                        className="text-[#A89498] hover:text-[#C74D68] p-1 transition-colors"
                        title="Eliminar de la bolsa"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-[11px] text-[#8C6D73] mt-0.5">
                      Color: <strong className="text-[#3D1E26]">{item.selectedColor.name}</strong> | Talla: <strong className="text-[#3D1E26]">{item.selectedSize}</strong>
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    {/* Quantity controls */}
                    <div className="flex items-center border border-[#DAC2B9] rounded-lg bg-[#FAF6F4]">
                      <button
                        onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                        className="px-2 py-0.5 text-xs text-[#5A4A4D] hover:bg-[#EFE5E0]"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-bold text-[#3D1E26]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                        className="px-2 py-0.5 text-xs text-[#5A4A4D] hover:bg-[#EFE5E0]"
                      >
                        +
                      </button>
                    </div>

                    <span className="font-bold text-sm text-[#3D1E26]">
                      {formatCOP(item.product.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Summary & Checkout */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-[#F0E4DE] bg-[#FAF6F4] space-y-4">
            
            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="space-y-1">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-[#8C6D73] absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Código (Ej: BLOOM10)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full bg-white border border-[#DAC2B9] rounded-xl pl-8 pr-3 py-2 text-xs text-[#3D1E26] uppercase focus:outline-none focus:border-[#5E2B38]"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#5E2B38] text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-[#471E28] transition-colors"
                >
                  Aplicar
                </button>
              </div>
              {promoApplied && (
                <p className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#C5A059]" /> ¡Cupón BLOOM10 aplicado! 10% de descuento.
                </p>
              )}
              {promoError && (
                <p className="text-[11px] text-[#C74D68]">{promoError}</p>
              )}
            </form>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-[#735E63] pt-2 border-t border-[#E8DAD4]">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-semibold text-[#3D1E26]">{formatCOP(subtotal)}</span>
              </div>
              {promoApplied && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Descuento (10%):</span>
                  <span>-{formatCOP(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Envío:</span>
                <span className="font-semibold text-[#3D1E26]">
                  {shippingCost === 0 ? (
                    <span className="text-emerald-700 font-bold uppercase">Gratis</span>
                  ) : (
                    formatCOP(shippingCost)
                  )}
                </span>
              </div>
              <div className="flex justify-between text-base font-serif-luxury font-bold text-[#2C1A20] pt-2 border-t border-[#E8DAD4]">
                <span>Total Estimado:</span>
                <span>{formatCOP(total)} COP</span>
              </div>
            </div>

            {/* Proceed to Checkout Button */}
            <button
              id="btn-cart-checkout"
              onClick={() => onProceedToCheckout(discountPercent)}
              className="w-full bg-[#5E2B38] hover:bg-[#471E28] text-white py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Proceder al Pago</span>
              <ArrowRight className="w-4 h-4 text-[#E2C992] group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center justify-center gap-4 text-[10px] text-[#8C6D73]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#C5A059]" /> Pago 100% Encriptado
              </span>
              <span>•</span>
              <span>Garantía de Devolución</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
