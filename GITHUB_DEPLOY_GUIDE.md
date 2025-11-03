# Complete GitHub + Vercel Deployment Guide

## Prerequisites
- GitHub account (free)
- Vercel account (free) - sign up at vercel.com
- Git installed on your computer
- Your Gemini API key

---

## Part 1: Prepare Your Project (5 minutes)

### Step 1: Add Your API Key
1. Open `sqlplus.js` in your code editor
2. Find line 7: `const API_KEY = 'YOUR_GEMINI_API_KEY_HERE';`
3. Replace `YOUR_GEMINI_API_KEY_HERE` with your actual Gemini API key
4. Save the file

Example:
```javascript
const API_KEY = 'AIzaSyDxxxxxxxxxxxxxxxxxxxxxxxxxxx';
```

### Step 2: Build the Executable
1. Open Command Prompt in your project folder
2. Run these commands:
```cmd
npm install
npm run build
```
3. Wait for it to finish (1-2 minutes)
4. Check that `dist/sqlplus.exe` was created

---

## Part 2: Create GitHub Repository (5 minutes)

### Step 1: Create Repository on GitHub
1. Go to https://github.com
2. Click the **"+"** icon (top right) → **"New repository"**
3. Fill in:
   - Repository name: `sqlplus` (or any name you want)
   - Description: `SQL+ AI Command Processor`
   - Choose **Public** (so Vercel can access it)
   - ✅ Check "Add a README file" - **UNCHECK THIS** (we already have one)
4. Click **"Create repository"**

### Step 2: Initialize Git in Your Project
1. Open Command Prompt in your project folder
2. Run these commands one by one:

```cmd
git init
git add .
git commit -m "Initial commit - SQL+ AI Chat Tool"
```

### Step 3: Connect to GitHub
1. Copy the commands from GitHub (they show after creating repo)
2. It will look like this:

```cmd
git remote add origin https://github.com/YOUR_USERNAME/sqlplus.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username, then run the commands.

**If it asks for credentials:**
- Username: Your GitHub username
- Password: Use a Personal Access Token (not your password)

**To create a Personal Access Token:**
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name: "Vercel Deploy"
4. Check: `repo` (all repo permissions)
5. Click "Generate token"
6. Copy the token and use it as password

---

## Part 3: Create GitHub Release with Executable (5 minutes)

### Step 1: Go to Releases
1. Go to your GitHub repository page
2. Click **"Releases"** (right sidebar)
3. Click **"Create a new release"**

### Step 2: Create ZIP File (IMPORTANT!)

**GitHub doesn't allow .exe files directly, so we need to ZIP it first!**

**Option A: Use the batch script (Easiest)**
1. Double-click `build-and-zip.bat` in your project folder
2. It will build and create `dist/sqlplus-windows.zip` automatically
3. Done! Skip to Step 3.

**Option B: Manual ZIP**
1. Go to your `dist` folder
2. Right-click on `sqlplus.exe`
3. Choose **"Send to"** → **"Compressed (zipped) folder"**
4. Rename it to `sqlplus-windows.zip`

### Step 3: Create Release
1. **Tag version**: Type `v1.0.0` and press Enter
2. **Release title**: Type `SQL+ v1.0.0`
3. **Description**: Type something like:
   ```
   First release of SQL+ AI Command Processor
   
   Download sqlplus-windows.zip, extract it, and run sqlplus.exe in Command Prompt to start chatting with AI!
   
   Instructions:
   1. Download sqlplus-windows.zip
   2. Right-click → Extract All
   3. Open Command Prompt in the extracted folder
   4. Run: sqlplus.exe
   ```
4. **Attach files**: 
   - Click "Attach binaries by dropping them here or selecting them"
   - Select `sqlplus-windows.zip` from your `dist` folder
   - Wait for upload to complete (should be ~2-5 MB)
5. Click **"Publish release"**

### Step 4: Get Download URL
1. After publishing, you'll see your release
2. Right-click on `sqlplus-windows.zip` → **"Copy link address"**
3. The URL will look like:
   ```
   https://github.com/YOUR_USERNAME/sqlplus/releases/download/v1.0.0/sqlplus-windows.zip
   ```
4. Save this URL - you'll need it next!

### Step 5: Update Website Download Link
1. Open `website/index.html` in your editor
2. Find line ~133 (search for `href="https://github.com/YOUR_USERNAME`)
3. Replace the entire URL with your copied URL
4. Save the file
5. Commit and push:
```cmd
git add website/index.html
git commit -m "Update download link"
git push
```

---

