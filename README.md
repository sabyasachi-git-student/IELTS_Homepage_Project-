# IELTS Institute — React + Vite + Tailwind

A modern, responsive single‑page home for a fictional IELTS coaching institute.

## ✨ Features

- Clean, professional UI with accessible components
- Responsive layout (mobile → desktop)
- Sections: Navbar, Hero, Feature cards, Testimonials, Footer
- Built with React + Vite + Tailwind CSS

## 🧱 Tech Choices

- **Vite** for fast dev server and simple bundling
- **React (TS)** for component structure and maintainability
- **Tailwind** for utility‑first styling and consistent spacing/typography
- Minimal deps; no backend required

## 🚀 Getting Started

# 1) Install deps

npm install

# 2) Start dev

npm run dev

# 3) Build for prod

npm run build && npm run preview

## 🗂️ Project Structure

ielts-institute-home/
public/
logo.svg
src/
components/
Navbar.tsx
Hero.tsx
Features.tsx
Testimonials.tsx
Footer.tsx
App.tsx
main.tsx
styles.css
index.html
package.json
tsconfig.json
tailwind.config.js
postcss.config.js

## 🧭 Design Notes

- Brand color: `brand-600` (#2a90ff) with a calm slate-gray text palette
- Generous white space, rounded corners, soft shadows for a polished look
- Clear visual hierarchy: big headline → supporting text → primary actions
- Mobile-first navigation (hamburger → desktop links)
- Hero image from Unsplash to evoke study vibe (replace with your own asset)
- Realistic, concise testimonial copy; cards remain legible on phones

## 📋 Meets the Assignment

- **Modern professional look**: yes (clean typography, spacing, brand color)
- **Responsive**: yes (grid/flex utilities, mobile-first nav)
- **Required sections**: all included
- **Clean code**: modular React components, TS strictness on

## 🔧 Customization

- Update brand colors in `tailwind.config.js`
- Replace logo.svg and hero image URL
- Edit testimonials/features in their components

**Author:** Sabyasachi Gupta
