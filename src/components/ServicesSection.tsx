import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ScrollTextReveal } from "./TextReveal";
import guardsImg from "@/assets/service-guards.jpg";
import monitoringImg from "@/assets/service-monitoring.jpg";
import transportImg from "@/assets/service-transport.jpg";
import advisoryImg from "@/assets/service-advisory.jpg";

const services = [
  {
    slug: "guardias-de-seguridad",
    title: "Guardias de Seguridad",
    subtitle: "Presencia que protege.",
    image: guardsImg,
    number: "01",
  },
  {
    slug: "monitoreo-y-vigilancia",
    title: "Monitoreo y Vigilancia",
    subtitle: "Ojos que nunca descansan.",
    image: monitoringImg,
    number: "02",
  },
  {
    slug: "seguridad-de-traslados",
    title: "Seguridad de Traslados",
    subtitle: "Cada trayecto, impecable.",
    image: transportImg,
    number: "03",
  },
  {
    slug: "asesorias-en-seguridad",
    title: "Asesorías en Seguridad",
    subtitle: "Estrategia inteligente.",
    image: advisoryImg,
    number: "04",
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className="group">
      <Link
        to={`/servicios/${service.slug}`}
        className="block apple-card relative cursor-pointer">
        <div className="relative h-[280px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-3xl transition-transform duration-700 ease-out group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-gold/10">
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

          {/* Number */}
          <div className="absolute top-4 left-4 sm:top-8 sm:left-8">
            <span className="text-[11px] font-medium tracking-[0.2em] text-foreground/30">
              {service.number}
            </span>
          </div>

          {/* Arrow */}
          <div className="absolute top-4 right-4 sm:top-8 sm:right-8">
            <div className="w-10 h-10 rounded-full bg-foreground/10 backdrop-blur-xl flex items-center justify-center transition-all duration-500 group-hover:bg-gold group-hover:scale-110">
              <ArrowUpRight className="w-4 h-4 text-foreground/60 transition-colors duration-500 group-hover:text-background" />
            </div>
          </div>

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-10">
            <p className="text-eyebrow mb-3 opacity-70">{service.subtitle}</p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
              {service.title}
            </h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.4"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <section id="servicios" className="section-padding relative overflow-hidden">
      <motion.div ref={ref} style={{ opacity, y }} className="text-center mb-12 sm:mb-24 max-w-4xl mx-auto">
        <p className="text-eyebrow mb-6">Servicios</p>
        <h2 className="text-headline-lg mb-8">
          Cuatro pilares.{" "}
          <span className="gold-gradient-text">Una promesa.</span>
        </h2>
        <ScrollTextReveal className="text-body-lg max-w-2xl mx-auto">
          Cada servicio está diseñado con la misma obsesión por el detalle.
          Porque proteger es un arte que exige excelencia absoluta.
        </ScrollTextReveal>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={service.slug} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
