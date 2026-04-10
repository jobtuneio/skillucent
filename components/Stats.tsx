"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { target: 500, suffix: "+", label: "Students Trained" },
  { target: 50, suffix: "+", label: "Workshops Delivered" },
  { target: 95, suffix: "%", label: "Success Rate" },
];

export default function Stats() {
  return (
    <section className="py-16 md:py-20 bg-blue-600">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">
                <Counter target={s.target} suffix={s.suffix} />
              </div>
              <p className="text-blue-100 font-medium text-base md:text-lg">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
