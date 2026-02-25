# ⚡ Google Search Console - 5 Minute Quick Start

**Goal**: Verify & submit your site to Google in 5 minutes.

---

## ✅ Step 1: Go to Google Search Console (1 min)

1. Visit [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google account
3. Click **"Add property"** (top left)

---

## ✅ Step 2: Choose Verification Method (1 min)

**Select: "URL prefix"**
- Enter: `https://clearbuildit.nl`
- Click **Continue**

Then choose your verification method:

### **Option A: DNS Record (RECOMMENDED) ⭐**

**Fastest for most people:**

1. Google gives you a string like: `google-site-verification=xxxxxxxxxxxxx`
2. Go to your domain registrar (GoDaddy, Namecheap, etc.)
3. Find DNS settings
4. Add a **TXT record**:
   - **Name/Host**: Leave blank or `@`
   - **Value**: Paste the verification string
5. Wait 5-10 minutes
6. Return to Google Search Console and click **"Verify"**

**Note**: If you changed registrar recently, DNS changes can take 24h.

---

### **Option B: HTML File (ALTERNATIVE)**

If DNS is confusing:

1. Google gives you an HTML file (e.g., `google-site-verification-xxxxxx.html`)
2. I already created `/public/google-site-verification.html` in your project
3. Add Google's verification code to that file
4. This will be served at: `https://clearbuildit.nl/google-site-verification.html`
5. Click **"Verify"** in Google Search Console

---

### **Option C: Google Analytics (EASIEST IF YOU HAVE IT)**

1. Link your existing Google Analytics account
2. Google verifies automatically
3. Done!

---

## ✅ Step 3: Submit Sitemap (2 min)

Once verified:

1. Left sidebar → **"Sitemaps"**
2. Click **"Add/test sitemap"**
3. Enter: `sitemap.xml`
4. Click **Submit**

**Google will now crawl all your pages!**

---

## ✅ Step 4: Monitor Performance (1 min)

Left sidebar → **"Performance"**

This shows:
- **Total impressions**: How many times you appear in search
- **Total clicks**: How many people click your link
- **Average position**: Where you rank (lower = better)

**Note**: Data appears after 1-2 weeks. Be patient!

---

## 🔍 Troubleshooting

**"Ownership not verified"**
- DNS changes take up to 24h
- Check you pasted the code correctly
- Try HTML file method instead

**"Sitemap not indexing"**
- Wait 24-48 hours
- Check Coverage report for errors
- Ensure sitemap.xml is valid XML

**"0 impressions after 1 week"**
- Normal! Google needs time to crawl
- Keep writing content
- Add more internal links

---

## 📊 What to Check Weekly

1. **Coverage** → Any errors? (Usually ~95% valid is OK)
2. **Performance** → Are clicks trending up?
3. **Enhancements** → Any structured data issues?

---

## ✅ You're Done!

Once verified + sitemap submitted = Google is now indexing your site. 🎉

**Next**: Write blog posts + build backlinks = better rankings in 2-3 months.

---

**Questions?** Check the full guide: `docs/GOOGLE_SEARCH_CONSOLE_SETUP.md`
