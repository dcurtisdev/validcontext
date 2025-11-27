# Product Requirements Document: AI PM Copilot for Vibe Coders

**Version:** 3.0 (MCP Integration)  
**Last Updated:** November 26, 2025  
**Status:** Draft for Development

**Major Updates:**
- **v3.0 (Current):** Added MCP (Model Context Protocol) server integration - validated insights flow directly to AI coding agents
- **v2.0:** Pivoted to focus on vibe coders (builders using AI to ship products) as primary market
- **v1.0:** Original concept (PM tool for enterprises) maintained as secondary market

**Strategic Innovation:** This PRD introduces MCP server integration as the killer feature - creating a direct neural pathway between customer validation and AI coding agents. Developers can now build with validated customer context automatically exposed to Claude Code, Cursor, and other AI coding tools.

---

## Executive Summary

We are building the **AI PM Copilot for vibe coders** - the missing tool in the AI coding stack that validates ideas before you build and **feeds customer insights directly to your AI coding agent while you build**.

**The Problem:** AI tools like Claude Code, Cursor, and v0 have made building products effortless. Anyone can ship a SaaS product in 2 weeks. But most builders don't know how to validate ideas, understand customers, or position products—so they build things nobody wants. The bottleneck shifted from "can I build it?" to "should I build it?"

**Our Solution:** An AI-powered validation platform that combines **customer discovery coaching** with **synthetic user testing** and **MCP (Model Context Protocol) integration** based on Jobs-to-be-Done methodology. We help builders:

1. **Validate ideas before coding** - Test assumptions with real customer interviews guided by AI
2. **Understand psychological buying behavior** - Learn which forces (PUSH, PULL, ANXIETY, HABIT) drive or block purchases
3. **Test messaging before launch** - Use AI agents trained on real customer insights to predict conversion
4. **🔥 NEW: Build with customer context** - MCP server exposes validated insights to Claude Code, so every line of code and copy is informed by real customer psychology

**The Breakthrough - MCP Integration:**

Traditional workflow:
```
Validate → Read insights → Tell Claude Code → Hope you remember → Ship
```

Our workflow:
```
Validate → MCP exposes insights → Claude Code reads them automatically → 
Every feature, every word of copy informed by validated customer psychology
```

**Example:** When you ask Claude Code to "build my landing page," it automatically queries the MCP server, gets your validated force profile, and generates a page using exact customer language, addressing their anxieties, and pre-tested with synthetic agents. **You literally can't build the wrong thing because Claude is constrained by validated truth.**

**Target Market:** The emerging class of "vibe coders" - solo founders and indie hackers using AI to build products but lacking PM experience. This is a rapidly growing market: Claude Code, Cursor, and similar tools have millions of users shipping products every week.

**Unique Value Proposition:** 
> "You learned to code with AI. Now learn product management with AI. Claude Code builds your product. We make sure it's the right product - and give Claude the customer context to build it correctly."

We're not just a research tool—we're **the neural pathway between customer validation and AI coding agents**. The first platform where your code editor knows your customers as well as you do.

---

## Table of Contents

