"use client";
import { motion } from "framer-motion";

const values = [
  { label: "Practical First", desc: "Real tools, real outcomes." },
  { label: "Inclusivity", desc: "Skills for everyone, everywhere." },
  { label: "Outcome-Oriented", desc: "We measure by your success." },
  { label: "Partnership", desc: "We grow when you grow." },
];

export default function About() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We Believe Everyone Deserves to Thrive in the Digital Economy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Skillucent was founded with one mission: to make practical AI and digital skills
              accessible to every person and business — regardless of background or budget.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We don&apos;t teach theory. We teach what works — the exact tools, workflows, and
              strategies being used today to build careers and grow businesses.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.label} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{v.label}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Quote card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 md:p-10 text-white"
          >
            <svg className="w-10 h-10 text-blue-300 mb-6 opacity-60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.748-9.57 9-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.995zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z" />
            </svg>
            <p className="text-lg md:text-xl leading-relaxed text-blue-50 mb-8">
              &ldquo;The future belongs to those who can harness AI. Our job is to make sure
              nobody gets left behind — not the student, not the homemaker, not the small
              business owner.&rdquo;
            </p>
            <div className="border-t border-blue-500 pt-6">
              <p className="font-bold text-white">Founder, Skillucent</p>
              <p className="text-blue-200 text-sm mt-1">AI & Digital Skills Educator</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
