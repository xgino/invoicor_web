/**
 * The free tools' text, Spanish (Spain). Informal "tú", as on the Spanish home and generator pages.
 * Examples use the Spanish standard IVA rate (21 %), euros and Spanish number formatting.
 */
import type { ToolsDict } from "./en";

export const es: ToolsDict = {
  common: {
    navLabel: "Herramientas gratis",
    home: "Inicio",
    eyebrow: "Herramienta gratis · sin registro",
    howEyebrow: "Cómo funciona",
    howTitle: "El cálculo, explicado paso a paso",
    faqEyebrow: "Preguntas frecuentes",
    faqTitle: "Preguntas sobre esta herramienta",
    moreTools: "Más herramientas gratis",
    closing: {
      title: "¿Facturas cada semana?",
      gradient: "Hazlo con la app.",
      text: "Clientes y conceptos guardados, cada factura con su estado y un PDF impecable desde tu iPhone. {n} facturas gratis.",
    },
    currency: "Moneda",
  },

  hub: {
    meta: {
      title: "Herramientas gratis para facturar | Invoicor",
      description:
        "Herramientas gratis para autónomos y pymes: crear factura online, calculadora de IVA, calculadora de horas trabajadas y calcular tu precio por hora.",
    },
    crumb: "Herramientas gratis",
    eyebrow: "Gratis · sin registro · nada que instalar",
    title: "Herramientas gratis para cobrar tu trabajo",
    subtitle:
      "Haz una factura, calcula bien el IVA, suma tus horas trabajadas y fija un precio por hora que cubra tus gastos. Todo funciona en tu navegador.",
    closing: {
      title: "Todo esto, en tu iPhone.",
      gradient: "{n} facturas gratis.",
      text: "Clientes y conceptos guardados, IVA y totales calculados por ti, y cada factura con su estado.",
    },
  },

  tools: {
    generator: {
      name: "Crear factura gratis",
      short: "Rellena una factura online y descárgala en PDF. 21 plantillas, sin registro.",
    },
    vat: {
      name: "Calculadora de IVA",
      short: "Añade el IVA a un precio o quítaselo, con los tipos generales de 19 países.",
    },
    hours: {
      name: "Calculadora de horas",
      short:
        "Suma una semana de jornadas y convierte 1:45 en las 1,75 horas que necesita tu factura.",
    },
    rate: {
      name: "Calcular precio por hora",
      short: "Parte de lo que quieres ganar y llega al precio por hora y por día que necesitas.",
    },
  },

  vat: {
    meta: {
      title: "Calculadora IVA: calcular IVA online gratis | Invoicor",
      description:
        "Calculadora de IVA gratis: suma el IVA a un precio sin IVA o quítalo de un precio con IVA. 21 % y tipos de 19 países, resultado al instante.",
    },
    title: "Calculadora de IVA",
    subtitle:
      "Calcula el IVA al momento: súmalo a una base imponible o quítalo de un precio con IVA incluido, con el 21 % de España y los tipos generales de 19 países. Gratis, y nada sale de tu navegador.",
    defaultCountry: "ES",
    ui: {
      label: "Calculadora de IVA",
      modeAria: "¿Qué importe tienes?",
      add: "Añadir IVA (importe sin IVA)",
      remove: "Quitar IVA (importe con IVA)",
      amountNet: "Importe sin IVA",
      amountGross: "Importe con IVA",
      country: "País (tipo general)",
      custom: "Otro tipo",
      gst: "GST",
      rate: "Tipo de IVA",
      net: "Base imponible (sin IVA)",
      vatRow: "IVA {rate} %",
      gross: "Total (IVA incluido)",
      cta: "Ponerlo en una factura",
      invoiceItem: "Producto o servicio",
    },
    sections: [
      {
        title: "Añadir el IVA (de base imponible a total)",
        paragraphs: [
          "Cuota de IVA = base imponible × tipo ÷ 100, y total = base + IVA. Un trabajo de 1.250 € con un 21 % de IVA lleva 262,50 € de IVA y suma 1.512,50 €. Los importes se redondean al céntimo, hacia arriba a partir de medio céntimo, como en las facturas.",
        ],
      },
      {
        title: "Quitar el IVA (de total a base imponible)",
        paragraphs: [
          "Base = total ÷ (1 + tipo ÷ 100). Es el paso en el que más gente se equivoca: restar el porcentaje al total da una base demasiado baja. Con un 21 % de IVA, 1.210 € con IVA son 1.000 € de base, no 955,90 €.",
          "Úsalo cuando un proveedor te da un precio con IVA incluido o cuando fijas un precio final para particulares y quieres saber qué parte es tuya.",
        ],
      },
      {
        title: "Tipo general y tipos reducidos",
        paragraphs: [
          "La lista de países usa el tipo general de cada país. En España, además del 21 %, existe un tipo reducido del 10 % y un superreducido del 4 % para ciertos bienes y servicios, y algunas actividades están exentas. Si tienes dudas, consulta la web de la Agencia Tributaria o pregunta a tu gestor, y escribe tú el tipo.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Cómo se calcula el IVA de un precio?",
        answer:
          "Multiplica la base imponible por el tipo de IVA y súmale el resultado. Para 100 € al 21 %: 100 × 0,21 = 21 € de IVA, así que el total es 121 €. La calculadora lo hace por ti y redondea al céntimo.",
      },
      {
        question: "¿Cómo quito el IVA de un precio que ya lo incluye?",
        answer:
          "Divide el total entre 1 más el tipo, en lugar de restar el porcentaje. Para 121 € con un 21 % de IVA incluido: 121 ÷ 1,21 = 100 € de base imponible, y el IVA son 21 €. Restar un 21 % a 121 daría 95,59 €, que es incorrecto.",
      },
      {
        question: "¿Qué tipos de IVA incluye la calculadora?",
        answer:
          "Los tipos generales de 16 países europeos y el GST de Australia, Canadá y Nueva Zelanda, a noviembre de 2026. Muchos países tienen también tipos reducidos para algunos bienes y servicios (en España, el 10 % y el 4 %); si el tuyo es distinto, escríbelo tú.",
      },
      {
        question: "¿Mi factura debe mostrar los precios con o sin IVA?",
        answer:
          "Las empresas y profesionales suelen esperar precios sin IVA, con el IVA sumado al final; los particulares esperan el precio que pagan, con IVA incluido. En cualquier caso, la factura debe mostrar la base imponible, el tipo de IVA, la cuota y el total. En la app Invoicor y en el generador gratuito eliges en cada factura si los precios incluyen el impuesto.",
      },
      {
        question: "¿Se envía a algún servidor lo que escribo?",
        answer: "No. La calculadora funciona por completo en tu navegador.",
      },
    ],
  },

  hours: {
    meta: {
      title: "Calculadora de horas trabajadas gratis | Invoicor",
      description:
        "Calculadora de horas trabajadas gratis: suma entradas y salidas menos descansos, pasa horas y minutos a horas decimales y calcula cuánto facturar.",
    },
    title: "Calculadora de horas trabajadas",
    subtitle:
      "Suma una semana de horas de entrada y salida menos los descansos, obtén el total en horas y minutos y en horas decimales, y mira cuánto facturar según tu precio por hora.",
    ui: {
      label: "Calculadora de horas",
      intro:
        "Añade cada día que trabajaste: entrada, salida y el descanso no pagado. Tantos días como necesites, una semana o un mes entero.",
      date: "Fecha",
      start: "Entrada",
      end: "Salida",
      break: "Descanso (min)",
      hours: "Horas",
      remove: "Quitar",
      startAria: "Entrada del {day}",
      endAria: "Salida del {day}",
      breakAria: "Descanso del {day} en minutos",
      removeAria: "Quitar {day}",
      addDay: "Añadir un día",
      addWeek: "Añadir una semana",
      period: "{days} días · {from} – {to}",
      rate: "Tu precio por hora (opcional)",
      totalTime: "Horas trabajadas",
      decimal: "En horas decimales (para la factura)",
      toInvoice: "A facturar",
      totalHours: "Total de horas",
      calc: "{hours} horas × {rate}",
      convertTitle: "Conversión rápida: horas y minutos ⇄ decimal",
      convertLabel: "Hora (1:45) o decimal (1,75)",
      convertHint: "Escribe una hora como 1:45 o un número como 1,75",
      convertResult: "{time} = {hours} horas",
      cta: "Crear una factura con estas horas",
      invoiceItem: "Trabajo del {from} al {to}",
    },
    sections: [
      {
        title: "Horas trabajadas por día",
        paragraphs: [
          "Horas = hora de salida − hora de entrada − descanso. De 09:00 a 17:30 con 30 minutos de descanso son 8 horas. Si una jornada termina después de medianoche, se cuenta el tiempo pasada la medianoche.",
        ],
      },
      {
        title: "De horas y minutos a horas decimales",
        paragraphs: [
          "En una factura las horas se multiplican por un precio, así que necesitas horas decimales: minutos ÷ 60. 15 minutos = 0,25; 30 = 0,5; 45 = 0,75. Una semana de 38:45 son 38,75 horas.",
          "A 40 € la hora, 38,75 horas son 1.550 €. Si lo escribes como 38,45, facturarías 1.538 € y perderías 12 €.",
        ],
      },
      {
        title: "Cómo poner las horas en una factura",
        paragraphs: [
          "Usa una línea por tipo de trabajo, con las horas decimales como cantidad y tu precio por hora como precio, por ejemplo «Trabajo en obra, 38,75 horas × 40 €». Añade las fechas en la descripción de la línea o en las notas para que tu cliente pueda comprobarlas con sus propios registros.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Cómo paso minutos a horas decimales?",
        answer:
          "Divide los minutos entre 60. 45 minutos son 0,75 horas, así que 1 hora y 45 minutos son 1,75 horas. En la factura, usa el número decimal: 1,75 × tu precio por hora.",
      },
      {
        question: "¿Por qué no escribir 1,45 para 1 hora y 45 minutos?",
        answer:
          "Porque 1,45 horas son 1 hora y 27 minutos. Escribir la hora del reloj como si fuera un decimal es el error más común con las horas en las facturas, y te hace cobrar de menos en cada línea. El conversor rápido bajo la calculadora muestra las dos formas.",
      },
      {
        question: "¿Funciona con turnos de noche?",
        answer:
          "Sí. Si la hora de salida es anterior a la de entrada, la jornada se cuenta como si pasara de medianoche: de 22:00 a 02:00 son 4 horas.",
      },
      {
        question: "¿Hay que facturar los descansos?",
        answer:
          "Normalmente facturas el tiempo realmente trabajado, así que los descansos no pagados quedan fuera. Si tu acuerdo dice otra cosa, pon el descanso a 0.",
      },
      {
        question: "¿Se envía a algún servidor lo que escribo?",
        answer: "No. La calculadora funciona por completo en tu navegador y no se guarda nada.",
      },
    ],
  },

  rate: {
    meta: {
      title: "Calcular precio por hora autónomo (gratis) | Invoicor",
      description:
        "Calcula tu precio por hora y por día como autónomo a partir de lo que quieres ganar, impuestos, cuota, gastos, vacaciones y horas facturables. Gratis.",
    },
    title: "Calcular tu precio por hora",
    subtitle:
      "Calcula el precio por hora que necesitas como autónomo partiendo de lo que quieres ganar en limpio, con impuestos, cotizaciones, gastos, vacaciones y horas realmente facturables.",
    defaults: { takeHome: "30000", tax: "30", costs: "4000", weeks: "7", hours: "25" },
    ui: {
      label: "Calculadora de precio por hora",
      earnTitle: "Lo que quieres ganar",
      payTitle: "Lo que te cuesta",
      billTitle: "Lo que puedes facturar",
      periodAria: "Introducir importes",
      perMonth: "Al mes",
      perYear: "Al año",
      takeHome: "Lo que quieres ganar en limpio",
      takeHomeHint: "Después del IRPF, como un sueldo",
      tax: "Impuestos y cotizaciones",
      taxHint: "Parte del beneficio que apartas (IRPF, cuota de autónomos)",
      costs: "Gastos del negocio",
      costsHint: "Seguros, software, herramientas, gestoría",
      weeks: "Semanas al año que no facturas",
      weeksHint: "Vacaciones, bajas, semanas flojas",
      hours: "Horas facturables por semana",
      hoursHint: "Solo trabajo pagado, sin gestiones ni desplazamientos",
      total: "Tu precio por hora mínimo",
      day: "Precio por día (8 horas facturables)",
      stepsTitle: "Cómo lo calculamos",
      step1:
        "Para ganar {takeHome} limpios al año, necesitas {beforeTax} antes de impuestos (apartando un {tax} %).",
      step2:
        "Suma {costs} de gastos: tienes que facturar {revenue} al año, unos {perMonth} al mes.",
      step3: "Puedes facturar {weeks} semanas × {hours} horas = {billable} horas al año.",
      step4: "{revenue} ÷ {billable} horas = {hourly} la hora.",
      note: "Es un mínimo, sin IVA: cubre tus ingresos, impuestos y gastos, nada más. El porcentaje de impuestos es aproximado; tu gestor puede darte la cifra real.",
      invalid: "Añade al menos una hora facturable por semana y menos de 52 semanas sin facturar.",
      cta: "Hacer una factura con este precio",
      invoiceItem: "Trabajo por horas",
    },
    sections: [
      {
        title: "1. De lo que quieres ganar al beneficio antes de impuestos",
        paragraphs: [
          "Beneficio antes de impuestos = lo que quieres ganar ÷ (1 − porcentaje de impuestos). Para quedarte 30.000 € apartando un 30 %, necesitas unos 42.857 € de beneficio antes de impuestos.",
        ],
      },
      {
        title: "2. Suma los gastos del negocio",
        paragraphs: [
          "Seguros, software, equipos, vehículo, gestoría, teléfono: todo lo que pagas para mantener tu actividad. Facturación necesaria = beneficio antes de impuestos + gastos.",
        ],
      },
      {
        title: "3. Divide entre las horas que puedes facturar",
        paragraphs: [
          "Horas facturables al año = (52 − semanas sin facturar) × horas facturables por semana. Precio por hora = facturación ÷ horas facturables. El precio por día supone 8 horas facturables.",
          "Ejemplo: 42.857 € + 4.000 € = 46.857 € al año, en 45 semanas de 25 horas facturables (1.125 horas), son unos 41,65 € la hora, o 333 € al día.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Cómo calculo mi precio por hora como autónomo?",
        answer:
          "Parte de lo que quieres ganar en limpio al año, súmale los impuestos y cotizaciones que pagarás y tus gastos, y divídelo entre las horas que de verdad puedes facturar en un año. La calculadora hace exactamente eso y te muestra cada paso.",
      },
      {
        question: "¿Cuántas horas facturables debo contar?",
        answer:
          "Menos de las que trabajas. La administración, los presupuestos, buscar clientes, los desplazamientos y la formación no se facturan. Muchos autónomos facturan entre 20 y 30 horas en una semana de 40; empieza con una cifra que hayas alcanzado de verdad en los últimos meses.",
      },
      {
        question: "¿Por qué cuentan las semanas sin facturar?",
        answer:
          "Porque no ingresas nada mientras estás de vacaciones, de baja o entre proyectos, pero tus gastos siguen. Con 7 semanas sin facturar, tus ingresos del año tienen que salir de 45 semanas de trabajo.",
      },
      {
        question: "¿Es exacto el porcentaje de impuestos?",
        answer:
          "Es una parte aproximada que apartas, no un cálculo fiscal: lo que pagas de verdad depende de tus tramos de IRPF, tus deducciones y tu cuota de autónomos. Pide a tu gestor tu cifra y escríbela.",
      },
      {
        question: "¿Es este el precio que debo cobrar?",
        answer:
          "Es tu mínimo: el precio que cubre tus ingresos, impuestos y gastos. Lo que cobres depende también de tu experiencia, tu mercado y el valor de tu trabajo. Muchos autónomos añaden un margen por encima.",
      },
    ],
  },
};
