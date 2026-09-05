import type { PageContent } from './types';

const en: PageContent = {
  meta: {
    title: 'Sheryna Kuipers | Software Engineer',
    description:
      'Sheryna Kuipers is a full-stack software engineer building intuitive web software with real-world impact.',
  },
  nav: {
    experience: 'Experience',
    strengths: 'Strengths',
    skills: 'Skills',
    recommendations: 'Recommendations',
    faq: 'FAQ',
    contact: 'Contact',
  },
  hero: {
    name: 'Sheryna Kuipers',
    role: 'Software Engineer',
    tagline: 'Building intuitive software that matters',
    intro:
      "Full-stack software engineer focused on web development. I love getting into the weeds of tech and product discussions. I'm passionate about building software that's intuitive and leaves a positive mark on society.",
    primaryCta: 'View My Experience',
    secondaryCta: 'Get In Touch',
  },
  techStack: {
    title: 'Tools & technologies I work with',
    items: ['React', 'Angular', 'TypeScript', 'Python', 'FastAPI', 'Docker', 'C#'],
  },
  experience: {
    title: 'Experience',
    subtitle: 'A look at where I have worked and what I worked on there.',
    honourableMentionLabel: 'Honourable Mention',
    items: [
      {
        company: 'Onesurance',
        role: 'Software Engineer',
        period: 'November 2025 - present',
        description:
          'Building and maintaining new features across the stack, acting as main developer on the frontend.',
        tech: ['Python', 'React', 'TypeScript', 'C# (Blazor)', 'Git', 'Docker'],
      },
      {
        company: 'Sirrus',
        role: 'Junior Support Engineer',
        period: 'August 2025 - October 2025',
        description:
          'Handled tickets from B2B customers via email and phone, troubleshooting issues and applying fixes.',
        tech: ['Microsoft 365 Fundamentals (MS-900)', 'Azure Fundamentals (AZ-900)'],
      },
      {
        company: 'National Police of the Netherlands',
        role: 'Software Engineer Intern',
        period: 'March 2025 - June 2025',
        description:
          'Graduation internship building an internal form-building tool similar to Microsoft Forms or Google Forms, including authentication and role-based permissions.',
        tech: ['Non-disclosed information'],
      },
      {
        company: 'Breur Groothandel',
        role: 'Marketing/ICT Employee',
        period: 'June 2024 - November 2024',
        description:
          'Worked on the company website, adding content and building new pages with HTML and CSS. Also created marketing emails using an email page builder, customized with HTML and CSS.',
        tech: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        company: "McDonald's",
        role: 'Crewmember',
        period: 'March 2022 - June 2024',
        description:
          'Learned every position in the store and was on track to become a hostess. Right before signing that promotion, an opportunity at Breur came along that would kickstart my IT career instead.',
        tech: [],
        honourableMention: true,
      },
    ],
  },
  strengths: {
    title: 'Strengths',
    subtitle: 'What I bring to a team beyond the code.',
    items: [
      {
        title: 'Team player',
        description:
          'Thrives in multi-disciplinary teams, bringing different perspectives together.',
      },
      {
        title: 'Clear communicator',
        description: 'Explains technical ideas simply and keeps everyone aligned.',
      },
      {
        title: 'Structured',
        description: 'Approaches problems methodically and keeps projects on track.',
      },
      {
        title: 'Collaborative thinker',
        description: 'Loves thinking along with others and offering thoughtful advice.',
      },
      {
        title: 'Takes ownership',
        description: 'Takes full ownership of projects, from idea to delivery.',
      },
    ],
  },
  skills: {
    title: 'Skills',
    subtitle: 'Grouped by frontend, backend and tools.',
    buttonText: 'Get In Touch',
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
          'C# (intermediate)',
          'Java (beginner)',
        ],
      },
      {
        title: 'Tools & DevOps',
        items: [
          'Docker',
          'Git',
          'CI/CD basics',
          'Microsoft Azure Fundamentals (AZ-900)',
          'Microsoft 365 Fundamentals (MS-900)',
        ],
      },
    ],
  },
  recommendations: {
    title: 'Recommendations',
    subtitle: 'Add quotes from colleagues, clients or classmates once you have them.',
    items: [],
  },
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'What kind of projects do you work on?',
        answer:
          'Full-stack web development. I enjoy the whole stack from intuitive frontends to the systems behind them.',
      },
      {
        question: 'Are you available for freelance or job opportunities?',
        answer:
          "I'm not freelancing yet but that's on the horizon. I'm always open to hearing about interesting opportunities and collaborations.",
      },
      {
        question: "What's the best way to reach you?",
        answer: 'LinkedIn is the best way to reach me.',
      },
    ],
  },
  contact: {
    title: 'Get In Touch',
    subtitle:
      'Always up for a good conversation about a collaboration, an opportunity or just tech in general.',
    linkedinLabel: 'Connect On LinkedIn',
    githubLabel: 'View my GitHub',
  },
  footer: {
    bio: 'Full-stack developer who loves building intuitive software with real-world impact.',
    copyrightName: 'Sheryna Kuipers',
  },
  walkthrough: {
    triggerLabel: 'Take The Walkthrough',
    exitLabel: 'Exit Walkthrough',
    continueLabel: 'Continue',
    backLabel: 'Back',
    professionalEyebrow: 'Professional Me',
    professionalSteps: [
      {
        title: 'Tools & Technologies',
        body: "I'm a full-stack engineer who feels most at home across React, Angular, TypeScript, Python, FastAPI, Docker and C#. I work happily anywhere in the stack but if you give me a choice I'll lean toward the frontend every time.",
      },
      {
        title: 'On The Job',
        body: 'At Onesurance I build and maintain features across the stack as the main developer on the frontend. Before that I supported B2B customers at Sirrus and built an internal form-building tool for the National Police during my graduation internship. I love being pulled into project management conversations and multidisciplinary discussions just as much as I love writing the code itself.',
      },
      {
        title: 'What I Bring To A Team',
        body: "Team player. Clear communicator. Structured. Someone who takes ownership from idea to delivery. I especially love thinking along on UX and UI decisions and coming up with recommendations, even though designing something from scratch really isn't my cup of tea.",
      },
      {
        title: 'Skills',
        body: 'Frontend: Angular, React, TypeScript, JavaScript, HTML, CSS and Blazor. Backend: FastAPI, Django, Flask, Python, SQL and C#. Tools: Docker, Git and CI/CD basics. Frontend is still where my heart is.',
      },
      {
        title: 'Always Leveling Up',
        body: "I love to learn and I'm eager to prove it. Ambitious doesn't begin to cover it: as far as I'm concerned the ceiling simply doesn't exist.",
      },
    ],
    hookEyebrow: 'Plot Twist',
    hookTitle: "That's The CV Version. Ready To Meet The Real Me?",
    hookSubtitle:
      "Same person, considerably more basketball and considerably more reptiles. Let's continue.",
    hookCta: 'Show Me More',
    privateEyebrow: 'Private Me',
    privateSteps: [
      {
        title: 'A Decade On The Court',
        body: "I've been playing basketball for ten years. One of those years I coached a U14 girls team and I loved absolutely every minute of it.",
      },
      {
        title: 'Women In Tech, Rotterdam Academy',
        body: "A year after I'd already graduated, three other students and I tried to start a study association called Women in Tech at Rotterdam Academy. We hosted a networking event and a couple of workshops. It didn't get enough traction with students to keep going but I'm still proud we tried.",
      },
      {
        title: 'A Room Full Of Reptiles',
        body: "I'm a huge fan of reptiles and amphibians. In my free time I fall down YouTube rabbit holes watching videos about them and if I could I'd have a whole room full of them at home. Speaking of which, let's see how much you actually know.",
      },
    ],
    quizEyebrow: 'Quiz Time',
    quizIntroTitle: 'Test Your Reptile And Amphibian Knowledge',
    quizIntroSubtitle: "Five questions. No pressure. Let's see how you do.",
    quizQuestionLabel: 'Question {current} of {total}',
    quizQuestions: [
      {
        question: 'Which of these is not actually a reptile?',
        options: ['Chameleon', 'Salamander', 'Gecko', 'Iguana'],
        correctIndex: 1,
        funFact:
          "Salamanders are amphibians. Their moist permeable skin gives them away next to a reptile's dry scaly skin.",
      },
      {
        question: 'What is a baby frog called before it fully transforms?',
        options: ['Nymph', 'Tadpole', 'Fry', 'Pup'],
        correctIndex: 1,
        funFact:
          'Tadpoles breathe through gills and live in water before metamorphosing into air-breathing adults.',
      },
      {
        question: 'Which reptile can regrow its tail after losing it?',
        options: ['Crocodile', 'Tortoise', 'Gecko', 'Snake'],
        correctIndex: 2,
        funFact:
          'This trick is called autotomy. A gecko drops its tail to escape a predator and grows a new one over time.',
      },
      {
        question: 'Axolotls, famous for regenerating limbs, are a type of:',
        options: ['Lizard', 'Salamander', 'Newt', 'Frog'],
        correctIndex: 1,
        funFact:
          'Axolotls are salamanders that usually keep their gills and their aquatic form for life.',
      },
      {
        question: 'Which of these snakes is venomous?',
        options: ['Corn Snake', 'Ball Python', 'King Cobra', 'Milk Snake'],
        correctIndex: 2,
        funFact:
          "The king cobra is the world's longest venomous snake and can grow past five meters.",
      },
    ],
    quizNextLabel: 'Next Question',
    quizSeeResultLabel: 'See My Score',
    quizResultGood: 'Five for five. You clearly know your reptiles and amphibians.',
    quizResultOk: 'A solid score. You know more than most people do.',
    quizResultLow:
      'Not bad for a first try. Now you know a bit more than you did five minutes ago.',
    outroEyebrow: "That's Me",
    outroTitle: 'Want To Get To Know Me More?',
    outroSubtitle: "Connect with me on LinkedIn and let's have a chat!",
    outroLinkedinLabel: 'Connect On LinkedIn',
    outroBackLabel: 'Back To About Me',
    outroRestartLabel: 'Restart Walkthrough',
  },
};

export default en;
