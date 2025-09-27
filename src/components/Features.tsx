import React from "react";
import { Mic, FileText, Bot, GraduationCap } from "lucide-react";

const data = [
  {
    title: "Speaking Practice",
    desc: "Daily live rooms + AI fluency feedback to fix hesitation and filler words.",
    icon: <Mic className="w-8 h-8 text-brand-600" />,
  },
  {
    title: "Mock Tests",
    desc: "Weekly full-length mocks with detailed band reports and improvement plan.",
    icon: <FileText className="w-8 h-8 text-brand-600" />,
  },
  {
    title: "AI Band Score",
    desc: "Instant band estimates for Writing & Speaking with targeted suggestions.",
    icon: <Bot className="w-8 h-8 text-brand-600" />,
  },
  {
    title: "Expert Mentors",
    desc: "Band 8+ mentors for 1:1 doubt clearing and essay reviews.",
    icon: <GraduationCap className="w-8 h-8 text-brand-600" />,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Everything you need to score high
          </h2>
          <p className="mt-3 text-slate-600">
            Carefully designed practice and feedback loops to steadily lift your
            band.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-white p-6 shadow-sm border hover:shadow-md transition"
            >
              <div>{f.icon}</div>
              <h3 className="mt-4 font-bold text-lg">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
