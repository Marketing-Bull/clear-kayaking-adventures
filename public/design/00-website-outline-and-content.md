# Clear Kayaking Adventures — Website Strategy, Content & Design Guide

> **What this document covers:**
> 1. Competitive positioning & differentiation strategy
> 2. Site map & information architecture
> 3. Homepage content (section-by-section, CMS-ready)
> 4. SEO plan — keyword map, meta tags, schema, AI search
> 5. Conversion plan
> 6. **All four homepage versions** — live site + 3 design concepts — with
>    detailed pros, cons, and a strategic recommendation
>
> The three design concept HTML files are in this same directory.
> The live site is deployed at [clear-kayaking-adventures.vercel.app](https://clear-kayaking-adventures.vercel.app).
> All four are viewable side-by-side at [`/showcase`](https://clear-kayaking-adventures.vercel.app/showcase).

---

## 1. The competitive reality (why positioning matters)

Clear Kayaking Adventures launches from the **Jupiter Inlet Lighthouse** — the
**same launch point** as **Get Up and Go Kayaking**, a 20+ location national
chain with **1,400+ five-star reviews**, a $1/booking conservation donation, and
a polished funnel. Most other Jupiter "clear kayak" search traffic is captured by
OTAs (Viator, Peek, TripAdvisor, Expedia, Marriott Activities) that skim 20–30%
commission and own the customer relationship.

**You cannot win on review count or ad budget. You win on what a franchise and an
OTA structurally can't be.** Everything below is built on that.

### The differentiation thesis (the one sentence the whole site sells)

> **Jupiter's local, naturalist-led clear kayak tours — more ways to paddle, more
> places to launch, and a real local guide who reads the water like a local,
> always in small groups.**

Five proof pillars that back it up (use these everywhere — nav, hero, cards, meta):

| Pillar | The claim | Why it beats the chain / OTA |
|---|---|---|
| **100% Clear Kayaks** | See the seagrass, rays and fish *beneath* you | Table stakes — match it, don't lead with it |
| **Local & independent** | Owner-operated by Jupiter locals, not a franchise | Chain can't claim it; book direct keeps it local |
| **Naturalist-led, educational** | Guides *teach* the Loxahatchee & Indian River Lagoon | "Educationally oriented guides" — your stated edge |
| **More tours, more launches** | Eco, Sunset, Pro Run, Indian River, Salt Fish, Private + Indian River **and** Loxahatchee | Chain runs one tour from one spot |
| **Small groups, book direct** | Max 10, real humans, best price direct | OTA adds fees; chain batches you |

### Conversion wedges to use as copy
- **"Book direct — no third-party fees, and your money stays with a local Jupiter family."**
- **Grand Opening urgency:** new location = limited early departures, founder's-season feel.
- **Trust without 1,400 reviews:** lead with *quality* quotes + Google star rating + named local guides + a satisfaction/weather-reschedule guarantee.

---

## 2. Site map (information architecture)

```
Home  (/)                         ← primary landing; targets "clear kayaking Jupiter"
Tours (/tours)                    ← hub page; links all tour detail pages
  ├─ Clear Kayak Eco Tour         (/tours/clear-kayak-eco-tour)   ← money-maker
  ├─ Sunset Clear Kayak Tour      (/tours/sunset-tour)
  ├─ Pro Run Tour                 (/tours/pro-run-tour)
  ├─ Indian River Tour            (/tours/indian-river-tour)
  ├─ Salt Fish Tour               (/tours/salt-fish-tour)
  └─ Private & Group Tours        (/tours/private-tour)           ← call-to-book
Where We Launch (/#launch)        ← Indian River Lagoon + Loxahatchee River
Gift Cards (/#gift)               ← "Gift An Adventure"
Reviews (/#reviews)
FAQ (/#faq)                       ← FAQPage schema; AI-search answers
Contact (/#contact)
/studio                           ← Sanity CMS (noindex)
/showcase                         ← design variation gallery (noindex)
```

**SEO content pages to add next (each targets a long-tail question = AI-search + organic):**
- `/blog/best-time-to-see-manatees-jupiter`  — "best time to see manatees in Jupiter"
- `/blog/what-is-a-clear-kayak`              — "what is a clear kayak"
- `/blog/kayaking-loxahatchee-river`         — "kayaking Loxahatchee River"
- `/jupiter-clear-kayak-tours` could be the canonical homepage target; keep the
  home page itself optimized for the head term.

---

## 3. Homepage outline + finalized content

Every section below is written to be pasted into Sanity. Headings are H2 unless
noted. Copy is mobile-first (short, scannable) and keyword-aware without stuffing.

### 0. Announcement bar
> 🎉 **GRAND OPENING — NEW JUPITER LAUNCH LOCATION** · Now paddling the
> Loxahatchee River *and* the Indian River Lagoon → **Book your spot**

### 1. Hero  *(H1)*
- **H1:** **Clear Kayak Tours in Jupiter, Florida**
- **Sub:** Glide over crystal-clear water in a 100% transparent kayak and watch
  manatees, sea turtles and rays drift beneath you. Small-group, naturalist-led
  eco tours on Jupiter's brightest waterways — beginner- and family-friendly.
- **Primary CTA:** **Book Your Clear Kayak Tour** → FareHarbor
- **Secondary CTA:** Explore Tours
- **Trust strip (under CTA):** ★★★★★ Loved on Google & FareHarbor · 🛶 100% Clear
  Kayaks · 👥 Small Groups (max 10) · 📍 Local Jupiter Guides
- *Why:* H1 owns the exact head keyword; subhead front-loads the unique payoff
  (see wildlife *through* the hull) + the differentiators in one breath.

### 2. Why Clear Kayaking Adventures? *(the standout section — 3 pillars)*
- **Heading:** Why paddle with a local — not a chain
- **Pillar 1 — 100% Clear Kayaks:** Our kayaks are completely transparent, so the
  reef, seagrass and wildlife below become part of the view — not just scenery
  you paddle past.
- **Pillar 2 — Local guides who teach, not just steer:** Every tour is led by an
  educationally-oriented Jupiter local who knows where the manatees feed and the
  turtles rest — and loves explaining why. You'll leave knowing the Loxahatchee
  and Indian River Lagoon, not just photographing them.
- **Pillar 3 — Small groups, beginner & family friendly:** Groups stay small (max
  10), so first-timers, kids (ages 3+) and families get real attention and a
  relaxed, unhurried paddle.
- **Closing line / book-direct wedge:** Independent and Jupiter-owned. Book direct
  and your money stays local — no national franchise, no third-party fees.

### 3. Clear Kayak Tours in Jupiter
- **Heading:** Choose your clear kayak adventure
- **Intro:** Every tour launches in a 100% clear tandem kayak with paddles, life
  vests, a dry bag, a safety whistle and a local guide — and every group is kept
  small (max 10).
- **Primary card — Clear Kayak Eco Tour** *(MOST POPULAR)*: Our signature 2-hour
  guided eco tour through Jupiter's mangrove shorelines and seagrass flats. The
  best of everything we do — and the easiest way to meet the manatees.
  → **Book This Tour** / Tour Details
- **Tours Upon Request** (small cards): **Sunset Tour (6 PM)** · **Pro Run Tour** ·
  **Indian River Tour** · **Salt Fish Tour** — "Want something different? These
  specialty tours run on request — give us a call and we'll set it up."
- **Private & Group card:** **Private & Group Tours** — "Give us a call and we'll
  create a custom clear-kayak experience for your group, party or church." →
  **Call to Book 561-427-4890**

### 4. What You May See On The Water
- **Heading:** What you may see beneath you
- **Intro:** A clear hull turns every paddle into a window. Here's who you might
  meet on Jupiter's waterways:
- **Grid (highlight manatees + sea turtles):** 🐊 **Manatees** (guest favorite) ·
  🐢 **Sea Turtles** (guest favorite) · Rays · Tropical fish · Pelicans & herons ·
  Ospreys
- **Disclaimer:** Wildlife is wild — sightings are never guaranteed. But our local
  guides know the season, the tide and the hotspots, and book the times that give
  you the best chance (morning tours are quietest).

### 5. How Clear Kayak Tours Work *(3 steps)*
- **Heading:** How it works — paddle in 3 easy steps
1. **Reserve online** — Pick your tour and time and book in under two minutes. No
   experience needed.
2. **Meet your guide** — Arrive at the Jupiter Inlet launch, meet your local
   naturalist and get a quick, friendly safety briefing.
3. **Paddle the clear water** — Glide out in your 100% clear kayak and let your
   guide show you Jupiter from the water up.

### 6. What Our Guests Are Saying *(reviews)*
- **Heading:** Loved by paddlers across Jupiter
- Pull Google rating + up to 5 reviews via Places API; supplement with standout
  FareHarbor quotes in the CMS. Show the **★ average + count**, named reviewers,
  and a "Read more on Google" link.
- *Quality-over-quantity note:* lead with the most specific, guide-naming reviews —
  that's how you compete with a 1,400-review chain.

### 7. Gift An Adventure
- **Heading:** Gift An Adventure
- **Copy:** If you're looking for a truly memorable gift, a Clear Kayaking
  Adventures gift card is the perfect choice. Give an unforgettable experience — a
  guided eco tour in a 100% clear kayak on Jupiter's beautiful waterways.
- **CTA:** Buy a Gift Card

### 8. Where We Launch
- **Heading:** Where we launch in Jupiter
- **Intro:** We paddle two of Jupiter's most beautiful waterways — pick the one
  that fits your tour.
- **Cards:** **Indian River Lagoon** (Jupiter Inlet / Lighthouse area — best for
  manatees & open water) · **Loxahatchee River** (Florida's only federally
  Wild & Scenic river — cypress, mangroves and calm water). Each with map + "Get
  Directions."

### 9. FAQ *(FAQPage schema + AI-search answers)*
Keep the migrated FAQs and add answer-style entries that win AI Overviews:
- **What is a clear kayak?** A clear kayak is a kayak with a fully transparent
  polycarbonate hull, so you can see the water and wildlife directly beneath you
  while you paddle.
- **Will I see manatees in Jupiter?** Often, yes — manatees are common in the
  Indian River Lagoon and around the Jupiter Inlet, especially in cooler months.
  Sightings aren't guaranteed, but our guides book the best times and spots.
- **What's the best time to see manatees and sea turtles in Jupiter?** Manatees
  are most reliable November–March in the warmer lagoon water; sea turtles are
  most active in the warmer months. Morning tours are calmest and best for
  wildlife.
- Plus the migrated set: what's included, minimum age (3; under 6 wear a life
  jacket), kayak safety, weight limit (tandem, 425 lb total / 250 lb per person),
  what to bring, no experience needed, tipping, 24-hour cancellation.

### 10. Contact
- **Heading:** Ready to paddle? Let's get you on the water.
- Phone 561-427-4890 (tap to call) · support@clearkayakingadventures.com · Hours
  Mon–Sun 8 AM–5 PM · launch areas · social · **Book Now**.

### 11. Footer
- Trust + nav: logo + tagline, nav links, tours list, contact, hours, social,
  prominent **Book Now**, launch areas, "Locally owned in Jupiter, FL,"
  copyright. Sticky Book Now on mobile.

---

## 4. SEO plan

### Keyword map
| Page | Primary | Secondary / supporting |
|---|---|---|
| Home | clear kayaking Jupiter / clear kayak Jupiter | clear kayak tour Jupiter FL, transparent kayak tour Jupiter, kayaking Jupiter Florida |
| Eco Tour | clear kayak eco tour Jupiter | manatee kayak tour Jupiter, Jupiter Inlet kayak tour |
| Sunset | sunset kayak tour Jupiter | evening kayak Jupiter |
| Indian River | Indian River Lagoon kayak tour | kayaking Indian River Jupiter |
| Loxahatchee/launch | Loxahatchee River kayaking | kayak Loxahatchee Jupiter |
| Blog (manatees) | best time to see manatees in Jupiter | manatee season Jupiter Florida |
| Blog (clear kayak) | what is a clear kayak | how do clear kayaks work |

### Titles & meta (<=60 / <=155 chars)
- **Home:** `Clear Kayaking Jupiter, FL | Clear Kayak Eco Tours` — *Glide over
  crystal-clear water in a 100% clear kayak. Small-group, local-guided eco tours
  in Jupiter — see manatees & sea turtles. Book direct today.*
- **Eco Tour:** `Clear Kayak Eco Tour in Jupiter, FL | Clear Kayaking Adventures`
  — *Our signature 2-hour guided eco tour in a 100% clear kayak. Manatees, sea
  turtles & mangroves on Jupiter's waterways. Small groups — book direct.*

### Schema (implemented)
`LocalBusiness` + `TouristAttraction` (NAP, geo, hours, `aggregateRating`,
`logo`, `hasOfferCatalog`, `knowsAbout`), `WebSite` (with `ReserveAction`),
`FAQPage`, `Review` (with `datePublished`, `publisher`, `worstRating`),
`TouristTrip` + `Offer` (per tour — ISO 8601 `duration`, `image`, `location`,
`maximumAttendeeCapacity`, `typicalAgeRange`), `ItemList` (tour catalog),
`BreadcrumbList`. Add `Event` for the Grand Opening if there's a launch date.

### AI search (AEO/GEO)
- Answer-style H2/H3 questions with a one-sentence direct answer first.
- Name local entities: Jupiter Inlet, Jupiter Lighthouse, Loxahatchee River,
  Indian River Lagoon, Intracoastal Waterway.
- Keep TTFB fast and static; concise, factual copy is what gets cited.

---

## 5. Conversion plan

- **One job per screen on mobile:** sticky **Book Now** always reachable.
- **Above the fold:** value + star rating + a single primary CTA.
- **Reduce risk:** 24-hour free cancellation, weather reschedule, "no experience
  needed," family-friendly (ages 3+) — state these near CTAs.
- **Book-direct nudge:** "Best price direct — no booking fees" beside the button.
- **Urgency, honestly:** Grand Opening / limited early departures / small groups
  fill fast.
- **Tap-to-call** for private/group and any hesitant mobile visitor.

---

## 6. The four homepage versions — detailed comparison

Four homepage versions exist. All use the same brand copy and positioning from
sections 1–5 above, but differ in layout, emphasis, and strategic bet. View them
all at [`/showcase`](https://clear-kayaking-adventures.vercel.app/showcase).

---

### Overview table

| Version | Name | File / URL | Strategic bet | Best channel |
|---|---|---|---|---|
| **Live** | Current (deployed) | `/` — Next.js App Router | Balanced — covers all sections, CMS-driven, image-ready | All channels — the production default |
| **V1** | Crystal | `variation-1-crystal.html` | Immersive, editorial, emotional — the wonder of seeing through water | Brand, social, top-of-funnel |
| **V2** | Book Direct | `variation-2-book-direct.html` | Conversion-first — rating + price + booking panel above fold | Paid traffic, high-intent search |
| **V3** | Local Guide | `variation-3-local-guide.html` | SEO/authority + education — naturalist story, answer blocks, FAQ, local entities | Organic, AI search, content marketing |

---

### Live Site (Current — Deployed on Vercel)

**What it is:** The production Next.js 16 + Tailwind v4 + Sanity CMS site. All
content is CMS-editable. Sections: Announcement Bar → Hero (viewfinder gradient
with slow-drift animation) → Trust Strip → 3 Pillars → Tours (primary card +
upon-request grid + private CTA) → Wildlife (image cards with gradient overlays)
→ How It Works (3 numbered steps) → Reviews (star cards) → Gift Card (visual
gift card mockup) → FAQ (animated accordion) → Launch Map → Contact → Footer.
Sticky mobile booking bar on all pages.

**Pros:**
- **Production-ready.** Full Next.js App Router, server components, ISR, image
  optimization, Turbopack dev — everything works, deploys, and is fast.
- **CMS-driven.** Every piece of content is editable via Sanity Studio at `/studio`
  without touching code. Three-layer fallback (sample → Sanity → Google reviews)
  means it never shows blank content.
- **Complete section coverage.** Has every section from the content plan — no gaps.
  Includes Gift Card, Contact, and Launch Map that the concept variations omit.
- **Full SEO stack.** `generateMetadata()`, dynamic sitemap, JSON-LD (7 schema
  types), structured data for every tour, FAQ schema, aggregate ratings.
- **Tour detail pages.** Each tour has its own `/tours/[slug]` page with metadata
  and schema — the variations are homepage-only.
- **Scalable.** Adding new tours, wildlife items, FAQs, or locations is a CMS
  entry — no HTML editing needed.
- **Responsive.** Tailwind v4 mobile-first, tested across breakpoints. Sticky
  mobile booking bar ensures the CTA is always reachable.

**Cons:**
- **Gradient placeholders.** Real photography is not yet integrated into the Next.js
  components (images from `codex/add-authentic-tour-photos` are in the repo but
  not yet wired into the image slots). The gradient fallbacks are on-brand but
  lack the emotional pull of real water/wildlife imagery.
- **Conservative hero.** The hero uses a gradient background with a slow CSS drift
  animation. Effective but not as emotionally arresting as a full-bleed photo hero
  would be (planned for when photography is finalized).
- **No above-fold pricing.** Price is intentionally hidden until set in Sanity, but
  even then it shows on the tour card — not in the hero. Paid-traffic visitors may
  want to see price + booking immediately.
- **No explicit "Why book direct" section.** The book-direct wedge is woven through
  copy but doesn't get its own comparison table like V2 does.

**Best for:** The default production site for all traffic channels. Solid across
the board but strongest once real photography and CMS content are populated.

---

### Variation 1: Crystal

**What it is:** An immersive, editorial layout with a full-bleed cinematic hero
(92vh, gradient sky + animated water ripple), a "viewfinder" tagline
("See Jupiter from *inside* the water"), editorial alternating-row pillars, a
large featured tour card, and a dark-background wildlife section. Uses Fraunces
(a variable optical-size serif) for headings.

**Sections:** Announcement → Hero → Statement → Pillars (alternating rows) →
Tours (featured card + mini cards) → Wildlife (dark) → How It Works (3 steps) →
Reviews → CTA Band → Footer.

**Pros:**
- **The strongest emotional hook.** The huge serif heading + cinematic hero creates
  a mood that makes people *want* to be on the water. Best for scroll-stopping on
  social or display ads.
- **Editorial pillar layout.** Alternating image/text rows with large photo areas
  give each differentiator room to breathe. When real photography arrives, this
  layout will show it off better than any other version.
- **The statement section** ("A clear hull turns every paddle into a window") is a
  bold, memorable line that positions the brand without sounding like ad copy.
- **Dark wildlife section** is atmospheric and immersive — feels like being
  underwater.
- **Serif display font (Fraunces)** gives the brand an upscale, editorial feel that
  differentiates it from the chain's generic sans-serif.
- **Best hero for photography.** When real images are added, the 92vh hero with
  gradient overlay will look spectacular.

**Cons:**
- **Slowest path to conversion.** The hero has no price, no star rating inline, and
  the statement section is a full viewport of copy before you reach tours. Users
  from paid ads or high-intent search ("book clear kayak Jupiter") have to scroll
  further to take action.
- **No booking panel or inline price.** Every conversion requires clicking through
  to FareHarbor — no "price → date → book" shortcut visible on the page.
- **Missing sections.** No Gift Card, no Contact section, no Launch Map with
  directions, no FAQ. Visitors who scroll to the bottom hit a CTA band and a
  footer — no safety net for comparison shoppers who want details before booking.
- **No "book direct" wedge.** Doesn't address the chain/OTA comparison directly.
  A visitor who's also looking at Get Up and Go Kayaking won't find a reason here
  to pick Clear Kayaking over the chain beyond the emotional hook.
- **Pillar photos are gradients.** The editorial layout *needs* real images to
  work — without them, the large gradient thumbnails look like placeholder art.
- **Static HTML.** No CMS, no dynamic content. Any copy change requires editing the
  HTML file directly.

**Best for:** Top-of-funnel brand awareness, social media / Instagram traffic,
display ads, "dreaming about a vacation" visitors. Strong as a hero photography
treatment to adopt into the live site.

---

### Variation 2: Book Direct

**What it is:** A conversion-first layout with a split hero (value prop left,
booking card right), a "Why book direct vs. OTAs" comparison table, a pricing
grid with visible prices, a utility bar ("Rated 5.0 · Best price when you book
direct"), and an orange final CTA. Uses Poppins (a geometric sans-serif) for a
clean, transactional feel.

**Sections:** Utility Bar → Announcement → Hero (split: copy + booking card) →
Trust Logos → Why Book Direct (us vs. them comparison) → Tours (pricing grid) →
How It Works (3 step cards) → Wildlife (compact chip strip) → Reviews (dark) →
Final CTA → Footer.

**Pros:**
- **Fastest path to conversion.** The booking card with price, date picker
  placeholder, and a "Book Your Tour →" button is visible above the fold — no
  scrolling needed. A high-intent visitor ("clear kayak tour Jupiter book") can
  convert in seconds.
- **Price is visible.** "$59 / paddler" is above the fold. This dramatically
  reduces friction for comparison shoppers — they don't have to click into a tour
  page to learn the price.
- **The "Why Book Direct" section is the strongest differentiation tool.** A
  side-by-side comparison ("us vs. OTAs & national chains") directly addresses the
  competitive reality: zero third-party fees, small groups, local guides, 6 tour
  types. No other version makes this argument so explicitly.
- **Utility bar + inline rating.** "Rated 5.0 by Jupiter paddlers" is the very
  first thing visible — before the header — establishing trust before the user
  even sees the brand name.
- **Tour pricing grid.** All six tours shown with prices and individual "Book This
  Tour" / "Request Dates" buttons. The primary tour gets a "Most Popular" flag
  and a distinct card style. Easy to compare without leaving the homepage.
- **Phone number in the header nav.** Tap-to-call is visible on desktop, not just
  buried in the footer. Important for mobile visitors who are ready to book but
  prefer a human.
- **Compact wildlife section.** The chip-strip approach ("🐊 Manatees · 🐢 Sea
  Turtles · 🐠 Rays & Fish…") communicates the wildlife angle without a heavy
  section — appropriate for a conversion-focused page where you don't want to
  slow the scroll toward booking.

**Cons:**
- **Sacrifices emotional depth.** The hero has no imagery — just a gradient with
  copy and a card. Compared to Crystal's cinematic hero, this feels transactional.
  A first-time visitor who doesn't know what clear kayaking *is* doesn't get the
  "wow" moment.
- **Wildlife section is too thin.** The chip strip mentions species but doesn't
  describe them, show images, or include the guest-favorite highlights. A visitor
  deciding between Clear Kayaking Adventures and Get Up and Go Kayaking won't find
  enough wildlife detail here to differentiate.
- **No FAQ.** Comparison shoppers and AI-search bots both want FAQ content. Missing
  it hurts both conversion (what's the cancellation policy? do I need experience?)
  and SEO (no FAQPage schema, no answer-style content for AI Overviews).
- **No Gift Card section.** Misses a secondary revenue stream.
- **No Launch Map.** "Where do you launch?" is a common pre-booking question,
  especially for Jupiter visitors who need directions.
- **The "us vs. them" copy is aggressive.** Lines like "Rotating franchise staff"
  and "Call-center support" are shots at Get Up and Go. Works for direct visitors
  who are comparison-shopping, but could feel off-putting for brand-new visitors
  who haven't heard of the competitor.
- **Static HTML.** Same limitation as all variations — no CMS, no dynamic content.

**Best for:** Paid search (Google Ads for "clear kayak tour Jupiter"), paid
social retargeting, returning visitors, any traffic where the user already knows
what clear kayaking is and is deciding *where* to book.

---

### Variation 3: Local Guide

**What it is:** An SEO-and-authority layout built around the naturalist-guide
story. Features a warm earth-tone palette (moss green + sand), a "What is a clear
kayak?" answer block for AI search (AEO), a full guide authority section with
credentials, a 6-item wildlife education grid, a 2-card launch map, a full FAQ
accordion, and a review section. Uses Spectral (an editorial serif) for headings.

**Sections:** Announcement → Hero (split: copy + fact card) → Answer Block (AEO)
→ Guide Authority → Wildlife (education grid) → Where We Launch (2 cards) →
Tours (dark, list-style) → FAQ (6 items) → Reviews → Final CTA → Footer.

**Pros:**
- **Strongest for organic search and AI.** The answer block ("What is a clear
  kayak tour in Jupiter?") is formatted as a direct answer — the exact shape that
  Google AI Overviews and ChatGPT citations pull from. Combined with the FAQ
  accordion (6 answer-style questions) and the rich local entity naming (Indian
  River Lagoon, Loxahatchee River, Jupiter Inlet Lighthouse), this page has the
  most content surface area for long-tail and question-based search.
- **Guide authority section is unique.** No other version tells the story of *who*
  the guide is and *why* that matters. "A guide who reads the water like a local"
  is the most compelling argument against a chain's rotating staff. This section
  alone could justify a visitor choosing Clear Kayaking Adventures.
- **Full FAQ.** Six questions with real, detailed answers. Generates FAQPage schema,
  answers pre-booking concerns (cancellation, age limits, experience needed,
  launch locations), and provides AI-search fodder.
- **Launch map with two cards.** Indian River Lagoon and Loxahatchee River each get
  a card with a description and a "Get Directions" link. Answers the "where do
  you launch?" question that the other variations leave to the footer.
- **Warm, earthy palette.** The moss/sand/cream color system feels educational and
  naturalistic — not "tourist trap." Matches the brand's educational positioning.
- **Wildlife education grid.** Includes seasonal detail ("most reliable
  Nov–March"), specific species (greens and loggerheads, not just "sea turtles"),
  and ecosystem context (seagrass & mangroves). Doubles as educational content
  for AI search.
- **Fact card in the hero.** Duration, launch points, group size, ages, guide type
  — all visible above the fold without cluttering the hero copy.

**Cons:**
- **Weakest conversion pressure.** The page has no inline booking card, no visible
  price, and the primary CTA ("Book a Clear Kayak Tour") is a standard button
  that links to FareHarbor. High-intent visitors have to scroll past 4+ sections
  to reach the tours list, which is a minimal dark list with text links — no
  images, no prices, no prominent booking buttons.
- **Tours section is underpowered.** Compared to the live site's rich tour cards
  (images, descriptions, durations, individual CTAs) or V2's pricing grid, V3's
  tour list is a simple dark grid of titles + one-liners. A visitor trying to
  choose between tours doesn't have enough information here.
- **No Gift Card section.** Same gap as V2.
- **The guide section needs real content.** Right now the "photo" is a gradient
  with a compass emoji. The section's persuasive power depends entirely on a real
  photo and a real guide bio — without those, it's the weakest part of the page.
- **Longer page.** More sections = more scrolling before reaching the booking CTA.
  Mobile visitors on slow connections or short attention spans may bounce before
  reaching the tours.
- **Earth-tone palette is a departure.** The moss/sand scheme differs from the
  ocean-blue brand palette used in the live site, V1, and V2. If the brand
  settles on blue, this variation needs a re-skin.
- **Static HTML.** No CMS, no dynamic content.

**Best for:** Organic search (Google, Bing), AI search (Google AI Overviews,
ChatGPT, Perplexity), content marketing, visitors who are researching and
comparing, and anyone who values the educational/local angle.

---

### Side-by-side feature comparison

| Feature | Live Site | V1 Crystal | V2 Book Direct | V3 Local Guide |
|---|:---:|:---:|:---:|:---:|
| **CMS-editable** | Yes (Sanity) | No (HTML) | No (HTML) | No (HTML) |
| **Tour detail pages** | Yes (`/tours/[slug]`) | No | No | No |
| **Dynamic reviews** | Yes (Google API) | No (static) | No (static) | No (static) |
| **JSON-LD schema** | 7 types | None | None | None |
| **Responsive/mobile** | Yes (Tailwind v4) | Yes (media queries) | Yes (media queries) | Yes (media queries) |
| **Sticky mobile CTA** | Yes | Yes | Yes (split: Call + Book) | Yes |
| **Hero style** | Gradient + drift anim | 92vh cinematic + ripple | Split: copy + booking card | Split: copy + fact card |
| **Price visible** | On tour cards | No | Above fold ($59) | No |
| **Booking card/panel** | No (button → FareHarbor) | No | Yes (above fold) | No |
| **Star rating above fold** | Yes (in hero badge) | Yes (in trust strip) | Yes (utility bar + hero) | No |
| **"Why book direct"** | Woven into copy | No | Yes (comparison table) | No |
| **Guide authority section** | No | No | No | Yes |
| **AEO answer block** | No | No | No | Yes |
| **Wildlife depth** | 6 image cards + disclaimer | 6 dark cards + disclaimer | Chip strip (names only) | 6 education cards + seasonal detail |
| **How It Works** | 3 steps | 3 steps | 3 steps | No (fact card instead) |
| **FAQ** | Yes (animated accordion) | No | No | Yes (6 items) |
| **Gift Card** | Yes (visual mockup) | No | No | No |
| **Launch Map** | Yes (2 locations) | Footer only | No | Yes (2 cards) |
| **Contact section** | Yes | No | No | No |

---

## 7. Strategic recommendation

### Ship a hybrid

No single version is complete on its own. The live site has the infrastructure and
the most sections, but lacks the conversion punch of V2 and the SEO depth of V3.
The recommended production homepage takes the best of each:

| Layer | Source | What to take |
|---|---|---|
| **Above the fold** | **V2 (Book Direct)** | Rating badge + price + booking card or strong book-direct CTA in the hero. Utility bar with the 5.0 rating. |
| **Guide story** | **V3 (Local Guide)** | The "guide who reads the water like a local" authority section — once a real guide photo and bio exist. |
| **Hero photography** | **V1 (Crystal)** | When real tour photos are ready, use V1's full-bleed cinematic hero treatment with the gradient overlay. |
| **AEO answer block** | **V3 (Local Guide)** | "What is a clear kayak tour in Jupiter?" as a featured answer below the hero — feeds AI search. |
| **"Why book direct"** | **V2 (Book Direct)** | The us-vs-them comparison table, softened slightly for brand-first visitors. |
| **Wildlife section** | **V3 (Local Guide)** | Richer educational cards with seasonal detail, not just names. |
| **FAQ** | **V3 (Local Guide)** | The 6-item accordion with answer-style content for AI search. |
| **Tours, Gift Card, Launch Map, Contact** | **Live Site** | Keep the existing CMS-driven sections. |
| **Infrastructure** | **Live Site** | Keep Next.js + Sanity + JSON-LD + ISR + image optimization. |

### Priority order for merging

1. **Add an AEO answer block** to the live site below the hero — 1 component, high
   SEO impact.
2. **Wire in real photography** from `public/images/` to hero, tour cards, and
   wildlife cards.
3. **Add a "Why Book Direct" section** adapted from V2 — surfaces the competitive
   argument explicitly.
4. **Add the guide authority section** from V3 — once a real photo/bio is available.
5. **Move the star rating** to a utility bar or hero badge (V2-style) so it's the
   first thing visible.
6. **Show price above the fold** — either in the hero or a sticky booking bar.

---

## Sources
- [Get Up and Go Kayaking — Jupiter](https://getupandgokayaking.com/locations/florida/jupiter/)
- [Get Up and Go Kayaking (chain)](https://getupandgokayaking.com/)
- [Current Clear Kayaking Adventures site](https://www.clearkayakingadventures.com/)
- [Clear Kayak Eco Tour — Viator](https://www.viator.com/tours/West-Palm-Beach/Clear-Kayak-Tours-in-Jupiter/d24204-144248P1)
- [Clear Kayak Eco Tour — Peek](https://www.peek.com/jupiter-florida/r0dywyd/clear-kayak-eco-tour-in-jupiter-florida-a-marine-wildlife-encounter-in-clear-kayaks/a0xed6n6)
- [Guided Clear Kayak Eco-Tour of Jupiter — Tripadvisor](https://www.tripadvisor.com/AttractionProductReview-g34335-d18271896-Guided_Clear_Kayak_Eco_Tour_of_Jupiter-Jupiter_Florida.html)
