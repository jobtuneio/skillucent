"use client";
import { motion } from "framer-motion";

const categories = [
  { label: "Foundational", color: "bg-green-100 text-green-700" },
  { label: "Advanced", color: "bg-purple-100 text-purple-700" },
  { label: "Live Workshops", color: "bg-orange-100 text-orange-700" },
  { label: "Corporate", color: "bg-blue-100 text-blue-700" },
];

const courses = [
  {
    badge: "Foundational",
    badgeColor: "bg-green-100 text-green-700",
    title: "AI for Marketers",
    desc: "Learn to use AI tools to supercharge your marketing — content, ads, email, and analytics.",
    duration: "6 weeks",
    level: "Beginner",
    price: "₹4,999",
  },
  {
    badge: "Advanced",
    badgeColor: "bg-purple-100 text-purple-700",
    title: "Content to Cash: UGC Bootcamp",
    desc: "Turn your phone into a content studio. Learn UGC creation, brand deals, and monetization.",
    duration: "4 weeks",
    level: "Intermediate",
    price: "₹7,999",
  },
];

const steps = [
  { num: "01", label: "Browse Courses", desc: "Explore our curated catalogue" },
  { num: "02", label: "Book Free Consult", desc: "Talk to an advisor to find the right fit" },
  { num: "03", label: "Enroll & Learn", desc: "Start at your own pace or join live cohorts" },
  { num: "04", label: "Apply & Earn", desc: "Use your new skills to grow your career or business" },
];

export default function Training() {
  return (
    <section id="training" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Training & Courses</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Practical, outcome-driven programs built for the real world.
          </p>

          {/* Category filter pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((c) => (
              <span
                key={c.label}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full ${c.color}`}
              >
                {c.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Course cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {courses.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-md transition-all duration-200"
            >
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.badgeColor}`}>
                {c.badge}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{c.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{c.desc}</p>
              <div className="flex flex-wrap gap-3 mb-5 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {c.duration}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  {c.level}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">{c.price}</span>
                <a
                  href="#contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
                >
                  Enroll Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <div className="text-center mb-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-7 py-3 rounded-full transition-all duration-200"
          >
            Browse All Courses
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Enrollment steps */}
        <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-10">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">How to Enroll</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mx-auto mb-3 text-sm">
                  {s.num}
                </div>
                <p className="font-semibold text-gray-900 text-sm">{s.label}</p>
                <p className="text-gray-500 text-xs mt-1">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
