"use client";
import { motion } from "framer-motion";

const segments = [
  {
    title: "Students & Freshers",
    desc: "Build job-ready digital skills and stand out in competitive markets.",
    points: ["Career-focused curricula", "Portfolio projects", "Interview preparation"],
  },
  {
    title: "Working Professionals",
    desc: "Upskill to advance your career or transition to digital roles.",
    points: ["Evening & weekend classes", "Industry certifications", "Networking opportunities"],
  },
  {
    title: "Homemakers & Side Hustlers",
    desc: "Turn your time into income with practical digital and AI skills.",
    points: ["Flexible self-paced learning", "Freelance-ready skills", "Community support"],
  },
  {
    title: "Small Businesses & Agencies",
    desc: "Empower your team or upskill yourself to grow faster with AI.",
    points: ["Custom workshop design", "Team training packages", "Ongoing consulting"],
  },
];

export default function WhoWeServe() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Who We Serve</h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Whether you&apos;re just starting out or looking to scale up, we have programs
            designed for your unique journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {segments.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all duration-200"
            >
              {/* icon */}
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6h16M4 10h16M4 14h10M4 18h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{s.desc}</p>
              <ul className="space-y-1.5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
