# SQL+ AI Chat Tool

A real command-line AI chat tool powered by Google Gemini 2.0 Flash. Runs directly in Windows Command Prompt.

## Features

- 💻 Runs in actual Windows Command Prompt
- ⚡ Fast responses using Gemini 2.0 Flash
- 🔒 No API key needed for users (hardcoded)
- �  Single executable file

## Installation

### For Users

1. Download `sqlplus.exe` from the website
2. Run `installer.bat` as Administrator
3. Open Command Prompt and type `sqlplus`
4. Start chatting!

### For Developers

1. Clone this repository
2. Add your Gemini API key in `sqlplus.js` (line 7)
3. Install dependencies:
   ```
   npm install
   ```
4. Test in development:
   ```
   npm start
   ```
5. Build executable:
   ```
   npm run build
   ```

## Usage

Open Command Prompt and run:
```
sqlplus
```

Then just type your questions and press Enter. Type `exit` or `quit` to close.

## Building the Executable

The tool uses `pkg` to create a standalone Windows executable:

```bash
npm run build
```

This creates `dist/sqlplus.exe` which can be distributed to users.

## Deploying to Vercel

See [DEPLOY.md](DEPLOY.md) for complete deployment instructions.

**Quick Start:**

1. Add your Gemini API key in `sqlplus.js` (line 7)
2. Build: `npm run build`
3. Upload `dist/sqlplus.exe` to GitHub Releases
4. Update download link in `website/index.html`
5. Deploy to Vercel: `vercel` or connect GitHub repo

## Important

Before building for distribution, replace `YOUR_GEMINI_API_KEY_HERE` in `sqlplus.js` with your actual Gemini API key. This key will be embedded in the executable so users don't need their own.

## License

MIT
