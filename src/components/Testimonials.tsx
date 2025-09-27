import React from "react";

const items = [
  {
    name: "Ananya",
    band: "7.5",
    text: "The AI feedback on essays was a game changer. Clear, actionable tips every week.",
  },
  {
    name: "Rahul",
    band: "8.0",
    text: "Speaking rooms helped me overcome hesitation. Mentors pushed me just enough.",
  },
  {
    name: "Sana",
    band: "7.0",
    text: "Mock tests felt like the real thing. The improvement plan kept me focused.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Students love the progress</h2>
          <p className="mt-3 text-slate-600">Short, honest reviews from recent learners.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="rounded-2xl border bg-white p-6 shadow-sm">
              <blockquote className="text-slate-700">“{t.text}”</blockquote>
              <figcaption className="mt-4 flex items-center justify-between">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-brand-700">Overall Band {t.band}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
