import type { HelpDict } from "./en";

/** The help center, Spanish (Spain). Informal "tú", as on the Spanish home page. App labels stay in English. */
export const es: HelpDict = {
  meta: {
    title: "Ayuda y preguntas frecuentes | Invoicor",
    description:
      "Respuestas sobre Invoicor: crear facturas, plantillas, monedas, IVA, envío y seguimiento, suscripciones y tus datos.",
  },
  home: "Inicio",
  crumb: "Ayuda",
  toc: "En esta página",
  eyebrow: "Soporte",
  title: "Centro de ayuda",
  subtitle:
    "Todo lo que necesitas saber sobre Invoicor. ¿No encuentras tu respuesta? Cada mensaje lo leen personas de verdad.",
  contactTitle: "¿Te queda alguna duda?",
  contactText:
    "Escríbenos desde la app o mándanos un correo. Cada mensaje lo leen personas de verdad; la respuesta puede tardar unos días.",
  sections: [
    {
      id: "getting-started",
      title: "Primeros pasos",
      items: [
        {
          q: "¿Cómo creo mi primera factura?",
          a: "Abre Invoicor y toca el botón + en la pestaña «Invoices» (Facturas). Elige un cliente (o crea uno nuevo), añade los conceptos y toca «Preview Invoice» (Vista previa). La factura se genera en PDF y puedes enviarla por correo, WhatsApp, AirDrop o cualquier otra app.",
        },
        {
          q: "¿Tengo que crear antes un perfil de empresa?",
          a: "Sí. Antes de tu primera factura, Invoicor te pedirá los datos de tu negocio (nombre de la empresa, dirección, logo, datos bancarios). Te llevará un minuto y esos datos se reutilizan en cada factura que hagas.",
        },
        {
          q: "¿Invoicor es gratis?",
          a: "Sí. Puedes crear hasta 3 facturas gratis, sin límite de tiempo y sin suscripción. Las facturas gratuitas incluyen las plantillas gratis, la exportación en PDF, la gestión de clientes y el seguimiento de estados. En la app no hay marca de agua, en ningún plan.",
        },
        {
          q: "¿En qué dispositivos funciona?",
          a: "Invoicor funciona en iPhone y iPad con iOS o iPadOS 17.6 o posterior. Todavía no hay versión web; a tus datos se accede desde la app. Por ahora, las pantallas de la app están en inglés, pero tus facturas pueden salir en español y en otros 10 idiomas.",
        },
      ],
    },
    {
      id: "creating-invoices",
      title: "Crear facturas",
      items: [
        {
          q: "¿Puedo poner el logo de mi empresa en las facturas?",
          a: "Sí. Ve a tu perfil de empresa y toca «Upload Logo» (Subir logo). Invoicor admite los formatos PNG, JPG, SVG y WebP. Tu logo aparece en todas las facturas que envíes y se conserva la transparencia de los PNG.",
        },
        {
          q: "¿Cómo funcionan las plantillas?",
          a: "Invoicor incluye 31 plantillas de factura de diseño profesional: 21 son gratis, 8 vienen con Starter y 2 con Pro. Los planes superiores incluyen todas las plantillas de los inferiores. Puedes fijar una plantilla predeterminada en tu perfil de empresa o elegir otra en cada factura.",
        },
        {
          q: "¿Puedo facturar en otras monedas?",
          a: "Sí. Invoicor admite 38 monedas, entre ellas EUR, USD, GBP, JPY, CHF, CAD, AUD, INR y BRL. Fija una moneda predeterminada en tu perfil de empresa o cámbiala en cada factura.",
        },
        {
          q: "¿Puedo enviar facturas en el idioma de mi cliente?",
          a: "Sí. Invoicor admite 11 idiomas de factura. Todas las etiquetas de la factura (Concepto, Cantidad, Total, etc.) se traducen automáticamente. Fija un idioma predeterminado en tu perfil de empresa o elígelo en cada factura.",
        },
        {
          q: "¿Cómo se calcula el impuesto?",
          a: "Indica tu tipo impositivo en tu perfil de empresa (por ejemplo, el 21 % de IVA en España). Invoicor calcula el impuesto automáticamente en cada factura. Puedes elegir entre precios con impuesto incluido o sin incluir, y también cambiar el tipo en una factura concreta.",
        },
        {
          q: "¿Puedo aplicar descuentos a una factura?",
          a: "Sí. Puedes aplicar un descuento en porcentaje o un importe fijo a cualquier factura. El descuento aparece como una línea aparte en los totales.",
        },
        {
          q: "¿Cuántos conceptos caben como máximo en una factura?",
          a: "Depende de tu plan: hasta 10 líneas por factura en Free, 25 en Starter y 50 en Pro.",
        },
      ],
    },
    {
      id: "sending-tracking",
      title: "Envío y seguimiento",
      items: [
        {
          q: "¿Cómo envío una factura?",
          a: "En la pantalla de detalle de la factura, toca «Share» (Compartir). La factura se genera en PDF y puedes enviarla por correo, WhatsApp, AirDrop, Mensajes o cualquier otra app para compartir de tu iPhone.",
        },
        {
          q: "¿Qué significan los estados de una factura?",
          a: "Draft (Borrador): guardada pero aún sin enviar, todavía puedes editarla. Sent (Enviada): compartida con tu cliente, ya no se puede editar. Paid (Pagada): el cliente ha pagado y tú la has marcado. Overdue (Vencida): ha pasado la fecha de vencimiento y sigue sin pagar. Cancelled (Cancelada): anulada, ya no está activa.",
          list: [
            ["Draft (Borrador)", "guardada pero aún sin enviar, todavía puedes editarla."],
            ["Sent (Enviada)", "compartida con tu cliente, ya no se puede editar."],
            ["Paid (Pagada)", "el cliente ha pagado y tú la has marcado."],
            ["Overdue (Vencida)", "ha pasado la fecha de vencimiento y sigue sin pagar."],
            ["Cancelled (Cancelada)", "anulada, ya no está activa."],
          ],
        },
        {
          q: "¿Puedo editar una factura después de enviarla?",
          a: "No. Cuando una factura está marcada como «Sent», se bloquea para conservar el registro legal. Si necesitas cambiar algo, duplica la factura, edita la copia y envía la versión corregida.",
        },
        {
          q: "¿Puedo duplicar una factura?",
          a: "Sí. En la pantalla de detalle de la factura, toca el botón «Copy» (Copiar). Se crea un borrador nuevo con el mismo cliente, los mismos conceptos y los mismos ajustes. Muy útil para trabajos que se repiten.",
        },
      ],
    },
    {
      id: "account-billing",
      title: "Cuenta y facturación",
      items: [
        {
          q: "¿Cómo funcionan las suscripciones?",
          a: "Invoicor ofrece los planes Starter y Pro, con pago mensual o anual a través del App Store de Apple. Apple se encarga de todos los cobros: nunca vemos ni guardamos tus datos de pago. Puedes gestionar o cancelar tu suscripción en tu iPhone, en Ajustes → [tu nombre] → Suscripciones.",
        },
        {
          q: "¿Necesito una tarjeta para la prueba gratuita?",
          a: "Para el plan gratuito, no: tus 3 primeras facturas no necesitan suscripción ni pago. Las pruebas gratuitas de Starter y Pro van a través de Apple: las inicias con tu Apple ID, que necesita un método de pago. Si cancelas antes de que acabe la prueba, no pagas nada. Invoicor nunca ve tu tarjeta.",
        },
        {
          q: "¿Puedo cancelar mi suscripción?",
          a: "Sí, cuando quieras. En tu iPhone, ve a Ajustes → [tu nombre] → Suscripciones → Invoicor → Cancelar suscripción. Tu plan sigue activo hasta el final del periodo de facturación en curso y no se te volverá a cobrar.",
        },
        {
          q: "¿Qué pasa si vuelvo al plan Free?",
          a: "Tus facturas, clientes y datos se quedan como están, y puedes seguir viendo, compartiendo y siguiendo todas las facturas que hayas hecho. El plan gratuito incluye 3 facturas en total, así que si ya has creado 3 o más, necesitarás un plan otra vez para crear facturas nuevas.",
        },
        {
          q: "¿Cómo elimino mi cuenta?",
          a: "Ve a Settings (Ajustes) dentro de la app y toca «Delete Account» (Eliminar cuenta). Así se borran para siempre tu cuenta y todos sus datos de nuestros servidores. No se puede deshacer.",
        },
      ],
    },
    {
      id: "multiple-businesses",
      title: "Varios negocios",
      items: [
        {
          q: "¿Puedo gestionar varios negocios?",
          a: "Sí. Con el plan Pro puedes crear hasta 3 perfiles de empresa distintos, cada uno con su propio nombre, logo, dirección y datos bancarios. Cambia de uno a otro al crear una factura.",
        },
        {
          q: "¿Cómo fijo un perfil de empresa predeterminado?",
          a: "En la pestaña «Library» (Biblioteca), ve a la sección «Business» (Empresa). Mantén pulsado un perfil y elige «Set as Default» (Predeterminado). El perfil predeterminado aparece ya seleccionado cuando creas una factura nueva.",
        },
      ],
    },
    {
      id: "data-privacy",
      title: "Datos y privacidad",
      items: [
        {
          q: "¿Dónde se guardan mis datos?",
          a: "Los datos de tu cuenta y de tus facturas se guardan en servidores en Alemania, dentro de la Unión Europea, bajo el RGPD. La analítica web de invoicor.com (Google Analytics y PostHog, servicios de EE. UU.) solo se activa si aceptas las cookies.",
        },
        {
          q: "¿Cómo protegéis mis datos?",
          a: "Con medidas de protección habituales: todas las conexiones entre la app y nuestros servidores van cifradas (HTTPS), las contraseñas se guardan cifradas con hash, el inicio de sesión usa tokens seguros (o Iniciar sesión con Apple o con Google) y el acceso a nuestros servidores en Alemania está restringido. Ningún servicio en línea puede ser completamente seguro, pero trabajamos para que nadie acceda a tus datos sin permiso.",
        },
        {
          q: "¿Vendéis mis datos?",
          a: "No. Nunca vendemos ni alquilamos tus datos ni los de tus clientes. Solo compartimos lo necesario con los servicios que hacen funcionar Invoicor (nuestro proveedor de alojamiento en Alemania, Apple o Google si inicias sesión con ellos, y nuestro servicio de suscripciones), todos ellos indicados en nuestra Política de privacidad.",
          link: { text: "Política de privacidad", page: "privacy" },
        },
        {
          q: "¿Puedo exportar mis datos?",
          a: "Puedes exportar cualquier factura en PDF cuando quieras. Para una exportación completa de tus datos, escríbenos a {email} y te los enviaremos en un formato legible por máquina, como exige el RGPD.",
        },
      ],
    },
    {
      id: "safety",
      title: "Seguridad y estafas",
      items: [
        {
          q: "He recibido una factura hecha con Invoicor. ¿Es auténtica?",
          a: "Invoicor es la herramienta que el emisor usó para hacer la factura; nosotros no la redactamos, no la enviamos en nombre de nadie ni verificamos su contenido. Trátala como cualquier otra factura: antes de pagar, comprueba que conoces al emisor, que encargaste el trabajo o los productos y que el importe es correcto.",
        },
        {
          q: "¿Cómo pago una factura de forma segura?",
          a: "Comprueba tres cosas: el emisor (un negocio que conoces), el importe (coincide con lo acordado) y los datos de pago (coinciden con los que ese negocio usó antes). Si algo te resulta raro, contacta con el emisor por un teléfono o una dirección que ya conozcas, no con los datos que vienen en la factura.",
        },
        {
          q: "Han cambiado los datos bancarios o el enlace de pago de una factura. ¿Qué hago?",
          a: "No pagues todavía. El cambio de datos de pago es la estafa con facturas más habitual. Llama al emisor a un número que ya tengas y confirma con él los nuevos datos antes de pagar.",
        },
        {
          q: "¿Invoicor gestiona o protege el pago?",
          a: "No. Invoicor no es un servicio ni una pasarela de pago: el pago va directamente del cliente al emisor, a través del enlace de pago o los datos bancarios del propio emisor. Invoicor no puede retener, revertir ni reembolsar un pago. Nuestras Condiciones del servicio lo explican en la sección 5.",
          link: { text: "Condiciones del servicio", page: "terms" },
        },
        {
          q: "¿Cómo denuncio una factura sospechosa hecha con Invoicor?",
          a: "Escribe a {email} con la factura y cómo la recibiste. Podemos suspender las cuentas que envían facturas fraudulentas. Si ya le has pagado a un estafador, contacta también cuanto antes con tu banco y con la policía.",
        },
      ],
    },
  ],
};
