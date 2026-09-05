import type { PageContent } from './types';

const nl: PageContent = {
  meta: {
    title: 'Sheryna Kuipers | Software Engineer',
    description:
      'Sheryna Kuipers is een full-stack software engineer die intuïtieve websoftware bouwt met impact.',
  },
  nav: {
    experience: 'Ervaring',
    strengths: 'Sterke Punten',
    skills: 'Vaardigheden',
    recommendations: 'Aanbevelingen',
    faq: 'Veelgestelde Vragen',
    contact: 'Contact',
  },
  hero: {
    name: 'Sheryna Kuipers',
    role: 'Software Engineer',
    tagline: 'Intuïtieve software bouwen die ertoe doet',
    intro:
      'Full-stack software engineer met focus op webontwikkeling. Ik duik graag in tech- en productdiscussies. Ik ben gepassioneerd over het bouwen van software die intuïtief is en een positieve impact heeft op de maatschappij.',
    primaryCta: 'Bekijk Mijn Ervaring',
    secondaryCta: 'Neem Contact Op',
  },
  techStack: {
    title: 'Tools & technologieën waar ik mee werk',
    items: ['React', 'Angular', 'TypeScript', 'Python', 'FastAPI', 'Docker', 'C#'],
  },
  experience: {
    title: 'Ervaring',
    subtitle: 'Een overzicht van waar ik heb gewerkt en waar ik daar aan werkte.',
    honourableMentionLabel: 'Eervolle Vermelding',
    items: [
      {
        company: 'Onesurance',
        role: 'Software Engineer',
        period: 'november 2025 - heden',
        description:
          'Nieuwe features bouwen en onderhouden door de hele stack heen, als voornaamste ontwikkelaar op de frontend.',
        tech: ['Python', 'React', 'TypeScript', 'C# (Blazor)', 'Git', 'Docker'],
      },
      {
        company: 'Sirrus',
        role: 'Junior Support Engineer',
        period: 'augustus 2025 - oktober 2025',
        description:
          'Behandelde tickets van B2B-klanten via e-mail en telefoon, met troubleshooting en het toepassen van oplossingen.',
        tech: ['Microsoft 365 Fundamentals (MS-900)', 'Azure Fundamentals (AZ-900)'],
      },
      {
        company: 'Nationale Politie',
        role: 'Software Engineer Stagiair',
        period: 'maart 2025 - juni 2025',
        description:
          'Afstudeerstage waarin ik een intern formulieren-bouwtool bouwde vergelijkbaar met Microsoft Forms of Google Forms, inclusief authenticatie en rolgebaseerde rechten.',
        tech: ['Niet-openbare informatie'],
      },
      {
        company: 'Breur Groothandel',
        role: 'Marketing/ICT Medewerker',
        period: 'juni 2024 - november 2024',
        description:
          "Werkte aan de bedrijfswebsite door content toe te voegen en nieuwe pagina's te bouwen met HTML en CSS. Maakte ook marketingmails met een e-mail pagebuilder, aangepast met HTML en CSS.",
        tech: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        company: "McDonald's",
        role: 'Crewmember',
        period: 'maart 2022 - juni 2024',
        description:
          'Kende elke positie in de winkel en was op weg om hostess te worden. Vlak voordat ik die promotie kon tekenen kwam er een kans bij Breur voorbij die mijn IT-carrière juist zou aanzwengelen.',
        tech: [],
        honourableMention: true,
      },
    ],
  },
  strengths: {
    title: 'Sterke punten',
    subtitle: 'Wat ik naast code meebreng in een team.',
    items: [
      {
        title: 'Teamplayer',
        description:
          'Floreert in multidisciplinaire teams en brengt verschillende perspectieven samen.',
      },
      {
        title: 'Duidelijke communicator',
        description:
          'Legt technische ideeën eenvoudig uit en houdt iedereen op één lijn.',
      },
      {
        title: 'Gestructureerd',
        description: 'Pakt problemen methodisch aan en houdt projecten op koers.',
      },
      {
        title: 'Denkt graag mee',
        description: 'Denkt graag mee met anderen en geeft doordacht advies.',
      },
      {
        title: 'Neemt eigenaarschap',
        description:
          'Neemt volledig eigenaarschap over projecten, van idee tot oplevering.',
      },
    ],
  },
  skills: {
    title: 'Vaardigheden',
    subtitle: 'Gegroepeerd in frontend, backend en tools.',
    buttonText: 'Neem Contact Op',
    tiers: [
      {
        title: 'Frontend',
        items: [
          'Angular',
          'React',
          'TypeScript',
          'JavaScript',
          'HTML & CSS',
          'Blazor (C#)',
        ],
      },
      {
        title: 'Backend',
        items: [
          'FastAPI',
          'Django',
          'Flask',
          'Python',
          'SQL',
          'SQLAlchemy',
          'C# (gemiddeld)',
          'Java (beginner)',
        ],
      },
      {
        title: 'Tools & DevOps',
        items: [
          'Docker',
          'Git',
          'Basis CI/CD',
          'Microsoft Azure Fundamentals (AZ-900)',
          'Microsoft 365 Fundamentals (MS-900)',
        ],
      },
    ],
  },
  recommendations: {
    title: 'Aanbevelingen',
    subtitle:
      "Voeg quotes toe van collega's, klanten of medestudenten zodra je die hebt.",
    items: [],
  },
  faq: {
    title: 'Veelgestelde Vragen',
    items: [
      {
        question: 'Aan wat voor projecten werk je?',
        answer:
          'Full-stack webontwikkeling. Ik werk graag aan de hele stack, van intuïtieve frontends tot de systemen erachter.',
      },
      {
        question: 'Ben je beschikbaar voor freelance werk of een baan?',
        answer:
          'Ik freelance nog niet maar dat staat op de planning. Ik hoor altijd graag over interessante kansen en samenwerkingen.',
      },
      {
        question: 'Wat is de beste manier om je te bereiken?',
        answer: 'LinkedIn is de beste manier om me te bereiken.',
      },
    ],
  },
  contact: {
    title: 'Neem Contact Op',
    subtitle:
      'Altijd in voor een goed gesprek over een samenwerking, een kans of gewoon tech in het algemeen.',
    linkedinLabel: 'Verbind Op LinkedIn',
    githubLabel: 'Bekijk Mijn GitHub',
  },
  footer: {
    bio: 'Full-stack developer die graag intuïtieve software bouwt met impact.',
    copyrightName: 'Sheryna Kuipers',
  },
};

export default nl;
