# Deployment Guide

## Quick Deploy to Vercel (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: Claude Code landing page"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

Your site will be live in ~2 minutes!

## Before Deploying - Important Updates

### 1. Update YouTube URLs
Replace the placeholder URLs:
- `{{YOUTUBE_URL}}` (full course playlist) in:
  - `components/Hero.tsx` (line ~30)
  - `components/Footer.tsx` (line ~15)
- `{{VIDEO_PREVIEW_URL}}` (preview/intro video) in:
  - `components/VideoPreview.tsx` (line ~20)
  - Use YouTube embed format: `https://www.youtube.com/embed/YOUR_VIDEO_ID`

### 2. Add Open Graph Image
- Create a 1200x630px image for social sharing
- Save it as `public/og-image.jpg`
- Or update the path in `app/layout.tsx`

### 3. Update Social Links
In `components/Instructors.tsx` and `components/Footer.tsx`:
- Replace `#` with actual social media URLs
- Twitter/X, GitHub, LinkedIn, Instagram, YouTube

### 4. Configure Email Form
In `components/EmailModal.tsx`:
- Uncomment the API call (lines ~54-58)
- Create API route: `app/api/subscribe/route.ts`
- Integrate with your email service (Mailchimp, ConvertKit, etc.)

Example API route:
```typescript
// app/api/subscribe/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();
  
  // Add your email service integration here
  // Example: Mailchimp, ConvertKit, SendGrid, etc.
  
  return NextResponse.json({ success: true });
}
```

## Alternative Deployment Options

### Netlify
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repo
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Deploy!

### Railway
1. Push to GitHub
2. Go to [railway.app](https://railway.app)
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repo
5. Railway auto-detects Next.js
6. Deploy!

## Environment Variables (Optional)

If you need environment variables (e.g., for API keys):

1. Create `.env.local`:
```bash
NEXT_PUBLIC_API_URL=your_api_url
EMAIL_SERVICE_API_KEY=your_key
```

2. Add them in your deployment platform:
- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Environment Variables
- **Railway**: Project → Variables

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records

## Performance Optimization

The site is already optimized with:
- ✅ Next.js 15 with Turbopack
- ✅ Automatic code splitting
- ✅ Image optimization (when you add images)
- ✅ CSS optimization with Tailwind
- ✅ Server-side rendering

## Monitoring

After deployment, monitor:
- **Vercel Analytics**: Built-in, enable in project settings
- **Google Analytics**: Add tracking code to `app/layout.tsx`
- **Plausible/Fathom**: Privacy-friendly alternatives

## Post-Deployment Checklist

- [ ] Test all CTAs and links
- [ ] Verify email form submission
- [ ] Test on mobile devices
- [ ] Check Open Graph preview (use [metatags.io](https://metatags.io))
- [ ] Test page speed (use [PageSpeed Insights](https://pagespeed.web.dev))
- [ ] Verify all social links work
- [ ] Test FAQ accordion
- [ ] Check smooth scrolling navigation

## Support

If you encounter issues:
1. Check the [Next.js deployment docs](https://nextjs.org/docs/deployment)
2. Check your platform's documentation
3. Review build logs for errors

## Updating After Deployment

Simply push to your main branch:
```bash
git add .
git commit -m "Update content"
git push
```

Vercel/Netlify/Railway will automatically rebuild and deploy!

