import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/products';
import { ProductCategory } from '../types';

interface CategoryGridProps {
  activeCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  activeCategory,
  onSelectCategory
}) => {
  return (
    <section className="py-16 bg-[#FCFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E11D48] bg-rose-50 px-3.5 py-1 rounded-full border border-rose-200">
            EXPLORA POR DROPS & CATEGORÍAS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight mt-3 mb-3">
            Ropa Urbana & Tendencias para Chicas
          </h2>
          <p className="text-sm sm:text-base text-[#52525B] font-sans-clean">
            Bodys moldeadores, corsets estructurados, vestidos de fiesta y faldas tablonadas o cargo para armar tus outfits diarios y de fin de semana.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES_DATA.map((cat, index) => {
            const isSelected = activeCategory === cat.id;
            const isFeatured = index === 0 || index === 1;

            return (
              <div
                key={cat.id}
                id={`cat-card-${cat.id}`}
                onClick={() => {
                  onSelectCategory(cat.id);
                  const el = document.getElementById('catalogo');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 shadow-xs hover:shadow-xl border ${
                  isSelected 
                    ? 'border-[#5E2B38] ring-2 ring-[#5E2B38]/30 ring-offset-2' 
                    : 'border-[#EFE4DE] hover:border-[#DAC2B9]'
                } ${isFeatured && index === 0 ? 'col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Image Container with Aspect Ratio */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-[#ECE0DC]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Veil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A20]/80 via-[#2C1A20]/20 to-transparent group-hover:from-[#2C1A20]/90 transition-colors duration-300" />

                  {/* Special Badge if offers or new */}
                  {cat.id === 'ofertas' && (
                    <div className="absolute top-3 right-3 bg-[#C74D68] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Sale</span>
                    </div>
                  )}

                  {cat.id === 'novedades' && (
                    <div className="absolute top-3 left-3 bg-[#C5A059] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      Novedad
                    </div>
                  )}
                  {cat.id === 'mas-vendidos' && (
                    <div className="absolute top-3 left-3 bg-[#5E2B38] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      Favoritos
                    </div>
                  )}

                  {/* Content Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 text-white flex flex-col justify-end">
                    <span className="text-[11px] uppercase tracking-widest text-[#E6D0A7] font-medium mb-1">
                      {cat.subtitle}
                    </span>
                    
                    <h3 className="text-xl sm:text-2xl font-serif-luxury font-medium text-white mb-2 group-hover:translate-x-1 transition-transform">
                      {cat.title}
                    </h3>

                    <div className="flex items-center justify-between pt-2 border-t border-white/20 text-xs font-sans-clean">
                      <span className="text-rose-100/90 text-[11px]">
                        {cat.itemCount} prendas
                      </span>
                      <span className="inline-flex items-center gap-1 text-[#E6D0A7] font-semibold group-hover:text-white transition-colors">
                        <span>Ver más</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
