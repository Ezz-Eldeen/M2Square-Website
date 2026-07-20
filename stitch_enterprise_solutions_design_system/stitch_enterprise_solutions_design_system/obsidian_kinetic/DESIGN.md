---
name: Obsidian Kinetic
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e5beb2'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#ac897e'
  outline-variant: '#5c4037'
  surface-tint: '#ffb59c'
  primary: '#ffb59c'
  on-primary: '#5c1900'
  primary-container: '#ff5708'
  on-primary-container: '#511500'
  inverse-primary: '#aa3600'
  secondary: '#c8c6c8'
  on-secondary: '#303032'
  secondary-container: '#474649'
  on-secondary-container: '#b7b4b7'
  tertiary: '#c8c6cb'
  on-tertiary: '#303034'
  tertiary-container: '#919095'
  on-tertiary-container: '#29292d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59c'
  on-primary-fixed: '#390c00'
  on-primary-fixed-variant: '#822700'
  secondary-fixed: '#e4e2e4'
  secondary-fixed-dim: '#c8c6c8'
  on-secondary-fixed: '#1b1b1d'
  on-secondary-fixed-variant: '#474649'
  tertiary-fixed: '#e4e1e7'
  tertiary-fixed-dim: '#c8c6cb'
  on-tertiary-fixed: '#1b1b1f'
  on-tertiary-fixed-variant: '#47464b'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Sora
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
The design system moves away from utilitarian squares toward a high-octane, "Dark Studio" aesthetic. It is engineered for high-performance contexts—gaming, creative tools, or fintech—where focus is paramount and action is urgent.

The style is a fusion of **Minimalism** and **Glassmorphism**, set against an infinite dark void. By utilizing deep, near-black surfaces and vibrant, high-saturation accents, the UI evokes a sense of premium precision and technological power. The emotional response is one of immersion, energy, and sophistication.

## Colors
The palette is strictly dark-mode, anchored by a "Total Black" (#050505) foundation. 

- **Primary:** A high-energy "Kinetic Orange" (#FF5500) used sparingly for calls to action, active states, and critical data points.
- **Surface Tiers:** Backgrounds use #050505, while elevated containers and cards use #0A0A0B or #121214.
- **Accents:** Use subtle 1px gradients for borders rather than flat colors to simulate light catching on edges.
- **Typography:** Avoid pure white (#FFFFFF) to reduce eye strain; use #F5F5F7 for headings and #A1A1A6 for secondary body text to maintain a sophisticated hierarchy.

## Typography
The typography system balances futuristic geometry with technical precision. 

- **Headlines:** Sora provides a wide, geometric stance that feels modern and architectural. 
- **Body:** Hanken Grotesk offers high legibility and a contemporary sharp finish for long-form content.
- **Technical/Labels:** JetBrains Mono is used for small metadata, buttons, and "system status" indicators to reinforce the studio/developer-tool feel.

## Layout & Spacing
This design system utilizes a **Fixed Grid** model on desktop (12 columns) and a **Fluid Grid** on mobile (4 columns). 

The spacing rhythm is based on a 4px baseline, but defaults to more generous 24px (md) gaps to allow the "Dark Studio" depth to breathe. Elements should never feel cramped; negative space is used to signal premium quality. 

- **Desktop:** 12 columns, 24px gutters, max-width 1440px.
- **Mobile:** 4 columns, 16px gutters, fluid width.

## Elevation & Depth
Depth is achieved through **Tonal Layers** and **Subtle Glows** rather than traditional drop shadows.

- **Stacking:** Surface levels are defined by slight increases in brightness (e.g., Background #050505 -> Card #0A0A0B -> Popover #161618).
- **Glows:** Primary elements (like active buttons) utilize a very soft, 5% opacity "Outer Glow" of the primary orange (#FF5500) to simulate a light-emissive screen.
- **Edges:** Use 1px semi-transparent borders (e.g., `rgba(255, 255, 255, 0.08)`) to define shapes against the dark background.
- **Backdrop:** Use a 20px blur on modal overlays and floating navigation bars to create a glassmorphic "Dark Studio" feel.

## Shapes
The shape language is "Softly Technical." We have moved away from sharp 90-degree corners to provide a more modern, organic feel that still feels structured.

- **Standard Elements (Buttons, Inputs):** 0.5rem (8px).
- **Containers & Cards:** 1rem (16px).
- **Selection Indicators:** Pill-shaped (fully rounded) for chips and toggles.

## Components
- **Buttons:** Primary buttons are solid #FF5500 with #050505 text. Secondary buttons are "Ghost" style with a 1px border and a subtle hover glow.
- **Inputs:** Deep #0A0A0B backgrounds with a 1px border that transitions to #FF5500 on focus. Text should be #F5F5F7.
- **Cards:** No solid borders. Use a subtle linear gradient border (top-left to bottom-right) from `rgba(255,255,255,0.1)` to `transparent`.
- **Chips:** Use JetBrains Mono for labels. Backgrounds should be `rgba(255, 85, 0, 0.1)` with orange text for active states.
- **Lists:** Separated by thin, 1px lines at 5% opacity or simple vertical spacing. Avoid heavy boxing for list items.
- **Gradients:** Use "Black-to-Transparent" fades for scrolling content areas to maintain the infinite depth aesthetic.