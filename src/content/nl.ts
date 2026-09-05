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
  walkthrough: {
    triggerLabel: 'Volg De Rondleiding',
    exitLabel: 'Rondleiding Verlaten',
    continueLabel: 'Doorgaan',
    backLabel: 'Terug',
    professionalEyebrow: 'Professioneel',
    professionalSteps: [
      {
        title: 'Tools & Technologieën',
        body: [
          'Ik ben door en door een full-stack engineer.',
          'React, Angular, TypeScript, Python, FastAPI, Docker en C# zijn mijn dagelijkse gereedschap.',
          'Ik voel me net zo thuis in de backend als in de browser.',
        ],
      },
      {
        title: 'Aan Het Werk',
        body: [
          'Bij Onesurance bouw ik features door de hele stack heen, als voornaamste frontend ontwikkelaar.',
          'Daarvoor behandelde ik supporttickets bij Sirrus en bouwde ik een formuliertool voor de Nationale Politie.',
          'Ik vind projectmanagement gesprekken en multidisciplinaire discussies net zo leuk als code schrijven.',
        ],
      },
      {
        title: 'Wat Ik Meebreng In Een Team',
        body: [
          'Ik ben een teamplayer, een duidelijke communicator en iemand die van structuur houdt.',
          'Ik neem volledig eigenaarschap, van idee tot oplevering.',
          'Ik denk graag mee over UX en UI, al is iets vanaf nul ontwerpen niet mijn ding.',
        ],
      },
      {
        title: 'Vaardigheden',
        body: [
          'Op de frontend grijp ik naar Angular, React en TypeScript.',
          'Op de backend doen FastAPI, Django, Python, SQL en SQLAlchemy het zware werk.',
          'Docker, Git en een beetje CI/CD houden alles achter de schermen draaiende.',
          'Al heb ik wel een zwak voor de frontend.',
        ],
      },
      {
        title: 'Altijd Aan Het Groeien',
        body: [
          'Ik leer graag en ben er scherp op om dat te bewijzen.',
          'Ambitieus is nog zacht uitgedrukt.',
          'Wat mij betreft bestaat er geen plafond.',
        ],
      },
    ],
    hookEyebrow: 'Plot Twist',
    hookTitle: 'Dat was de cv-versie. Klaar om de echte mij te ontmoeten?',
    hookSubtitle:
      'Zelfde persoon, maar meer basketbal en meer reptielen. Niet jouw ding? Geen probleem, de knop rechtsboven oordeelt niet. Anders: laten we verdergaan.',
    hookCta: 'Laat Maar Zien',
    privateEyebrow: 'Privé',
    privateSteps: [
      {
        title: 'Tien Jaar Op Het Veld',
        body: [
          'Ik speel al tien jaar basketbal.',
          'Eén van die jaren coachte ik een U14 meisjesteam.',
          'Ik heb ontzettend genoten van elke minuut.',
        ],
      },
      {
        title: 'Women In Tech, Rotterdam Academy',
        body: [
          'Een jaar na mijn afstuderen probeerden drie andere studenten en ik iets nieuws.',
          'We richtten een studievereniging op: Women in Tech aan de Rotterdam Academy.',
          'We organiseerden een netwerkevent en workshops, maar het kreeg niet genoeg animo om door te gaan.',
          'Nog steeds trots dat we het probeerden.',
        ],
      },
      {
        title: 'Een Kamer Vol Reptielen',
        body: [
          'Ik ben een groot fan van reptielen en amfibieën.',
          'In mijn vrije tijd val ik graag in een YouTube-gat over ze.',
          'Als het aan mij lag, had ik thuis een hele kamer vol met ze.',
          'Laten we kijken hoeveel jij weet over deze fantastische diertjes.',
        ],
      },
    ],
    quizEyebrow: 'Quiztijd',
    quizIntroTitle: 'Laten we je kennis over reptielen en amfibieën testen.',
    quizIntroSubtitle: 'Vijf vragen. Geen druk. Laten we kijken hoe je het doet.',
    quizImageDisclaimer:
      'Kleine disclaimer: de reptielenplaatjes zijn niet bepaald award winning. Het beste wat ik zo snel kon vinden, beloofd.',
    quizStartLabel: 'Start De Quiz',
    quizQuestionLabel: 'Vraag {current} van {total}',
    quizQuestions: [
      {
        question: 'Welke van deze is geen echt reptiel?',
        options: ['Kameleon', 'Salamander', 'Gekko', 'Leguaan'],
        correctIndex: 1,
        funFact:
          'Salamanders zijn amfibieën, geen reptielen. Hun huid is glad en vochtig, terwijl de huid van een reptiel droog en schubbig is.',
      },
      {
        question: 'Hoe heet een babykikker voordat hij helemaal is veranderd?',
        options: ['Nimf', 'Kikkervisje', 'Larve', 'Pup'],
        correctIndex: 1,
        funFact:
          'Kikkervisjes ademen door kieuwen en leven in het water. Later krijgen ze pootjes en longen om op het land te leven.',
      },
      {
        question:
          'Welk reptiel kan zijn staart laten teruggroeien nadat hij die kwijtraakt?',
        options: ['Krokodil', 'Schildpad', 'Gekko', 'Slang'],
        correctIndex: 2,
        funFact:
          "Gekko's kunnen hun staart laten los om aan een roofdier te ontsnappen. Daarna groeit er gewoon een nieuwe.",
      },
      {
        question: 'Axolotls, bekend om het regenereren van ledematen, zijn een soort:',
        options: ['Hagedis', 'Salamander', 'Vis', 'Kikker'],
        correctIndex: 1,
        funFact:
          'Axolotls zijn salamanders. Ze houden meestal hun kieuwen en blijven hun hele leven in het water.',
      },
      {
        question: 'Welke van deze slangen is giftig?',
        options: ['Maïsslang', 'Koningspython', 'Koningscobra', 'Melkslang'],
        correctIndex: 2,
        funFact:
          "De koningscobra is 's werelds langste giftige slang. Hij kan meer dan vijf meter lang worden.",
      },
    ],
    quizNextLabel: 'Volgende Vraag',
    quizSeeResultLabel: 'Bekijk Mijn Score',
    quizResultGood:
      'Vijf van de vijf. Jij kent je reptielen en amfibieën duidelijk goed.',
    quizResultOk: 'Een prima score. Je weet meer dan de meeste mensen.',
    quizResultLow:
      'Niet slecht voor een eerste poging. Je weet nu net iets meer dan vijf minuten geleden.',
    outroEyebrow: 'Dat Ben Ik',
    outroTitle: 'Wil je me nog beter leren kennen?',
    outroSubtitle: 'Verbind met me op LinkedIn en laten we een keer kletsen!',
    outroLinkedinLabel: 'Verbind Op LinkedIn',
    outroBackLabel: 'Terug Naar About Me',
    outroRestartLabel: 'Rondleiding Opnieuw Starten',
  },
};

export default nl;
