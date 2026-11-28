import type { ContentDict } from "./en";

/**
 * The fixed text of the template and industry pages and their hubs, Spanish (Spain). Informal
 * "tú", like help/es.ts and the Spanish home page.
 */
export const es: ContentDict = {
  home: "Inicio",
  onThisPage: "En esta página",
  updated: "Actualizado",
  disclaimer:
    "Información general, no asesoramiento fiscal ni legal. Consulta los detalles con tu gestor o un abogado de donde trabajes.",
  hubCta: "Crea tu próxima factura",
  templateHub: {
    meta: {
      title: "Plantillas de factura gratis por sector | Invoicor",
      description:
        "Plantillas de factura gratis por sector, con guías: qué incluir, ejemplos reales y errores a evitar. Créalas y envíalas con la app Invoicor en segundos.",
    },
    crumb: "Plantillas",
    eyebrow: "Plantillas y guías gratis",
    title: "Plantillas de factura gratis",
    subtitle:
      "Plantillas y guías para tu oficio o el tipo de factura que necesitas (anticipo, por horas, autónomo…): qué incluir exactamente, una factura de ejemplo con conceptos reales y los errores que retrasan el cobro.",
    groupTypes: "Tipos de factura",
    groupTrades: "Plantillas por oficio",
    cardType: "Tipo de factura",
    cardTrade: "Plantilla y guía",
    cta: "Ver plantilla",
    explainerTitle: "Cómo usar estas plantillas",
    explainer: [
      "Cada guía muestra lo que lleva una buena factura de ese oficio o tipo: los datos que esperan tu cliente y su gestor, cómo detallar la mano de obra y los materiales, y cómo tratar los anticipos y el IVA. La factura de ejemplo usa conceptos realistas, así que puedes copiar su estructura para tus propios trabajos.",
      "Puedes rehacer cualquiera de ellas en una hoja de cálculo o un procesador de textos. O crear la misma factura en la app Invoicor: los datos de tu negocio, tus clientes y tus conceptos guardados se rellenan solos, los totales y el IVA se calculan, y envías un PDF limpio desde el móvil. Tus primeras {n} facturas son gratis.",
    ],
  },
  template: {
    crumb: "Plantillas",
    eyebrow: "Plantilla y guía gratis",
    use: "Usar esta plantilla gratis",
    app: "Crearla en la app",
    toc: {
      include: "Qué incluir",
      sample: "Ejemplo de factura",
      notes: "Notas",
      industryNotes: "Notas del sector",
      mistakes: "Errores a evitar",
      formats: "Envíala en PDF",
      tip: "Consejo profesional",
      faq: "Preguntas frecuentes",
    },
    eyebrows: {
      include: "Lista de comprobación",
      sample: "Ejemplo",
      notes: "Conviene saber",
      mistakes: "Evita esto",
      formats: "Formato",
      tip: "Consejo profesional",
    },
    subtotal: "Subtotal",
    depositPaid: "Anticipo pagado",
    tax: "IVA",
    balanceDue: "Importe pendiente",
    invoiceNotes: "Notas de la factura:",
    fillExample: "Rellena este ejemplo online",
    fillHint: "Gratis, sin registro. Cambia lo que quieras y descarga el PDF.",
    mistakesTitle: "Errores habituales que debes evitar",
    formatsTitle: "Envíala en PDF",
    whyPdf: "Por qué PDF",
    pdfDefault:
      "Un PDF se ve igual en cualquier móvil u ordenador, no se puede cambiar sin querer y es lo que esperan los clientes y los gestores.",
    browserTitle: "Gratis, en tu navegador",
    browserText:
      "Abre esta plantilla en el generador gratis: los conceptos del ejemplo ya están rellenados. Cámbialos, añade tu logo y descarga el PDF. Sin registro.",
    openGenerator: "Abrir el generador",
    iphoneTitle: "Desde tu iPhone",
    iphoneText:
      "La app Invoicor crea el mismo PDF y lo envía por correo o mensaje, con tus clientes y tus conceptos habituales guardados. {n} facturas gratis.",
    getApp: "Descargar la app",
    whyNotWord:
      "¿Por qué no Word o Excel? Cualquiera que los abra puede cambiar los importes, y una fórmula puede estropear un total sin que te des cuenta. Invoicor solo crea PDF.",
    appCardEyebrow: "¿Facturas cada semana?",
    appCardText:
      "Guarda tus clientes y tus conceptos habituales, y envía cada factura desde el móvil.",
    moreTemplates: "Más plantillas de factura",
    ctaGradient: "en segundos.",
    ctaText:
      "Clientes y conceptos guardados, totales e IVA automáticos y un PDF limpio que envías desde el móvil antes de irte del trabajo.",
  },
  industryHub: {
    meta: {
      title: "Programa de facturación por sector | Invoicor",
      description:
        "Fontanero, diseñador autónomo o consultor: descubre cómo la app móvil de Invoicor agiliza tu facturación.",
    },
    crumb: "Sectores",
    eyebrow: "Sectores",
    title: "Hecho para tu forma de trabajar.",
    subtitle:
      "Cada oficio factura a su manera. Descubre los errores de facturación, los conceptos y las normas de IVA de tu trabajo, y cómo los resuelve Invoicor.",
    card: "Sector",
    cta: "Ver cómo funciona",
    explainerTitle: "Una app que factura como tu oficio",
    explainer: [
      "Un fontanero factura la salida, la mano de obra y las piezas. Un diseñador factura un anticipo y varios hitos. Una empresa de limpieza factura al mismo cliente cada semana. Cada página de sector repasa los errores que retrasan el cobro en ese oficio, los conceptos que más vas a usar, los términos que esperan ver tus clientes y los puntos de IVA que conviene revisar.",
      "Invoicor funciona igual para todos: guarda tus clientes y conceptos una vez, elige una plantilla y envía un PDF limpio desde el móvil. {n} facturas son gratis, e Invoicor nunca se queda con una parte de tus cobros.",
    ],
  },
  industry: {
    crumb: "Sectores",
    start: "Empieza gratis en iOS",
    online: "Crea una gratis online",
    toc: {
      mistakes: "Errores de facturación",
      features: "Cómo te ayuda Invoicor",
      scenario: "Un caso real",
      tip: "Consejo de experto",
      lineItems: "Conceptos habituales",
      glossary: "Glosario",
      tax: "Impuestos y obligaciones",
      faq: "Preguntas frecuentes",
    },
    eyebrows: {
      mistakes: "Qué falla",
      features: "Cómo te ayuda Invoicor",
      scenario: "Un día de trabajo",
      tip: "Consejo de experto",
      lineItems: "Conceptos",
      glossary: "Glosario",
      tax: "Impuestos y obligaciones",
    },
    scenarioTitle: "Un caso real de facturación",
    fromExperience: "Por experiencia",
    lineItemsIntro:
      "Guárdalos una vez como productos en Invoicor y añádelos a cualquier factura con un toque.",
    whatToKnow: "Qué debes saber",
    templatesEyebrow: "Plantillas gratis",
    templatesTitle: "¿Necesitas una sola factura ahora mismo?",
    templatesCard: "Con un ejemplo ya rellenado y qué incluir",
    moreIndustries: "Más sectores",
    ctaGradient: "Pruébalo gratis.",
    ctaText:
      "Clientes y conceptos guardados, totales e IVA automáticos y un PDF limpio que envías desde el móvil.",
  },
};
