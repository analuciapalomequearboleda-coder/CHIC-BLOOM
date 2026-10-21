import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  Menu, 
  X, 
  Sparkles, 
  Phone, 
  ChevronDown,
  ArrowRight,
  Compass
} from 'lucide-react';
import { ProductCategory } from '../types';
import { formatCOP } from '../utils/formatCurrency';

interface NavbarProps {
  activeCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  cartCount: number;
  cartTotal: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenAdvisor: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeCategory,
  onSelectCategory,
  cartCount,
  cartTotal,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenAdvisor,
  searchQuery,
  onSearchChange,
  onNavigateToSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; cat?: ProductCategory; sectionId?: string; isSpecial?: boolean }[] = [
    { name: 'Inicio', sectionId: 'inicio' },
    { name: 'Novedades', cat: 'novedades' },
    { name: 'Más Vendidos', cat: 'mas-vendidos' },
    { name: 'Bodys', cat: 'bodys' },
    { name: 'Corsets', cat: 'corsets' },
    { name: 'Vestidos', cat: 'vestidos' },
    { name: 'Faldas', cat: 'faldas' },
    { name: 'Conjuntos', cat: 'conjuntos' },
    { name: 'Accesorios', cat: 'accesorios' },
    { name: 'Ofertas', cat: 'ofertas', isSpecial: true },
    { name: 'Showroom', sectionId: 'contacto' }
  ];

  const handleLinkClick = (link: typeof navLinks[0]) => {
    if (link.cat) {
      onSelectCategory(link.cat);
      onNavigateToSection('catalogo');
    } else if (link.sectionId) {
      onNavigateToSection(link.sectionId);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#5E2B38] text-[#F9EBEA] py-2 px-4 text-xs tracking-wider flex items-center justify-between font-sans-clean">
        <div className="hidden sm:flex items-center gap-2 text-rose-200">
          <Phone className="w-3.5 h-3.5 text-[#E2C992]" />
          <span>Atención al cliente: +57 (300) 890-BLOOM</span>
        </div>
        <div className="mx-auto sm:mx-0 flex items-center gap-2 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-[#E2C992] animate-pulse" />
          <span>✨ <strong>ENVÍO GRATIS</strong> en compras superiores a $150.000 COP | 10% OFF con código <strong>BLOOM10</strong></span>
        </div>
        <button 
          id="btn-nav-advisor-top"
          onClick={onOpenAdvisor}
          className="hidden md:flex items-center gap-1.5 text-[#E2C992] hover:text-white transition-colors text-xs font-semibold underline decoration-[#E2C992] underline-offset-2"
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Asesora de Estilo</span>
        </button>
      </div>

      {/* Main Navbar */}
      <div className={`bg-white/95 backdrop-blur-md border-b border-[#F0E4DE] transition-all duration-300 ${isScrolled ? 'shadow-sm py-3' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile menu trigger */}
            <div className="flex items-center lg:hidden">
              <button
                id="btn-mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-[#5E2B38] hover:bg-[#FAF4F3] transition-colors"
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Brand Logo */}
            <div className="flex flex-col items-center cursor-pointer" onClick={() => onNavigateToSection('inicio')}>
              <div className="flex items-center gap-2">
                <span className="text-[#B38728] text-xl sm:text-2xl font-serif-luxury tracking-widest">🌸</span>
                <span className="font-serif-luxury text-2xl sm:text-3xl font-bold tracking-[0.2em] text-[#3D1E26] hover:text-[#5E2B38] transition-colors">
                  CHIC BLOOM
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#9A7079] font-sans-clean -mt-1">
                Haute Féminité
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-[13px] tracking-wide font-sans-clean">
              {navLinks.map((link) => {
                const isSelected = link.cat && activeCategory === link.cat;
                return (
                  <button
                    key={link.name}
                    id={`nav-link-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    onClick={() => handleLinkClick(link)}
                    className={`relative py-1 transition-all duration-200 uppercase font-medium ${
                      link.isSpecial 
                        ? 'text-[#C74D68] font-semibold hover:text-[#A02B45]' 
                        : isSelected
                          ? 'text-[#5E2B38] font-bold'
                          : 'text-[#5A4A4D] hover:text-[#5E2B38]'
                    }`}
                  >
                    {link.name}
                    {isSelected && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A059] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Actions: Search, Style Advisor, Wishlist, Cart */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Search Toggle / Input */}
              <div className="relative">
                {searchOpen ? (
                  <div className="flex items-center bg-[#FAF4F3] border border-[#E7D6D1] rounded-full px-3 py-1.5 w-48 sm:w-64 transition-all">
                    <Search className="w-4 h-4 text-[#8C6D73] mr-2 shrink-0" />
                    <input
                      id="input-navbar-search"
                      type="text"
                      placeholder="Buscar vestidos, blusas..."
                      value={searchQuery}
                      onChange={(e) => onSearchChange(e.target.value)}
                      autoFocus
                      className="bg-transparent border-none text-xs w-full focus:outline-none text-[#3D1E26] placeholder-[#A0888E]"
                    />
                    <button 
                      onClick={() => { setSearchOpen(false); onSearchChange(''); }}
                      className="text-[#8C6D73] hover:text-[#3D1E26] ml-1 text-xs"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <button
                    id="btn-search-toggle"
                    onClick={() => setSearchOpen(true)}
                    className="p-2 text-[#4A383D] hover:text-[#5E2B38] hover:bg-[#FAF4F3] rounded-full transition-colors"
                    title="Buscar prendas"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Wishlist Button */}
              <button
                id="btn-wishlist-open"
                onClick={onOpenWishlist}
                className="relative p-2 text-[#4A383D] hover:text-[#C74D68] hover:bg-[#FAF4F3] rounded-full transition-colors"
                title="Lista de Deseos"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[#C74D68] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-xs">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart Button */}
              <button
                id="btn-cart-open"
                onClick={onOpenCart}
                className="flex items-center gap-2 bg-[#5E2B38] hover:bg-[#471E28] text-white px-3 sm:px-4 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow"
              >
                <div className="relative">
                  <ShoppingBag className="w-4 h-4 text-[#F3E5D8]" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-2 bg-[#C5A059] text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline text-xs font-medium tracking-wide">
                  {formatCOP(cartTotal)}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[102px] z-50 bg-black/40 backdrop-blur-xs flex">
          <div className="bg-[#FAF7F5] w-4/5 max-w-sm h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-r border-[#E8D9D2]">
            <div className="space-y-4">
              <div className="border-b border-[#E8D9D2] pb-4">
                <p className="text-xs uppercase tracking-widest text-[#8C6D73] font-semibold mb-2">
                  Categorías & Secciones
                </p>
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link) => {
                    const isSelected = link.cat && activeCategory === link.cat;
                    return (
                      <button
                        key={link.name}
                        onClick={() => handleLinkClick(link)}
                        className={`text-left px-3 py-2.5 rounded-lg text-sm transition-colors flex items-center justify-between ${
                          link.isSpecial
                            ? 'text-[#C74D68] font-bold bg-rose-50'
                            : isSelected
                              ? 'bg-[#5E2B38] text-white font-medium'
                              : 'text-[#4A383D] hover:bg-[#EFE8E4]'
                        }`}
                      >
                        <span>{link.name}</span>
                        {link.isSpecial && <span className="text-[10px] bg-[#C74D68] text-white px-2 py-0.5 rounded-full">Sale</span>}
                        {isSelected && <ArrowRight className="w-4 h-4 text-[#E2C992]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                onClick={() => { onOpenAdvisor(); setMobileMenuOpen(false); }}
                className="w-full bg-gradient-to-r from-[#5E2B38] to-[#8C3A4E] text-white p-3 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold tracking-wide shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-[#E2C992]" />
                <span>¿No sabes qué elegir? Asesora Virtual</span>
              </button>
            </div>

            <div className="border-t border-[#E8D9D2] pt-4 text-xs text-[#8C6D73] space-y-2">
              <p className="flex items-center gap-2">
                <span>📍 Envíos a todo el país y boutiques</span>
              </p>
              <p className="flex items-center gap-2">
                <span>💬 WhatsApp Directo: +57 300 890 2566</span>
              </p>
              <p className="text-[10px] text-[#A89498] pt-2">
                © {new Date().getFullYear()} CHIC BLOOM. Todos los derechos reservados.
              </p>
            </div>
          </div>
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};
