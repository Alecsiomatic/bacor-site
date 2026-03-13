import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, ArrowUpRight } from "lucide-react";
import logo from "@/assets/bacor-logo.png";

const ContactFooter = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.3"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:direccion_bacor@outlook.com?subject=Contacto - ${formData.name}&body=${formData.message}%0A%0ACorreo: ${formData.email}`;
  };

  const inputClasses = (field: string) =>
    `w-full bg-transparent border-b ${
      focused === field ? "border-gold" : "border-border"
    } py-4 text-foreground text-base font-light placeholder:text-muted-foreground/40 focus:outline-none transition-colors duration-500`;

  return (
    <section id="contacto" ref={ref} className="section-padding relative">
      <motion.div style={{ opacity, y }} className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-eyebrow mb-6">Contacto</p>
          <h2 className="text-headline-lg mb-6">
            Hablemos de lo que{" "}
            <span className="gold-gradient-text">más importa.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Info */}
          <div className="flex flex-col justify-center gap-10">
            <a
              href="tel:5563746558"
              className="group flex items-center gap-6 py-4 border-b border-border/50 hover:border-gold/30 transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-500">
                <Phone className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-colors duration-500" />
              </div>
              <div className="flex-1">
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">Teléfono</p>
                <p className="text-lg text-foreground font-light">55 6374 6558</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-gold transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="mailto:direccion_bacor@outlook.com"
              className="group flex items-center gap-6 py-4 border-b border-border/50 hover:border-gold/30 transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-500">
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-colors duration-500" />
              </div>
              <div className="flex-1">
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">Correo</p>
                <p className="text-foreground font-light">direccion_bacor@outlook.com</p>
                <p className="text-sm text-muted-foreground font-light mt-0.5">rh.corp.bacor@gmail.com</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-gold transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Nombre completo"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
              required
              className={inputClasses("name")}
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
              required
              className={inputClasses("email")}
            />
            <textarea
              placeholder="¿En qué podemos ayudarte?"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              required
              className={`${inputClasses("message")} resize-none`}
            />
            <button
              type="submit"
              className="apple-button-primary self-start mt-6"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto mt-32 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logo} alt="BACOR" className="h-8 w-auto opacity-40" />
        <p className="text-sm text-muted-foreground font-light">
          © 2024 Corporativo Securitas Bacor. Todos los derechos reservados.
        </p>
      </div>
    </section>
  );
};

export default ContactFooter;
