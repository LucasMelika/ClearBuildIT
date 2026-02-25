# Deployment Guide

## ✅ Pre-deployment Checklist

- [ ] All environment variables configured (.env.local)
- [ ] Supabase database setup and tested
- [ ] Slack webhook configured and tested
- [ ] Google Analytics ID configured
- [ ] Sentry DSN configured
- [ ] Contact form tested locally
- [ ] Build passes without errors (`npm run build`)
- [ ] No console errors in development

## 🚀 Deploy to Vercel (Recommended)

### 1. Connect GitHub Repository
```bash
# Push code to GitHub
git push origin main
```

### 2. Import to Vercel
- Go to [vercel.com](https://vercel.com)
- Click **Add New...** → **Project**
- Select your GitHub repository
- Click **Import**

### 3. Configure Environment Variables
In Vercel dashboard, go to **Settings** → **Environment Variables**

Add these:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key
VITE_SUPABASE_SERVICE_KEY=your_service_key
VITE_GOOGLE_ANALYTICS_ID=G_XXXXX
VITE_SENTRY_DSN=https://xxxxx
VITE_SLACK_WEBHOOK_URL=https://hooks.slack.com/services/xxx
VITE_ADMIN_PASSWORD=your_admin_password
VITE_APP_URL=https://yourdomain.com
```

### 4. Deploy
- Click **Deploy**
- Wait for deployment to complete
- Visit your site!

### 5. Setup Custom Domain
- Go to **Settings** → **Domains**
- Add your domain
- Update DNS records (instructions provided by Vercel)

---

## 🚀 Deploy to Netlify

### 1. Connect GitHub Repository
- Go to [netlify.com](https://netlify.com)
- Click **New site from Git**
- Select your GitHub repository
- Click **Authorize Netlify**

### 2. Configure Build Settings
- Build command: `npm run build`
- Publish directory: `dist`
- Click **Deploy**

### 3. Add Environment Variables
- Go to **Site settings** → **Build & deploy** → **Environment**
- Add all the same variables as Vercel

### 4. Trigger Deploy
- Push changes to GitHub
- Netlify will automatically deploy

---

## 🌐 Setup Custom Domain

### 1. Vercel
- Go to **Project Settings** → **Domains**
- Click **Add Domain**
- Follow DNS instructions

### 2. Netlify
- Go to **Site settings** → **Domain management**
- Click **Add custom domain**
- Follow DNS setup

### 3. Update DNS Records
With your domain registrar (GoDaddy, Hostinger, etc.):
- Point your domain to the hosting provider's DNS servers
- Wait 24-48 hours for propagation

---

## 🔒 Security Setup

### 1. Enable HTTPS (Auto-enabled on Vercel/Netlify)
- All traffic is automatically HTTPS
- HTTP is redirected to HTTPS

### 2. Configure Content Security Policy
Already set in `vercel.json`:
- Prevents XSS attacks
- Restricts iframe embedding
- Limits external resources

### 3. Admin Password
- Change default password in `/src/pages/AdminDashboard.jsx`
- For production: implement proper authentication

### 4. Database Security
- RLS (Row Level Security) enabled in Supabase
- API keys restricted to read/write form submissions only

---

## 📊 Setup Analytics & Monitoring

### 1. Google Analytics
- Go to [analytics.google.com](https://analytics.google.com)
- Create new property for your domain
- Copy GA4 ID
- Add to `VITE_GOOGLE_ANALYTICS_ID`

### 2. Sentry Error Tracking
- Go to [sentry.io](https://sentry.io)
- Create new project
- Copy DSN
- Add to `VITE_SENTRY_DSN`

### 3. Slack Notifications
- Webhook already configured in setup
- Notifications come automatically on contact form submissions

---

## 🧪 Test Deployment

1. **Visit your site** - Check that it loads
2. **Test contact form** - Submit a form, check:
   - Email received
   - Slack notification sent
   - Submission saved in Supabase
3. **Check analytics** - Visit analytics.google.com after 24 hours
4. **Check errors** - Visit sentry.io to verify error tracking works
5. **Check admin dashboard** - Go to `/admin` and verify you can see submissions

---

## 🔄 Continuous Deployment

### Automatic Deploys
- Any push to `main` branch → automatic deployment
- Branch previews for pull requests (Vercel/Netlify)

### Deploy Status
- Vercel: Check at [vercel.com](https://vercel.com)
- Netlify: Check at [netlify.com](https://netlify.com)

---

## 📱 Monitor Performance

### Core Web Vitals
- Largest Contentful Paint (LCP): < 2.5s ✅
- First Input Delay (FID): < 100ms ✅
- Cumulative Layout Shift (CLS): < 0.1 ✅

Check in:
- Google Analytics > Reports > Core Web Vitals
- PageSpeed Insights

### Optimization Tips
- Images are optimized by Vite
- Code splitting is automatic
- Caching headers configured in vercel.json

---

## 🆘 Troubleshooting Deployment

### Build fails
```bash
# Clean and rebuild locally
rm -rf node_modules dist
npm install
npm run build
```

### Environment variables not working
- Verify variables are set in hosting dashboard
- Restart deployment
- Check variable names match `.env.example`

### Contact form not saving
- Check Supabase credentials in environment
- Verify `form_submissions` table exists
- Check RLS policies are enabled

### Slack notifications not working
- Test webhook manually with curl
- Verify webhook URL is correct
- Check Slack app permissions

### Admin dashboard not accessible
- Verify `VITE_ADMIN_PASSWORD` is set
- Check browser console for errors
- Make sure `/admin` route exists

---

## 📈 After Deployment

1. **Monitor analytics** - Track visitor behavior
2. **Monitor errors** - Check Sentry dashboard daily
3. **Check submissions** - Review admin dashboard regularly
4. **Update content** - Make changes and redeploy
5. **Backup database** - Supabase does automatic daily backups
6. **Monitor costs** - Check Vercel/Supabase usage

---

## 🚀 You're Live!

Congratulations! Your ClearBuildIT site is now live and professional.

**Next steps:**
- Submit your sitemap to Google Search Console
- Submit to Bing Webmaster Tools
- Monitor analytics and make improvements
- Gather customer feedback
- Create case studies from successful projects

Happy tracking! 📊