## Part 4: Deploy to Vercel (5 minutes)

### Step 1: Sign Up / Login to Vercel
1. Go to https://vercel.com
2. Click **"Sign Up"** (or "Login" if you have account)
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub

### Step 2: Import Project
1. On Vercel dashboard, click **"Add New..."** → **"Project"**
2. You'll see "Import Git Repository"
3. Find your `sqlplus` repository
4. Click **"Import"**

### Step 3: Configure Project
You'll see "Configure Project" page:

1. **Project Name**: `sqlplus` (or change if you want)
2. **Framework Preset**: Leave as "Other"
3. **Root Directory**: Click "Edit" → Type `website` → Click "Continue"
4. **Build Command**: Leave empty
5. **Output Directory**: Leave empty
6. **Install Command**: Leave as default

Click **"Deploy"**

### Step 4: Wait for Deployment
1. Vercel will deploy your site (takes 30-60 seconds)
2. You'll see a success screen with confetti 🎉
3. Click **"Visit"** to see your live website!

Your site is now live at: `https://sqlplus-xxxxx.vercel.app`

---

## Part 5: Get Custom Domain (Optional)

### Option A: Use Vercel's Free Domain
Your site is already live at `https://your-project.vercel.app`

### Option B: Add Custom Domain
1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Type your domain (e.g., `sqlplus.com`)
4. Click **"Add"**
5. Follow DNS instructions to point your domain to Vercel

---

## Testing Your Deployment

### Test 1: Website Works
1. Visit your Vercel URL
2. Check that the page loads correctly
3. Scroll through all sections

### Test 2: Download Works
1. Click the **"Download"** button
2. The `sqlplus-windows.zip` should download
3. Check the file size (should be ~2-5 MB compressed)

### Test 3: Executable Works
1. Go to Downloads folder
2. Right-click `sqlplus-windows.zip` → **"Extract All"**
3. Open the extracted folder
4. Open Command Prompt in that folder (Shift + Right-click → "Open PowerShell window here")
5. Run: `.\sqlplus.exe`
6. Type a message and press Enter
7. AI should respond!

---

## Automatic Updates

Now that you're connected to GitHub, any changes you push will auto-deploy:

1. Make changes to files in `website/` folder
2. Commit and push:
```cmd
git add .
git commit -m "Update website"
git push
```
3. Vercel automatically deploys in ~30 seconds!

---

## Updating the Executable

When you want to release a new version:

1. Make changes to `sqlplus.js`
2. Build: `npm run build`
3. Create new GitHub release (e.g., `v1.0.1`)
4. Upload new `sqlplus.exe`
5. Update download link in `website/index.html`
6. Push changes

---

## Troubleshooting

### Problem: "git: command not found"
**Solution**: Install Git from https://git-scm.com/download/win

### Problem: GitHub push asks for password repeatedly
**Solution**: Use Personal Access Token instead of password (see Part 2, Step 3)

### Problem: Vercel shows 404 error
**Solution**: 
1. Check that Root Directory is set to `website`
2. Go to Project Settings → General → Root Directory
3. Change to `website` and redeploy

### Problem: Download link doesn't work
**Solution**:
1. Make sure GitHub release is published (not draft)
2. Test the URL in browser - it should download the file
3. Check that URL in `website/index.html` matches exactly

### Problem: Executable doesn't run
**Solution**:
1. Make sure you added your API key in `sqlplus.js`
2. Rebuild: `npm run build`
3. Create new GitHub release with new file

### Problem: "npm: command not found"
**Solution**: Install Node.js from https://nodejs.org

---

## Quick Reference Commands

```cmd
# Initial setup
npm install
npm run build

# Git commands
git init
git add .
git commit -m "message"
git push

# Update website
git add website/
git commit -m "Update website"
git push

# Rebuild executable
npm run build
```

---

## Your URLs

After deployment, save these:

- **GitHub Repo**: `https://github.com/YOUR_USERNAME/sqlplus`
- **Vercel Site**: `https://your-project.vercel.app`
- **Download URL**: `https://github.com/YOUR_USERNAME/sqlplus/releases/download/v1.0.0/sqlplus-windows.zip`

---

## Next Steps

✅ Share your Vercel URL with users
✅ Test the download and executable
✅ Add custom domain (optional)
✅ Monitor usage in Vercel dashboard
✅ Update and release new versions as needed

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- GitHub Docs: https://docs.github.com
- Git Tutorial: https://git-scm.com/docs/gittutorial

---

**Congratulations! Your SQL+ AI Chat Tool is now live! 🎉**
