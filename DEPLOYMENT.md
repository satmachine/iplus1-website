# GitHub Pages Deployment Guide

## Overview
This project is deployed to GitHub Pages at **https://iplus1.com.au/** using a custom domain.

## Setup Details

### Current Configuration
- **Hosting**: GitHub Pages (Deploy from Branch)
- **Source Branch**: `main`
- **Deploy Folder**: `/docs`
- **Custom Domain**: `iplus1.com.au` (configured in CNAME file)
- **Build Output**: `/docs` folder contains the built production files

### Key Files
- **CNAME**: Contains `iplus1.com.au` - required for custom domain
- **package.json**: Build script that outputs to `/docs` folder
- **vite.config.ts**: Vite configuration with `base: '/'`

## Deployment Process

### To Deploy Changes
1. Make your code changes locally
2. Run the build command:
   ```bash
   npm run build
   ```
3. This will:
   - Build your React + TypeScript project with Vite
   - Remove the old `/docs` folder
   - Move the new `/dist` folder to `/docs`
   - Copy the CNAME file into `/docs`

4. Commit and push to `main`:
   ```bash
   git add -A
   git commit -m "Your commit message"
   git push
   ```

5. GitHub Pages will automatically deploy from the `/docs` folder within seconds

### What NOT to Do
❌ **DO NOT** create a nested folder structure like `/docs/dist/`
- The build script should put files directly in `/docs/`, not `/docs/dist/`
- Files should be: `/docs/index.html`, `/docs/assets/`, `/docs/CNAME`
- **NOT**: `/docs/dist/index.html`, `/docs/dist/assets/`

❌ **DO NOT** forget the CNAME file in `/docs/`
- The CNAME file is required for the custom domain to work
- The build script automatically copies it

❌ **DO NOT** use different deploy methods simultaneously
- Either deploy from branch OR use GitHub Actions, not both
- Currently configured to deploy from `/docs` on `main` branch

## GitHub Pages Settings (for reference)

Go to **Repository Settings → Pages** and verify:
- ✅ **Source**: "Deploy from a branch"
- ✅ **Branch**: `main`
- ✅ **Folder**: `/docs`
- ✅ **Custom Domain**: `iplus1.com.au`

## Troubleshooting

### Website shows blank page
1. Check browser console for asset loading errors
2. Verify `/docs/assets/` folder contains `index-*.js` and `index-*.css` files
3. Verify `/docs/index.html` exists and references correct asset paths
4. Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)

### DNS/Domain not working
1. Verify CNAME file exists in `/docs/` with correct domain name
2. Check that domain DNS records point to GitHub Pages IPs:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

### Changes not appearing
1. Run `npm run build` to create new `/docs` folder
2. Push to `main` branch
3. Wait 1-2 minutes for GitHub Pages to deploy
4. Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)

## Build Script Explanation

```json
"build": "tsc && vite build && rm -rf docs && mv dist docs && cp CNAME docs/"
```

1. **`tsc`** - TypeScript compiler checks for type errors
2. **`vite build`** - Builds React app, outputs to `/dist` folder
3. **`rm -rf docs`** - Removes old `/docs` folder
4. **`mv dist docs`** - Moves fresh `/dist` to `/docs`
5. **`cp CNAME docs/`** - Copies CNAME file into `/docs` for custom domain

This ensures clean deployments with no nested folder issues.

## Common Workflow

```bash
# 1. Make code changes locally
# 2. Test with dev server
npm run dev

# 3. When ready to deploy
npm run build

# 4. Push to GitHub
git add -A
git commit -m "Update: describe your changes"
git push

# Site updates automatically within seconds!
```

## Additional Resources
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Configuration](https://vitejs.dev/config/)
- [React Documentation](https://react.dev/)
