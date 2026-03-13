import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import missionImg from "@/assets/mission.jpg";
import visionImg from "@/assets/vision.jpg";
import ImageReveal from "./ImageReveal";
import { ScrollTextReveal } from "./TextReveal";
import GradientOrb from "./GradientOrb";

const FadeInSection = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.4"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className={className}>
      {children}
    </motion.div>
  );
};

const MissionSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const imgY1 = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const imgY2 = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section id="nosotros" ref={containerRef} className="section-padding relative overflow-hidden">
      {/* Ambient glow */}
      <GradientOrb className="top-1/4 -right-60" size={600} color="gold" delay={1} />

      {/* Headline */}
      <FadeInSection className="text-center mb-16 sm:mb-32 max-w-4xl mx-auto">
        <p className="text-eyebrow mb-6">Nuestra esencia</p>
        <h2 className="text-headline-lg mb-8">
          La seguridad no es un producto.{" "}
          <span className="gold-gradient-text">Es una filosofía.</span>
        </h2>
        <ScrollTextReveal className="text-body-lg max-w-2xl mx-auto">
          Como cualquier gran diseño, la verdadera seguridad es invisible. Se siente en cada rincón, en cada momento, sin imponerse.
        </ScrollTextReveal>
      </FadeInSection>

      {/* Mission */}
      <div className="grid lg:grid-cols-2 gap-10 sm:gap-20 items-center mb-20 sm:mb-40 max-w-6xl mx-auto">
        <FadeInSection>
          <p className="text-eyebrow mb-6">Misión</p>
          <h3 className="text-headline-md mb-8 text-foreground">
            Superar expectativas.
            <br />
            <span className="text-muted-foreground">Siempre.</span>
          </h3>
          <p className="text-body leading-[1.8]">
            Satisfacer los requerimientos de nuestros clientes superando sus expectativas
            mediante soluciones integrales basadas en el uso de la tecnología,
            estrategias de inteligencia y tácticas de reacción inmediata.
          </p>
        </FadeInSection>

        <FadeInSection className="relative">
          <ImageReveal
            src={missionImg}
            alt="Misión BACOR"
            imgClassName="h-[280px] sm:h-[450px]"
            direction="left"
          />
        </FadeInSection>
      </div>

      {/* Vision */}
      <div className="grid lg:grid-cols-2 gap-10 sm:gap-20 items-center max-w-6xl mx-auto">
        <FadeInSection className="relative lg:order-2">
          <p className="text-eyebrow mb-6">Visión</p>
          <h3 className="text-headline-md mb-8 text-foreground">
            Liderar con
            <br />
            <span className="text-muted-foreground">innovación.</span>
          </h3>
          <p className="text-body leading-[1.8]">
            Ser la empresa líder en servicios de logística en seguridad,
            en base a la aplicación de tecnología y el desarrollo de
            modelos de seguridad modernos.
          </p>
        </FadeInSection>

        <FadeInSection className="relative lg:order-1">
          <ImageReveal
            src={visionImg}
            alt="Visión BACOR"
            imgClassName="h-[280px] sm:h-[450px]"
            direction="right"
          />
        </FadeInSection>
      </div>
    </section>
  );
};

export default MissionSection;
