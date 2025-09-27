import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-brand-50 text-brand-700 px-3 py-1 text-sm font-medium">
            New: AI-powered band feedback
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
            Crack your target <span className="text-brand-600">IELTS band</span>{" "}
            with confidence
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Personalized coaching, daily speaking practice, and realistic mock
            tests. Built for busy students and working professionals.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="#features"
              className="inline-flex justify-center rounded-xl bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700 transition"
            >
              Explore Features
            </a>
            <a
              href="#contact"
              className="inline-flex justify-center rounded-xl border px-6 py-3 font-semibold hover:bg-slate-50 transition"
            >
              Book Free Demo
            </a>
          </div>
          <ul className="mt-6 text-sm text-slate-500 grid grid-cols-2 gap-2">
            <li>• 50K+ practice questions</li>
            <li>• Weekly full-length mocks</li>
            <li>• Band 8+ mentor reviews</li>
            <li>• Flexible online batches</li>
          </ul>
        </div>
        <div className="relative">
          <img
            className="rounded-2xl shadow-xl w-full object-cover"
            alt="Students preparing for IELTS with laptops and notes"
            src="/istockphoto-2152336933-612x612.jpg"
          />
          <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-2xl p-4 w-64">
            <p className="text-sm text-slate-500">Average improvement</p>
            <p className="text-3xl font-extrabold text-brand-700">+1.5 Bands</p>
            <p className="text-xs text-slate-400 mt-1">within 6 weeks</p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
