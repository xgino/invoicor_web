import type { HelpDict } from "./en";

/** Help center, European Portuguese (Portugal). Polite "você" forms kept implicit, as on the home page. */
export const pt: HelpDict = {
  meta: {
    title: "Ajuda e perguntas frequentes | Invoicor",
    description:
      "Respostas às perguntas frequentes sobre o Invoicor: criar faturas, modelos, moedas, IVA, envio e acompanhamento, subscrições e os seus dados.",
  },
  home: "Início",
  crumb: "Ajuda",
  toc: "Nesta página",
  eyebrow: "Apoio",
  title: "Centro de Ajuda",
  subtitle:
    "Tudo o que precisa de saber sobre o Invoicor. Não encontra a resposta? Cada mensagem é lida por pessoas reais.",
  contactTitle: "Ainda tem dúvidas?",
  contactText:
    "Envie-nos uma mensagem a partir da app ou por e-mail. Cada mensagem é lida por pessoas reais; a resposta pode demorar alguns dias.",
  sections: [
    {
      id: "getting-started",
      title: "Primeiros passos",
      items: [
        {
          q: "Como crio a minha primeira fatura?",
          a: "Abra o Invoicor e toque no botão + no separador “Invoices” (Faturas). Escolha um cliente (ou crie um novo), adicione os artigos e toque em “Preview Invoice” (Pré-visualizar fatura). A fatura é gerada em PDF e pode partilhá-la por e-mail, WhatsApp, AirDrop ou qualquer outra app.",
        },
        {
          q: "Tenho de configurar primeiro um perfil da empresa?",
          a: "Sim. Antes de criar a primeira fatura, o Invoicor pede-lhe os dados da sua empresa (nome, morada, logótipo, dados bancários). Demora apenas um minuto e esses dados são reutilizados em todas as faturas que criar.",
        },
        {
          q: "O Invoicor é grátis?",
          a: "Sim. Pode criar até 3 faturas grátis, sem limite de tempo e sem subscrição. As faturas grátis incluem os modelos grátis, a exportação em PDF, a gestão de clientes e o acompanhamento do estado. Não há marca de água na app, em nenhum plano.",
        },
        {
          q: "Que dispositivos são suportados?",
          a: "O Invoicor funciona em iPhone e iPad com iOS ou iPadOS 17.6 ou posterior. Ainda não existe uma versão web; acede aos seus dados através da app. Por agora, os ecrãs da app estão em inglês, mas as faturas podem ser emitidas em português e em mais 10 idiomas.",
        },
      ],
    },
    {
      id: "creating-invoices",
      title: "Criar faturas",
      items: [
        {
          q: "Posso adicionar o logótipo da minha empresa às faturas?",
          a: "Sim. Abra o perfil da empresa e toque em “Upload Logo” (Carregar logótipo). O Invoicor aceita os formatos PNG, JPG, SVG e WebP. O logótipo aparece em todas as faturas que enviar. A transparência dos PNG é mantida.",
        },
        {
          q: "Como funcionam os modelos?",
          a: "O Invoicor inclui 31 modelos de fatura com design profissional: 21 são grátis, 8 vêm com o Starter e 2 com o Pro. Os planos superiores incluem todos os modelos dos planos inferiores. Pode definir um modelo predefinido no perfil da empresa ou escolher outro para cada fatura.",
        },
        {
          q: "Posso faturar em moedas diferentes?",
          a: "Sim. O Invoicor suporta 38 moedas, incluindo USD, EUR, GBP, JPY, CHF, CAD, AUD, INR e BRL. Defina uma moeda predefinida no perfil da empresa ou altere-a em cada fatura.",
        },
        {
          q: "Posso enviar faturas no idioma do meu cliente?",
          a: "Sim. O Invoicor suporta 11 idiomas de fatura. Todas as etiquetas da fatura (Artigo, Quantidade, Total, etc.) são traduzidas automaticamente. Defina um idioma predefinido no perfil da empresa ou escolha-o em cada fatura.",
        },
        {
          q: "Como funciona o cálculo do imposto?",
          a: "Defina a sua taxa de imposto no perfil da empresa (por exemplo, 23% de IVA em Portugal continental). O Invoicor calcula automaticamente o imposto em cada fatura. Pode escolher entre preços com IVA incluído ou sem IVA. Também pode alterar a taxa em cada fatura.",
        },
        {
          q: "Posso aplicar descontos a uma fatura?",
          a: "Sim. Pode aplicar um desconto em percentagem ou um valor fixo a qualquer fatura. O desconto aparece numa linha própria na secção dos totais.",
        },
        {
          q: "Qual é o número máximo de artigos por fatura?",
          a: "Depende do plano: até 10 linhas por fatura no plano Grátis, 25 no Starter e 50 no Pro.",
        },
      ],
    },
    {
      id: "sending-tracking",
      title: "Envio e acompanhamento",
      items: [
        {
          q: "Como envio uma fatura?",
          a: "No ecrã de detalhe da fatura, toque em “Share” (Partilhar). A fatura é gerada em PDF e pode enviá-la por e-mail, WhatsApp, AirDrop, Mensagens ou qualquer outra app de partilha do seu iPhone.",
        },
        {
          q: "O que significam os estados das faturas?",
          a: "Draft (Rascunho) — guardada mas ainda não enviada, ainda pode editá-la. Sent (Enviada) — partilhada com o cliente, bloqueada para edição. Paid (Paga) — o cliente pagou, marcada por si. Overdue (Em atraso) — passou a data de vencimento e continua por pagar. Cancelled (Anulada) — sem efeito, já não está ativa.",
          list: [
            ["Draft (Rascunho)", "guardada mas ainda não enviada, ainda pode editá-la."],
            ["Sent (Enviada)", "partilhada com o cliente, bloqueada para edição."],
            ["Paid (Paga)", "o cliente pagou, marcada por si."],
            ["Overdue (Em atraso)", "passou a data de vencimento e continua por pagar."],
            ["Cancelled (Anulada)", "sem efeito, já não está ativa."],
          ],
        },
        {
          q: "Posso editar uma fatura depois de a enviar?",
          a: "Não. Quando uma fatura é marcada como “Sent” (Enviada), fica bloqueada para preservar o registo legal. Se precisar de fazer alterações, duplique a fatura, edite a cópia e envie a versão atualizada.",
        },
        {
          q: "Posso duplicar uma fatura?",
          a: "Sim. No ecrã de detalhe da fatura, toque no botão “Copy” (Copiar). É criado um novo rascunho com o mesmo cliente, artigos e definições. Útil para trabalhos recorrentes.",
        },
      ],
    },
    {
      id: "account-billing",
      title: "Conta e faturação",
      items: [
        {
          q: "Como funcionam as subscrições?",
          a: "O Invoicor tem os planos Starter e Pro, cobrados mensal ou anualmente através da App Store da Apple. Toda a cobrança é feita pela Apple — nunca vemos nem guardamos os seus dados de pagamento. Pode gerir ou cancelar a subscrição nas Definições do iPhone → [o seu nome] → Subscrições.",
        },
        {
          q: "Preciso de um cartão para o período experimental grátis?",
          a: "Não para o plano grátis: as primeiras 3 faturas não exigem subscrição nem pagamento. Os períodos experimentais grátis do Starter e do Pro passam pela Apple: inicia-os com o seu ID Apple, que precisa de um método de pagamento. Cancele antes do fim do período experimental e não paga nada. O Invoicor nunca vê o seu cartão.",
        },
        {
          q: "Posso cancelar a subscrição?",
          a: "Sim, a qualquer momento. Abra as Definições do iPhone → [o seu nome] → Subscrições → Invoicor → Cancelar subscrição. O plano continua ativo até ao fim do período de faturação atual. Não volta a ser cobrado.",
        },
        {
          q: "O que acontece se voltar ao plano Grátis?",
          a: "As faturas, clientes e dados que já tem ficam intactos, e continua a poder ver, partilhar e acompanhar todas as faturas que criou. O plano grátis inclui 3 faturas no total; por isso, se já criou 3 ou mais, precisa novamente de um plano para criar novas.",
        },
        {
          q: "Como elimino a minha conta?",
          a: "Abra as definições (“Settings”) na app e toque em “Delete Account” (Eliminar conta). Isto remove de forma permanente a sua conta e todos os dados associados dos nossos servidores. Esta ação não pode ser desfeita.",
        },
      ],
    },
    {
      id: "multiple-businesses",
      title: "Várias empresas",
      items: [
        {
          q: "Posso gerir várias empresas?",
          a: "Sim. Com o plano Pro pode criar até 3 perfis de empresa separados, cada um com o seu nome, logótipo, morada e dados bancários. Escolha entre eles ao criar uma fatura.",
        },
        {
          q: "Como defino um perfil de empresa predefinido?",
          a: "No separador “Library” (Biblioteca), abra a secção “Business” (Empresa). Mantenha premido um perfil e escolha “Set as Default” (Definir como predefinido). O perfil predefinido fica selecionado sempre que cria uma nova fatura.",
        },
      ],
    },
    {
      id: "data-privacy",
      title: "Dados e privacidade",
      items: [
        {
          q: "Onde são guardados os meus dados?",
          a: "Os dados da sua conta e das suas faturas são guardados em servidores na Alemanha, na União Europeia, ao abrigo do RGPD. A análise de tráfego em invoicor.com (Google Analytics e PostHog, serviços dos EUA) só funciona se aceitar os cookies.",
        },
        {
          q: "Como protegem os meus dados?",
          a: "Com medidas de proteção habituais: todas as ligações entre a app e os nossos servidores são encriptadas (HTTPS), as palavras-passe são guardadas em formato hash, o início de sessão usa tokens seguros (ou Iniciar sessão com a Apple ou com a Google) e o acesso aos nossos servidores na Alemanha é restrito. Nenhum serviço online pode ser totalmente seguro, mas trabalhamos para impedir que os seus dados sejam acedidos sem autorização.",
        },
        {
          q: "Vendem os meus dados?",
          a: "Não. Nunca vendemos nem alugamos os seus dados nem os dos seus clientes. Só partilhamos o necessário com os serviços que fazem funcionar o Invoicor (o nosso fornecedor de alojamento na Alemanha, a Apple ou a Google se iniciar sessão com elas, e o nosso serviço de subscrições), todos indicados na nossa Política de Privacidade.",
          link: { text: "Política de Privacidade", page: "privacy" },
        },
        {
          q: "Posso exportar os meus dados?",
          a: "Pode exportar faturas individuais em PDF a qualquer momento. Para uma exportação completa dos dados, contacte-nos em {email} e enviamos-lhe os seus dados num formato legível por máquina, como exige o RGPD.",
        },
      ],
    },
    {
      id: "safety",
      title: "Segurança e burlas",
      items: [
        {
          q: "Recebi uma fatura feita com o Invoicor. É verdadeira?",
          a: "O Invoicor é a ferramenta que o remetente usou para fazer a fatura; não escrevemos faturas, não as enviamos em nome de ninguém nem verificamos o seu conteúdo. Trate-a como qualquer outra fatura: antes de pagar, confirme que conhece o remetente, que encomendou o trabalho ou os produtos e que o valor está correto.",
        },
        {
          q: "Como pago uma fatura em segurança?",
          a: "Verifique três coisas: o remetente (uma empresa que conhece), o valor (corresponde ao que combinaram) e os dados de pagamento (iguais aos que essa empresa usou antes). Se algo lhe parecer estranho, contacte o remetente através de um número de telefone ou morada que já conhece, e não pelos dados que constam da fatura.",
        },
        {
          q: "Os dados bancários ou o link de pagamento de uma fatura mudaram. O que devo fazer?",
          a: "Não pague ainda. A alteração dos dados de pagamento é a burla com faturas mais comum. Ligue ao remetente para um número que já tenha e confirme com ele os novos dados antes de pagar.",
        },
        {
          q: "O Invoicor trata ou protege o pagamento?",
          a: "Não. O Invoicor não é um serviço nem um intermediário de pagamentos: os pagamentos vão diretamente do cliente para o remetente, através do link de pagamento ou dos dados bancários do próprio remetente. O Invoicor não pode reter, reverter nem reembolsar um pagamento. Os nossos Termos de Serviço explicam isto na secção 5.",
          link: { text: "Termos de Serviço", page: "terms" },
        },
        {
          q: "Como denuncio uma fatura suspeita feita com o Invoicor?",
          a: "Envie um e-mail para {email} com a fatura e a forma como a recebeu. Podemos suspender contas que enviem faturas fraudulentas. Se já pagou a um burlão, contacte também de imediato o seu banco e a polícia.",
        },
      ],
    },
  ],
};
