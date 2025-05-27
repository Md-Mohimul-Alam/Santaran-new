
import { useState, useEffect } from 'react';
import { ArrowUp, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search for:', searchQuery);
    // Implement search functionality
    setShowSearch(false);
    setSearchQuery('');
  };

  return (
    <>
      {/* Search Overlay */}
      {showSearch && (
        <div className="fixed inset-0 bg-santaran-charcoal/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl">
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="text"
                placeholder="Search for art, exhibitions, events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-4 pl-12 bg-white/10 text-white border-2 border-santaran-teal/30 focus:border-santaran-teal rounded-lg outline-none"
                autoFocus
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70" size={18} />
            </form>
            <button
              onClick={() => setShowSearch(false)}
              className="mt-6 text-white/70 hover:text-white mx-auto block"
            >
              Press ESC to close
            </button>
          </div>
        </div>
      )}

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
        <button
          onClick={() => setShowSearch(true)}
          className="w-12 h-12 rounded-full bg-santaran-teal text-white flex items-center justify-center shadow-lg hover:bg-santaran-teal/90 transition-colors"
        >
          <Search size={20} />
        </button>

        <button
          onClick={scrollToTop}
          className={cn(
            "w-12 h-12 rounded-full bg-santaran-terracotta text-white flex items-center justify-center shadow-lg hover:bg-santaran-terracotta/90 transition-all",
            showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
          )}
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </>
  );
}
