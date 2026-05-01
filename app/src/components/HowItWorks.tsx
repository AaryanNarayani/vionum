import { useEffect, useRef, useState } from 'react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      number: '01',
      label: 'Claim Submitted',
      title: 'Market creates a prediction claim',
      description: 'A prediction market outcome is submitted with clear resolution criteria. The claim is validated and parsed into a structured format ready for verification.',
      video: '/steps/step-1.mp4',
    },
    {
      number: '02',
      label: 'Evidence Gathered',
      title: 'Data pulled from trusted sources',
      description: 'Evidence is collected exclusively from your pre-approved sources ESPN, Reuters, official APIs etc. No random scraping. Only whitelisted providers you control.',
      video: '/steps/step-2.mp4',
    },
    {
      number: '03',
      label: 'AI Evaluation',
      title: 'Four agents reach consensus',
      description: 'Independent AI agents analyze the evidence using different strategies. Each agent evaluates the claim separately, then consensus is reached through multi-agent voting.',
      video: '/steps/step-3.mp4',
    },
    {
      number: '04',
      label: 'Settlement',
      title: 'Instant verdict or human review',
      description: 'High-confidence verdicts (90%+) settle immediately in under 2 minutes. Ambiguous or disputed outcomes automatically escalate to human arbitration.',
      video: '/steps/step-4.mp4',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      stepsRef.current.forEach((stepEl, index) => {
        if (!stepEl) return;
        const stepTop = stepEl.offsetTop + sectionTop;
        const stepHeight = stepEl.offsetHeight;
        const stepMiddle = stepTop + stepHeight / 2;

        if (scrollPosition >= stepMiddle - 200 && scrollPosition < stepMiddle + 200) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" className="relative py-32 sm:py-40 px-4 sm:px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-32 sm:mb-40 text-center">
          <p className="text-sm text-accent font-semibold mb-6 uppercase tracking-wider">
            How it works
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.02em] max-w-4xl mx-auto">
            <span className="font-bold">From claim to settlement</span>{' '}
            <span className="font-light text-muted">in four transparent steps.</span>
          </h2>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical timeline line - fixed on left */}
          <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-border hidden lg:block" />
          
          {/* Active progress line */}
          <div 
            className="absolute left-7 top-0 w-0.5 bg-accent hidden lg:block transition-all duration-500 ease-out"
            style={{
              height: `${((activeStep + 1) / steps.length) * 100}%`,
            }}
          />

          {/* Steps */}
          <div className="space-y-48 sm:space-y-64">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  stepsRef.current[index] = el;
                }}
                className="relative"
              >
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                  {/* Left side - Content */}
                  <div className="relative lg:pl-28">
                    {/* Number badge - positioned on the line */}
                    <div 
                      className={`absolute left-0 top-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 lg:flex ${
                        activeStep === index 
                          ? 'bg-accent scale-110 shadow-lg shadow-accent/30' 
                          : 'bg-border scale-100'
                      }`}
                    >
                      <span className={`text-xl font-bold tabular-nums transition-colors duration-500 ${
                        activeStep === index ? 'text-white' : 'text-muted'
                      }`}>
                        {step.number}
                      </span>
                    </div>

                    {/* Mobile number badge */}
                    <div className="flex items-center gap-4 mb-8 lg:hidden">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        activeStep === index ? 'bg-accent' : 'bg-border'
                      }`}>
                        <span className={`text-xl font-bold tabular-nums ${
                          activeStep === index ? 'text-white' : 'text-muted'
                        }`}>
                          {step.number}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-accent font-semibold uppercase tracking-wider">
                        {step.label}
                      </p>
                    </div>

                    {/* Label - desktop only */}
                    <p className="text-xs sm:text-sm text-accent font-semibold uppercase tracking-wider mb-4 hidden lg:block">
                      {step.label}
                    </p>

                    {/* Title */}
                    <h3 className={`text-3xl sm:text-4xl font-semibold tracking-[-0.01em] leading-tight mb-4 transition-all duration-500 ${
                      activeStep === index ? 'text-foreground' : 'text-muted'
                    }`}>
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-base sm:text-lg leading-relaxed font-light transition-all duration-500 ${
                      activeStep === index ? 'text-muted' : 'text-subtle'
                    }`}>
                      {step.description}
                    </p>
                  </div>

                  {/* Right side - Large Illustration */}
                  <div className={`transition-all duration-700 ${
                    activeStep === index 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-40 translate-y-4'
                  }`}>
                    <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-border/50 bg-surface shadow-xl aspect-4/3">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        key={step.video}
                        style={{
                          filter: 'contrast(1.02) saturate(1.05)'
                        }}
                      >
                        <source src={step.video} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
