import React from 'react';
import { Instagram, Sparkles, Heart, ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_POSTS } from '../data/products';

export const LookbookSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-[#F5ECE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E11D48] font-bold mb-2">
              <Instagram className="w-3.5 h-3.5 text-[#E11D48]" />
              <span>Street Moodboard & Outfits Virales</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight">
              Inspiración #BloomGirls // OOTD
            </h2>
          </div>
          <div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5E2B38] hover:text-[#3D1E26] bg-[#FAF4F3] border border-[#E8D4CE] px-4 py-2.5 rounded-full transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#C74D68]" />
              <span>Seguir @chicbloom_moda</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Gallery of Outfits */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#FAF4F3] shadow-xs hover:shadow-xl transition-all duration-300 border border-[#EFE5E0]"
            >
              <img
                src={post.image}
                alt="Chic Bloom Lookbook"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Hover overlay with social stats */}
              <div className="absolute inset-0 bg-[#3D1E26]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-white text-center space-y-3">
                <Instagram className="w-8 h-8 text-[#E2C992]" />
                <div className="flex items-center gap-1.5 text-xs font-bold text-rose-200">
                  <Heart className="w-4 h-4 fill-[#C74D68] text-[#C74D68]" />
                  <span>{post.likes} me gusta</span>
                </div>
                <p className="text-xs font-medium tracking-wide text-white/90">
                  {post.tag}
                </p>
                <span className="text-[10px] uppercase tracking-widest text-[#E6D0A7] border-b border-[#E6D0A7] pb-0.5">
                  Ver en Instagram
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
