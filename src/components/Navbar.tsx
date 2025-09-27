import React from "react";

const links = [
  { href: "#features", label: "Features" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2" aria-label="IELTS Institute home">
            <img src="/logo.svg" alt="" className="h-7 w-7" />
            <span className="font-bold text-lg tracking-tight">IELTS Institute</span>
          </a>
          <button
            className="md:hidden p-2 rounded-lg border"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <span className="sr-only">Open menu</span>
            {/* Hamburger */}
            <div className="space-y-1">
              <div className="h-0.5 w-5 bg-slate-900"></div>
              <div className="h-0.5 w-5 bg-slate-900"></div>
              <div className="h-0.5 w-5 bg-slate-900"></div>
            </div>
          </button>
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-brand-700 transition-colors">
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl border border-brand-600 px-4 py-2 font-medium text-brand-800 hover:bg-brand-50 transition"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="md:hidden border-t">
          <div className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="block py-2" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl border border-brand-600 px-4 py-2 font-medium text-brand-800 hover:bg-brand-50 transition"
              onClick={() => setOpen(false)}
            >
              Enroll Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
