# Yashwanth V — Portfolio Website

A fast, accessible, responsive, and SEO-friendly personal developer portfolio for **Yashwanth V**, an aspiring Data Scientist and 3rd-year B.E./B.Tech Artificial Intelligence and Data Science student at Christian College of Engineering and Technology.

Built with **React + Vite**, modern **HTML5/CSS3**, custom CSS variables, and **Lucide React** icons in a sleek **Black & Electric Blue** visual aesthetic with soft cyan accents.

---

## 🌟 Highlights & Features

1. **Design & Layout (Black & Blue Theme)**
   - **Hero Watermark**: Large condensed `"PORTFOLIO"` background watermark behind the hero imagery.
   - **Blended Portrait**: Photo placed in a tall portrait container with CSS gradient edge masking and soft ambient electric blue backglow.
   - **Typewriter Effect**: Cycling through verified identities (*Aspiring Data Scientist*, *AI & Data Science Student*, *Problem Solver*, *Creative Developer*) with full `prefers-reduced-motion` accessibility support.
   - **Reference Layout Structure**: Top bar with `"CREATIVE PORTFOLIO"` badge, 4-item vertical stat stack on hero right, highlighted quote panel (`"Curious about data. Building with code."`), and 3 numbered project cards (`01`, `02`, `03`).
   - **Theme Switcher**: Dark mode default with smooth toggle to high-contrast Light mode, saved persistently in `localStorage`.

2. **Accurate & Verified Personal Data**
   - Centralized data source at [`src/data/portfolio.js`](src/data/portfolio.js).
   - Zero fabricated employment or client testimonials.
   - Real projects:
     - **01: Place Path App** — Student placement assistance platform with verified repository link: [AI-Student-Placement-Team/Place-Path](https://github.com/AI-Student-Placement-Team/Place-Path).
     - **02: AI Code Understanding Extension** — Marked with an honest `"More details coming soon"` badge.
     - **03: Campus Management Website** — Academic project built with HTML, CSS, Java.
   - Real awards: Hackathon winner, LectronX26 2nd prize, study and PowerPoint presentation prizes, NCC Volunteer, district volleyball player.

3. **Interactive Components**
   - **Accessible Project Modal**: Detailed breakdown of role, architecture, highlights, and tech chips with focus trap and `Escape` key listeners.
   - **Portfolio Assistant Chatbot**: Predefined offline FAQ guide that answers questions based strictly on Yashwanth's background and redirects unknown inquiries to the contact form.
   - **"Let's Work Together" Contact Form**: Client-side validation with an honest `mailto:` fallback draft generator.
   - **Resume Download**: Direct download trigger for [`public/resume.pdf`](public/resume.pdf) with graceful fallback.

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (comes with Node.js)

### 2. Installation
Clone or navigate to the project directory:
```bash
cd portfolio
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
The compiled, minified bundle will be generated in the `dist/` directory.

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## 🖼️ How to Update Assets

### Replacing the Profile Photo
1. Place your new portrait image at `public/images/profile.png`.
2. The portfolio will automatically load the new image in both the **Hero** and **About** sections.
3. If using an image with a different extension (e.g. `.jpg`), update the `profilePhoto` path in `src/data/portfolio.js`:
   ```javascript
   profilePhoto: "/images/profile.jpg"
   ```

### Updating the Resume PDF
1. Replace `public/resume.pdf` with your official resume file named `resume.pdf`.
2. Clicking **"Download Resume"** in the Hero or Navbar will automatically trigger the download.

### Updating Projects & Personal Data
All data is isolated in a single file: [`src/data/portfolio.js`](src/data/portfolio.js).
- To add links to Project 02 or 03 once published, simply set `githubUrl: "https://github.com/your-repo"` in `projects`.

### Configuring the Contact Form
Currently, the form triggers a client-side `mailto:` draft directly addressed to `yashwanthvinoth031@gmail.com`.
If you wish to use a third-party backend service without running a server:
- **Formspree**: Sign up at [formspree.io](https://formspree.io), create a form endpoint, and POST your form data to `https://formspree.io/f/{your_form_id}`.
- **EmailJS**: Install `@emailjs/browser` and trigger `emailjs.sendForm` with your public key in `src/components/Contact.jsx`.

---

## 🌐 Free Deployment Options

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"New Project"** and import the repository.
4. Framework Preset: **Vite** (auto-detected).
5. Click **"Deploy"**.

### Deploying to Netlify
1. Go to [netlify.com](https://netlify.com) and connect your repository.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **"Deploy site"**.

### Deploying to GitHub Pages
1. Open `vite.config.js` and add the `base` property with your repository name:
   ```javascript
   export default defineConfig({
     base: '/portfolio/', // replace with your GitHub repository name
     plugins: [react()],
   })
   ```
2. Build and publish using `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
   Add deploy script to `package.json`:
   ```json
   "scripts": {
     "deploy": "vite build && gh-pages -d dist"
   }
   ```
   Then run:
   ```bash
   npm run deploy
   ```

---

## 📂 Project Architecture

```
portfolio/
├── public/
│   ├── favicon.svg          # Custom YV monogram favicon
│   ├── images/
│   │   └── profile.png      # Profile portrait photo
│   ├── resume.pdf           # Resume download document
│   ├── robots.txt           # Search crawler directives
│   └── sitemap.xml          # XML sitemap for SEO
├── src/
│   ├── components/
│   │   ├── About.jsx        # About section with cropped photo & quote panel
│   │   ├── Achievements.jsx # Awards, hackathons, and certifications
│   │   ├── Chatbot.jsx      # Predefined FAQ Portfolio Assistant
│   │   ├── Contact.jsx      # "Let's Work Together" & validated form
│   │   ├── Education.jsx    # CCET B.E. AI & DS details
│   │   ├── Experience.jsx   # Practical engineering & Place Path contributions
│   │   ├── Footer.jsx       # Dynamic copyright, social links & top button
│   │   ├── Hero.jsx         # Hero with watermark, photo blend & stats stack
│   │   ├── Icons.jsx        # Custom brand SVG icons (GitHub, LinkedIn, Instagram)
│   │   ├── Navbar.jsx       # Sticky header with mobile drawer & theme toggle
│   │   ├── ProjectCard.jsx  # Numbered project card (01, 02, 03)
│   │   ├── ProjectModal.jsx # Accessible detail modal with focus trap
│   │   ├── Projects.jsx     # Selected projects section
│   │   ├── Skills.jsx       # Categorized chips & intermediate proficiency
│   │   └── ThemeToggle.jsx  # Dark/light theme toggle button
│   ├── data/
│   │   └── portfolio.js     # Single source of truth for all personal details
│   ├── styles/
│   │   ├── components.css   # Component-specific styles & responsive queries
│   │   ├── globals.css      # Typography, accessibility focus rings & reset
│   │   └── variables.css    # Black & blue color palette & theme variables
│   ├── App.jsx              # Main page assembler
│   └── main.jsx             # React DOM root entry
├── index.html               # Head tags, Google Fonts, and Open Graph SEO
├── package.json
└── vite.config.js
```
