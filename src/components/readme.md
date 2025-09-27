# IELTS Institute — React + Vite + Tailwind

A modern, responsive single-page homepage for a fictional IELTS coaching institute.

## 🚀 Setup Instructions

1. Clone the repository:
   git clone https://github.com/your-username/ielts-institute-home.git
   cd ielts-institute-home

2.Install dependencies:
npm install

3.Start the development server:
npm run dev
Open the URL shown in the terminal (usually http://localhost:5173).

4.Build for production:
npm run build
npm run preview

Design Choices
Modern look: Used Tailwind CSS utility classes for consistent spacing, rounded corners, and hover states.
Responsive: Mobile-first layout with navbar collapse, grid sections that stack neatly on small screens, and legible typography across devices.
Sections included:
Navbar with logo and links
Hero section with headline, subtext, call-to-action buttons, and banner image
Feature cards with SVG icons
Testimonials from students
Footer with links and contact info

Branding: Custom brand color palette (configurable in tailwind.config.js) to give the site a unique identity.
Icons: Used Lucide React SVG icons for a polished, professional feel instead of emojis.
Responsiveness testing: Verified in Chrome DevTools across multiple device presets and also tested on a real Android device (Redmi Note 11 Pro).

📂 Project Structure
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
public/
logo.svg
tailwind.config.js
package.json
👤 Author: Sabyasachi Gupta
📄 License: MIT
