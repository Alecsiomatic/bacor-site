import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";
import Navbar from "@/components/Navbar";

const FadeIn = ({
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
    offset: ["start 0.9", "start 0.4"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className={className}>
      {children}
    </motion.div>
  );
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = servicesData.find((s) => s.slug === slug);
  const currentIndex = servicesData.findIndex((s) => s.slug === slug);
  const nextService = servicesData[(currentIndex + 1) % servicesData.length];
  const prevService = servicesData[(currentIndex - 1 + servicesData.length) % servicesData.length];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  if (!service) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="relative h-[70vh] sm:h-[85vh] flex items-end overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
          <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-6 lg:px-12 pb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              to="/#servicios"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="text-sm font-light">Servicios</span>
            </Link>
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden sm:block text-[8rem] md:text-[12rem] font-semibold leading-none text-foreground/5 absolute -top-10 right-6 lg:right-12 select-none"
          >
            {service.number}
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-eyebrow mb-4"
          >
            {service.subtitle}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-headline-xl max-w-3xl"
          >
            {service.title}
          </motion.h1>
        </motion.div>
      </section>

      {/* Headline statement */}
      <section className="section-padding">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <h2 className="text-headline-md md:text-headline-lg gold-gradient-text">
            {service.headline}
          </h2>
        </FadeIn>
      </section>

      {/* Description + Philosophy */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 pb-16 sm:pb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-20">
          <FadeIn>
            <p className="text-eyebrow mb-6">El enfoque</p>
            <p className="text-xl md:text-2xl font-light leading-[1.7] text-foreground/80">
              {service.description}
            </p>
          </FadeIn>

          <FadeIn>
            <p className="text-eyebrow mb-6">La filosofía</p>
            <p className="text-xl md:text-2xl font-light leading-[1.7] text-foreground/80">
              {service.philosophy}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 pb-20 sm:pb-40">
        <FadeIn className="text-center mb-10 sm:mb-20">
          <p className="text-eyebrow mb-4">Lo que nos define</p>
          <h3 className="text-headline-md text-foreground">
            Los detalles que marcan{" "}
            <span className="gold-gradient-text">la diferencia.</span>
          </h3>
        </FadeIn>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {service.features.map((feature, i) => (
            <FadeIn key={feature.title}>
              <div className="group p-8 rounded-3xl bg-card border border-border/50 hover:border-gold/20 transition-all duration-700 h-full">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-500">
                  <span className="text-sm font-semibold text-muted-foreground group-hover:text-gold transition-colors duration-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3 tracking-tight">
                  {feature.title}
                </h4>
                <p className="text-body text-sm leading-[1.7]">{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Gallery - cinematic scroll */}
      <section className="pb-20 sm:pb-40 overflow-hidden">
        <FadeIn className="px-4 sm:px-6 md:px-12 lg:px-20 mb-8 sm:mb-12">
          <p className="text-eyebrow">En acción</p>
        </FadeIn>
        <div className="flex gap-3 sm:gap-4 px-4 sm:px-6 md:px-12 lg:px-20 overflow-x-auto pb-4 snap-x snap-mandatory">
          {service.galleryImages.map((img, i) => (
            <FadeIn key={i} className="flex-shrink-0 w-[80vw] sm:w-[70vw] md:w-[45vw] lg:w-[35vw] snap-center">
              <div className="overflow-hidden rounded-3xl">
                <motion.img
                  src={img}
                  alt={`${service.title} - ${i + 1}`}
                  className="w-full h-[35vh] sm:h-[50vh] object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <FadeIn className="text-center max-w-2xl mx-auto">
          <h3 className="text-headline-md mb-8">
            ¿Listo para experimentar{" "}
            <span className="gold-gradient-text">la diferencia?</span>
          </h3>
          <Link to="/#contacto" className="apple-button-primary">
            {service.ctaText}
          </Link>
        </FadeIn>
      </section>

      {/* Next/Prev navigation */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-5xl mx-auto border-t border-border/30 pt-8 sm:pt-12 grid grid-cols-2 gap-4 sm:gap-8">
          <Link
            to={`/servicios/${prevService.slug}`}
            className="group flex items-center gap-4"
          >
            <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-all duration-300 group-hover:-translate-x-1" />
            <div>
              <p className="text-xs text-muted-foreground mb-1">Anterior</p>
              <p className="text-foreground font-medium group-hover:text-gold transition-colors duration-300 text-sm sm:text-base">
                {prevService.title}
              </p>
            </div>
          </Link>

          <Link
            to={`/servicios/${nextService.slug}`}
            className="group flex items-center justify-end gap-4 text-right"
          >
            <div>
              <p className="text-xs text-muted-foreground mb-1">Siguiente</p>
              <p className="text-foreground font-medium group-hover:text-gold transition-colors duration-300 text-sm sm:text-base">
                {nextService.title}
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-all duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
