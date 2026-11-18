import type { GeneratorDict } from "./en";

/**
 * Free invoice generator, European Portuguese (Portugal). Honest about certified software: in
 * Portugal a fiscal fatura comes from an AT-certified program or the Portal das Finanças, so this
 * page positions the PDF as an orçamento, fatura pró-forma or a document for businesses not
 * established in Portugal (same substance as the home page FAQ).
 */
export const pt: GeneratorDict = {
  ui: {
    viewAria: "Vista do gerador",
    tabForm: "Formulário",
    tabPreview: "Pré-visualização",
    previewAria: "Pré-visualização da fatura",
    offerTitle: "Carregar o exemplo de {niche}?",
    offerText:
      "Substitui as linhas e as notas atuais; os dados da sua empresa e do cliente mantêm-se.",
    offerLoad: "Carregar exemplo",
    offerKeep: "Manter os meus",
    savedBlocked: "Não guardado: este navegador bloqueia o armazenamento",
    savedOk: "Guardado só neste navegador. Mais ninguém o vê.",
    newInvoice: "Nova fatura",
    newInvoiceTitle: "Mantém os dados da sua empresa, limpa o cliente e as linhas",
    clearAll: "Apagar tudo",
    clearConfirm:
      "Apagar tudo? Isto remove deste navegador os dados da sua empresa, o cliente e as linhas.",
    templateLabel: "Modelo",
    browseTemplates: "Ver modelos",
    subtotal: "Subtotal",
    discount: "Desconto",
    tax: "IVA",
    taxIncluded: " (incluído)",
    total: "Total",

    setupTitle: "Configuração",
    setupHint: "Design, idioma e moeda",
    change: "Alterar",
    invoiceLanguage: "Idioma da fatura",
    currency: "Moeda",
    dateFormat: "Formato da data",

    detailsTitle: "Dados da fatura",
    detailsHint: "Número, datas e quando quer receber",
    invoiceNumber: "Número",
    invoiceNumberHint: "Use uma numeração sequencial, por exemplo 2026/001, 2026/002",
    issueDate: "Data de emissão",
    dueDate: "Data de vencimento",
    paymentTerms: "Condições de pagamento",
    paymentTermsPlaceholder: "ex. Pagamento a 30 dias",

    businessTitle: "A sua empresa",
    businessHint: "Quem emite a fatura",
    businessName: "Nome ou firma",
    email: "E-mail",
    phone: "Telefone",
    address: "Morada",
    postalCode: "Código postal",
    city: "Localidade",
    country: "País",
    taxId: "NIF / n.º de IVA",
    taxIdPlaceholder: "ex. PT123456789",
    registration: "N.º de registo",
    registrationPlaceholder: "ex. NIF, NIPC",
    bankDetails: "Dados bancários",
    bankName: "Banco",
    iban: "IBAN / n.º de conta",
    swift: "SWIFT / BIC",

    clientTitle: "Faturar a",
    clientHint: "A quem está a faturar",
    clientName: "Nome do cliente ou empresa",
    contactPerson: "Pessoa de contacto",
    clientTaxHint: "Necessário para clientes empresariais na UE",

    itemsTitle: "Linhas",
    itemsHint: "O que está a cobrar, até {max} linhas",
    addLine: "Adicionar linha",
    itemsLimit: "É o limite grátis. A app Invoicor permite adicionar mais.",
    line: "Linha {line}",
    moveUp: "Subir a linha {line}",
    moveDown: "Descer a linha {line}",
    removeLine: "Remover a linha {line}",
    item: "Descrição",
    itemPlaceholder: "ex. Substituição de esquentador",
    qty: "Qtd.",
    price: "Preço",
    details: "Detalhes (opcional)",
    detailsPlaceholder: "Aparece numa linha própria, por baixo da descrição",
    amount: "Valor",

    taxTitle: "IVA e desconto",
    taxHint: "Uma taxa de IVA para toda a fatura",
    taxRate: "Taxa de IVA",
    taxInclusive: "Os preços já incluem IVA",
    discountNone: "Sem desconto",
    discountPercent: "Percentagem (%)",
    discountFixed: "Valor fixo",
    discountPct: "Desconto %",
    discountAmount: "Valor do desconto",

    notesTitle: "Notas",
    notesHint: "Um agradecimento, condições de garantia ou outra informação",

    payTitle: "Link de pagamento online",
    payHint: "Opcional. O cliente paga-lhe diretamente, nunca através de nós",
    payLabel: "O seu link de pagamento",
    payFieldHint: "O seu link do PayPal, da Stripe ou outro. Aparece como um botão “Pagar online”.",
    payError: "O link tem de começar por https://",

    logo: "Logótipo (opcional)",
    logoAlt: "O seu logótipo",
    logoRemove: "Remover",
    logoUpload: "Carregar logótipo",
    logoHint: "PNG ou JPG, até 500 KB. Substitui o nome no topo.",
    logoErrType: "Use uma imagem PNG ou JPG.",
    logoErrSize: "O logótipo tem de ter 500 KB ou menos.",
    logoErrRead: "Não foi possível ler essa imagem.",

    creating: "A criar o PDF…",
    download: "Descarregar PDF",
    downloadNote: "Grátis. O PDF tem uma pequena linha “Created with invoicor.com” no rodapé.",
    downloadNeedsItem: "Adicione pelo menos uma linha com descrição para descarregar.",
    pdfError:
      "Este navegador não conseguiu criar o PDF. Tente de novo ou use outro navegador. O formulário está guardado.",
    ready: "Pronto",
    doneTitle: "O seu documento foi descarregado",
    doneText: "Procure {file} na pasta Transferências.",
    downloadAgain: "Descarregar de novo",
    createAnother: "Criar outra",
    appTitle: "Da próxima vez, envie-a do telemóvel.",
    appText:
      "A app Invoicor guarda este cliente e as suas linhas, mantém cada fatura com o seu estado e não tem marca de água. {n} faturas grátis.",
    fileName: "fatura",

    previewFrame: "Pré-visualização da fatura",
    previewError:
      "Não foi possível carregar a pré-visualização. Verifique a ligação; o formulário está guardado.",
    overflowTitle: "Já não cabe numa página.",
    overflowText:
      "O fim da fatura (notas, dados bancários) ficaria cortado. Encurte os detalhes das linhas ou use menos linhas.",

    pickerTitle: "Escolha um modelo",
    pickerCount: "{free} grátis aqui · todos os {all} na app",
    close: "Fechar",
    free: "Grátis",
    inApp: "Na app",
    lockedAria: "{name}: disponível na app Invoicor",
    thumbTitle: "Modelo {name}",
  },

  defaults: {
    invoiceNumber: "2026/001",
    paymentTerms: "Pagamento a 30 dias",
    notes: "Obrigado pela preferência.",
  },

  page: {
    meta: {
      title: "Criar fatura online grátis: modelo em PDF | Invoicor",
      description:
        "Crie online, grátis e sem registo, um orçamento ou fatura pró-forma: escolha um modelo, adicione as linhas e descarregue o PDF. 38 moedas, 11 idiomas.",
    },
    home: "Início",
    crumb: "Criar fatura online",
    eyebrow: "Grátis · sem registo",
    h1: "Criar fatura online grátis",
    lead: "Preencha os seus dados, escolha um modelo e descarregue um PDF profissional, grátis e sem conta, em 38 moedas e 11 idiomas. Ideal para orçamentos e faturas pró-forma; as faturas com valor fiscal em Portugal emitem-se num programa certificado.",

    howEyebrow: "Como funciona",
    howTitle: "Como criar uma fatura em 3 passos",
    howDescription: "Crie um documento de faturação profissional online e descarregue-o em PDF.",
    steps: [
      {
        name: "Adicione a sua empresa e o cliente",
        text: "Indique o nome ou firma, a morada e o NIF, e depois a quem está a faturar. Se tiver logótipo, adicione-o.",
      },
      {
        name: "Adicione as linhas, o IVA e o desconto",
        text: "Descreva o que fez ou vendeu, com quantidade e preço. Defina uma taxa de IVA e, se quiser, um desconto; os totais calculam-se sozinhos.",
      },
      {
        name: "Escolha um modelo e descarregue o PDF",
        text: "Escolha um dos 21 modelos grátis, confirme na pré-visualização e descarregue o documento em PDF.",
      },
    ],

    mustEyebrow: "Lista de verificação",
    mustTitle: "O que uma fatura deve ter em Portugal",
    mustIntro:
      "O Código do IVA (artigo 36.º) define os elementos obrigatórios de uma fatura. O gerador tem um campo para cada um.",
    mustHave: [
      "Numeração sequencial, numa ou mais séries",
      "Data de emissão (e a data da entrega ou do serviço, se for diferente)",
      "O seu nome ou firma, morada ou sede e NIF",
      "Nome ou firma, morada e NIF do cliente (o NIF é obrigatório se o cliente for empresa ou o pedir)",
      "Quantidade e denominação usual dos bens ou serviços",
      "Preço sem IVA de cada linha e eventuais descontos",
      "Taxa de IVA aplicável e montante do imposto",
      "O motivo da isenção de IVA, quando não o liquida (por exemplo, “IVA – regime de isenção, art. 53.º do CIVA”)",
      "Nos programas certificados: o código ATCUD e o código QR",
    ],
    mustNote:
      "Importante: em Portugal, as faturas de uma empresa ou de um trabalhador independente com atividade no país têm de ser emitidas num programa certificado pela Autoridade Tributária (com ATCUD e código QR) ou no Portal das Finanças, por exemplo a fatura-recibo. Este gerador não é um programa certificado, por isso o PDF não substitui essa fatura. Use-o como orçamento, fatura pró-forma ou, se a sua empresa não estiver estabelecida em Portugal, como fatura para os seus clientes. Na dúvida, fale com o seu contabilista.",

    typesEyebrow: "O essencial",
    typesTitle: "Fatura, recibo ou orçamento?",
    types: [
      {
        title: "Orçamento",
        text: "Antes do trabalho: quanto deverá custar. Não é um pedido de pagamento.",
      },
      {
        title: "Fatura",
        text: "Depois do trabalho (ou antes, para um adiantamento): um pedido de pagamento, com data de vencimento.",
      },
      { title: "Recibo", text: "Depois do pagamento: a prova de que o dinheiro foi recebido." },
    ],
    typesNote:
      "Este gerador cria documentos com o aspeto de uma fatura, ótimos como orçamento ou fatura pró-forma. Em Portugal, a fatura, o recibo e a fatura-recibo com valor fiscal emitem-se num programa certificado ou no Portal das Finanças.",

    termsEyebrow: "Receber a tempo",
    termsTitle: "Condições de pagamento que o ajudam a receber",
    termsText:
      "As condições de pagamento dizem ao cliente quando deve pagar. “Pronto pagamento” serve para trabalhos pequenos e clientes ocasionais. “A 30 dias” é habitual entre empresas. Seja qual for a escolha, ponha a data de vencimento concreta no documento, facilite o pagamento com o seu IBAN para transferência ou um link de pagamento, e guarde o número para os seus registos. Condições claras e uma data clara são a forma mais simples de não ter de andar atrás dos pagamentos.",

    tipsEyebrow: "Bons hábitos",
    tipsTitle: "Numerar, enviar e acompanhar",
    tips: [
      {
        title: "Numere numa sequência simples",
        text: "Use uma numeração contínua, como 2026/001, 2026/002, e nunca repita um número. Nas faturas fiscais, a série e a numeração são geridas pelo programa certificado; nos orçamentos e pró-formas, uma sequência própria facilita encontrar cada documento quando o cliente ou o contabilista pergunta.",
      },
      {
        title: "Envie no próprio dia",
        text: "Documentos enviados logo após o trabalho são pagos mais depressa. Envie o PDF por e-mail ou mensagem e escreva o total e a data de vencimento na própria mensagem, para o cliente os ver sem abrir o ficheiro.",
      },
      {
        title: "Lembre com simpatia, e cedo",
        text: "Se a data de vencimento passar, envie um lembrete curto e simpático com o documento em anexo. A maioria dos atrasos é simples esquecimento. Guarde uma cópia de tudo o que envia, para saber sempre o que está por receber.",
      },
    ],

    vsEyebrow: "A sua escolha",
    vsTitle: "Este gerador ou a app Invoicor?",
    vsIntro:
      "Ambos criam os mesmos documentos profissionais, com os mesmos modelos. O gerador é perfeito para uma vez; a app é para quem fatura todas as semanas.",
    vsCaption: "Gerador de faturas grátis comparado com a app Invoicor",
    vsGenerator: "Gerador",
    vsApp: "App",
    compare: [
      ["Preço", "Grátis", "{n} faturas grátis, depois um plano"],
      ["Marca de água", "Pequena linha “Created with invoicor.com”", "Nenhuma"],
      ["Modelos", "21 grátis", "Todos os 31 (21 grátis, os outros com plano)"],
      ["Linhas", "Até 10", "Até 50 (Pro)"],
      ["Clientes e produtos guardados", "Só neste navegador", "Sim, na sua conta"],
      ["Histórico e estado das faturas", "Não", "Rascunho, enviada, paga, em atraso"],
      ["Onde", "Em qualquer navegador", "iPhone e iPad"],
    ] as Array<[string, string, string]>,

    moreEyebrow: "Modelos e guias",
    moreTitle: "Faturas para o seu tipo de trabalho",
    moreBefore:
      "O gerador tem 21 modelos grátis. Para saber o que pôr numa fatura na sua área, veja os nossos",
    moreLink: "modelos de fatura e guias",
    moreAfter: ", ou o guia do seu setor:",
    moreEnglishNote: "Para já, estes guias estão em inglês.",
    useCases: [
      { href: "/industries/plumbers-hvac", label: "Canalizadores e climatização" },
      { href: "/industries/electricians", label: "Eletricistas" },
      { href: "/industries/freelance-designers", label: "Designers freelancer" },
      { href: "/industries/photographers-videographers", label: "Fotógrafos" },
      { href: "/industries/consultants-coaches", label: "Consultores e coaches" },
      { href: "/industries/cleaning-services", label: "Serviços de limpeza" },
    ],

    faqEyebrow: "Perguntas frequentes",
    faqTitle: "Criar fatura online: perguntas",
    faqs: [
      {
        question: "Este gerador é mesmo grátis?",
        answer:
          "Sim. Criar e descarregar documentos aqui é grátis e não precisa de conta. Cada PDF tem uma pequena linha “Created with invoicor.com” no rodapé. Se preferir sem linha nenhuma, a app Invoicor para iPhone não tem marca de água e as primeiras {n} faturas são grátis.",
      },
      {
        question: "Preciso de me registar?",
        answer:
          "Não. Preencha o formulário e descarregue o PDF. O rascunho fica guardado no seu navegador, por isso pode fechar o separador e continuar mais tarde no mesmo dispositivo.",
      },
      {
        question: "Guardam a minha fatura?",
        answer:
          "Não. A pré-visualização e o PDF são criados no seu navegador, por isso o que escreve nunca sai do seu dispositivo. O rascunho fica guardado só neste navegador; “Apagar tudo” remove-o.",
      },
      {
        question: "O PDF serve como fatura válida para as Finanças?",
        answer:
          "Em Portugal, não. As faturas de quem tem sede ou atividade no país têm de ser emitidas num programa certificado pela Autoridade Tributária, com ATCUD e código QR, ou no Portal das Finanças (por exemplo, a fatura-recibo dos trabalhadores independentes). Este gerador não é certificado. O PDF é ótimo como orçamento ou fatura pró-forma e, se a sua empresa não estiver estabelecida em Portugal, como fatura para os seus clientes. Na dúvida, fale com o seu contabilista.",
      },
      {
        question: "Que moedas e idiomas posso usar?",
        answer:
          "38 moedas e 11 idiomas de fatura. Os rótulos do documento (Fatura, Quantidade, Total, etc.) são traduzidos para o idioma que escolher.",
      },
      {
        question: "Posso adicionar o meu logótipo?",
        answer: "Sim. Carregue um PNG ou JPG até 500 KB e ele aparece no topo do documento.",
      },
      {
        question: "Quantas linhas posso adicionar?",
        answer:
          "Até 10 por documento, tal como no plano grátis da app Invoicor. Os planos pagos da app permitem mais.",
      },
      {
        question: "Posso adicionar IVA e um desconto?",
        answer:
          "Sim. Defina uma taxa de IVA para todo o documento, acrescida ou já incluída nos preços, e um desconto opcional em percentagem ou valor fixo. O subtotal, o IVA e o total calculam-se sozinhos.",
      },
      {
        question: "O cliente pode pagar online?",
        answer:
          "Adicione o seu próprio link de pagamento (por exemplo do PayPal, da Stripe ou da Wise) e o seu IBAN; ficam impressos no documento. O cliente paga-lhe diretamente, por transferência, pelo link ou, se combinarem, por MB WAY. A Invoicor não processa pagamentos e não cobra comissões.",
      },
      {
        question: "Posso editar o PDF ou copiar o texto?",
        answer:
          "Um PDF não é para editar: altere o formulário e descarregue um novo, o rascunho continua lá. O PDF é criado no navegador como uma imagem nítida do documento, por isso o texto não pode ser selecionado nem pesquisado; o link de pagamento e os outros links funcionam. A app Invoicor cria PDF com texto selecionável e guarda cada fatura com o seu estado.",
      },
    ],
  },
};
