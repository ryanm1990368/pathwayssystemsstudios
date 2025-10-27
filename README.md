# Apex Consulting Website

A professional, modern consulting business website built with HTML, CSS, and JavaScript. Fully responsive and ready to deploy on GitHub Pages.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Fully Responsive**: Looks great on desktop, tablet, and mobile devices
- **Smooth Scrolling**: Enhanced navigation experience
- **Contact Form**: Ready-to-customize contact form (needs backend integration)
- **Fast Loading**: Pure HTML/CSS/JS with no heavy frameworks
- **SEO Ready**: Semantic HTML structure with proper meta tags

## 📁 File Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Interactive functionality
└── README.md          # This file
```

## 🎨 Customization Guide

### 1. Basic Information

**Company Name & Branding** (in `index.html`):
- Line 8: Update `<title>` tag
- Line 19: Update `.nav-brand` text
- Throughout: Replace "Apex Consulting" with your company name

**Contact Information** (in `index.html`, Contact Section):
- Email: Replace `hello@apexconsulting.com`
- Phone: Replace `+1 (555) 123-4567`
- Address: Update office location

### 2. Content Customization

**Hero Section**:
- Update the main headline and subtitle
- Modify button text and links

**Services**:
- Each service is in a `.service-card` div
- Update icons (use emoji or replace with icon library)
- Modify service titles and descriptions

**Results/Statistics**:
- Update numbers in `.result-number` divs
- Modify descriptions to match your achievements

**Case Studies**:
- Replace with your actual client work
- Update industry, description, and metrics

**Testimonials**:
- Replace with real client testimonials
- Update names and titles

**About Section**:
- Update company story and statistics
- Replace the placeholder icon with your team photo

### 3. Colors & Branding

Update colors in `styles.css` (lines 15-25):

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #1e40af;    /* Darker shade */
    --accent-color: #3b82f6;       /* Lighter shade */
    /* ... other colors ... */
}
```

### 4. Images

To add real images:

1. Create an `images` folder in your project
2. Add your images there
3. Replace the placeholder in the About section:

```html
<!-- Replace this: -->
<div class="about-image-placeholder">
    <span>🎯</span>
</div>

<!-- With this: -->
<img src="images/your-image.jpg" alt="Description">
```

### 5. Contact Form Setup

The form currently displays a success message. To actually send emails:

**Option 1: Formspree (Easiest)**
1. Sign up at [formspree.io](https://formspree.io)
2. Update form action:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: EmailJS**
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Follow their JavaScript integration guide
3. Update the form handler in `script.js`

**Option 3: Netlify Forms**
1. Add `netlify` attribute to form
2. Deploy on Netlify (automatic form handling)

## 🌐 Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the '+' icon → 'New repository'
3. Name it (e.g., 'consulting-website')
4. Make it **Public**
5. Don't initialize with README (you already have one)
6. Click 'Create repository'

### Step 2: Upload Files

**Option A: Using GitHub Web Interface (Easier)**

1. In your new repository, click 'uploading an existing file'
2. Drag and drop all files (`index.html`, `styles.css`, `script.js`, `README.md`)
3. Click 'Commit changes'

**Option B: Using Git Command Line**

```bash
# In your project folder
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, go to **Settings**
2. Scroll down to **Pages** (in the left sidebar)
3. Under **Source**, select **main** branch
4. Click **Save**
5. Wait 1-2 minutes for deployment

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Step 4: Connect Custom Domain

If you have a domain (e.g., from GoDaddy, Namecheap, etc.):

1. In GitHub Pages settings, enter your domain in 'Custom domain'
2. In your domain provider's DNS settings:
   - Add an **A record** pointing to: `185.199.108.153`
   - Add another **A record** to: `185.199.109.153`
   - Add another **A record** to: `185.199.110.153`
   - Add another **A record** to: `185.199.111.153`
   - (Optional) Add a **CNAME record** from `www` to `YOUR_USERNAME.github.io`

3. Wait for DNS propagation (can take 24-48 hours)

**Note**: GitHub provides free HTTPS certificates for custom domains!

## 🔧 Making Updates

After initial deployment:

1. Edit files locally
2. Go to your GitHub repository
3. Click on the file you want to update
4. Click the pencil icon (Edit)
5. Make changes
6. Click 'Commit changes'

Changes go live automatically within a few minutes!

## 📱 Testing Responsiveness

Test your site on different devices:
- Desktop: Full browser
- Tablet: Resize browser to ~768px width
- Mobile: Resize to ~375px width
- Or use browser DevTools (F12 → Toggle device toolbar)

## 🎯 Performance Tips

1. **Compress images** before uploading (use TinyPNG or similar)
2. **Optimize images**: Use WebP format for better compression
3. **Add favicon**: Create a `favicon.ico` and reference in HTML
4. **Test speed**: Use Google PageSpeed Insights

## 🔍 SEO Enhancements

Update in `index.html`:

```html
<meta name="description" content="Your company description">
<meta name="keywords" content="consulting, business, strategy">
<meta property="og:title" content="Your Company Name">
<meta property="og:description" content="Description">
<meta property="og:image" content="URL to your image">
```

## 📊 Analytics

To track visitors, add Google Analytics:

1. Sign up at [analytics.google.com](https://analytics.google.com)
2. Get your tracking code
3. Add before `</head>` in `index.html`

## 🆘 Troubleshooting

**Site not loading?**
- Check that files are in the repository root (not in a subfolder)
- Verify GitHub Pages is enabled in settings
- Clear browser cache

**Custom domain not working?**
- Verify DNS settings in your domain provider
- Wait for DNS propagation (24-48 hours)
- Check 'Enforce HTTPS' is enabled in GitHub Pages settings

**Form not sending emails?**
- The default form shows a success message only
- Integrate with Formspree, EmailJS, or a backend service

## 📞 Need Help?

- GitHub Pages Docs: https://docs.github.com/en/pages
- HTML/CSS Help: https://developer.mozilla.org/
- Web Design Inspiration: https://dribbble.com, https://awwwards.com

## 📄 License

This template is free to use for your consulting business. Customize it as needed!

---

**Built with ❤️ for your consulting business success!**
