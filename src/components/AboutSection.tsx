import React from 'react';
import { Sparkles, Heart, Feather, ShieldCheck, Flower2, ArrowRight, Layers, Sparkle } from 'lucide-react';

interface AboutSectionProps {
  onExploreCollection: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreCollection }) => {
  return (
    <section id="sobre-nosotros" className="py-20 bg-gradient-to-b from-white via-[#FAF6F4] to-[#FCFAF8] relative overflow-hidden">
      
      {/* Decorative background rings */}
      <div className="absolute -left-20 top-1/2 w-80 h-80 rounded-full border border-[#E8DAD4] -translate-y-1/2 pointer-events-none opacity-40" />
      <div className="absolute -right-20 top-1/3 w-96 h-96 rounded-full border border-[#E8DAD4] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#E11D48] bg-rose-50 px-4 py-1.5 rounded-full border border-rose-200">
            <Sparkles className="w-3.5 h-3.5 text-[#F43F5E]" />
            <span>Nuestra Filosofía Streetwear Chic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18181B] tracking-tight leading-tight">
            Diseñado para chicas jóvenes de 15 a 25 años <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E11D48] to-[#FB7185]">que buscan verse modernas, seguras y a la moda</span>
          </h2>
          <div className="w-16 h-1 bg-[#E11D48] rounded-full mx-auto mt-2" />
        </div>

        {/* Two Column Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Visual Showcase (Collage) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Atelier Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-zinc-900">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop"
                  alt="Streetwear Chic CHIC BLOOM para chicas de 15 a 25 años"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider text-rose-300">Streetwear Chic & Versatilidad</p>
                  <p className="text-sm font-semibold">Cortes que favorecen y estilizan tu silueta</p>
                </div>
              </div>

              {/* Secondary Floating Overlapping Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-3/5 rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] hidden sm:block bg-zinc-900">
                <img
                  src="/corset-streetwear-chic.jpg"
                  alt="Corsets Streetwear Chic y texturas en tendencia"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Little Stamp Quote */}
              <div className="absolute -top-4 -left-4 bg-[#18181B] text-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-zinc-800">
                <Sparkles className="w-5 h-5 text-[#FB7185]" />
                <div>
                  <p className="text-xs font-bold">Chic Bloom Colombia</p>
                  <p className="text-[10px] text-rose-200">Showroom en Medellín</p>
                </div>
              </div>

            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-[#52525B] font-sans-clean leading-relaxed text-sm sm:text-base">
              <p className="text-lg font-bold text-[#18181B]">
                “Prendas versátiles y con actitud creadas para que te sientas segura, cómoda y radiante en cada uno de tus planes.”
              </p>
              
              <p>
                En <strong>CHIC BLOOM</strong> creamos propuestas de estilo <strong>streetwear chic</strong> pensadas especialmente para chicas jóvenes de 15 a 25 años. Diseñamos piezas con cortes estratégicos que favorecen tu figura, combinando <strong>colores neutros esenciales</strong> (negro onix, blanco marfil, moka cálido y beige arena) con <strong>tonos vibrantes en tendencia</strong> (rosa barbie, cherry y plata cromado).
              </p>

              <p>
                Trabajamos con texturas ricas y modernas como el <strong>cuero sintético (ecocuero)</strong>, delicados toques de <strong>encaje y mesh</strong>, y <strong>tejidos de punto y rib acanalado</strong> de compresión suave que se ajustan como una segunda piel.
              </p>

              {/* 4 Occasions of use showcase */}
              <div className="p-4 bg-white rounded-2xl border border-rose-100 shadow-2xs space-y-2">
                <p className="text-xs font-bold text-[#18181B] uppercase tracking-wider">Outfits Versátiles Para Tus Ocasiones:</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#52525B]">
                  <div className="flex items-center gap-1.5">
                    <span>🍸</span>
                    <span><strong>Salir de fiesta:</strong> Corsets & Cut-outs</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>🍽️</span>
                    <span><strong>Ir a comer:</strong> Rib & Sets Chic</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>📸</span>
                    <span><strong>Fotos para redes:</strong> Mesh & Y2K Bags</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span>☕</span>
                    <span><strong>Planes con amigos:</strong> Faldas con short</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Brand Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#E8DAD4]">
              <div className="flex items-start gap-3 p-3.5 bg-white rounded-2xl border border-[#ECE0DB] shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-rose-50 flex items-center justify-center text-[#E11D48] shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#18181B] uppercase tracking-wider">Texturas en Tendencia</h4>
                  <p className="text-[11px] text-[#71717A]">Cuero sintético, encaje floral y tejido de punto rib de alta elasticidad.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-white rounded-2xl border border-[#ECE0DB] shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-rose-50 flex items-center justify-center text-[#E11D48] shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#18181B] uppercase tracking-wider">Cortes Favorecedores</h4>
                  <p className="text-[11px] text-[#71717A]">Siluetas pensadas para afinar la cintura y brindar 100% de seguridad y libertad.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onExploreCollection}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#E11D48] hover:text-[#BE123C] group py-2"
              >
                <span>Explorar Colección Completa de Outfits</span>
                <ArrowRight className="w-4 h-4 text-[#E11D48] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
