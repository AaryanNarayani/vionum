const UseCase = () => {
  return (
    <section id="use-case" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            <div>
              <p className="text-sm text-accent font-semibold mb-4 uppercase tracking-wider">
                Use case
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.02em] mb-6">
                <span className="font-bold">Built for</span>{' '}
                <span className="font-light">prediction markets</span>
              </h2>
              <p className="text-xl text-muted leading-relaxed font-light">
                Clear outcomes settled in minutes. Not hours. Not days. Liquidity unlocked immediately.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-surface rounded-2xl p-6 border border-border">
                <div className="text-4xl font-bold tabular mb-2">2min</div>
                <div className="text-sm text-muted">Average settlement</div>
              </div>
              <div className="bg-surface rounded-2xl p-6 border border-border">
                <div className="text-4xl font-bold tabular mb-2">96%</div>
                <div className="text-sm text-muted">Confidence score</div>
              </div>
              <div className="bg-surface rounded-2xl p-6 border border-border">
                <div className="text-4xl font-bold tabular mb-2">180×</div>
                <div className="text-sm text-muted">Faster than traditional</div>
              </div>
              <div className="bg-surface rounded-2xl p-6 border border-border">
                <div className="text-4xl font-bold tabular mb-2">90%+</div>
                <div className="text-sm text-muted">Auto-resolve threshold</div>
              </div>
            </div>
          </div>

          {/* Right: Prediction Market Card */}
          <div className="bg-background rounded-3xl p-8 border-2 border-border shadow-xl">
            {/* Market Question */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-muted uppercase tracking-wider font-semibold">
                  Prediction Market
                </span>
                <span className="text-xs text-accent font-semibold uppercase tracking-wider">
                  Settled
                </span>
              </div>
              <h3 className="text-2xl font-semibold mb-6 leading-tight">
                Will Team A beat Team B in the championship final?
              </h3>
            </div>

            {/* Yes/No Outcome Buttons */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {/* YES - Winner */}
              <div className="relative bg-accent rounded-2xl p-6 border-2 border-accent">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center border-2 border-background">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-white text-lg font-bold mb-1">Yes</div>
                <div className="text-white/80 text-2xl font-bold tabular">16¢</div>
              </div>

              {/* NO - Loser */}
              <div className="bg-surface rounded-2xl p-6 border-2 border-border opacity-60">
                <div className="text-muted text-lg font-bold mb-1">No</div>
                <div className="text-muted text-2xl font-bold tabular">84¢</div>
              </div>
            </div>

            {/* Market Stats */}
            <div className="grid grid-cols-2 gap-6 py-6 border-y border-border mb-6">
              <div>
                <div className="text-xs text-muted mb-2 uppercase tracking-wider">Total Volume</div>
                <div className="text-xl font-bold tabular">$124,500</div>
              </div>
              <div>
                <div className="text-xs text-muted mb-2 uppercase tracking-wider">Participants</div>
                <div className="text-xl font-bold tabular">1,247</div>
              </div>
            </div>

            {/* Settlement Info */}
            <div className="bg-accent/10 border-2 border-accent/30 rounded-2xl p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-sm font-semibold text-accent mb-1">RESOLVED: YES</div>
                  <div className="text-sm text-muted">
                    Team A won 3-1 in regulation time
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm pt-4 border-t border-accent/20">
                <span className="text-muted">Settlement time:</span>
                <span className="font-mono font-bold text-accent tabular">2m 14s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCase;
