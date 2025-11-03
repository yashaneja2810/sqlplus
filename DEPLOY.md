# Deploying SQL+ to Vercel

## Step 1: Build the Executable

1. Add your Gemini API key in `sqlplus.js` line 7:
   ```javascript
   const API_KEY = 'YOUR_ACTUAL_GEMINI_API_KEY';
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the executable:
   ```bash
   npm run build
   ```
   This creates `dist/sqlplus.exe`

## Step 2: Host the Executable

You have two options:

### Option A: GitHub Releases (Recommended)

1. Create a GitHub repository for your project
2. Go to "Releases" → "Create a new release"
3. Upload `dist/sqlplus.exe` as a release asset
4. Copy the download URL (it will look like: `https://github.com/USERNAME/REPO/releases/download/v1.0.0/sqlplus.exe`)
5. Update the download link in `website/index.html` (line with `href="https://github.com/YOUR_USERNAME/..."`)

### Option B: Direct File Hosting

1. Upload `dist/sqlplus.exe` to a file hosting service:
   - Dropbox (get direct link)
   - Google Drive (make public and get direct link)
   - AWS S3
   - Any CDN

2. Update the download link in `website/index.html` with your file URL

## Step 3: Deploy to Vercel

### Method 1: Vercel CLI (Fastest)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? **sqlplus** (or your choice)
   - Directory? **./website**
   - Override settings? **N**

5. Your site is now live! Vercel will give you a URL like `https://sqlplus.vercel.app`

### Method 2: Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New" → "Project"
3. Import your Git repository (GitHub/GitLab/Bitbucket)
4. Configure:
   - Framework Preset: **Other**
   - Root Directory: **website**
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
5. Click "Deploy"

### Method 3: GitHub Integration (Automatic)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project" → Select your GitHub repo
4. Set Root Directory to **website**
5. Deploy!

Every push to main branch will auto-deploy.

## Step 4: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Settings → Domains
3. Add your custom domain (e.g., `sqlplus.com`)
4. Follow DNS configuration instructions

## Troubleshooting

**Issue**: Download link doesn't work
- Make sure the executable URL is publicly accessible
- Test the URL in a browser first

**Issue**: Website shows 404
- Check `vercel.json` is in the root directory
- Verify `website` folder contains `index.html`

**Issue**: Styles not loading
- Ensure `style.css` is in the `website` folder
- Check browser console for errors

## Post-Deployment Checklist

- [ ] Test download link works
- [ ] Test executable runs on Windows
- [ ] Check all website links work
- [ ] Test on mobile devices
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain (optional)

## Updating

To update the website:
1. Make changes to files in `website/` folder
2. Push to GitHub (if using Git integration)
   OR
3. Run `vercel --prod` (if using CLI)

To update the executable:
1. Rebuild with `npm run build`
2. Upload new `sqlplus.exe` to your hosting
3. Update version number in `website/index.html`
