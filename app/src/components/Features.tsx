const Features = () => {
  const features = [
    {
      title: 'Evidence Verified',
      description: 'Pull data exclusively from sources you approve ESPN, Reuters, official APIs etc. No random scraping. Only trusted providers you whitelist.',
      image: '/1.png',
    },
    {
      title: 'AI Council',
      description: 'Multi-agent evaluation with independent analysis. Four specialized agents reach consensus on every claim.',
      image: '/2.png',
    },
    {
      title: 'Instant or Escalate',
      description: 'High confidence settles immediately. Ambiguous cases route to human review automatically.',
      image: '/3.png',
    },
  ];

  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-sm text-accent font-semibold mb-4 uppercase tracking-wider">
            Introducing Vionum
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.02em] mb-6">
            <span className="font-bold">AI powered settlement</span>{' '}
            <span className="font-light text-muted">
              that's faster, trustworthy, and unlocks liquidity instantly.
            </span>
          </h2>
        </div>

        {/* 3-column grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface Feature {
  title: string;
  description: string;
  image: string;
}

const FeatureCard = ({ feature }: { feature: Feature }) => {
  return (
    <div className="space-y-6">
      {/* Image */}
      <div className="aspect-4/3 rounded-3xl overflow-hidden bg-surface border border-border">
        <img 
          src={feature.image} 
          alt={feature.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="space-y-4">
        <h3 className="text-3xl font-semibold tracking-[-0.01em]">{feature.title}</h3>
        <p className="text-muted leading-relaxed font-light text-lg">{feature.description}</p>
      </div>
    </div>
  );
};

export default Features;
