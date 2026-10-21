import React from 'react';
import { Sparkles, ArrowRight, Zap, Flame, Truck, ShieldCheck, Heart, Star, Compass } from 'lucide-react';
import { ProductCategory } from '../types';

interface HeroSectionProps {
  onShopNow: () => void;
  onSelectCategory: (cat: ProductCategory) => void;
  onOpenAdvisor: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onShopNow,
  onSelectCategory,
  onOpenAdvisor
}) => {
  const trendingTags: { label: string; cat: ProductCategory; emoji: string }[] = [
    { label: 'Bodys Cut-Out', cat: 'bodys', emoji: '⚡' },
    { label: 'Corsets Satén & Denim', cat: 'corsets', emoji: '💎' },
    { label: 'Faldas Tablonadas Tennis', cat: 'faldas', emoji: '🩷' },
    { label: 'Vestidos Juveniles', cat: 'vestidos', emoji: '👗' },
    { label: 'Sets Parachute', cat: 'conjuntos', emoji: '✨' },
    { label: 'Shoulder Bags & Gafas', cat: 'accesorios', emoji: '👜' }
  ];

  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-[#FFF5F7] via-[#FCF8F8] to-white pt-3 pb-12 lg:pt-6 lg:pb-20">
      {/* Background glow orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-pink-100/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Youthful, Energetic Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Gen-Z / Trendy Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#18181B] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-md animate-pulse">
              <Flame className="w-4 h-4 text-[#FB7185] fill-[#FB7185]" />
              <span>NUEVO DROP 2026 // TENDENCIAS VIRALES</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#18181B] tracking-tight leading-[1.1]">
                Moda urbana & <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E11D48] via-[#F43F5E] to-[#FB7185]">
                  outfits con actitud
                </span>{' '}
                para chicas.
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#52525B] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans-clean font-normal">
              Bodys moldeadores con cut-outs, corsets estructurados que afinan tu cintura, vestidos para salir de fiesta y faldas tablonadas o cargo. Ropa fresca, moderna y cómoda pensada para ti.
            </p>

            {/* Quick Trend Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {trendingTags.map((tag) => (
                <button
                  key={tag.label}
                  onClick={() => onSelectCategory(tag.cat)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white hover:bg-rose-50 text-[#27272A] hover:text-[#E11D48] border border-[#E4E4E7] hover:border-[#FDA4AF] transition-all shadow-xs"
                >
                  <span>{tag.emoji}</span>
                  <span>{tag.label}</span>
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                id="btn-hero-shop-now"
                onClick={onShopNow}
                className="w-full sm:w-auto bg-[#E11D48] hover:bg-[#BE123C] text-white px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-rose-500/30 flex items-center justify-center gap-2.5"
              >
                <Zap className="w-4 h-4 fill-white" />
                <span>Ver Ropa Urbana</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="btn-hero-new-drop"
                onClick={() => onSelectCategory('novedades')}
                className="w-full sm:w-auto bg-[#18181B] hover:bg-[#27272A] text-white px-7 py-4 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-200 shadow-md"
              >
                🔥 Lo Más Viral
              </button>

              <button
                id="btn-hero-advisor-quiz"
                onClick={onOpenAdvisor}
                className="inline-flex items-center gap-1.5 text-xs text-[#E11D48] hover:text-[#9F1239] font-bold py-2 hover:underline"
              >
                <Sparkles className="w-4 h-4 text-[#F43F5E]" />
                <span>Test: ¿Qué look es para ti?</span>
              </button>
            </div>

            {/* Value Badges Strip */}
            <div className="pt-4 border-t border-[#F4E4E7] grid grid-cols-3 gap-3 text-center lg:text-left">
              <div className="bg-white/80 p-3 rounded-xl border border-rose-100 shadow-2xs">
                <p className="text-xl sm:text-2xl font-black text-[#18181B]">+18,000</p>
                <p className="text-[11px] font-medium text-[#71717A]">Chicas Felices</p>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-rose-100 shadow-2xs">
                <p className="text-xl sm:text-2xl font-black text-[#E11D48]">10/10</p>
                <p className="text-[11px] font-medium text-[#71717A]">Fit & Calce Perfecto</p>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-rose-100 shadow-2xs">
                <p className="text-xl sm:text-2xl font-black text-[#18181B]">100%</p>
                <p className="text-[11px] font-medium text-[#71717A]">Tendencia & Viral</p>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Youthful Visual Grid */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Trendy Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-zinc-900 aspect-[4/5] border-4 border-white group">
                <img
                  src="/br-11134207-7r98o-lzyv06nfhjf9cf.jfif"
                  alt="Bodys Asimétricos CHIC BLOOM"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Corner Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-extrabold text-[#18181B] shadow-lg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>DROP DISPONIBLE</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-[#E11D48] text-white text-[10px] uppercase font-black px-2 py-0.5 rounded-md">
                      Outfit Destacado
                    </span>
                    <span className="text-xs text-zinc-300 font-medium">
                      Colección Streetwear
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white drop-shadow-sm">
                    Bodys Asimétricos & Corsets Satén
                  </h3>
                  <p className="text-xs text-zinc-200 mt-0.5">
                    Prendas desde $49.900 COP • Envío rápido en Colombia
                  </p>
                </div>
              </div>

              {/* Floating Mini Card 1 - Top Left */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-rose-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                  ⚡
                </div>
                <div>
                  <p className="text-xs font-extrabold text-[#18181B]">Efecto Moldeador</p>
                  <p className="text-[10px] text-[#71717A]">Telas que no transparentan</p>
                </div>
              </div>

              {/* Floating Mini Card 2 - Bottom Right */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-rose-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#18181B] text-[#FB7185] flex items-center justify-center font-bold text-base shadow-sm">
                  ★
                </div>
                <div>
                  <div className="flex items-center text-amber-400 text-xs">
                    ★★★★★
                  </div>
                  <p className="text-xs font-bold text-[#18181B]">"Horman espectacular"</p>
                  <p className="text-[10px] text-[#71717A]">Salomé C. • Medellín</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Value Proposition Strip */}
        <div className="mt-12 pt-8 border-t border-[#F4E4E7] grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-rose-100/80 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-[#E11D48] shrink-0 font-bold">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#18181B]">Envíos a Colombia</p>
              <p className="text-[11px] text-[#71717A]">Rápido & seguro a tu puerta</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-rose-100/80 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-[#E11D48] shrink-0 font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#18181B]">Pago Contra Entrega</p>
              <p className="text-[11px] text-[#71717A]">Pagas cuando recibes tu pedido</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-rose-100/80 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-[#E11D48] shrink-0 font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#18181B]">Cambios Sin Líos</p>
              <p className="text-[11px] text-[#71717A]">30 días para cambio de talla</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-rose-100/80 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0 font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#18181B]">Showroom Robledo</p>
              <p className="text-[11px] text-[#71717A]">Medellín, cerca al Parque</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
