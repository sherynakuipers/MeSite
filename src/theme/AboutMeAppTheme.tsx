import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import { colorSchemes } from './palette';
import { typography, shadows, shape } from '../shared-theme/themePrimitives';
import { inputsCustomizations } from '../shared-theme/customizations/inputs';
import { dataDisplayCustomizations } from '../shared-theme/customizations/dataDisplay';
import { feedbackCustomizations } from '../shared-theme/customizations/feedback';
import { navigationCustomizations } from '../shared-theme/customizations/navigation';
import { surfacesCustomizations } from '../shared-theme/customizations/surfaces';
import { themeCustomizations } from './customizations';

interface AboutMeAppThemeProps {
  children: React.ReactNode;
  disableCustomTheme?: boolean;
  themeComponents?: ThemeOptions['components'];
}

// Mirrors shared-theme/AppTheme.tsx, but wired to the banner's olive/mustard
// color scheme instead of the template's blue. Kept separate so the vendored
// shared-theme files can stay untouched for diffing against upstream MUI.
export default function AboutMeAppTheme(props: AboutMeAppThemeProps) {
  const { children, disableCustomTheme, themeComponents } = props;
  const theme = React.useMemo(() => {
    return disableCustomTheme
      ? {}
      : createTheme({
          cssVariables: {
            colorSchemeSelector: 'data-mui-color-scheme',
            cssVarPrefix: 'me',
          },
          colorSchemes,
          typography,
          shadows,
          shape,
          components: {
            ...inputsCustomizations,
            ...dataDisplayCustomizations,
            ...feedbackCustomizations,
            ...navigationCustomizations,
            ...surfacesCustomizations,
            ...themeCustomizations,
            ...themeComponents,
          },
        });
  }, [disableCustomTheme, themeComponents]);
  if (disableCustomTheme) {
    return <React.Fragment>{children}</React.Fragment>;
  }
  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
