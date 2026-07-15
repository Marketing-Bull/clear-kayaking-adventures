import type { SiteContent } from "./types";

const FAREHARBOR_URL =
  "https://fareharbor.com/embeds/book/clearkayakingadventures/items/?full-items=yes";

export const sampleContent: SiteContent = {
  site: {
    name: "Clear Kayaking Adventures",
    legalName: "Clear Kayaking Adventures",
    phone: "561-427-4890",
    email: "support@clearkayakingadventures.com",
    fareHarborUrl: FAREHARBOR_URL,
    googlePlaceId: "",
    priceRange: "$$",
    geo: { lat: 26.9426, lng: -80.0836 },
    hours: "Open daily, 8:00 AM – 5:00 PM",
    social: [
      { platform: "facebook", url: "https://www.facebook.com/clearkayakingadventures" },
      { platform: "instagram", url: "https://www.instagram.com/clearkayakingadventure" },
    ],
    seoTitle: "Clear Kayak Tours in Jupiter, FL | Clear Kayaking Adventures",
    seoDescription:
      "Book clear kayak tours in Jupiter, FL with local guides, small groups, and 100% transparent kayaks. Paddle Indian River and Loxahatchee waterways, spot wildlife, and reserve online.",
    siteUrl: "https://www.clearkayakingadventures.com",
  },

  announcement: {
    enabled: true,
    text: "GRAND OPENING — NEW LOCATION",
  },

  hero: {
    heading: "See Jupiter from inside the water.",
    subheading:
      "Paddle a 100% clear kayak over seagrass, rays, and resting sea turtles. Small-group eco tours led by local Jupiter guides.",
    ctaLabel: "Book Your Clear Kayak Tour",
    image: {
      src: "/images/tours/clear-kayak-guests.webp",
      alt: "Guests paddling a transparent kayak beside Jupiter mangroves",
    },
    variant: "water",
  },

  introStatement: {
    eyebrow: "Clear Kayaking in Jupiter, Florida",
    heading: "A clear hull turns every paddle into a window.",
    body: "Most kayak tours show you the surface. Ours show you what's underneath it — the bright water, the seagrass flats, and the manatees and turtles that call Jupiter's waterways home. Locally guided, endlessly curious, and small by design.",
  },

  pillarsSection: {
    heading: "Why Clear Kayaking Adventures?",
    pillars: [
      {
        eyebrow: "100% Clear Kayaks",
        title: "100% Clear Kayaks",
        body: "See straight down to the seagrass, fish, and wildlife below you. Our transparent, impact-resistant kayaks turn an ordinary paddle into an underwater window.",
        icon: "kayak",
        image: {
          src: "/images/tours/salt-fish-clear-kayak.webp",
          alt: "View through a clear kayak over Jupiter's saltwater flats",
        },
      },
      {
        eyebrow: "Local knowledge",
        title: "Small Groups & Local Guides",
        body: "Our guides are educationally oriented and Jupiter locals — they know the hotspots and share the stories of the ecosystem while keeping groups small and personal.",
        icon: "guide",
        image: {
          src: "/images/tours/mangrove-paddle.webp",
          alt: "Local-guided clear kayak tour approaching Jupiter mangroves",
        },
      },
      {
        eyebrow: "Small & friendly",
        title: "Beginner & Family Friendly",
        body: "No experience needed. Our stable tandem kayaks are easy to paddle and welcome ages 3 and up, so the whole family can join the adventure.",
        icon: "family",
        image: {
          src: "/images/tours/private-clear-kayak-tour.webp",
          alt: "Family clear kayak tour paddling beside Jupiter mangroves",
        },
      },
    ],
  },

  toursSection: {
    heading: "Clear Kayak Tours in Jupiter",
    intro:
      "Every tour launches in a 100% clear kayak with paddles, life vests, a dry bag, a safety whistle, and a local guide. Groups are kept small with a maximum of 10 guests.",
  },

  tours: [
    {
      slug: "clear-kayak-eco-tour",
      name: "Clear Kayak Eco Tour",
      category: "primary",
      shortDescription:
        "Our signature guided eco tour — explore Jupiter's mangrove shorelines and seagrass flats in a crystal-clear kayak.",
      description: [
        "Our most popular adventure and the perfect introduction to clear kayaking in Jupiter. Paddle calm, protected waterways in a 100% transparent kayak while your local guide points out wildlife and shares the natural history of the Jupiter Inlet ecosystem.",
        "Beginner-paced and family friendly, this tour glides past mangrove tunnels and seagrass beds where manatees, sea turtles, rays, and tropical fish are often spotted just below your hull.",
      ],
      durationMinutes: 105,
      whatsIncluded: [
        "100% clear tandem kayak",
        "Paddles & life vests",
        "Dry bag & safety whistle",
        "Local, educationally oriented guide",
      ],
      image: {
        src: "/images/tours/clear-kayak-guests.webp",
        alt: "Guided clear kayak eco tour paddling past Jupiter mangroves",
      },
      featured: true,
    },
    {
      slug: "sunset-tour",
      name: "Sunset Tour",
      category: "upon-request",
      shortDescription: "Paddle into golden hour on a calm evening tour that launches at 6:00 PM.",
      description: [
        "Watch the sky light up over the water on our 6:00 PM sunset paddle. The same crystal-clear kayaks, the calmest water of the day, and unforgettable Florida color.",
      ],
      startTime: "6:00 PM",
      whatsIncluded: ["100% clear tandem kayak", "Paddles & life vests", "Dry bag & safety whistle", "Local guide"],
      image: {
        src: "/images/tours/sunset-clear-kayak.webp",
        alt: "View from a clear kayak across Jupiter's water at sunset",
      },
      bookByPhone: true,
    },
    {
      slug: "pro-run-tour",
      name: "Pro Run Tour",
      category: "upon-request",
      shortDescription: "A longer, faster-paced paddle for experienced kayakers who want more water and more distance.",
      description: [
        "Built for confident paddlers, the Pro Run covers more distance at a quicker pace. Stretch your arms, cover more of Jupiter's waterways, and still enjoy the clear-kayak view below.",
      ],
      whatsIncluded: ["100% clear tandem kayak", "Paddles & life vests", "Dry bag & safety whistle", "Local guide"],
      image: {
        src: "/images/tours/clear-kayaks-launch.webp",
        alt: "Two transparent kayaks prepared at the water's edge",
      },
      bookByPhone: true,
    },
    {
      slug: "indian-river-tour",
      name: "Indian River Tour",
      category: "upon-request",
      shortDescription: "Explore the rich Indian River Lagoon — one of the most biodiverse estuaries in North America.",
      description: [
        "Paddle the legendary Indian River Lagoon, home to manatees, dolphins, wading birds, and seagrass meadows. A clear-kayak tour through one of the most diverse ecosystems in the country.",
      ],
      whatsIncluded: ["100% clear tandem kayak", "Paddles & life vests", "Dry bag & safety whistle", "Local guide"],
      image: {
        src: "/images/tours/mangrove-paddle.webp",
        alt: "View from a transparent kayak approaching mangroves",
      },
      bookByPhone: true,
    },
    {
      slug: "salt-fish-tour",
      name: "Salt Fish Tour",
      category: "upon-request",
      shortDescription: "A wildlife- and fish-focused paddle through Jupiter's saltwater flats and channels.",
      description: [
        "Drift over saltwater flats where snook, tarpon, rays, and schools of baitfish move beneath your clear hull. A favorite for guests who love watching marine life up close.",
      ],
      whatsIncluded: ["100% clear tandem kayak", "Paddles & life vests", "Dry bag & safety whistle", "Local guide"],
      image: {
        src: "/images/tours/salt-fish-clear-kayak.webp",
        alt: "Clear kayak gliding over fish and a ray on Jupiter saltwater flats",
      },
      bookByPhone: true,
    },
    {
      slug: "private-tour",
      name: "Private Tour",
      category: "private",
      shortDescription:
        "Give us a call and we'll create a customized experience for your group, party, or church.",
      description: [
        "Celebrating something special? Private tours are fully customizable for birthdays, proposals, team outings, group parties, and church groups. Give us a call and we'll build the perfect clear-kayak experience for your group.",
      ],
      whatsIncluded: ["Dedicated private guide", "100% clear tandem kayaks", "Flexible scheduling", "Custom group experience"],
      image: {
        src: "/images/tours/private-clear-kayak-tour.webp",
        alt: "Private family clear kayak tour paddling beside Jupiter mangroves",
      },
      bookByPhone: true,
    },
  ],

  wildlifeSection: {
    heading: "What You May See On The Water",
    intro:
      "Jupiter's clear, shallow waterways are bursting with life — and a transparent kayak gives you a front-row, underwater view.",
    disclaimer:
      "Wildlife is wild, so sightings are never guaranteed — but our local guides know the seasonal hotspots and do everything they can to help you spot something special.",
  },

  wildlife: [
    {
      name: "Manatees",
      blurb:
        "Gentle giants frequent the calm, shallow canals and Intracoastal waters of Jupiter, especially in the cooler months. Spotting one beneath a clear kayak is unforgettable.",
      image: {
        src: "/images/wildlife/manatee.webp",
        alt: "Manatee swimming beneath clear water in Jupiter",
      },
      highlight: true,
    },
    {
      name: "Sea Turtles",
      blurb:
        "Jupiter is a sea turtle haven. Keep your eyes on the seagrass beds — greens and loggerheads glide through these waters and surface for air.",
      image: {
        src: "/images/wildlife/sea-turtle.webp",
        alt: "Sea turtle swimming over seagrass near Jupiter",
      },
      highlight: true,
    },
    {
      name: "Rays",
      blurb: "Watch eagle rays and stingrays soar across the sandy bottom right below your clear hull.",
      image: {
        src: "/images/wildlife/ray.webp",
        alt: "Ray gliding over sandy bottom in clear Jupiter water",
      },
    },
    {
      name: "Tropical Fish",
      blurb: "Snook, mullet, needlefish, and colorful schools dart through the seagrass and mangrove roots.",
      image: {
        src: "/images/wildlife/tropical-fish.webp",
        alt: "School of coastal fish swimming through Jupiter seagrass",
      },
    },
    {
      name: "Coastal Birds",
      blurb: "Pelicans, herons, ospreys, and the occasional owl patrol the mangroves and shorelines.",
      image: {
        src: "/images/wildlife/coastal-birds.webp",
        alt: "Pelican and great blue heron along a Jupiter mangrove shoreline",
      },
    },
    {
      name: "Mangrove Tunnels",
      blurb: "Paddle through shady mangrove tunnels — the nurseries of the lagoon and home to countless species.",
      image: {
        src: "/images/wildlife/mangrove-tunnel.webp",
        alt: "Shaded mangrove path opening onto Jupiter's blue water",
      },
    },
  ],

  howItWorksSection: {
    heading: "How Clear Kayak Tours Work",
    intro: "Booking your adventure is easy. Here's what to expect from reservation to paddle.",
    steps: [
      {
        title: "1. Reserve Online",
        description:
          "Pick your date and time and book in seconds. You'll get an instant confirmation email with everything you need to know before you arrive.",
      },
      {
        title: "2. Arrive & Check In",
        description:
          "Plan to arrive about 20 minutes early to complete your waiver, meet your guide, and enjoy a quick safety briefing and paddling primer.",
      },
      {
        title: "3. Paddle & Explore",
        description:
          "Slip into your 100% clear kayak and follow your local guide through Jupiter's waterways — with plenty of stops to spot wildlife and take photos.",
      },
    ],
  },

  reviewsSection: {
    heading: "What Our Guests Are Saying",
    subheading: "Real reviews from paddlers on Google and FareHarbor.",
  },

  reviews: [
    {
      author: "Jessica M.",
      rating: 5,
      text: "Absolutely magical! The water was so clear we watched a sea turtle glide right under our kayak. Our guide was so knowledgeable and made it fun for the kids.",
      source: "google",
    },
    {
      author: "Daniel R.",
      rating: 5,
      text: "Best thing we did in Jupiter. Small group, gorgeous water, and we saw a manatee! Highly recommend the eco tour.",
      source: "google",
    },
    {
      author: "The Alvarez Family",
      rating: 5,
      text: "Perfect mix of relaxing and adventurous. First time kayaking and it could not have been easier. The clear kayaks are a game changer.",
      source: "fareharbor",
    },
    {
      author: "Megan T.",
      rating: 5,
      text: "Our guide clearly loves the ecosystem and taught us so much. Felt like a private tour even though it was a group. Booking again!",
      source: "google",
    },
  ],

  giftCard: {
    heading: "Gift An Adventure",
    body: "If you're looking for a truly memorable gift, a Clear Kayaking Adventures gift card is the perfect choice. Give an unforgettable experience — a guided eco tour in a 100% clear kayak on Jupiter's beautiful waterways.",
    ctaLabel: "Purchase a Gift Card",
    ctaUrl: FAREHARBOR_URL,
    image: {
      src: "/images/tours/clear-kayak-guests.webp",
      alt: "Clear kayak adventure paddling beside Jupiter mangroves",
    },
  },

  faqSection: {
    heading: "Clear Kayak Tour FAQ | Jupiter, FL",
    intro: "Everything you need to know before your clear kayak tour, adapted from Clear Kayaking Adventures' live FAQ.",
  },

  faqs: [
    {
      question: "What is a clear kayak?",
      answer:
        "A clear kayak is a transparent kayak made from polycarbonate — the same impact-resistant material used in bulletproof glass. The see-through hull lets you watch the seagrass, fish, and wildlife in the water directly beneath you.",
    },
    {
      question: "What does the clear kayak tour include?",
      answer:
        "Every tour includes a 100% clear kayak, paddles, a dry bag, life vests, a safety whistle, and one of our local tour guides. Groups are doubled up and may be placed with the tour guide or as a single depending on availability. Each tour group has no more than 10 guests, and wildlife viewing is available but not guaranteed.",
    },
    {
      question: "Will I see manatees or sea turtles?",
      answer:
        "Often, yes! Manatees frequent Jupiter's calm, shallow canals and Intracoastal waters (especially in cooler months), and sea turtles glide through the seagrass beds year-round. Sightings are never guaranteed, but our guides know the seasonal hotspots.",
    },
    {
      question: "Are children allowed to join the tour?",
      answer:
        "Yes. The minimum age is 3 years old. For the safety of all children on our tours, it's mandatory that children under 6 wear a life jacket at all times while on the water.",
    },
    {
      question: "Are clear kayaks safe?",
      answer:
        "Absolutely. Clear kayaks use polycarbonate, the same substance found in bulletproof glass. The material is thermoformed into a strong, impact-resistant kayak hull.",
    },
    {
      question: "Is there a weight limit?",
      answer:
        "Our kayaks are tandem (2-person) vessels rated for 425 lbs (193 kg) total for two riders, with no single person over 250 lbs (113 kg).",
    },
    {
      question: "Do I need kayaking experience?",
      answer:
        "No experience needed. Our tours are beginner and family friendly, with stable, easy-to-maneuver kayaks and a guide leading the way the whole time.",
    },
    {
      question: "What should I bring on the tour?",
      answer:
        "We recommend bringing a bathing suit, polarized sunglasses, a bottle of water, and a towel. We also suggest bringing a set of dry clothes in case yours get wet.",
    },
    {
      question: "Should we tip our tour guide?",
      answer:
        "Tipping is optional, but guides appreciate gratuity based on the quality of service you receive.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "Trips canceled by Clear Kayaking Adventures because of inclement weather will be refunded in full or rescheduled. Guest cancellations made 24 or more hours before tour time can be refunded in full or rescheduled. Reservations canceled within less than 24 hours, no-shows, and late arrivals that miss the scheduled launch are not refunded.",
    },
  ],

  locationsSection: {
    heading: "Where We Launch",
    intro:
      "We paddle two of Jupiter's most beautiful waterways. Plan to arrive about 20 minutes early — tap a location below for directions.",
  },

  locations: [
    {
      name: "Indian River Lagoon",
      address: "Jupiter, FL",
      geo: { lat: 27.0658, lng: -80.1359 },
      details:
        "One of the most biodiverse estuaries in North America — calm, protected water that's perfect for spotting manatees, dolphins, and wading birds.",
    },
    {
      name: "Loxahatchee River",
      address: "Jupiter, FL",
      geo: { lat: 26.9876, lng: -80.1186 },
      details:
        "A Wild & Scenic River flowing into the Jupiter Inlet — winding mangrove shorelines and clear, calm water ideal for clear kayaking.",
    },
  ],
};
