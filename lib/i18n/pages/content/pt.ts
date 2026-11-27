import type { ContentDict } from "./en";

/**
 * Template and industry pages and their hubs, European Portuguese (Portugal). Polite "você" forms
 * kept implicit, as on the help center and the home page. The app's screens are in English; the
 * invoices can be in Portuguese.
 */
export const pt: ContentDict = {
  home: "Início",
  onThisPage: "Nesta página",
  updated: "Atualizado",
  disclaimer:
    "Informação geral, não é aconselhamento fiscal ou jurídico. Confirme os detalhes com um contabilista ou advogado no local onde trabalha.",
  hubCta: "Crie a sua próxima fatura",
  templateHub: {
    meta: {
      title: "Modelos de fatura grátis por setor | Invoicor",
      description:
        "Modelos de fatura grátis por setor, com guias: o que incluir, exemplos de artigos e erros a evitar. Crie-os e envie-os em segundos com a app Invoicor.",
    },
    crumb: "Modelos",
    eyebrow: "Modelos e guias grátis",
    title: "Modelos de fatura grátis",
    subtitle:
      "Modelos e guias para a sua profissão ou para o tipo de fatura de que precisa (adiantamento, à hora, freelancer …): o que incluir, uma fatura de exemplo com artigos reais e os erros que atrasam o pagamento.",
    groupTypes: "Tipos de fatura",
    groupTrades: "Modelos por profissão",
    cardType: "Tipo de fatura",
    cardTrade: "Modelo e guia",
    cta: "Ver modelo",
    explainerTitle: "Como usar estes modelos",
    explainer: [
      "Cada guia mostra o que deve ter uma boa fatura dessa profissão ou desse tipo: os dados que o cliente e o contabilista dele esperam, como indicar mão de obra e materiais, e como tratar adiantamentos e impostos. A fatura de exemplo usa artigos realistas, para que possa copiar a estrutura para os seus trabalhos.",
      "Pode refazer qualquer um numa folha de cálculo ou num processador de texto. Ou crie a mesma fatura na app Invoicor: os dados da sua empresa, os clientes e os artigos guardados são preenchidos automaticamente, os totais e os impostos são calculados e envia um PDF limpo a partir do telemóvel. As primeiras {n} faturas são grátis.",
    ],
  },
  template: {
    crumb: "Modelos",
    eyebrow: "Modelo e guia grátis",
    use: "Usar este modelo grátis",
    app: "Criar na app",
    toc: {
      include: "O que incluir",
      sample: "Exemplo de fatura",
      notes: "Notas",
      industryNotes: "Notas do setor",
      mistakes: "Erros a evitar",
      formats: "Envie em PDF",
      tip: "Dica",
      faq: "Perguntas frequentes",
    },
    eyebrows: {
      include: "Lista de verificação",
      sample: "Exemplo",
      notes: "A saber",
      mistakes: "A evitar",
      formats: "Formato",
      tip: "Dica",
    },
    subtotal: "Subtotal",
    depositPaid: "Adiantamento pago",
    tax: "IVA",
    balanceDue: "Valor em dívida",
    invoiceNotes: "Notas da fatura:",
    fillExample: "Preencha este exemplo online",
    fillHint: "Grátis, sem registo. Altere o que quiser e descarregue o PDF.",
    mistakesTitle: "Erros comuns a evitar",
    formatsTitle: "Envie em PDF",
    whyPdf: "Porquê PDF",
    pdfDefault:
      "Um PDF tem o mesmo aspeto em qualquer telemóvel ou computador, não se altera por engano e é o que clientes e contabilistas esperam.",
    browserTitle: "Grátis, no navegador",
    browserText:
      "Abra este modelo no gerador grátis: as linhas de exemplo já estão preenchidas. Altere-as, adicione o seu logótipo e descarregue o PDF. Sem registo.",
    openGenerator: "Abrir o gerador",
    iphoneTitle: "No seu iPhone",
    iphoneText:
      "A app Invoicor cria o mesmo PDF e envia-o por e-mail ou mensagem, com os seus clientes e artigos habituais guardados. {n} faturas grátis.",
    getApp: "Obter a app",
    whyNotWord:
      "Porque não Word ou Excel? Quem os abrir pode alterar os valores, e uma fórmula pode estragar um total sem dar por isso. O Invoicor só cria PDF.",
    appCardEyebrow: "Fatura todas as semanas?",
    appCardText:
      "Guarde os seus clientes e artigos habituais e envie cada fatura a partir do telemóvel.",
    moreTemplates: "Mais modelos de fatura",
    ctaGradient: "em segundos.",
    ctaText:
      "Clientes e artigos guardados, totais e impostos automáticos e um PDF limpo que envia do telemóvel antes de sair da obra.",
  },
  industryHub: {
    meta: {
      title: "Software de faturação por setor | Invoicor",
      description:
        "Canalizador, designer freelancer ou consultor: veja como a app Invoicor torna a sua faturação mais rápida.",
    },
    crumb: "Setores",
    eyebrow: "Setores",
    title: "Feito para a sua forma de trabalhar.",
    subtitle:
      "Cada profissão fatura de forma diferente. Veja os erros de faturação, os artigos e as regras fiscais do seu trabalho, e como o Invoicor trata deles.",
    card: "Setor",
    cta: "Ver como funciona",
    explainerTitle: "Uma app, à medida de como a sua profissão fatura",
    explainer: [
      "Um canalizador fatura a deslocação, a mão de obra e as peças. Um designer fatura um adiantamento e fases do projeto. Uma empresa de limpezas fatura o mesmo cliente todas as semanas. Cada página de setor mostra os erros que atrasam o pagamento nessa profissão, os artigos que vai usar mais, os termos que os clientes esperam ver e os pontos fiscais a confirmar.",
      "O Invoicor funciona da mesma forma para todos: guarde os clientes e artigos uma vez, escolha um modelo e envie um PDF limpo a partir do telemóvel. {n} faturas são grátis, e o Invoicor nunca fica com uma parte dos seus pagamentos.",
    ],
  },
  industry: {
    crumb: "Setores",
    start: "Comece grátis no iOS",
    online: "Crie uma grátis online",
    toc: {
      mistakes: "Erros de faturação",
      features: "Como o Invoicor ajuda",
      scenario: "Um caso real",
      tip: "Dica de especialista",
      lineItems: "Artigos habituais",
      glossary: "Glossário",
      tax: "Impostos e obrigações",
      faq: "Perguntas frequentes",
    },
    eyebrows: {
      mistakes: "O que corre mal",
      features: "Como o Invoicor ajuda",
      scenario: "Um dia de trabalho",
      tip: "Dica de especialista",
      lineItems: "Artigos",
      glossary: "Glossário",
      tax: "Impostos e obrigações",
    },
    scenarioTitle: "Um caso real de faturação",
    fromExperience: "Da experiência",
    lineItemsIntro:
      "Guarde-os uma vez como produtos no Invoicor e adicione-os a qualquer fatura com um toque.",
    whatToKnow: "O que saber",
    templatesEyebrow: "Modelos grátis",
    templatesTitle: "Precisa de uma só fatura agora?",
    templatesCard: "Com um exemplo preenchido e o que incluir",
    moreIndustries: "Mais setores",
    ctaGradient: "Experimente grátis.",
    ctaText:
      "Clientes e artigos guardados, totais e impostos automáticos e um PDF limpo que envia a partir do telemóvel.",
  },
};
