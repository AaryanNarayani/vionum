# Vionum Spec

Project name: **Vionum**

## Problem Statement
Web3 applications can handle numeric data well, but they still struggle to resolve messy real-world claims quickly and credibly. Price oracles solved questions like "what is ETH worth right now," but they did not solve questions like "did this event happen," "did this outcome satisfy the market rules," or "should this contract pay out." In prediction markets, this creates a visible product failure: users can often see the result with their own eyes, jbut the protocol still makes them wait hours or days for final settlement because the current system depends on human dispute windows, manual review, or tokenholder consensus. That delay traps liquidity, weakens trust, and makes the operator look unreliable even when the underlying mechanism is technically working as designed.

The deeper problem is that smart contracts need structured, machine-readable truth, while the real world produces ambiguous, natural-language evidence. Existing systems usually force a tradeoff: fast answers from centralized APIs that nobody trusts for serious settlement, or decentralized dispute systems that are trusted more but are too slow for good user experience. This leaves a gap in the market for a truth-validation layer that can turn approved offchain evidence into a structured verdict quickly, explainably, and with a fallback path when confidence is low.

The first wedge for this project is not "truth for all of Web3." The first wedge is fast settlement for obvious prediction-market outcomes. The product should focus on high-confidence, structured claims where public evidence is clear, approved sources can be whitelisted, and ambiguous edge cases can fall back to human escalation. If this works, the system can later expand into adjacent categories. If it does not work here, the broader platform story is probably premature.

## Detail 1: Why Existing Solutions Are Not Good Enough
Current oracle and dispute systems are built for correctness under adversarial conditions, not for fast product-grade settlement. In many cases, that means:

- a claim is proposed
- the system waits through a dispute period
- disputed claims escalate to humans or tokenholders
- settlement finality arrives only after delay

That approach is defensible for trust minimization, but bad for user experience. It is especially bad in cases where the result is obvious and delay adds no real informational value. A user who won a market should not feel like the product is broken because the protocol architecture cannot distinguish between a clear outcome and a contested one.

## Detail 2: Target User and Core Pain
The initial target user is an operations or market-integrity lead at a prediction market. This person is responsible for keeping markets trustworthy, keeping payouts moving, and preventing settlement incidents from damaging user confidence.

Their pain is simple:

- users get frustrated when clear outcomes take too long to settle
- liquidity remains locked while the market waits for resolution
- support burden rises because users ask why the result is still pending
- the operator gets blamed for slowness even if the oracle process is technically correct

This is the buyer profile the product must satisfy first. If this person does not feel real pain strongly enough to test a faster resolution layer, the wedge is not sharp enough yet.

## Detail 3: Product Thesis
The product thesis is that a constrained, evidence-first AI oracle can resolve a subset of prediction markets much faster than current dispute-heavy systems without asking operators to trust a black box blindly.

The key product idea is:

- accept a structured claim
- retrieve evidence only from approved sources
- run multi-agent evaluation over that evidence
- produce a verdict, confidence score, and evidence summary
- route low-confidence or disputed outcomes to human fallback

This means the product is not trying to replace all human judgment on day one. It is trying to separate obvious, high-confidence outcomes from ambiguous ones and settle the obvious ones much faster.

## Detail 4: Hardest Risk
The hardest problem is not model quality by itself. The hardest problem is trust bootstrap.

A market operator is not really buying "AI." They are underwriting settlement risk. That means they will ask:

- when does the system auto-resolve versus escalate
- what exact evidence did it see
- how do we know the evidence was not tampered with
- what happens when the system is wrong
- how can we introduce this safely without risking core market integrity

So the project must be designed around adoption safety, not just technical cleverness. Confidence thresholds, source controls, auditability, fallback paths, and gradual rollout matter more than grand claims about becoming the universal truth layer.

## Detail 5: Scope Boundary for V1
V1 should stay narrow. It should only support a limited class of prediction-market questions that have:

- clear resolution criteria
- reliable public sources
- binary or tightly structured verdicts
- obvious user pain from settlement delay

V1 should not attempt to cover:

- all Web3 truth resolution
- subjective governance disputes
- legally sensitive insurance adjudication
- generic RWA verification
- cross-chain communication problems that are really state-verification problems rather than natural-language truth problems

The right early story is: "We help prediction markets resolve obvious outcomes in minutes instead of hours." That is a product. "We are the truth layer for all of Web3" is still a vision.

## Phase 0: UI/UX Landing Page
The only implementation phase in scope right now is the landing page. Its job is not to ship the oracle. Its job is to make the wedge legible fast: Vionum resolves obvious prediction-market outcomes in minutes, not hours.

The landing page should do five things well:

- explain the problem in one sentence
- show the product wedge clearly: prediction-market settlement first
- make the trust story understandable without deep protocol detail
- show a simple product flow from claim to verdict to fallback
- collect interest from operators, builders, and hackathon judges

