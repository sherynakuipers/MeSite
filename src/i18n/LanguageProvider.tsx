import * as React from 'react';
import { LanguageContext } from './language';
import type { Language } from './language';

const STORAGE_KEY = 'me-site-language';

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'en';
  }
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'nl') {
    return stored;
  }
  return window.navigator.language.toLowerCase().startsWith('nl') ? 'nl' : 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<Language>(getInitialLanguage);

  const setLanguage = React.useCallback((next: Language) => {
    setLanguageState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggleLanguage = React.useCallback(() => {
    setLanguage(language === 'en' ? 'nl' : 'en');
  }, [language, setLanguage]);

  const value = React.useMemo(
    () => ({ language, setLanguage, toggleLanguage }),
    [language, setLanguage, toggleLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
