import { Language, Job, Testimonial } from './types';

export const TRANSLATIONS = {
  [Language.NL]: {
    nav: {
      home: "Home",
      employers: "Werkgevers",
      candidates: "Kandidaten",
      jobs: "Vacatures",
      contact: "Contact",
      portal: "Mijn Acerto"
    },
    hero: {
      tag: "#1 IN INTERNATIONALE BEMIDDELING",
      title_start: "Verbindt talent",
      title_end: "over grenzen heen",
      subtitle: "Specialist in internationale arbeidsbemiddeling tussen Portugal en Nederland. Wij regelen alles: van werving tot huisvesting.",
      cta_employer: "Ik zoek personeel",
      cta_employer_desc: "Op zoek naar vakmensen? Wij vinden de perfecte match.",
      cta_employer_btn: "Vind Talent",
      cta_candidate: "Ik zoek werk",
      cta_candidate_desc: "Werken in Nederland? Wij regelen huisvesting en werk.",
      cta_candidate_btn: "Bekijk Vacatures"
    },
    features: {
      title: "Waarom Acerto?",
      personal: "Persoonlijke Aanpak",
      personal_desc: "Wij kennen onze kandidaten en klanten persoonlijk.",
      network: "Internationaal Netwerk",
      network_desc: "Eigen recruitmentkantoor in Portugal.",
      compliance: "Volledig Gecertificeerd",
      compliance_desc: "NBBU & NEN 4400-1 gecertificeerd voor zekerheid."
    },
    jobs: {
      title: "Actuele Vacatures",
      promo: "Wij bieden meer dan alleen een baan. Wij regelen **gratis huisvesting**, **zorgverzekering** en vervoer naar werk.",
      view_all: "Bekijk alle vacatures",
      apply: "Solliciteer direct",
      hot: "Populaire kansen"
    },
    contact: {
      title: "Neem Contact Op",
      desc: "Of u nu een werkgever bent die vaardigheden zoekt of een professional die kansen zoekt, wij helpen u graag.",
      form_name: "Naam",
      form_email: "E-mail",
      form_message: "Bericht",
      send: "Versturen",
      success: "Bedankt! We nemen snel contact op."
    },
    ai: {
      title: "Acerto Assistent",
      placeholder: "Stel een vraag over werken in NL...",
      welcome: "Hallo! Ik ben de AI-assistent van Acerto. Vraag mij alles over vacatures, huisvesting of administratie in Nederland."
    },
    employer_view: {
      title: "Voor Werkgevers",
      subtitle: "Business Solutions",
      desc: "Acerto neemt de grenzen weg in uw zoektocht naar talent. Wij verzorgen werving, huisvesting en administratie.",
      why_title: "Waarom Acerto?",
      why_1: "Groot bestand aan Portugese vakmensen.",
      why_2: "SNF-gecertificeerde huisvesting in eigen beheer.",
      why_3: "NEN 4400-1 Financiële zekerheid.",
      stat_label: "Klantbehoud",
      tools_title: "Acerto Intelligence Suite",
      tools_subtitle: "AI-tools om uw werving te stroomlijnen.",
      tab_strategy: "HR Strategie Adviseur",
      tab_branding: "Branding Studio",
      strat_hint: "Denkmodus: Stel complexe vragen over personeelsplanning, salaristrends of wetgeving.",
      strat_placeholder: "Bijv: Wat zijn effectieve retentiestrategieën voor bouwpersoneel?",
      strat_btn: "Genereer Advies",
      img_hint: "Maak unieke beelden voor uw vacatures of social media.",
      img_placeholder: "Bijv: Een lasser die werkt aan een schip in Rotterdam",
      img_btn: "Genereer Beeld",
      img_download: "Download Afbeelding"
    },
    candidate_view: {
      title: "Werken in Nederland",
      subtitle: "Start jouw reis",
      cv_title: "CV & Skill Analyzer",
      cv_desc: "Upload een foto van je CV of een certificaat. Onze AI vertelt je hoe je je kansen vergroot.",
      upload_hint: "Klik om te uploaden",
      analyze_btn: "Analyseer Nu",
      feedback_title: "AI Feedback",
      benefits_title: "Wat wij regelen",
      b1_title: "Gratis Huisvesting", b1_desc: "SNF gecertificeerde woningen, volledig gemeubileerd.",
      b2_title: "Zorgverzekering", b2_desc: "Collectieve verzekering vanaf dag 1.",
      b3_title: "Vervoer", b3_desc: "Bedrijfsauto of fiets voor woon-werkverkeer.",
      b4_title: "Wekelijkse Betaling", b4_desc: "Salaris elke week op tijd gestort."
    },
    home_cta: {
      title: "Klaar om te starten?",
      btn_contact: "Neem contact op",
      btn_job: "Ik zoek werk"
    }
  },
  [Language.PT]: {
    nav: {
      home: "Início",
      employers: "Empregadores",
      candidates: "Candidatos",
      jobs: "Vagas",
      contact: "Contacto",
      portal: "Meu Acerto"
    },
    hero: {
      tag: "#1 EM RECRUTAMENTO INTERNACIONAL",
      title_start: "Conectando talento",
      title_end: "além-fronteiras",
      subtitle: "Especialista em mediação laboral internacional entre Portugal e os Países Baixos. Tratamos de tudo: desde o recrutamento ao alojamento.",
      cta_employer: "Procuro pessoal",
      cta_employer_desc: "Procura profissionais qualificados? Encontramos a correspondência perfeita.",
      cta_employer_btn: "Encontrar Talento",
      cta_candidate: "Procuro trabalho",
      cta_candidate_desc: "Trabalhar na Holanda? Organizamos alojamento e trabalho.",
      cta_candidate_btn: "Ver Vagas"
    },
    features: {
      title: "Porquê a Acerto?",
      personal: "Abordagem Pessoal",
      personal_desc: "Conhecemos pessoalmente os nossos candidatos e clientes.",
      network: "Rede Internacional",
      network_desc: "Escritório próprio de recrutamento em Portugal.",
      compliance: "Totalmente Certificado",
      compliance_desc: "Certificação NBBU e NEN 4400-1 para sua segurança."
    },
    jobs: {
      title: "Vagas Atuais",
      promo: "Oferecemos mais do que apenas um emprego. Fornecemos **alojamento gratuito**, **seguro de saúde** e transporte para o trabalho.",
      view_all: "Ver todas as vagas",
      apply: "Candidatar-se",
      hot: "Oportunidades"
    },
    contact: {
      title: "Entre em Contacto",
      desc: "Seja um empregador à procura de competências ou um profissional à procura de oportunidades, estamos aqui para ajudar.",
      form_name: "Nome",
      form_email: "E-mail",
      form_message: "Mensagem",
      send: "Enviar",
      success: "Obrigado! Entraremos em contacto em breve."
    },
    ai: {
      title: "Assistente Acerto",
      placeholder: "Pergunte sobre trabalhar na Holanda...",
      welcome: "Olá! Sou o assistente de IA da Acerto. Pergunte-me qualquer coisa sobre vagas, alojamento ou administração nos Países Baixos."
    },
    employer_view: {
      title: "Para Empregadores",
      subtitle: "Soluções Empresariais",
      desc: "A Acerto remove as fronteiras na sua procura de talento. Tratamos do recrutamento, alojamento e administração.",
      why_title: "Porquê a Acerto?",
      why_1: "Grande base de dados de profissionais portugueses.",
      why_2: "Alojamento certificado SNF fornecido.",
      why_3: "Segurança financeira NEN 4400-1.",
      stat_label: "Retenção de Clientes",
      tools_title: "Suite de Inteligência Acerto",
      tools_subtitle: "Ferramentas de IA para otimizar o seu recrutamento.",
      tab_strategy: "Consultor Estratégico RH",
      tab_branding: "Estúdio de Marca",
      strat_hint: "Modo Pensamento: Faça perguntas complexas sobre planeamento ou legislação.",
      strat_placeholder: "Ex: Quais as estratégias de retenção para pessoal da construção?",
      strat_btn: "Gerar Conselho",
      img_hint: "Crie visuais únicos para as suas vagas.",
      img_placeholder: "Ex: Um soldador profissional a trabalhar num navio",
      img_btn: "Gerar Imagem",
      img_download: "Baixar Imagem"
    },
    candidate_view: {
      title: "Trabalhar na Holanda",
      subtitle: "Comece a sua jornada",
      cv_title: "Analisador de CV",
      cv_desc: "Carregue uma foto do seu CV. A nossa IA dirá como melhorar as suas hipóteses.",
      upload_hint: "Clique para carregar",
      analyze_btn: "Analisar Agora",
      feedback_title: "Feedback IA",
      benefits_title: "O que nós tratamos",
      b1_title: "Alojamento Gratuito", b1_desc: "Casas certificadas SNF, totalmente mobiladas.",
      b2_title: "Seguro de Saúde", b2_desc: "Seguro coletivo desde o 1º dia.",
      b3_title: "Transporte", b3_desc: "Carro ou bicicleta da empresa.",
      b4_title: "Pagamento Semanal", b4_desc: "Salário pago todas as semanas a tempo."
    },
    home_cta: {
      title: "Pronto para começar?",
      btn_contact: "Contacte-nos",
      btn_job: "Quero trabalhar"
    }
  },
  [Language.EN]: {
    nav: {
      home: "Home",
      employers: "Employers",
      candidates: "Candidates",
      jobs: "Jobs",
      contact: "Contact",
      portal: "My Acerto"
    },
    hero: {
      tag: "#1 International Recruitment",
      title_start: "Connecting Talent",
      title_end: "Across Borders",
      subtitle: "Specialist in international labor mediation between Portugal and the Netherlands. We handle everything from recruitment to housing.",
      cta_employer: "I need staff",
      cta_employer_desc: "Looking for skilled personnel? We find the perfect match.",
      cta_employer_btn: "Find Talent",
      cta_candidate: "I need a job",
      cta_candidate_desc: "Looking for a job in NL? We arrange housing and work.",
      cta_candidate_btn: "Browse Jobs"
    },
    features: {
      title: "Why Acerto?",
      personal: "Personal Approach",
      personal_desc: "We know our candidates and clients personally.",
      network: "International Network",
      network_desc: "Own recruitment office in Portugal.",
      compliance: "Fully Certified",
      compliance_desc: "NBBU & NEN 4400-1 certified for security."
    },
    jobs: {
      title: "Current Vacancies",
      promo: "We offer more than just a job. We provide **free accommodation**, **health insurance**, and transport to work.",
      view_all: "View all jobs",
      apply: "Apply Now",
      hot: "Hot Opportunities"
    },
    contact: {
      title: "Get in Touch",
      desc: "Whether you are an employer looking for skills or a professional looking for opportunities, we are here to help.",
      form_name: "Name",
      form_email: "Email",
      form_message: "Message",
      send: "Send",
      success: "Thanks! We will contact you shortly."
    },
    ai: {
      title: "Acerto Assistant",
      placeholder: "Ask about working in NL...",
      welcome: "Hello! I am Acerto's AI assistant. Ask me anything about jobs, housing, or administration in the Netherlands."
    },
    employer_view: {
      title: "For Employers",
      subtitle: "Business Solutions",
      desc: "Acerto removes the borders in your search for talent. We handle recruitment, housing, and administration.",
      why_title: "Why Acerto?",
      why_1: "Large database of Portuguese technical staff.",
      why_2: "SNF Certified housing provided.",
      why_3: "NEN 4400-1 Financial security.",
      stat_label: "Client Retention Rate",
      tools_title: "Acerto Intelligence Suite",
      tools_subtitle: "AI-powered tools to streamline your recruitment process.",
      tab_strategy: "HR Strategy Advisor",
      tab_branding: "Branding Studio",
      strat_hint: "Thinking Mode: Ask complex questions about workforce planning or laws.",
      strat_placeholder: "E.g., What are effective retention strategies for construction workers?",
      strat_btn: "Generate Advice",
      img_hint: "Create unique visuals for your job postings.",
      img_placeholder: "E.g., A professional welder working on a ship",
      img_btn: "Generate Visual",
      img_download: "Download Image"
    },
    candidate_view: {
      title: "Build Your Career in NL",
      subtitle: "Start Your Journey",
      cv_title: "CV & Skill Analyzer",
      cv_desc: "Upload a picture of your CV. Our AI will tell you how to improve your chances.",
      upload_hint: "Click to upload image",
      analyze_btn: "Analyze Now",
      feedback_title: "AI Feedback",
      benefits_title: "What we take care of",
      b1_title: "Free Housing", b1_desc: "SNF certified homes, fully furnished.",
      b2_title: "Health Insurance", b2_desc: "Collective insurance arranged from day 1.",
      b3_title: "Transport", b3_desc: "Company cars or bikes for commuting.",
      b4_title: "Weekly Pay", b4_desc: "Salary paid every week, on time."
    },
    home_cta: {
      title: "Ready to start?",
      btn_contact: "Get in Touch",
      btn_job: "I Need a Job"
    }
  }
};

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Betonstorter / Concrete Worker',
    location: 'Rotterdam, NL',
    salary: '€2.400 - €2.800',
    type: 'Full-time',
    description: 'Experienced concrete workers needed for large infrastructure projects.',
    category: 'construction'
  },
  {
    id: '2',
    title: 'Electrician (Industrial)',
    location: 'Eindhoven, NL',
    salary: '€2.600 - €3.200',
    type: 'Full-time',
    description: 'Maintenance and installation of industrial electrical systems.',
    category: 'technical'
  },
  {
    id: '3',
    title: 'Warehouse Packer',
    location: 'Tilburg, NL',
    salary: '€13,50 / hour',
    type: 'Temp',
    description: 'Packing and sorting goods in a modern distribution center.',
    category: 'logistics'
  },
  {
    id: '4',
    title: 'Tig Welder',
    location: 'Vlissingen, NL',
    salary: '€2.800 - €3.400',
    type: 'Full-time',
    description: 'High precision welding for maritime sector.',
    category: 'technical'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'João Silva',
    role: 'Carpenter',
    content: "Acerto helped me with everything: housing, BSN, and a great job. Very professional.",
    image: 'https://picsum.photos/id/1005/100/100'
  },
  {
    id: '2',
    name: 'Bouwbedrijf Jansen',
    role: 'Employer',
    content: "Reliable partners. The Portuguese craftsmen they supply are hardworking and skilled.",
    image: 'https://picsum.photos/id/1/100/100'
  }
];