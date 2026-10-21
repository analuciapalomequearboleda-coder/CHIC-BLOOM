import React, { useState, useMemo } from 'react';
import { 
  SlidersHorizontal, 
  Sparkles, 
  X, 
  ArrowUpDown,
  Filter,
  Search,
  Flame,
  Tag,
  Star
} from 'lucide-react';
import { Product, ProductCategory, ProductColor, ProductSize } from '../types';
import { ProductCard } from './ProductCard';
import { formatCOP } from '../utils/formatCurrency';

interface ProductGridProps {
  products: Product[];
  activeCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onClearSearch: () => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, color: ProductColor, size: ProductSize) => void;
  onBuyNow: (product: Product, color: ProductColor, size: ProductSize) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
}

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest';

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onClearSearch,
  onQuickView,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  wishlistIds,
}) => {
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [selectedSizeFilter, setSelectedSizeFilter] = useState<string | null>(null);
  const [selectedColorFilter, setSelectedColorFilter] = useState<string | null>(null);
  const [maxPrice, setMaxPrice] = useState<number>(180000);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState<boolean>(false);

  const categoryTabs: { id: ProductCategory; label: string; icon?: string }[] = [
    { id: 'todos', label: 'Todos' },
    { id: 'novedades', label: 'Novedades', icon: '✨' },
    { id: 'mas-vendidos', label: 'Más Vendidos', icon: '⭐' },
    { id: 'ofertas', label: 'Ofertas', icon: '🏷️' },
    { id: 'bodys', label: 'Bodys Moldeadores', icon: '⚡' },
    { id: 'corsets', label: 'Corsets Street Chic', icon: '💎' },
    { id: 'vestidos', label: 'Vestidos Versátiles', icon: '👗' },
    { id: 'faldas', label: 'Faldas con Actitud', icon: '🩷' },
    { id: 'conjuntos', label: 'Sets & Outfits', icon: '✨' },
    { id: 'accesorios', label: 'Accesorios Statement', icon: '👜' }
  ];

  const availableColors = [
    { name: 'Negro', hex: '#18181B' },
    { name: 'Blanco', hex: '#FFFFFF' },
    { name: 'Rosa', hex: '#FB7185' },
    { name: 'Denim', hex: '#0284C7' },
    { name: 'Beige', hex: '#D4C3A3' },
    { name: 'Plata', hex: '#CBD5E1' }
  ];

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Category filter
      if (activeCategory === 'novedades' && !item.isNew) return false;
      if (activeCategory === 'mas-vendidos' && !item.isBestSeller) return false;
      if (activeCategory === 'ofertas' && !item.isSale && !item.originalPrice) return false;
      if (
        activeCategory !== 'todos' && 
        activeCategory !== 'novedades' && 
        activeCategory !== 'mas-vendidos' && 
        activeCategory !== 'ofertas'
      ) {
        if (item.category !== activeCategory) return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchCat = item.categoryName.toLowerCase().includes(q);
        if (!matchName && !matchDesc && !matchCat) return false;
      }

      // Price filter
      if (item.price > maxPrice) return false;

      // Size filter
      if (selectedSizeFilter && !item.sizes.includes(selectedSizeFilter as ProductSize)) {
        return false;
      }

      // Color filter
      if (selectedColorFilter) {
        const hasColor = item.colors.some(c => 
          c.name.toLowerCase().includes(selectedColorFilter.toLowerCase())
        );
        if (!hasColor) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return 0; // default featured
    });
  }, [products, activeCategory, searchQuery, maxPrice, selectedSizeFilter, selectedColorFilter, sortBy]);

  const hasActiveCustomFilters = selectedSizeFilter !== null || selectedColorFilter !== null || maxPrice < 180000 || searchQuery.trim().length > 0;

  const resetAllFilters = () => {
    setSelectedSizeFilter(null);
    setSelectedColorFilter(null);
    setMaxPrice(180000);
    onClearSearch();
    onSelectCategory('todos');
  };

  return (
    <section id="catalogo" className="py-16 bg-white border-t border-[#F5ECE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quick Access Badges for Special Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <button
            onClick={() => onSelectCategory('novedades')}
            className={`p-4 rounded-2xl border text-left flex items-center justify-between transition-all duration-200 ${
              activeCategory === 'novedades' 
                ? 'bg-[#5E2B38] text-white border-[#5E2B38] shadow-md' 
                : 'bg-[#FAF4F3] border-[#EEDFD9] text-[#3D1E26] hover:bg-[#F5ECE8]'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl ${activeCategory === 'novedades' ? 'bg-white/20' : 'bg-rose-100 text-[#5E2B38]'}`}>
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm">Novedades</p>
                <p className={`text-xs ${activeCategory === 'novedades' ? 'text-rose-100' : 'text-[#8C6D73]'}`}>Últimos lanzamientos</p>
              </div>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/20">Ver</span>
          </button>

          <button
            onClick={() => onSelectCategory('mas-vendidos')}
            className={`p-4 rounded-2xl border text-left flex items-center justify-between transition-all duration-200 ${
              activeCategory === 'mas-vendidos' 
                ? 'bg-[#C5A059] text-white border-[#C5A059] shadow-md' 
                : 'bg-[#FAF7F2] border-[#ECE2D0] text-[#3D1E26] hover:bg-[#F5EFE4]'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl ${activeCategory === 'mas-vendidos' ? 'bg-white/20' : 'bg-amber-100 text-[#8F6F2C]'}`}>
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm">Más Vendidos</p>
                <p className={`text-xs ${activeCategory === 'mas-vendidos' ? 'text-amber-100' : 'text-[#8C6D73]'}`}>Prendas favoritas</p>
              </div>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/20">Ver</span>
          </button>

          <button
            onClick={() => onSelectCategory('ofertas')}
            className={`p-4 rounded-2xl border text-left flex items-center justify-between transition-all duration-200 ${
              activeCategory === 'ofertas' 
                ? 'bg-[#C74D68] text-white border-[#C74D68] shadow-md' 
                : 'bg-[#FCF5F6] border-[#F2D7DC] text-[#3D1E26] hover:bg-[#F9EBEF]'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl ${activeCategory === 'ofertas' ? 'bg-white/20' : 'bg-rose-100 text-[#C74D68]'}`}>
                <Tag className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm">Ofertas Especiales</p>
                <p className={`text-xs ${activeCategory === 'ofertas' ? 'text-rose-100' : 'text-[#8C6D73]'}`}>Precios rebajados</p>
              </div>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/20">Ver</span>
          </button>
        </div>

        {/* Main Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#A06C76] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Catálogo Oficial CHIC BLOOM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight">
              {activeCategory === 'todos' && 'Colección Streetwear Chic para Chicas'}
              {activeCategory === 'novedades' && '✨ Novedades & Drops Recientes'}
              {activeCategory === 'mas-vendidos' && '⭐ Las Prendas Más Virales'}
              {activeCategory === 'ofertas' && '🏷️ Ofertas & Descuentos Especiales'}
              {activeCategory === 'bodys' && '⚡ Bodys Moldeadores: Punto Rib, Cut-Out & Suplex'}
              {activeCategory === 'corsets' && '💎 Corsets Streetwear Chic: Satén, Cuero & Denim'}
              {activeCategory === 'vestidos' && '👗 Vestidos Versátiles: Fiesta, Comer & Redes'}
              {activeCategory === 'faldas' && '🩷 Faldas con Actitud: Tennis con Short, Cargo & Cuero'}
              {activeCategory === 'conjuntos' && '✨ Sets & Outfits Listos para Tus Planes'}
              {activeCategory === 'accesorios' && '👜 Accesorios Statement: Bolsos Plata & Gafas'}
            </h2>
          </div>

          {/* Search, Sort and Filters Bar */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Direct Search Bar */}
            <div className="relative min-w-[220px] flex-1 sm:flex-none">
              <Search className="w-4 h-4 text-[#8C6D73] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar prenda o tela..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-9 pr-8 py-2 bg-[#FAF4F3] border border-[#E8DAD4] text-xs text-[#3D1E26] rounded-full placeholder-[#A89498] focus:outline-none focus:border-[#5E2B38]"
              />
              {searchQuery && (
                <button
                  onClick={onClearSearch}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8C6D73] hover:text-[#5E2B38]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort dropdown */}
            <div className="relative inline-flex items-center">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#8C6D73] absolute left-3 pointer-events-none" />
              <select
                id="select-sort-by"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="pl-8 pr-6 py-2 bg-[#FAF4F3] border border-[#E8DAD4] text-[#3D1E26] text-xs rounded-full font-medium focus:outline-none focus:border-[#5E2B38] cursor-pointer"
              >
                <option value="featured">Destacados</option>
                <option value="price-asc">Precio: Menor a Mayor</option>
                <option value="price-desc">Precio: Mayor a Menor</option>
                <option value="rating">Mejor Valorados</option>
                <option value="newest">Lo más Nuevo</option>
              </select>
            </div>

            {/* Filter Toggle Button */}
            <button
              id="btn-toggle-filters"
              onClick={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
              className={`px-4 py-2 rounded-full border text-xs flex items-center gap-1.5 font-medium transition-colors ${
                hasActiveCustomFilters || isFilterDrawerOpen
                  ? 'bg-[#5E2B38] text-white border-[#5E2B38]' 
                  : 'bg-[#FAF4F3] text-[#4A383D] border-[#E8DAD4] hover:bg-[#F2E8E4]'
              }`}
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filtros {hasActiveCustomFilters && '•'}</span>
            </button>
          </div>
        </div>

        {/* Category Tabs Horizontal Strip */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {categoryTabs.map((tab) => {
            const isSelected = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                id={`cat-tab-${tab.id}`}
                onClick={() => onSelectCategory(tab.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider whitespace-nowrap flex items-center gap-1.5 transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#5E2B38] text-white shadow-sm'
                    : 'bg-[#FAF4F3] text-[#5A4A4D] hover:bg-[#F2E8E4] border border-[#EFE5E0]'
                }`}
              >
                {tab.icon && <span>{tab.icon}</span>}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Collapsible Filter Panel */}
        {isFilterDrawerOpen && (
          <div className="mb-8 p-6 bg-[#FAF6F4] rounded-2xl border border-[#EADBCE] shadow-xs animate-in fade-in duration-200">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E8DAD4]">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#5E2B38]" />
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#3D1E26]">
                  Filtros Personalizados
                </h4>
              </div>
              {hasActiveCustomFilters && (
                <button
                  onClick={resetAllFilters}
                  className="text-xs text-[#C74D68] hover:text-[#902A40] font-semibold underline"
                >
                  Restablecer filtros
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Filter: Tallas */}
              <div>
                <label className="block text-xs font-semibold text-[#5A4A4D] uppercase tracking-wider mb-2">
                  Filtrar por Talla
                </label>
                <div className="flex flex-wrap gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'ÚNICA'].map((size) => {
                    const isSelected = selectedSizeFilter === size;
                    return (
                      <button
                        key={size}
                        onClick={() => setSelectedSizeFilter(isSelected ? null : size)}
                        className={`h-9 px-3 rounded-lg text-xs font-bold transition-colors ${
                          isSelected
                            ? 'bg-[#5E2B38] text-white shadow-xs'
                            : 'bg-white text-[#4A383D] border border-[#DAC2B9] hover:bg-[#FAF4F3]'
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Filter: Colores */}
              <div>
                <label className="block text-xs font-semibold text-[#5A4A4D] uppercase tracking-wider mb-2">
                  Filtrar por Color
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableColors.map((col) => {
                    const isSelected = selectedColorFilter === col.name;
                    return (
                      <button
                        key={col.name}
                        onClick={() => setSelectedColorFilter(isSelected ? null : col.name)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 border transition-colors ${
                          isSelected
                            ? 'bg-[#5E2B38] text-white border-[#5E2B38]'
                            : 'bg-white text-[#4A383D] border-[#DAC2B9] hover:bg-[#FAF4F3]'
                        }`}
                      >
                        <span 
                          className="w-3 h-3 rounded-full border border-black/10" 
                          style={{ backgroundColor: col.hex }} 
                        />
                        <span>{col.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Filter: Precio Máximo en COP */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-[#5A4A4D] uppercase tracking-wider">
                    Precio Máximo
                  </label>
                  <span className="text-xs font-bold text-[#5E2B38]">{formatCOP(maxPrice)}</span>
                </div>
                <input
                  type="range"
                  min="25000"
                  max="180000"
                  step="5000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#5E2B38] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#8C6D73] mt-1">
                  <span>$25.000 COP</span>
                  <span>$180.000 COP</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product Count Result Bar */}
        <div className="flex items-center justify-between text-xs text-[#8C6D73] mb-6">
          <span>
            Mostrando <strong className="text-[#3D1E26]">{filteredProducts.length}</strong> prendas encontradas
          </span>
          {hasActiveCustomFilters && (
            <button
              onClick={resetAllFilters}
              className="text-[#C74D68] hover:text-[#902A40] underline font-medium"
            >
              Limpiar todos los filtros
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 px-4 bg-[#FAF7F5] rounded-3xl border border-[#ECE0DB] my-8">
            <span className="text-4xl mb-3 block">🌸</span>
            <h3 className="text-xl font-serif-luxury text-[#3D1E26] mb-2">
              No encontramos prendas con estos filtros
            </h3>
            <p className="text-xs text-[#8C6D73] max-w-md mx-auto mb-6">
              Prueba cambiando la categoría, ajustando el rango de precio o buscando con otras palabras clave.
            </p>
            <button
              onClick={resetAllFilters}
              className="bg-[#5E2B38] hover:bg-[#471E28] text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              Ver todo el catálogo
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
                onBuyNow={onBuyNow}
                onToggleWishlist={onToggleWishlist}
                isWishlisted={wishlistIds.includes(product.id)}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
