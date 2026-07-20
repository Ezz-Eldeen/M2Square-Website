# M2-Square — Design System

A sleek, professional design language for a modern software company. Dark-first, high-contrast, with disciplined orange accents used sparingly to signal action and focus.

---

## 1. Brand Essence

- **Name:** M2-Square
- **Personality:** precise, confident, technical, minimal, trustworthy
- **Voice:** direct, no fluff, engineer-to-engineer clarity
- **Visual mood:** dark studio aesthetic — think obsidian surfaces, machined edges, a single warm accent light in an otherwise cool, quiet room

---

## 2. Color Palette

### Primary (Neutrals — the majority of the UI)
| Token | Hex | Usage |
|---|---|---|
| `--bg-primary` | `#0A0A0B` | App background, base canvas |
| `--bg-secondary` | `#131316` | Cards, panels, elevated surfaces |
| `--bg-tertiary` | `#1C1C20` | Nested surfaces, input fields |
| `--border-subtle` | `#2A2A2E` | Dividers, card borders |
| `--border-strong` | `#3A3A40` | Hover borders, focused dividers |
| `--text-primary` | `#F5F5F4` | Headlines, primary content |
| `--text-secondary` | `#A3A3AA` | Body copy, descriptions |
| `--text-tertiary` | `#6B6B72` | Placeholder, disabled, metadata |

### Accent (Orange — use deliberately, ~5–10% of visual weight)
| Token | Hex | Usage |
|---|---|---|
| `--accent-primary` | `#FF6A2B` | Primary CTAs, active states, key highlights |
| `--accent-hover` | `#FF8548` | Hover state on accent elements |
| `--accent-muted` | `#3D2417` | Accent-tinted backgrounds (badges, subtle highlights) |
| `--accent-glow` | `#FF6A2B` @ 20% opacity | Focus rings, glow effects behind icons |

### System / Semantic
| Token | Hex | Usage |
|---|---|---|
| `--success` | `#3DD68C` | Success states — used minimally |
| `--warning` | `#F5B93D` | Warnings — used minimally |
| `--error` | `#F5453D` | Errors, destructive actions |

**Rule of thumb:** if more than one element on screen is orange at full saturation, pull one back to muted or neutral. The accent should feel like a single point of gravity, not a pattern.

---

## 3. Typography

- **Primary typeface:** Inter (UI, body, headings) — clean, geometric, excellent at small sizes
- **Monospace typeface:** JetBrains Mono or IBM Plex Mono (code, technical data, terminal-style elements)

| Style | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| Display | 56–72px | 600 (Semibold) | 1.05 | -0.02em |
| H1 | 40px | 600 | 1.1 | -0.01em |
| H2 | 30px | 600 | 1.2 | -0.01em |
| H3 | 22px | 600 | 1.3 | 0 |
| Body Large | 18px | 400 | 1.6 | 0 |
| Body | 15px | 400 | 1.6 | 0 |
| Small / Caption | 13px | 500 | 1.4 | 0.01em |
| Mono / Code | 14px | 400 | 1.5 | 0 |

