export interface NavContent {
  experience: string;
  strengths: string;
  skills: string;
  recommendations: string;
  faq: string;
  contact: string;
}

export interface HeroContent {
  name: string;
  role: string;
  tagline: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface TechStackContent {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
  /** Shown separately, below the main timeline, in a de-emphasized style. */
  honourableMention?: boolean;
}

export interface ExperienceContent {
  title: string;
  subtitle: string;
  honourableMentionLabel: string;
  items: ExperienceItem[];
}

export interface StrengthItem {
  title: string;
  description: string;
}

export interface StrengthsContent {
  title: string;
  subtitle: string;
  items: StrengthItem[];
}

export interface SkillTier {
  title: string;
  items: string[];
}

export interface SkillsContent {
  title: string;
  subtitle: string;
  buttonText: string;
  tiers: [SkillTier, SkillTier, SkillTier];
}

export interface RecommendationItem {
  name: string;
  role: string;
  quote: string;
}

export interface RecommendationsContent {
  title: string;
  subtitle: string;
  items: RecommendationItem[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqContent {
  title: string;
  items: FaqItem[];
}

export interface ContactContent {
  title: string;
  subtitle: string;
  linkedinLabel: string;
  githubLabel: string;
}

export interface FooterContent {
  bio: string;
  copyrightName: string;
}

export interface SiteMeta {
  title: string;
  description: string;
}

export interface WalkthroughStep {
  title: string;
  body: string;
}

export interface QuizQuestion {
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  funFact: string;
}

export interface WalkthroughContent {
  triggerLabel: string;
  exitLabel: string;
  continueLabel: string;
  backLabel: string;
  professionalEyebrow: string;
  professionalSteps: WalkthroughStep[];
  hookEyebrow: string;
  hookTitle: string;
  hookSubtitle: string;
  hookCta: string;
  privateEyebrow: string;
  privateSteps: WalkthroughStep[];
  quizEyebrow: string;
  quizIntroTitle: string;
  quizIntroSubtitle: string;
  /** Template with `{current}` and `{total}` placeholders, e.g. "Question {current} of {total}". */
  quizQuestionLabel: string;
  quizQuestions: [QuizQuestion, QuizQuestion, QuizQuestion, QuizQuestion, QuizQuestion];
  quizNextLabel: string;
  quizSeeResultLabel: string;
  quizResultGood: string;
  quizResultOk: string;
  quizResultLow: string;
  outroEyebrow: string;
  outroTitle: string;
  outroSubtitle: string;
  outroLinkedinLabel: string;
  outroBackLabel: string;
  outroRestartLabel: string;
}

export interface PageContent {
  meta: SiteMeta;
  nav: NavContent;
  hero: HeroContent;
  techStack: TechStackContent;
  experience: ExperienceContent;
  strengths: StrengthsContent;
  skills: SkillsContent;
  recommendations: RecommendationsContent;
  faq: FaqContent;
  contact: ContactContent;
  footer: FooterContent;
  walkthrough: WalkthroughContent;
}
