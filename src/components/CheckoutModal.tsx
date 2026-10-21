import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  CreditCard, 
  Truck, 
  Building, 
  MessageCircle, 
  Sparkles, 
  ArrowLeft, 
  ShieldCheck, 
  Download,
  Copy,
  Check
} from 'lucide-react';
import { CartItem } from '../types';
import { formatCOP } from '../utils/formatCurrency';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  discountPercent: number;
  onClearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  discountPercent,
  onClearCart
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'details' | 'payment' | 'confirmed'>('details');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: 'Medellín',
    department: 'Antioquia',
    postalCode: '',
    notes: '',
    paymentMethod: 'card' as 'card' | 'pse' | 'cod' | 'whatsapp'
  });

  const [orderNumber, setOrderNumber] = useState<string>('');
  const [copiedOrder, setCopiedOrder] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = cartItems.reduce((s, i) => s + i.product.price * i.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const shippingCost = (subtotal - discountAmount) >= 150000 ? 0 : 12000;
  const total = subtotal - discountAmount + shippingCost;

  const handleNextToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address || !formData.city) {
      alert('Por favor completa todos los campos requeridos.');
      return;
    }
    setStep('payment');
  };

  const handleCompleteOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const generatedId = `CB-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderNumber(generatedId);
      setIsProcessing(false);
      setStep('confirmed');
      onClearCart();
    }, 1200);
  };

  const copyOrderToClipboard = () => {
    navigator.clipboard.writeText(orderNumber);
    setCopiedOrder(true);
    setTimeout(() => setCopiedOrder(false), 2000);
  };

  const orderWhatsappMessage = encodeURIComponent(
    `¡Hola CHIC BLOOM! 🌸 Acabo de realizar el pedido ${orderNumber} a nombre de ${formData.name} por un total de ${formatCOP(total)} COP.\n` +
    `Prendas:\n${cartItems.map(i => `- ${i.product.name} (${i.selectedColor.name}, Talla ${i.selectedSize}) x${i.quantity}`).join('\n')}\n` +
    `Dirección de entrega: ${formData.address}, ${formData.city}, ${formData.department}.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#EFE5E0] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#F0E4DE] bg-[#FAF6F4] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#C5A059] text-xl">🌸</span>
            <div>
              <h2 className="text-lg font-serif-luxury font-medium text-[#2C1A20]">
                {step === 'details' && 'Información de Envío'}
                {step === 'payment' && 'Método de Pago & Confirmación'}
                {step === 'confirmed' && '¡Pedido Realizado con Éxito!'}
              </h2>
              <span className="text-[11px] text-[#8C6D73]">CHIC BLOOM • Experiencia Segura</span>
            </div>
          </div>
          {step !== 'confirmed' && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white text-[#735E63] hover:text-[#2C1A20] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          
          {/* STEP 1: SHIPPING DETAILS */}
          {step === 'details' && (
            <form onSubmit={handleNextToPayment} className="space-y-4">
              <div className="bg-[#FAF4F3] p-4 rounded-2xl border border-[#ECDAD5] mb-4 text-xs text-[#7D3545] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Empaque premium perfumado con lazo satinado y tarjeta personalizada incluida.</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#5A4A4D] uppercase tracking-wider mb-1">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Laura Sofía Gómez"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FAF7F5] border border-[#DAC2B9] rounded-xl px-3 py-2 text-xs text-[#3D1E26] focus:outline-none focus:border-[#5E2B38]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5A4A4D] uppercase tracking-wider mb-1">
                    WhatsApp / Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej: +57 300 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FAF7F5] border border-[#DAC2B9] rounded-xl px-3 py-2 text-xs text-[#3D1E26] focus:outline-none focus:border-[#5E2B38]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-[#5A4A4D] uppercase tracking-wider mb-1">
                    Correo Electrónico (para confirmación) *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="tucorreo@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAF7F5] border border-[#DAC2B9] rounded-xl px-3 py-2 text-xs text-[#3D1E26] focus:outline-none focus:border-[#5E2B38]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-[#5A4A4D] uppercase tracking-wider mb-1">
                    Dirección de Entrega *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Calle / Carrera, Número de casa o apto"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-[#FAF7F5] border border-[#DAC2B9] rounded-xl px-3 py-2 text-xs text-[#3D1E26] focus:outline-none focus:border-[#5E2B38]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5A4A4D] uppercase tracking-wider mb-1">
                    Ciudad / Municipio *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Medellín, Bogotá, Cali..."
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#FAF7F5] border border-[#DAC2B9] rounded-xl px-3 py-2 text-xs text-[#3D1E26] focus:outline-none focus:border-[#5E2B38]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5A4A4D] uppercase tracking-wider mb-1">
                    Departamento / Provincia
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Antioquia, Cundinamarca..."
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full bg-[#FAF7F5] border border-[#DAC2B9] rounded-xl px-3 py-2 text-xs text-[#3D1E26] focus:outline-none focus:border-[#5E2B38]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-[#5A4A4D] uppercase tracking-wider mb-1">
                    Notas adicionales o dedicación de regalo (opcional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ej: Dejar en portería o escribir nota 'Feliz cumpleaños Sofía'..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#FAF7F5] border border-[#DAC2B9] rounded-xl px-3 py-2 text-xs text-[#3D1E26] focus:outline-none focus:border-[#5E2B38]"
                  />
                </div>
              </div>

              {/* Summary Mini Bar */}
              <div className="pt-4 border-t border-[#E8DAD4] flex justify-between items-center text-xs">
                <span className="text-[#735E63]">Total a pagar:</span>
                <span className="text-base font-bold text-[#5E2B38]">{formatCOP(total)} COP</span>
              </div>

              <button
                type="submit"
                className="w-full bg-[#5E2B38] hover:bg-[#471E28] text-white py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <span>Continuar al Pago</span>
              </button>
            </form>
          )}

          {/* STEP 2: PAYMENT METHOD SELECTION */}
          {step === 'payment' && (
            <div className="space-y-6">
              <button
                onClick={() => setStep('details')}
                className="text-xs text-[#7D3545] hover:text-[#5E2B38] font-medium flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Volver a datos de envío</span>
              </button>

              <div className="space-y-3">
                <label className="block text-xs font-semibold text-[#5A4A4D] uppercase tracking-wider">
                  Selecciona cómo deseas pagar:
                </label>

                {/* Option 1: Credit Card */}
                <label 
                  className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                    formData.paymentMethod === 'card' 
                      ? 'border-[#5E2B38] bg-[#FAF4F3] ring-1 ring-[#5E2B38]' 
                      : 'border-[#E2D4CD] bg-white hover:bg-[#FAF7F5]'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    className="mt-1 accent-[#5E2B38]"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#2C1A20] flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-[#5E2B38]" />
                        Tarjeta de Crédito / Débito (Visa, Mastercard, Amex)
                      </span>
                      <span className="text-[10px] bg-rose-100 text-[#7D3545] px-2 py-0.5 rounded-md font-semibold">
                        Instantáneo
                      </span>
                    </div>
                    <p className="text-[11px] text-[#8C6D73] mt-1">
                      Pasarela segura certificada con encriptación SSL de 256 bits.
                    </p>
                  </div>
                </label>

                {/* Option 2: PSE / Bank Transfer */}
                <label 
                  className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                    formData.paymentMethod === 'pse' 
                      ? 'border-[#5E2B38] bg-[#FAF4F3] ring-1 ring-[#5E2B38]' 
                      : 'border-[#E2D4CD] bg-white hover:bg-[#FAF7F5]'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="pse"
                    checked={formData.paymentMethod === 'pse'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'pse' })}
                    className="mt-1 accent-[#5E2B38]"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#2C1A20] flex items-center gap-2">
                        <Building className="w-4 h-4 text-[#5E2B38]" />
                        PSE / Transferencia Bancaria Directa (Bancolombia, Nequi, Daviplata)
                      </span>
                    </div>
                    <p className="text-[11px] text-[#8C6D73] mt-1">
                      Te enviaremos los datos de transferencia y botón directo para pagar.
                    </p>
                  </div>
                </label>

                {/* Option 3: Cash On Delivery */}
                <label 
                  className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                    formData.paymentMethod === 'cod' 
                      ? 'border-[#5E2B38] bg-[#FAF4F3] ring-1 ring-[#5E2B38]' 
                      : 'border-[#E2D4CD] bg-white hover:bg-[#FAF7F5]'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                    className="mt-1 accent-[#5E2B38]"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#2C1A20] flex items-center gap-2">
                        <Truck className="w-4 h-4 text-[#5E2B38]" />
                        Pago Contra Entrega (Paga al recibir en tu puerta)
                      </span>
                    </div>
                    <p className="text-[11px] text-[#8C6D73] mt-1">
                      Disponible para Medellín, Valle de Aburrá y principales ciudades de Colombia.
                    </p>
                  </div>
                </label>

                {/* Option 4: Direct WhatsApp Order */}
                <label 
                  className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                    formData.paymentMethod === 'whatsapp' 
                      ? 'border-emerald-600 bg-emerald-50 ring-1 ring-emerald-600' 
                      : 'border-[#E2D4CD] bg-white hover:bg-[#FAF7F5]'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="whatsapp"
                    checked={formData.paymentMethod === 'whatsapp'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'whatsapp' })}
                    className="mt-1 accent-emerald-600"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-900 flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-emerald-600" />
                        Finalizar pedido con una Asesora por WhatsApp
                      </span>
                      <span className="text-[10px] bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded-md font-semibold">
                        Recomendado
                      </span>
                    </div>
                    <p className="text-[11px] text-emerald-700 mt-1">
                      Te confirmamos tallas, fotos adicionales y coordinamos la entrega al instante.
                    </p>
                  </div>
                </label>
              </div>

              {/* Order Final Summary */}
              <div className="bg-[#FAF7F5] p-4 rounded-2xl border border-[#E8DAD4] space-y-2 text-xs">
                <div className="flex justify-between text-[#735E63]">
                  <span>Destinataria:</span>
                  <span className="font-semibold text-[#3D1E26]">{formData.name} ({formData.city})</span>
                </div>
                <div className="flex justify-between text-[#735E63]">
                  <span>Total final a pagar:</span>
                  <span className="text-sm font-bold text-[#5E2B38]">{formatCOP(total)} COP</span>
                </div>
              </div>

              <button
                id="btn-confirm-order"
                onClick={handleCompleteOrder}
                disabled={isProcessing}
                className="w-full bg-[#5E2B38] hover:bg-[#471E28] text-white py-4 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <Sparkles className="w-4 h-4 animate-spin text-[#E2C992]" />
                    <span>Generando tu pedido...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4 text-[#E2C992]" />
                    <span>Confirmar y Finalizar Pedido</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* STEP 3: ORDER CONFIRMED */}
          {step === 'confirmed' && (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-in zoom-in">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-serif-luxury font-medium text-[#2C1A20]">
                  ¡Gracias por tu compra, {formData.name.split(' ')[0]}! 🌸
                </h3>
                <p className="text-xs text-[#735E63] max-w-md mx-auto">
                  Tu orden ha sido registrada exitosamente. Hemos enviado la confirmación a <strong>{formData.email}</strong>.
                </p>
              </div>

              {/* Order Number Box */}
              <div className="bg-[#FAF4F3] border border-[#ECD1D5] rounded-2xl p-4 max-w-sm mx-auto flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8C6D73]">Número de Pedido</span>
                  <p className="text-lg font-bold font-serif-luxury text-[#5E2B38]">{orderNumber}</p>
                </div>
                <button
                  onClick={copyOrderToClipboard}
                  className="p-2 bg-white rounded-xl border border-[#DAC2B9] text-xs text-[#5A4A4D] hover:text-[#5E2B38] transition-colors flex items-center gap-1"
                >
                  {copiedOrder ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedOrder ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>

              {/* Action Buttons: WhatsApp notify & Close */}
              <div className="space-y-3 pt-2">
                <a
                  href={`https://wa.me/573008902566?text=${orderWhatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Notificar a una Asesora por WhatsApp</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full bg-[#FAF4F3] hover:bg-[#EFE4DE] text-[#5E2B38] py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors border border-[#ECDAD5]"
                >
                  Seguir Comprando
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
