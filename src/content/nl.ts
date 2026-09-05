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
        body: 'Ik ben een full-stack engineer die zich thuis voelt in React, Angular, TypeScript, Python, FastAPI, Docker en C#. Ik werk overal in de stack met plezier, maar als ik mag kiezen ga ik toch het liefst richting de frontend.',
      },
      {
        title: 'Aan Het Werk',
        body: 'Bij Onesurance bouw en onderhoud ik features door de hele stack heen, als voornaamste ontwikkelaar op de frontend. Daarvoor ondersteunde ik B2B klanten bij Sirrus en bouwde ik een intern formulieren-bouwtool voor de Nationale Politie tijdens mijn afstudeerstage. Ik vind het net zo leuk om aan te schuiven bij projectmanagement en multidisciplinaire discussies als om code te schrijven.',
      },
      {
        title: 'Wat Ik Meebreng In Een Team',
        body: 'Teamplayer. Duidelijke communicator. Gestructureerd. Iemand die eigenaarschap neemt van idee tot oplevering. Ik denk vooral heel graag mee over UX en UI keuzes en kom met aanbevelingen, ook al is iets vanaf nul ontwerpen echt niets voor mij.',
      },
      {
        title: 'Vaardigheden',
        body: 'Frontend: Angular, React, TypeScript, JavaScript, HTML, CSS en Blazor. Backend: FastAPI, Django, Flask, Python, SQL en C#. Tools: Docker, Git en basis CI/CD. Mijn hart ligt nog steeds bij de frontend.',
      },
      {
        title: 'Altijd Aan Het Groeien',
        body: 'Ik leer graag en ben er scherp op om dat te bewijzen. Ambitieus is nog zacht uitgedrukt: wat mij betreft bestaat er geen plafond.',
      },
    ],
    hookEyebrow: 'Plot Twist',
    hookTitle: 'Dat Was De Cv Versie. Klaar Om De Echte Mij Te Ontmoeten?',
    hookSubtitle:
      "Zelfde persoon, aanzienlijk meer basketbal en aanzienlijk meer reptielen. Laten we verdergaan.",
    hookCta: 'Laat Maar Zien',
    privateEyebrow: 'Privé',
    privateSteps: [
      {
        title: 'Tien Jaar Op Het Veld',
        body: 'Ik speel al tien jaar basketbal. Eén van die jaren coachte ik een U14 meisjesteam en ik heb ontzettend genoten van elke minuut.',
      },
      {
        title: 'Women In Tech, Rotterdam Academy',
        body: 'Een jaar nadat ik al was afgestudeerd, probeerden drie andere studenten en ik een studievereniging op te richten genaamd Women in Tech aan de Rotterdam Academy. We organiseerden een netwerkevent en een paar workshops. Het kreeg niet genoeg animo onder studenten om door te gaan, maar ik ben nog steeds trots dat we het geprobeerd hebben.',
      },
      {
        title: 'Een Kamer Vol Reptielen',
        body: "Ik ben een groot fan van reptielen en amfibieën. In mijn vrije tijd kijk ik graag YouTube video's over ze en als het aan mij lag had ik thuis een hele kamer vol met ze. Even iets anders: laten we kijken hoeveel je écht weet.",
      },
    ],
    quizEyebrow: 'Quiztijd',
    quizIntroTitle: 'Test Je Kennis Over Reptielen En Amfibieën',
    quizIntroSubtitle: 'Vijf vragen. Geen druk. Laten we kijken hoe je het doet.',
    quizQuestionLabel: 'Vraag {current} van {total}',
    quizQuestions: [
      {
        question: 'Welke van deze is geen echt reptiel?',
        options: ['Kameleon', 'Salamander', 'Gekko', 'Leguaan'],
        correctIndex: 1,
        funFact:
          'Salamanders zijn amfibieën. Hun vochtige doorlaatbare huid verraadt ze naast de droge schubbige huid van een reptiel.',
      },
      {
        question: 'Hoe heet een babykikker voordat hij helemaal is veranderd?',
        options: ['Nimf', 'Kikkervisje', 'Larve', 'Pup'],
        correctIndex: 1,
        funFact:
          "Kikkervisjes ademen door kieuwen en leven in het water voordat ze veranderen in luchtademende volwassenen.",
      },
      {
        question: 'Welk reptiel kan zijn staart laten teruggroeien nadat hij die kwijtraakt?',
        options: ['Krokodil', 'Schildpad', 'Gekko', 'Slang'],
        correctIndex: 2,
        funFact:
          'Dit heet autotomie. Een gekko laat zijn staart los om aan een roofdier te ontsnappen en laat er na verloop van tijd een nieuwe groeien.',
      },
      {
        question: 'Axolotls, bekend om het regenereren van ledematen, zijn een soort:',
        options: ['Hagedis', 'Salamander', 'Watersalamander', 'Kikker'],
        correctIndex: 1,
        funFact:
          'Axolotls zijn salamanders die meestal hun kieuwen en hun waterbestaan hun hele leven behouden.',
      },
      {
        question: 'Welke van deze slangen is giftig?',
        options: ['Maïsslang', 'Koningspython', 'Koningscobra', 'Melkslang'],
        correctIndex: 2,
        funFact:
          "De koningscobra is 's werelds langste giftige slang en kan meer dan vijf meter lang worden.",
      },
    ],
    quizNextLabel: 'Volgende Vraag',
    quizSeeResultLabel: 'Bekijk Mijn Score',
    quizResultGood: 'Vijf van de vijf. Jij kent je reptielen en amfibieën duidelijk goed.',
    quizResultOk: 'Een prima score. Je weet meer dan de meeste mensen.',
    quizResultLow:
      'Niet slecht voor een eerste poging. Je weet nu net iets meer dan vijf minuten geleden.',
    outroEyebrow: 'Dat Ben Ik',
    outroTitle: 'Wil Je Me Nog Beter Leren Kennen?',
    outroSubtitle: 'Verbind met me op LinkedIn en laten we een keer kletsen!',
    outroLinkedinLabel: 'Verbind Op LinkedIn',
    outroBackLabel: 'Terug Naar About Me',
    outroRestartLabel: 'Rondleiding Opnieuw Starten',
  },
};

export default nl;
