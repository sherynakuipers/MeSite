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
};

export default en;
