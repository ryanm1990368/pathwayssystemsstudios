# Team Photos Setup Guide

## How to Replace Placeholder Icons with Real Photos

### Step 1: Prepare Your Photos

1. **Photo Requirements:**
   - Square format (e.g., 500x500px or 1000x1000px)
   - Professional headshots work best
   - Clear, well-lit images
   - Neutral or professional background
   - File format: JPG or PNG
   - File size: Optimized for web (under 500KB each)

2. **Save your photos** in the same folder as your HTML file with simple names:
   - `ryan-marino.jpg`
   - `team-member-2.jpg`
   - `team-member-3.jpg`

### Step 2: Update the HTML

Replace each team member's placeholder div with an image tag.

**Find this code in index.html:**
```html
<div class="team-photo-placeholder">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
</div>
```

**Replace it with:**
```html
<img src="ryan-marino.jpg" alt="Ryan Marino" class="team-photo">
```

### Step 3: Complete Example

Here's what a complete team member section should look like with a real photo:

```html
<div class="team-member">
    <img src="ryan-marino.jpg" alt="Ryan Marino" class="team-photo">
    <h3 class="team-name">Ryan Marino</h3>
    <div class="team-title">Principal Consultant</div>
    <p class="team-bio">PhD candidate in Interdisciplinary Studies with 9+ years of experience in public health, policy analysis, and organizational transformation. Expertise in Indigenous health systems, research methodology, and strategic advisory across government and healthcare organizations.</p>
</div>
```

### Step 4: Update All Team Members

Repeat for each team member:

1. Save their photo with a descriptive filename
2. Replace the `<div class="team-photo-placeholder">` section with `<img src="filename.jpg" alt="Name" class="team-photo">`
3. Make sure the `alt` text matches the person's name

### CSS is Already Set Up

The CSS already includes styling for `.team-photo` class, so your photos will automatically:
- Be displayed as circles (150px diameter)
- Have a blue border
- Be properly centered
- Look great on mobile and desktop

### Tips for Best Results

1. **Consistency:** Use similar photo styles for all team members (same lighting, background style)
2. **Face Position:** Make sure faces are centered in the frame
3. **Optimization:** Use tools like TinyPNG (https://tinypng.com) to compress images
4. **Naming:** Use lowercase with hyphens (e.g., `john-smith.jpg`)

### Example File Structure

```
your-website/
├── index.html
├── styles.css
├── script.js
├── logo.png
├── ryan-marino.jpg
├── team-member-2.jpg
└── team-member-3.jpg
```

### Testing

After adding photos:
1. Open index.html in your browser
2. Navigate to the Team section
3. Verify all photos load correctly
4. Check that photos look good on mobile (resize browser window)
5. Ensure photos maintain proper aspect ratio (circular shape)

If a photo doesn't load, check:
- File name spelling matches exactly (case-sensitive)
- Photo file is in the same folder as index.html
- File extension is correct (.jpg vs .jpeg)

---

That's it! Your team photos will now display beautifully on your website.
