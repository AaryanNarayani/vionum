const Problem = () => {
  return (
    <section className="relative py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight tracking-tight max-w-4xl">
            Current oracles are credible but slow
          </h2>
        </div>

        <div className="space-y-32">
          {/* Current flow */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-background rounded-lg text-sm font-mono text-muted mb-6">
                CURRENT STATE
              </div>
              <h3 className="text-3xl font-bold mb-6">
                Users see the result—the protocol makes them wait
              </h3>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  A claim is proposed. The system waits through a dispute period. 
                  Disputed claims escalate to humans or tokenholders.
                </p>
                <p>
                  Settlement finality arrives only after delay—often 6+ hours for obvious outcomes.
                </p>
              </div>

              {/* Timeline */}
              <div className="mt-8 space-y-4">
                <TimelineItem time="0:00" label="Claim submitted" />
                <TimelineItem time="0:05" label="Dispute window opens" />
                <TimelineItem time="2:00" label="Human voting period" />
                <TimelineItem time="6:00+" label="Settlement finalized" highlight />
              </div>
            </div>

            <div className="illustration-placeholder aspect-[4/3]">
              <div className="text-center p-8">
                <p className="font-mono text-xs mb-2">PROBLEM ILLUSTRATION</p>
                <p className="text-xs">Conveyor belt with boxes stuck</p>
                <p className="text-xs mt-4">Isometric 3D: Slow manual process</p>
              </div>
            </div>
          </div>

          {/* Pain points */}
          <div className="grid md:grid-cols-3 gap-8">
            <PainCard
              title="Liquidity frozen"
              description="Users can't access winnings or reinvest while waiting for settlement"
            />
            <PainCard
              title="Support burden"
              description="Users ask why obvious outcomes take so long to resolve"
            />
            <PainCard
              title="Trust erosion"
              description="Operators get blamed for slowness even when the protocol works correctly"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ time, label, highlight }: { time: string; label: string; highlight?: boolean }) => (
  <div className="flex items-center gap-4">
    <div className={`w-2 h-2 rounded-full ${highlight ? 'bg-accent' : 'bg-border'}`} />
    <div className="flex-1 flex items-baseline justify-between">
      <span className={`text-sm ${highlight ? 'font-semibold' : ''}`}>{label}</span>
      <span className="text-sm font-mono text-muted tabular">{time}</span>
    </div>
  </div>
);

const PainCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-background rounded-2xl p-6 border border-border">
    <h4 className="font-bold text-lg mb-2">{title}</h4>
    <p className="text-sm text-muted leading-relaxed">{description}</p>
  </div>
);

export default Problem;
