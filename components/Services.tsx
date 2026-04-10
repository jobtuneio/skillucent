"use client";
import { motion } from "framer-motion";

const services = [
  {
    icon: "📣",
    title: "Campaign Management",
    desc: "End-to-end digital campaign strategy and execution across social, search, and email.",
  },
  {
    icon: "🎬",
    title: "UGC Production",
    desc: "User-generated content that converts — scripted, filmed, and optimised for your brand.",
  },
  {
    icon: "📋",
    title: "Templates & Toolkits",
    desc: "Ready-to-use frameworks, SOPs, and AI prompt libraries for fast execution.",
  },
  {
    icon: "🔄",
    title: "Retainer Support",
    desc: "Ongoing strategic support to keep your digital presence growing month over month.",
  },
];

const caseStudies = [
  {
    client: "D2C Brand",
    result1: "3X Engagement",
    result2: "2X Sales",
    desc: "Ran a 90-day UGC + campaign strategy that tripled social engagement and doubled online sales.",
  },
  {
    client: "Startup Campaign",
    result1: "5X ROAS",
    result2: "40% CAC Drop",
    desc: "Rebuilt their paid campaign structure using AI-driven creative testing and audience segmentation.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "₹15,000+",
    desc: "For solopreneurs and small brands getting started.",
    features: ["1 campaign per month", "UGC brief + 2 creatives", "Monthly report", "Email support"],
    cta: "Request Service",
    highlight: false,
  },
  {
    name: "Growth",
    price: "₹45,000+",
    desc: "For growing businesses ready to scale their digital presence.",
    features: [
      "3 campaigns per month",
      "UGC production (5 assets)",
      "Weekly performance review",
      "Strategy call (2x/mo)",
      "Priority support",
    ],
    cta: "Schedule Call",
    highlight: true,
  },
  {
    name: "Premium",
    price: "Custom",
    desc: "Enterprise and agency partnerships with full-service execution.",
    features: [
      "Unlimited campaigns",
      "Dedicated account manager",
      "Custom toolkits & SOPs",
      "Team training included",
      "White-label available",
    ],
    cta: "Request Discovery Call",
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Services</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Beyond training — we help you execute, so results aren&apos;t left on the table.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all duration-200"
            >
              <span className="text-3xl mb-4 block">{s.icon}</span>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{s.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 p-7"
              >
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
                  {cs.client}
                </p>
                <div className="flex gap-4 mb-4">
                  <span className="text-2xl font-extrabold text-gray-900">{cs.result1}</span>
                  <span className="text-gray-300 text-2xl">·</span>
                  <span className="text-2xl font-extrabold text-gray-900">{cs.result2}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{cs.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Service Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl p-7 border flex flex-col ${
                  p.highlight
                    ? "bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-200"
                    : "bg-white border-gray-100 hover:shadow-md"
                } transition-all duration-200`}
              >
                {p.highlight && (
                  <span className="text-xs font-bold bg-white text-blue-600 px-3 py-1 rounded-full w-fit mb-4">
                    Most Popular
                  </span>
                )}
                <h4 className={`text-xl font-bold mb-1 ${p.highlight ? "text-white" : "text-gray-900"}`}>
                  {p.name}
                </h4>
                <div className={`text-3xl font-extrabold mb-2 ${p.highlight ? "text-white" : "text-blue-600"}`}>
                  {p.price}
                </div>
                <p className={`text-sm mb-5 ${p.highlight ? "text-blue-100" : "text-gray-500"}`}>{p.desc}</p>
                <ul className="space-y-2 mb-7 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-sm ${p.highlight ? "text-blue-50" : "text-gray-600"}`}>
                      <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${p.highlight ? "text-blue-200" : "text-blue-500"}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`text-center font-semibold text-sm px-5 py-3 rounded-full transition-all duration-200 ${
                    p.highlight
                      ? "bg-white text-blue-600 hover:bg-blue-50"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {p.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
