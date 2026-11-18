import type { ToolsDict } from "./en";

/**
 * Free tools, European Portuguese (Portugal). IVA at 23% (mainland standard rate), euro amounts
 * written the Portuguese way (34 286 €, 33,14 €). Same polite implicit "você" as home and generator.
 */
export const pt: ToolsDict = {
  common: {
    navLabel: "Ferramentas grátis",
    home: "Início",
    eyebrow: "Ferramenta grátis · sem registo",
    howEyebrow: "Como funciona",
    howTitle: "As contas, explicadas",
    faqEyebrow: "Perguntas frequentes",
    faqTitle: "Perguntas sobre esta ferramenta",
    moreTools: "Mais ferramentas grátis",
    closing: {
      title: "Fatura todas as semanas?",
      gradient: "Faça-o na app.",
      text: "Clientes e produtos guardados, cada fatura com o seu estado e um PDF cuidado a partir do seu iPhone. {n} faturas grátis.",
    },
    currency: "Moeda",
  },

  hub: {
    meta: {
      title: "Ferramentas grátis: faturas, IVA e horas | Invoicor",
      description:
        "Ferramentas grátis para trabalhadores independentes e pequenas empresas: criar fatura online, calcular IVA, calculadora de horas e preço por hora.",
    },
    crumb: "Ferramentas grátis",
    eyebrow: "Grátis · sem registo · nada para instalar",
    title: "Ferramentas grátis para receber o que é seu",
    subtitle:
      "Crie um documento de faturação, acerte no IVA, some as suas horas e defina um preço por hora que pague as contas. Tudo funciona no seu navegador.",
    closing: {
      title: "Tudo isto, no seu iPhone.",
      gradient: "{n} faturas grátis.",
      text: "Clientes e produtos guardados, IVA e totais calculados por si e cada fatura com o seu estado.",
    },
  },

  tools: {
    generator: {
      name: "Criar fatura online",
      short: "Preencha um documento online e descarregue o PDF. 21 modelos, sem registo.",
    },
    vat: {
      name: "Calcular IVA",
      short: "Acrescente ou retire o IVA de um preço, com as taxas normais de 19 países.",
    },
    hours: {
      name: "Calculadora de horas",
      short:
        "Some uma semana de horários e transforme 1:45 nas 1,75 horas de que a fatura precisa.",
    },
    rate: {
      name: "Calcular preço por hora",
      short: "Parta do rendimento que quer para chegar ao preço por hora e por dia de que precisa.",
    },
  },

  vat: {
    meta: {
      title: "Calcular IVA online: simulador de IVA grátis | Invoicor",
      description:
        "Simulador de IVA grátis: acrescente o IVA a um valor sem imposto ou retire-o de um preço com IVA. Taxa de 23% e taxas normais de 19 países.",
    },
    title: "Calcular IVA",
    subtitle:
      "Simulador de IVA: acrescente o IVA a um valor sem imposto ou retire-o de um preço com IVA incluído, com as taxas normais de 19 países. Instantâneo, grátis e nada sai do seu navegador.",
    defaultCountry: "PT",
    ui: {
      label: "Calcular IVA",
      modeAria: "O valor é com ou sem IVA?",
      add: "Acrescentar IVA (valor sem IVA)",
      remove: "Retirar IVA (valor com IVA)",
      amountNet: "Valor sem IVA",
      amountGross: "Valor com IVA",
      country: "País (taxa normal)",
      custom: "Outra taxa",
      gst: "GST",
      rate: "Taxa de IVA",
      net: "Valor sem IVA",
      vatRow: "IVA {rate}%",
      gross: "Total com IVA",
      cta: "Pôr isto num documento",
      invoiceItem: "Produto ou serviço",
    },
    sections: [
      {
        title: "Acrescentar IVA (de sem IVA para com IVA)",
        paragraphs: [
          "IVA = valor sem IVA × taxa ÷ 100, e total = valor sem IVA + IVA. Um trabalho de 478,50 € com IVA a 23% tem 110,06 € de IVA e um total de 588,56 €. Os valores são arredondados ao cêntimo, para cima a partir de meio cêntimo, como nas faturas.",
        ],
      },
      {
        title: "Retirar IVA (de com IVA para sem IVA)",
        paragraphs: [
          "valor sem IVA = valor com IVA ÷ (1 + taxa ÷ 100). É o passo em que mais se erra: tirar a percentagem ao valor com IVA dá um valor baixo demais. Com IVA a 23%, 123 € com IVA são 100 € sem IVA, não 94,71 €.",
          "Use-o quando um fornecedor lhe dá um preço com IVA incluído, ou quando define um preço ao consumidor e quer saber que parte é sua.",
        ],
      },
      {
        title: "Taxa normal e taxas reduzidas",
        paragraphs: [
          "A lista de países usa a taxa normal de cada país. Bens alimentares, livros, transportes e alguns serviços têm muitas vezes uma taxa mais baixa, e alguns serviços estão isentos. Na dúvida, consulte o Portal das Finanças ou o seu contabilista e escreva a taxa você mesmo.",
        ],
      },
    ],
    faqs: [
      {
        question: "Como acrescento o IVA a um preço?",
        answer:
          "Multiplique o valor sem IVA pela taxa e some o resultado. Para 100 € com IVA a 23%: 100 × 0,23 = 23 € de IVA, por isso o total é 123 €. A calculadora faz isto por si e arredonda ao cêntimo.",
      },
      {
        question: "Como retiro o IVA de um preço que já o inclui?",
        answer:
          "Divida o valor com IVA por 1 mais a taxa, em vez de subtrair a percentagem. Para 123 € com IVA a 23% incluído: 123 ÷ 1,23 = 100 € sem IVA, e o IVA é 23 €. Tirar 23% a 123 € daria 94,71 €, o que está errado.",
      },
      {
        question: "Que taxas de IVA inclui a calculadora?",
        answer:
          "As taxas normais de 16 países europeus e o GST da Austrália, do Canadá e da Nova Zelândia, em novembro de 2026. Para Portugal usa os 23% do continente; no continente as taxas reduzida e intermédia são 6% e 13%, e nos Açores e na Madeira as taxas são mais baixas. Se a sua taxa for outra, escreva-a você mesmo.",
      },
      {
        question: "A fatura deve mostrar os preços com ou sem IVA?",
        answer:
          "Os clientes empresariais esperam normalmente preços sem IVA, com o IVA somado no fim; os consumidores esperam o preço que vão pagar, com IVA. Em qualquer caso, a fatura deve indicar o valor sem IVA, a taxa, o montante do IVA e o total. Na app Invoicor e no gerador grátis escolhe, em cada documento, se os preços já incluem IVA.",
      },
      {
        question: "O que escrevo é enviado para algum servidor?",
        answer: "Não. A calculadora funciona inteiramente no seu navegador.",
      },
    ],
  },

  hours: {
    meta: {
      title: "Calculadora de horas de trabalho grátis | Invoicor",
      description:
        "Calculadora de horas grátis: some horas de entrada e saída menos pausas, converta horas e minutos em horas decimais e veja quanto faturar ao seu preço.",
    },
    title: "Calculadora de horas",
    subtitle:
      "Some uma semana de horas de entrada e saída menos as pausas, veja o total em horas e minutos e em horas decimais, e quanto faturar ao seu preço por hora.",
    ui: {
      label: "Calculadora de horas",
      intro:
        "Adicione cada dia em que trabalhou: entrada, saída e a pausa não paga. Os dias que precisar, uma semana ou um mês inteiro.",
      date: "Data",
      start: "Entrada",
      end: "Saída",
      break: "Pausa (min)",
      hours: "Horas",
      remove: "Remover",
      startAria: "{day}, entrada",
      endAria: "{day}, saída",
      breakAria: "{day}, pausa em minutos",
      removeAria: "Remover {day}",
      addDay: "Adicionar um dia",
      addWeek: "Adicionar uma semana",
      period: "{days} dias · {from} – {to}",
      rate: "O seu preço por hora (opcional)",
      totalTime: "Horas trabalhadas",
      decimal: "Em horas decimais (para a fatura)",
      toInvoice: "A faturar",
      totalHours: "Total de horas",
      calc: "{hours} horas × {rate}",
      convertTitle: "Conversão rápida: horas e minutos ⇄ decimal",
      convertLabel: "Hora (1:45) ou decimal (1,75)",
      convertHint: "Escreva uma hora como 1:45 ou um número como 1,75",
      convertResult: "{time} = {hours} horas",
      cta: "Criar um documento com estas horas",
      invoiceItem: "Trabalho de {from} a {to}",
    },
    sections: [
      {
        title: "Horas trabalhadas por dia",
        paragraphs: [
          "Horas = hora de saída − hora de entrada − pausa. Das 09:00 às 17:30 com 30 minutos de pausa são 8 horas. Um turno que acaba depois da meia-noite conta o tempo para lá da meia-noite.",
        ],
      },
      {
        title: "De horas e minutos para decimal",
        paragraphs: [
          "As faturas multiplicam horas por um preço, por isso precisam de horas decimais: minutos ÷ 60. 15 minutos = 0,25, 30 = 0,5, 45 = 0,75. Uma semana de 38:45 são 38,75 horas.",
          "A 40 € por hora, 38,75 horas são 1550 €. Escrever 38,45 faturaria 1538 € e perderia 12 €.",
        ],
      },
      {
        title: "Pôr as horas na fatura",
        paragraphs: [
          "Use uma linha por tipo de trabalho, com as horas decimais como quantidade e o seu preço por hora como preço, por exemplo “Trabalho em obra, 38,75 horas × 40 €”. Indique as datas na descrição da linha ou nas notas, para o cliente as poder confirmar com os seus próprios registos.",
        ],
      },
    ],
    faqs: [
      {
        question: "Como converto minutos em horas decimais?",
        answer:
          "Divida os minutos por 60. 45 minutos são 0,75 horas, por isso 1 hora e 45 minutos são 1,75 horas. Na fatura, use o número decimal: 1,75 × o seu preço por hora.",
      },
      {
        question: "Porque não escrever 1,45 para 1 hora e 45 minutos?",
        answer:
          "Porque 1,45 horas são 1 hora e 27 minutos. Escrever a hora do relógio como decimal é o erro mais comum com horas nas faturas, e fatura a menos em cada linha. O conversor rápido por baixo da calculadora mostra as duas formas.",
      },
      {
        question: "Funciona para turnos da noite?",
        answer:
          "Sim. Se a hora de saída for anterior à de entrada, conta-se o turno como passando a meia-noite: das 22:00 às 02:00 são 4 horas.",
      },
      {
        question: "As pausas entram na fatura?",
        answer:
          "Normalmente fatura o tempo que trabalhou de facto, por isso as pausas não pagas ficam de fora. Se o seu acordo disser outra coisa, ponha a pausa a 0.",
      },
      {
        question: "O que escrevo é enviado para algum servidor?",
        answer: "Não. A calculadora funciona inteiramente no seu navegador e nada é guardado.",
      },
    ],
  },

  rate: {
    meta: {
      title: "Calcular preço por hora: trabalhador independente | Invoicor",
      description:
        "Calcule o preço mínimo por hora e por dia como trabalhador independente, a partir do rendimento que quer, impostos, custos, férias e horas faturáveis.",
    },
    title: "Calcular preço por hora",
    subtitle:
      "Parta do rendimento que quer ficar a ganhar para chegar ao preço por hora e por dia de que precisa como trabalhador independente, com IRS, Segurança Social, custos, férias e horas realmente faturáveis.",
    defaults: { takeHome: "24000", tax: "30", costs: "3000", weeks: "7", hours: "25" },
    ui: {
      label: "Calcular preço por hora",
      earnTitle: "O que quer ganhar",
      payTitle: "O que lhe custa",
      billTitle: "Quanto pode faturar",
      periodAria: "Introduzir valores",
      perMonth: "Por mês",
      perYear: "Por ano",
      takeHome: "Rendimento que quer ficar a ganhar",
      takeHomeHint: "Depois de IRS, como um salário",
      tax: "Impostos e Segurança Social",
      taxHint: "Parte do lucro que põe de lado",
      costs: "Custos da atividade",
      costsHint: "Seguros, software, equipamento, contabilista",
      weeks: "Semanas por ano em que não fatura",
      weeksHint: "Férias, doença, semanas paradas",
      hours: "Horas faturáveis por semana",
      hoursHint: "Só trabalho pago, sem papelada nem deslocações",
      total: "O seu preço mínimo por hora",
      day: "Preço por dia (8 horas faturáveis)",
      stepsTitle: "Como chegámos aqui",
      step1:
        "Para ficar com {takeHome} por ano, precisa de {beforeTax} antes de impostos ({tax}% posto de lado).",
      step2:
        "Some {costs} de custos: tem de faturar {revenue} por ano, cerca de {perMonth} por mês.",
      step3: "Pode faturar {weeks} semanas × {hours} horas = {billable} horas por ano.",
      step4: "{revenue} ÷ {billable} horas = {hourly} por hora.",
      note: "É um mínimo, sem IVA: cobre o seu rendimento, os impostos e os custos, nada mais. Os impostos são uma percentagem aproximada; o seu contabilista pode dar-lhe o valor real.",
      invalid: "Indique pelo menos uma hora faturável por semana e menos de 52 semanas paradas.",
      cta: "Criar um documento com este preço",
      invoiceItem: "Trabalho à hora",
    },
    sections: [
      {
        title: "1. Do rendimento líquido ao lucro antes de impostos",
        paragraphs: [
          "lucro antes de impostos = rendimento líquido ÷ (1 − percentagem de impostos). Para ficar com 24 000 € pondo de lado 30%, precisa de cerca de 34 286 € de lucro antes de impostos.",
        ],
      },
      {
        title: "2. Some os custos da atividade",
        paragraphs: [
          "Seguros, software, equipamento, carro, contabilista, telemóvel: tudo o que paga para manter a atividade. Faturação necessária = lucro antes de impostos + custos.",
        ],
      },
      {
        title: "3. Divida pelas horas que pode faturar",
        paragraphs: [
          "horas faturáveis por ano = (52 − semanas paradas) × horas faturáveis por semana. Preço por hora = faturação ÷ horas faturáveis. O preço por dia conta 8 horas faturáveis.",
          "Exemplo: 34 286 € + 3000 € = 37 286 € por ano, em 45 semanas de 25 horas faturáveis (1125 horas), dá cerca de 33,14 € por hora, ou 265 € por dia.",
        ],
      },
    ],
    faqs: [
      {
        question: "Como calculo o meu preço por hora como trabalhador independente?",
        answer:
          "Comece pelo que quer ficar a ganhar por ano, some os impostos e a Segurança Social que vai pagar e os custos da atividade, e divida pelas horas que consegue realmente faturar num ano. A calculadora faz exatamente isso e mostra cada passo.",
      },
      {
        question: "Quantas horas faturáveis devo contar?",
        answer:
          "Menos do que as que trabalha. Papelada, orçamentos, angariar clientes, deslocações e formação não se faturam. Muitos trabalhadores independentes faturam 20 a 30 horas numa semana de 40; comece por um número que tenha mesmo conseguido nos últimos meses.",
      },
      {
        question: "Porque entram as semanas paradas nas contas?",
        answer:
          "Porque não ganha enquanto está de férias, doente ou entre projetos, mas os custos continuam. Com 7 semanas paradas, o rendimento do ano tem de vir de 45 semanas de trabalho.",
      },
      {
        question: "A percentagem de impostos é exata?",
        answer:
          "É uma parte aproximada que põe de lado, não um cálculo de impostos: o IRS e a Segurança Social reais dependem do seu regime, das deduções e dos escalões. Peça ao seu contabilista o seu valor e escreva-o.",
      },
      {
        question: "É este o preço que devo cobrar?",
        answer:
          "É o seu mínimo: o preço que cobre o seu rendimento, os impostos e os custos. O que cobra depende também da sua experiência, do seu mercado e do valor do trabalho. Muitos trabalhadores independentes acrescentam uma margem.",
      },
    ],
  },
};
