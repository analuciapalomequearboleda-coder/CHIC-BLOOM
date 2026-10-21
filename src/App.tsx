import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoryGrid } from './components/CategoryGrid';
import { ProductGrid } from './components/ProductGrid';
import { QuickViewModal } from './components/QuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { StyleAdvisorModal } from './components/StyleAdvisorModal';
import { AboutSection } from './components/AboutSection';
import { LookbookSection } from './components/LookbookSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PRODUCTS_DATA } from './data/products';
import { Product, ProductCategory, ProductColor, ProductSize, CartItem } from './types';
import { Sparkles, Check, Heart, ShoppingBag } from 'lucide-react';

export default function App() {
  // Navigation & Category state
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Cart & Wishlist state with local persistence
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('chic_bloom_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlistProducts, setWishlistProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('chic_bloom_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modal & Drawer visibility states
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isStyleAdvisorOpen, setIsStyleAdvisorOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [appliedDiscountPercent, setAppliedDiscountPercent] = useState<number>(0);

  // Toast Notification state
  const [toastMessage, setToastMessage] = useState<{ text: string; icon: 'cart' | 'heart' | 'sparkle' } | null>(null);

  // Sync with LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('chic_bloom_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('chic_bloom_wishlist', JSON.stringify(wishlistProducts));
    } catch (e) {
      console.error(e);
    }
  }, [wishlistProducts]);

  const showToast = (text: string, icon: 'cart' | 'heart' | 'sparkle' = 'cart') => {
    setToastMessage({ text, icon });
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Cart operations
  const handleAddToCart = (
    product: Product,
    color: ProductColor,
    size: ProductSize,
    quantity: number = 1
  ) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (i) =>
          i.product.id === product.id &&
          i.selectedColor.name === color.name &&
          i.selectedSize === size
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      }
      return [...prev, { product, selectedColor: color, selectedSize: size, quantity }];
    });

    showToast(`¡"${product.name}" agregado a tu bolsa!`, 'cart');
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveFromCart(index);
      return;
    }
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveFromCart = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDirectCheckout = (
    product: Product,
    color: ProductColor,
    size: ProductSize,
    quantity: number = 1
  ) => {
    handleAddToCart(product, color, size, quantity);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleProceedToCheckout = (discountPercent: number) => {
    setAppliedDiscountPercent(discountPercent);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Wishlist operations
  const handleToggleWishlist = (product: Product) => {
    setWishlistProducts((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        showToast(`Eliminado de tus favoritos`, 'heart');
        return prev.filter((p) => p.id !== product.id);
      } else {
        showToast(`¡"${product.name}" guardado en favoritos!`, 'heart');
        return [...prev, product];
      }
    });
  };

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlistProducts.length;
  const wishlistIds = wishlistProducts.map((p) => p.id);

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF8] text-[#2C2424] font-sans-clean">
      
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 bg-[#3D1E26] text-white px-4 py-3 rounded-2xl shadow-2xl border border-[#7D3545] flex items-center gap-3 text-xs font-medium animate-in slide-in-from-bottom-5 duration-300">
          {toastMessage.icon === 'cart' && <ShoppingBag className="w-4 h-4 text-[#E2C992]" />}
          {toastMessage.icon === 'heart' && <Heart className="w-4 h-4 text-[#C74D68] fill-[#C74D68]" />}
          {toastMessage.icon === 'sparkle' && <Sparkles className="w-4 h-4 text-[#E2C992]" />}
          <span>{toastMessage.text}</span>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          scrollToSection('catalogo');
        }}
        cartCount={cartCount}
        cartTotal={cartTotal}
        wishlistCount={wishlistCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenAdvisor={() => setIsStyleAdvisorOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          if (q.trim()) {
            scrollToSection('catalogo');
          }
        }}
        onNavigateToSection={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onShopNow={() => {
            setActiveCategory('todos');
            scrollToSection('catalogo');
          }}
          onSelectCategory={(cat) => {
            setActiveCategory(cat);
            scrollToSection('catalogo');
          }}
          onOpenAdvisor={() => setIsStyleAdvisorOpen(true)}
        />

        {/* Categories Visual Grid */}
        <CategoryGrid
          activeCategory={activeCategory}
          onSelectCategory={(cat) => {
            setActiveCategory(cat);
            scrollToSection('catalogo');
          }}
        />

        {/* Product Catalog & Filter Section */}
        <ProductGrid
          products={PRODUCTS_DATA}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onClearSearch={() => setSearchQuery('')}
          onQuickView={(prod) => setQuickViewProduct(prod)}
          onAddToCart={(prod, col, sz) => handleAddToCart(prod, col, sz, 1)}
          onBuyNow={(prod, col, sz) => handleDirectCheckout(prod, col, sz, 1)}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
        />

        {/* Sobre Nosotros Storytelling Section */}
        <AboutSection
          onExploreCollection={() => {
            setActiveCategory('todos');
            scrollToSection('catalogo');
          }}
        />

        {/* Lookbook / Community Instagram Section */}
        <LookbookSection />

        {/* Testimonials & Reviews Section */}
        <TestimonialsSection />

        {/* Contact, Showroom & FAQ Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          scrollToSection('catalogo');
        }}
        onNavigateToSection={scrollToSection}
      />

      {/* Quick View Product Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onDirectCheckout={handleDirectCheckout}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
      />

      {/* Slide-over Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={handleProceedToCheckout}
        onExploreCatalog={() => {
          setActiveCategory('todos');
          scrollToSection('catalogo');
        }}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveWishlist={handleToggleWishlist}
        onAddToCart={(prod, col, sz) => handleAddToCart(prod, col, sz, 1)}
        onQuickView={(prod) => setQuickViewProduct(prod)}
      />

      {/* Simulated Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        discountPercent={appliedDiscountPercent}
        onClearCart={() => setCartItems([])}
      />

      {/* Style Advisor Quiz Modal */}
      <StyleAdvisorModal
        isOpen={isStyleAdvisorOpen}
        onClose={() => setIsStyleAdvisorOpen(false)}
        onQuickView={(prod) => setQuickViewProduct(prod)}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          scrollToSection('catalogo');
        }}
      />
    </div>
  );
}
