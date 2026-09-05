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
}
