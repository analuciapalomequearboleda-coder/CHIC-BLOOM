import React from 'react';
import { Star, CheckCircle2, Quote, Sparkles } from 'lucide-react';
import { REVIEWS_DATA } from '../data/products';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF7F5] border-t border-[#F0E4DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A06C76]">
            Opiniones Reales
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury text-[#2C1A20]">
            Lo que dicen nuestras clientas
          </h2>
          <div className="w-12 h-0.5 bg-[#C5A059] mx-auto my-3" />
          <p className="text-xs sm:text-sm text-[#735E63]">
            Miles de mujeres en todo el país ya disfrutan de la elegancia y calce único de CHIC BLOOM.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EADBCE] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative"
            >
              <Quote className="w-8 h-8 text-[#EAD4D8] absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-sm text-[#4A383D] italic leading-relaxed font-sans-clean">
                  "{review.comment}"
                </p>

                {/* Tagged Product */}
                <div className="inline-block bg-[#FAF2ED] text-[#7D3545] text-[11px] font-semibold px-3 py-1 rounded-full border border-[#E8DAD4]">
                  🌸 {review.productName}
                </div>
              </div>

              {/* Author info */}
              <div className="pt-6 border-t border-[#F5EDE8] mt-6 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-11 h-11 rounded-full object-cover border border-[#DAC2B9]"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-bold text-[#2C1A20]">{review.author}</h4>
                    {review.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" title="Compradora verificada" />
                    )}
                  </div>
                  <p className="text-[10px] text-[#8C6D73]">{review.location} • {review.date}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
