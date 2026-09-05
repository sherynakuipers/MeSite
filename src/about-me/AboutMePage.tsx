import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AboutMeAppTheme from '../theme/AboutMeAppTheme';
import { LanguageProvider } from '../i18n/LanguageProvider';
import SiteHeader from './components/SiteHeader';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Strengths from './components/Strengths';
import Skills from './components/Skills';
import Recommendations from './components/Recommendations';
import FaqSection from './components/FaqSection';
import Contact from './components/Contact';
import SiteFooter from './components/SiteFooter';

export default function AboutMePage(props: { disableCustomTheme?: boolean }) {
  return (
    <LanguageProvider>
      <AboutMeAppTheme {...props}>
        <CssBaseline enableColorScheme />

        <SiteHeader />
        <Hero />
        <div>
          <TechStack />
          <Experience />
          <Divider />
          <Strengths />
          <Divider />
          <Skills />
          <Divider />
          <Recommendations />
          <Divider />
          <FaqSection />
          <Divider />
          <Contact />
          <Divider />
          <SiteFooter />
        </div>
      </AboutMeAppTheme>
    </LanguageProvider>
  );
}
