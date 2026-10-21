import React, { useState } from 'react';
import { 
  Instagram, 
  Facebook, 
  Sparkles, 
  Send, 
  ShieldCheck, 
  Lock, 
  Heart,
  MessageCircle,
  CreditCard
} from 'lucide-react';
import { ProductCategory } from '../types';

interface FooterProps {
  onSelectCategory: (cat: ProductCategory) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onNavigateToSection,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#2D1B20] text-[#F3E5D8] pt-16 pb-10 border-t border-[#47222B] font-sans-clean">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Club Bloom Strip */}
        <div className="bg-[#3D1E26] rounded-3xl p-8 sm:p-10 mb-16 border border-[#542834] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E2C992] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Club Exclusivo Chic Bloom</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif-luxury text-white">
                Recibe 10% OFF en tu primera compra
              </h3>
              <p className="text-xs text-rose-200/80 max-w-md">
                Sé la primera en enterarte de nuestros lanzamientos de temporada, ventas privadas y guías de estilo exclusivas.
              </p>
            </div>

            <div className="lg:col-span-6">
              {subscribed ? (
                <div className="bg-[#542834] p-4 rounded-2xl border border-[#7D3545] text-center space-y-1 animate-in fade-in">
                  <p className="text-sm font-serif-luxury font-bold text-[#E2C992]">
                    ¡Bienvenida al universo CHIC BLOOM! 🌸
                  </p>
                  <p className="text-xs text-rose-100">
                    Usa tu cupón <strong>BLOOM10</strong> al finalizar tu compra para 10% de descuento.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Ingresa tu correo electrónico"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3.5 text-xs text-white placeholder-rose-200/60 focus:outline-none focus:border-[#E2C992] backdrop-blur-xs"
                  />
                  <button
                    type="submit"
                    className="bg-[#C5A059] hover:bg-[#B38728] text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Unirme</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#47222B]">
          
          {/* Column 1: Brand & Essence */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[#C5A059] text-2xl">🌸</span>
              <span className="font-serif-luxury text-2xl font-bold tracking-[0.2em] text-white">
                CHIC BLOOM
              </span>
            </div>
            <p className="text-sm font-serif-luxury italic text-[#E2C992]">
              “Florece con tu propio estilo.”
            </p>
            <p className="text-xs text-rose-200/80 max-w-sm leading-relaxed">
              Tienda de moda femenina creada para expresar la personalidad y esencia de cada mujer a través de la ropa, con prendas modernas, delicadas y sofisticadas para cada momento especial.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C5A059] text-white flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C5A059] text-white flex items-center justify-center transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/573008902566"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors"
                title="WhatsApp Oficial"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Categorías */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E2C992]">
              Colecciones
            </h4>
            <ul className="space-y-2 text-xs text-rose-100/80">
              <li>
                <button onClick={() => { onSelectCategory('novedades'); onNavigateToSection('catalogo'); }} className="hover:text-white transition-colors">
                  Novedades de Temporada
                </button>
              </li>
              <li>
                <button onClick={() => { onSelectCategory('mas-vendidos'); onNavigateToSection('catalogo'); }} className="hover:text-white transition-colors">
                  Más Vendidos
                </button>
              </li>
              <li>
                <button onClick={() => { onSelectCategory('bodys'); onNavigateToSection('catalogo'); }} className="hover:text-white transition-colors">
                  Bodys Cut-Out & Seamless
                </button>
              </li>
              <li>
                <button onClick={() => { onSelectCategory('corsets'); onNavigateToSection('catalogo'); }} className="hover:text-white transition-colors">
                  Corsets Satén & Denim
                </button>
              </li>
              <li>
                <button onClick={() => { onSelectCategory('vestidos'); onNavigateToSection('catalogo'); }} className="hover:text-white transition-colors">
                  Vestidos Juveniles
                </button>
              </li>
              <li>
                <button onClick={() => { onSelectCategory('faldas'); onNavigateToSection('catalogo'); }} className="hover:text-white transition-colors">
                  Faldas Tablonadas & Cargo
                </button>
              </li>
              <li>
                <button onClick={() => { onSelectCategory('conjuntos'); onNavigateToSection('catalogo'); }} className="hover:text-white transition-colors">
                  Conjuntos Parachute & Street Sets
                </button>
              </li>
              <li>
                <button onClick={() => { onSelectCategory('accesorios'); onNavigateToSection('catalogo'); }} className="hover:text-white transition-colors">
                  Shoulder Bags, Chokers & Gafas
                </button>
              </li>
              <li>
                <button onClick={() => { onSelectCategory('ofertas'); onNavigateToSection('catalogo'); }} className="text-[#F29CA3] font-semibold hover:text-white transition-colors">
                  Ofertas Especiales
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Empresa & Nosotros */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E2C992]">
              Sobre Nosotros
            </h4>
            <ul className="space-y-2 text-xs text-rose-100/80">
              <li>
                <button onClick={() => onNavigateToSection('sobre-nosotros')} className="hover:text-white transition-colors">
                  Nuestra Historia & Atelier
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateToSection('sobre-nosotros')} className="hover:text-white transition-colors">
                  Manifiesto Femenino
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateToSection('contacto')} className="hover:text-white transition-colors">
                  Boutique & Showroom
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateToSection('contacto')} className="hover:text-white transition-colors">
                  Trabaja con Nosotras
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateToSection('contacto')} className="hover:text-white transition-colors">
                  Prensa & Colaboraciones
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Ayuda & Contacto */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E2C992]">
              Atención al Cliente
            </h4>
            <ul className="space-y-2 text-xs text-rose-100/80">
              <li>
                <button onClick={() => onNavigateToSection('contacto')} className="hover:text-white transition-colors">
                  Guía de Tallas & Medidas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateToSection('contacto')} className="hover:text-white transition-colors">
                  Tiempos & Tarifas de Envío
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateToSection('contacto')} className="hover:text-white transition-colors">
                  Cambios & Devoluciones
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateToSection('contacto')} className="hover:text-white transition-colors">
                  Preguntas Frecuentes (FAQ)
                </button>
              </li>
              <li>
                <a href="https://wa.me/573008902566" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-semibold hover:underline flex items-center gap-1">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp: +57 300 890 2566</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment icons */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-rose-200/60">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} CHIC BLOOM. Todos los derechos reservados.</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Hecho con amor <Heart className="w-3 h-3 text-[#C74D68] fill-[#C74D68]" /> para mujeres reales
            </span>
          </div>

          {/* Payment & Security Badges */}
          <div className="flex items-center gap-3 text-rose-100/80">
            <span className="flex items-center gap-1 text-[11px]">
              <Lock className="w-3.5 h-3.5 text-[#E2C992]" /> Compra 100% Segura
            </span>
            <span>|</span>
            <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded border border-white/20">Visa</span>
            <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded border border-white/20">Mastercard</span>
            <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded border border-white/20">PSE</span>
            <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded border border-white/20">Contra Entrega</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
