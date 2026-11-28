import type { TrustDict } from "./en";

/** About and Contact (P10, P11), European Portuguese (Portugal). Polite "você" forms kept implicit, as on the help center and home page. */
export const pt: TrustDict = {
  home: "Início",
  country: "Países Baixos",
  about: {
    meta: {
      title: "Sobre o Invoicor: a app de faturas honesta | Invoicor",
      description:
        "Quem faz o Invoicor e o que defende: começar grátis, sem comissões sobre o seu dinheiro, pessoas que leem cada mensagem e dados em servidores na Alemanha.",
    },
    crumb: "Sobre nós",
    eyebrow: "Sobre o Invoicor",
    title: "A app de faturas honesta",
    subtitle:
      "O Invoicor ajuda freelancers e pequenas empresas a enviar uma fatura profissional em segundos, na língua e na moeda do cliente, sem paywalls escondidos e sem comissões sobre o seu dinheiro.",
    whyEyebrow: "Porque existe",
    whyTitle: "Faturar não devia roubar-lhe a noite",
    whyText:
      "A maioria das pessoas que envia faturas são canalizadores, empregados de limpeza, designers e consultores, não contabilistas. Terminam um trabalho, o cliente pede a fatura, e as ferramentas disponíveis são um documento em branco ou um software de contabilidade feito para um departamento financeiro. O Invoicor fica no meio: os campos que a contabilidade do cliente espera, preenchidos com o que guardou da última vez, e um PDF limpo que envia antes de sair.",
    whyText2:
      "Nas avaliações de apps de faturação repetem-se sempre as mesmas queixas: um plano “gratuito” que afinal é um período experimental, ninguém com quem falar e um processamento de pagamentos que retém o seu dinheiro. O Invoicor foi feito para evitar as três.",
    principlesEyebrow: "O que defendemos",
    principlesTitle: "Quatro promessas que podemos cumprir",
    principles: [
      {
        title: "Grátis a sério para começar",
        text: "{n} faturas reais na app, sem marca de água e sem subscrição. Vê o que recebe antes de pagar seja o que for.",
      },
      {
        title: "Nunca tocamos no seu dinheiro",
        text: "O Invoicor não é um processador de pagamentos. O cliente paga-lhe diretamente, através do seu banco ou de um link de pagamento que o próprio adiciona, e não ficamos com nenhuma parte de nenhum pagamento.",
      },
      {
        title: "Pessoas reais leem cada mensagem",
        text: "O feedback da app e os e-mails chegam à equipa, não a um bot. A resposta pode demorar alguns dias, e preferimos dizê-lo a prometer uma hora que não conseguimos cumprir.",
      },
      {
        title: "Os seus dados ficam na UE",
        text: "Contas e faturas são guardadas em servidores na Alemanha e tratadas ao abrigo do RGPD. Se eliminar a sua conta, os seus dados são removidos dos nossos servidores no prazo de 30 dias, exceto o que a lei nos obriga a conservar.",
      },
    ],
    whatEyebrow: "O que faz e o que não faz",
    whatTitle: "Para saber antes de descarregar",
    doesTitle: "O Invoicor faz",
    does: [
      "Uma fatura profissional no seu iPhone em segundos, com o PDF partilhado por e-mail, iMessage ou WhatsApp",
      "31 modelos de fatura e o seu próprio logótipo",
      "Faturas em 11 idiomas e 38 moedas, para clientes no estrangeiro",
      "Clientes e produtos guardados, e um toque para duplicar a fatura do mês passado",
      "Um gerador de faturas grátis neste site, sem precisar de conta",
    ],
    doesntTitle: "O Invoicor (ainda) não faz",
    doesnt: [
      "Orçamentos",
      "Faturas recorrentes ou agendadas, nem lembretes aos seus clientes",
      "Processamento de pagamentos (adiciona o seu próprio link de pagamento)",
      "Funcionamento offline: precisa de ligação à internet",
      "Android, por enquanto (está a caminho: veja a página do Android)",
    ],
    screensNote: "Os ecrãs da app estão em inglês; as faturas saem em 11 idiomas.",
    whoEyebrow: "Quem está por trás",
    whoTitle: "Gerido a partir dos {country}",
    whoText:
      "O Invoicor é um negócio gerido a partir dos {country}. Estes são os seus dados; os termos e a política de privacidade indicam o que se aplica quando usa a app.",
    contactButton: "Contacte-nos",
    helpButton: "Ajuda e perguntas frequentes",
    ctaTitle: "Envie a sua próxima fatura",
    ctaGradient: "em segundos.",
    ctaText: "{n} faturas grátis, sem marca de água e sem subscrição.",
  },
  contact: {
    meta: {
      title: "Contactos: sugestões, dúvidas e erros | Invoicor",
      description:
        "Fale com a equipa do Invoicor na app (Settings, Send Feedback) ou por e-mail. Uma pessoa lê cada mensagem; a resposta pode demorar alguns dias.",
    },
    crumb: "Contactos",
    eyebrow: "Contactos",
    title: "Fale com quem faz o Invoicor",
    subtitle:
      "Dúvidas, erros ou ideias: uma pessoa da equipa lê cada mensagem. A resposta pode demorar alguns dias, por isso, para uma resposta rápida, o Centro de Ajuda pode ser mais rápido.",
    waysHidden: "Formas de nos contactar",
    app: {
      title: "Na app",
      before: "Vá a",
      path: "Settings → Support → Send Feedback",
      middle:
        "e escolha um erro, um pedido de funcionalidade ou uma dúvida. O modelo do seu iPhone e a versão da app são adicionados automaticamente, e em",
      submissions: "My Submissions",
      after: "vê em que ponto está cada mensagem: nova, vista, em curso ou resolvida.",
    },
    email: {
      title: "Por e-mail",
      before: "Escreva para",
      after:
        "para qualquer assunto: quando não consegue iniciar sessão, pedidos de privacidade, parcerias ou imprensa.",
    },
    help: {
      title: "Ajuda e perguntas frequentes",
      before: "A maioria das dúvidas sobre modelos, moedas, impostos e planos tem resposta no",
      link: "Centro de Ajuda",
      after: ", a qualquer hora.",
    },
    noPhone:
      "Não há linha telefónica nem chat em direto: por escrito podemos analisar a sua conta e responder como deve ser.",
    topicsEyebrow: "Antes de escrever",
    topicsTitle: "A resposta certa à primeira",
    topics: [
      {
        title: "Um erro ou um PDF com problemas",
        text: "Diga o que tocou, o que esperava e o que aconteceu, e o número da fatura se for sobre uma fatura em concreto. Uma captura de ecrã ajuda (anexe-a a um e-mail).",
      },
      {
        title: "Subscrições, reembolsos e cancelamento",
        text: "Os planos são comprados através da Apple, por isso é a Apple que trata dos pagamentos e reembolsos. Cancele quando quiser nas Definições do iPhone → [o seu nome] → Subscrições. Se algo lhe parecer errado, ajudamos com todo o gosto.",
      },
      {
        title: "Os seus dados e a privacidade",
        text: "Peça uma cópia dos seus dados ou a sua eliminação por e-mail; também pode eliminar a conta na app. A política de privacidade explica os seus direitos ao abrigo do RGPD.",
      },
      {
        title: "Afiliados e parceiros",
        text: "O programa de afiliados tem uma página própria, com o funcionamento e a forma de aderir. Para outras parcerias, envie-nos um e-mail.",
      },
    ],
    related: "Veja também:",
    relatedLinks: {
      privacy: "política de privacidade (em inglês)",
      terms: "termos (em inglês)",
      affiliate: "programa de afiliados (em inglês)",
      about: "sobre nós",
    },
    companyEyebrow: "Dados da empresa",
    companyTitle: "A quem está a escrever",
    ctaTitle: "Ainda não experimentou?",
    ctaGradient: "Comece grátis.",
    ctaText: "{n} faturas grátis, sem marca de água e sem subscrição.",
  },
  company: {
    business: "Empresa",
    basedIn: "Sede",
    kvk: "KvK (Câmara de Comércio dos Países Baixos)",
    vat: "Número de IVA",
    data: "Dados",
    dataValue: "Servidores na Alemanha (UE), tratados ao abrigo do RGPD",
    email: "E-mail",
    countryName: "Países Baixos",
  },
};