Headlines are tight and confident; body text is generous and readable. Avoid pure white (#FFFFFF) — use `--text-primary` (#F5F5F4) to keep contrast from feeling harsh against black.

---

## 4. Spacing & Grid

- **Base unit:** 4px
- **Scale:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128
- **Container max-width:** 1200px (marketing), 1440px (product/dashboard)
- **Grid:** 12-column, 24px gutters on desktop; 4-column, 16px gutters on mobile
- **Section vertical rhythm:** 96–128px between major sections on landing pages

---

## 5. Elevation & Depth

Avoid heavy drop shadows — depth comes from subtle layering of near-black surfaces plus a whisper of accent glow on interactive elements.

- **Card resting:** `background: var(--bg-secondary); border: 1px solid var(--border-subtle);`
- **Card hover:** border transitions to `--border-strong`, optional 1px inset glow using `--accent-glow`
- **Modal/overlay:** `background: var(--bg-secondary)` with `box-shadow: 0 24px 64px rgba(0,0,0,0.6)`
- **Focus ring:** 2px solid `--accent-primary`, 2px offset, no blur

---

## 6. Components

### Buttons
- **Primary:** `--accent-primary` background, `#0A0A0B` text, 8px radius, 600 weight. Hover → `--accent-hover`.
- **Secondary:** transparent background, 1px `--border-strong`, `--text-primary` text. Hover → `--bg-tertiary` fill.
- **Ghost/Tertiary:** no border, `--text-secondary` text, hover → `--text-primary`.
- **Destructive:** `--error` background or border, used sparingly.

### Cards
- 12–16px border radius
- `--bg-secondary` fill, `--border-subtle` 1px border
- Padding: 24–32px
- Optional top-left accent: a thin 2px `--accent-primary` bar for "featured" cards only

### Inputs
- `--bg-tertiary` background, `--border-subtle` border, `--text-primary` text
- Focus: border → `--accent-primary`, subtle `--accent-glow` box-shadow
- Placeholder text: `--text-tertiary`

### Navigation
- Fixed top bar, `--bg-primary` with 1px bottom `--border-subtle`
- Logo mark left, nav links center/right in `--text-secondary`, active link in `--text-primary` with a small `--accent-primary` underline or dot indicator

### Badges / Tags
- `--accent-muted` background, `--accent-primary` text, 6px radius, 4–8px padding — used for status, "New," or category labels

---

## 7. Iconography & Imagery

- **Icon style:** thin-stroke (1.5–2px), geometric, consistent 24px grid (Lucide or Phosphor style)
- **Icon color:** `--text-secondary` at rest, `--accent-primary` when active/selected
- **Imagery:** abstract, technical — grid lines, wireframe geometry, subtle particle/network motifs on near-black backgrounds. Avoid stock photography of people in generic "office" settings; prefer product screenshots, code, or abstract data visualization.
- **Gradients:** used sparingly — radial glow of `--accent-primary` fading into `--bg-primary`, typically behind hero sections or key visuals only.

---

## 8. Motion

- **Timing:** 150–250ms for micro-interactions, 300–400ms for panel/page transitions
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (ease-out feel)
- **Principles:** motion should feel mechanical and precise, not bouncy or playful. Fades and subtle translate (8–12px) over scale/bounce effects.

---

## 9. Layout Principles

1. **Generous negative space** — let the dark background breathe; don't overcrowd sections.
2. **One accent moment per viewport** — a single CTA, highlighted stat, or active nav item should carry the orange, not multiple competing elements.
3. **Left-aligned, grid-locked text** — avoid center-aligned body copy except short hero statements.
4. **High contrast, low noise** — strong text/background contrast, minimal decorative texture.
5. **Technical credibility over decoration** — favor real data, code snippets, and precise diagrams over illustrative fluff.

---

## 10. Example Prompt Seed (for Google Stitch)

> Design a sleek, professional dark-mode landing page for a software company called "M2-Square." Background is near-black (#0A0A0B) with layered dark-gray surfaces (#131316, #1C1C20) for cards and panels. Use a single vibrant orange accent (#FF6A2B) sparingly — for the primary CTA button, active nav states, and one hero highlight. Typography is Inter, tight and confident headlines with generous body copy in off-white (#F5F5F4) and muted gray (#A3A3AA). Minimal thin-stroke icons, subtle borders instead of heavy shadows, generous spacing, and a technical, precise, trustworthy tone — no playful or bouncy elements.

---

## 11. Quick Reference Swatch

```
BACKGROUND   #0A0A0B  ██████████
SURFACE      #131316  ██████████
SURFACE ALT  #1C1C20  ██████████
BORDER       #2A2A2E  ██████████
TEXT PRIMARY #F5F5F4  ██████████
TEXT MUTED   #A3A3AA  ██████████
ACCENT       #FF6A2B  ██████████
ACCENT HOVER #FF8548  ██████████
ACCENT MUTED #3D2417  ██████████
```
