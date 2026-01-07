# Card Stacking Animation - Complete Implementation Guide

## Overview
This document describes the card stacking animation feature for the "Onze Producten" (Our Products) section. As users scroll, product cards stack on top of each other, creating an engaging visual effect.

---

## Section Structure

### Layout
- **Two-column layout** on desktop (side-by-side)
- **Single column** on mobile (stacked vertically)
- **Left side**: Sticky title and description card
- **Right side**: Stacking product cards

### Section Title & Description

**Title:**
```
Onze Producten
```
- "Onze" is regular text
- "Producten" uses gradient text (orange-500 to rose-500)

**Description:**
```
Ontdek onze professionele, speelse tools voor de moderne tennisles. Leren was nog nooit zo leuk!
```

---

## Product Data (All 7 Products)

### Product 1: De leraren app
**Title:** De leraren app  
**Description:** Een complete digitale assistent voor tenniscoaches met lesplannen, oefeningen en voortgangsregistratie.  
**Button Text:** Meer informatie  
**Color Class:** `bg-sky-400` (bright blue)

### Product 2: Spelers kaarten
**Title:** Spelers kaarten  
**Description:** Interactieve oefenkaarten die spelers uitdagen met verschillende technieken en vaardigheden.  
**Button Text:** Meer informatie  
**Color Class:** `bg-rose-400` (bright pink/rose)

### Product 3: Handboek Tenniskids TOF
**Title:** Handboek Tenniskids TOF  
**Description:** Het complete handboek vol met lesmaterialen, spelvormen en trainingstips volgens de KNLTB methode.  
**Button Text:** Meer informatie  
**Color Class:** `bg-lime-500` (bright lime green)

### Product 4: Tof Score
**Title:** Tof Score  
**Description:** Houd scores en progressie digitaal bij. Een onmisbare tool voor het organiseren van interne competities en toernooien.  
**Button Text:** Meer informatie  
**Color Class:** `bg-amber-500` (bright amber/orange-yellow)

### Product 5: TOF awards
**Title:** TOF awards  
**Description:** Vier elk succes! Een complete set medailles, diploma's en bekers om jonge tennissers te belonen en te motiveren.  
**Button Text:** Meer informatie  
**Color Class:** `bg-purple-500` (bright purple)

### Product 6: TOF magneetbord
**Title:** TOF magneetbord  
**Description:** Visualiseer tactieken en positiespellen helder voor je leerlingen met dit duurzame, weersbestendige tactiekbord.  
**Button Text:** Meer informatie  
**Color Class:** `bg-indigo-500` (bright indigo)

### Product 7: TOF Tennis next level
**Title:** TOF Tennis next level  
**Description:** Staat jouw basis en wil je met jouw tennisorganisatie of vereniging naar een next level? Kijk dan verder met welke producten we jou kunnen ondersteunen en onderscheid je hiermee ten opzichte van andere verenigingen. Maak jouw jeugdprogramma nog leuker, leerzamer en zichtbaarder voor iedereen.  
**Button Text:** Meer informatie  
**Color Class:** `bg-teal-500` (bright teal)

---

## Component Structure

### Main Component: ProductsSection

**File Path:** `src/components/ProductsSection.jsx`

**Key Features:**
- Two-column flex layout (`flex flex-col md:flex-row`)
- Left column: 50% width (`md:w-1/2`)
- Right column: 50% width (`md:w-1/2`)
- Section has background gradient
- Cards container has `min-h-[150vh]` to ensure enough scroll space

### Card Wrapper Structure

Each product card is wrapped in a `div` with:
- `className="sticky top-32"` - Makes cards stick to viewport
- `style={{ zIndex: index + 1 }}` - Higher cards have higher z-index
- Cards are spaced with `gap-8` in flex container

### Product Card Component

**File Path:** `src/components/ProductCard.jsx`

**Structure:**
- Uses Framer Motion for animations
- Card background uses product-specific color class
- White text on colored background
- Button at bottom of card
- Minimum height: `min-h-[450px]`
- Rounded corners: `rounded-3xl`
- Shadow: `shadow-2xl`
- Border: `border-4 border-white/20`

---

## Styling Details

### Section Container
```css
- padding-bottom: 40 (pb-40)
- overflow-visible
- background: gradient from yellow-50 via orange-50 to pink-50
- relative positioning for z-index control
```

### Left Side - Title Card
```css
- Sticky positioning: sticky top-32
- Background: white/80 with backdrop-blur-xl
- Padding: p-10 (40px)
- Border radius: rounded-[2.5rem] (40px)
- Shadow: 0_8px_30px_rgb(0,0,0,0.04)
- Border: border-orange-100/50
```

