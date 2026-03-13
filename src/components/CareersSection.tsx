import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import careersBg from "@/assets/careers-bg.jpg";

const CareersSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0.5]);

  return (
    <section ref={ref} className="relative min-h-[80vh] flex items-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ scale: imgScale }}>
        <img src={careersBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/75" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 container mx-auto px-6 py-32 text-center max-w-3xl"
      >
        <p className="text-eyebrow mb-8">Únete al equipo</p>

        <h2 className="text-headline-lg mb-8">
          Tu próximo capítulo{" "}
          <span className="gold-gradient-text">comienza aquí.</span>
        </h2>

        <p className="text-body-lg mb-12 max-w-xl mx-auto">
          Nuestro éxito se basa en personas extraordinarias.
          Ofrecemos un entorno donde el talento se convierte en impacto real.
        </p>

        <Link to="/#contacto" className="apple-button-primary">
          Aplicar ahora
        </Link>
      </motion.div>
    </section>
  );
};

export default CareersSection;
