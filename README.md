<div align="center">

# 🌐 BunkCalc — Landing Page

### _The official product website for BunkCalc._

[![Version](https://img.shields.io/badge/version-2.0.0-blue?style=for-the-badge)](https://github.com/bunkcalc)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)

A **modern, responsive, and secure** marketing website that lets students learn about BunkCalc v2.0.0 and download the Android APK directly.

---

</div>

## ✨ Pages

| Page | Route | Description |
|---|---|---|
| 🏠 **Home** | `/` | Hero section, v2.0.0 feature showcase, phone mockup, and download CTA |
| 🛟 **Support** | `/support` | Setup guide and frequently asked questions |
| 🔏 **Privacy** | `/privacy` | Full privacy policy detailing the zero-collection architecture |
| 📜 **Terms** | `/terms` | Terms of service |

---

## 🎯 Highlights

- **🎨 Premium Design** — Dark mode support, glassmorphism navbar, smooth Framer Motion animations, and a phone mockup hero section
- **📱 Mobile-First** — Fully responsive from 320px phones to wide desktop displays
- **⚡ Lightning Fast** — Static site with <2KB HTML, ~32KB CSS, ~389KB JS (gzipped: ~123KB total)
- **🔒 Security Hardened** — Strict Content Security Policy, no external scripts, no tracking
- **📦 Direct APK Download** — The APK is served directly from `/bunkcalc.apk` — no app store needed
- **🧭 SPA Navigation** — React Router with smooth scroll-to-hash support and scroll restoration

---

## 🏗️ Tech Stack

```
Framework      React 19 + TypeScript 6
Styling        Tailwind CSS 4 (Vite plugin)
Animations     Framer Motion 12
Icons          Lucide React
Routing        React Router DOM 7
Build          Vite 8
```

---

## 📂 Project Structure

```
landing-page-pro/
├── public/                     # Static assets
│   ├── bunkcalc.apk            # Downloadable Android APK
│   ├── favicon.png             # 32×32 favicon (BunkCalc logo)
│   ├── icon-192.png            # PWA icon
│   ├── icon-512.png            # Large icon
│   └── apple-touch-icon.png    # iOS Safari home screen icon
├── src/
│   ├── components/             # Shared UI components
│   │   ├── Navbar.tsx             # Fixed glassmorphism navigation bar
│   │   └── Footer.tsx             # 4-column footer with links
│   ├── pages/                  # Route-level page components
│   │   ├── Home.tsx               # Hero + v2.0.0 features grid + banner CTA
│   │   ├── Support.tsx            # Setup guide + FAQ
│   │   ├── Privacy.tsx            # Privacy policy (v2.0.0)
│   │   └── Terms.tsx              # Terms of service (v2.0.0)
│   ├── assets/                 # Bundled assets
│   │   └── hero.png               # Hero section image
│   ├── App.tsx                 # Root layout + router
│   ├── App.css                 # App-level styles
│   ├── main.tsx                # React entry point
│   └── index.css               # Tailwind imports + global styles
├── index.html                  # HTML entry (with CSP + favicons)
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── eslint.config.js
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 20
- **npm** ≥ 10

### Installation

```bash
# 1. Clone the repository
git clone <repo-url>
cd landing-page-pro

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Production Build

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

---

## 🔒 Security

Even as a static marketing page, security best practices are enforced:

| Layer | Implementation |
|---|---|
| **Content Security Policy** | Strict CSP `<meta>` tag — only self-hosted scripts, styles, and assets are allowed |
| **Referrer Policy** | `no-referrer-when-downgrade` prevents leaking sensitive headers |
| **No External Scripts** | Zero third-party analytics, tracking pixels, or ad networks |
| **No User Input** | The site has no forms, text fields, or API endpoints — zero injection surface |
| **No Secrets** | The site is fully static with no backend, API keys, or tokens |
| **Git Hygiene** | `.gitignore` blocks `.env` files, OS junk (`Thumbs.db`, `.DS_Store`), and build artifacts |

---

## 📋 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | TypeScript check + production build |
| `npm run lint` | Run ESLint across the codebase |
| `npm run preview` | Preview the production build locally |

---

## 🔗 Relationship to BunkCalc App

This landing page is the **public-facing website** for the [BunkCalc mobile app].

| Concern | Landing Page | Mobile App |
|---|---|---|
| **Purpose** | Marketing + APK download | The actual attendance tracker |
| **Platform** | Web (any browser) | Android (Capacitor) |
| **Data** | None — fully static | Local-only (Preferences API) |
| **Version** | `2.0.0` | `2.0.0` |

---

## 📄 License

This project is **private** and not open-source. All rights reserved.

---

<div align="center">

**The front door to BunkCalc — designed to impress, built to convert.**

`v2.0.0`

</div>