**Title Styling:**
- Font size: `text-4xl md:text-6xl`
- Font weight: `font-black`
- Color: `text-gray-900`
- "Producten" word: gradient `from-orange-500 to-rose-500`

**Description Styling:**
- Font size: `text-lg md:text-xl`
- Color: `text-gray-600`
- Font weight: `font-medium`
- Line height: `leading-relaxed`

### Right Side - Cards Container
```css
- Flex column layout
- Gap: gap-8 (32px between cards)
- Padding bottom: pb-20 (80px)
- Minimum height: min-h-[150vh] (150% viewport height)
```

### Individual Card Styling

**Card Container:**
```css
- Background: Dynamic color based on product (e.g., bg-sky-400)
- Border radius: rounded-3xl (24px)
- Shadow: shadow-2xl
- Padding: p-8 md:p-12 (32px mobile, 48px desktop)
- Minimum height: min-h-[450px]
- Border: border-4 border-white/20
- Hover effect: scale-[1.01] on hover
- Transition: duration-300
```

**Card Title:**
```css
- Font size: text-3xl md:text-5xl
- Font weight: font-black
- Color: text-white
- Margin bottom: mb-6 (24px)
- Letter spacing: tracking-tight
```

**Card Description:**
```css
- Color: text-white/90 (90% opacity white)
- Font size: text-lg md:text-xl
- Font weight: font-medium
- Line height: leading-relaxed
```

**Button:**
```css
- Background: bg-white
- Text color: text-gray-900
- Hover background: hover:bg-gray-100
- Font weight: font-bold
- Font size: text-lg
- Padding: py-6 px-8 (24px vertical, 32px horizontal)
- Border radius: rounded-2xl (16px)
- Shadow: shadow-lg
- Width: w-full md:w-auto (full width on mobile, auto on desktop)
```

---

## Animation Mechanism

### How the Stacking Works

1. **Sticky Positioning:**
   - Each card wrapper has `position: sticky` with `top: 32`
   - When scrolling, cards stick to the top of viewport
   - Cards below push the card above upward as they reach the sticky point

2. **Z-Index Layering:**
   - Cards use `z-index: index + 1`
   - First card: z-index 1
   - Second card: z-index 2
   - Third card: z-index 3
   - This ensures cards stack in correct order

3. **Scroll Behavior:**
   - Container has `min-h-[150vh]` to provide scroll space
   - As user scrolls, each card sticks and the next card slides underneath
   - Creates a "stacking deck of cards" effect

4. **Framer Motion Animation:**
   - Cards fade in with `opacity: 0 → 1`
   - Slide up with `y: 50 → 0`
   - Triggers when card enters viewport (`whileInView`)
   - Duration: 0.5 seconds
   - Easing: easeOut

---

## Technical Implementation

### Required Dependencies
- React
- Framer Motion (`framer-motion`)
- Tailwind CSS
- Button component from UI library

### ProductsSection.jsx Structure

```jsx
const ProductsSection = () => {
  const products = [
    // Array of 7 product objects
    // Each object has: id, title, description, color
  ];

  return (
    <section className="relative pb-40 overflow-visible">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br...">
      
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 relative">
          
          {/* LEFT: Sticky Title */}
          <div className="md:w-1/2">
            <div className="sticky top-32 pb-20">
              <motion.div>
                <h2>Onze <span>Producten</span></h2>
                <p>Description text...</p>
              </motion.div>
            </div>
          </div>

          {/* RIGHT: Stacking Cards */}
          <div className="md:w-1/2 flex flex-col gap-8 pb-20 min-h-[150vh]">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className="sticky top-32"
                style={{ zIndex: index + 1 }}
              >
                <ProductCard product={product} index={index} />
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};
```

### ProductCard.jsx Structure

```jsx
const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-5%" }}
    >
      <div className={`${product.color} rounded-3xl shadow-2xl...`}>
        <div>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
        <Button>Meer informatie</Button>
      </div>
    </motion.div>
  );
};
```

---

## Complete Product Data Array

