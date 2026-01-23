# Quick Start Guide

## 🚀 Get Running in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

---

## ✅ Before Going Live - Essential Updates

### Update YouTube URLs (Required)
1. **Course URL** - Replace `{{YOUTUBE_URL}}` with your full course playlist URL in:
   - `components/Hero.tsx`
   - `components/Footer.tsx`

2. **Preview Video** - Replace `{{VIDEO_PREVIEW_URL}}` with your intro/preview video embed URL in:
   - `components/VideoPreview.tsx`
   - Use YouTube embed format: `https://www.youtube.com/embed/VIDEO_ID`

### Add Social Media Links (Recommended)
Replace `#` placeholders with real URLs in:
- `components/Instructors.tsx` - Instructor social profiles
- `components/Footer.tsx` - Footer social icons

### Setup Email Capture (Recommended)
1. Choose an email service (Mailchimp, ConvertKit, SendGrid, etc.)
2. Create API route: `app/api/subscribe/route.ts`
3. Update `components/EmailModal.tsx` to call your API

### Add Open Graph Image (Recommended)
- Create a 1200x630px image
- Save as `public/og-image.jpg`
- This appears when sharing on social media

---

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # SEO metadata & root layout
│   ├── page.tsx            # Main page orchestrator
│   └── globals.css         # Global styles & animations
│
├── components/
│   ├── Hero.tsx            # Hero with terminal block
│   ├── VideoPreview.tsx    # Preview video section
│   ├── Outcomes.tsx        # 3 learning outcomes
│   ├── TargetAudience.tsx  # 4 target personas
│   ├── Modules.tsx         # 6 course modules
│   ├── FinalProject.tsx    # Final project showcase
│   ├── Instructors.tsx     # 2 instructor bios
│   ├── FAQ.tsx             # 6 FAQ with accordion
│   ├── Footer.tsx          # Footer with final CTA
│   └── EmailModal.tsx      # Email capture modal
│
└── public/                 # Static assets (add og-image.jpg here)
```

---

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change the color palette:
```typescript
colors: {
  bg: "#F6F1E8",        // Background
  surface: "#FBF7F0",   // Cards
  accent: "#D97757",    // CTAs & highlights
  // ... more colors
}
```

### Content
All content is in the component files. Simply edit the text in:
- Course title: `components/Hero.tsx`
- Preview video: `components/VideoPreview.tsx`
- Outcomes: `components/Outcomes.tsx`
- Modules: `components/Modules.tsx`
- FAQ: `components/FAQ.tsx`
- Instructor bios: `components/Instructors.tsx`

### Fonts
Update font families in `tailwind.config.ts` and `app/globals.css`

---

## 🧪 Testing Checklist

- [ ] All CTAs link to correct URLs
- [ ] Email modal opens and closes
- [ ] Email validation works
- [ ] FAQ accordion expands/collapses
- [ ] Smooth scroll to sections works
- [ ] Responsive on mobile (< 640px)
- [ ] Responsive on tablet (640-1024px)
- [ ] Responsive on desktop (> 1024px)
- [ ] All hover states work
- [ ] Keyboard navigation works (Tab, Enter, Esc)

---

## 🚢 Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

**Quick deploy to Vercel:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

## 📊 Key Features

✅ **Conversion Optimized**
- Clear primary CTA (YouTube button)
- Secondary CTA (Email capture)
- Multiple touchpoints throughout page

✅ **SEO Ready**
- Meta tags configured
- Open Graph tags
- Semantic HTML
- Fast loading

✅ **Accessible**
- WCAG AA compliant
- Keyboard navigation
- Screen reader friendly
- Proper ARIA labels

✅ **Responsive**
- Mobile-first design
- Tested on all screen sizes
- Touch-friendly interactions

✅ **Modern Stack**
- Next.js 15 (latest)
- React 19
- TypeScript
- Tailwind CSS

---

## 🆘 Troubleshooting

**Port 3000 already in use?**
- Next.js will automatically use port 3001
- Or kill the process using port 3000

**Build errors?**
- Delete `node_modules` and `.next` folders
- Run `npm install` again
- Run `npm run dev`

**Styling not working?**
- Make sure Tailwind is configured correctly
- Check `tailwind.config.ts` includes all paths
- Restart dev server

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

---

## 💡 Tips for Maximum Conversions

1. **A/B test your CTAs** - Try different button text
2. **Add social proof** - Student testimonials, view counts
3. **Create urgency** - Limited-time bonuses
4. **Optimize load time** - Use Next.js Image component for images
5. **Track analytics** - Add Google Analytics or Plausible
6. **Test on real devices** - Not just browser DevTools

---

**Need help?** Check the README.md and DEPLOYMENT.md files for more details.

