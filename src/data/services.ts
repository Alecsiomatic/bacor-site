import guardsImg from "@/assets/service-guards.jpg";
import monitoringImg from "@/assets/service-monitoring.jpg";
import transportImg from "@/assets/service-transport.jpg";
import advisoryImg from "@/assets/service-advisory.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import missionImg from "@/assets/mission.jpg";
import visionImg from "@/assets/vision.jpg";

export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  number: string;
  headline: string;
  description: string;
  philosophy: string;
  features: { title: string; description: string }[];
  galleryImages: string[];
  ctaText: string;
}

export const servicesData: ServiceData[] = [
  {
    slug: "guardias-de-seguridad",
    title: "Guardias de Seguridad",
    subtitle: "Presencia que protege.",
    heroImage: guardsImg,
    number: "01",
    headline: "La presencia humana es irreemplazable. La tecnología la potencia.",
    description:
      "Nuestros guardias no son simples vigilantes. Son profesionales meticulosamente seleccionados y entrenados para anticiparse al riesgo antes de que se materialice. Cada uno de ellos representa el compromiso de BACOR con la excelencia.",
    philosophy:
      "Creemos que la seguridad comienza con las personas. Por eso invertimos incansablemente en la formación, el bienestar y la evolución profesional de cada miembro de nuestro equipo. El resultado: un nivel de servicio que se siente diferente desde el primer momento.",
    features: [
      {
        title: "Selección rigurosa",
        description: "Cada candidato atraviesa un proceso de evaluación exhaustivo que garantiza integridad, competencia y compromiso.",
      },
      {
        title: "Capacitación continua",
        description: "Programas de entrenamiento que evolucionan con las amenazas. Siempre un paso adelante.",
      },
      {
        title: "Cobertura total",
        description: "Instalaciones corporativas, residencias de alto valor, eventos exclusivos. Donde estés, estamos.",
      },
    ],
    galleryImages: [guardsImg, heroBg, missionImg],
    ctaText: "Solicitar una evaluación de seguridad",
  },
  {
    slug: "monitoreo-y-vigilancia",
    title: "Monitoreo y Vigilancia",
    subtitle: "Ojos que nunca descansan.",
    heroImage: monitoringImg,
    number: "02",
    headline: "La vigilancia inteligente no observa. Anticipa.",
    description:
      "Nuestros sistemas de monitoreo operan las 24 horas, los 365 días del año, integrando tecnología de última generación con análisis humano experto. No se trata de cámaras. Se trata de inteligencia aplicada.",
    philosophy:
      "La mejor tecnología de vigilancia es aquella que se integra sin fricciones en tu entorno. Diseñamos sistemas que protegen sin invadir, que monitorean sin interrumpir. Porque la seguridad efectiva es la que no se nota hasta que la necesitas.",
    features: [
      {
        title: "Monitoreo 24/7",
        description: "Centro de operaciones activo en todo momento. Sin interrupciones. Sin excusas.",
      },
      {
        title: "Tecnología avanzada",
        description: "Cámaras de alta definición, sensores inteligentes y analítica predictiva trabajando en conjunto.",
      },
      {
        title: "Respuesta inmediata",
        description: "Protocolos de reacción diseñados para cada escenario. Cada segundo está planificado.",
      },
    ],
    galleryImages: [monitoringImg, visionImg, heroBg],
    ctaText: "Diseñar tu sistema de monitoreo",
  },
  {
    slug: "seguridad-de-traslados",
    title: "Seguridad de Traslados",
    subtitle: "Cada trayecto, impecable.",
    heroImage: transportImg,
    number: "03",
    headline: "Mover lo valioso exige más que logística. Exige confianza absoluta.",
    description:
      "Protegemos el traslado de personas y bienes con la precisión de una operación quirúrgica. Cada ruta es analizada, cada variable contemplada, cada contingencia prevista.",
    philosophy:
      "Entendemos que lo que transportamos tiene un valor que va más allá de lo material. Por eso tratamos cada traslado como si fuera único — porque lo es. La planificación obsesiva y la ejecución impecable son nuestro estándar, no nuestra aspiración.",
    features: [
      {
        title: "Análisis de rutas",
        description: "Cada trayecto es estudiado, optimizado y respaldado con planes de contingencia múltiples.",
      },
      {
        title: "Escoltas profesionales",
        description: "Personal especializado en protección móvil con entrenamiento táctico avanzado.",
      },
      {
        title: "Coordinación total",
        description: "Comunicación en tiempo real con nuestro centro de operaciones durante todo el recorrido.",
      },
    ],
    galleryImages: [transportImg, missionImg, visionImg],
    ctaText: "Planificar un traslado seguro",
  },
  {
    slug: "asesorias-en-seguridad",
    title: "Asesorías en Seguridad",
    subtitle: "Estrategia inteligente.",
    heroImage: advisoryImg,
    number: "04",
    headline: "Antes de proteger, hay que comprender. Antes de actuar, hay que pensar.",
    description:
      "Nuestras asesorías transforman la forma en que entiendes tu seguridad. Realizamos diagnósticos profundos, identificamos vulnerabilidades invisibles y diseñamos estrategias que convierten la incertidumbre en control.",
    philosophy:
      "La seguridad más efectiva es la que se diseña antes de que surja la amenaza. Nuestro enfoque consultivo combina décadas de experiencia operativa con metodologías de análisis de riesgo de clase mundial. No vendemos miedo. Vendemos tranquilidad fundamentada.",
    features: [
      {
        title: "Diagnóstico integral",
        description: "Evaluación exhaustiva de tu entorno, procesos y vulnerabilidades desde una perspectiva holística.",
      },
      {
        title: "Estrategias a medida",
        description: "Planes de seguridad diseñados específicamente para tu realidad. Sin plantillas. Sin atajos.",
      },
      {
        title: "Acompañamiento continuo",
        description: "No desaparecemos después del informe. Evolucionamos contigo ante cada nuevo desafío.",
      },
    ],
    galleryImages: [advisoryImg, heroBg, missionImg],
    ctaText: "Agendar una consultoría",
  },
];
