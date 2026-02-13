# Build Test Report

**Date:** 2026-02-13
**Nuxt Version:** 3.16.3
**Nitro Preset:** static

---

## Build Status: ✅ SUCCESS

---

## Build Output

### Pre-rendered Routes
✅ All 3 routes pre-rendered successfully:
- `/` (index.html) - 118ms
- `/credits` (credits/index.html) - 90ms
- `/contributors` (contributors/index.html) - 487ms

### Additional Files
- `200.html` (SPA fallback)
- `404.html` (error page)
- `robots.txt`
- `favicon.ico`
- `_nuxt/` directory with optimized bundles

---

## Bundle Sizes

### CSS
- `entry.C_moUBdP.css`: 33.71 kB (gzip: 6.48 kB)
- `error-404.FrDcNFXa.css`: 2.43 kB (gzip: 0.86 kB)
- `error-500.BPsRB--4.css`: 1.91 kB (gzip: 0.73 kB)

### JavaScript
- Main bundle: 174.89 kB (gzip: 65.86 kB)
- Vue runtime + app code: 37.72 kB (gzip: 15.32 kB)
- Lucide icons: 14.39 kB (gzip: 5.40 kB)
- Additional chunks: ~20 kB total

### Assets
- 15 fruit images (11.86 - 42.08 kB each)
- Total images: ~320 kB

---

## Preview Test Results

### Server Start
✅ Preview server started successfully
- Command: `pnpm preview`
- Uses: `npx serve public`
- Port: 3000

### Route Testing
✅ All routes accessible in production mode:
- `http://localhost:3000` → 200 OK
- `http://localhost:3000/credits` → 200 OK
- `http://localhost:3000/contributors` → 200 OK

### Direct URL Access
✅ Direct URL access works (no hash routing)
- Clean URLs enabled
- All pre-rendered HTML files served correctly

---

## Build Performance

- Client build: 2.02s
- Server build: 1.77s
- Pre-rendering: 0.96s
- **Total build time: ~4.8s**

---

## Static Generation Verification

✅ **SSG working perfectly:**
- All pages pre-rendered at build time
- Zero client-side routing required for initial page loads
- SEO-friendly HTML output
- Fast initial page load (no JS needed for content)

---

## Warnings

⚠️ Minor sourcemap warnings from `@tailwindcss/vite:generate:build`
- Does not affect functionality
- Known issue with Tailwind CSS v4 Vite plugin
- Can be safely ignored

---

## Conclusion

✅ **Production build: FULLY FUNCTIONAL**
✅ **SSG output: CORRECT**
✅ **All routes: PRE-RENDERED**
✅ **Preview server: WORKING**

**Ready for deployment to Vercel.**
