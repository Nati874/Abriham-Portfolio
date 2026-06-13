# Vercel Deployment Guide

This portfolio is optimized for deployment on Vercel. Follow these steps to deploy your site.

## Prerequisites

- A GitHub account with your repository
- A Vercel account (free at https://vercel.com)

## Deployment Steps

### 1. Push to GitHub

First, initialize a Git repository and push your code to GitHub:

```bash
git init
git add .
git commit -m "Initial commit: Abriham portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/abriham-portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### 2. Connect to Vercel

1. Go to https://vercel.com and sign up/log in
2. Click "New Project"
3. Select "Import Git Repository"
4. Paste your GitHub repository URL
5. Click "Import"

### 3. Configure Build Settings

Vercel will automatically detect the following settings:

- **Framework**: Vite
- **Build Command**: `pnpm build`
- **Output Directory**: `dist`
- **Install Command**: `pnpm install`

These are pre-configured in `vercel.json` and will be used automatically.

### 4. Environment Variables (Optional)

If you need environment variables, add them in the Vercel dashboard:

1. Go to your project settings
2. Click "Environment Variables"
3. Add any required variables

For this static portfolio, no environment variables are needed.

### 5. Deploy

Click "Deploy" and wait for the build to complete. Vercel will provide you with:

- A unique URL (e.g., `https://abriham-portfolio.vercel.app`)
- A preview URL for each commit
- Automatic deployments on every push to `main`

## Custom Domain

To add a custom domain:

1. Go to your project settings in Vercel
2. Click "Domains"
3. Enter your custom domain
4. Follow the DNS configuration instructions

## Automatic Deployments

Every time you push to the `main` branch on GitHub, Vercel will automatically:

1. Build your project
2. Run tests (if configured)
3. Deploy to production

## Preview Deployments

For every pull request, Vercel creates a preview deployment. This allows you to test changes before merging.

## Rollback

To revert to a previous deployment:

1. Go to your Vercel project dashboard
2. Click "Deployments"
3. Find the deployment you want to revert to
4. Click the three dots menu
5. Select "Promote to Production"

## Troubleshooting

### Build Fails

Check the build logs in Vercel dashboard:
1. Go to "Deployments"
2. Click on the failed deployment
3. Check the "Build Logs" tab

Common issues:
- Missing dependencies: Run `pnpm install` locally and commit `pnpm-lock.yaml`
- TypeScript errors: Run `pnpm check` locally to catch errors early
- Port conflicts: Vercel automatically handles port assignment

### Site Not Loading

1. Check that the deployment is complete (green checkmark)
2. Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
3. Check the preview URL in the Vercel dashboard

### Performance Issues

Vercel provides analytics in the dashboard:
1. Go to your project
2. Click "Analytics"
3. Review Core Web Vitals and performance metrics

## Local Development

To test locally before deploying:

```bash
pnpm install
pnpm dev
```

Then open http://localhost:5173

## Building for Production

To build locally and test the production build:

```bash
pnpm build
pnpm preview
```

This simulates the production environment locally.

## File Structure for Vercel

Vercel expects the following structure:

```
project-root/
├── client/              # React app source
│   ├── src/
│   ├── public/
│   └── index.html
├── package.json         # Root package.json
├── vite.config.ts       # Vite configuration
├── vercel.json          # Vercel configuration
├── .vercelignore        # Files to exclude from deployment
└── tsconfig.json        # TypeScript configuration
```

The `dist` folder (output) is automatically generated during the build.

## Support

For Vercel-specific issues, visit:
- https://vercel.com/docs
- https://vercel.com/support

For project issues, check:
- Vite docs: https://vitejs.dev
- React docs: https://react.dev
- Tailwind CSS: https://tailwindcss.com
