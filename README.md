# Vionum

**Fast settlement for obvious prediction-market outcomes.**

Vionum is an AI oracle that resolves clear prediction-market claims in minutes, not hours—without asking operators to trust a black box.

---

## The Problem

Web3 oracles solved numeric questions like "what is ETH worth right now," but they struggle with real-world claims: "did this event happen," "did this outcome satisfy the market rules," or "should this contract pay out."

Current systems force a tradeoff:
- **Fast centralized APIs** → nobody trusts them for serious settlement
- **Decentralized dispute systems** → trusted but too slow for good UX

In prediction markets, this creates visible product failure:
- Users see the result with their own eyes
- The protocol makes them wait hours or days for settlement
- Liquidity stays frozen during dispute windows
- Operators get blamed for slowness even when the system works as designed

**The gap:** Smart contracts need structured, machine-readable truth. The real world produces ambiguous, natural-language evidence.

---

## The Solution

Vionum is a constrained, evidence-first AI oracle that separates obvious outcomes from ambiguous ones—and settles the obvious ones much faster.

### How It Works

1. **Claim** — Accept a structured prediction-market claim
2. **Evidence** — Retrieve data only from approved, whitelisted sources
3. **Council** — Run multi-agent evaluation over that evidence
4. **Verdict** — Produce a verdict, confidence score, and evidence summary

**Key principle:** Low-confidence or disputed outcomes escalate to human fallback. Vionum doesn't replace all human judgment—it handles the obvious cases so humans can focus on the hard ones.

---

## Why Trust It

Trust is not about hype. It's about operational safety.

- **Approved sources only** — No arbitrary web scraping
- **Confidence thresholds** — Auto-resolve only when confidence is high
- **Audit trail** — Every verdict shows exactly what evidence was used
- **Human fallback** — Ambiguous cases escalate automatically
- **Gradual rollout** — Operators control when and how to introduce Vionum

Vionum is designed for adoption safety, not just technical cleverness.

---

## Target Use Case

**V1 focus:** Prediction markets with clear resolution criteria, reliable public sources, and binary or tightly structured verdicts.

**Example:**
- **Claim:** "Did Team A beat Team B in the championship game?"
- **Current state:** Claim submitted → dispute window → human voting → delayed settlement
- **With Vionum:** Claim submitted → evidence retrieved → council evaluates → verdict in minutes

**What V1 does NOT cover:**
- Subjective governance disputes
- Legally sensitive insurance adjudication
- Generic RWA verification
- Cross-chain state verification

The right early story: **"We help prediction markets resolve obvious outcomes in minutes instead of hours."**

---

## Target User

Operations or market-integrity leads at prediction markets who are responsible for:
- Keeping markets trustworthy
- Keeping payouts moving
- Preventing settlement incidents from damaging user confidence

**Their pain:**
- Users get frustrated when clear outcomes take too long to settle
- Liquidity remains locked while markets wait for resolution
- Support burden rises because users ask why results are still pending
- Operators get blamed for slowness even if the oracle process is technically correct

---

## Project Status

**Phase 0:** Landing page to make the wedge legible fast.

The landing page's job is to:
- Explain the problem in one sentence
- Show the product wedge clearly: prediction-market settlement first
- Make the trust story understandable without deep protocol detail
- Show a simple product flow from claim to verdict to fallback
- Collect interest from operators, builders, and hackathon judges

---

## Repository Structure

```
vionum/
├── app/                    # Landing page (React + TypeScript + Vite)
│   ├── src/
│   │   ├── components/    # UI components
│   │   └── assets/        # Images and media
│   └── public/            # Static assets
├── spec.md                # Full product specification
└── README.md              # This file
```

---

## Getting Started

### Landing Page Development

```bash
cd app
npm install
npm run dev
```

The landing page is built with:
- **React** + **TypeScript**
- **Vite** for fast development
- **Tailwind CSS** for styling
- Modern, trust-heavy design language

### Design Principles

The landing page should feel:
- **Expensive, futuristic, and calm** — not cyberpunk, not meme-y
- **Like financial infrastructure meets intelligence layer**
- **Sharp, modern, and trust-heavy** — not generic AI vaporware

Visual direction:
- Dark, atmospheric background with depth
- Layered gradients, subtle grid or signal textures
- Glowing data lines, thin borders, soft reflections
- Strong typography with cinematic hero
- Accent colors that imply "verification" and "resolved truth"

---

## Core Messaging

**Headline:** Vionum resolves obvious prediction-market outcomes in minutes, not hours.

**Key points:**
- Current oracle systems are credible but slow
- Vionum is narrow on purpose
- Vionum is not generic AI vaporware
- Vionum helps markets settle obvious outcomes faster without pretending to remove all human judgment

**Copy style:**
- Terse, sharp, confident
- No buzzword soup
- No "revolutionizing Web3"
- Every section should be legible in 3 seconds

---

## Contributing

This project is currently in Phase 0 (landing page development). Contributions should focus on:
- Refining the landing page design and messaging
- Improving trust communication
- Making the product wedge more legible

---

## License

[Add license information]

---

## Contact

For demo requests, partnership inquiries, or hackathon collaboration:
[Add contact information]

---

**Vionum** — Truth, computed.
