import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

/** Hero-style: each character animates in from below */
export const HeroTextReveal = ({ children, className = "", delay = 0 }: TextRevealProps) => {
  const words = children.split(" ");

  return (
    <span className={className}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block mr-[0.3em]">
          {word.split("").map((char, ci) => (
            <motion.span
              key={ci}
              className="inline-block"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: delay + wi * 0.08 + ci * 0.03,
                ease: [0.215, 0.61, 0.355, 1],
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
};

/** Scroll-triggered word-by-word reveal with opacity */
export const ScrollTextReveal = ({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });

  const words = children.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return <ScrollWord key={i} range={[start, end]} progress={scrollYProgress}>{word}</ScrollWord>;
      })}
    </p>
  );
};

const ScrollWord = ({
  children,
  range,
  progress,
}: {
  children: string;
  key?: React.Key;
  range: [number, number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.3em] transition-colors duration-300">
      {children}
    </motion.span>
  );
};

/** Animated counter that counts up when in view */
export const AnimatedCounter = ({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <span ref={ref} className={className}>
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {prefix}
          <CountUp target={target} duration={duration} />
          {suffix}
        </motion.span>
      ) : (
        <span className="opacity-0">{prefix}{target}{suffix}</span>
      )}
    </span>
  );
};

const CountUp = ({ target, duration }: { target: number; duration: number }) => {
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onAnimationStart={() => {
        const node = ref.current;
        if (!node) return;
        let start = 0;
        const startTime = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - startTime) / (duration * 1000), 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * target);
          if (current !== start) {
            node.textContent = String(current);
            start = current;
          }
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }}
    >
      0
    </motion.span>
  );
};
