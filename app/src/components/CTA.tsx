const CTA = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-6">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.02em]">
            <span className="font-bold">Ready to</span>{' '}
            <span className="font-light">settle faster?</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed font-light">
            Join prediction market operators building trust through speed and transparency.
          </p>
        </div>

        <div className="flex justify-center">
          <button 
            onClick={() => window.open('https://binary.so/MzLDDsw', '_blank')}
            className="btn-primary"
          >
            Join Waitlist
          </button>
        </div>

        <div className="pt-12 border-t border-border space-y-4">
          <p className="text-sm text-subtle">
            Built for prediction markets. Designed for trust. Optimized for speed.
          </p>
          <p className="text-xs text-subtle">
            © 2026 Vionum. Fast settlement for obvious outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
