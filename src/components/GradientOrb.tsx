import { motion } from "framer-motion";

/** Floating gradient orb — Apple-style ambient glow */
const GradientOrb = ({
  className = "",
  size = 600,
  color = "gold",
  delay = 0,
}: {
  className?: string;
  size?: number;
  color?: "gold" | "blue" | "purple";
  delay?: number;
}) => {
  const colors = {
    gold: "from-amber-500/20 via-yellow-600/10 to-transparent",
    blue: "from-blue-500/15 via-cyan-500/8 to-transparent",
    purple: "from-purple-500/15 via-pink-500/8 to-transparent",
  };

  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0, 0.6, 0.4, 0.6],
        scale: [0.8, 1, 1.1, 1],
        x: [0, 30, -20, 0],
        y: [0, -20, 30, 0],
      }}
      transition={{
        duration: 12,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      <div
        className={`w-full h-full rounded-full bg-gradient-radial ${colors[color]} blur-[120px]`}
      />
    </motion.div>
  );
};

export default GradientOrb;
