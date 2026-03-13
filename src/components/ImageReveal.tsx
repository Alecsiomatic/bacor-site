import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/** Image that reveals itself with a sliding mask on scroll */
const ImageReveal = ({
  src,
  alt,
  className = "",
  imgClassName = "",
  direction = "left",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  direction?: "left" | "right" | "up";
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.3"],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);

  const clipMap = {
    left: (p: number) => `inset(0 ${100 - p}% 0 0)`,
    right: (p: number) => `inset(0 0 0 ${100 - p}%)`,
    up: (p: number) => `inset(${100 - p}% 0 0 0)`,
  };

  const clipPath = useTransform(clipProgress, (p) => clipMap[direction](p));

  return (
    <div ref={ref} className={`overflow-hidden rounded-3xl ${className}`}>
      <motion.div style={{ clipPath }} className="w-full h-full">
        <motion.img
          src={src}
          alt={alt}
          style={{ scale }}
          className={`w-full h-full object-cover ${imgClassName}`}
        />
      </motion.div>
    </div>
  );
};

export default ImageReveal;
