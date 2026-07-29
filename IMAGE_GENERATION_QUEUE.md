# Image Generation Queue

Execution plan for the 13-image AI placeholder set described in
`IMAGE_GENERATION_BRIEF.md`.

## Model + Defaults

- Model: `gpt-image-2`
- Quality: `high`
- Output: `webp`
- Export target: roughly 80-85% compression after generation
- Minimum source size: 2400px on the long edge
- Working style: photorealistic editorial tourism photography

## Global Prompt Prefix

Apply this language to every generation unless the item prompt already covers
it clearly:

> Photorealistic editorial tourism photography in Jupiter, Florida. Believable
> mangroves, seagrass, calm blue-green water, and subtropical natural light.
> Fully transparent tandem kayaks with realistic clear polycarbonate hulls,
> paddles, and properly fitted life jackets. Natural candid expressions, safe
> paddling posture, premium outdoor-travel aesthetic, realistic color, crisp
> detail, warm but not oversaturated. No text, no logos, no watermarks, no
> malformed hands, no distorted paddles, no opaque kayaks, no unsafe behavior,
> no impossible wildlife encounters, no crowded waterways.

## Batch 1: Style Lock

Generate these first and approve the look before running the remaining sets.

### 1. Homepage Hero

- Filename: `hero-clear-kayak-jupiter.webp`
- Ratio: `16:9`
- Prompt: `Photorealistic premium tourism photograph of a transparent tandem kayak gliding over crystal-clear turquoise water in Jupiter, Florida, subtle seagrass and tropical fish visible below, mangrove shoreline in the distance, warm early-morning sunlight, kayakers positioned on the right side, generous clean water and sky space on the left for headline text, natural Florida colors, wide cinematic composition, no text, no logo`

### 2. Signature Clear Kayak Eco Tour

- Filename: `tour-clear-kayak-eco.webp`
- Ratio: `16:9`
- Prompt: `Photorealistic guided clear kayak eco tour near Jupiter, Florida, two transparent tandem kayaks paddling beside healthy red mangroves, friendly local guide leading a small group, calm clear water, everyone wearing life jackets, bright natural daylight, premium outdoor adventure photography, centered subjects with room for responsive cropping, no text, no logo`

### 3. Sunset Tour

- Filename: `tour-sunset.webp`
- Ratio: `16:9`
- Prompt: `Photorealistic transparent kayak tour at golden-hour sunset in Jupiter, Florida, calm reflective water, coral and gold sky, silhouetted mangrove shoreline, two paddlers wearing life jackets, peaceful premium travel photography, realistic clear kayak, no text, no logo`

### 4. Private Group Tour

- Filename: `tour-private-group.webp`
- Ratio: `16:9`
- Prompt: `Photorealistic private small-group clear kayak tour in Jupiter, Florida, three transparent tandem kayaks with friends and family smiling naturally, local guide nearby, calm protected water and mangroves, safe life jackets, bright inviting travel photography, no text, no logo`

## Batch 2: Specialty Tours

### 5. Pro Run Tour

- Filename: `tour-pro-run.webp`
- Ratio: `16:9`
- Prompt: `Photorealistic experienced paddlers moving at an energetic pace in transparent tandem kayaks on a broad Jupiter, Florida waterway, clean paddle strokes, athletic but safe, blue-green water, distant mangroves, dynamic premium adventure photography, no text, no logo`

### 6. Indian River Tour

- Filename: `tour-indian-river.webp`
- Ratio: `16:9`
- Prompt: `Photorealistic transparent kayak exploring the Indian River Lagoon near Jupiter, Florida, expansive calm estuary, seagrass visible through clear water, wading birds in the distance, lush shoreline, serene educational eco tour mood, no text, no logo`

### 7. Salt Fish Tour

- Filename: `tour-salt-fish.webp`
- Ratio: `16:9`
- Prompt: `Photorealistic view of a transparent kayak drifting above a shallow saltwater flat near Jupiter, Florida, small schools of fish visible below the clear hull, sandy bottom and seagrass, natural midday light, realistic marine life, premium eco-tour photography, no text, no logo`

## Batch 3: Wildlife Cards

Use `5:4` for every item below. Keep the subject centered with slightly darker
space near the bottom for caption legibility.

### 8. Manatee

- Filename: `wildlife-manatee.webp`
- Ratio: `5:4`
- Prompt: `Photorealistic manatee swimming peacefully through clear shallow water near Jupiter, Florida, viewed from slightly above, subtle seagrass, respectful wildlife distance, natural blue-green water, no kayak collision, no text, no logo`

### 9. Sea Turtle

- Filename: `wildlife-sea-turtle.webp`
- Ratio: `5:4`
- Prompt: `Photorealistic green sea turtle gliding over a healthy seagrass bed in clear Jupiter, Florida water, viewed from above, natural sunlight patterns, respectful wildlife photography, no text, no logo`

### 10. Ray

- Filename: `wildlife-ray.webp`
- Ratio: `5:4`
- Prompt: `Photorealistic stingray gliding over a pale sandy bottom in crystal clear shallow Florida water, viewed from above, soft natural shadow, realistic proportions, no text, no logo`

### 11. Tropical Fish

- Filename: `wildlife-tropical-fish.webp`
- Ratio: `5:4`
- Prompt: `Photorealistic small school of colorful coastal Florida fish moving through seagrass and mangrove roots in clear water, natural ecosystem, documentary wildlife style, no text, no logo`

### 12. Coastal Birds

- Filename: `wildlife-coastal-birds.webp`
- Ratio: `5:4`
- Prompt: `Photorealistic great blue heron and brown pelican along a Jupiter, Florida mangrove shoreline, warm natural light, calm water, authentic coastal habitat, premium wildlife photography, no text, no logo`

### 13. Mangrove Tunnel

- Filename: `wildlife-mangrove-tunnel.webp`
- Ratio: `5:4`
- Prompt: `Photorealistic transparent kayak entering a shaded mangrove tunnel in Jupiter, Florida, lush arching roots and foliage, dappled sunlight on clear water, inviting and safe passage, premium eco-adventure photography, no text, no logo`

## Review Standard

- Approve Batch 1 before generating Batches 2 and 3.
- Reject any image with opaque kayaks, weird hands, broken paddles, fake-looking
  wildlife, crowded scenes, or text artifacts.
- Prefer centered compositions that survive homepage and card cropping.
- Keep original full-res exports outside the repo and only commit optimized
  delivery assets.
