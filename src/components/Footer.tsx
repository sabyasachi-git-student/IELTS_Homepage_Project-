import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="" className="h-6 w-6" />
            <span className="font-bold">IELTS Institute</span>
          </div>
          <p className="mt-3 text-sm text-slate-600">
            Achieve your dream score with structured practice, feedback, and mentorship.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:text-brand-700" href="#features">Features</a></li>
            <li><a className="hover:text-brand-700" href="#testimonials">Testimonials</a></li>
            <li><a className="hover:text-brand-700" href="#">Terms</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Email: <a className="hover:text-brand-700" href="mailto:admissions@ielts-institute.example">admissions@ielts-institute.example</a></li>
            <li>Phone: <a className="hover:text-brand-700" href="tel:+919999999999">+91 99999 99999</a></li>
            <li>Address: 221B Park Street, Kolkata</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-slate-500">© 2025 IELTS Institute. All rights reserved.</div>
    </footer>
  );
}