```javascript
const products = [
  {
    id: 1,
    title: 'De leraren app',
    description: 'Een complete digitale assistent voor tenniscoaches met lesplannen, oefeningen en voortgangsregistratie.',
    color: 'bg-sky-400',
  },
  {
    id: 2,
    title: 'Spelers kaarten',
    description: 'Interactieve oefenkaarten die spelers uitdagen met verschillende technieken en vaardigheden.',
    color: 'bg-rose-400',
  },
  {
    id: 3,
    title: 'Handboek Tenniskids TOF',
    description: 'Het complete handboek vol met lesmaterialen, spelvormen en trainingstips volgens de KNLTB methode.',
    color: 'bg-lime-500',
  },
  {
    id: 4,
    title: 'Tof Score',
    description: 'Houd scores en progressie digitaal bij. Een onmisbare tool voor het organiseren van interne competities en toernooien.',
    color: 'bg-amber-500',
  },
  {
    id: 5,
    title: 'TOF awards',
    description: 'Vier elk succes! Een complete set medailles, diploma\'s en bekers om jonge tennissers te belonen en te motiveren.',
    color: 'bg-purple-500',
  },
  {
    id: 6,
    title: 'TOF magneetbord',
    description: 'Visualiseer tactieken en positiespellen helder voor je leerlingen met dit duurzame, weersbestendige tactiekbord.',
    color: 'bg-indigo-500',
  },
  {
    id: 7,
    title: 'TOF Tennis next level',
    description: 'Staat jouw basis en wil je met jouw tennisorganisatie of vereniging naar een next level? Kijk dan verder met welke producten we jou kunnen ondersteunen en onderscheid je hiermee ten opzichte van andere verenigingen. Maak jouw jeugdprogramma nog leuker, leerzamer en zichtbaarder voor iedereen.',
    color: 'bg-teal-500',
  }
];
```

---

## Key CSS Classes Reference

### Layout Classes
- `flex flex-col md:flex-row` - Stack on mobile, side-by-side on desktop
- `md:w-1/2` - 50% width on desktop
- `gap-8` - 32px gap between elements
- `sticky top-32` - Sticky positioning at 128px from top
- `min-h-[150vh]` - Minimum height 150% of viewport
- `relative` / `absolute` - Positioning contexts

### Background Colors (Tailwind)
- `bg-sky-400` - Bright blue
- `bg-rose-400` - Bright pink/rose
- `bg-lime-500` - Bright lime green
- `bg-amber-500` - Bright amber/orange-yellow
- `bg-purple-500` - Bright purple
- `bg-indigo-500` - Bright indigo
- `bg-teal-500` - Bright teal

### Typography Classes
- `text-4xl md:text-6xl` - Large responsive heading
- `text-3xl md:text-5xl` - Card title size
- `text-lg md:text-xl` - Description size
- `font-black` - Extra bold weight
- `font-bold` - Bold weight
- `font-medium` - Medium weight
- `text-white` - White text
- `text-white/90` - White at 90% opacity
- `text-gray-900` - Dark gray
- `text-gray-600` - Medium gray

### Spacing Classes
- `p-8 md:p-12` - Padding 32px/48px
- `pb-20` - Padding bottom 80px
- `pb-40` - Padding bottom 160px
- `mb-6` - Margin bottom 24px
- `gap-8` - Gap 32px
- `pt-20` - Padding top 80px

### Effect Classes
- `rounded-3xl` - Border radius 24px
- `rounded-2xl` - Border radius 16px
- `rounded-[2.5rem]` - Border radius 40px
- `shadow-2xl` - Large shadow
- `shadow-lg` - Large shadow
- `backdrop-blur-xl` - Blur effect
- `hover:scale-[1.01]` - Slight scale on hover
- `border-4 border-white/20` - 4px white border at 20% opacity

---

## Responsive Behavior

### Mobile (< 768px)
- Single column layout
- Cards stack vertically
- Title appears above cards
- Full-width buttons
- Smaller font sizes
- Reduced padding

### Desktop (≥ 768px)
- Two-column layout
- Title sticky on left (50% width)
- Cards sticky-stack on right (50% width)
- Side-by-side layout
- Larger font sizes
- Increased padding
- Auto-width buttons

---

## Important Implementation Notes

1. **Container Height**: The cards container MUST have `min-h-[150vh]` to provide enough scroll space for the stacking effect to work properly.

2. **Z-Index Order**: Cards must have incrementing z-index values (`index + 1`) so they stack correctly.

3. **Sticky Top Value**: Both the title card and product cards use `top-32` (128px) to account for header/navigation height.

4. **Gap Between Cards**: `gap-8` (32px) provides spacing so cards don't overlap too early in the scroll.

5. **Framer Motion**: Uses `whileInView` with `once: true` so animations only trigger once when scrolled into view.

6. **Color System**: Each product has a unique vibrant color class for visual distinction.

7. **Button Behavior**: Currently shows toast notification. Can be replaced with actual navigation/action.

---

## Summary

This stacking card animation creates an engaging user experience where product cards visually stack on top of each other as the user scrolls. The implementation uses:
- CSS `position: sticky` for the stacking behavior
- Z-index for proper layering
- Framer Motion for smooth entrance animations
- Tailwind CSS for responsive styling
- A two-column layout with sticky title on the left and stacking cards on the right

The effect works by having each card stick to the viewport top as it scrolls into position, with the next card sliding underneath it, creating a cascading stack effect.

