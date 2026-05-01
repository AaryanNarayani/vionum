import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Background image */}
        <img 
          src="/bg.png" 
          alt="" 
          className="w-full h-full object-cover opacity-100"
        />
        
        {/* Video overlay - positioned in center-bottom */}
        <div className="absolute inset-0 flex items-end justify-center pb-0">
          <div className="w-full max-w-7xl relative px-2 sm:px-4 md:px-6 lg:px-8">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto opacity-50 sm:opacity-90 md:opacity-90 lg:opacity-100 rounded-xl sm:rounded-2xl md:rounded-3xl"
              style={{
                maskImage: 'radial-gradient(ellipse 100% 80% at 50% 60%, black 30%, transparent 90%), linear-gradient(to bottom, transparent 0%, black 20%, black 85%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 100% 80% at 50% 60%, black 30%, transparent 90%), linear-gradient(to bottom, transparent 0%, black 20%, black 85%, transparent 100%)',
                maskComposite: 'intersect',
                WebkitMaskComposite: 'source-in',
                boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05), 0 10px 40px rgba(0, 0, 0, 0.1), 0 20px 60px rgba(0, 0, 0, 0.15)'
              }}
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>
            {/* White fade at bottom of video */}
            <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 md:h-48 bg-linear-to-t from-white via-white/60 to-transparent pointer-events-none" />
          </div>
        </div>
        
        {/* Dark overlay for text readability - enhanced for mobile */}
        <div className="absolute inset-0 bg-linear-to-b from-background/98 via-background/80 to-background/98 sm:from-background/95 sm:via-background/75 sm:to-background/95 md:from-background/90 md:via-background/65 md:to-background/90" />
        
        {/* Accent glow - adjusted for mobile */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(16,185,129,0.08),transparent_60%)] sm:bg-[radial-gradient(circle_at_50%_60%,rgba(16,185,129,0.12),transparent_65%)]" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6 sm:space-y-8 md:space-y-10 pt-16 sm:pt-20 md:pt-24 lg:pt-0 px-4">
        <h1 className="text-[2.25rem] leading-[1.15] sm:text-5xl sm:leading-[1.1] md:text-6xl lg:text-7xl tracking-[-0.02em]" style={{ fontFamily: 'var(--font-hero)' }}>
          <span className="font-bold">Where obvious outcomes</span>{' '}
          <span className="font-light">become instant settlements.</span>
        </h1>

        <p className="text-base leading-[1.6] sm:text-lg sm:leading-relaxed md:text-xl lg:text-2xl text-muted max-w-xl sm:max-w-2xl mx-auto font-light tracking-[-0.01em]">
          An AI oracle that resolves clear prediction market outcomes in minutes, not hours.
        </p>

        <div className="pt-1 sm:pt-2 md:pt-4">
          <button 
            onClick={() => window.open('https://binary.so/MzLDDsw', '_blank')}
            className="btn-primary text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-14"
          >
            Join Waitlist
          </button>
        </div>
      </div>

      {/* Scroll indicator - hidden on very small screens */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 sm:bottom-10 md:bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 sm:gap-2 text-muted hover:text-foreground transition-colors group z-10 opacity-70 sm:opacity-100"
        aria-label="Scroll to features"
      >
        <span className="text-[0.6875rem] sm:text-xs md:text-sm font-medium">Scroll to explore</span>
        <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
