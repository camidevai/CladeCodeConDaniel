# Claude Code Landing Page

Landing page para el curso gratuito "Claude Code en serio: de tu terminal a producción".

## 🚀 Tech Stack

- **Next.js 15** - React framework con App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - Latest React features

## 🎨 Design

Inspirado en el estilo visual de [claude.com/product/claude-code](https://claude.com/product/claude-code):
- Generoso whitespace y diseño minimalista
- Tipografía editorial para headings
- Paleta de colores terracota/naranja
- Cards con bordes sutiles y sombras suaves
- Bloque de terminal en la sección hero

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── Hero.tsx            # Hero section with terminal
│   ├── VideoPreview.tsx    # Preview video section
│   ├── Outcomes.tsx        # Learning outcomes section
│   ├── TargetAudience.tsx  # Target audience section
│   ├── Modules.tsx         # Course modules section
│   ├── FinalProject.tsx    # Final project section
│   ├── Instructors.tsx     # Instructors bios
│   ├── FAQ.tsx             # FAQ accordion
│   ├── Footer.tsx          # Footer with CTA
│   └── EmailModal.tsx      # Email capture modal
└── public/                 # Static assets
```

## 🎯 Features

- ✅ Fully responsive design (mobile-first)
- ✅ SEO optimized with meta tags and Open Graph
- ✅ Accessible (WCAG AA compliant)
- ✅ Email capture form with validation
- ✅ Smooth animations and micro-interactions
- ✅ FAQ accordion
- ✅ Terminal-style code block
- ✅ Modern, clean design

## 🔧 Customization

### Update YouTube URLs

Replace the placeholder URLs:
- `{{YOUTUBE_URL}}` (full course) in `components/Hero.tsx` and `components/Footer.tsx`
- `{{VIDEO_PREVIEW_URL}}` (preview video embed) in `components/VideoPreview.tsx`

### Update Social Links

Update social media links in:
- `components/Instructors.tsx`
- `components/Footer.tsx`

### Email Form Integration

The email form in `components/EmailModal.tsx` currently simulates submission. To integrate with your backend:

1. Uncomment the API call in `handleSubmit`
2. Create an API route at `/api/subscribe`
3. Update the endpoint URL

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎨 Color Palette

Defined in `tailwind.config.ts` and CSS variables:

- `--bg`: #F6F1E8 (Background)
- `--surface`: #FBF7F0 (Card backgrounds)
- `--text`: #121212 (Primary text)
- `--muted`: #4B4B4B (Secondary text)
- `--border`: #E7DED2 (Borders)
- `--accent`: #D97757 (Primary accent/CTA)
- `--accentSoft`: #F1C7B8 (Soft accent)
- `--termBg`: #121212 (Terminal background)
- `--termText`: #EDE7DD (Terminal text)

## 📄 License

This project is for the Claude Code course landing page.

