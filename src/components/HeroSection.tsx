import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { HeroTextReveal } from "./TextReveal";
import MagneticButton from "./MagneticButton";
import GradientOrb from "./GradientOrb";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      </motion.div>

      {/* Floating gradient orbs */}
      <GradientOrb className="-top-40 -right-40" size={700} color="gold" delay={0} />
      <GradientOrb className="-bottom-60 -left-40" size={500} color="gold" delay={3} />

      <motion.div style={{ opacity }} className="relative z-10 container mx-auto px-4 sm:px-6 text-center max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-eyebrow mb-8"
        >
          30 años protegiendo lo esencial
        </motion.p>

        <h1 className="text-headline-xl mb-8 overflow-hidden">
          <HeroTextReveal delay={1}>Seguridad diseñada</HeroTextReveal>
          <br className="hidden md:block" />
          <span className="gold-gradient-text">
            <HeroTextReveal delay={1.4}>con precisión.</HeroTextReveal>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-body-lg max-w-2xl mx-auto mb-8 sm:mb-14"
        >
          Cada detalle importa. Cada segundo cuenta.
          Creamos experiencias de protección que trascienden lo convencional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <MagneticButton to="/#contacto" className="apple-button-primary">
            Descubre más
          </MagneticButton>
          <MagneticButton to="/#servicios" className="apple-button-secondary">
            Explorar servicios
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 3 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[11px] tracking-[0.2em] uppercase text-foreground/40">Scroll</span>
        <motion.div
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-foreground/30 origin-top"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
