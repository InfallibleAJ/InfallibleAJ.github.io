# Ajeet Kumar Bind | Portfolio

A responsive, single-page portfolio website built with React. It showcases professional experience, skills, projects, and education with modern CSS animations and a clean layout.

**Live site:** [https://infallibleaj.github.io](https://infallibleaj.github.io)

---

## Features

- **Single-page layout** — Smooth scroll navigation between sections (Home, About, Skills, Experience, Projects, Education, Contact).
- **CSS animations** — Hero entrance, scroll-triggered section reveals, staggered card and timeline animations, animated skill bars, and subtle hover effects.
- **Responsive design** — Mobile-first layout with breakpoints for tablet and desktop.
- **Accessibility** — Respects `prefers-reduced-motion`, focus states, and semantic HTML.
- **Tech stack** — React 18, SCSS (variables, animations), no UI framework.

---

## Tech Stack

| Category    | Tools / Stack                          |
| ----------- | -------------------------------------- |
| Framework   | React 18                                |
| Styling     | SCSS (variables, animations, responsive)|
| Build       | Create React App                       |
| Deployment  | GitHub Pages (`gh-pages`)              |
| Fonts / Icons | Google Fonts (Poppins, Roboto), Font Awesome |

---

## Project Structure

```
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js              # App shell, scroll observers, section visibility
│   ├── index.js            # React entry point
│   ├── assets/             # Resume PDF, profile image
│   ├── components/
│   │   ├── Header.js       # Nav, mobile menu
│   │   ├── Hero.js         # Intro, CTA, profile image
│   │   ├── About.js        # Bio, details, core tech
│   │   ├── Skills.js       # Skill categories and progress bars
│   │   ├── Experience.js   # Timeline
│   │   ├── Projects.js     # Project cards
│   │   ├── Education.js    # Education & certifications
│   │   ├── Contact.js      # Contact cards, CTAs
│   │   └── Footer.js       # Links, social, copyright
│   └── styles/
│       ├── main.scss       # Global styles, layout, responsive
│       ├── variables.scss  # Colors, typography, breakpoints
│       └── animations.scss # Keyframes, scroll-triggered animations
├── package.json
└── README.MD
```

---

## Prerequisites

- **Node.js** — v16 or later (recommended: LTS).
- **npm** — Comes with Node.js (or use yarn if you prefer).
- **Git** — For cloning and deploying.

Check versions:

```bash
node -v   # e.g. v18.x or v20.x
npm -v
```

---

## How to Run This Project

### 1. Clone the repository

```bash
git clone https://github.com/InfallibleAJ/InfallibleAJ.github.io.git
cd InfallibleAJ.github.io
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally (development)

```bash
npm start
```

- Opens the app at [http://localhost:3000](http://localhost:3000).
- Hot reload: edits to JS/SCSS refresh the browser automatically.

### 4. Build for production

```bash
npm run build
```

- Creates an optimized build in the `build/` folder.
- Use this before deploying or when testing the production bundle locally (e.g. with `npx serve -s build`).

### 5. Deploy to GitHub Pages

From the project root:

```bash
npm run deploy
```

- Runs `npm run build` (via `predeploy`), then pushes the contents of `build/` to the `gh-pages` branch.
- The live site at **https://infallibleaj.github.io** updates after GitHub finishes publishing (usually 1–3 minutes).

---

## Available Scripts

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm start`       | Run development server (port 3000)               |
| `npm run build`   | Create production build in `build/`             |
| `npm run deploy`  | Build and deploy to GitHub Pages (gh-pages branch) |

---

## Customization

- **Content** — Update copy, links, and assets in the components under `src/components/` and `src/assets/`.
- **Styling** — Edit `src/styles/variables.scss` for colors, fonts, and breakpoints; `src/styles/animations.scss` for animation behavior.
- **Homepage URL** — The `homepage` field in `package.json` is set to `https://infallibleaj.github.io` for correct asset paths on GitHub Pages. Change it only if you deploy to a different base URL.

---

## License

This project is for portfolio and personal use. All rights reserved.

---

## Connect

- **Portfolio:** [https://infallibleaj.github.io](https://infallibleaj.github.io)
- **LinkedIn:** [linkedin.com/in/ajeet-kumar-bind](https://linkedin.com/in/ajeet-kumar-bind)
- **GitHub:** [github.com/InfallibleAJ](https://github.com/InfallibleAJ)
