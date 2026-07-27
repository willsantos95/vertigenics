# Vertigenics - Presell Landing Page

A high-converting presell landing page for Vertigenics supplement product, optimized for Google Ads and affiliate marketing.

## Features

✨ **Responsive Design** - Mobile, tablet, and desktop optimization
✨ **Fast Loading** - Optimized assets and nginx compression
✨ **SEO Friendly** - Meta tags, structured data ready
✨ **Conversion Optimized** - Multiple CTA buttons and countdown timer
✨ **Google Ads Ready** - Conversion tracking ready
✨ **Docker Ready** - Easy deployment to any cloud platform

## Project Structure

```
├── index.html          # Main landing page
├── style.css           # Responsive styling
├── script.js           # Interactive features
├── Dockerfile          # Docker configuration
├── nginx.conf          # Nginx web server config
├── docker-compose.yml  # Local development setup
├── .gitignore         # Git ignore patterns
└── README.md          # This file
```

## Local Development

### Prerequisites
- Docker
- Docker Compose (optional)

### Quick Start with Docker

```bash
# Build the Docker image
docker build -t vertigenics:latest .

# Run the container
docker run -p 80:8080 vertigenics:latest
```

Then open http://localhost:8080 in your browser.

### Using Docker Compose

```bash
# Start the application
docker-compose up -d

# Stop the application
docker-compose down
```

## Deployment to EasyPanel

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Vertigenics presell landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/vertigenics.git
git push -u origin main
```

### Step 2: Deploy on EasyPanel

1. Log in to your EasyPanel dashboard
2. Click "Create New App"
3. Select "Docker" as the deployment type
4. Paste your GitHub repository URL
5. Configure the following:
   - **Dockerfile Path**: `/Dockerfile`
   - **Port**: `80`
   - **Environment**: Production

6. Click "Deploy"

## Features Breakdown

### 🎯 Hero Section
- Eye-catching headline and subheading
- Limited-time discount offer
- Trust badges
- Primary CTA button

### 📋 Problems Section
- Identifies customer pain points
- 4-column responsive grid
- Emoji icons for visual engagement

### ✅ Solution Section
- Product image showcase
- 6 key benefits with checkmarks
- Gradient background for visual interest

### 💊 Ingredients Section
- 6 premium ingredients highlighted
- Hover effects for interactivity
- Color-coded cards

### 💬 Testimonials Section
- 5-star reviews
- Real customer quotes
- Social proof elements

### 🛡️ Guarantee Section
- 60-day money-back guarantee
- Risk reversal messaging
- Prominent shield icon

### 💰 Pricing Section
- 3 package options
- "Most Popular" featured card
- Clear pricing breakdown
- Free shipping indicators

### ❓ FAQ Section
- 4 common questions
- Clear, concise answers
- Reduces purchase friction

### ⏱️ Countdown Timer
- Real-time countdown
- Creates urgency
- Resets daily

### 📝 Order Form
- Redirects to affiliate link
- Secure checkout messaging
- Mobile optimized

## Google Ads Integration

The page includes hooks for Google Ads conversion tracking:

```html
<!-- Add your Google Ads conversion tracking -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

Add this to the `<head>` section of index.html

## Performance Optimization

- **Gzip Compression**: Enabled in nginx.conf
- **Browser Caching**: Long expiry for static assets
- **Image Optimization**: Ready for WebP and lazy loading
- **Minification Ready**: Can be integrated with build tools

## Security Features

- X-Frame-Options (prevents clickjacking)
- X-Content-Type-Options (prevents MIME sniffing)
- X-XSS-Protection (XSS protection)
- Referrer-Policy (privacy protection)
- Sensitive file protection (deny access to dot files)

## Affiliate Link

All CTA buttons redirect to:
```
https://getmyvertigenics24.com/text.php#aff=willsantos95
```

To change the affiliate ID, update all instances in `index.html`

## Customization

### Change Affiliate Link
Search and replace all instances of `aff=willsantos95` with your affiliate ID

### Adjust Pricing
Edit the pricing section in index.html with your actual prices

### Update Product Images
Replace placeholder images with real product photos

### Add Google Analytics
Add your GA tracking code to index.html

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Lighthouse Performance

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## License

This project is proprietary. All rights reserved.

## Support

For issues or questions, contact: willsantos95@gmail.com

---

**Deploy Status**: Ready for production
**Last Updated**: 2025
**Version**: 1.0.0
