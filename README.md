# Kaung San Phyoe Personal Website

A responsive static personal website built with HTML, CSS, and a small amount of JavaScript.

## What's included

- Hero section with clear calls to action
- About, projects, experience, and contact sections
- Responsive navigation for mobile screens
- Modern styling with CSS custom properties

## Run locally

Open `index.html` directly in a browser, or serve the folder with Python:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.


## Deploy on Render

This repository includes a Render Blueprint for static-site deployment:

- `render.yaml` defines a Render web service with the static runtime.
- `build.sh` creates a clean `dist/` folder with the files Render should publish.
- Render publishes the generated `dist/` directory.

### Option 1: Deploy with the Render Blueprint

1. Push this repository to GitHub/GitLab/Bitbucket.
2. In Render, choose **New +** → **Blueprint**.
3. Select this repository. Render reads `render.yaml` automatically.
4. Confirm the service settings and deploy.

The Blueprint uses these values:

```yaml
Service Type: Web Service
Runtime: Static
Build Command: ./build.sh
Static Publish Path: dist
Start Command: Not required for Render static sites
```

### Option 2: Create a Render Static Site manually

If you create the service manually, use these settings:

```text
Root Directory: leave blank / repository root
Build Command: ./build.sh
Publish Directory: dist
Start Command: leave blank / not required
Auto-Deploy: optional, recommended for the main branch
```

### Build output

Render runs `./build.sh`, which removes any old `dist/` folder, creates a fresh one, and copies the deployable files into it:

```text
dist/index.html
dist/styles.css
dist/script.js
```

The `dist/` folder is ignored by Git because it is generated during deployment.

## Customize

Update the placeholder content in `index.html`, especially:

- Bio and headline
- Project names and descriptions
- Email address and social links
- Experience and skills
