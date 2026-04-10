"use client";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: "🛠️",
    title: "Practical First",
    desc: "Every lesson uses real-world tools so you can apply what you learn immediately — no fluff.",
  },
  {
    icon: "💰",
    title: "Income Focused",
    desc: "We measure success by your results — career growth, freelance income, or business revenue.",
  },
  {
    icon: "🌍",
    title: "Accessible to All",
    desc: "Whether you're starting from zero or scaling up, we meet you where you are.",
  },
  {
    icon: "📅",
    title: "Flexible Delivery",
    desc: "Live, recorded, cohort-based, or self-paced — choose the format that fits your learning style.",
  },
];

export default function WhySkillucent() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Skillucent?</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            We&apos;re not just another e-learning platform. Here&apos;s what sets us apart.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all duration-200"
            >
              <span className="text-3xl mb-4 block">{r.icon}</span>
              <h3 className="font-bold text-gray-900 mb-2">{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
