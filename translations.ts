export type Language = 'en' | 'pt' | 'es' | 'fr' | 'pl' | 'de' | 'it' | 'ru';

export interface Translation {
  nav: {
    home: string;
    about: string;
    services: string;
    contact: string;
  };
  hero: {
    title: string;
    cta: string;
    desc: string;
  };
  metrics: {
    years: string;
    projects: string;
    satisfaction: string;
  };
  services: {
    subtitle: string;
    title: string;
    items: {
      id: string;
      title: string;
      desc: string;
    }[];
  };
  contact: {
    title: string;
    desc: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    contactInfo: string;
  };
  footer: {
    rights: string;
    selectLanguage: string;
  };
}

export const translations: Record<Language, Translation> = {
  pt: {
    nav: { home: 'Home', about: 'Sobre', services: 'Serviços', contact: 'Contato' },
    hero: {
      title: 'Seu Site\nParece de 2010?',
      cta: 'VEJA MAIS',
      desc: 'Não deixe um design antigo afastar seus clientes. O seu negócio merece uma presença digital otimizada e de alta conversão.'
    },
    metrics: {
      years: 'Anos de Experiência',
      projects: 'Projetos Completos',
      satisfaction: 'Satisfação Clientes'
    },
    services: {
      subtitle: 'O que eu faço',
      title: 'Serviços Premium',
      items: [
        { id: '01', title: 'Site Institucional', desc: 'Desenvolvimento de projetos sob medida (tailor-made), com foco em segurança, conformidade com a LGPD, sustentação e hosting, garantindo que o conteúdo seja 100% gerenciável.' },
        { id: '02', title: 'Discovery & Assessment', desc: 'Utilização de dinâmicas de Design e Tech Sprints para descobrir a "Melhor Experiência Viável" (MVE) antes da construção do projeto digital.' },
        { id: '03', title: 'Inteligência Artificial', desc: 'Consultoria e construção de agentes e automações (como chatbots integrados a sistemas como SAP) para aumentar a produtividade e rentabilidade.' },
        { id: '04', title: 'Digital Performance', desc: 'Análise da jornada do usuário e implementação de estratégias de SEO para aumentar a visibilidade e performance de sites e lojas virtuais.' },
        { id: '05', title: 'Microlearning', desc: 'Distribuição de conteúdos educacionais em formato de stories para treinamento de equipes, com foco em engajamento e aprendizado rápido.' }
      ]
    },
    contact: {
      title: 'Vamos \n Conversar.',
      desc: 'Tem um projeto em mente? Estou sempre aberto para discutir novas ideias e oportunidades.',
      namePlaceholder: 'Seu Nome',
      emailPlaceholder: 'Seu Email',
      messagePlaceholder: 'Sobre o Projeto',
      submit: 'Enviar Mensagem',
      contactInfo: 'Contate-nos'
    },
    footer: {
      rights: 'RabbitDev Portfolio.',
      selectLanguage: 'Selecionar Idioma'
    }
  },
  en: {
    nav: { home: 'Home', about: 'About', services: 'Services', contact: 'Contact' },
    hero: {
      title: 'Does Your Site\nLook Like 2010?',
      cta: 'SEE MORE',
      desc: 'Don\'t let outdated design drive away your customers. Your business deserves an optimized, high-converting digital presence.'
    },
    metrics: {
      years: 'Years Experience',
      projects: 'Completed Projects',
      satisfaction: 'Client Satisfaction'
    },
    services: {
      subtitle: 'What I Do',
      title: 'Premium Services',
      items: [
        { id: '01', title: 'Institutional Website', desc: 'Bespoke (tailor-made) projects focused on security, LGPD/GDPR compliance, maintenance, and hosting, ensuring 100% manageable content.' },
        { id: '02', title: 'Discovery & Assessment', desc: 'Using Design and Tech Sprints to discover the "Minimum Viable Experience" (MVE) before building the digital project.' },
        { id: '03', title: 'Artificial Intelligence', desc: 'Consulting and building agents and automations (such as chatbots integrated with systems like SAP) to increase productivity and profitability.' },
        { id: '04', title: 'Digital Performance', desc: 'User journey analysis and implementation of SEO strategies to increase visibility and performance of websites and online stores.' },
        { id: '05', title: 'Microlearning', desc: 'Distribution of educational content in stories format for team training, focusing on engagement and rapid learning.' }
      ]
    },
    contact: {
      title: 'Let\'s \n Talk.',
      desc: 'Have a project in mind? I\'m always open to discussing new ideas and opportunities.',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'About the Project',
      submit: 'Send Message',
      contactInfo: 'Contact Us'
    },
    footer: {
      rights: 'RabbitDev Portfolio.',
      selectLanguage: 'Select Language'
    }
  },
  es: {
    nav: { home: 'Inicio', about: 'Sobre', services: 'Servicios', contact: 'Contacto' },
    hero: {
      title: '¿Tu Sitio\nParece de 2010?',
      cta: 'VER MÁS',
      desc: 'No dejes que un diseño antiguo aleje a tus clientes. Tu negocio merece una presencia digital optimizada y de alta conversión.'
    },
    metrics: {
      years: 'Años de Experiencia',
      projects: 'Proyectos Completados',
      satisfaction: 'Satisfacción Clientes'
    },
    services: {
      subtitle: 'Lo que hago',
      title: 'Servicios Premium',
      items: [
        { id: '01', title: 'Sitio Institucional', desc: 'Proyectos a medida enfocados en seguridad, cumplimiento de privacidad, mantenimiento y hosting.' },
        { id: '02', title: 'Discovery & Assessment', desc: 'Design y Tech Sprints para descubrir la "Mejor Experiencia Viable" antes de construir.' },
        { id: '03', title: 'Inteligencia Artificial', desc: 'Construcción de agentes y automatizaciones para aumentar productividad y rentabilidad.' },
        { id: '04', title: 'Rendimiento Digital', desc: 'Estrategias de SEO y contenido para aumentar la visibilidad y ventas.' },
        { id: '05', title: 'Microlearning', desc: 'Plataforma Grano: contenidos educativos en formato stories para equipos.' }
      ]
    },
    contact: {
      title: 'Hablemos \n Juntos.',
      desc: '¿Tienes un proyecto en mente? Siempre estoy abierto a discutir nuevas ideas y oportunidades.',
      namePlaceholder: 'Tu Nombre',
      emailPlaceholder: 'Tu Email',
      messagePlaceholder: 'Sobre el Proyecto',
      submit: 'Enviar Mensagem',
      contactInfo: 'Contáctanos'
    },
    footer: {
      rights: 'Portafolio RabbitDev.',
      selectLanguage: 'Seleccionar Idioma'
    }
  },
  fr: {
    nav: { home: 'Accueil', about: 'À propos', services: 'Services', contact: 'Contact' },
    hero: {
      title: 'Votre Site\nDate de 2010 ?',
      cta: 'VOIR PLUS',
      desc: 'Ne laissez pas un design obsolète faire fuir vos clients. Votre entreprise mérite une présence numérique optimisée.'
    },
    metrics: {
      years: 'Années d\'Expérience',
      projects: 'Projets Terminés',
      satisfaction: 'Satisfaction Clients'
    },
    services: {
      subtitle: 'Ce que je fais',
      title: 'Services Premium',
      items: [
        { id: '01', title: 'Site Institutionnel', desc: 'Projets sur mesure axés sur la sécurité, la maintenance et l\'hébergement.' },
        { id: '02', title: 'Discovery & Assessment', desc: 'Tech Sprints pour découvrir la meilleure expérience avant le développement.' },
        { id: '03', title: 'Intelligence Artificielle', desc: 'Agents et automatisations pour augmenter la rentabilité de votre entreprise.' },
        { id: '04', title: 'Performance Digitale', desc: 'Stratégies SEO pour augmenter la visibilité des boutiques en ligne.' },
        { id: '05', title: 'Microlearning', desc: 'Formations d\'équipe rapides et engageantes au format stories.' }
      ]
    },
    contact: {
      title: 'Parlons \n Ensemble.',
      desc: 'Vous avez un projet en tête ? Je suis toujours ouvert à la discussion de nouvelles idées.',
      namePlaceholder: 'Votre Nom',
      emailPlaceholder: 'Votre Email',
      messagePlaceholder: 'À propos du projet',
      submit: 'Envoyer Message',
      contactInfo: 'Contactez-nous'
    },
    footer: {
      rights: 'Portfolio RabbitDev.',
      selectLanguage: 'Choisir la Langue'
    }
  },
  pl: {
    nav: { home: 'Start', about: 'O mnie', services: 'Usługi', contact: 'Kontakt' },
    hero: {
      title: 'Twoja Strona\nWygląda na 2010?',
      cta: 'ZOBACZ WIĘCEJ',
      desc: 'Nie pozwól, aby przestarzały design odstraszał klientów. Twoja firma zasługuje na zoptymalizowaną obecność cyfrową.'
    },
    metrics: {
      years: 'Lat Doświadczenia',
      projects: 'Ukończone Projekty',
      satisfaction: 'Zadowolenie Klientów'
    },
    services: {
      subtitle: 'Czym się zajmuję',
      title: 'Usługi Premium',
      items: [
        { id: '01', title: 'Strona Instytucjonalna', desc: 'Projekty szyte na miarę, skupione na bezpieczeństwie i łatwym zarządzaniu treścią.' },
        { id: '02', title: 'Discovery & Assessment', desc: 'Design Sprints dla odkrycia najlepszej drogi przed budową projektu.' },
        { id: '03', title: 'Sztuczna Inteligencja', desc: 'Budowa agentów i automatyzacji zwiększających wydajność firmy.' },
        { id: '04', title: 'Digital Performance', desc: 'Strategie SEO zwiększające widoczność i sprzedaż w sklepach internetowych.' },
        { id: '05', title: 'Microlearning', desc: 'Edukacja w formie stories dla zespołów, skupiona na zaangażowaniu.' }
      ]
    },
    contact: {
      title: 'Porozmawiajmy.',
      desc: 'Masz pomysł na projekt? Jestem zawsze otwarty na dyskusję o nowych pomysłach i możliwościach.',
      namePlaceholder: 'Twoje Imię',
      emailPlaceholder: 'Twój Email',
      messagePlaceholder: 'O Projekcie',
      submit: 'Wyślij Wiadomość',
      contactInfo: 'Skontaktuj się'
    },
    footer: {
      rights: 'Portfolio RabbitDev.',
      selectLanguage: 'Wybierz Język'
    }
  },
  de: {
    nav: { home: 'Home', about: 'Über', services: 'Leistungen', contact: 'Kontakt' },
    hero: {
      title: 'Sieht Ihre Seite\nnach 2010 aus?',
      cta: 'MEHR SEHEN',
      desc: 'Lassen Sie nicht zu, dass veraltetes Design Kunden vertreibt. Ihr Unternehmen verdient eine optimierte Webpräsenz.'
    },
    metrics: {
      years: 'Jahre Erfahrung',
      projects: 'Abgeschl. Projekte',
      satisfaction: 'Kundenzufriedenheit'
    },
    services: {
      subtitle: 'Was ich mache',
      title: 'Premium Services',
      items: [
        { id: '01', title: 'Institutionelle Website', desc: 'Maßgeschneiderte Projekte mit Fokus auf Sicherheit und Wartbarkeit.' },
        { id: '02', title: 'Discovery & Assessment', desc: 'Tech Sprints zur Ermittlung der "Minimum Viable Experience".' },
        { id: '03', title: 'Künstliche Intelligenz', desc: 'Entwicklung von Agenten und Automatisierungen zur Produktivitätssteigerung.' },
        { id: '04', title: 'Digital Performance', desc: 'SEO-Strategien zur Steigerung der Sichtbarkeit und Performance.' },
        { id: '05', title: 'Microlearning', desc: 'Interaktive Schulungen im Stories-Format für Teams.' }
      ]
    },
    contact: {
      title: 'Lassen Sie uns\nreden.',
      desc: 'Haben Sie ein Projekt im Kopf? Ich bin immer offen für neue Ideen und Möglichkeiten.',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'Ihre E-Mail',
      messagePlaceholder: 'Über das Projekt',
      submit: 'Nachricht Senden',
      contactInfo: 'Kontakt'
    },
    footer: {
      rights: 'RabbitDev Portfolio.',
      selectLanguage: 'Sprache Wählen'
    }
  },
  it: {
    nav: { home: 'Home', about: 'Chi Siamo', services: 'Servizi', contact: 'Contatti' },
    hero: {
      title: 'Il Tuo Sito\nSembra del 2010?',
      cta: 'VEDI DI PIÙ',
      desc: 'Non lasciare che un design obsoleto allontani i clienti. La tua azienda merita una presenza digitale ottimizzata.'
    },
    metrics: {
      years: 'Anni di Esperienza',
      projects: 'Progetti Completati',
      satisfaction: 'Soddisfazione Clienti'
    },
    services: {
      subtitle: 'Cosa faccio',
      title: 'Servizi Premium',
      items: [
        { id: '01', title: 'Sito Istituzionale', desc: 'Progetti su misura con focus su sicurezza, hosting e gestione semplificata.' },
        { id: '02', title: 'Discovery & Assessment', desc: 'Design Sprints per definire la migliore esperienza prima dello sviluppo.' },
        { id: '03', title: 'Intelligenza Artificiale', desc: 'Automazioni e agenti intelligenti per aumentare la redditività aziendale.' },
        { id: '04', title: 'Digital Performance', desc: 'Strategie SEO per migliorare la visibilità degli store online.' },
        { id: '05', title: 'Microlearning', desc: 'Contenuti educativi in formato stories per il training aziendale.' }
      ]
    },
    contact: {
      title: 'Parliamone.',
      desc: 'Hai un projeto in mente? Sono sempre aperto a discutere nuove idee e opportunità.',
      namePlaceholder: 'Il Tuo Nome',
      emailPlaceholder: 'La Tua Email',
      messagePlaceholder: 'Sul Progetto',
      submit: 'Invia Messaggio',
      contactInfo: 'Contattaci'
    },
    footer: {
      rights: 'Portfolio RabbitDev.',
      selectLanguage: 'Seleziona Lingua'
    }
  },
  ru: {
    nav: { home: 'Главная', about: 'О нас', services: 'Услуги', contact: 'Контакты' },
    hero: {
      title: 'Ваш сайт\nвыглядит как в 2010?',
      cta: 'ПОДРОБНЕЕ',
      desc: 'Не позволяйте устаревшему дизайну отпугивать клиентов. Ваш бизнес заслуживает современной цифровой презентации.'
    },
    metrics: {
      years: 'Лет Опыта',
      projects: 'Завершенных Проектов',
      satisfaction: 'Довольных Клиентов'
    },
    services: {
      subtitle: 'Что я делаю',
      title: 'Премиум Услуги',
      items: [
        { id: '01', title: 'Корпоративный сайт', desc: 'Индивидуальные проекты с фокусом на безопасность и удобное управление.' },
        { id: '02', title: 'Discovery & Assessment', desc: 'Tech Sprints для поиска лучшего решения перед началом разработки.' },
        { id: '03', title: 'Искусственный интеллект', desc: 'Разработка агентов и автоматизаций для роста продуктивности.' },
        { id: '04', title: 'Digital Performance', desc: 'SEO-стратегии для роста видимости и продаж онлайн-магазинов.' },
        { id: '05', title: 'Микрообучение', desc: 'Stories-формат для обучения сотрудников с высоким вовлечением.' }
      ]
    },
    contact: {
      title: 'Давайте \n Обсудим.',
      desc: 'Есть идея для проекта? Я всегда открыт для обсуждения новых идей и возможностей.',
      namePlaceholder: 'Ваше Имя',
      emailPlaceholder: 'Ваш Email',
      messagePlaceholder: 'О Проекте',
      submit: 'Отправить',
      contactInfo: 'Свяжитесь с нами'
    },
    footer: {
      rights: 'Портфолио RabbitDev.',
      selectLanguage: 'Выберите Язык'
    }
  }
};
