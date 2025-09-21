# Juspay Dashboard - Next.js Starter

A modern SaaS dashboard starter template built with **Next.js**, **TailwindCSS**, and **Recharts**. Designed for eCommerce analytics with dark/light mode support and responsive layouts.

---

## Features

- **Next.js ** with App Router  
- **TailwindCSS v4** for utility-first styling  
- **Dark / Light theme** with `next-themes`  
- **Framer Motion** for smooth animations  
- **Recharts** for interactive charts  
- Modular components: `layout`, `ui`, `charts`  
- Routes included: `/dashboard` and `/orders`  
- Responsive design for mobile, tablet, and desktop  

---

## Quick Start

1. Clone the repository:

git clone https://github.com/amitawasthitech/saas-dashboard-starter.git
cd juspay-dashboard-starter

2.	Install dependencies:
npm install

3.	Run the development server:
npm run dev

##Project Structure

├── app/                # App router pages & layout
├── components/         # UI & chart components
├── lib/                # Mock data & utilities
├── public/             # Static assets (avatars, icons)
├── styles/             # Global TailwindCSS styles
├── package.json
├── tailwind.config.js
└── next.config.js

Design Decisions
	•	TailwindCSS: Utility-first approach allows fast prototyping and responsive layouts.
	•	Dark Mode: Implemented with next-themes for easy toggling.
	•	Charts: Recharts chosen for simplicity and integration with React.
	•	Responsive Layout: Sidebar & Rightbar hidden on mobile, with toggle buttons for a clean mobile experience.
	•	Modular Components: Each chart, card, or UI element is reusable.







