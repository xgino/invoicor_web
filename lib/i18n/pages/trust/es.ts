import type { TrustDict } from "./en";

/** About and Contact (P10, P11), Spanish (Spain). Informal "tú", like help/es.ts and the Spanish home page. */
export const es: TrustDict = {
  home: "Inicio",
  country: "Países Bajos",
  about: {
    meta: {
      title: "Quiénes somos: la app de facturas honesta | Invoicor",
      description:
        "Quién hace Invoicor y qué defiende: un inicio gratis, sin comisiones sobre tu dinero, personas que leen cada mensaje y tus datos en servidores en Alemania.",
    },
    crumb: "Quiénes somos",
    eyebrow: "Sobre Invoicor",
    title: "La app de facturas honesta",
    subtitle:
      "Invoicor ayuda a autónomos y pequeñas empresas a enviar una factura profesional en segundos, en el idioma y la moneda de su cliente, sin muros de pago escondidos y sin comisiones sobre su dinero.",
    whyEyebrow: "Por qué existe",
    whyTitle: "Facturar no debería comerse tu tarde",
    whyText:
      "La mayoría de quienes envían facturas son fontaneros, limpiadores, diseñadores y consultores, no contables. Terminan un trabajo, el cliente pide la factura, y lo que encuentran es o un documento en blanco o un programa de contabilidad pensado para un departamento financiero. Invoicor está en medio: los campos que espera el departamento de contabilidad de tu cliente, rellenados con lo que guardaste la última vez, y un PDF limpio que envías antes de irte.",
    whyText2:
      "En las reseñas de apps de facturación se repiten siempre las mismas quejas: un plan «gratis» que resulta ser una prueba, nadie con quien hablar y un procesamiento de pagos que retiene tu dinero. Invoicor está hecho para evitar las tres.",
    principlesEyebrow: "Lo que defendemos",
    principlesTitle: "Cuatro promesas que podemos cumplir",
    principles: [
      {
        title: "Gratis de verdad para empezar",
        text: "{n} facturas reales en la app, sin marca de agua y sin suscripción. Ves lo que obtienes antes de pagar nada.",
      },
      {
        title: "Nunca tocamos tu dinero",
        text: "Invoicor no es un procesador de pagos. Tu cliente te paga directamente, por transferencia a tu banco o con un enlace de pago que añades tú, y no nos quedamos con ninguna parte de ningún pago.",
      },
      {
        title: "Personas de verdad leen cada mensaje",
        text: "Los comentarios desde la app y los correos llegan al equipo, no a un bot. La respuesta puede tardar unos días, y preferimos decirlo antes que prometer una hora que no podemos cumplir.",
      },
      {
        title: "Tus datos se quedan en la UE",
        text: "Las cuentas y las facturas se guardan en servidores en Alemania y se tratan conforme al RGPD. Si eliminas tu cuenta, tus datos se borran de nuestros servidores en un plazo de 30 días, salvo lo que la ley nos obliga a conservar.",
      },
    ],
    whatEyebrow: "Lo que hace y lo que no",
    whatTitle: "Para que lo sepas antes de descargarla",
    doesTitle: "Invoicor sí",
    does: [
      "Crea una factura profesional en tu iPhone en segundos y comparte el PDF por correo, iMessage o WhatsApp",
      "31 plantillas de factura y tu propio logo",
      "Facturas en 11 idiomas y 38 monedas, para clientes en el extranjero",
      "Clientes y productos guardados, y un toque para duplicar la factura del mes pasado",
      "Un generador de facturas gratis en esta web, sin necesidad de cuenta",
    ],
    doesntTitle: "Invoicor (todavía) no",
    doesnt: [
      "Presupuestos",
      "Facturas recurrentes o programadas, ni recordatorios a tus clientes",
      "Procesamiento de pagos (añades tu propio enlace de pago)",
      "Funciona sin conexión: necesita internet",
      "Android, de momento (está en camino: mira la página de Android)",
    ],
    screensNote: "Las pantallas de la app están en inglés; las facturas salen en 11 idiomas.",
    whoEyebrow: "Quién está detrás",
    whoTitle: "Gestionado desde los {country}",
    whoText:
      "Invoicor es un negocio gestionado desde los {country}. Estos son sus datos; las condiciones y la política de privacidad explican qué se aplica cuando usas la app.",
    contactButton: "Contáctanos",
    helpButton: "Ayuda y preguntas frecuentes",
    ctaTitle: "Envía tu próxima factura",
    ctaGradient: "en segundos.",
    ctaText: "{n} facturas gratis, sin marca de agua y sin suscripción.",
  },
  contact: {
    meta: {
      title: "Contacto: comentarios, dudas y errores | Invoicor",
      description:
        "Escribe al equipo de Invoicor desde la app (Settings, Send Feedback) o por correo. Una persona lee cada mensaje; la respuesta puede tardar unos días.",
    },
    crumb: "Contacto",
    eyebrow: "Contacto",
    title: "Habla con quienes hacen Invoicor",
    subtitle:
      "Dudas, errores o ideas: una persona del equipo lee cada mensaje. La respuesta puede tardar unos días, así que para algo rápido quizá te sirva antes el centro de ayuda.",
    waysHidden: "Formas de contactarnos",
    app: {
      title: "Desde la app",
      before: "Ve a",
      path: "Settings → Support → Send Feedback",
      middle:
        "y elige un error, una petición de función o una duda. El modelo de tu iPhone y la versión de la app se añaden solos, y en",
      submissions: "My Submissions",
      after: "ves en qué punto está cada mensaje: nuevo, visto, en curso o resuelto.",
    },
    email: {
      title: "Por correo",
      before: "Escribe a",
      after:
        "para lo que sea: si no puedes iniciar sesión, solicitudes de privacidad, colaboraciones o prensa.",
    },
    help: {
      title: "Ayuda y preguntas frecuentes",
      before:
        "La mayoría de las dudas sobre plantillas, monedas, impuestos y planes tienen respuesta en el",
      link: "centro de ayuda",
      after: ", a cualquier hora.",
    },
    noPhone:
      "No hay teléfono ni chat en directo: por escrito podemos revisar tu cuenta y responderte bien.",
    topicsEyebrow: "Antes de escribir",
    topicsTitle: "Consigue la respuesta correcta a la primera",
    topics: [
      {
        title: "Un error o un PDF que falla",
        text: "Cuenta qué tocaste, qué esperabas y qué pasó, y el número de factura si se trata de una factura concreta. Una captura de pantalla ayuda (adjúntala a un correo).",
      },
      {
        title: "Suscripciones, reembolsos y cancelación",
        text: "Los planes se compran a través de Apple, así que Apple gestiona los pagos y los reembolsos. Cancela cuando quieras en tu iPhone, en Ajustes → [tu nombre] → Suscripciones. Si algo no cuadra, te ayudamos encantados.",
      },
      {
        title: "Tus datos y tu privacidad",
        text: "Pide una copia de tus datos o su eliminación por correo; también puedes eliminar tu cuenta desde la app. La política de privacidad explica tus derechos según el RGPD.",
      },
      {
        title: "Afiliados y colaboradores",
        text: "El programa de afiliados tiene su propia página, con cómo funciona y cómo apuntarse. Para otras colaboraciones, escríbenos.",
      },
    ],
    related: "Relacionado:",
    relatedLinks: {
      privacy: "política de privacidad (en inglés)",
      terms: "condiciones (en inglés)",
      affiliate: "programa de afiliados (en inglés)",
      about: "quiénes somos",
    },
    companyEyebrow: "Datos del negocio",
    companyTitle: "A quién escribes",
    ctaTitle: "¿Aún no lo has probado?",
    ctaGradient: "Empieza gratis.",
    ctaText: "{n} facturas gratis, sin marca de agua y sin suscripción.",
  },
  company: {
    business: "Negocio",
    basedIn: "Sede",
    kvk: "KvK (Cámara de Comercio de los Países Bajos)",
    vat: "Número de IVA",
    data: "Datos",
    dataValue: "Servidores en Alemania (UE), tratados conforme al RGPD",
    email: "Correo",
    countryName: "Países Bajos",
  },
};