Core sections:

- Hero: clear headline, short subheadline, primary CTA
- Problem: why current human-dispute settlement creates bad UX
- How it works: structured claim, approved evidence, AI council, confidence, fallback
- Why trust it: explainability, approved sources, audit trail, dispute escalation
- Use case: obvious prediction-market outcomes settled faster
- CTA: waitlist, demo request, or hackathon contact

The page should feel sharp, modern, and trust-heavy. It should not look like generic AI vaporware. The goal is to make users think: "This is narrow, useful, and plausible."

### Phase 0 Design Instruction Prompt
Use this prompt in Cursor or Codex to generate the landing page:

```md
Design and build a very high-end landing page for **Vionum**, an AI oracle for fast prediction-market settlement.

Core product message:
Vionum resolves obvious prediction-market outcomes in minutes, not hours.

What Vionum is:
- a trust-focused AI oracle
- built for prediction markets first
- turns approved offchain evidence into structured verdicts
- uses confidence thresholds and fallback escalation for hard cases

What the page must communicate:
- current oracle systems are credible but slow
- Vionum is narrow on purpose
- Vionum is not generic AI vaporware
- Vionum helps markets settle obvious outcomes faster without pretending to remove all human judgment

Visual direction:
- make it look expensive, futuristic, and calm
- not cyberpunk, not meme-y, not childish
- no purple-on-white startup template
- no generic SaaS blobs
- the mood should feel like “financial infrastructure meets intelligence layer”
- the page should feel like truth is being computed live

Art direction:
- dark, atmospheric background with depth
- layered gradients, subtle grid or signal textures
- glowing data lines, thin borders, soft reflections
- strong typography with a cinematic hero
- use a bold serif or distinctive display face for the main headline, paired with a clean modern sans for UI text
- numbers, verdicts, and timestamps should feel precise and terminal-grade

Color direction:
- avoid default purple
- use a richer palette like obsidian / graphite / deep navy with accents in acid green, ice blue, or signal amber
- the accent color should imply “verification” and “resolved truth”
- keep contrast excellent

Interaction and motion:
- subtle but meaningful animation only
- hero should have ambient motion, like scanning, pulsing verdict states, or flowing evidence traces
- sections should reveal with stagger and restraint
- animate confidence scores, verdict chips, and timeline stages
- respect reduced motion

Information architecture:
1. Hero
2. Problem
3. How it works
4. Why Vionum is trustworthy
5. Use case: prediction market settlement
6. Final CTA

Hero requirements:
- headline must be short and punchy
- subheadline explains the wedge in one sentence
- primary CTA: Request Demo
- secondary CTA: See How It Works
- include a visual centerpiece that feels like a live verdict engine
- example centerpiece: a card stack showing claim, source evidence, agent council, confidence score, and final verdict

Problem section:
- show the current state clearly:
  - claim submitted
  - dispute window
  - human voting
  - delayed settlement
- make the pain visible: frozen liquidity, waiting users, broken trust
- do not write this as a wall of text
- use visual comparison

How it works section:
- 4 clean stages:
  - Claim
  - Evidence
  - Council
  - Verdict
- each stage should feel tactile and visual
- show that Vionum uses approved sources and fallback escalation
- emphasize structured output, not vague AI chat output

Trust section:
- this is one of the most important sections
- explain trust through product behavior, not hype words
- highlight:
  - approved evidence sources
  - confidence thresholds
  - audit trail
  - human fallback for ambiguous cases
- present trust as operational safety

Use case section:
- focus only on prediction markets
- show an example like:
  - “Did Team A beat Team B?”
  - status changes from pending to resolved
  - settlement time collapses from hours to minutes
- this section should make the wedge feel obvious and real

Copy style:
- terse, sharp, confident
- no buzzword soup
- no “revolutionizing Web3”
- no long paragraphs
- every section should be legible in 3 seconds

Design constraints:
- mobile-first responsive
- visually striking on desktop
- accessible contrast
- clean semantic structure
- polished hover and focus states

Tech preferences:
- Next.js
- TypeScript
- Tailwind CSS
- use CSS variables for theme values
- build reusable sections/components

Important:
- take inspiration from UMA’s compressed messaging and staged explanation, but do not copy UMA’s visual style
- UMA feels institutional and static; Vionum should feel sharper, more alive, and more premium
- this should look like a top-tier launch page for a product people would screenshot and share
```

### Notes from UMA UI Analysis
- UMA’s homepage wins on compressed positioning. It says what it is quickly and explains the oracle flow in stages.
- UMA’s homepage is also fairly institutional: strong information, lower visual drama.
- Vionum should keep the staged clarity but raise the taste level significantly.
- The page should sell speed, confidence, and trust at a glance.
