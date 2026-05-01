import { Shield, CheckCircle, FileText, Users } from 'lucide-react';

const Trust = () => {
  const trustFeatures = [
    {
      icon: Shield,
      title: "Approved sources",
      description: "Evidence only from whitelisted, verified sources. The operator controls which data providers are trusted.",
    },
    {
      icon: CheckCircle,
      title: "Confidence thresholds",
      description: "Auto-resolve only when confidence exceeds 90%. Ambiguous cases escalate to human review.",
    },
    {
      icon: FileText,
      title: "Audit trail",
      description: "Every verdict includes full evidence log, agent reasoning, and timestamps. Immutable and verifiable.",
    },
    {
      icon: Users,
      title: "Human fallback",
      description: "Disputed or low-confidence outcomes route to human review automatically. No black box decisions.",
    },
  ];

  return (
    <section id="trust" className="relative py-40 px-6 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <img 
          src="/bg.jpg" 
          alt="" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 from-background via-background/95 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-24">
          <p className="text-sm text-accent font-semibold mb-6 uppercase tracking-wider">
            Why trust it
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.02em] mb-8 max-w-4xl mx-auto">
            <span className="font-bold">Trust through transparency,</span>{' '}
            <span className="font-light">not hype</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed font-light">
            Every decision is explainable, auditable, and designed for operational safety.
          </p>
        </div>

        {/* Trust features grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
          {trustFeatures.map((feature, index) => (
            <TrustCard key={index} feature={feature} />
          ))}
        </div>

        {/* Callout box */}
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 from-accent/20 via-accent/30 to-accent/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            
            {/* Card */}
            <div className="relative bg-background/80 backdrop-blur-sm border-2 border-accent/30 rounded-3xl p-10 sm:p-12">
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 tracking-[-0.01em]">
                    Operational safety first
                  </h3>
                  <p className="text-lg text-muted leading-relaxed font-light">
                    Vionum is designed for gradual rollout. Start with low-stakes markets, monitor performance, 
                    and scale confidence as trust builds. Every step is transparent, every decision is auditable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TrustFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const TrustCard = ({ feature }: { feature: TrustFeature }) => {
  const Icon = feature.icon;
  
  return (
    <div className="group relative h-full cursor-pointer">
      {/* Subtle glow on hover */}
      <div className="absolute -inset-0.5 bg-linear-to-r from-accent/0 via-accent/20 to-accent/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
      
      {/* Card */}
      <div className="relative h-full bg-background/60 backdrop-blur-sm rounded-2xl p-8 border border-border group-hover:border-accent/40 transition-all duration-300 flex flex-col">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors shrink-0">
          <Icon className="w-7 h-7 text-accent" />
        </div>
        
        {/* Content */}
        <div className="grow">
          <h3 className="text-2xl font-semibold mb-4 tracking-[-0.01em] group-hover:text-accent transition-colors">
            {feature.title}
          </h3>
          <p className="text-muted leading-relaxed font-light text-lg">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trust;
