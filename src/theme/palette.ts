import { alpha } from '@mui/material/styles';
import { red, green } from '../shared-theme/themePrimitives';

// Colors sampled directly from public/Banner.jpg: the olive green diagonal,
// the mustard yellow plant pot, and the cream background. Edit these two
// scales to re-theme the whole site — every component reads color from here,
// nothing is hardcoded per-component.
export const olive = {
  50: 'hsl(76, 45%, 95%)',
  100: 'hsl(75, 40%, 88%)',
  200: 'hsl(74, 35%, 75%)',
  300: 'hsl(74, 32%, 60%)',
  400: 'hsl(73, 33%, 45%)',
  500: 'hsl(72, 32%, 32%)', // banner diagonal, medium shade (#626c38)
  600: 'hsl(72, 34%, 26%)', // banner diagonal, dark shade (#50592c)
  700: 'hsl(71, 38%, 20%)',
  800: 'hsl(70, 45%, 13%)',
  900: 'hsl(68, 50%, 8%)',
};

export const mustard = {
  50: 'hsl(47, 90%, 96%)',
  100: 'hsl(47, 85%, 90%)',
  200: 'hsl(47, 80%, 80%)',
  300: 'hsl(47, 75%, 68%)',
  400: 'hsl(47, 69%, 55%)', // banner plant pot (#dcba3f)
  500: 'hsl(45, 70%, 48%)',
  600: 'hsl(43, 72%, 40%)',
  700: 'hsl(40, 75%, 32%)',
  800: 'hsl(38, 70%, 20%)',
  900: 'hsl(36, 65%, 12%)',
};

export const cream = {
  default: 'hsl(50, 40%, 98%)', // banner background (#faf9f4)
  paper: 'hsl(48, 35%, 95%)',
  // Subtly tinted section background, used to break up long stretches of
  // plain white/cream between sections without introducing a new hue.
  tinted: 'hsl(76, 40%, 94%)',
};

// A warm, olive-tinted neutral scale, replacing shared-theme's cool blue-grey
// `gray` for anything neutral (secondary text, dividers, disabled states) so
// those don't clash with the green theme.
export const stone = {
  50: 'hsl(70, 20%, 97%)',
  100: 'hsl(70, 18%, 94%)',
  200: 'hsl(72, 15%, 88%)',
  300: 'hsl(72, 14%, 78%)',
  400: 'hsl(72, 12%, 58%)',
  500: 'hsl(72, 12%, 42%)',
  600: 'hsl(72, 14%, 32%)',
  700: 'hsl(72, 16%, 24%)',
  800: 'hsl(72, 20%, 10%)',
  900: 'hsl(72, 25%, 5%)',
};

export const colorSchemes = {
  light: {
    palette: {
      primary: {
        light: olive[300],
        main: olive[500],
        dark: olive[700],
        contrastText: olive[50],
      },
      secondary: {
        light: mustard[300],
        main: mustard[400],
        dark: mustard[700],
        contrastText: mustard[900],
      },
      info: {
        light: olive[100],
        main: olive[300],
        dark: olive[600],
        contrastText: stone[50],
      },
      error: {
        light: red[300],
        main: red[400],
        dark: red[800],
      },
      success: {
        light: green[300],
        main: green[400],
        dark: green[800],
      },
      grey: {
        ...stone,
      },
      divider: alpha(olive[300], 0.3),
      background: {
        default: cream.default,
        paper: cream.paper,
      },
      text: {
        primary: olive[900],
        secondary: stone[600],
      },
      action: {
        hover: alpha(olive[200], 0.25),
        selected: alpha(olive[200], 0.35),
      },
      baseShadow:
        'hsla(72, 40%, 10%, 0.08) 0px 4px 16px 0px, hsla(72, 35%, 15%, 0.08) 0px 8px 16px -5px',
    },
  },
  dark: {
    palette: {
      primary: {
        contrastText: olive[50],
        light: olive[300],
        main: olive[400],
        dark: olive[700],
      },
      secondary: {
        contrastText: mustard[900],
        light: mustard[300],
        main: mustard[400],
        dark: mustard[700],
      },
      info: {
        contrastText: olive[200],
        light: olive[400],
        main: olive[500],
        dark: olive[800],
      },
      error: {
        light: red[400],
        main: red[500],
        dark: red[700],
      },
      success: {
        light: green[400],
        main: green[500],
        dark: green[700],
      },
      grey: {
        ...stone,
      },
      divider: alpha(olive[700], 0.5),
      background: {
        default: 'hsl(72, 22%, 8%)',
        paper: 'hsl(72, 20%, 11%)',
      },
      text: {
        primary: 'hsl(76, 30%, 95%)',
        secondary: stone[400],
      },
      action: {
        hover: alpha(olive[600], 0.25),
        selected: alpha(olive[600], 0.35),
      },
      baseShadow:
        'hsla(72, 40%, 3%, 0.7) 0px 4px 16px 0px, hsla(72, 35%, 5%, 0.8) 0px 8px 16px -5px',
    },
  },
};
