import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedCounter } from "./TextReveal";

const stats = [
  { number: 30, suffix: "+", label: "Años de experiencia" },
  { number: 500, suffix: "+", label: "Clientes protegidos" },
  { number: 24, suffix: "/7", label: "Monitoreo continuo" },
  { number: 98, suffix: "%", label: "Satisfacción del cliente" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.35"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);

  return (
    <section ref={ref} className="relative py-16 sm:py-24 overflow-hidden">
      {/* Subtle gold line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-4 sm:px-6"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </motion.div>

      {/* Subtle gold line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
    </section>
  );
};

const StatItem = ({
  stat,
  index,
}: {
  stat: (typeof stats)[0];
  index: number;
  key?: React.Key;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.215, 0.61, 0.355, 1] }}
      className="text-center group"
    >
      <div className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight gold-gradient-text mb-2 sm:mb-3">
        <AnimatedCounter target={stat.number} suffix={stat.suffix} duration={2.5} />
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground font-light tracking-wide">
        {stat.label}
      </p>
    </motion.div>
  );
};

export default StatsSection;
