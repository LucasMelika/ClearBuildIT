# ClearBuildIT · Maatwerk SaaS & Apps

Landing page & portfolio voor **ClearBuildIT**: het bouwteam voor maatwerk SaaS-platformen, websites, webapps en mobile apps.

## 🚀 Quick Start

### Vereisten
- Node.js 16+ 
- npm of yarn

### Installatie
```bash
# Clone repository
git clone https://github.com/LucasMelika/ClearBuildIT.git
cd ClearBuildIT

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Stack & Technologieën

### Frontend
- **Vite 5** - Lightning-fast build tool
- **React 18** - UI library
- **Tailwind CSS 3** - Utility-first CSS
- **Framer Motion** - Smooth animations
- **React Router v7** - Client-side routing

### UI Components
- **Headless UI** - Unstyled, accessible components
- **Heroicons** - Beautiful hand-crafted SVG icons
- **React Icons** - Icon library (FontAwesome, Feather, etc.)

### Services & Tools
- **EmailJS** - Serverless email notifications
- **Resend** - Email delivery (optional)
- **React Helmet Async** - SEO & document head management
- **Sentry** - Error tracking & monitoring
- **React GA4** - Google Analytics integration

### Dev Tools
- **PostCSS** - CSS transformations
- **Autoprefixer** - Vendor prefixes

## 📁 Project Structure

```
ClearBuildIT/
├── public/
│   ├── favicon.svg
│   ├── robots.txt          # SEO - Search engine crawling
│   └── sitemap.xml         # SEO - Site structure
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ContactForm.jsx # With spam protection
│   │   ├── ServicesCard.jsx
│   │   ├── ProjectSlider.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── ComparisonCard.jsx
│   │   ├── LoadingSkeleton.jsx
│   │   ├── ScrollCTA.jsx
│   │   └── SubNavbar.jsx
│   ├── pages/              # Route components
│   │   ├── SaaSDemo.jsx
│   │   ├── WebAppDemo.jsx
│   │   ├── MobileAppDemo.jsx
│   │   ├── Privacybeleid.jsx
│   │   ├── AlgemeneVoorwaarden.jsx
│   │   ├── CookieBeleid.jsx
│   │   └── NotFound.jsx
│   ├── sections/           # Page sections
│   │   └── Hero.jsx
│   ├── styles/
│   │   └── index.css       # Tailwind directives
│   ├── App.jsx             # Main app component + routing
│   ├── Home.jsx            # Homepage
│   ├── Diensten.jsx        # Services page
│   └── main.jsx            # App entry point
├── index.html              # HTML template with SEO tags
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── package.json
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## 🔧 Configuration

### Environment Variables
Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

**Environment variables:**
- `VITE_EMAILJS_SERVICE_ID` - EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID` - EmailJS template ID
- `VITE_EMAILJS_PUBLIC_KEY` - EmailJS public key
- `VITE_GOOGLE_ANALYTICS_ID` - Google Analytics 4 ID (GA_XXXXXXX)
- `VITE_SENTRY_DSN` - Sentry error tracking DSN
- `VITE_API_URL` - Backend API URL (optional)
- `VITE_APP_URL` - Website URL

### Tailwind Configuration
Customize colors, fonts, and spacing in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: { /* ... */ },
    fontFamily: { /* ... */ }
  }
}
```

## 🔒 Security & Performance Features

### Security
- ✅ **Honeypot Field** - Spam bot protection in contact form
- ✅ **Rate Limiting** - Max 5 form submissions per hour per IP
- ✅ **Email Validation** - Client-side + server-side
- ✅ **Error Boundaries** - Graceful error handling with Sentry
- ✅ **CSP Headers** - Content Security Policy (configure on hosting)

### Performance & SEO
- ✅ **JSON-LD Schema** - Structured data for Google
- ✅ **Open Graph Tags** - Social media sharing
- ✅ **robots.txt** - Search engine crawling rules
- ✅ **sitemap.xml** - Site structure for indexing
- ✅ **Meta Tags** - Title, description, keywords
- ✅ **Code Splitting** - Automatic route lazy loading
- ✅ **Image Optimization** - Vite handles asset optimization

### Monitoring
- 📊 **Google Analytics 4** - User behavior tracking
- 🚨 **Sentry** - Real-time error tracking
- ⚡ **Performance Monitoring** - Core Web Vitals (optional)

## 📧 Contact Form

The contact form includes:
- **Email Service** - Powered by EmailJS
- **Spam Protection** - Honeypot field + rate limiting
- **Validation** - Email format, required fields
- **Confirmation** - Auto-reply emails
- **Confetti Animation** - Visual feedback on success

### Setup EmailJS
1. Go to [emailjs.com](https://www.emailjs.com)
2. Create an account and service
3. Copy service ID, template ID, and public key
4. Update `.env.local`

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Traditional Hosting
```bash
npm run build
# Upload `dist/` folder to your hosting
```

### Hosting Requirements
- **HTTPS** - Required for security
- **Environment Variables** - Set in hosting dashboard
- **Security Headers** - Add these (hosting-specific):
  - `X-Frame-Options: SAMEORIGIN`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: geolocation=(), microphone=(), camera=()`

## 📈 Analytics & Monitoring

### Google Analytics
Events and page views are automatically tracked. View dashboard at:
- https://analytics.google.com

### Sentry Error Tracking
Errors are automatically captured. View dashboard at:
- https://sentry.io

## 🛠️ Development

### Code Style
- Use functional components with hooks
- Keep components small and reusable
- Use Tailwind for styling (avoid inline CSS)
- Add comments for complex logic

### Adding New Pages
```jsx
// 1. Create page in src/pages/
// 2. Update routing in App.jsx
<Route path="/new-page" element={<NewPage />} />
// 3. Add to sitemap.xml for SEO
```

### Adding New Components
```jsx
// src/components/MyComponent.jsx
export default function MyComponent() {
  return <div className="...">Content</div>
}

// Import in page or component
import MyComponent from '../components/MyComponent'
```

## 📝 Legal Pages

- `/privacybeleid` - Privacy policy
- `/algemene-voorwaarden` - General terms & conditions
- `/cookie-beleid` - Cookie policy

Update these pages with your actual legal text.

## 🐛 Troubleshooting

### Build Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port Already in Use
```bash
# Change port in vite.config.js
server: {
  port: 3000 // Change to different port
}
```

## 📞 Support

For questions or issues:
- Open an issue on GitHub
- Contact: infomelikas@gmail.com

## 📄 License

Private - for ClearBuildIT internal use only.

---

**Version**: 1.0.0  
**Last Updated**: February 2026  
**Maintained by**: Lucas Melika (@github.com/LucasMelika)
