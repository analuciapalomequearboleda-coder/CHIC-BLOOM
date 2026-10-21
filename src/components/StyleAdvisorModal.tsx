import React, { useState } from 'react';
import { X, Sparkles, Heart, ArrowRight, RefreshCw, Check } from 'lucide-react';
import { Product, ProductCategory } from '../types';
import { PRODUCTS_DATA } from '../data/products';
import { formatCOP } from '../utils/formatCurrency';

interface StyleAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onQuickView: (product: Product) => void;
  onSelectCategory: (cat: ProductCategory) => void;
}

export const StyleAdvisorModal: React.FC<StyleAdvisorModalProps> = ({
  isOpen,
  onClose,
  onQuickView,
  onSelectCategory,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<1 | 2 | 3 | 'results'>(1);
  const [occasion, setOccasion] = useState<string>('');
  const [texturePref, setTexturePref] = useState<string>('');
  const [palettePref, setPalettePref] = useState<string>('');

  const occasions = [
    { 
      id: 'salir-fiesta', 
      label: '🍸 Salir de Fiesta (Night Out)', 
      tag: 'Noche & Clubbing',
      desc: 'Corsets estructurados de satén con varillas, minifaldas en ecocuero y vestidos cut-out ceñidos.' 
    },
    { 
      id: 'ir-comer', 
      label: '🍽️ Ir a Comer (Dinner & Drinks)', 
      tag: 'Cena o Brunch Chic',
      desc: 'Vestidos de punto rib cuello alto, sets dos piezas asimétricos y blazers con bodys moldeadores.' 
    },
    { 
      id: 'fotos-redes', 
      label: '📸 Fotos para Redes (Instagram / TikTok)', 
      tag: 'Aesthetic & Viral OOTD',
      desc: 'Prendas en mesh con encaje, bodys con espaldas abiertas, faldas cargo y shoulder bags plateados.' 
    },
    { 
      id: 'planes-amigos', 
      label: '☕ Planes con Amigos (Chill & Street)', 
      tag: 'Casual Streetwear',
      desc: 'Faldas tablonadas tenniscore con short interior, sets parachute y básicos rib elásticos.' 
    }
  ];

  const textures = [
    { 
      id: 'cuero-sintetico', 
      label: 'Cuero Sintético (Ecocuero)', 
      icon: '✨', 
      desc: 'Acabado biker semimate o vinilo brillante, textura atrevida y estructurada.' 
    },
    { 
      id: 'tejido-punto', 
      label: 'Tejido de Punto & Rib Acanalado', 
      icon: '🧶', 
      desc: 'Canalé elástico, suplex compresivo y efecto segunda piel súper favorecedor.' 
    },
    { 
      id: 'encaje-mesh', 
      label: 'Encaje Delicado & Tul Mesh Y2K', 
      icon: '🎀', 
      desc: 'Detalles románticos, transparencias sutiles con forro y vibra estética.' 
    },
    { 
      id: 'saten-denim', 
      label: 'Satén con Varillas & Denim Rígido', 
      icon: '💎', 
      desc: 'Cortes que moldean la cintura y realzan el torso con soporte firme.' 
    }
  ];

  const palettes = [
    { 
      id: 'neutros-negro', 
      label: 'Neutros con Carácter', 
      colors: ['#18181B', '#F8FAFC', '#9A7B6B'], 
      desc: 'Negro Onix, Blanco Marfil y Moka Nude' 
    },
    { 
      id: 'neutro-tendencia-pink', 
      label: 'Neutro + Rosa Barbie / Cherry', 
      colors: ['#18181B', '#FB7185', '#E11D48'], 
      desc: 'Base negra o marfil combinada con acentos rosa fucsia y cereza' 
    },
    { 
      id: 'neutro-tendencia-cargo', 
      label: 'Neutros Cálidos + Verde Oliva', 
      colors: ['#D6C7B2', '#4B5320', '#1F2937'], 
      desc: 'Beige arena, verde militar utilitario y grafito' 
    },
    { 
      id: 'neutro-plata-chrome', 
      label: 'Blanco & Plata Metálico Y2K', 
      colors: ['#FFFFFF', '#E2E8F0', '#0F172A'], 
      desc: 'Luminosidad limpia con destellos plateados cromados' 
    }
  ];

  const getRecommendedProducts = () => {
    if (occasion === 'salir-fiesta') {
      return PRODUCTS_DATA.filter(p => p.id === 'cb-cr01' || p.id === 'cb-bd01' || p.id === 'cb-f03' || p.id === 'cb-v01');
    }
    if (occasion === 'ir-comer') {
      return PRODUCTS_DATA.filter(p => p.id === 'cb-v02' || p.id === 'cb-c03' || p.id === 'cb-bd02' || p.id === 'cb-a01');
    }
    if (occasion === 'fotos-redes') {
      return PRODUCTS_DATA.filter(p => p.id === 'cb-bd03' || p.id === 'cb-cr02' || p.id === 'cb-c01' || p.id === 'cb-a03');
    }
    // planes-amigos (default)
    return PRODUCTS_DATA.filter(p => p.id === 'cb-f01' || p.id === 'cb-bd02' || p.id === 'cb-f02' || p.id === 'cb-v04');
  };

  const handleReset = () => {
    setStep(1);
    setOccasion('');
    setTexturePref('');
    setPalettePref('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#EFE5E0] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-[#FAF4F3] to-[#F5ECE8] border-b border-[#EADECE] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#18181B] text-white flex items-center justify-center shadow-xs">
              <Sparkles className="w-5 h-5 text-[#F43F5E]" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-[#18181B] tracking-tight">
                Asesora de Estilo Chic Bloom
              </h2>
              <p className="text-[11px] text-[#71717A]">Streetwear chic para chicas de 15 a 25 años</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white text-[#71717A] hover:text-[#18181B] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        {step !== 'results' && (
          <div className="w-full bg-[#F4EBE8] h-1.5">
            <div 
              className="bg-[#F43F5E] h-full transition-all duration-300"
              style={{ width: `${((step as number) / 3) * 100}%` }}
            />
          </div>
        )}

        <div className="p-6 sm:p-8">
          {/* STEP 1: OCASIÓN DE USO */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#F43F5E] font-bold">Paso 1 de 3 • Ocasión de Uso</span>
                <h3 className="text-xl font-bold text-[#18181B]">¿Para qué plan u ocasión buscas tu outfit?</h3>
                <p className="text-xs text-[#71717A]">Diseñamos piezas versátiles con cortes favorecedores para tus momentos clave</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {occasions.map((occ) => (
                  <button
                    key={occ.id}
                    onClick={() => {
                      setOccasion(occ.id);
                      setStep(2);
                    }}
                    className={`p-4 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between ${
                      occasion === occ.id
                        ? 'border-[#F43F5E] bg-[#FFF1F2] ring-1 ring-[#F43F5E]'
                        : 'border-[#E4E4E7] bg-white hover:bg-[#FAF7F5] hover:border-[#FDA4AF]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="text-xs font-bold text-[#18181B]">{occ.label}</h4>
                      </div>
                      <span className="inline-block px-2 py-0.5 rounded-md bg-[#F4F4F5] text-[10px] font-semibold text-[#52525B] mb-1.5">
                        {occ.tag}
                      </span>
                      <p className="text-[11px] text-[#71717A] leading-relaxed">{occ.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: TEXTURA PREFERIDA */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#F43F5E] font-bold">Paso 2 de 3 • Textura & Sensación</span>
                <h3 className="text-xl font-bold text-[#18181B]">¿Qué textura te gustaría lucir?</h3>
                <p className="text-xs text-[#71717A]">Materiales modernos seleccionados para estilizar y dar personalidad a tu look</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {textures.map((tex) => (
                  <button
                    key={tex.id}
                    onClick={() => {
                      setTexturePref(tex.id);
                      setStep(3);
                    }}
                    className={`p-4 rounded-2xl text-left border transition-all duration-200 flex items-start gap-3 ${
                      texturePref === tex.id
                        ? 'border-[#F43F5E] bg-[#FFF1F2] ring-1 ring-[#F43F5E]'
                        : 'border-[#E4E4E7] bg-white hover:bg-[#FAF7F5] hover:border-[#FDA4AF]'
                    }`}
                  >
                    <span className="text-2xl shrink-0">{tex.icon}</span>
                    <div>
                      <h4 className="text-xs font-bold text-[#18181B]">{tex.label}</h4>
                      <p className="text-[11px] text-[#71717A] mt-0.5 leading-relaxed">{tex.desc}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-[#E11D48] font-bold hover:underline"
                >
                  ← Volver a ocasión
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: PALETA DE COLOR */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#F43F5E] font-bold">Paso 3 de 3 • Armonía de Colores</span>
                <h3 className="text-xl font-bold text-[#18181B]">¿Cuál es tu combinación favorita?</h3>
                <p className="text-xs text-[#71717A]">Neutros versátiles elevados con toques de temporada en tendencia</p>
              </div>

              <div className="space-y-3">
                {palettes.map((pal) => (
                  <button
                    key={pal.id}
                    onClick={() => {
                      setPalettePref(pal.id);
                      setStep('results');
                    }}
                    className={`w-full p-4 rounded-2xl text-left border transition-all duration-200 flex items-center justify-between ${
                      palettePref === pal.id
                        ? 'border-[#F43F5E] bg-[#FFF1F2] ring-1 ring-[#F43F5E]'
                        : 'border-[#E4E4E7] bg-white hover:bg-[#FAF7F5] hover:border-[#FDA4AF]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2 shrink-0">
                        {pal.colors.map((c, idx) => (
                          <div 
                            key={idx}
                            className="w-7 h-7 rounded-full border-2 border-white shadow-xs" 
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#18181B]">{pal.label}</h4>
                        <p className="text-[11px] text-[#71717A] mt-0.5">{pal.desc}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#F43F5E]" />
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={() => setStep(2)}
                  className="text-xs text-[#E11D48] font-bold hover:underline"
                >
                  ← Volver a texturas
                </button>
              </div>
            </div>
          )}

          {/* RESULTS VIEW */}
          {step === 'results' && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-2 bg-[#FFF1F2] text-[#E11D48] px-3.5 py-1 rounded-full text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-[#F43F5E]" />
                  <span>Tu Propuesta de Outfit Personalizada</span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#18181B] tracking-tight">
                  Prendas con Cortes Favorecedores para Ti
                </h3>
                <p className="text-xs text-[#71717A] max-w-md mx-auto">
                  Seleccionadas según tu ocasión, textura deseada y colores neutros con acentos trendy.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {getRecommendedProducts().slice(0, 3).map((prod) => (
                  <div 
                    key={prod.id} 
                    className="bg-[#FAFAFA] rounded-2xl overflow-hidden border border-[#E4E4E7] p-3 flex flex-col justify-between hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-[3/4] rounded-xl overflow-hidden mb-2 bg-white relative">
                      <img src={prod.images[0]} alt={prod.name} className="w-full h-full object-cover" />
                      <div className="absolute top-2 left-2 bg-[#18181B]/80 backdrop-blur-xs text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                        {prod.categoryName}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-[#18181B] line-clamp-1">
                        {prod.name}
                      </h4>
                      <p className="text-xs font-extrabold text-[#E11D48] mt-0.5">
                        {formatCOP(prod.price)}
                      </p>
                      <p className="text-[10px] text-[#71717A] line-clamp-1 mt-1">
                        {prod.tag}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        onClose();
                        onQuickView(prod);
                      }}
                      className="mt-3 w-full bg-[#18181B] hover:bg-[#27272A] text-white py-2 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-colors"
                    >
                      Ver Detalle
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-4 border-t border-[#E4E4E7]">
                <button
                  onClick={handleReset}
                  className="text-xs text-[#E11D48] hover:text-[#9F1239] font-bold flex items-center gap-1"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Probar otra ocasión</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onSelectCategory('todos');
                    const el = document.getElementById('catalogo');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#E11D48] hover:bg-[#BE123C] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  Ver Todo el Catálogo
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
