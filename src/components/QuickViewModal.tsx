import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  ShoppingBag, 
  Star, 
  Sparkles, 
  Truck, 
  Ruler, 
  Check, 
  ShieldCheck, 
  MessageCircle,
  ChevronRight
} from 'lucide-react';
import { Product, ProductColor, ProductSize } from '../types';
import { formatCOP } from '../utils/formatCurrency';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, color: ProductColor, size: ProductSize, quantity: number) => void;
  onDirectCheckout: (product: Product, color: ProductColor, size: ProductSize, quantity: number) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onDirectCheckout,
  onToggleWishlist,
  isWishlisted,
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<ProductSize>(product.sizes[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'descripcion' | 'composicion' | 'cuidados'>('descripcion');
  const [showSizeGuide, setShowSizeGuide] = useState<boolean>(false);
  const [addedSuccess, setAddedSuccess] = useState<boolean>(false);

  const handleAdd = () => {
    onAddToCart(product, selectedColor, selectedSize, quantity);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleBuyNow = () => {
    onDirectCheckout(product, selectedColor, selectedSize, quantity);
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `¡Hola CHIC BLOOM! 🌸 Me encanta el "${product.name}" (Color: ${selectedColor.name}, Talla: ${selectedSize}). ¿Tienen disponibilidad inmediata?`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6">
      <div 
        className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#EFE5E0] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="btn-close-quickview"
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 hover:bg-[#FAF4F3] text-[#5A4A4D] hover:text-[#3D1E26] shadow-md z-30 transition-colors"
          aria-label="Cerrar vista rápida"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 max-h-[90vh] overflow-y-auto">
          
          {/* Left: Gallery Column */}
          <div className="p-6 bg-[#FAF6F4] flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#EFE5E0]">
            <div className="space-y-4">
              {/* Main Active Image */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-sm border border-[#EADECE]">
                <img
                  src={product.images[selectedImageIndex] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />

                {/* Wishlist floating toggle */}
                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`absolute top-3 left-3 p-2.5 rounded-full backdrop-blur-md shadow-sm transition-all ${
                    isWishlisted 
                      ? 'bg-rose-50 text-[#C74D68]' 
                      : 'bg-white/80 hover:bg-white text-[#5A4A4D] hover:text-[#C74D68]'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#C74D68]' : ''}`} />
                </button>

                {/* Badge if Sale */}
                {product.isSale && (
                  <span className="absolute bottom-3 left-3 bg-[#C74D68] text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow-xs">
                    Oferta Especial
                  </span>
                )}
              </div>

              {/* Thumbnails if multiple images */}
              {product.images.length > 1 && (
                <div className="flex gap-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`w-16 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImageIndex === idx 
                          ? 'border-[#5E2B38] ring-1 ring-[#5E2B38]' 
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Vista miniatura" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Guarantees bar */}
            <div className="pt-4 border-t border-[#E8DAD4] mt-4 flex items-center justify-between text-[11px] text-[#735E63]">
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-[#5E2B38]" /> Envío express 24-48h
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" /> Calidad Garantizada
              </span>
            </div>
          </div>

          {/* Right: Details & Purchase Column */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              {/* Category & Rating */}
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.25em] text-[#A06C76] font-semibold">
                  {product.categoryName}
                </span>
                <div className="flex items-center gap-1 bg-[#FAF2ED] px-2.5 py-1 rounded-full border border-[#ECDCCF]">
                  <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                  <span className="text-xs font-bold text-[#3D1E26]">{product.rating}</span>
                  <span className="text-[10px] text-[#8C6D73]">({product.reviewsCount} opiniones)</span>
                </div>
              </div>

              {/* Product Title */}
              <h2 className="text-2xl sm:text-3xl font-serif-luxury font-medium text-[#2C1A20]">
                {product.name}
              </h2>

              {/* Price & Stock */}
              <div className="flex items-baseline justify-between border-b border-[#F5EDE8] pb-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-bold font-sans-clean text-[#3D1E26]">
                    {formatCOP(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-[#A89498] line-through">
                      {formatCOP(product.originalPrice)}
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="text-xs font-bold text-[#C74D68] bg-rose-50 px-2 py-0.5 rounded-md">
                      Ahorras {formatCOP(product.originalPrice - product.price)}
                    </span>
                  )}
                </div>
                <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  En stock ({product.stock} disponibles)
                </span>
              </div>

              {/* Color Selector */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#5A4A4D] flex justify-between">
                  <span>Color Seleccionado:</span>
                  <span className="text-[#3D1E26] font-bold">{selectedColor.name}</span>
                </label>
                <div className="flex items-center gap-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${
                        selectedColor.name === c.name
                          ? 'border-[#5E2B38] bg-[#FAF4F3] text-[#5E2B38] ring-1 ring-[#5E2B38]'
                          : 'border-[#E2D4CD] bg-white text-[#5A4A4D] hover:bg-[#FAF4F3]'
                      }`}
                    >
                      <span className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ backgroundColor: c.hex }} />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector + Size Guide Link */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#5A4A4D]">
                    Talla Seleccionada: <strong className="text-[#3D1E26]">{selectedSize}</strong>
                  </label>
                  <button
                    onClick={() => setShowSizeGuide(!showSizeGuide)}
                    className="text-xs text-[#7D3545] hover:text-[#5E2B38] font-semibold underline flex items-center gap-1"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>Guía de Tallas</span>
                  </button>
                </div>

                <div className="grid grid-cols-5 gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                        selectedSize === sz
                          ? 'bg-[#5E2B38] text-white border-[#5E2B38] shadow-xs'
                          : 'bg-[#FAF6F4] text-[#4A383D] border-[#E5D7D0] hover:bg-[#F2E8E4]'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Guide Accordion Table if toggled */}
              {showSizeGuide && (
                <div className="p-4 bg-[#FAF7F5] rounded-2xl border border-[#E6D8D0] text-xs space-y-2 animate-in fade-in duration-200">
                  <p className="font-bold text-[#3D1E26] text-[11px] uppercase tracking-wider">
                    Tabla de Medidas (en centímetros)
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-center text-[11px]">
                      <thead>
                        <tr className="border-b border-[#E8DAD4] text-[#7D3545]">
                          <th className="py-1">Talla</th>
                          <th className="py-1">Busto</th>
                          <th className="py-1">Cintura</th>
                          <th className="py-1">Cadera</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#EFE5E0] text-[#5A4A4D]">
                        <tr><td className="py-1 font-bold">XS</td><td>82-86 cm</td><td>62-66 cm</td><td>88-92 cm</td></tr>
                        <tr><td className="py-1 font-bold">S</td><td>86-90 cm</td><td>66-70 cm</td><td>92-96 cm</td></tr>
                        <tr><td className="py-1 font-bold">M</td><td>90-94 cm</td><td>70-74 cm</td><td>96-100 cm</td></tr>
                        <tr><td className="py-1 font-bold">L</td><td>94-98 cm</td><td>74-78 cm</td><td>100-104 cm</td></tr>
                        <tr><td className="py-1 font-bold">XL</td><td>98-102 cm</td><td>78-82 cm</td><td>104-108 cm</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Quantity Counter */}
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#5A4A4D]">
                  Cantidad:
                </span>
                <div className="flex items-center border border-[#DAC2B9] rounded-xl overflow-hidden bg-[#FAF6F4]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1.5 text-sm font-bold text-[#5A4A4D] hover:bg-[#EFE5E0]"
                  >
                    -
                  </button>
                  <span className="px-4 py-1.5 text-xs font-bold text-[#3D1E26]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="px-3 py-1.5 text-sm font-bold text-[#5A4A4D] hover:bg-[#EFE5E0]"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Information Tabs (Descripción, Composición, Cuidados) */}
              <div className="pt-3 border-t border-[#F5EDE8]">
                <div className="flex border-b border-[#E8DAD4] text-xs font-medium">
                  <button
                    onClick={() => setActiveTab('descripcion')}
                    className={`pb-2 mr-4 ${activeTab === 'descripcion' ? 'text-[#5E2B38] font-bold border-b-2 border-[#5E2B38]' : 'text-[#8C6D73]'}`}
                  >
                    Descripción
                  </button>
                  <button
                    onClick={() => setActiveTab('composicion')}
                    className={`pb-2 mr-4 ${activeTab === 'composicion' ? 'text-[#5E2B38] font-bold border-b-2 border-[#5E2B38]' : 'text-[#8C6D73]'}`}
                  >
                    Tejido & Calce
                  </button>
                  <button
                    onClick={() => setActiveTab('cuidados')}
                    className={`pb-2 ${activeTab === 'cuidados' ? 'text-[#5E2B38] font-bold border-b-2 border-[#5E2B38]' : 'text-[#8C6D73]'}`}
                  >
                    Cuidados
                  </button>
                </div>

                <div className="pt-3 text-xs text-[#6B575B] leading-relaxed">
                  {activeTab === 'descripcion' && <p>{product.description}</p>}
                  {activeTab === 'composicion' && (
                    <div className="space-y-1">
                      <p><strong>Composición:</strong> {product.fabric}</p>
                      <p><strong>Corte & Silueta:</strong> {product.fit}</p>
                    </div>
                  )}
                  {activeTab === 'cuidados' && <p>{product.care}</p>}
                </div>
              </div>

            </div>

            {/* Action Buttons: Agregar a la bolsa, Comprar ahora, Consultar WhatsApp */}
            <div className="space-y-3 pt-4 border-t border-[#F5EDE8]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  id="btn-modal-add-to-cart"
                  onClick={handleAdd}
                  disabled={addedSuccess}
                  className={`w-full py-3.5 px-4 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md ${
                    addedSuccess
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#5E2B38] hover:bg-[#471E28] text-white'
                  }`}
                >
                  {addedSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>¡Agregado a la bolsa!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-[#F3E5D8]" />
                      <span>Agregar a la Bolsa</span>
                    </>
                  )}
                </button>

                <button
                  id="btn-modal-buy-now"
                  onClick={handleBuyNow}
                  className="w-full py-3.5 px-4 rounded-full text-xs font-semibold uppercase tracking-wider transition-all bg-[#C5A059] hover:bg-[#B38728] text-white shadow-md flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>Comprar ahora</span>
                </button>
              </div>

              {/* Direct WhatsApp Consultation */}
              <a
                href={`https://wa.me/573008902566?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-full text-xs font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Consultar por WhatsApp con una asesora</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