1. [Product Vision & Strategy](#product-vision--strategy)
2. [Market Context & Competition](#market-context--competition)
3. [Core Concepts & Methodology](#core-concepts--methodology)
4. [User Personas & Use Cases](#user-personas--use-cases)
5. [Product Architecture](#product-architecture)
6. [Feature Requirements: PM Discovery Assistant](#feature-requirements-pm-discovery-assistant)
7. [Feature Requirements: Synthetic Agent Simulator](#feature-requirements-synthetic-agent-simulator)
8. [Technical Specifications](#technical-specifications)
9. [Data Models](#data-models)
10. [UI/UX Requirements](#uiux-requirements)
11. [Success Metrics](#success-metrics)
12. [Phased Rollout Plan](#phased-rollout-plan)
13. [Open Questions](#open-questions)

---

## Product Vision & Strategy

### Vision Statement
Empower the next generation of AI-enabled builders to ship products people actually want by making world-class product management accessible, actionable, and automated.

### The Vibe Coder Revolution & The PM Skills Gap

**What's Happening:**
- Claude Code, Cursor, v0, Replit, Bolt are turning ideas into products in hours
- People with ZERO coding experience are shipping SaaS products
- Technical founders can build full-stack apps in days, not months
- The bottleneck is no longer "can I build it?" but "should I build it? And how should I position it?"

**The Problem:**

Traditional vibe coder journey:
```
1. Has idea for product
2. Builds entire product with AI in 2 weeks
3. Launches on Twitter/ProductHunt  
4. Gets 5 signups, 0 paying customers
5. "I guess people don't want this?"
6. Abandons or pivots blindly
7. Repeats cycle

Total time wasted: 2-4 weeks building the wrong thing
Total cost: Opportunity cost of not building the RIGHT thing
```

**What They're Missing:**
- How to validate ideas BEFORE building
- How to conduct effective customer interviews (not just asking friends)
- How to identify real pain vs. "nice to have"
- How to position and message products based on customer psychology
- How to understand the Four Forces that drive buying decisions
- How to know if they have product-market fit vs. just interest

**Our Solution:**

The AI-powered validation journey:
```
Day 1: Idea → Validation
├─ Input idea into tool
├─ AI generates hypothesis about who wants this and why
├─ Get interview guide with 5 key questions
├─ Tool suggests where to find target users
└─ Do 3-5 quick interviews with AI coaching

Day 2: Analysis → Decision  
├─ AI analyzes interviews in real-time
├─ Force profile built automatically (PUSH/PULL/ANXIETY/HABIT)
├─ "Build vs. Don't Build" recommendation with confidence score
├─ If build: Get ICP profile + positioning guide
└─ If don't: Get pivot suggestions or abandon with reasons

Day 3: Messaging → Testing
├─ Draft landing page copy based on force profile
├─ Test with 100 synthetic users trained on your interviews
├─ Get specific improvements (which sections fail, why)
└─ Launch with validated messaging

Week 1: Launch → First Customer
├─ Track real conversion vs. predicted
├─ Continuous learning from real data
└─ Ship features based on validated customer needs
```

**Time Saved:** 2-4 weeks of building the wrong thing  
**Money Saved:** Weeks of opportunity cost  
**Success Rate:** 3-5x higher chance of finding product-market fit

### The Gap We're Filling

**What's Missing in the Market:**

1. **No psychological stage modeling**: Current tools test "will they click?" but not "where are they in their buying journey?" (passive looking → active looking → deciding → consuming)

2. **No Four Forces integration**: 
   - PUSH (problems with current solution) - no tools model accumulated frustration
   - PULL (attraction to new solution) - attention heatmaps ≠ magnetic pull based on desired outcomes
   - ANXIETY (fear of new solution) - no simulation of risk aversion or "what if this doesn't work?"
   - HABIT (comfort with current state) - no modeling of status quo bias or switching costs

3. **No Jobs-based agent personas**: Synthetic Users creates personality traits (FFM), but not Jobs-to-be-Done contexts. Gap: agents that are "hired" to do a specific job and evaluate whether your product can do that job better.

4. **No progressive disclosure testing**: Landing page tools test static conversion, but real buyers progress through stages. Gap: simulating how agents move through awareness → problem recognition → solution education → alternatives evaluation → anxieties resolution → decision.

5. **No automation of JTBD methodology**: The Re-Wired Group does JTBD consulting but has no software. Gap: democratizing their methodology with AI guidance and synthetic agents.

### Competitive Positioning

**We're Not Competing With Traditional UX Research Tools**

Our primary competitors aren't Synthetic Users, Evidenza, or UserTesting—those are enterprise tools for professional researchers. We're competing with what vibe coders ACTUALLY do today:

| What Vibe Coders Do Now | Why It Fails | How We're Better |
|-------------------------|--------------|------------------|
| **Ask friends/Twitter for feedback** | Friends lie to be nice, Twitter feedback is superficial | Real structured interviews with strangers who have the problem |
| **Build first, see if anyone signs up** | Wastes 2-4 weeks, no learning about WHY it failed | Validate in 1-2 days, learn psychological blockers |
| **Use generic ChatGPT for advice** | Generic advice, no methodology, no structure | JTBD framework built-in, learns from your specific customers |
| **Read PM books/take courses** | Takes weeks to learn, hard to apply, expensive | Learn by doing with AI coaching, immediate application |
| **Just launch and iterate** | Expensive iteration, slow feedback loops | Test messaging with synthetic users before launch |
| **Copy competitor positioning** | Undifferentiated, don't understand customer psychology | Build positioning from real customer insights |
| **🆕 Tell Claude Code what to build** | Builders forget insights, generic output | **MCP feeds validated insights directly to Claude Code** |

**🔥 The MCP Moat: Nobody Else Has This**

Every other tool requires you to manually transfer insights from validation to building. We're the **only platform** where:
- Validated customer insights automatically flow to your AI coding agent
- Claude Code can't generate copy that doesn't match customer language
- Features get validated before building (not after launch)
- Landing pages are pre-tested with synthetic agents before deployment

**This is un-copyable without:**
1. JTBD methodology expertise (we have it)
2. Synthetic user generation (we have it)
3. Validated force profiles (we have them)
4. MCP integration (we're first to market)

**Secondary Competition: PM Education & Tools**

| Competitor | What They Do | Our Differentiation |
|------------|-------------|---------------------|
| **Re-Wired Group** | Bob Moesta's JTBD consulting ($50K+) | We automate their methodology for $49/month + MCP integration |
| **Reforge / PM courses** | Teach PM frameworks ($2K+ courses) | Learn by doing, AI teaches you + MCP applies learning |
| **Strategyn ODI** | Quantitative JTBD for enterprises | Qualitative insights for indie builders, AI-guided, MCP-enabled |
| **UserTesting.com** | Human panel testing ($100+ per test) | AI synthetic testing + MCP = instant results, $0 per test |
| **Synthetic Users/Evidenza** | Generic synthetic users for research | Psychological force-based agents + MCP coding integration |

**Our Unique Position:**

We're the **only platform** that:
1. Teaches JTBD methodology through AI coaching (not just documentation)
2. Validates ideas BEFORE you write code (prevention vs. cure)
3. Tests psychological conversion, not just "will they click"
4. Builds from real interviews → synthetic agents (human-in-the-loop AI)
5. **🔥 Exposes validated insights via MCP to AI coding agents** (killer differentiator)
6. Priced for indie builders ($49/month vs. $5K+ consulting)
7. Integrates into the AI builder workflow (not a separate research silo)

**Positioning Statement:**
> "The missing tool in your AI coding stack. Claude Code builds your product. We make sure it's the right product - and give Claude the customer context to build it correctly."

---

## Market Context & Competition

### Market Size & Trends

- **User Research Market**: $25B+ (legacy industry ripe for disruption)
- **AI Agent Investment**: $3.8B raised in 2024 (3x YoY growth)
- **Gartner Prediction**: 33% of enterprise software will include agentic AI by 2028 (vs <1% in 2024)

### Competitive Landscape

**Category 1: Synthetic User Platforms**
- **Synthetic Users** (syntheticusers.com): Multi-agent LLM personas, 85% accuracy claim, validated by Stanford/Google DeepMind
- **Evidenza** (evidenza.ai): B2B focus, 95% correlation claim, customers: EY, Mars, Salesforce
- **Outset** (outset.ai): AI-moderated interviews, $21M funding, customers: Microsoft, Nestlé, HubSpot
- **Yabble**: Virtual audiences for instant market insights ($8,900-$80,000/year)

**Category 2: Predictive Analytics & CRO**
- **Attention Insight**: Eye-tracking prediction, 90-96% accuracy (MIT validated)
- **Kameleoon**: Simulates test outcomes before launch with KCS™ score
- **Unbounce Smart Traffic**: Auto-routes visitors to best-converting variants
- **Pathmonk**: Real-time personalization, 54-180% conversion improvements

**Category 3: JTBD Tools (Software Gap)**
- **The Re-Wired Group**: Bob Moesta's consulting firm (no software)
- **Strategyn**: ODI methodology with ODIpro platform (quantitative, training-focused)
- **JTBD Research App**: First software implementation, ChatGPT integration for survey generation

**Category 4: Agentic Testing (Emerging)**
- **Spur** (YC S24): AI agents navigate browsers with natural language
- **mabl**: Agentic Tester digital teammate for QA
- **UXAgent** (academic): Simulates personas interacting with live websites

### Our Unique Position

We are the **only platform** that:
1. Combines JTBD methodology with synthetic user generation
2. Models psychological progression through the sales cycle
3. Measures conversion by Four Forces balance, not just clicks
4. Creates a feedback loop: real interviews → train agents → synthetic testing → refine positioning → validate with real users

---

## Core Concepts & Methodology

### Jobs-to-be-Done (JTBD) Framework

**Core Principle:** People don't buy products, they "hire" them to make progress in their lives. Understanding the job they're trying to do is more predictive than demographics or personas.

**Key Question:** "What job are customers hiring this product to do?"

**Example:**
- Bad framing: "Who is our customer?" → "Marketing managers at B2B SaaS companies"
- Good framing: "What job are they hiring us for?" → "Get credit for pipeline growth without fighting with sales over attribution"

### The Four Forces of Customer Progress

Bob Moesta's framework for understanding why people switch (or don't switch) from one solution to another.

```
         PULL (Magnetism of New)
    "What makes the new solution attractive?"
              ↓
              
HABIT ← [CUSTOMER IN CONTEXT] → ANXIETY  
(Current)        ↓              (Fear)
"Why stay?"                "Why not switch?"
              
         PUSH (Problems)
    "What's making them struggle?"
```

**The Switching Formula:**
```
SWITCH OCCURS WHEN:
(PUSH + PULL) > (ANXIETY + HABIT)
```

**PUSH (Problems pushing away from current solution)**
- What problems exist with their current approach?
- How intense is the pain? (mild annoyance vs. crisis)
- What trigger events make them start searching?
- Example: "Lost $50K deal because two reps contacted same prospect"

**PULL (Attraction to new solution)**
- What outcomes do they desire?
- What would make them excited about switching?
- What "wow" moments create magnetic pull?
- Example: "Real-time pipeline visibility that actually updates"

**ANXIETY (Fears about new solution)**
- What could go wrong?
- Past failures with similar solutions?
- Implementation concerns, cost fears, political risks?
- Example: "We tried Salesforce and it was a disaster—8 months, nobody used it"

**HABIT (Comfort with current solution)**
- How long have they used current approach?
- Who else is invested in current system?
- Switching costs (time, money, training, political)?
- Example: "Excel is free, everyone knows it, already IT-approved"

### Psychological Stages of the Buying Journey

Customers move through distinct psychological states. Messaging that works for one stage fails in another.

**1. Passive Looking** (Problem Aware but Not Searching)
- Recognizes problem exists but hasn't prioritized solving it
- No active evaluation of alternatives
- Needs: Problem validation, emotional resonance with struggle
- Messaging: "You're not alone, this is a real problem worth solving"

**2. Active Looking** (Actively Searching for Solutions)
- Recent trigger event pushed them to start searching
- Evaluating multiple alternatives
- Building mental model of what "good" looks like
- Needs: Education on solution space, comparison framework
- Messaging: "Here's how to think about solving this, here's what to look for"

**3. Deciding** (Comparing Specific Options)
- Narrowed to 2-3 specific products
- Deep anxiety about making wrong choice
- Building internal case for stakeholders
- Needs: Anxiety reduction, proof, implementation confidence
- Messaging: "Here's why we're different, here's proof it works, here's how easy it is"

**4. Consuming** (Post-Purchase Experience)
- Already bought, now using product
- May experience buyer's remorse or implementation challenges
- Needs: Onboarding support, quick wins, reinforcement
- Messaging: "You made the right choice, here's how to get value fast"

### Struggling Moments (The Key to Real JTBD Insights)

**Definition:** A specific event where the customer's current solution failed them in a way that created emotional + practical consequences.

**Why It Matters:** Struggling moments are the trigger events that move people from Passive to Active Looking. They reveal the true intensity of PUSH.

**How to Identify:**
- Emotional language: "embarrassing," "frustrated," "nightmare," "disaster"
- Specific events: "Last month when X happened..." "The time we lost the deal..."
- Consequences: Revenue loss, reputation damage, time wasted
- Urgency indicators: "I can't let that happen again"

**Example Struggling Moment:**
- Event: "Two sales reps contacted the same $50K prospect with contradictory information"
- Emotion: "Really embarrassing, looked completely unprofessional"
- Consequence: "Lost the deal, damaged relationship, CEO asked 'why don't we have a CRM?'"
- Result: Moved from Passive Looking to Active Looking immediately

### Alternative Solutions Mapping

Understanding what customers have tried (and why it failed) is critical for positioning.

**The Journey:**
```
[Current Solution] → [Trigger Event] → [Considered Alternative A] → 
[Tried Alternative B] → [Failed/Fired Alternative B] → 
[Back to Current or Found Alternative C] → [Still Searching?]
```

**Key Questions:**
- What do they use today? (current "hired" solution)
- What have they tried before? (previously "hired then fired")
- Why did previous solutions fail? (source of current ANXIETY)
- What alternatives are they considering? (competitive set)

**Example:**
- **Current**: Excel + Email (5 years, HABIT = strong)
- **Tried 2022**: Salesforce (8 months, fired due to complexity)
- **Why it failed**: "Too complex, 6-month implementation, poor adoption, $40K wasted"
- **Result**: High ANXIETY about trying another CRM ("What if this is Salesforce 2.0?")
- **Implication**: Any new CRM must directly address "We're NOT Salesforce" before discussing features

---

## User Personas & Use Cases

### Primary Personas (Vibe Coder Market)

#### Persona 1: The AI Builder (PRIMARY TARGET)
**Name:** Alex Chen  
**Age:** 28  
**Background:** Software engineer by day, building side projects with AI at night  
**Technical Level:** Can write code but never formally learned, uses Claude Code/Cursor heavily  
**PM Experience:** Zero. Never taken a product course, doesn't know what JTBD means

**Current Situation:**
- Has shipped 5 products in the past year using AI coding tools
- Total revenue from all products: $200/month
- Keeps building things that get initial interest but no traction
- Spends 2-3 weeks per product, launches, gets discouraged, moves to next idea
- Active on Twitter #buildinpublic, follows other indie hackers

**Goals:**
- Ship ONE product that makes $5K/month (enough to feel validated)
- Stop wasting time building the wrong things
- Learn how to validate ideas before coding
- Understand why some products work and others don't

**Pain Points:**
- "I can build anything now with AI, but I don't know WHAT to build"
- "My friends say my ideas are cool but nobody pays for them"
- "I launch on ProductHunt, get upvotes, but no customers"
- "I feel like I'm guessing. I don't know how real PMs figure this out"
- "I don't have time to read books or take courses, I just want to ship"

**Psychographics:**
- Impatient, wants to move fast
- Willing to pay for tools that save time
- Learns by doing, not by reading
- Values community and social proof
- Maker mindset: "I'll figure it out by building"

**Objections:**
- "Can't I just ask people on Twitter?"
- "Isn't this overthinking? Just ship and iterate."
- "I don't want to spend weeks on research, I want to build."

**How We Win:**
- Show them they can validate in 1 day, not weeks
- Teach PM while they do it, not as prerequisite
- Prove with data that validated products have higher success rates
- Community of other builders using the tool successfully

**Willingness to Pay:** $49-99/month (actively trying to make revenue from products)

---

#### Persona 2: The No-Code Indie Hacker
**Name:** Maya Patel  
**Age:** 32  
**Background:** Former marketing manager, quit to build products full-time  
**Technical Level:** Non-technical, uses Webflow, Bubble, Zapier, AI tools  
**PM Experience:** Learned from YouTube and blog posts, informal

**Current Situation:**
- Building 3rd product after 2 failed attempts
- First product: Instagram analytics tool (built, launched, 50 users, churned)
- Second product: Newsletter growth tool (built, no traction, abandoned)
- Now more cautious, wants to validate before investing time/money
- Bootstrapped mindset, careful with spending

**Goals:**
- Find ONE validated idea worth going all-in on
- Understand what makes products succeed vs. fail
- Build a sustainable business ($5-10K MRR)
- Not waste 6 months building the wrong thing again

**Pain Points:**
- "I don't know if my ideas are real business opportunities or just cool features"
- "I can't afford to hire a consultant or take expensive courses"
- "I waste money on no-code tools for ideas that go nowhere"
- "I don't know how to talk to customers without sounding like I'm selling"

**How We Win:**
- Affordable ($49/month << cost of building wrong thing)
- Non-technical interview process (just conversations)
- Clear signals: "build this" or "don't build this"
- Templates and guides for every step

**Willingness to Pay:** $39-79/month (bootstrapped, cost-conscious but willing to invest in validation)

---

#### Persona 3: The Technical Founder (First Product)
**Name:** Jordan Kim  
**Age:** 24  
**Background:** Just graduated, has idea for first startup  
**Technical Level:** Strong developer, can build full-stack apps  
**PM Experience:** None, watched some YC videos

**Current Situation:**
- Has ONE big idea they want to turn into a company
- Can build the product themselves (saves money)
- Worried about building for 6 months then finding out it's wrong
- Considering applying to accelerators, needs validation

**Goals:**
- Build the right product from day one
- Demonstrate traction for investors/accelerators
- Learn product management fundamentals
- Avoid rookie mistakes

**Pain Points:**
- "I only get one shot at this, can't afford to waste time"
- "I don't know how real founders validate ideas"
- "I'm worried about building something nobody wants"
- "I need to show investors I understand the customer"

**How We Win:**
- Professional results they can show investors
- Learn PM fundamentals while validating
- Higher success rate = better use of their one shot
- Credibility through methodology (JTBD framework)

**Willingness to Pay:** $99-199/month (has saved money for startup, high stakes)

---

### Secondary Personas (Still Important)

#### Persona 4: The Product Manager (Validation User)
**Name:** Sarah Martinez  
**Role:** Senior PM at B2B SaaS startup (50-200 employees)  
**Context:** Experienced PM, knows JTBD, wants better tools

**Why They Matter:**
- Validate that the tool is professional/credible
- Become educators and advocates for the platform
- Write case studies and best practices
- Influence the builder community

**Their Use Case:**
- More advanced features (collaboration, synthesis, reporting)
- Integration with product management workflow
- Train junior PMs on the platform

**Willingness to Pay:** $199-499/month (company budget, ROI-focused)

---

### Use Cases (Prioritized for Vibe Coders)

#### Use Case 1: Idea Validation (HIGHEST PRIORITY)
**Actor:** AI Builder  
**Goal:** Decide if idea is worth building before writing any code

**Scenario:**
Alex has an idea: "Chrome extension that automatically summarizes Slack threads"

**Flow:**
1. Opens tool, clicks "Validate New Idea"
2. Describes idea in one sentence
3. AI asks: "Who would use this? What problem does it solve?"
4. Alex types: "Product managers and team leads who are overwhelmed by long Slack threads"
5. AI generates hypothesis:
   ```
   PUSH Hypothesis: Information overload, missing important decisions in threads
   PULL Hypothesis: Save time, stay caught up without reading everything
   ANXIETY Hypothesis: Might miss important context, trust in AI summaries
   HABIT Hypothesis: Currently skim threads manually or use Slack's built-in search
   
   Predicted Force Balance: HABIT (strong) may be bigger blocker than PUSH (medium)
   Recommendation: Talk to 5 PMs/team leads before building
   ```
6. Gets interview guide with 5 key questions:
   - "Tell me about a time when you missed something important in a long Slack thread"
   - "What do you currently do to stay on top of team discussions?"
   - "Have you tried any tools to help with this? What happened?"
   - "What concerns would you have about an AI summarizing your team's conversations?"
   - "What would it take for you to switch from your current approach?"
7. Tool suggests where to find these people (LinkedIn groups, Slack communities, subreddits)
8. Alex does 5 interviews over 2 days
9. Tool analyzes in real-time:
   ```
   After 5 interviews:
   
   PUSH: Medium (40/100)
   - Mild annoyance, not crisis-level pain
   - No clear struggling moments detected
   
   PULL: Low (25/100)  
   - "Would be nice" not "I need this"
   
   ANXIETY: High (75/100)
   - 4/5 worried about missing context
   - 3/5 mentioned "tried automation tools that made things worse"
   
   HABIT: Very High (85/100)
   - All 5 have used Slack for years
   - 4/5 said "I'm used to just skimming"
   - Status quo is acceptable
   
   Switching Likelihood: (40+25) < (75+85) = 65 < 160
   
   ⚠️ RECOMMENDATION: DON'T BUILD
   
   Reasons:
   1. HABIT is too strong - users are comfortable skimming
   2. No struggling moments detected - this is mild pain, not crisis
   3. ANXIETY is high - trust issues with AI on sensitive work conversations
   4. Better opportunity: 3/5 mentioned "priority ranking" as real need
   
   Suggested Pivot: "Slack priority inbox" - ranks threads by importance vs. summarizing
   This addresses same users but different (stronger) pain point
   ```
10. Alex saves 2 weeks of building the wrong thing, pivots to priority ranking idea
11. Validates that idea next (finds strong PUSH, lower HABIT)
12. Builds the RIGHT product

**Success Metrics:**
- Time saved: 2 weeks
- Confidence in decision: High (data-backed)
- Learning: Understands why it wouldn't work
- Next action: Validate better idea

---

#### Use Case 2: Customer Discovery While Building
**Actor:** AI Builder  
**Goal:** Understand customers while building MVP, inform product decisions

**Scenario:**
Maya is building a tool for freelance designers to manage client feedback. She's 50% done with MVP.

**Flow:**
1. Creates interview session for "Freelance Designers - Client Feedback Management"
2. Talks to 8 freelance designers over 1 week
3. Types notes into tool after each conversation
4. Real-time insights emerge:
   
   **After Interview 3:**
   ```
   ⚡ Struggling Moment Detected:
   "I lost a $5K client because feedback got lost in email threads and they felt ignored"
   
   Emotion: Embarrassment + financial loss
   This is REAL pain, not hypothetical
   ```
   
   **After Interview 5:**
   ```
   Force Pattern Emerging:
   
   PUSH: Strong (70/100) - Feedback gets lost, clients feel ignored
   ANXIETY: Medium (55/100) - "Another tool to check," "Will clients use it?"
   HABIT: High (75/100) - All 5 use email + Google Docs currently
   
   ⚠️ Gap: You haven't explored PULL yet
   
   Suggested Questions:
   - "What would make you excited to switch from email?"
   - "Imagine the perfect feedback tool - what does it do?"
   ```
   
5. Maya adjusts her interviews, asks more about desired outcomes
6. After 8 interviews, gets complete force profile:
   ```
   ICP: Freelance Designers (5-20 clients/year, $50-150K revenue)
   
   Top 3 PUSH items:
   1. "Feedback gets lost in email threads" (8/8 mentioned)
   2. "Clients send feedback at random times, feels chaotic" (7/8)
   3. "Hard to show progress to clients" (6/8)
   
   Top 3 PULL items:
   1. "One place to see all client feedback organized by project" (8/8)
   2. "Show clients we're listening and making progress" (7/8)
   3. "Professional appearance vs. email mess" (5/8)
   
   Top 3 ANXIETY items:
   1. "Will clients actually use it?" (7/8) ⚠️ MAJOR BLOCKER
   2. "Another tool to manage" (6/8)
   3. "What if it's complicated to set up?" (5/8)
   
   Top 2 HABIT items:
   1. "Email is free and everyone has it" (8/8)
   2. "Google Docs works fine for revisions" (6/8)
   
   Positioning Insights:
   - Lead with CLIENT value, not designer value ("Make your clients feel heard")
   - Address #1 anxiety: "Your clients don't need to create an account"
   - Differentiate from email: "Feedback organized by project, not buried in inbox"
   ```

7. Maya uses insights to:
   - Change product focus: Make client experience dead-simple (address #1 anxiety)
   - Add feature: Client-facing portal (no login required)
   - Adjust messaging: Lead with "your clients will love this" not "organize feedback"
   
8. Builds remaining 50% of MVP with validated direction

**Success Metrics:**
- Built product people actually want
- Clear positioning based on customer language
- Addressed #1 blocker (client adoption anxiety)

---

#### Use Case 3: Landing Page Messaging (Pre-Launch)
**Actor:** Technical Founder  
**Goal:** Launch with messaging that converts, based on customer psychology

**Scenario:**
Jordan built an AI code review tool for solo developers. Ready to launch but unsure about messaging.

**Flow:**
1. Did 10 customer discovery interviews (already has force profile)
2. Drafts landing page copy
3. Inputs URL + selects force profile "Solo Developers - Code Quality"
4. Runs synthetic test with 100 agents

**Results:**
```
Conversion Rate: 23% (23/100 agents signed up)

Bounce Analysis:
├─ 31% bounced at headline: "Didn't recognize my problem"  
├─ 28% bounced at features: "Too many features, got overwhelmed"
├─ 18% bounced at pricing: "No justification for cost vs. free alternatives"

Force Coverage:
├─ PUSH addressed: 35% ⚠️ (weak - headline doesn't land)
├─ PULL created: 60% (decent - features are attractive)
├─ ANXIETY reduced: 20% ⚠️ (major gap - no trust signals)
└─ HABIT overcome: 15% ⚠️ (major gap - didn't address free alternatives)

Primary Blocker: ANXIETY (trust + cost vs. free tools)

Top 3 Recommendations:

1. [HIGH IMPACT] Headline doesn't match PUSH
   Current: "Better Code Quality with AI"
   Problem: Too generic, doesn't resonate with struggling moment
   
   From interviews: 7/10 said "I ship bugs because I code alone and have no one to review"
   
   Suggested: "Stop shipping bugs. Get AI code reviews before you commit."
   Impact: +25% PUSH coverage
   
2. [HIGH IMPACT] Missing anxiety reduction
   Current: No social proof, testimonials, or trust signals
   Problem: Solo devs worried about "another AI tool that hallucinates"
   
   From interviews: 6/10 mentioned "tried AI code tools, they gave wrong suggestions"
   
   Suggested: Add section "Why solo devs trust us" with:
   - "Shows you the code change before applying"
   - "Explain why in plain English"
   - Developer testimonials
   Impact: +40% ANXIETY reduction
   
3. [MEDIUM IMPACT] Doesn't overcome HABIT (free alternatives)
   Current: No comparison to current solution (just manual testing)
   Problem: Agents think "Why pay for this when I can test myself?"
   
   From interviews: All 10 currently rely on manual testing + hoping
   
   Suggested: Add "vs. Manual Testing" comparison
   - Time: "5 min AI review vs. 30 min manual testing"
   - Coverage: "Catches 10x more issues than manual testing"
   - Cost: "Free for solo devs, $29 for teams"
   Impact: +30% HABIT override
```

5. Jordan implements all 3 recommendations
6. Re-tests: Conversion rate increases to 47% (2x improvement)
7. Launches with validated messaging
8. Actual launch results: 41% trial signup rate (close to prediction!)

**Success Metrics:**
- Launched with 2x better messaging
- Avoided guessing game
- High confidence in positioning
- Strong correlation between synthetic and real results

---

#### Use Case 4: Pivot Decision
**Actor:** Indie Hacker  
**Goal:** Decide whether to pivot product based on early traction data

**Scenario:**
After 2 months, product has 100 users but only 5 paying customers.

**Flow:**
1. Interviews 10 users (5 paying, 5 free)
2. Discovers pattern:
   ```
   Paying Customers:
   - All agency owners (10-50 person teams)
   - Strong PUSH: "Client reporting takes our team 2 days/month"
   - Willing to pay: ROI is clear (saves 2 days = $3K+ value)
   
   Free Users:
   - All freelancers (solo or 1-2 person teams)
   - Weak PUSH: "Would be nice to have" not "need to have"
   - Won't pay: "I can do this myself in a few hours"
   ```
   
3. Force profile comparison:
   ```
   AGENCIES (paying):          FREELANCERS (not paying):
   PUSH: 85/100 (crisis)       PUSH: 40/100 (minor annoyance)
   PULL: 70/100                PULL: 50/100
   ANXIETY: 40/100             ANXIETY: 60/100 (cost-sensitive)
   HABIT: 50/100               HABIT: 80/100 (used to DIY)
   
   Switch likelihood:          Switch likelihood:
   (85+70) > (40+50) ✅        (40+50) < (60+80) ❌
   WILL PAY                    WON'T PAY
   ```
   
4. Insight: Built for freelancers, but agencies are the real customers
5. Pivot Decision:
   - ✅ Pivot to agency focus
   - ✅ Increase pricing from $29 → $99 (matches value)
   - ✅ Add team features
   - ✅ Change messaging from "save time" to "save money"
   
6. Tests new positioning with synthetic agents (agency ICP)
7. Conversion rate prediction: 38% → 62%
8. Relaunches with agency focus, revenue jumps from $145/mo to $2,400/mo in 60 days

**Success Metrics:**
- Identified wrong ICP before failure
- Pivoted to right customer based on data
- 16x revenue increase
- Validated direction before rebuilding

---

## Product Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     USER INTERFACE LAYER                     │
├─────────────────────────────────────────────────────────────┤
│  PM Discovery Interface  │  Synthetic Testing Interface     │
│  - Interview canvas      │  - Landing page analyzer         │
│  - Four Forces diagram   │  - Agent simulator               │
│  - Timeline view         │  - Results dashboard             │
│  - AI suggestions        │  - Recommendations               │
└─────────────────────────────────────────────────────────────┘
                          ↕
┌─────────────────────────────────────────────────────────────┐
│                    APPLICATION LAYER                         │
├─────────────────────────────────────────────────────────────┤
│  Interview Orchestration  │  Agent Orchestration            │
│  - Real-time analysis     │  - Agent generation             │
│  - Force extraction       │  - Page crawling                │
│  - Question generation    │  - Psychological evaluation     │
│  - Struggling moment      │  - Decision simulation          │
│    detection              │  - Report generation            │
└─────────────────────────────────────────────────────────────┘
                          ↕
┌─────────────────────────────────────────────────────────────┐
│                      AI/LLM LAYER                            │
├─────────────────────────────────────────────────────────────┤
│  Claude/GPT-4 API         │  Specialized Models             │
│  - Interview analysis     │  - Emotion detection            │
│  - Force categorization   │  - Stage classification         │
│  - Question generation    │  - Agent reasoning              │
│  - Insight synthesis      │  - Pattern matching             │
└─────────────────────────────────────────────────────────────┘
                          ↕
┌─────────────────────────────────────────────────────────────┐
│                      DATA LAYER                              │
├─────────────────────────────────────────────────────────────┤
│  PostgreSQL (Relational)  │  Vector DB (Embeddings)         │
│  - Interviews             │  - Interview embeddings         │
│  - Force profiles         │  - Pattern matching             │
│  - Users/Orgs             │  - Semantic search              │
│  - Agent tests            │  - Similar profiles             │
│                           │                                  │
│  Knowledge Base           │  Analytics                      │
│  - JTBD question library  │  - Usage metrics                │
│  - Force profile patterns │  - Accuracy tracking            │
│  - Industry benchmarks    │  - A/B test results             │
└─────────────────────────────────────────────────────────────┘
```

### Key Components

#### 1. Interview Analysis Engine
**Purpose:** Real-time extraction of Four Forces from interview notes

**Inputs:**
- Interview transcript/notes (text)
- Context (ICP, product category)

**Processing:**
- Sentiment analysis to detect emotional language
- Entity extraction for alternatives, competitors, current solutions
- Force classification (which force does each statement support?)
- Intensity scoring (how strong is each force?)
- Struggling moment detection
- Stage classification (which psychological stage is the user in?)

**Outputs:**
- Structured force data with quotes and intensities
- Struggling moments (events + emotions + consequences)
- Alternative solutions timeline
- Psychological stage assessment
- Gap analysis (what's missing from the interview?)

#### 2. Question Generation Engine
**Purpose:** Contextual question suggestions based on interview state

**Inputs:**
- Current force balance
- Missing information (gaps)
- Interview duration
- Psychological stage

**Processing:**
- Identifies weakest force (lowest coverage)
- Pulls from JTBD question library
- Customizes questions to context
- Prioritizes by impact

**Outputs:**
- Ranked list of suggested questions
- Reasoning for each suggestion
- Probes for deepening existing insights

#### 3. Force Profile Builder
**Purpose:** Aggregate insights across multiple interviews into ICP profiles

**Inputs:**
- Multiple interview records for same ICP
- Demographic/firmographic filters

**Processing:**
- Pattern matching across interviews
- Statistical aggregation (average force strengths)
- Common themes extraction
- Outlier detection

**Outputs:**
- ICP Force Profile:
  - Average PUSH/PULL/ANXIETY/HABIT strengths
  - Common triggers and struggling moments
  - Typical alternatives considered
  - Key anxieties and habits
  - Quote library for that ICP

#### 4. Synthetic Agent Generator
**Purpose:** Create AI agents that embody specific ICP force profiles

**Inputs:**
- Force profile (from discovery or manual input)
- Psychological stage
- Job context (what they're trying to accomplish)

**Processing:**
- Agent persona generation (backstory, current situation, goals)
- Force internalization (agent "believes" these pushes/pulls/anxieties/habits)
- Decision framework setup (how agent will evaluate solutions)

**Outputs:**
- Synthetic agent with:
  - Psychological state
  - Force profile
  - Decision criteria
  - Evaluation framework

#### 5. Landing Page Analyzer
**Purpose:** Evaluate web pages through psychological lens

**Inputs:**
- URL to test
- Synthetic agents (with force profiles)
- Evaluation criteria

**Processing:**
- Page crawling and section identification
- For each section, each agent evaluates:
  - Does this address my PUSH?
  - Does this create PULL?
  - Does this reduce my ANXIETY?
  - Does this overcome my HABIT?
- Agent makes conversion decision based on force balance
- Aggregates results across all agents

**Outputs:**
- Conversion rate (% of agents that would convert)
- Bounce analysis (where did they drop off and why?)
- Force coverage scores (how well each force was addressed)
- Section-by-section analysis
- Specific recommendations for improvement

#### 6. Pattern Learning System
**Purpose:** Improve over time by learning from real outcomes

**Inputs:**
- Synthetic test predictions
- Actual A/B test results
- User feedback on recommendations

**Processing:**
- Accuracy tracking (did synthetic results match real results?)
- Model fine-tuning based on errors
- Pattern identification (what makes forces strong in different industries?)

**Outputs:**
- Improved force models
- Better agent behaviors
- Industry-specific insights
- Confidence scores on predictions

---

## Feature Requirements: Idea Validator (HIGHEST PRIORITY)

### Why This Comes First
Vibe coders need to validate BEFORE building. This is the entry point for 80% of users. If they validate and decide NOT to build, they saved weeks. If they validate and decide TO build, they continue to PM Discovery features.

### MVP Features (Phase 1)

#### F0.1: One-Sentence Idea Input
**User Story:** As a vibe coder, I want to describe my idea in plain English so I can quickly get validation guidance.

**Acceptance Criteria:**
- [ ] Simple text input: "What's your product idea?"
- [ ] Examples shown for inspiration (real validated vs. rejected ideas)
- [ ] Character limit: 500 chars (forces clarity)
- [ ] Natural language processing to extract key elements
- [ ] Option to add context: Who is it for? What problem does it solve?

**Technical Notes:**
- LLM extracts: Target user, problem, solution, suspected job
- Store for later reference
- No complex forms - keep it dead simple

**UI Flow:**
```
┌───────────────────────────────────────────┐
│  What's your product idea?                │
│                                           │
│  [Chrome extension that automatically     │
│   summarizes long Slack threads]          │
│                                           │
│  💡 Examples:                             │
│  "AI code review for solo developers"     │
│  "Newsletter analytics for creators"      │
│                                           │
│            [Analyze Idea →]               │
└───────────────────────────────────────────┘
```

#### F0.2: Instant Force Hypothesis
**User Story:** As a vibe coder, I want to see an instant hypothesis about the Four Forces so I understand what to validate.

**Acceptance Criteria:**
- [ ] Generates hypothesis within 3 seconds
- [ ] Shows predicted strength for each force (with uncertainty)
- [ ] Explains reasoning in plain English
- [ ] Highlights biggest risks (which force is likely to block?)
- [ ] Shows confidence level (based on how common/well-understood the problem is)

**Technical Notes:**
- LLM prompt: "Analyze this product idea using Four Forces framework"
- Include examples from knowledge base of similar products
- Show confidence scores (high/medium/low based on data availability)

**Output Example:**
```
┌─────────────────────────────────────────────────────────────┐
│  Force Hypothesis for: "Slack thread summarizer"           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  PUSH (Problems with current state)                         │
│  Predicted: MEDIUM (40-60%)                                 │
│  Reasoning: Information overload in Slack is a known pain,  │
│  but not usually crisis-level. Most people just skim.       │
│  ⚠️ Risk: May be "nice to have" not "must have"             │
│                                                             │
│  PULL (Attraction to your solution)                         │
│  Predicted: MEDIUM (45-65%)                                 │
│  Reasoning: Time-saving tools are attractive, but          │
│  summarization may not be the outcome they want.            │
│  💡 Tip: Ask what they REALLY want to accomplish            │
│                                                             │
│  ANXIETY (Fears about switching)                            │
│  Predicted: HIGH (70-85%)                                   │
│  Reasoning: AI tools on work conversations = trust issues.  │
│  "What if it misses something important?"                   │
│  🚨 MAJOR RISK: This is likely your biggest blocker         │
│                                                             │
│  HABIT (Comfort with current approach)                      │
│  Predicted: VERY HIGH (80-95%)                              │
│  Reasoning: Skimming Slack is second nature. Free,          │
│  familiar, "good enough" for most people.                   │
│  🚨 MAJOR RISK: Very hard to overcome                       │
│                                                             │
│  Overall Assessment:                                        │
│  ⚠️ CAUTION RECOMMENDED                                     │
│                                                             │
│  Why: ANXIETY + HABIT are both high. Even if you build      │
│  this perfectly, switching behavior is unlikely.            │
│                                                             │
│  Recommendation:                                            │
│  Talk to 5 target users before building anything.          │
│  Specifically probe:                                        │
│  1. Have they tried to solve this before? (test PUSH)      │
│  2. What concerns would they have? (test ANXIETY)           │
│  3. Why not just keep skimming? (test HABIT)                │
│                                                             │
│  Confidence: Medium (based on similar products tested)      │
│                                                             │
│                [Generate Interview Guide →]                 │
└─────────────────────────────────────────────────────────────┘
```

#### F0.3: Interview Guide Generator
**User Story:** As a vibe coder, I want a custom interview guide so I know exactly what questions to ask.

**Acceptance Criteria:**
- [ ] Generates 5-7 key questions based on hypothesis
- [ ] Questions target the risky forces (highest uncertainty)
- [ ] Includes probing questions for each force
- [ ] Shows what to listen for (red flags, green flags)
- [ ] Provides script for reaching out to potential interviewees

**Technical Notes:**
- Pull from JTBD question library
- Customize based on product category and hypothesis
- Include both open-ended and specific probes

**Output:**
```
┌─────────────────────────────────────────────────────────────┐
│  Interview Guide: Slack Thread Summarizer                  │
│  Target: 5 interviews with PMs/team leads at 10-50 person   │
│          companies who use Slack daily                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Opening (Build rapport):                                   │
│  "I'm exploring ideas around team communication tools.      │
│   Could I ask you a few questions about how you use Slack?" │
│                                                             │
│  Questions:                                                 │
│                                                             │
│  1. PUSH (Test if pain is real):                            │
│     "Tell me about a recent time when you missed something  │
│      important in a Slack thread."                          │
│                                                             │
│     🎯 Listen for: Specific event, emotional language,       │
│        consequences                                         │
│     🚩 Red flag: "Honestly, it's not a big problem"         │
│     ✅ Green flag: "Oh man, last week I missed that we..."  │
│                                                             │
│  2. HABIT (Test what they do now):                          │
│     "Walk me through how you currently stay on top of       │
│      Slack discussions."                                    │
│                                                             │
│     🎯 Listen for: Is current approach "good enough"?        │
│     🚩 Red flag: "I just skim, it's fine"                   │
│     ✅ Green flag: "I waste so much time catching up"       │
│                                                             │
│  3. PULL (Test what they really want):                      │
│     "Imagine you had a magic wand - what would the perfect  │
│      solution look like?"                                   │
│                                                             │
│     🎯 Listen for: Is summarization what they want, or       │
│        something else?                                      │
│     💡 Insight: May reveal different job to be done          │
│                                                             │
│  4. ANXIETY (Test fears):                                   │
│     "What concerns would you have about an AI tool          │
│      summarizing your team's Slack conversations?"          │
│                                                             │
│     🎯 Listen for: Trust issues, missing context concerns    │
│     🚨 Major blocker if: "I'd never trust AI with work      │
│        conversations"                                       │
│                                                             │
│  5. ALTERNATIVES (Test what they've tried):                 │
│     "Have you tried any tools or approaches to help with    │
│      this? What happened?"                                  │
│                                                             │
│     🎯 Listen for: Past failures, what didn't work, why      │
│     💎 Gold: Stories of trying and abandoning solutions      │
│                                                             │
│  Where to find interviewees:                                │
│  • LinkedIn: Search "Product Manager" + "50-500 employees"  │
│  • Reddit: r/ProductManagement, r/Slack                     │
│  • Slack communities: ProductSchool, MindTheProduct         │
│  • Twitter: #ProductManagement, ask for 15min calls         │
│                                                             │
│  Outreach template:                                         │
│  "Hi [Name], I'm researching how teams handle Slack         │
│   communication. Would you have 15 minutes for a quick      │
│   call? I'm not selling anything, just learning. Happy to   │
│   send you a $25 gift card for your time."                  │
│                                                             │
│          [Copy to Clipboard] [Start Interviews →]           │
└─────────────────────────────────────────────────────────────┘
```

#### F0.4: Quick Interview Mode
**User Story:** As a vibe coder, I want to log quick interviews on my phone so I can capture insights while they're fresh.

**Acceptance Criteria:**
- [ ] Mobile-friendly interview interface
- [ ] Voice-to-text option (optional)
- [ ] Simple note-taking with force tagging
- [ ] Real-time struggling moment detection
- [ ] Progress tracker (X/5 interviews completed)
- [ ] Can complete an interview entry in < 5 minutes

**Technical Notes:**
- Simplified version of full PM Discovery interface
- Focus on capturing key quotes and struggling moments
- Auto-categorize forces in background

#### F0.5: Build vs. Don't Build Decision
**User Story:** As a vibe coder, I want a clear signal after 3-5 interviews so I know whether to build or pivot.

**Acceptance Criteria:**
- [ ] After 3-5 interviews, generates recommendation
- [ ] Clear verdict: 🟢 Build / 🟡 Pivot / 🔴 Don't Build
- [ ] Shows force balance from actual interviews
- [ ] Compares hypothesis to reality (what changed?)
- [ ] If "Don't Build": Explains why + suggests alternatives
- [ ] If "Build": Provides positioning guide and ICP profile
- [ ] Confidence score based on interview quality

**Technical Notes:**
- Calculate switching likelihood score
- Compare to threshold: >70 = green, 40-70 = yellow, <40 = red
- Generate reasoning from force analysis

**Output Example:**
```
┌─────────────────────────────────────────────────────────────┐
│  Decision: Slack Thread Summarizer                         │
│  Based on 5 interviews with target users                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              🔴 DON'T BUILD (RECOMMEND PIVOT)               │
│                                                             │
│  Switching Likelihood: 28/100                               │
│  Confidence: High (clear signal across all interviews)      │
│                                                             │
│  Actual Force Balance:                                      │
│  ├─ PUSH: 35/100 (hypothesis was 50)                        │
│  │   Reality: Mild annoyance, not crisis                    │
│  │   Quote: "It's annoying but I'm used to it"              │
│  │                                                          │
│  ├─ PULL: 30/100 (hypothesis was 55)                        │
│  │   Reality: "Nice to have" not "need to have"             │
│  │   Quote: "Would save a few minutes I guess"              │
│  │                                                          │
│  ├─ ANXIETY: 85/100 (hypothesis was 75) ⚠️                  │
│  │   Reality: WORSE than predicted                          │
│  │   Quote: "I'd never trust AI with work conversations"    │
│  │   Quote: "What if it misses critical context?"           │
│  │                                                          │
│  └─ HABIT: 90/100 (hypothesis was 85) ⚠️                    │
│      Reality: Extremely entrenched                          │
│      Quote: "I've been skimming for 5 years, it's fine"     │
│                                                             │
│  Why Don't Build:                                           │
│  1. No struggling moments detected                          │
│     - Users said "annoying" not "crisis"                    │
│     - No specific events where it caused real problems      │
│                                                             │
│  2. ANXIETY is a dealbreaker                                │
│     - 4/5 don't trust AI on work conversations              │
│     - "Missing context" fear is rational and hard to solve  │
│                                                             │
│  3. HABIT is too strong                                     │
│     - Current approach is "good enough"                     │
│     - Free, familiar, works                                 │
│                                                             │
│  Time saved: ~2 weeks of building wrong product             │
│  Money saved: Opportunity cost of not building right thing  │
│                                                             │
│  💡 Pivot Opportunity Detected:                             │
│                                                             │
│  3/5 interviewees mentioned a DIFFERENT pain:               │
│  "I miss important action items buried in threads"          │
│                                                             │
│  This has stronger signals:                                 │
│  ├─ PUSH: "Lost a customer because I missed their request"  │
│  ├─ Emotional language: "embarrassing," "unprofessional"    │
│  └─ Struggling moment: Specific event with consequences     │
│                                                             │
│  Suggested pivot:                                           │
│  "Slack action item tracker" - automatically finds and      │
│  tracks todos/requests in threads                           │
│                                                             │
│  This addresses:                                            │
│  - Higher PUSH (missing action items causes real problems)  │
│  - Lower ANXIETY (less invasive, more specific)             │
│  - Different HABIT (they're NOT tracking action items now)  │
│                                                             │
│     [Validate Pivot Idea] [Try Different Idea] [Export]    │
└─────────────────────────────────────────────────────────────┘
```

#### F0.6: Validation Report (Shareable)
**User Story:** As a vibe coder, I want to share validation results with cofounders/investors so they understand the decision.

**Acceptance Criteria:**
- [ ] Professional PDF export
- [ ] Shows: Idea, hypothesis, interviews, force analysis, decision, reasoning
- [ ] Includes key quotes and struggling moments
- [ ] Can share via link (public or private)
- [ ] Option to post to Twitter/LinkedIn with summary

**Technical Notes:**
- Generate PDF with charts and force diagrams
- Create shareable link with unique URL
- Social media templates for common platforms

### Phase 2 Features (Post-MVP)

#### F0.7: Competitive Idea Analysis
- Input your idea + competitor URLs
- Analyze what competitors say vs. don't say
- Find positioning gaps
- Anxiety analysis (what worries do competitors create?)

#### F0.8: Idea Success Predictor
- Based on force profile, predict probability of success
- Compare to database of validated/failed ideas
- Show similar products that worked/failed
- Reasoning: "Ideas with this force pattern succeed 65% of the time"

#### F0.9: Batch Idea Testing
- Input 3-5 ideas at once
- Get ranked recommendations
- Compare force profiles side-by-side
- "Best idea to build first" recommendation

#### F0.10: Community Idea Library
- Browse validated/rejected ideas from community
- See force profiles for each
- Learn from others' validation journeys
- Option to make your validation public (with permission)

---

## MCP Server Integration (Killer Feature)

### Overview: Customer Context for AI Coding Agents

The MCP (Model Context Protocol) server creates a **direct neural pathway between validated customer insights and AI coding agents**. When developers build with Claude Code, Cursor, or other AI coding tools, they can query our MCP server to access validated customer psychology, positioning recommendations, and force profiles - all in real-time while coding.

**The Vision:** Your AI coding agent knows your customers as well as you do.

### The Problem This Solves

**Traditional Workflow:**
```
1. Validate idea in our tool
2. Read force profile and insights
3. Try to remember key points
4. Tell Claude Code what to build
5. Claude builds without customer context
6. Hope you remembered to mention anxieties, customer language, etc.
7. Result: Generic output that doesn't match validated insights
```

**With MCP Integration:**
```
1. Validate idea in our tool (force profile stored)
2. Install MCP server (one command: npx validated-context init)
3. Build with Claude Code
4. Claude automatically queries MCP for customer insights
5. Every feature, every line of copy uses validated psychology
6. Result: Product that literally can't deviate from validated truth
```

### Core MCP Capabilities

#### 1. Validated Insights Endpoint
```typescript
mcp.getValidation(projectId) → {
  idea: "AI code review for solo developers",
  icp: "Solo developers, 2-10 years experience, ship without team",
  
  forces: {
    push: {
      strength: 85,
      topItems: ["Ship bugs because code alone", "Embarrassing production bugs"],
      strugglingMoments: [{
        event: "Shipped bug to production, client complained",
        emotion: "Embarrassment",
        quote: "I felt like an amateur"
      }]
    },
    
    anxiety: {
      strength: 75,
      topItems: ["AI tools give wrong suggestions", "Another subscription"]
    },
    
    habit: {
      strength: 80,
      topItems: ["Just ship and fix bugs when reported"]
    }
  },
  
  positioning: {
    headline: "Stop Shipping Embarrassing Bugs",
    subheadline: "Get AI code reviews before you commit",
    anxietyReduction: ["Shows you changes before applying", "Free for solo devs"],
    habitOvercome: ["5min AI review vs 30min manual testing"]
  },
  
  customerLanguage: {
    painWords: ["bugs", "embarrassing", "amateur", "alone"],
    desiredOutcomes: ["confident", "professional", "caught early"],
    avoidWords: ["complex", "slow", "expensive"]
  }
}
```

#### 2. Auto-Generated Copy Endpoint
```typescript
mcp.generateCopy(projectId, section: 'headline' | 'features' | 'pricing') → {
  copy: "Stop shipping embarrassing bugs. Get AI code reviews before you commit.",
  reasoning: "Uses struggling moment emotional language from Interview #3",
  addresses: ["PUSH: embarrassment", "ANXIETY: trust through review-before-apply"],
  forcesCovered: { PUSH: 85%, ANXIETY: 60% }
}
```

#### 3. Copy Testing Endpoint
```typescript
mcp.testCopy(projectId, html) → {
  conversionPrediction: 0.41,
  forcesCovered: { PUSH: 85%, PULL: 60%, ANXIETY: 40%, HABIT: 30% },
  bounceAnalysis: {
    "headline": { bounceRate: 0.15, reason: "Strong PUSH match" },
    "features": { bounceRate: 0.28, reason: "Triggers complexity anxiety" }
  },
  recommendations: [
    {
      priority: "high",
      issue: "Missing anxiety reduction in features section",
      suggestion: "Add 'You approve every change' trust signal",
      expectedImpact: "+15% conversion"
    }
  ]
}
```

#### 4. Feature Validation Endpoint
```typescript
mcp.validateFeature(projectId, "Dashboard with analytics") → {
  alignment: 0.45, // LOW - don't build
  addresses: ["PULL: visibility into code quality"],
  risks: [
    "High ANXIETY: complexity (8/10 interviews mentioned fear of complicated tools)",
    "Doesn't address main PUSH: shipping bugs"
  ],
  recommendation: "DON'T BUILD YET. Primary need is 'catch bugs before commit,' not analytics.",
  alternative: "Simple 'bugs caught' count instead of full dashboard"
}
```

#### 5. Real-Time Feedback Loop Endpoint
```typescript
mcp.updateWithRealData(projectId, {
  actualConversion: 0.38,
  bouncePoints: { pricing: 0.32 }
}) → {
  accuracy: 0.92, // predicted 0.41, actual 0.38
  learnings: "Prediction was accurate. Cost ANXIETY slightly higher than interviews suggested.",
  updatedForces: { anxiety: { strength: 82 } }, // adjusted
  newRecommendations: ["Test free tier messaging more prominently"]
}
```

### Real-World Developer Workflows

#### Workflow 1: Building Landing Page

**Without MCP:**
```
Developer: "Claude, build me a landing page"

Claude Code: "Sure! Here's a generic template..."

[Generates]: 
<h1>Modern Code Review Tool</h1>
<p>Improve your code quality with AI-powered reviews</p>

[Result]: Generic, doesn't match customer psychology, 15% conversion
```

**With MCP:**
```
Developer: "Claude, build me a landing page for project abc123"

Claude Code: 
  → Queries MCP: getValidation(abc123)
  → Gets: force profile, customer language, positioning
  → Analyzes: PUSH = "embarrassing bugs", ANXIETY = "trust issues with AI"

[Generates]:
<h1>Stop Shipping Embarrassing Bugs</h1>
<p>Get AI code reviews before you commit. Built for solo developers.</p>

<div class="trust-signal">
  <h2>You're in Control</h2>
  <p>We show you the code change before applying it. No surprises.</p>
</div>

<div class="social-proof">
  <blockquote>"I felt like an amateur when I shipped that bug. Never again."</blockquote>
  <cite>— Solo developer using our tool</cite>
</div>

[Tests with MCP]: testCopy(abc123, generatedHTML)
[Result]: Predicted 41% conversion, validated with customer language
```

#### Workflow 2: Feature Prioritization

**Developer:** "Claude, should I build a dashboard or better git integration?"

**Claude Code:**
```
→ Queries MCP: validateFeature(abc123, "Dashboard")
  Returns: alignment: 0.45 (don't build)
  
→ Queries MCP: validateFeature(abc123, "Git hooks integration")
  Returns: alignment: 0.92 (build this!)
  Reasoning: "Addresses HABIT: works in existing workflow"

Response: "Based on customer validation, git hooks integration is the priority.
8/10 customers said 'I need it in my existing workflow, not another tool to remember.'

Dashboard triggers complexity anxiety and doesn't address the main pain.
Build git hooks first, dashboard later."
```

#### Workflow 3: Automated A/B Testing

**Setup in codebase:**
```typescript
// .github/workflows/optimize-landing-page.yml
name: Auto-optimize landing page
on:
  schedule:
    - cron: '0 0 * * *' # daily

jobs:
  optimize:
    runs-on: ubuntu-latest
    steps:
      - name: Check performance
        run: |
          ACTUAL=$(curl https://api.analytics.com/conversion)
          PREDICTED=$(curl http://mcp-server:3000/validation/abc123 | jq .conversionPrediction)
          
          if [ $(echo "$ACTUAL < $PREDICTED * 0.9" | bc) -eq 1 ]; then
            # Performance below prediction - generate variants
            curl -X POST http://mcp-server:3000/generate-variants \
              -d "projectId=abc123" \
              -d "currentPage=$(cat src/pages/index.tsx)"
            
            # Test variants with synthetic agents
            BEST_VARIANT=$(curl http://mcp-server:3000/test-variants/abc123)
            
            # Create PR with improvement
            gh pr create --title "Landing page optimization (+${IMPROVEMENT}%)" \
              --body "Auto-generated based on force analysis..."
          fi
```

**Result:** Landing page continuously self-optimizes based on validated psychology + real data.

#### Workflow 4: Documentation Generation

**Developer:** "Claude, write the README"

**Claude Code:**
```
→ Queries MCP: getCustomerLanguage(abc123)
→ Gets: painWords: ["bugs", "embarrassing"], avoidWords: ["complex", "slow"]

[Generates]:
# Stop Shipping Embarrassing Bugs

If you code alone, you know the feeling: You ship a feature, 
a user finds a bug, you feel like an amateur.

This tool is your automated code reviewer. It catches bugs 
before you commit, in 5 minutes instead of 30.

## Simple Setup
1. npm install code-reviewer
2. Run before commit
3. Fix bugs before shipping

No complex configuration. No slowing down your workflow.
Free for solo developers.

[Avoids]: "Complex", "slow", "enterprise-grade" (from avoidWords)
[Uses]: "embarrassing", "amateur", "alone" (from customer quotes)
```

### MCP Server Technical Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  DEVELOPER'S CODEBASE                                        │
├─────────────────────────────────────────────────────────────┤
│  • .clauderc (MCP config)                                   │
│  • projectId: abc123 (links to validation)                  │
│  • Claude Code / Cursor / AI coding agent                   │
└─────────────────────────────────────────────────────────────┘
                          ↕ (queries via MCP protocol)
┌─────────────────────────────────────────────────────────────┐
│  MCP SERVER (localhost:3000 or cloud)                       │
├─────────────────────────────────────────────────────────────┤
│  Core Endpoints:                                            │
│  • GET  /validation/:projectId                              │
│  • POST /generate-copy                                      │
│  • POST /test-copy                                          │
│  • POST /validate-feature                                   │
│  • POST /compare-variants                                   │
│  • POST /update-with-real-data                              │
│                                                             │
│  Real-time:                                                 │
│  • WebSocket for live updates                               │
│  • File watching for auto-testing                           │
│  • Analytics integration for feedback loop                  │
└─────────────────────────────────────────────────────────────┘
                          ↕
┌─────────────────────────────────────────────────────────────┐
│  VALIDATION PLATFORM (our main product)                     │
├─────────────────────────────────────────────────────────────┤
│  • Customer interviews stored                               │
│  • Force profiles calculated                                │
│  • Synthetic agents trained                                 │
│  • Positioning recommendations generated                    │
└─────────────────────────────────────────────────────────────┘
```

### Installation & Setup

#### Step 1: Validate Idea (Web Platform)
```
1. Go to app.validated.ai
2. Input idea: "AI code review for solo developers"
3. Follow AI-guided interview process
4. Complete 5 customer interviews
5. Get force profile + Build/Don't Build recommendation
6. Receive projectId: abc123
```

#### Step 2: Install MCP Server
```bash
# In your project directory
npx validated-context init

# Prompts:
> Enter your Validated.ai project ID: abc123
> Enter your API key: vld_xxx...
> Which coding agent do you use? Claude Code / Cursor / Other

# Creates:
# - .clauderc (MCP configuration)
# - .validated/config.json (local settings)
# - Starts MCP server on localhost:3000
```

#### Step 3: Build with Context
```
# Claude Code now has access to:
- Your validated force profile
- Customer language patterns
- Positioning recommendations
- Struggling moments
- Anxiety triggers to avoid

# Just code normally:
"Claude, build the landing page"
"Claude, should I add this feature?"
"Claude, write the pricing copy"

# Claude automatically uses validated insights
```

### MCP Server Implementation

```typescript
// mcp-server/index.ts
import { MCPServer } from '@modelcontextprotocol/sdk';
import { ValidatedAPI } from './api';

const server = new MCPServer({
  name: 'validated-product-context',
  version: '1.0.0'
});

// Core tool: Get validation data
server.registerTool({
  name: 'get_validation',
  description: 'Get validated customer insights for a project',
  parameters: {
    projectId: { type: 'string', required: true }
  },
  handler: async ({ projectId }) => {
    const api = new ValidatedAPI(process.env.API_KEY);
    const validation = await api.getValidation(projectId);
    
    return {
      idea: validation.idea,
      icp: validation.icp,
      
      forces: {
        push: {
          strength: validation.forces.push.strength,
          topItems: validation.forces.push.items.slice(0, 3).map(i => i.text),
          strugglingMoments: validation.strugglingMoments.map(m => ({
            event: m.event,
            emotion: m.emotion,
            quote: m.quote
          }))
        },
        pull: /* similar */,
        anxiety: /* similar */,
        habit: /* similar */
      },
      
      positioning: {
        headline: generateHeadline(validation),
        subheadline: generateSubheadline(validation),
        valueProps: extractValueProps(validation),
        anxietyReduction: extractAnxietyReduction(validation)
      },
      
      customerLanguage: {
        painWords: extractPainWords(validation),
        desiredOutcomes: extractOutcomes(validation),
        avoidWords: extractAvoidWords(validation)
      }
    };
  }
});

// Tool: Generate copy
server.registerTool({
  name: 'generate_copy',
  description: 'Generate marketing copy based on validated insights',
  parameters: {
    projectId: { type: 'string', required: true },
    section: { 
      type: 'string', 
      enum: ['headline', 'subheadline', 'features', 'pricing', 'cta'],
      required: true
    }
  },
  handler: async ({ projectId, section }) => {
    const api = new ValidatedAPI(process.env.API_KEY);
    const validation = await api.getValidation(projectId);
    
    // Use Claude to generate copy
    const claude = new Anthropic();
    const response = await claude.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 500,
      messages: [{
        role: 'user',
        content: buildCopyPrompt(validation, section)
      }]
    });
    
    const copy = response.content[0].text;
    
    // Analyze force coverage
    const coverage = await analyzeForceCoverage(copy, validation);
    
    return {
      copy,
      reasoning: extractReasoning(response),
      forcesCovered: coverage,
      customerLanguageUsed: extractLanguageUsed(copy, validation)
    };
  }
});

// Tool: Test copy
server.registerTool({
  name: 'test_copy',
  description: 'Test landing page copy with synthetic agents',
  parameters: {
    projectId: { type: 'string', required: true },
    html: { type: 'string', required: true }
  },
  handler: async ({ projectId, html }) => {
    const api = new ValidatedAPI(process.env.API_KEY);
    const validation = await api.getValidation(projectId);
    
    // Generate 100 synthetic agents from force profile
    const agents = await generateSyntheticAgents(validation.forces, 100);
    
    // Test with each agent
    const results = await Promise.all(
      agents.map(async (agent) => {
        return await agent.evaluatePage(html, validation);
      })
    );
    
    const converted = results.filter(r => r.decision === 'convert').length;
    const conversionRate = converted / results.length;
    
    // Analyze where they bounced
    const bounces = results
      .filter(r => r.decision === 'bounce')
      .reduce((acc, r) => {
        acc[r.bouncePoint] = (acc[r.bouncePoint] || 0) + 1;
        return acc;
      }, {});
    
    return {
      conversionPrediction: conversionRate,
      agentsTested: results.length,
      agentsConverted: converted,
      
      forcesCovered: {
        push: calculateForceCoverage(results, 'push'),
        pull: calculateForceCoverage(results, 'pull'),
        anxiety: calculateForceCoverage(results, 'anxiety'),
        habit: calculateForceCoverage(results, 'habit')
      },
      
      bounceAnalysis: Object.entries(bounces).map(([point, count]) => ({
        section: point,
        bounceRate: count / results.length,
        reason: analyzeBounceReason(results, point)
      })),
      
      recommendations: generateRecommendations(results, validation)
    };
  }
});

// Tool: Validate feature
server.registerTool({
  name: 'validate_feature',
  description: 'Check if a feature aligns with validated customer needs',
  parameters: {
    projectId: { type: 'string', required: true },
    featureDescription: { type: 'string', required: true }
  },
  handler: async ({ projectId, featureDescription }) => {
    const api = new ValidatedAPI(process.env.API_KEY);
    const validation = await api.getValidation(projectId);
    
    // Use Claude to analyze alignment
    const claude = new Anthropic();
    const analysis = await claude.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      messages: [{
        role: 'user',
        content: buildFeatureValidationPrompt(featureDescription, validation)
      }]
    });
    
    const result = parseFeatureAnalysis(analysis.content[0].text);
    
    return {
      alignment: result.alignmentScore, // 0-1
      addresses: result.forcesAddressed,
      risks: result.risks,
      recommendation: result.recommendation,
      alternative: result.alternative || null,
      reasoning: result.reasoning
    };
  }
});

server.listen(3000);
console.log('MCP server running on localhost:3000');
```

### Developer Experience

#### .clauderc Configuration
```json
{
  "mcpServers": {
    "validated": {
      "command": "npx",
      "args": ["validated-context", "serve"],
      "env": {
        "PROJECT_ID": "abc123",
        "API_KEY": "${VALIDATED_API_KEY}"
      }
    }
  }
}
```

#### Example Claude Code Session

```
Developer: "Claude, I need to build the landing page for my validated product"

Claude Code: 
[Automatically queries MCP: get_validation(abc123)]

I can see you've validated this idea with 10 customer interviews. Let me build 
the landing page using your validated insights:

Main Pain Point (PUSH): "Embarrassing bugs in production"
Primary Anxiety: "Trust in AI tools" 
Key Customer Quote: "I felt like an amateur when I shipped that bug"

I'll create a landing page that:
1. Leads with the struggling moment ("Stop shipping embarrassing bugs")
2. Addresses the trust anxiety (show changes before applying)
3. Uses customer language ("amateur", "alone")
4. Avoids complexity words that triggered anxiety in interviews

[Generates landing page]

I've also tested this with 100 synthetic agents based on your force profile:
- Predicted conversion: 41%
- Force coverage: PUSH 85%, PULL 60%, ANXIETY 45%, HABIT 30%

⚠️ Recommendation: Add more anxiety reduction in the features section.
Would you like me to add trust signals?
```

---

## Feature Requirements: MCP Server (Game-Changing Integration)

### Why MCP Features Are Critical

MCP integration transforms us from a "nice to have validation tool" to an **essential part of the AI coding workflow**. This is our moat - nobody else is connecting validated customer psychology directly to AI coding agents.

### MVP Features (Phase 1)

#### F3.1: MCP Server Core
**User Story:** As a developer, I want to install an MCP server so Claude Code can access my validated insights while I build.

**Acceptance Criteria:**
- [ ] NPX installable: `npx validated-context init`
- [ ] One-command setup creates .clauderc configuration
- [ ] Prompts for project ID and API key
- [ ] Starts local MCP server on port 3000
- [ ] Auto-detects coding agent (Claude Code, Cursor, other)
- [ ] Validates connection to Validated.ai API
- [ ] Shows setup success message with next steps

**Technical Notes:**
- Node.js package published to NPM
- Uses Model Context Protocol SDK
- Stores config in .validated/config.json
- Environment variables for sensitive data
- Health check endpoint for debugging

**Setup Flow:**
```bash
$ npx validated-context init

Welcome to Validated Context!

? Enter your project ID: abc123
? Enter your API key: vld_... ****
? Which coding agent? Claude Code

✓ Connected to Validated.ai
✓ Retrieved force profile (10 interviews)
✓ Created .clauderc configuration
✓ Started MCP server on localhost:3000

Next steps:
1. Open your project in Claude Code
2. Ask Claude to build using your validated insights
3. Claude will automatically use customer context

Try: "Claude, build my landing page using validated insights"
```

#### F3.2: Get Validation Endpoint
**User Story:** As Claude Code, I want to retrieve validated customer insights so I can build products that match customer psychology.

**Acceptance Criteria:**
- [ ] Endpoint: `get_validation(projectId)`
- [ ] Returns: idea, ICP, forces, positioning, customer language
- [ ] Includes top 3 items per force
- [ ] Includes struggling moments with quotes
- [ ] Includes anxiety triggers to avoid
- [ ] Includes customer language patterns (pain words, avoid words)
- [ ] Response time < 500ms
- [ ] Cached for 1 hour (updated when new interviews added)

**Response Schema:**
```typescript
{
  idea: string;
  icp: string;
  validatedOn: Date;
  interviewCount: number;
  
  forces: {
    push: {
      strength: number; // 0-100
      topItems: string[]; // top 3
      strugglingMoments: {
        event: string;
        emotion: string;
        quote: string;
      }[];
    };
    // ... pull, anxiety, habit
  };
  
  positioning: {
    headline: string;
    subheadline: string;
    valueProps: string[];
    anxietyReduction: string[];
    habitOvercome: string[];
  };
  
  customerLanguage: {
    painWords: string[];
    desiredOutcomes: string[];
    avoidWords: string[];
    commonPhrases: string[];
  };
}
```

#### F3.3: Generate Copy Endpoint
**User Story:** As Claude Code, I want to generate marketing copy based on validated insights so every word matches customer psychology.

**Acceptance Criteria:**
- [ ] Endpoint: `generate_copy(projectId, section)`
- [ ] Sections: headline, subheadline, features, pricing, cta, about
- [ ] Uses Claude API to generate copy
- [ ] Prompt includes force profile, customer quotes, language patterns
- [ ] Returns: copy, reasoning, forces addressed, language used
- [ ] Copy is tested automatically with `test_copy` before returning
- [ ] Returns force coverage scores
- [ ] Iterates if coverage is < 60% on primary forces

**Input:**
```typescript
{
  projectId: "abc123",
  section: "headline"
}
```

**Output:**
```typescript
{
  copy: "Stop Shipping Embarrassing Bugs",
  reasoning: "Uses struggling moment emotional language from Interview #3. Addresses primary PUSH (embarrassment) and includes pain word 'bugs' from customer language analysis.",
  forcesCovered: {
    push: 0.85,
    pull: 0.20,
    anxiety: 0.10,
    habit: 0.05
  },
  customerLanguageUsed: ["embarrassing", "bugs", "shipping"],
  iteration: 1 // number of iterations to reach quality threshold
}
```

#### F3.4: Test Copy Endpoint
**User Story:** As Claude Code, I want to test landing page copy with synthetic agents so I know it will convert before deploying.

**Acceptance Criteria:**
- [ ] Endpoint: `test_copy(projectId, html)`
- [ ] Generates 100 synthetic agents from force profile
- [ ] Each agent evaluates page section by section
- [ ] Returns conversion prediction (0-1)
- [ ] Returns force coverage scores
- [ ] Returns bounce analysis (where agents bounced and why)
- [ ] Returns 3-5 prioritized recommendations
- [ ] Completes in < 60 seconds
- [ ] Caches results for same HTML (content hash)

**Output:**
```typescript
{
  conversionPrediction: 0.41,
  confidence: 0.85, // based on interview count
  agentsTested: 100,
  
  forcesCovered: {
    push: 0.85,
    pull: 0.60,
    anxiety: 0.40,
    habit: 0.30
  },
  
  bounceAnalysis: [
    {
      section: "headline",
      bounceRate: 0.15,
      reason: "Strong PUSH match, recognized problem"
    },
    {
      section: "features",
      bounceRate: 0.28,
      reason: "Triggered complexity anxiety, too many features listed"
    }
  ],
  
  recommendations: [
    {
      priority: "high",
      issue: "Missing anxiety reduction in hero section",
      suggestion: "Add 'You're in control' trust signal above fold",
      expectedImpact: "+15%",
      reasoning: "75% anxiety strength, but only 40% addressed"
    }
  ]
}
```

#### F3.5: Validate Feature Endpoint
**User Story:** As Claude Code, I want to check if a feature aligns with validated needs before building it.

**Acceptance Criteria:**
- [ ] Endpoint: `validate_feature(projectId, featureDescription)`
- [ ] Uses Claude API to analyze feature against force profile
- [ ] Returns alignment score (0-1)
- [ ] Returns which forces it addresses
- [ ] Returns risks (triggers anxiety, doesn't match needs)
- [ ] Returns recommendation: build / don't build / modify
- [ ] Suggests alternative if alignment is low
- [ ] Includes reasoning from customer interviews

**Example:**
```typescript
Input: validateFeature("abc123", "Dashboard with analytics")

Output: {
  alignment: 0.45, // LOW
  addresses: ["PULL: visibility into code quality"],
  risks: [
    "High ANXIETY: complexity (8/10 interviews mentioned fear of complicated tools)",
    "Doesn't address main PUSH: shipping bugs"
  ],
  recommendation: "DON'T BUILD YET",
  reasoning: "Primary customer need is 'catch bugs before commit,' not analytics. This feature may trigger complexity anxiety which is already high (75% strength).",
  alternative: "Simple 'bugs caught' count instead of full dashboard",
  buildAfter: ["Core bug detection", "Git hooks integration"]
}
```

### Phase 2 Features (Post-MVP)

#### F3.6: Real-Time Sync
- WebSocket connection for live updates
- When new interview added, MCP server notifies
- Force profile updates automatically
- Developer gets notification in editor

#### F3.7: File Watching & Auto-Testing
- Watch marketing pages in repo
- Auto-test when files change
- Open GitHub issue if conversion prediction drops
- Suggest improvements via PR

#### F3.8: A/B Test Orchestration
- Generate multiple copy variants
- Test all with synthetic agents
- Rank by predicted conversion
- Create feature flag configuration automatically

#### F3.9: Competitor Analysis Integration
```typescript
mcp.analyzeCompetitor(projectId, competitorURL) → {
  theirPositioning: string;
  forcesCovered: { push, pull, anxiety, habit };
  gaps: string[]; // what they don't address
  opportunity: string; // how to differentiate
  differentiationAngle: string;
}
```

#### F3.10: Multi-Project Context
- Manage multiple validated products
- Switch between projects
- Cross-project insights
- Pattern recognition across products

---

## Feature Requirements: PM Discovery Assistant

### MVP Features (Phase 1)

#### F1.1: Interview Setup & Context
**User Story:** As a PM, I want to set up an interview with context so the AI can provide relevant guidance.

**Acceptance Criteria:**
- [ ] User can create new interview session
- [ ] User can input: Interviewee name, role, company, company size
- [ ] User can select/input: ICP, product category, suspected job
- [ ] User can choose interview template or start blank
- [ ] System generates initial interview guide with 5-7 suggested opening questions

**Technical Notes:**
- Store interview metadata in PostgreSQL
- Use LLM to generate opening questions based on context
- Pull from JTBD question library

#### F1.2: Real-Time Interview Notes & Analysis
**User Story:** As a PM, I want to type interview notes and have them analyzed in real-time so I get immediate insights.

**Acceptance Criteria:**
- [ ] User can type/paste interview notes in large text area
- [ ] System analyzes notes on-the-fly (debounced, not on every keystroke)
- [ ] Four Forces diagram updates automatically as insights are extracted
- [ ] System highlights emotional language (struggling moments)
- [ ] Visual indicators show when new insights are captured (animations)
- [ ] All analysis happens within 2-3 seconds of user stopping typing

**Technical Notes:**
- WebSocket or polling for real-time updates
- LLM API call with prompt: "Extract Four Forces from these interview notes..."
- Sentiment analysis for emotion detection
- Optimistic UI updates while processing

#### F1.3: Four Forces Visualization
**User Story:** As a PM, I want to see the Four Forces balance visually so I understand the customer's psychological state.

**Acceptance Criteria:**
- [ ] Four force cards displayed in 2x2 grid (PUSH/PULL top, ANXIETY/HABIT bottom)
- [ ] Each card shows: Icon, force name, strength percentage, progress bar, item count
- [ ] Color coding: Red (70%+), Yellow (40-69%), Green (<40%)
- [ ] Click any force to expand and see detailed items
- [ ] Each item shows: Statement, intensity badge, supporting quote
- [ ] Visual warnings for imbalanced forces ("ANXIETY very high - major blocker")

**Technical Notes:**
- React components with smooth animations
- Tailwind for styling
- Interactive state management for expansion/collapse

#### F1.4: Struggling Moment Detection
**User Story:** As a PM, I want to be alerted when a struggling moment is detected so I can probe deeper.

**Acceptance Criteria:**
- [ ] System automatically detects struggling moments from notes
- [ ] Prominent callout appears when detected (purple card)
- [ ] Shows: Event, emotion, consequence, trigger interpretation
- [ ] System suggests follow-up questions to deepen the insight
- [ ] User can confirm or dismiss struggling moment

**Technical Notes:**
- Pattern matching for emotional language: "embarrassing," "frustrated," "disaster"
- Specific event detection: "last month," "when X happened"
- Consequence extraction: revenue, reputation, time

#### F1.5: AI-Powered Question Suggestions
**User Story:** As a PM, I want contextual question suggestions so I know what to ask next.

**Acceptance Criteria:**
- [ ] System shows 3-5 suggested questions at all times
- [ ] Questions are prioritized by importance (gaps in force coverage)
- [ ] Visual priority indicators (high/medium)
- [ ] Questions update as interview progresses
- [ ] User can click question to copy or mark as asked
- [ ] Includes both broad questions and specific probes

**Technical Notes:**
- LLM prompt: "Given force state X, suggest next questions to ask"
- Pull from JTBD question library, customize to context
- Priority algorithm based on force gaps

#### F1.6: Alternative Solutions Timeline
**User Story:** As a PM, I want to map out alternatives the customer has tried so I understand their journey.

**Acceptance Criteria:**
- [ ] Visual timeline showing customer's solution journey
- [ ] Each alternative shows: Name, status (Current/Tried & Fired/Considered), duration
- [ ] Color-coded status badges
- [ ] Shows why previous solutions failed
- [ ] Captures "hired" and "fired" dates when mentioned
- [ ] Auto-populates from interview notes when alternatives mentioned

**Technical Notes:**
- Entity extraction for alternative solutions
- Timeline UI component with vertical flow
- Date parsing from natural language

#### F1.7: Psychological Stage Detection
**User Story:** As a PM, I want to know what psychological stage the customer is in so I can tailor my questions.

**Acceptance Criteria:**
- [ ] System classifies customer into: Passive Looking / Active Looking / Deciding / Consuming
- [ ] Stage badge displayed in interview header
- [ ] Changes in real-time as new information is gathered
- [ ] Provides reasoning for stage classification
- [ ] Question suggestions adapt to stage

**Technical Notes:**
- Classification based on language patterns:
  - Passive: "would be nice," "someday," "we've talked about"
  - Active: "we're looking at," "evaluating," "comparing"
  - Deciding: "trying to decide between," "building business case"
  - Consuming: "we just started using," "we bought"

#### F1.8: Force Balance Formula
**User Story:** As a PM, I want to see if the customer is ready to switch based on force balance.

**Acceptance Criteria:**
- [ ] Visual formula: (PUSH + PULL) vs (ANXIETY + HABIT)
- [ ] Shows calculation with actual numbers
- [ ] Clear indicator: Ready to switch / Not ready / Borderline
- [ ] Explains which force is the primary blocker
- [ ] Provides positioning insight based on analysis

**Technical Notes:**
- Simple arithmetic calculation
- Thresholds: >20 point difference = clear signal
- Generate insight text via LLM or rule-based

### Phase 2 Features (Post-MVP)

#### F1.9: Voice Transcription Integration
- Real-time transcription from audio/video calls
- Automatic note-taking during live interviews
- Speaker diarization (who said what)

#### F1.10: Multi-Interview Synthesis
- Aggregate insights across 5-10+ interviews
- Pattern detection across customers
- ICP profile builder
- Industry benchmarks

#### F1.11: Collaboration Features
- Share interviews with team
- Comment on specific insights
- Tag team members for review
- Export reports in various formats

#### F1.12: Interview Recording & Playback
- Record video/audio of interviews
- Link highlights to force insights
- Create highlight reels of struggling moments
- Auto-generate interview summary videos

---

## Feature Requirements: Synthetic Agent Simulator

### MVP Features (Phase 1)

#### F2.1: Force Profile Input/Selection
**User Story:** As a growth lead, I want to select or create a force profile so I can test with realistic agents.

**Acceptance Criteria:**
- [ ] User can select from library of pre-built profiles (from PM discoveries)
- [ ] User can create custom profile by manually setting force strengths
- [ ] User can input: ICP description, psychological stage, force strengths (0-100%)
- [ ] User can add specific anxieties, habits, pushes, pulls as text
- [ ] Preview shows what the agent "believes"

**Technical Notes:**
- Pull from Force Profile database built by PM side
- Form UI for manual profile creation
- Validation that forces are realistic (sum within bounds)

#### F2.2: Landing Page Input
**User Story:** As a growth lead, I want to input a landing page URL so the system can analyze it.

**Acceptance Criteria:**
- [ ] User can input URL or paste HTML
- [ ] System validates URL is accessible
- [ ] Option to test specific sections (full page, above fold only, specific sections)
- [ ] Screenshot preview of page to be tested
- [ ] User can annotate sections (optional: "this is the value prop," "this is social proof")

**Technical Notes:**
- Web scraping with Playwright/Puppeteer
- HTML parsing to identify sections
- Screenshot generation for preview

#### F2.3: Agent Generation
**User Story:** As a growth lead, I want to generate synthetic agents with specific profiles so I can test at scale.

**Acceptance Criteria:**
- [ ] User can specify number of agents (1-100)
- [ ] User can choose variation: All identical, or add personality variation
- [ ] System generates agents with: Backstory, current situation, goals, force profile
- [ ] Each agent has slightly different perspective (not clones)
- [ ] Preview sample agent profiles before running test

**Technical Notes:**
- LLM prompt: "Generate user persona with this force profile..."
- Add controlled randomness for variation
- Store agent profiles for repeatability

#### F2.4: Landing Page Evaluation
**User Story:** As a growth lead, I want agents to evaluate my landing page so I can see it through their eyes.

**Acceptance Criteria:**
- [ ] Each agent "reads" landing page section by section
- [ ] For each section, agent evaluates:
  - Does this recognize my problem? (PUSH)
  - Does this make me want the solution? (PULL)
  - Does this reduce my fears? (ANXIETY)
  - Does this overcome my current habits? (HABIT)
- [ ] Agent provides reasoning for each evaluation
- [ ] Agent makes final conversion decision: Convert / Bounce (with reason)
- [ ] Processing completes in <60 seconds for 100 agents

**Technical Notes:**
- Chain-of-thought prompting for agent reasoning
- Structured output for evaluations
- Parallel processing for speed
- Rate limiting for API calls

#### F2.5: Results Dashboard
**User Story:** As a growth lead, I want to see aggregated test results so I understand where the page fails.

**Acceptance Criteria:**
- [ ] Overall conversion rate: X% of agents converted
- [ ] Bounce analysis: Where did agents drop off?
  - X% bounced at headline
  - Y% bounced at features section
  - Z% bounced at pricing
- [ ] Force coverage scores:
  - PUSH addressed: X%
  - PULL created: Y%
  - ANXIETY reduced: Z%
  - HABIT overcome: W%
- [ ] Primary blocker identified: "ANXIETY is the main conversion blocker"
- [ ] Detailed agent reasoning (click to expand sample responses)

**Technical Notes:**
- Aggregate statistics across all agents
- Group by bounce point
- Calculate average force coverage
- Identify highest-impact issues

#### F2.6: Recommendations Engine
**User Story:** As a growth lead, I want specific recommendations so I know what to change.

**Acceptance Criteria:**
- [ ] Top 3-5 prioritized recommendations with reasoning
- [ ] Each recommendation shows:
  - What to change (specific section)
  - Why it matters (which force it addresses)
  - Example of better approach
  - Estimated impact (based on force gaps)
- [ ] Recommendations are actionable and specific, not generic
- [ ] Can filter by force type (show only ANXIETY recommendations)

**Technical Notes:**
- Rule-based + LLM hybrid approach
- Recommendations template library
- Impact scoring based on force gaps

#### F2.7: Section-by-Section Analysis
**User Story:** As a growth lead, I want to see how each page section performed so I know what works and what doesn't.

**Acceptance Criteria:**
- [ ] Visual page mockup with heat map overlay
- [ ] Each section shows:
  - What % of agents found this section effective
  - Which force(s) it addresses
  - Common agent reactions (quotes)
  - Improvement suggestions
- [ ] Color coding: Green (effective), Yellow (mixed), Red (problematic)
- [ ] Click section to see detailed agent feedback

**Technical Notes:**
- Map agent evaluations back to page sections
- Generate heat map visualization
- Aggregate feedback per section

#### F2.8: Test History & Comparison
**User Story:** As a growth lead, I want to compare test runs so I can see if my changes improved things.

**Acceptance Criteria:**
- [ ] Save all test runs with timestamp
- [ ] View history of tests for a given page
- [ ] Side-by-side comparison of two test runs
- [ ] Diff view showing what changed
- [ ] Chart showing conversion rate over time
- [ ] Can re-run previous test configuration

**Technical Notes:**
- Store all test results in database
- Version tracking for pages tested
- Comparison UI with before/after metrics

### Phase 2 Features (Post-MVP)

#### F2.9: Multi-Page Journey Testing
- Test full user journey (homepage → feature page → pricing → sign up)
- Simulate drop-off at each stage
- Funnel analysis through psychological lens

#### F2.10: A/B Test Predictor
- Input two page variants
- Predict which will win and by how much
- Show confidence level in prediction
- Validate predictions with actual results

#### F2.11: Competitor Comparison
- Test your page vs. competitor pages
- Show where competitors are stronger/weaker
- Competitive positioning insights

#### F2.12: Real User Validation
- Export test setup to run with real users (UserTesting integration)
- Compare synthetic vs. real results
- Track accuracy over time
- Improve models based on real data

---

## Technical Specifications

### Technology Stack

#### Frontend
- **Framework:** React 18+ with TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Context + Zustand (for complex state)
- **Data Fetching:** TanStack Query (React Query)
- **Forms:** React Hook Form + Zod validation
- **Charts/Viz:** Recharts, D3.js for custom visualizations
- **Rich Text:** Lexical or TipTap for interview notes
- **Icons:** Lucide React

#### Backend
- **Runtime:** Node.js 20+ or Python 3.11+
- **Framework:** 
  - Option A: Next.js (if React full-stack)
  - Option B: FastAPI (Python, better for AI/ML workloads)
- **API:** RESTful + WebSocket for real-time features
- **Authentication:** NextAuth.js or Auth0
- **Job Queue:** Bull (Node) or Celery (Python) for background processing

#### Database
- **Primary:** PostgreSQL 15+ (relational data)
  - Interviews, users, organizations, force profiles
- **Vector Store:** Pinecone or Weaviate
  - Interview embeddings for semantic search
  - Pattern matching across interviews
- **Cache:** Redis for session management and rate limiting

#### AI/ML
- **Primary LLM:** Claude 3.5 Sonnet (Anthropic API)
  - Interview analysis, question generation, agent reasoning
- **Secondary:** GPT-4 (OpenAPI API) as fallback
- **Embeddings:** OpenAI text-embedding-3-large
- **Fine-tuning:** Consider fine-tuned models for:
  - Force classification
  - Stage detection
  - Struggling moment detection

#### Infrastructure
- **Hosting:** Vercel (frontend) + AWS/GCP (backend)
- **CDN:** CloudFlare for static assets
- **Monitoring:** Sentry (errors), PostHog (analytics)
- **CI/CD:** GitHub Actions

### API Design

#### Interview Management API

```
POST /api/interviews
GET /api/interviews/:id
PUT /api/interviews/:id
DELETE /api/interviews/:id
GET /api/interviews?organization_id=X

POST /api/interviews/:id/analyze
POST /api/interviews/:id/export
GET /api/interviews/:id/suggestions
```

#### Force Profile API

```
GET /api/force-profiles
POST /api/force-profiles
GET /api/force-profiles/:id
PUT /api/force-profiles/:id

GET /api/force-profiles/patterns?icp=X
GET /api/force-profiles/search?query=X
```

#### Synthetic Testing API

```
POST /api/tests/create
GET /api/tests/:id
GET /api/tests/:id/results
POST /api/tests/:id/rerun

POST /api/agents/generate
POST /api/agents/evaluate-page

GET /api/tests/history?page_url=X
GET /api/tests/compare?test1=A&test2=B
```

### Data Flow Examples

#### Interview Analysis Flow

```
1. User types interview notes in UI
   ↓
2. Frontend debounces input (2 sec delay)
   ↓
3. POST /api/interviews/:id/analyze
   {
     "content": "Sarah mentioned they lost a $50K deal...",
     "context": { "stage": "active_looking", "icp": "VP_Sales" }
   }
   ↓
4. Backend sends to LLM API
   Prompt: "Extract Four Forces from these notes..."
   ↓
5. LLM returns structured JSON
   {
     "forces": {
       "push": [{
         "statement": "Lost $50K deal due to CRM chaos",
         "intensity": "high",
         "quote": "Really embarrassing when two reps..."
       }],
       ...
     },
     "struggling_moment": {
       "detected": true,
       "event": "Lost $50K deal",
       "emotion": "embarrassment"
     },
     "stage_update": "active_looking",
     "suggestions": ["Ask about Salesforce timeline"]
   }
   ↓
6. Backend saves to PostgreSQL + creates embedding
   ↓
7. Backend returns to frontend via WebSocket or long polling
   ↓
8. Frontend updates Four Forces diagram with animations
```

#### Synthetic Testing Flow

```
1. User inputs URL + selects force profile
   ↓
2. POST /api/tests/create
   {
     "url": "https://example.com/landing",
     "profile_id": "VP_Sales_50-200",
     "num_agents": 100,
     "stage": "active_looking"
   }
   ↓
3. Backend queues job in Bull/Celery
   ↓
4. Worker process:
   a. Fetch page content (Playwright)
   b. Parse page into sections
   c. Load force profile from database
   d. Generate 100 agent personas (LLM)
   e. For each agent:
      - Evaluate each page section (LLM)
      - Make conversion decision
   f. Aggregate results
   g. Generate recommendations (LLM)
   ↓
5. Save results to PostgreSQL
   ↓
6. Notify frontend (WebSocket or polling)
   ↓
7. Frontend displays results dashboard
```

### Performance Requirements

- **Real-time analysis:** < 3 seconds from user input to UI update
- **Synthetic test:** < 60 seconds for 100 agents
- **Page load:** < 2 seconds for main interfaces
- **Concurrent users:** Support 100+ simultaneous interviews being analyzed
- **API rate limits:** Handle LLM rate limits gracefully with queuing
- **Uptime:** 99.5% availability

### Security Requirements

- **Authentication:** OAuth 2.0, support SSO for enterprise
- **Authorization:** Role-based access control (RBAC)
  - Admin: Full access
  - PM/Researcher: Can conduct interviews, create tests
  - Viewer: Read-only access to results
- **Data encryption:** 
  - At rest: AES-256
  - In transit: TLS 1.3
- **API security:**
  - Rate limiting (100 req/min per user)
  - Input validation and sanitization
  - CORS policies
- **Privacy:**
  - PII redaction options for interview notes
  - GDPR compliance (right to delete, data export)
  - SOC 2 Type II (for enterprise)

---

## Data Models

### Core Entities

#### User
```typescript
interface User {
  id: string;
  email: string;
  name: string;
  organization_id: string;
  role: 'admin' | 'pm' | 'researcher' | 'viewer';
  created_at: Date;
  last_login: Date;
}
```

#### Organization
```typescript
interface Organization {
  id: string;
  name: string;
  plan: 'free' | 'team' | 'enterprise';
  settings: {
    allowed_domains: string[];
    sso_enabled: boolean;
  };
  created_at: Date;
}
```

#### Interview
```typescript
interface Interview {
  id: string;
  organization_id: string;
  user_id: string; // who conducted it
  
  // Context
  interviewee_name: string;
  interviewee_role: string;
  interviewee_company: string;
  company_size: string;
  icp: string;
  product_category: string;
  
  // Content
  notes: string; // full interview transcript/notes
  
  // Analysis results
  forces: FourForces;
  struggling_moments: StrugglingMoment[];
  alternatives: Alternative[];
  stage: PsychologicalStage;
  
  // Metadata
  duration_minutes: number;
  created_at: Date;
  updated_at: Date;
  status: 'in_progress' | 'completed' | 'archived';
}
```

#### FourForces
```typescript
interface FourForces {
  push: ForceItem[];
  pull: ForceItem[];
  anxiety: ForceItem[];
  habit: ForceItem[];
}

interface ForceItem {
  id: string;
  statement: string; // "Lost $50K deal due to CRM chaos"
  intensity: 'low' | 'medium' | 'high' | 'very high';
  quote: string; // supporting quote from interview
  category?: string; // optional categorization
  timestamp?: Date; // when in interview this was mentioned
}
```

#### StrugglingMoment
```typescript
interface StrugglingMoment {
  id: string;
  event: string; // "Lost $50K deal due to duplicate outreach"
  emotion: string; // "Embarrassment"
  consequence: string; // "Revenue loss + client relationship damage"
  trigger_interpretation: string; // "This moved them from passive to active"
  quote: string;
  timestamp?: Date;
}
```

#### Alternative
```typescript
interface Alternative {
  id: string;
  name: string; // "Salesforce"
  status: 'current' | 'tried_and_fired' | 'considered' | 'rejected';
  hired_date?: Date;
  fired_date?: Date;
  duration_months?: number;
  reason_hired?: string;
  reason_fired?: string;
  quotes: string[];
}
```

#### ForceProfile
```typescript
interface ForceProfile {
  id: string;
  organization_id: string;
  
  // Identity
  name: string; // "VP Sales, 50-200 employees, Active Looking"
  icp: string;
  stage: PsychologicalStage;
  
  // Aggregated forces (from multiple interviews)
  force_strengths: {
    push_avg: number; // 0-100
    pull_avg: number;
    anxiety_avg: number;
    habit_avg: number;
  };
  
  // Common patterns
  common_pushes: string[]; // most frequent push items
  common_pulls: string[];
  common_anxieties: string[];
  common_habits: string[];
  
  // Alternatives
  typical_alternatives: string[];
  
  // Metadata
  based_on_interviews: number; // how many interviews contributed
  interview_ids: string[];
  created_at: Date;
  updated_at: Date;
}
```

#### SyntheticTest
```typescript
interface SyntheticTest {
  id: string;
  organization_id: string;
  user_id: string;
  
  // Input
  page_url: string;
  page_html: string; // snapshot of HTML tested
  profile_id: string; // which force profile was used
  num_agents: number;
  stage: PsychologicalStage;
  
  // Results
  conversion_rate: number; // 0-100
  agents_converted: number;
  agents_bounced: number;
  
  bounce_analysis: {
    section: string;
    percent_bounced: number;
    reason: string;
  }[];
  
  force_coverage: {
    push_addressed: number; // 0-100
    pull_created: number;
    anxiety_reduced: number;
    habit_overcome: number;
  };
  
  primary_blocker: 'push' | 'pull' | 'anxiety' | 'habit';
  
  recommendations: Recommendation[];
  
  // Agent details
  sample_agent_responses: AgentResponse[]; // store 5-10 sample agents
  
  // Metadata
  status: 'queued' | 'processing' | 'completed' | 'failed';
  processing_time_seconds: number;
  created_at: Date;
  completed_at?: Date;
}
```

#### AgentResponse
```typescript
interface AgentResponse {
  agent_id: string;
  agent_persona: string; // "Sarah, VP Sales at 120-person company..."
  
  force_profile: {
    push: number;
    pull: number;
    anxiety: number;
    habit: number;
  };
  
  section_evaluations: {
    section_name: string;
    push_addressed: boolean;
    pull_created: boolean;
    anxiety_reduced: boolean;
    habit_overcome: boolean;
    reasoning: string;
  }[];
  
  conversion_decision: 'convert' | 'bounce';
  bounce_point?: string; // which section they bounced at
  decision_reasoning: string;
}
```

#### Recommendation
```typescript
interface Recommendation {
  id: string;
  priority: 'high' | 'medium' | 'low';
  section: string; // which page section
  issue: string; // "Headline doesn't recognize problem"
  force_impacted: 'push' | 'pull' | 'anxiety' | 'habit';
  suggestion: string; // "Change headline to address specific pain point"
  example: string; // specific example
  estimated_impact: number; // 0-100
}
```

### Database Schema (PostgreSQL)

```sql
-- Users & Organizations
CREATE TABLE organizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  plan VARCHAR(50) NOT NULL,
  settings JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  organization_id UUID REFERENCES organizations(id),
  role VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  last_login TIMESTAMP
);

-- Interviews
CREATE TABLE interviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id),
  user_id UUID REFERENCES users(id),
  
  interviewee_name VARCHAR(255),
  interviewee_role VARCHAR(255),
  interviewee_company VARCHAR(255),
  company_size VARCHAR(100),
  icp VARCHAR(255),
  product_category VARCHAR(255),
  
  notes TEXT,
  
  forces JSONB, -- stored as JSON for flexibility
  struggling_moments JSONB,
  alternatives JSONB,
  stage VARCHAR(50),
  
  duration_minutes INTEGER,
  status VARCHAR(50),
  
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_interviews_org ON interviews(organization_id);
CREATE INDEX idx_interviews_icp ON interviews(icp);
CREATE INDEX idx_interviews_stage ON interviews(stage);

-- Force Profiles
CREATE TABLE force_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id),
  
  name VARCHAR(255) NOT NULL,
  icp VARCHAR(255),
  stage VARCHAR(50),
  
  force_strengths JSONB,
  common_patterns JSONB,
  typical_alternatives JSONB,
  
  based_on_interviews INTEGER,
  interview_ids UUID[],
  
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_profiles_org ON force_profiles(organization_id);
CREATE INDEX idx_profiles_icp ON force_profiles(icp);

-- Synthetic Tests
CREATE TABLE synthetic_tests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id),
  user_id UUID REFERENCES users(id),
  
  page_url VARCHAR(1000),
  page_html TEXT,
  profile_id UUID REFERENCES force_profiles(id),
  num_agents INTEGER,
  stage VARCHAR(50),
  
  conversion_rate DECIMAL(5,2),
  agents_converted INTEGER,
  agents_bounced INTEGER,
  
  bounce_analysis JSONB,
  force_coverage JSONB,
  primary_blocker VARCHAR(50),
  recommendations JSONB,
  sample_agent_responses JSONB,
  
  status VARCHAR(50),
  processing_time_seconds INTEGER,
  
  created_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP
);

CREATE INDEX idx_tests_org ON synthetic_tests(organization_id);
CREATE INDEX idx_tests_url ON synthetic_tests(page_url);
CREATE INDEX idx_tests_profile ON synthetic_tests(profile_id);
```

---

## UI/UX Requirements

### Design Principles

1. **Real-time Feedback:** Show analysis results immediately, don't make users wait
2. **Visual Clarity:** Use color coding and visual hierarchy to communicate force balance
3. **Progressive Disclosure:** Don't overwhelm with data, let users drill down when needed
4. **Actionable Insights:** Every piece of data should lead to a clear action
5. **Professional but Friendly:** B2B tool, but not boring—inject personality where appropriate

### Color System

**Force Colors:**
- **PUSH:** Red (#DC2626) - Problems, urgency, pain
- **PULL:** Green (#16A34A) - Attraction, desire, excitement
- **ANXIETY:** Purple (#9333EA) - Fear, risk, concern
- **HABIT:** Blue (#2563EB) - Current state, comfort, inertia

**Intensity Colors:**
- **Very High:** Red (#DC2626)
- **High:** Orange (#EA580C)
- **Medium:** Yellow (#CA8A04)
- **Low:** Blue (#2563EB)

**Status Colors:**
- **Success:** Green (#16A34A)
- **Warning:** Yellow (#CA8A04)
- **Error:** Red (#DC2626)
- **Info:** Blue (#2563EB)

### Key UI Components

#### Four Forces Diagram Component
- 2x2 grid layout
- Each force is a card with:
  - Icon (Target, Zap, Shield, Anchor)
  - Force name
  - Strength percentage (large, bold)
  - Progress bar with color gradient
  - Summary text (e.g., "3 items captured")
  - Warning badges for extreme values
- Interactive: Click to expand and see details
- Smooth animations when values update

#### Struggling Moment Callout
- Prominent card with icon (lightning bolt)
- Purple color scheme (attention-grabbing but not alarming)
- Shows: Event, emotion, consequence
- Badge indicators for impact type
- Auto-appears when detected with slide-in animation

#### AI Suggestion Cards
- Contextual cards that appear/disappear based on state
- Priority color coding (high = orange, medium = blue)
- Icon indicates suggestion type (question, probe, gap)
- Clear, actionable text
- Dismissible but reappears if still relevant

#### Alternative Timeline
- Vertical timeline with connecting line
- Color-coded dots for status (current = blue, fired = red)
- Compact card for each alternative
- Duration and dates when available
- Expandable to show full details

#### Force Detail Panel
- Slides out from force card when clicked
- List of all items for that force
- Each item shows: Statement, intensity badge, quote
- Sortable by intensity
- Can add manual items if needed

### Responsive Design

- **Desktop (1920x1080):** Full side-by-side layout with all panels visible
- **Laptop (1440x900):** Slightly compressed, scrollable right panel
- **Tablet (768x1024):** Stacked layout, tabs for different views
- **Mobile:** Not a primary target for MVP, but provide basic viewing of reports

### Accessibility

- **WCAG 2.1 AA compliant**
- **Keyboard navigation:** All features accessible via keyboard
- **Screen reader support:** Semantic HTML, ARIA labels
- **Color contrast:** Minimum 4.5:1 for text
- **Focus indicators:** Clear visual focus states
- **Alternative text:** All icons and images have descriptive alt text

---

## Success Metrics

### North Star Metric
**Products validated AND built with MCP that make first dollar within 90 days**

This measures our complete value: validation + context-aware building → revenue.

Target: 50% of products built with MCP context make first dollar within 90 days (vs. 40% for validation alone, vs. ~5% industry baseline)

### MCP Integration Metrics (Killer Feature Tracking)

**Adoption Metrics:**
- **MCP Installation Rate:** 60% of users who complete validation install MCP server
- **Active MCP Sessions:** Daily active developers building with MCP context
  - Target: 200 daily MCP sessions within 3 months of MCP launch
- **MCP Retention:** 80% of developers who install MCP use it weekly

**Usage Metrics:**
- **Copy Generated:** API calls to `generate_copy` per project
  - Target: 10+ per project (multiple iterations and sections)
- **Features Validated:** API calls to `validate_feature` before building
  - Target: 5+ per project (thoughtful feature decisions)
- **Copy Tests:** API calls to `test_copy` before deployment
  - Target: 3+ per project (iterative testing)
- **MCP Queries Per Session:** Average API calls while coding
  - Target: 15+ queries per coding session

**Quality Metrics:**
- **MCP-Built Products Success Rate:** % that make first dollar
  - Target: 50% (vs. 40% validation alone, vs. 5% baseline)
  - **This proves MCP adds 10 percentage points to success rate**
- **Copy Quality Score:** Force coverage of MCP-generated copy
  - Target: 75%+ force coverage on primary forces (PUSH/ANXIETY)
- **Feature Alignment:** % of features validated before building
  - Target: 70% of features run through `validate_feature` first
- **Test Accuracy:** Correlation between MCP predictions and real conversion
  - Target: 75%+ correlation

**Developer Satisfaction:**
- **"MCP Saved Me Time":** % who agree (survey)
  - Target: 80% agree
- **"Couldn't Build Without It":** % who would be disappointed if MCP went away
  - Target: 60% would be very disappointed (Sean Ellis test)
- **Time to First Deploy:** Days from validation to launch with MCP
  - Target: 7 days (vs. 14 days without MCP)
- **Recommendation:** NPS for MCP specifically
  - Target: 70+ (exceptional for developer tools)

**Network Effects:**
- **MCP Configurations Shared:** Developers share .clauderc setups
  - Target: 50+ shared configs in community
- **MCP Success Stories:** Public case studies of MCP-built products
  - Target: 25 "built with MCP" success stories in first 6 months
- **Integration Ecosystem:** Community-built MCP extensions
  - Target: 10+ community extensions (Figma plugin, VSCode extension, etc.)
- **Viral Coefficient:** MCP users refer other developers
  - Target: 1.3x viral coefficient (30% of users refer 1+ developers)

### Product Metrics (What indicates product-market fit?)

#### Leading Indicators (Vibe Coder Focus)

**Activation Metrics:**
- **Time to first validation:** < 3 days from signup to completing idea validation
- **Validation completion rate:** 60% of users who input an idea complete 3+ interviews
- **Interview quality score:** 70%+ of interviews capture all four forces
- **Target:** 70% of signups validate at least one idea within 14 days

**Engagement Metrics:**
- **Weekly Active Validators (WAV):** Users who complete 1+ interview per week
  - Target: 200 WAV within 3 months of launch
- **Ideas validated per user:** 2.5 ideas validated on average
- **Interview velocity:** Average 5 days from idea input to decision
- **Return rate:** 50% of users validate multiple ideas (indicates they trust the process)

**Decision Outcomes:**
- **"Don't Build" rate:** 30-40% of validations result in "don't build" recommendation
  - This is GOOD - means we're saving people from bad ideas
- **Pivot rate:** 20-30% discover different opportunity during validation
- **"Build" confidence:** 80%+ of users who get "build" signal actually build it

**Retention Metrics:**
- **D7 (Day 7) retention:** > 50% (returned to validate another idea or continue interviews)
- **D30 retention:** > 30% (actively using for ongoing products)
- **"Product Saved" stories:** 50+ testimonials of "I almost built this, validation saved me"

#### Lagging Indicators (Business Impact)

**Revenue Metrics:**
- **First Dollar Success Rate:** 40% of validated ideas make first dollar within 90 days
  - Track cohorts: "validated with us" vs. "didn't validate"
  - Hypothesis: Validated products have 8x higher success rate
  
**User Success:**
- **Builder Revenue Impact:** Total revenue generated by products validated on platform
  - Target: $500K cumulative revenue from validated products in first year
- **"Built and Launched" rate:** 60% of "build" recommendations result in actual launches
- **"Would recommend" score:** > 75% would recommend to other builders

**Monetization:**
- **Free → Paid conversion:** 15% convert to paid within 30 days
  - Trigger: After validating first idea successfully
- **Paid retention:** < 5% monthly churn
- **Net Revenue Retention:** > 100% (upgrades from successful builders)

### Feature Adoption Metrics

#### Idea Validator (Core Entry Point)
- **Ideas submitted:** 1,000+ ideas submitted in first 3 months
- **Interview guide downloads:** 70% of ideas generate interview guide
- **Decision reached:** 50% reach clear build/don't build decision
- **Decision time:** Average 5 days from idea to decision
- **Pivot discovery:** 25% discover better opportunity during validation

#### PM Discovery Assistant (Ongoing Use)
- **Interviews per user per month:** 5+ (engaged user threshold)
- **Force completeness:** 75%+ of interviews have all four forces captured with quotes
- **Struggling moment detection rate:** 60%+ of interviews identify a struggling moment
- **AI suggestions usage:** 40%+ of suggested questions are marked as used
- **Multi-interview synthesis:** 30% of users conduct 10+ interviews on same ICP

#### Synthetic Testing (Conversion Optimization)
- **Tests per user per month:** 3+ (engaged tester threshold)
- **Landing page iterations:** 50% run 2+ tests on same page (iteration signal)
- **Recommendation adoption:** 60%+ of high-priority recommendations implemented
- **Re-test rate:** 40% test before/after to measure improvement

### Quality Metrics (Does it actually work?)

#### Validation Accuracy
- **False Positives:** < 15% of "build" recommendations fail to get traction
  - Track: Products that launched but got < 10 users in 60 days
- **False Negatives:** < 10% of "don't build" recommendations missed opportunities
  - Track: Users who built anyway and succeeded
- **Pivot Success:** 50% of recommended pivots lead to better outcomes than original idea

#### Synthetic Testing Accuracy
- **Prediction Correlation:** > 70% correlation between synthetic conversion predictions and actual A/B test results
- **Force Classification Accuracy:** Manual review of 100 interviews, > 85% of force items correctly classified
- **Struggling Moment Precision:** > 75% of detected struggling moments validated by user feedback
- **Recommendation Impact:** Avg 30%+ improvement in conversion after implementing recommendations

#### Learning & Improvement
- **Interview quality improvement:** 50% improvement in force completeness from interview 1 to interview 10
- **User PM skill development:** Pre/post surveys show 60% feel "much more confident" in customer discovery
- **Time efficiency:** Average validation time decreases from 7 days (first idea) to 3 days (third idea)

### User Satisfaction

**Qualitative Metrics:**
- **Feature satisfaction (1-5 stars):**
  - Idea Validator: > 4.5
  - Interview coaching: > 4.3
  - Build/don't build decision: > 4.4
  - Synthetic testing: > 4.0
- **NPS Score:** > 50 (excellent for B2B)
- **"Time Saved" perception:** > 80% agree "saved me significant time"
- **"Learned PM skills":** > 70% agree "learned customer discovery skills"

**Community Indicators:**
- **Twitter mentions:** 200+ #buildinpublic posts mentioning the platform in first 6 months
- **Case studies shared:** 50+ users share validation journey publicly
- **Community content:** 100+ blog posts/videos about using the platform
- **Organic referrals:** 30% of signups from word-of-mouth

### Business Metrics

#### Revenue Targets (Vibe Coder Pricing)
- **Month 3:** $5K MRR (100 paying users @ $49/month avg)
- **Month 6:** $25K MRR (400 paying users)
- **Month 12:** $125K MRR (2,000 paying users)

#### Pricing Model (Validated with Market)
**Free (Validate One Idea):**
- 5 customer interviews with AI analysis
- 10 synthetic user tests
- Basic force profile
- Goal: Let them validate ONE idea to see value, then convert

**Builder ($49/month) - SWEET SPOT:**
- Unlimited interviews
- 100 synthetic tests/month
- Landing page analyzer
- Competitor analysis
- Interview templates library
- Export reports (shareable with team/investors)
- Positioning: "Less than one day of your time, validates infinite ideas"

**Pro ($99/month):**
- Everything in Builder
- 500 synthetic tests/month
- Voice transcription
- Team collaboration (3 seats)
- Priority support
- API access
- Positioning: "For serious builders shipping multiple products"

**Agency ($299/month):**
- Everything in Pro
- Unlimited synthetic tests
- White-label reports
- Client management (10 seats)
- Custom branding
- Positioning: "For agencies building products for clients"

#### Growth Targets
- **Signups per month:** 
  - Month 3: 500 signups (100 paying = 20% conversion)
  - Month 6: 1,500 signups (400 paying = 27% conversion)
  - Month 12: 5,000 signups (2,000 paying = 40% conversion)
  
- **Conversion funnel:**
  - Signup → Input idea: 80%
  - Input idea → Complete 1 interview: 60%
  - Complete 1 interview → Reach decision: 50%
  - Reach decision → Convert to paid: 30%
  - Overall: Signup → Paid = 7% (first month), 15% (by month 3)

- **Churn rate:** < 5% monthly
  - Hypothesis: Users churn between products, return for next idea
  - Goal: Build "validate every idea here" habit

#### Customer Acquisition Cost (CAC) & LTV
- **Target CAC:** < $30 (organic content + community-led growth)
- **Target LTV:** $600 (12 months avg lifetime @ $49/month)
- **LTV:CAC ratio:** > 20:1 (excellent for PLG model)

**Primary Acquisition Channels:**
1. **Organic content** (SEO + YouTube): 40% of signups, $0 CAC
2. **Community/word-of-mouth:** 30% of signups, $0 CAC
3. **Twitter/social:** 20% of signups, $20 CAC
4. **Paid (if needed):** 10% of signups, $50 CAC

### "Success Stories" KPI (Most Important)

Track and publish:
- **"I almost built this, you saved me 2 weeks"** - Validation success
- **"I validated, built, made first dollar in 30 days"** - Build success
- **"I discovered a better opportunity during interviews"** - Pivot success
- **"Went from 0 to $5K MRR using this"** - Revenue impact
- **"Raised money with validation report"** - Investor credibility

**Target:** 100 published success stories in first year

These stories are our marketing engine and proof of value.

---

## Phased Rollout Plan

### Phase 0: Pre-Launch Validation (Weeks 1-4)

**Goals:**
- Validate that vibe coders will actually pay for this
- Build minimum viable prototype for idea validation
- Test with 10-20 vibe coders from Twitter/communities
- Prove technical feasibility of JTBD coaching + synthetic agents

**Deliverables:**
- [ ] **Idea Validator prototype:**
  - One-sentence idea input
  - Force hypothesis generation (LLM-powered)
  - Interview guide generator
  - Simple note-taking interface
  - Basic build/don't build recommendation
  
- [ ] **Synthetic agent proof-of-concept:**
  - Can generate 10 agents with force profile
  - Can evaluate a simple landing page
  - Returns conversion prediction with reasoning
  
- [ ] **Design partner validation:**
  - 10 vibe coders validate real ideas using the tool
  - 5+ reach build/don't build decision
  - Get feedback on willingness to pay
  - Collect testimonials/early case studies

**Success Criteria:**
- [ ] 8/10 design partners say "I would pay for this"
- [ ] 3+ design partners get clear value (saved time, made better decision)
- [ ] Technical validation: LLM costs < $1 per validation, < 5 seconds response time
- [ ] 2+ "I almost built the wrong thing, this saved me" stories

**Go/No-Go Decision:**
If 7/10 design partners would pay $49/month → Build MVP  
If < 5/10 would pay → Pivot positioning or pricing  
If 0-2 would pay → Kill or major pivot

---

### Phase 1: MVP - Idea Validator (Weeks 5-12)

**Goals:**
- Launch to vibe coder market
- Get 500 signups, 100 idea validations completed
- Prove people will pay for validation
- Build initial testimonial/case study library

**Features Included (Idea Validator):**
- ✅ F0.1: One-sentence idea input
- ✅ F0.2: Instant force hypothesis
- ✅ F0.3: Interview guide generator
- ✅ F0.4: Quick interview mode (mobile-friendly notes)
- ✅ F0.5: Build vs. don't build decision
- ✅ F0.6: Validation report (shareable PDF)

**Features Included (PM Discovery - Simplified):**
- ✅ F1.2: Real-time interview notes & analysis
- ✅ F1.3: Four Forces visualization
- ✅ F1.4: Struggling moment detection
- ✅ F1.5: AI question suggestions
- ✅ F1.6: Alternative solutions timeline
- ✅ F1.8: Force balance formula

**NOT Included in Phase 1:**
- ❌ Synthetic testing (Phase 2)
- ❌ Team collaboration
- ❌ Voice transcription
- ❌ Advanced reporting

**Launch Strategy:**

**Week 1-2: Closed Beta**
- Launch to waitlist (design partners + their referrals)
- Target: 50 early users
- Aggressive feedback collection
- Daily iteration based on usage

**Week 3-4: Public Beta**
- ProductHunt launch
- Twitter launch thread from founder account
- Post in communities:
  - r/SideProject, r/Entrepreneur, r/SaaS
  - Indie Hackers
  - Twitter #buildinpublic
- Target: 200 signups

**Week 5-8: Content Marketing Blitz**
- Publish case studies: "I validated 3 ideas in 3 days"
- Tutorial content: "How to validate a SaaS idea before building"
- YouTube videos: "Stop building products nobody wants"
- Guest posts on indie hacker blogs
- Target: 500 total signups

**Pricing:**
- **Free:** Validate 1 idea (5 interviews + 10 synthetic tests)
- **Builder ($49/month):** Unlimited validations
- **30-day money-back guarantee** to reduce anxiety

**Success Metrics:**
- [ ] 500 signups in first 8 weeks
- [ ] 100 completed idea validations
- [ ] 15 paid conversions (Builder plan)
- [ ] 5 published case studies
- [ ] 30% of validations result in "don't build" (proves we save time)
- [ ] NPS > 50

**Key Learnings to Validate:**
- Do vibe coders actually complete interviews? (or give up?)
- Is 3-5 interviews enough for clear signal?
- What's the conversion rate from free validation to paid?
- Which features are most valuable?
- What's the biggest barrier to adoption?

---

### Phase 2: Synthetic Testing Integration (Weeks 13-24)

**Goals:**
- Add synthetic agent testing for landing page optimization
- Close the loop: Discovery → Testing → Launch
- Prove synthetic accuracy with real A/B test comparisons
- Scale to 1,000 users, 50 paying customers

**Features Added (Synthetic Testing):**
- ✅ F2.1: Force profile input/selection
- ✅ F2.2: Landing page input
- ✅ F2.3: Agent generation
- ✅ F2.4: Landing page evaluation
- ✅ F2.5: Results dashboard
- ✅ F2.6: Recommendations engine
- ✅ F2.7: Section-by-section analysis
- ✅ F2.8: Test history & comparison

**Features Added (PM Discovery - Enhanced):**
- ✅ F1.10: Multi-interview synthesis
- ✅ F1.11: Basic collaboration (share interviews)
- ✅ F0.7: Competitive idea analysis

**🔥 NEW: MCP Server Integration (Phase 2B - Weeks 17-20):**
- ✅ F3.1: MCP server core (NPX installable)
- ✅ F3.2: Get validation endpoint
- ✅ F3.3: Generate copy endpoint
- ✅ F3.4: Test copy endpoint
- ✅ F3.5: Validate feature endpoint

**Launch Strategy:**

**Week 1-4: Synthetic Testing Private Beta**
- Launch to existing paid users first
- Target: 50 users test the feature
- Validation study: Compare 20 synthetic predictions to real A/B test results
- Goal: Prove > 70% correlation

**Week 5-8: Public Launch**
- Blog post: "AI agents that predict conversion based on customer psychology"
- Demo videos showing before/after improvements
- Case study: "$200 to $2,000 MRR by fixing 3 messaging issues"
- Integration with landing page builders (if possible)

**Week 9-12: Growth & Iteration**
- Implement learnings from validation study
- Add most-requested features based on usage data
- Begin outbound to target accounts (agencies, consultants)
- Partnership discussions with Cursor, v0, Replit

**🔥 Week 17-20: MCP Server Launch (Game Changer)**

**MCP Private Beta (Week 17-18):**
- Launch to 25 power users who validated + built products
- Documentation: "Build with Customer Context" guide
- Video tutorial: "Claude Code meets Customer Psychology"
- Target: 20 developers install and use MCP while building
- Collect feedback on developer experience

**MCP Public Launch (Week 19):**
- Blog post: "Claude Code Now Knows Your Customers"
- Twitter thread showing before/after (generic vs. validated copy)
- Demo video: "Watch Claude build a landing page using validated insights"
- Partnership announcement with Anthropic (if possible)
- Post in Claude AI Discord, r/ClaudeAI, Cursor community

**MCP Growth (Week 20):**
- Case study: "I built a $5K MRR product in 7 days using validation + MCP"
- Developer testimonials: "Can't build without it"
- Integration guides for Cursor, VSCode, other editors
- Open source MCP extensions repo

**Pricing Updates:**
- **Free:** Validate 1 idea + 10 synthetic tests + MCP (read-only)
- **Builder ($49/month):** Unlimited validation + 100 tests/month + Full MCP access
- **Pro ($99/month):** Unlimited validation + 500 tests/month + team features + MCP real-time sync
- **Agency ($299/month):** Unlimited everything + white-label + Multi-project MCP

**Success Metrics:**
- [ ] 1,000 total users
- [ ] 100 paying customers ($5,000+ MRR)
- [ ] 500 synthetic tests run
- [ ] 70%+ correlation between synthetic and real results
- [ ] 🔥 **100 MCP installations** (killer metric - proves differentiation)
- [ ] 🔥 **50% of MCP users build and launch** within 14 days
- [ ] 🔥 **60% of MCP-built products make first dollar** (vs 40% without)
- [ ] 10 case studies of conversion improvements
- [ ] 5 "built with MCP" success stories
- [ ] < 5% monthly churn
- [ ] 40% of validated ideas that get "build" signal actually launch

---

### Phase 3: Community & Feedback Loop (Weeks 25-36)

**Goals:**
- Build network effects through community
- Create feedback loop: Real results → Better predictions
- Add collaboration features for teams
- Hit $25K MRR

**Features Added:**
- ✅ F0.10: Community idea library (browse validated ideas)
- ✅ F1.9: Voice transcription integration
- ✅ F1.11: Advanced collaboration (team workspaces)
- ✅ F1.12: Interview recording & playback
- ✅ F2.12: Real user validation tracking (compare synthetic to real)
- ✅ F0.8: Idea success predictor (based on community data)

**New Capabilities:**
- **Learning from real outcomes:**
  - Track which validated ideas actually launched
  - Track which launches made revenue
  - Feed success/failure data back into models
  - Improve force predictions based on outcomes
  
- **Community features:**
  - Share validation reports publicly (opt-in)
  - Browse similar ideas others validated
  - See success rate by product category
  - "Most validated ideas this month"
  
- **Team/Agency features:**
  - Shared workspace for agencies
  - Client project management
  - White-label reports
  - Team analytics

**Growth Strategy:**

**Community Building:**
- Launch "Validated" community (Discord or Circle)
- Weekly validation office hours
- Monthly "Idea Validation Showdown" (live)
- Highlight successful builders from community

**Content Expansion:**
- JTBD masterclass (free course)
- Video tutorials for each product category
- Template library (validated interview guides)
- Industry-specific force profiles

**Partnerships:**
- Official integration with Cursor marketplace
- Partnership with indie hacker communities
- Affiliate program (builders refer builders)
- Agency partner program

**Success Metrics:**
- [ ] 2,000 total users
- [ ] 200 paying customers ($15K MRR)
- [ ] 2,000+ idea validations completed
- [ ] 100 validated ideas actually launched
- [ ] 40 validated ideas making revenue
- [ ] 500+ active community members
- [ ] 75%+ accuracy on idea success prediction
- [ ] 50 agency partners

---

### Phase 4: Scale & Enterprise (Months 10-12)

**Goals:**
- Hit $125K MRR (2,000 paying users)
- Add enterprise features for larger companies
- Build API for integrations
- Become THE standard for product validation

**Features Added:**
- ✅ Enterprise SSO & admin controls
- ✅ API access for integrations
- ✅ Custom model training (enterprise)
- ✅ Advanced analytics & reporting
- ✅ F2.9: Multi-page journey testing
- ✅ F2.10: A/B test predictor
- ✅ F2.11: Competitor comparison

**New Capabilities:**
- **Enterprise:**
  - Custom force models trained on company data
  - Unlimited seats
  - Dedicated support
  - SLA guarantees
  - On-premise deployment option (if needed)
  
- **Integration ecosystem:**
  - Zapier integration
  - Slack bot for interview summaries
  - Notion integration for documentation
  - Google Docs sync
  - Figma plugin for design testing
  
- **Advanced testing:**
  - Full funnel testing (multi-page)
  - Competitor landing page comparison
  - A/B test outcome prediction
  - ROI calculator for tests

**Growth Strategy:**

**Enterprise Sales:**
- Hire first sales rep
- Outbound to product teams at growth companies
- Case studies with recognizable brands
- Industry analyst briefings (Gartner, Forrester)

**Ecosystem Play:**
- Published API documentation
- Integration partnerships
- Developer advocate program
- App marketplace

**Thought Leadership:**
- Annual "State of Product Validation" report
- JTBD certification program
- Conference speaking circuit
- Book: "Validate Before You Build"

**Success Metrics:**
- [ ] $125K MRR (2,000 paying users)
- [ ] 10 enterprise customers (> $10K/year)
- [ ] 5,000 total users
- [ ] 10,000 validated ideas in database
- [ ] 500 products launched from validated ideas
- [ ] $10M+ revenue generated by validated products (cumulative)
- [ ] 90%+ prediction accuracy
- [ ] Industry recognition (awards, press coverage)

---

### Summary: 12-Month Targets

| Metric | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|----------|
| **Total Users** | 500 | 1,000 | 5,000 |
| **Paying Customers** | 15 | 100 | 2,000 |
| **MRR** | $1K | $5K | $125K |
| **Ideas Validated** | 100 | 500 | 5,000 |
| **Products Launched** | 10 | 50 | 500 |
| **Revenue Generated (cumulative)** | $50K | $500K | $10M |
| **Prediction Accuracy** | 65% | 75% | 90% |
| **NPS** | 40 | 50 | 60 |

### Key Milestones

- ✅ **Week 4:** 10 design partners validate ideas → Funding/confidence to build
- ✅ **Week 12:** 100 validated ideas → Proof of concept
- ✅ **Week 24:** 70% synthetic accuracy → Technical validation
- ✅ **Month 6:** $5K MRR → Default alive/ramen profitable
- ✅ **Month 9:** First $10K/month user success story → Social proof
- ✅ **Month 12:** $125K MRR → Series A ready / sustainable business

---

## Go-to-Market Strategy (Vibe Coder Focus)

### Positioning & Messaging

**Core Positioning:**
> "The missing tool in your AI coding stack. Claude Code builds your product. We make sure it's the right product."

**Alternative Frames (A/B test these):**
- "You learned to code with AI. Now learn product management with AI."
- "Stop building products nobody wants. Validate before you code."
- "The AI PM copilot for builders who ship with AI."

**Value Propositions by Audience:**

**For Solo Builders:**
- Primary: "Don't waste 2 weeks building the wrong thing"
- Secondary: "Learn PM skills while validating your ideas"
- Emotional: "Ship products people actually want"

**For Indie Hackers:**
- Primary: "Find the ONE idea worth going all-in on"
- Secondary: "Stop the failed project cycle"
- Emotional: "Finally make money from your side projects"

**For Technical Founders:**
- Primary: "Validate before you build, launch with confidence"
- Secondary: "Show investors you understand your customer"
- Emotional: "Don't blow your one shot on the wrong idea"

### Distribution Channels

#### 1. Content Marketing (Primary Channel - 40% of signups)

**SEO-Optimized Content:**
- "How to validate a SaaS idea before building it" (high intent)
- "Customer discovery for technical founders" (educational)
- "JTBD framework explained for developers" (methodology)
- "Landing page testing with AI" (specific use case)
- "How to do customer interviews when you hate talking to people" (relatable pain)
- "Why your side projects keep failing (and how to fix it)" (emotional hook)

**Video Content (YouTube/TikTok):**
- "I validated 5 ideas in 5 days using AI" (case study)
- "The PM skills Claude Code can't teach you" (gap positioning)
- "Watch me validate a product idea in 30 minutes" (live demo)
- "How to know if your AI-built product will make money" (outcome-focused)
- "Stop building, start validating" (mindset shift)

**Format Strategy:**
- Long-form blog posts (1,500-3,000 words) for SEO
- Short-form videos (< 60 sec) for social virality
- Tutorial videos (5-10 min) for education
- Case study videos (3-5 min) for social proof

#### 2. Community-Led Growth (30% of signups)

**Where Vibe Coders Congregate:**

**Twitter/X:**
- Follow #buildinpublic, #indiehackers, #AI builders
- Reply to tweets about failed launches
- Share validation stories and data
- Weekly "Validate Your Idea Friday" threads
- Engage with AI tool creators (Cursor, v0, Replit teams)

**Reddit:**
- r/SideProject (370K members)
- r/Entrepreneur (3.5M members)
- r/SaaS (80K members)
- r/IMadeThis (150K members)
- r/EntrepreneurRideAlong (500K members)

**Strategy:** 
- Share case studies, not promotion
- Answer questions about validation
- Weekly AMAs about JTBD
- Sponsor top posts (Reddit ads)

**Discord/Slack Communities:**
- Claude AI Discord
- Cursor community
- Indie Hackers
- MakerPad
- BuildSpace alumni

**Strategy:**
- Be helpful first, sell second
- Offer free validations to active members
- Create #validation channel
- Weekly office hours

**Indie Hacker-Specific:**
- Active presence on IndieHackers.com
- Share monthly revenue/metrics transparently
- Write about building the product itself
- Offer to validate other makers' ideas

#### 3. Product-Led Growth (20% of signups)

**Virality Mechanisms:**

**Built-in Sharing:**
- Every validation report has "Share on Twitter" button
- Pre-filled tweet: "I validated my idea with @ProductName and discovered..."
- Social proof: "Join 1,000+ builders who validate before they build"
- Referral program: "Get 1 free month for every builder you refer"

**Public Validation Library:**
- Browse validated ideas (anonymized or with permission)
- See force profiles and outcomes
- "Most validated ideas this month"
- Social proof engine

**Integration Partnerships:**
- Cursor marketplace: "Validate before you code" button
- v0 templates: "Test your landing page copy"
- Replit templates: "Customer discovery for your app"
- Framer community: "Test your designs"

#### 4. Influencer/Creator Partnerships (10% of signups)

**Target Creators:**
- AI tool YouTubers (reviews, tutorials)
- Indie hacker influencers on Twitter
- #buildinpublic accounts with 10K+ followers
- Technical course creators

**Partnership Model:**
- Free Pro accounts for creators
- Co-create validation case studies
- Affiliate program (30% recurring commission)
- Sponsor their content ("This validation brought to you by...")

**Ideal Partners:**
- Pieter Levels (@levelsio) - indie hacker icon
- Marc Lou (@marc_louvion) - ships fast
- Danny Postma (@dannypostmaa) - solo builder
- Tony Dinh (@tdinh_me) - indie hacker educator

#### 5. Paid Acquisition (10% of signups, if needed)

**Only if organic isn't hitting targets. Channels:**

**Twitter Ads:**
- Target followers of @cursor_ai, @ClaudeAI, @getreplit
- Creative: Before/after validation stories
- Budget: $1,000/month test

**Google Search Ads:**
- Keywords: "how to validate SaaS idea", "customer discovery tool"
- High intent, low volume
- Budget: $500/month

**Reddit Ads:**
- Sponsored posts in r/SideProject, r/Entrepreneur
- Native format, educational content
- Budget: $500/month

**YouTube Ads:**
- Pre-roll on AI coding tutorials, indie hacker content
- 15-second hook: "Stop building products nobody wants"
- Budget: $1,000/month

### Conversion Strategy

**Free → Paid Triggers:**

**Trigger 1: After First Validation**
- Email: "You just validated your idea! Ready to validate more?"
- Offer: 20% off first month
- CTA: "Unlock unlimited validations"

**Trigger 2: After "Build" Decision**
- Email: "Great news - your idea is validated! Here's what's next..."
- Offer: Landing page testing guide + 50 synthetic tests
- CTA: "Test your messaging before launch"

**Trigger 3: After "Don't Build" Decision**
- Email: "We just saved you 2 weeks. Here's your next idea..."
- Offer: Free validation templates library
- CTA: "Validate your next idea"

**Trigger 4: Day 14 (Free Expiring)**
- Email: "Your free validation expires tomorrow"
- Social proof: "500 builders validate weekly with [Product]"
- CTA: "Continue validating for $49/month"

### Launch Sequence

**Week -4: Pre-Launch**
- Create waitlist landing page
- Post on Twitter: "Building something for vibe coders..."
- Collect emails from interested builders
- Goal: 200 waitlist signups

**Week -2: Beta Access**
- Email waitlist: "Early access available"
- Limit to 50 users
- Daily feedback calls
- Iterate rapidly

**Week 0: Public Launch**

**Day 1: ProductHunt**
- Launch at 12:01am PT
- Hunter: Find someone with PH credibility
- Messaging: "The AI PM copilot for vibe coders"
- Goal: Top 3 product of the day

**Day 1: Twitter Thread**
Founder thread structure:
```
1/ I've shipped 10 products with AI in the past year.

Total revenue: $200/month.

I kept building things nobody wanted.

Here's the tool I built to fix this problem:

[thread with validation examples, outcomes, beta results]
```

**Day 2-3: Reddit**
- Post on r/SideProject: "I built a tool to validate ideas before building"
- Include: Problem, solution, early results
- Genuine story, not promotional

**Day 4-5: Community Shares**
- Post in all relevant Discords/Slacks
- Ask beta users to share their results
- Encourage Twitter testimonials

**Week 2: Content Blitz**
- Publish 3 case studies
- 2 YouTube videos
- 5 Twitter threads
- Goal: Drive 500 signups

### Messaging by Channel

**Twitter/Social (Emotional):**
- "Stop building products nobody wants"
- "I almost wasted 2 weeks. This saved me."
- "You can code now. But do you know WHAT to code?"

**ProductHunt (Functional):**
- "AI PM copilot for builders using AI to code"
- "Validate ideas before you build. Test messaging before you launch."
- "JTBD methodology + synthetic users = 10x faster validation"

**Blog/SEO (Educational):**
- "The complete guide to validating a SaaS idea"
- "How Jobs-to-be-Done framework helps you build better products"
- "Customer discovery for developers who hate talking to people"

**Communities (Helpful):**
- "Happy to validate your idea for free to test the tool"
- "Here's what I learned validating 50 ideas..."
- "Quick guide: 5 questions that predict product success"

### Success Metrics (GTM)

**Month 1:**
- 500 signups
- 100 validated ideas
- 15 paying users
- 5 case studies published
- 50 Twitter mentions

**Month 3:**
- 2,000 signups
- 500 validated ideas
- 100 paying users
- 20 case studies
- 200 Twitter mentions
- 1 viral thread/video

**Month 6:**
- 5,000 signups
- 2,000 validated ideas
- 400 paying users
- $20K MRR
- Multiple creator partnerships
- Organic acquisition > 70%

### Competitive Moats (Why We'll Win Long-Term)

**1. Network Effects:**
- More validations → Better force models → More accurate predictions
- Community library of validated ideas
- Industry-specific force profiles improve over time

**2. Switching Costs:**
- Validated ideas stored in platform
- Historical interview data
- Team collaboration/shared knowledge

**3. Learning Curve:**
- Users get better at validation over time
- Platform learns their industry/style
- Personalized recommendations improve

**4. Community:**
- Validated builders become advocates
- Success stories attract more builders
- Self-reinforcing ecosystem

**5. Data Moat:**
- 10,000+ validated ideas = predictive database
- Force patterns by industry
- Success/failure correlation data
- Can't be replicated without similar scale

---

## Open Questions

### Product Questions

1. **Will vibe coders actually complete customer interviews?**
   - Hypothesis: Yes, if we make it dead simple and provide AI coaching
   - Risk: They might just want AI to validate without talking to anyone
   - Mitigation: Make synthetic testing require at least 3 real interviews first
   - Test: Track completion rate in Phase 0

2. **What's the right balance between education and automation?**
   - Too much education: Feels like homework, they'll quit
   - Too much automation: They don't learn, won't trust results
   - Hypothesis: Teach through doing, coach in real-time
   - Test: A/B test tutorial-heavy vs. coaching-heavy onboarding

3. **How many interviews is "enough" for validation?**
   - Re-Wired Group says 10-15 for full JTBD
   - Vibe coders want speed
   - Hypothesis: 3-5 gives 80% signal, good enough for go/no-go
   - Test: Compare 3-interview vs. 10-interview accuracy

4. **Will people accept "don't build" recommendations?**
   - Risk: Confirmation bias - they want to build regardless
   - Risk: Sunk cost fallacy - already started building
   - Hypothesis: Data + reasoning + pivot suggestions helps acceptance
   - Test: Track what % actually abandon vs. build anyway after "don't build"

5. **Should we focus B2B or B2C products first?**
   - B2B: Higher willingness to pay, clearer pain, but longer sales cycles
   - B2C: More volume, faster validation, but lower willingness to pay
   - Hypothesis: Start B2B SaaS (most vibe coders), expand to B2C later
   - Test: Track which product types get validated most

6. **How do we handle privacy of interview data?**
   - Some interviews contain sensitive competitive info
   - Community library requires sharing (but drives value)
   - Hypothesis: Anonymize by default, opt-in to share specific insights
   - Test: Ask beta users about privacy concerns

### Technical Questions

1. **Can we maintain < $1 cost per validation at scale?**
   - Interview analysis: ~3-5 LLM calls per interview
   - Synthetic testing: ~100 LLM calls per test
   - Hypothesis: Caching + prompt optimization keeps costs low
   - Risk: Costs balloon with scale
   - Mitigation: Consider fine-tuned models for high-volume tasks

2. **How accurate will synthetic agents be?**
   - Need > 70% correlation for credibility
   - Hypothesis: Real interviews → better agents → higher accuracy
   - Test: Phase 2 validation study with real A/B tests
   - Question: Is 70% enough? Or do we need 90%?

3. **What's the best tech stack for vibe coder market?**
   - React + Next.js: Fast development, good DX
   - Python + FastAPI: Better for AI/ML workloads
   - Hypothesis: Next.js for MVP speed, can migrate backend later
   - Test: Build prototype in both, measure development velocity

4. **How do we handle LLM API limits and rate limiting?**
   - Anthropic has rate limits
   - Hypothesis: Queue system + multiple providers (Claude + GPT-4)
   - Risk: Users hit limits during peak usage
   - Mitigation: Implement smart queuing and user expectations

5. **How do we version and track landing pages being tested?**
   - Pages change over time
   - Need reproducible results
   - Hypothesis: Screenshot + HTML snapshot + hash for change detection
   - Question: How much storage will this require at scale?

### Business Questions

1. **Is $49/month the right price point?**
   - Hypothesis: Impulse purchase territory for builders making money
   - Alternative: $29 (lower barrier) or $99 (premium positioning)
   - Test: A/B test pricing on landing page
   - Test: Ask beta users about willingness to pay

2. **Who is the economic buyer in team settings?**
   - Solo builder: They decide
   - Small team: Founder/CEO decides
   - Agency: Agency owner decides
   - Question: Do we need different packaging for each?

3. **What's the right free tier limit?**
   - Too generous: Nobody converts
   - Too restrictive: Can't see value
   - Hypothesis: 1 full validation (5 interviews + decision) is enough
   - Alternative: 3 interviews (see the process but not decision)
   - Test: A/B test free tier limits

4. **How do we compete with "just ask ChatGPT"?**
   - Risk: Builders think they can do this with generic ChatGPT
   - Hypothesis: Structured workflow + JTBD methodology + synthetic testing > generic prompts
   - Mitigation: Content showing ChatGPT limitations for validation
   - Test: Side-by-side comparison in marketing

5. **Should we partner with Bob Moesta / Re-Wired Group?**
   - Pro: Credibility, methodology validation, potential referrals
   - Con: Might compete with their consulting
   - Question: License methodology? Affiliate? Consulting partnership?
   - Action: Reach out after Phase 0 success

6. **What's the TAM (Total Addressable Market)?**
   - Vibe coders using AI to build: ~1M+ globally (estimate)
   - Indie hackers: ~500K active builders
   - Solo founders: ~2M people trying to start companies
   - Hypothesis: 10M+ potential users long-term
   - Question: What % will pay for validation vs. DIY?

### GTM Questions

1. **Will ProductHunt launch drive meaningful signups?**
   - Hypothesis: Top 3 product = 500-1,000 signups
   - Risk: Wrong audience (tire-kickers not builders)
   - Mitigation: Have strong Twitter strategy as backup
   - Test: Track PH signup conversion vs. other channels

2. **Can we build community before launch?**
   - Hypothesis: #buildinpublic on Twitter creates pre-launch interest
   - Strategy: Share building journey, early results, beta stories
   - Question: How much to share publicly vs. keep proprietary?

3. **Should we do outbound sales or purely PLG?**
   - PLG: Lower CAC, scalable, fits vibe coder mindset
   - Outbound: Faster initial traction, higher LTV customers
   - Hypothesis: PLG for solo/indie, outbound for agencies (Phase 3)
   - Test: Try pure PLG first, add sales if not hitting targets

4. **What's the viral coefficient / word-of-mouth potential?**
   - Hypothesis: Builders share wins publicly (#buildinpublic culture)
   - Mechanism: Share validation results on Twitter gets exposure
   - Question: What % of users will share publicly?
   - Target: 20% share results → 1.2x viral coefficient

5. **Should we sponsor indie hacker podcasts/newsletters?**
   - Options: Indie Hackers, MicroConf, Starter Story, etc.
   - Cost: $500-5,000 per sponsorship
   - Hypothesis: Targeted sponsorships > broad advertising
   - Question: Wait until validation or sponsor early?

### Validation & Learning Questions

1. **How do we measure "time saved"?**
   - Claim: "Save 2 weeks by not building wrong thing"
   - Question: How do we prove this?
   - Hypothesis: Survey users 30/60/90 days after "don't build"
   - Track: Did you build anyway? If not, what did you do instead?

2. **What % of validated ideas should succeed?**
   - We recommend "build" → Should most succeed?
   - Hypothesis: 40% of "build" recommendations make first dollar
   - Question: Is that good enough? Or should we be more selective?
   - Risk: False positives hurt credibility

3. **How do we know synthetic agents are working vs. just confirming bias?**
   - Risk: Agents just repeat what force profile says
   - Validation: Compare synthetic predictions to real A/B tests
   - Target: > 70% correlation
   - Question: What if correlation is < 50%? Kill feature or iterate?

### Future Direction Questions

1. **Should we expand beyond SaaS products?**
   - Could validate: Physical products, content ideas, service businesses
   - Hypothesis: Methodology works across categories
   - Question: Focus on SaaS first or go broad immediately?

2. **Is there a "LinkedIn for validated ideas" opportunity?**
   - Public profiles: "I validated 10 ideas, built 3, 1 is profitable"
   - Job market: "Looking for validated ideas to execute"
   - Question: Social network or tool? Both?

3. **Should we build an AI that generates ideas to validate?**
   - Instead of "validate my idea" → "generate ideas for me"
   - Based on: Market trends, force patterns, success data
   - Question: Feature or separate product?

4. **Could agencies/consultants white-label this?**
   - They charge clients $10-50K for validation
   - We charge $299/month
   - Opportunity: Partner program for agencies
   - Question: Does this cannibalize direct sales?

5. **Should we productize JTBD training?**
   - Course: "Customer Discovery Masterclass"
   - Certification: "Validated Product Manager"
   - Community: Annual conference
   - Question: Education business or product company? Both?

---

## Appendix

### Glossary of Terms

**MCP (Model Context Protocol):** A protocol that allows AI coding agents (Claude Code, Cursor, etc.) to query external context servers for additional information while coding. Our MCP server exposes validated customer insights so developers build products that match customer psychology.

**MCP Server:** A local or cloud service that responds to MCP protocol queries from AI coding agents. Our MCP server provides validated force profiles, customer language, positioning recommendations, and testing capabilities to developers building products.

**Context-Aware Coding:** The practice of AI coding agents using validated customer insights (via MCP) while generating code, ensuring every feature and word of copy matches validated customer psychology.

**Vibe Coder:** A builder who uses AI tools (Claude Code, Cursor, v0, Replit) to ship products without traditional coding skills or formal software engineering training. Characterized by: rapid shipping, learning-by-doing approach, active in #buildinpublic community.

**Idea Validation:** The process of testing a product concept before building it, using customer interviews to understand the Four Forces and determine switching likelihood.

**Jobs-to-be-Done (JTBD):** A framework for understanding customer motivation based on the progress they're trying to make, rather than their demographics or product features.

**Four Forces:** Bob Moesta's model for understanding switching behavior: PUSH (problems with current), PULL (attraction to new), ANXIETY (fears about new), HABIT (comfort with current).

**Switching Likelihood:** Calculated score that predicts if customers will switch from current solution to your product: (PUSH + PULL) > (ANXIETY + HABIT) = likely to switch.

**Struggling Moment:** A specific event where the customer's current solution failed them in a way that created emotional + practical consequences. These are trigger events for switching behavior and indicate real (not hypothetical) pain.

**Psychological Stage:** Where the customer is in their buying journey: Passive Looking (aware but not searching) → Active Looking (actively searching) → Deciding (comparing specific options) → Consuming (already bought, using product).

**Force Profile:** An aggregated psychological profile of an ICP showing average force strengths, common patterns, struggling moments, and typical alternatives considered.

**Synthetic User:** An AI-generated agent that embodies a specific force profile and can evaluate products/messaging through that psychological lens. Trained on real customer interview data.

**ICP (Ideal Customer Profile):** A description of the perfect customer for your product, typically including firmographics (company size, industry) and role (job title, responsibilities).

**Demand Side Sales:** Bob Moesta's approach to sales that focuses on understanding customer demand (why they buy, what triggers purchase) rather than supplier push (product features, benefits).

**Build vs. Don't Build Decision:** Clear recommendation based on force analysis: 🟢 Build (strong switching likelihood), 🟡 Pivot (mixed signals, better opportunity exists), or 🔴 Don't Build (forces won't support switching behavior).

**Force Coverage:** How well a landing page or messaging addresses each of the Four Forces. Measured as percentage (0-100%) for PUSH addressed, PULL created, ANXIETY reduced, HABIT overcome.

**Conversion Prediction:** Synthetic agent analysis that predicts what % of target users will convert (sign up, purchase) based on psychological force balance and messaging analysis.

**AI PM Copilot:** An AI system that teaches product management skills through real-time coaching during customer validation, rather than requiring upfront learning.

**Validated Context:** The customer insights (forces, language, positioning) that are validated through interviews and exposed via MCP to coding agents for context-aware building.

### Reference Materials

**Books:**
- "Demand-Side Sales 101" by Bob Moesta
- "The Jobs to be Done Playbook" by Jim Kalbach
- "Competing Against Luck" by Clayton Christensen
- "When Coffee and Kale Compete" by Alan Klement

**Websites:**
- The Re-Wired Group: https://therewiredgroup.com
- Bob Moesta's framework: https://www.christenseninstitute.org/jobs-to-be-done/

**Research Papers:**
- "Jobs to be Done: Theory to Practice" (Christensen Institute)
- "The Four Forces of Progress" (Bob Moesta)

### Competitive Research Summary

See earlier section for full competitive landscape. Key takeaways:
- No existing product combines JTBD + synthetic users
- Synthetic user platforms (Evidenza, Outset, Synthetic Users) focus on UX/research, not sales psychology
- JTBD tools are either consulting (expensive) or basic software (no AI)
- CRO tools optimize clicks, not psychological progression
- Market is ripe for a product that owns "psychological sales simulation"

---

**Document Status:** Living document, will be updated as product evolves  
**Next Review:** After Phase 0 completion  
**Feedback:** Share comments in project Slack channel or GitHub issues
