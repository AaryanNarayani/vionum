import { ExternalLink, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50' 
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 sm:py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center transition-transform hover:scale-105">
          <img src="/logo.png" alt="VIONUM" className="h-7 sm:h-8 w-auto" />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          <a
            href="#how-it-works"
            className="text-sm lg:text-base text-muted hover:text-foreground transition-colors px-3 lg:px-4 py-2 rounded-lg hover:bg-surface"
          >
            How it works
          </a>
          <a
            href="#trust"
            className="text-sm lg:text-base text-muted hover:text-foreground transition-colors px-3 lg:px-4 py-2 rounded-lg hover:bg-surface"
          >
            Why trust it
          </a>
          <a
            href="#use-case"
            className="text-sm lg:text-base text-muted hover:text-foreground transition-colors px-3 lg:px-4 py-2 rounded-lg hover:bg-surface"
          >
            Use case
          </a>
          {/* <a
            href="https://docs.vionum.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm lg:text-base text-muted hover:text-foreground transition-colors inline-flex items-center gap-1.5 px-3 lg:px-4 py-2 rounded-lg hover:bg-surface"
          >
            Docs
            <ExternalLink className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
          </a> */}
        </div>

        {/* Desktop CTA */}
        <button 
          onClick={() => window.open('https://binary.so/MzLDDsw', '_blank')}
          className="hidden md:block bg-foreground text-background px-5 lg:px-6 h-9 lg:h-10 rounded-full text-sm font-medium hover:bg-accent transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Join Waitlist
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground hover:bg-surface rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border/50 shadow-lg">
          <div className="px-6 py-6 flex flex-col gap-2">
            <a
              href="#how-it-works"
              className="text-base text-muted hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-surface"
              onClick={() => setIsMenuOpen(false)}
            >
              How it works
            </a>
            <a
              href="#trust"
              className="text-base text-muted hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-surface"
              onClick={() => setIsMenuOpen(false)}
            >
              Why trust it
            </a>
            <a
              href="#use-case"
              className="text-base text-muted hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-surface"
              onClick={() => setIsMenuOpen(false)}
            >
              Use case
            </a>
            <a
              href="https://docs.vionum.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-muted hover:text-foreground transition-colors inline-flex items-center gap-2 py-3 px-4 rounded-lg hover:bg-surface"
              onClick={() => setIsMenuOpen(false)}
            >
              Docs
              <ExternalLink className="w-4 h-4" />
            </a>
            <div className="pt-4 border-t border-border/50 mt-2">
              <button 
                onClick={() => {
                  window.open('https://binary.so/MzLDDsw', '_blank');
                  setIsMenuOpen(false);
                }}
                className="w-full bg-foreground text-background px-6 h-12 rounded-full text-base font-medium hover:bg-accent transition-colors"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
