import { useLanguage } from '../i18n/language';
import type { PageContent } from './types';
import en from './en';
import nl from './nl';

const content: Record<'en' | 'nl', PageContent> = { en, nl };

export function useContent(): PageContent {
  const { language } = useLanguage();
  return content[language];
}
