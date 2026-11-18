/**
 * The free invoice generator's text, Spanish (Spain). Informal "tú", as on the Spanish home page.
 * The checklist follows the Reglamento de facturación (RD 1619/2012), not the English list.
 */
import type { GeneratorDict } from "./en";

export const es: GeneratorDict = {
  ui: {
    viewAria: "Vista del generador",
    tabForm: "Formulario",
    tabPreview: "Vista previa",
    previewAria: "Vista previa de la factura",
    offerTitle: "¿Cargar el ejemplo de {niche}?",
    offerText:
      "Sustituye tus conceptos y notas actuales; tus datos y los del cliente se mantienen.",
    offerLoad: "Cargar ejemplo",
    offerKeep: "Mantener los míos",
    savedBlocked: "No guardado: este navegador bloquea el almacenamiento",
    savedOk: "Guardado solo en este navegador. Nadie más puede verlo.",
    newInvoice: "Nueva factura",
    newInvoiceTitle: "Mantiene los datos de tu negocio y borra el cliente y los conceptos",
    clearAll: "Borrar todo",
    clearConfirm:
      "¿Borrar todo? Se eliminarán de este navegador los datos de tu negocio, el cliente y los conceptos.",
    templateLabel: "Plantilla",
    browseTemplates: "Ver plantillas",
    subtotal: "Subtotal",
    discount: "Descuento",
    tax: "IVA",
    taxIncluded: " (incluido)",
    total: "Total",

    setupTitle: "Configuración",
    setupHint: "Diseño, idioma y moneda",
    change: "Cambiar",
    invoiceLanguage: "Idioma de la factura",
    currency: "Moneda",
    dateFormat: "Formato de fecha",

    detailsTitle: "Datos de la factura",
    detailsHint: "Número, fechas y cuándo quieres cobrar",
    invoiceNumber: "Número de factura",
    invoiceNumberHint: "Usa una numeración correlativa, como 2026-001, 2026-002",
    issueDate: "Fecha de expedición",
    dueDate: "Fecha de vencimiento",
    paymentTerms: "Condiciones de pago",
    paymentTermsPlaceholder: "p. ej. Pago a 30 días por transferencia",

    businessTitle: "Tu negocio",
    businessHint: "Quién emite la factura",
    businessName: "Nombre o razón social",
    email: "Email",
    phone: "Teléfono",
    address: "Dirección",
    postalCode: "Código postal",
    city: "Ciudad",
    country: "País",
    taxId: "NIF / NIF-IVA",
    taxIdPlaceholder: "p. ej. ESB12345678",
    registration: "Otro identificador",
    registrationPlaceholder: "p. ej. NIF/CIF, Registro Mercantil",
    bankDetails: "Datos bancarios",
    bankName: "Banco",
    iban: "IBAN / número de cuenta",
    swift: "SWIFT / BIC",

    clientTitle: "Facturar a",
    clientHint: "A quién le facturas",
    clientName: "Nombre del cliente o empresa",
    contactPerson: "Persona de contacto",
    clientTaxHint: "Obligatorio si el cliente es empresa o profesional",

    itemsTitle: "Conceptos",
    itemsHint: "Lo que cobras, hasta {max} líneas",
    addLine: "Añadir línea",
    itemsLimit: "Es el límite gratuito. La app Invoicor te permite añadir más.",
    line: "Línea {line}",
    moveUp: "Subir la línea {line}",
    moveDown: "Bajar la línea {line}",
    removeLine: "Eliminar la línea {line}",
    item: "Concepto",
    itemPlaceholder: "p. ej. Reparación de grifo de cocina",
    qty: "Cant.",
    price: "Precio",
    details: "Detalles (opcional)",
    detailsPlaceholder: "Aparece en una línea aparte, bajo el concepto",
    amount: "Importe",

    taxTitle: "IVA y descuento",
    taxHint: "Un único tipo de impuesto para toda la factura",
    taxRate: "Tipo de IVA",
    taxInclusive: "Los precios ya incluyen el IVA",
    discountNone: "Sin descuento",
    discountPercent: "Porcentaje (%)",
    discountFixed: "Importe fijo",
    discountPct: "Descuento %",
    discountAmount: "Importe del descuento",

    notesTitle: "Notas",
    notesHint: "Un agradecimiento, la garantía o cualquier otra indicación",

    payTitle: "Enlace de pago online",
    payHint: "Opcional. Tu cliente te paga directamente a ti, nunca a través de nosotros",
    payLabel: "Tu enlace de pago",
    payFieldHint:
      "Tu propio enlace de PayPal, Stripe u otro. Aparece como un botón «Pagar online».",
    payError: "El enlace debe empezar por https://",

    logo: "Logo (opcional)",
    logoAlt: "Tu logo",
    logoRemove: "Quitar",
    logoUpload: "Subir logo",
    logoHint: "PNG o JPG, hasta 500 KB. Sustituye al nombre en la parte superior.",
    logoErrType: "Usa una imagen PNG o JPG.",
    logoErrSize: "El logo debe pesar 500 KB o menos.",
    logoErrRead: "No se ha podido leer esa imagen.",

    creating: "Creando tu PDF…",
    download: "Descargar PDF",
    downloadNote: "Gratis. El PDF lleva una pequeña línea «Created with invoicor.com» al pie.",
    downloadNeedsItem: "Añade al menos una línea con descripción para descargar.",
    pdfError:
      "Este navegador no ha podido crear el PDF. Inténtalo de nuevo o prueba con otro navegador. Tu formulario está guardado.",
    ready: "Lista",
    doneTitle: "Tu factura se ha descargado",
    doneText: "Busca {file} en tu carpeta de Descargas.",
    downloadAgain: "Descargar de nuevo",
    createAnother: "Crear otra",
    appTitle: "La próxima vez, envíala desde el móvil.",
    appText:
      "La app Invoicor guarda este cliente y tus conceptos, conserva cada factura con su estado y no lleva marca de agua. {n} facturas gratis.",
    fileName: "factura",

    previewFrame: "Vista previa de la factura",
    previewError:
      "No se ha podido cargar la vista previa. Revisa tu conexión; tu formulario está guardado.",
    overflowTitle: "Ya no cabe en una sola página.",
    overflowText:
      "El final de la factura (notas, datos bancarios) quedaría cortado. Acorta los detalles de los conceptos o usa menos líneas.",

    pickerTitle: "Elige una plantilla",
    pickerCount: "{free} gratis aquí · las {all} en la app",
    close: "Cerrar",
    free: "Gratis",
    inApp: "En la app",
    lockedAria: "{name}: disponible en la app Invoicor",
    thumbTitle: "Plantilla {name}",
  },

  defaults: {
    invoiceNumber: "2026-001",
    paymentTerms: "Pago a 30 días por transferencia bancaria",
    notes: "Gracias por confiar en nosotros.",
  },

  page: {
    meta: {
      title: "Crear factura gratis online y descargar en PDF | Invoicor",
      description:
        "Haz una factura gratis online: elige un modelo de factura, añade tus conceptos y descarga el PDF. Sin registro. 38 monedas y 11 idiomas.",
    },
    home: "Inicio",
    crumb: "Crear factura gratis",
    eyebrow: "Gratis · sin registro",
    h1: "Crear factura gratis online",
    lead: "Rellena tus datos, elige una plantilla y descarga una factura profesional en PDF. Gratis, sin crear cuenta, en 38 monedas y 11 idiomas.",

    howEyebrow: "Cómo funciona",
    howTitle: "Cómo hacer una factura en 3 pasos",
    howDescription: "Crea una factura profesional online y descárgala en PDF.",
    steps: [
      {
        name: "Añade tus datos y los de tu cliente",
        text: "Escribe tu nombre o razón social, tu dirección y tu NIF, y después los datos de a quién facturas. Si tienes logo, añádelo.",
      },
      {
        name: "Añade los conceptos, el IVA y el descuento",
        text: "Indica lo que has hecho o vendido, con cantidad y precio. Elige un tipo de IVA y, si quieres, un descuento; los totales se calculan solos.",
      },
      {
        name: "Elige una plantilla y descarga el PDF",
        text: "Escoge una de las 21 plantillas gratuitas, revisa la vista previa en directo y descarga tu factura en PDF.",
      },
    ],

    mustEyebrow: "Checklist",
    mustTitle: "Qué debe incluir una factura en España",
    mustIntro:
      "El Reglamento de facturación (Real Decreto 1619/2012) fija los datos obligatorios de una factura completa. El generador tiene un campo para cada uno.",
    mustHave: [
      "Número de factura y, en su caso, serie, con numeración correlativa",
      "Fecha de expedición",
      "Fecha de la operación, si es distinta de la de expedición",
      "Nombre y apellidos o razón social del emisor y del destinatario",
      "NIF del emisor y, por regla general, también del destinatario",
      "Domicilio del emisor y del destinatario",
      "Descripción de las operaciones, con cantidad y precio unitario",
      "Base imponible, tipo de IVA aplicado y cuota tributaria",
      "Importe total de la factura",
    ],
    mustNote:
      "Si eres autónomo y tienes que practicar retención de IRPF a clientes empresa o profesionales, la factura debe mostrarla en una línea aparte; este generador aplica un solo impuesto por factura y no la incluye. Sobre VeriFactu y la factura electrónica obligatoria entre empresas, previstas de forma escalonada a partir de 2027: este generador crea facturas en PDF y no es un sistema VeriFactu. Consulta con tu gestor qué te aplica y desde cuándo.",

    typesEyebrow: "Lo básico",
    typesTitle: "¿Factura, recibo o presupuesto?",
    types: [
      {
        title: "Presupuesto",
        text: "Antes del trabajo: lo que probablemente costará. No es una petición de pago.",
      },
      {
        title: "Factura",
        text: "Después del trabajo (o antes, si pides un anticipo): una petición de pago, con fecha de vencimiento.",
      },
      { title: "Recibo", text: "Después del pago: el justificante de que has cobrado." },
    ],
    typesNote:
      "Este generador crea facturas. Muchos negocios envían la misma factura marcada como «Pagada» a modo de recibo cuando llega el dinero.",

    termsEyebrow: "Cobrar",
    termsTitle: "Condiciones de pago para cobrar a tiempo",
    termsText:
      "Las condiciones de pago le dicen a tu cliente cuándo pagar. Para trabajos pequeños y clientes particulares, lo habitual es el pago al contado o a la recepción de la factura. Con empresas, la Ley 3/2004 de lucha contra la morosidad fija un plazo de 30 días si no se pacta otro, y como máximo 60 días entre empresas. Elijas lo que elijas, pon la fecha de vencimiento concreta en la factura, facilita el pago con tu IBAN o un enlace de pago y guarda el número de factura en tus registros. Unas condiciones claras y una fecha de vencimiento visible son la forma más sencilla de no tener que reclamar pagos.",

    tipsEyebrow: "Buenas costumbres",
    tipsTitle: "Numerar, enviar y reclamar",
    tips: [
      {
        title: "Numera tus facturas en una serie correlativa",
        text: "Usa una numeración seguida, como 2026-001, 2026-002, y no repitas nunca un número. En España la numeración debe ser correlativa, y además te permite encontrar cualquier factura en segundos cuando te la pida un cliente o tu gestor.",
      },
      {
        title: "Envíala el mismo día",
        text: "Las facturas que se envían justo después del trabajo se cobran antes. Manda el PDF por email o por WhatsApp e indica el total y la fecha de vencimiento en el propio mensaje, para que tu cliente los vea sin abrir el archivo.",
      },
      {
        title: "Reclama con amabilidad, y pronto",
        text: "Si pasa la fecha de vencimiento, envía un recordatorio breve y cordial con la factura adjunta. La mayoría de los retrasos son simples olvidos. Guarda una copia de cada factura que envías para saber siempre qué tienes pendiente de cobro.",
      },
    ],

    vsEyebrow: "Tú eliges",
    vsTitle: "¿Este generador o la app Invoicor?",
    vsIntro:
      "Los dos crean las mismas facturas profesionales con las mismas plantillas. El generador es perfecto para una factura puntual; la app, para cuando facturas cada semana.",
    vsCaption: "Generador de facturas gratis comparado con la app Invoicor",
    vsGenerator: "Generador",
    vsApp: "App",
    compare: [
      ["Precio", "Gratis", "{n} facturas gratis, después un plan"],
      ["Marca de agua", "Pequeña línea «Created with invoicor.com»", "Ninguna"],
      ["Plantillas", "21 gratis", "Las 31 (21 gratis, el resto según plan)"],
      ["Líneas por factura", "Hasta 10", "Hasta 50 (Pro)"],
      ["Clientes y conceptos guardados", "Solo en este navegador", "Sí, en tu cuenta"],
      ["Historial y estado de facturas", "No", "Borrador, enviada, pagada, vencida"],
      ["Dónde", "Cualquier navegador", "iPhone y iPad"],
    ],

    moreEyebrow: "Plantillas y guías",
    moreTitle: "Facturas para tu tipo de trabajo",
    moreBefore:
      "El generador tiene 21 plantillas gratuitas. Para saber qué poner en una factura de tu sector, consulta nuestras",
    moreLink: "plantillas y guías de facturas",
    moreAfter: ", o la guía de tu sector:",
    moreEnglishNote: "Por ahora, estas guías están en inglés.",
    useCases: [
      { href: "/industries/plumbers-hvac", label: "Fontaneros y climatización" },
      { href: "/industries/electricians", label: "Electricistas" },
      { href: "/industries/freelance-designers", label: "Diseñadores freelance" },
      { href: "/industries/photographers-videographers", label: "Fotógrafos" },
      { href: "/industries/consultants-coaches", label: "Consultores y coaches" },
      { href: "/industries/cleaning-services", label: "Servicios de limpieza" },
    ],

    faqEyebrow: "Preguntas frecuentes",
    faqTitle: "Crear factura gratis: preguntas frecuentes",
    faqs: [
      {
        question: "¿De verdad es gratis este generador de facturas?",
        answer:
          "Sí. Crear y descargar facturas aquí es gratis y no necesitas cuenta. Cada PDF lleva una pequeña línea «Created with invoicor.com» al pie. Si prefieres que no aparezca nada, la app Invoicor para iPhone no tiene marca de agua y sus primeras {n} facturas son gratis.",
      },
      {
        question: "¿Tengo que registrarme?",
        answer:
          "No. Rellena el formulario y descarga el PDF. Tu borrador se guarda en tu propio navegador, así que puedes cerrar la pestaña y seguir más tarde en el mismo dispositivo.",
      },
      {
        question: "¿Guardáis mi factura?",
        answer:
          "No. La vista previa y el PDF se crean directamente en tu navegador, así que lo que escribes no sale de tu dispositivo. Tu borrador se guarda solo en este navegador; «Borrar todo» lo elimina.",
      },
      {
        question: "¿Qué monedas e idiomas puedo usar?",
        answer:
          "38 monedas y 11 idiomas de factura. Los textos de la factura (Factura, Cantidad, Total, etc.) se traducen al idioma que elijas.",
      },
      {
        question: "¿Puedo añadir mi logo?",
        answer:
          "Sí. Sube un PNG o JPG de hasta 500 KB y aparecerá en la parte superior de la factura.",
      },
      {
        question: "¿Cuántas líneas puedo añadir?",
        answer:
          "Hasta 10 por factura, igual que el plan gratuito de la app Invoicor. Los planes de pago de la app permiten más.",
      },
      {
        question: "¿Puedo añadir IVA y un descuento? ¿Y la retención de IRPF?",
        answer:
          "Sí al IVA y al descuento: eliges un tipo de impuesto para toda la factura, sumado o ya incluido en tus precios, y un descuento opcional en porcentaje o importe fijo. El subtotal, el IVA y el total se calculan solos. La retención de IRPF no: el generador aplica un solo impuesto por factura y no tiene una línea de retención.",
      },
      {
        question: "¿Mi cliente puede pagar online?",
        answer:
          "Añade tu propio enlace de pago (por ejemplo, de PayPal, Stripe o Wise) y tu IBAN; aparecen impresos en la factura. Tu cliente te paga directamente a ti, también por transferencia o Bizum si lo preferís. Invoicor no procesa pagos ni cobra comisiones.",
      },
      {
        question: "¿Puedo editar el PDF después de descargarlo?",
        answer:
          "Un PDF no está pensado para editarse. Cambia el formulario y descarga uno nuevo; tu borrador sigue ahí. Para conservar cada factura con su estado y reenviarla más tarde, usa la app Invoicor.",
      },
      {
        question: "¿Puedo copiar el texto del PDF?",
        answer:
          "No. El PDF se crea en tu navegador como una imagen nítida de la factura, así que su texto no se puede seleccionar ni buscar. Tu enlace de pago y los demás enlaces siguen funcionando. La app Invoicor crea PDFs con texto seleccionable.",
      },
    ],
  },
};
