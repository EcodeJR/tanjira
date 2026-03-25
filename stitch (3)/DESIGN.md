# Design System Document: High-End Web3 Editorial

## 1. Overview & Creative North Star
The North Star for this design system is **"The Synthetic Architect."** This isn't just a landing page; it is a digital manifestation of Web3 infrastructure—precise, multi-layered, and fundamentally transparent. We are moving away from the flat, "SaaS-standard" look in favor of an editorial layout that feels like a futuristic terminal.

By utilizing high-contrast typography scales and intentional asymmetry, we create a sense of movement. Elements should never feel static; they should feel as though they are floating in a pressurized, high-tech vacuum. We achieve this through the careful overlap of "Glass" layers and "Organic" energy blobs that break the rigid constraints of a traditional grid.

---

## 2. Colors & Surface Philosophy

The palette is anchored by deep, cosmic purples and punctuated by high-energy oranges and neons. It is designed to look best on a dark background (`surface: #0d0d18`), though it adapts for high-clarity light modes.

### The "No-Line" Rule
Explicitly prohibit 1px solid borders for sectioning. Boundaries are defined solely through background color shifts. To separate sections, transition from `surface` to `surface-container-low`. Use the `outline-variant` token only for interactive focus states, never for structural separation.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of semi-transparent materials.
- **Base Layer:** `surface` (#0d0d18)
- **Primary Containers:** `surface-container-low` (#12121e)
- **Floating Cards/Modals:** `surface-container-high` (#1e1e2d)
- **Active/Hover States:** `surface-container-highest` (#242434)

### The "Glass & Gradient" Rule
To capture the futuristic infrastructure aesthetic, use Glassmorphism for floating UI elements. Use semi-transparent `surface-variant` colors with a `backdrop-blur` of 20px–40px. 
- **Signature Glows:** Use the `primary` (#ff9157) and `tertiary` (#81ecff) tokens as blurred background "blobs" behind glass layers to create a sense of bioluminescent energy.

---

## 3. Typography: Editorial Authority

We use a dual-typeface system to balance technical precision with modern accessibility.

*   **Display & Headlines:** `Space Grotesk`. This is our "Infrastructure" font. Its wide apertures and geometric construction feel high-tech.
    *   *Styling Tip:* Use `display-lg` with `letter-spacing: -0.02em` for impact, or `label-md` with `letter-spacing: 0.1em` for a premium, technical feel.
*   **Body & Titles:** `Manrope`. This provides high legibility. Its rounded, friendly forms soften the "harshness" of the futuristic tech stack.

**Hierarchy Strategy:**
- **Display-LG:** The "Statement" level. Use for hero sections where the brand's core value proposition is showcased.
- **Headline-MD:** Editorial section titles. Use with high vertical margin (`spacing-12`) to allow the layout to breathe.
- **Label-SM:** All-caps metadata. Used for "Coming Soon" tags or technical stats, always with wide tracking.

---

## 4. Elevation & Depth: Tonal Layering

Traditional shadows are too "web 2.0." In this system, depth is conveyed through light and transparency.

*   **The Layering Principle:** Place a `surface-container-lowest` (#000000) card onto a `surface-container-low` (#12121e) section. This "negative depth" creates a recessed look that feels more like hardware than a website.
*   **Ambient Shadows:** For floating glass components, use a shadow with a blur of `40px` and an opacity of `8%`. The shadow color must be a tinted version of `secondary` (#aa8aff) rather than black, creating a "neon underglow" effect.
*   **The "Ghost Border" Fallback:** If a divider is mandatory, use `outline-variant` at `15% opacity`. It should be barely visible—a suggestion of a boundary rather than a hard edge.

---

## 5. Components

### Buttons: Kinetic Energy
- **Primary:** Background `primary` (#ff9157). On hover, add a `primary_dim` outer glow using a spread-less box shadow. Shape: `rounded-md` (0.375rem).
- **Tertiary (The "Neon" CTA):** Transparent background with a `tertiary` (#81ecff) "Ghost Border" and text. Hover triggers a subtle `tertiary_container` fill.

### Card Layouts: Layered Architecture
Cards must not have hard borders. Use a combination of `surface-container-high` and `backdrop-blur`. 
- **Header Cards:** Use `title-lg` for titles. Forbid the use of divider lines; use `spacing-4` to create separation between the header and body text.

### List Items: Stylized Data
Instead of standard bullets, use a `tertiary` (#81ecff) vertical bar (2px width) on the left of the list item. This reinforces the "grid/code" aesthetic.
- **Spacing:** Use `spacing-2` between list items to maintain a compact, data-dense look.

### Interactive "Web3" Chips
- **Status Chips:** Use `secondary_container` for the background and `on_secondary_container` for text.
- **Shape:** `rounded-full` to contrast against the geometric cards.

---

## 6. Do's and Don'ts

### Do:
- **Do** overlap elements. Let a 3D icon float halfway outside its container to break the "box" feel.
- **Do** use `primary` to `primary_container` gradients on large text to give it a metallic, premium sheen.
- **Do** use `spacing-20` and `spacing-24` for section padding. The "Web3 infrastructure" needs space to feel massive and significant.

### Don't:
- **Don't** use pure black (#000000) for text. Always use `on_surface` (#e9e6f7).
- **Don't** use standard 1px borders. If you feel you need a border, try an inner shadow or a color shift first.
- **Don't** use more than three neon colors in a single view. The `surface` colors must do the heavy lifting to keep the design "sleek" rather than "cluttered."
- **Don't** use standard drop shadows. If it doesn't look like light passing through glass, it doesn't belong in the system.