# 🚀 PRE-LAUNCH CHECKLIST

## Critical Updates Required Before Launch

### ⚠️ MUST UPDATE (Won't Work Without These):

#### 1. Domain URLs in Meta Tags
**File:** `index.html` (lines in `<head>` section)

Find and replace `pathwaysystemsstudio.com` with your actual domain in:
- [ ] Canonical URL: `<link rel="canonical" href="...">`
- [ ] Open Graph URL: `<meta property="og:url" ...>`
- [ ] Open Graph Image: `<meta property="og:image" ...>`
- [ ] Twitter URL: `<meta name="twitter:url" ...>`
- [ ] Twitter Image: `<meta name="twitter:image" ...>`
- [ ] Schema.org script (3 locations with "url" and "image")

**Example:** If your domain is `www.pathwaystudio.ca`, change:
```html
FROM: https://pathwaysystemsstudio.com/
TO:   https://www.pathwaystudio.ca/
```

---

### 📝 SHOULD UPDATE (Content):

#### 2. Team Member Information
**File:** `index.html`

- [ ] Update placeholder team member names
- [ ] Add actual position titles
- [ ] Write real 50-word bios
- [ ] Add/remove team member cards as needed

#### 3. Add Team Photos
**Follow:** `TEAM_PHOTOS_GUIDE.md`

- [ ] Prepare square headshots (500x500px+)
- [ ] Save as JPG files with simple names
- [ ] Replace SVG placeholders with `<img>` tags
- [ ] Test that photos display as circles

#### 4. Review FAQ Answers
**File:** `index.html` (FAQ section)

- [ ] Read through all 10 questions
- [ ] Customize answers to match your actual practices
- [ ] Add/remove questions as needed
- [ ] Ensure fee structure description matches your approach

#### 5. Review Privacy Policy
**File:** `privacy-policy.html`

- [ ] Verify contact email is correct
- [ ] Confirm geographic scope (currently Canada)
- [ ] Review third-party services listed (Formspree, Google Analytics)
- [ ] Adjust if you add more tools/services

---

### 🎨 OPTIONAL (But Recommended):

#### 6. Create Favicons
**Tools:** https://realfavicongenerator.net/

- [ ] Create square icon (512x512px)
- [ ] Generate favicon set
- [ ] Upload to website root folder
- [ ] Uncomment favicon links in `index.html`

#### 7. Set Up Google Analytics
- [ ] Create Google Analytics 4 property
- [ ] Get tracking code
- [ ] Add to `index.html` before `</head>`
- [ ] Test that tracking works

#### 8. Set Up Google Search Console
- [ ] Add property for your domain
- [ ] Verify ownership
- [ ] Submit sitemap (create basic XML sitemap)
- [ ] Monitor indexing status

---

## Testing Before Launch

### ✅ Functionality Tests:

- [ ] Test contact form submission (send yourself a test)
- [ ] Check you receive email from Formspree
- [ ] Click all navigation links (Home, About, Services, etc.)
- [ ] Test FAQ accordion (click questions to expand/collapse)
- [ ] Click Privacy Policy link in footer
- [ ] Test all buttons ("Start a Conversation", "Explore Services")
- [ ] Verify smooth scrolling works

### 📱 Mobile Tests:

- [ ] Open site on phone
- [ ] Test hamburger menu
- [ ] Verify FAQ works on mobile
- [ ] Check stats animate when scrolling
- [ ] Test form submission on mobile
- [ ] Verify all sections look good
- [ ] Test horizontal team layout on mobile

### 🌐 Browser Tests:

- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if available)

### 🔍 SEO Tests (After Launch):

- [ ] Test Facebook sharing: https://developers.facebook.com/tools/debug/
- [ ] Test Twitter cards: https://cards-dev.twitter.com/validator
- [ ] Test structured data: https://search.google.com/test/rich-results
- [ ] Check page speed: https://pagespeed.web.dev/

---

## Files to Upload to Your Web Host

Upload ALL these files to your web hosting:

### Required Files:
```
✅ index.html
✅ privacy-policy.html
✅ styles.css
✅ script.js
✅ logo.png
```

### Optional (but recommended):
```
⭐ favicon-32x32.png (if created)
⭐ favicon-16x16.png (if created)
⭐ apple-touch-icon.png (if created)
⭐ robots.txt (helps search engines)
⭐ sitemap.xml (helps search engines)
```

---

## After Launch

### Week 1:
- [ ] Submit site to Google Search Console
- [ ] Monitor analytics for traffic
- [ ] Test form submissions are arriving
- [ ] Share on social media to test previews
- [ ] Monitor for any broken links

### Month 1:
- [ ] Review analytics data
- [ ] Check which services get most interest
- [ ] See which FAQ questions are most viewed
- [ ] Gather testimonials from first clients
- [ ] Consider starting blog/resources section

---

## Quick Reference: What Changed

### New Pages:
- Privacy Policy page (`privacy-policy.html`)

### New Sections:
- FAQ section (10 questions)
- Animated stats counter

### New Features:
- Comprehensive SEO meta tags
- Open Graph for social sharing
- Twitter cards
- Schema.org structured data
- FAQ accordion functionality
- Privacy Policy link in footer

### Updated:
- Email: hello@pathwaysystemsstudio.com (everywhere)
- Team layout: Horizontal with small photos
- All new copy (About, Pillars, Services)
- Navigation: Added FAQ link

---

## Common Issues & Solutions

### Issue: Contact form doesn't send
**Solution:** Verify Formspree endpoint URL is correct in form action

### Issue: FAQ doesn't expand/collapse
**Solution:** Make sure script.js is loaded and no JavaScript errors in console

### Issue: Stats don't animate
**Solution:** Check browser console for errors, ensure script.js is loaded

### Issue: Social share doesn't show image
**Solution:** Update image URLs to absolute URLs (https://yourdomain.com/logo.png)

### Issue: Google can't find site
**Solution:** Submit to Google Search Console, create sitemap

---

## Need Help?

**Priority Order:**
1. Update domain URLs (CRITICAL)
2. Test contact form
3. Add team info and photos
4. Create favicons
5. Set up analytics

**Most Important:** 
Replace `pathwaysystemsstudio.com` with your actual domain in meta tags!

---

## Ready to Launch?

When all boxes above are checked:
1. Upload all files to web host
2. Test the live site
3. Submit to Google Search Console
4. Share on social media
5. Start getting clients! 🎉

**Estimated Setup Time:** 2-3 hours for all updates

Good luck! 🚀
