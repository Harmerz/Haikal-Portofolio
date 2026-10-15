---
name: "Nadia & Rajendra — wedding letter"
description: "Visual tokens scoped exclusively to /untuk-nadia-rajendra."
colors:
  forest-ink: "#263d32"
  ivory-paper: "#f4f0e5"
  muted-brass: "#7b6240"
  focus-brass: "#9a682f"
  muted-paper: "#d1d5c4"
typography:
  display:
    fontFamily: '"Wedding Bodoni", Georgia, serif'
    fontSize: "clamp(64px, 6.6vw, 96px)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.04em"
  body:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "15px"
    lineHeight: 1.95
  label:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "12px"
rounded:
  paper: "0"
  seal: "50%"
spacing:
  small: "24px"
  medium: "32px"
  large: "40px"
components:
  letter-link:
    textColor: "{colors.forest-ink}"
    padding: "17px 23px"
    rounded: "{rounded.paper}"
  letter-link-hover:
    backgroundColor: "{colors.forest-ink}"
    textColor: "{colors.ivory-paper}"
  envelope:
    backgroundColor: "{colors.ivory-paper}"
    textColor: "{colors.forest-ink}"
    rounded: "{rounded.paper}"
  seal:
    backgroundColor: "{colors.forest-ink}"
    textColor: "{colors.ivory-paper}"
    rounded: "{rounded.seal}"
    size: "64px"
---

# Design System: Nadia & Rajendra — wedding letter

## Overview

**Creative North Star: "Personal correspondence"**

This system applies only to `/untuk-nadia-rajendra`. The portfolio, Hustler, and RSIH keep their incumbent CSS. Warm paper, forest ink, generous space, and the couple's real photograph make the page feel like a letter addressed to two people.

**Key Characteristics:**
- Large serif names and quiet sans-serif reading text.
- Square paper surfaces and a circular monogram seal.
- A native envelope disclosure with restrained motion.

## Colors

### Primary
- **Forest ink:** headings, reading text, borders, seal, and the correspondence section background.
- **Muted brass:** the italic ampersand and final punctuation.

### Neutral
- **Ivory paper:** page and envelope; reversed text on forest ink.
- **Muted paper:** supporting text on the dark section.
- **Focus brass:** keyboard outlines, clearly offset from their controls.

## Typography

Local Bodoni Moda is registered as “Wedding Bodoni,” with regular and italic faces at weight 500. It carries names, short editorial lines, the salutation, and signature. Body text inherits the site's system sans-serif stack. The letter uses the body token above; its mobile size is 14px with 1.9 line-height. Arabic prayer text uses Georgia / Times New Roman at 28px, centered with right-to-left direction.

## Layout

Desktop cover columns are `1.05fr 1fr`; correspondence columns are `0.7fr 1.3fr`. Outer gutters use 5–7vw. At 1000px and below, padding and columns tighten. At 700px and below, both sections become one column, the portrait follows the names, and envelope padding becomes 25px. At 1600px and above, the cover grows to 850px with more top space. The mobile portrait uses a 715 / 950 aspect ratio and a lower image crop.

## Elevation & Depth

Depth comes from paper against forest green and one envelope shadow (`0 18px 38px #101e1940`). The real portrait has a dark translucent caption strip. Other surfaces remain flat.

## Shapes

Paper and links have square edges. The seal is the sole circular accent, shrinking from 64px to 52px on mobile. Thin translucent forest borders divide letter content and footer information.

## Components

The outlined letter link reverses to forest green on hover and leads to the correspondence section. The envelope uses native `details` / `summary`; its action changes between “Buka surat” and “Tutup surat,” and its arrow reverses when open. Hover gently rotates the seal and changes its green. Keyboard focus uses a 3px brass outline with 7px offset; the envelope summary insets its outline by 7px to keep it on ivory paper.

Opening reveals the letter over 600ms with `cubic-bezier(0.16, 1, 0.3, 1)`. Reduced-motion preference disables animations and transitions. Keep the real photograph and its meaningful alternative text; no generated imagery is part of this system.

## Do's and Don'ts

### Do:
- Do preserve native disclosure semantics, visible keyboard focus, and reduced-motion support.
- Do keep the local typefaces and real couple photograph with their recorded provenance.

### Don't:
- Don't apply these route-specific tokens to the portfolio, Hustler, or RSIH.
- Don't add rounded paper cards or decorative imagery to this established letter treatment.
