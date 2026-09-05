import { alpha } from '@mui/material/styles';
import type { Theme, Components } from '@mui/material/styles';

// The vendored shared-theme/customizations/inputs.tsx hardcodes contained
// primary buttons to grey/black and icon buttons to a grey border/background,
// regardless of the theme's actual palette. These overrides replace just
// those component keys with versions that use our real primary/secondary
// colors, so shared-theme itself can stay untouched.
export const themeCustomizations: Components<Theme> = {
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: 'none',
        borderRadius: (theme.vars || theme).shape.borderRadius,
        textTransform: 'none',
        variants: [
          {
            props: { size: 'small' },
            style: { height: '2.25rem', padding: '8px 12px' },
          },
          {
            props: { size: 'medium' },
            style: { height: '2.5rem' },
          },
          {
            props: { variant: 'contained' },
            style: {
              color: (theme.vars || theme).palette.primary.contrastText,
              backgroundColor: (theme.vars || theme).palette.primary.main,
              '&:hover': {
                backgroundColor: (theme.vars || theme).palette.primary.dark,
              },
              '&:active': {
                backgroundColor: (theme.vars || theme).palette.primary.dark,
              },
            },
          },
          {
            props: { color: 'secondary', variant: 'contained' },
            style: {
              color: (theme.vars || theme).palette.secondary.contrastText,
              backgroundColor: (theme.vars || theme).palette.secondary.main,
              '&:hover': {
                backgroundColor: (theme.vars || theme).palette.secondary.dark,
              },
              '&:active': {
                backgroundColor: (theme.vars || theme).palette.secondary.dark,
              },
            },
          },
          {
            props: { variant: 'outlined' },
            style: {
              color: (theme.vars || theme).palette.primary.main,
              border: '1px solid',
              borderColor: theme.vars
                ? `rgba(${theme.vars.palette.primary.mainChannel} / 0.5)`
                : alpha(theme.palette.primary.main, 0.5),
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: theme.vars
                  ? `rgba(${theme.vars.palette.primary.mainChannel} / 0.08)`
                  : alpha(theme.palette.primary.main, 0.08),
                borderColor: (theme.vars || theme).palette.primary.main,
              },
              '&:active': {
                backgroundColor: theme.vars
                  ? `rgba(${theme.vars.palette.primary.mainChannel} / 0.15)`
                  : alpha(theme.palette.primary.main, 0.15),
              },
            },
          },
          {
            props: { variant: 'text' },
            style: {
              color: (theme.vars || theme).palette.primary.main,
              '&:hover': {
                backgroundColor: theme.vars
                  ? `rgba(${theme.vars.palette.primary.mainChannel} / 0.08)`
                  : alpha(theme.palette.primary.main, 0.08),
              },
              '&:active': {
                backgroundColor: theme.vars
                  ? `rgba(${theme.vars.palette.primary.mainChannel} / 0.15)`
                  : alpha(theme.palette.primary.main, 0.15),
              },
            },
          },
          {
            props: { color: 'info', variant: 'text' },
            style: {
              color: (theme.vars || theme).palette.text.secondary,
              '&:hover': {
                backgroundColor: (theme.vars || theme).palette.action.hover,
              },
            },
          },
        ],
      }),
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: 'none',
        borderRadius: (theme.vars || theme).shape.borderRadius,
        // 'inherit' (the CSS keyword, not MUI's palette) so an icon button
        // dropped on a custom-colored background (e.g. the footer) picks up
        // that ambient text color instead of always rendering dark/grey.
        color: 'inherit',
        border: '1px solid',
        borderColor: (theme.vars || theme).palette.divider,
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: (theme.vars || theme).palette.action.hover,
        },
        variants: [
          {
            props: { color: 'primary' },
            style: {
              color: (theme.vars || theme).palette.primary.main,
              borderColor: theme.vars
                ? `rgba(${theme.vars.palette.primary.mainChannel} / 0.5)`
                : alpha(theme.palette.primary.main, 0.5),
              '&:hover': {
                backgroundColor: theme.vars
                  ? `rgba(${theme.vars.palette.primary.mainChannel} / 0.08)`
                  : alpha(theme.palette.primary.main, 0.08),
                borderColor: (theme.vars || theme).palette.primary.main,
              },
            },
          },
          {
            props: { size: 'small' },
            style: { width: '2.25rem', height: '2.25rem' },
          },
          {
            props: { size: 'medium' },
            style: { width: '2.5rem', height: '2.5rem' },
          },
        ],
      }),
    },
  },
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: {
        borderRadius: '10px',
      },
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: '12px 16px',
        textTransform: 'none',
        borderRadius: '10px',
        fontWeight: 500,
        '&.Mui-selected': {
          color: (theme.vars || theme).palette.primary.contrastText,
          backgroundColor: (theme.vars || theme).palette.primary.main,
          '&:hover': {
            backgroundColor: (theme.vars || theme).palette.primary.dark,
          },
        },
      }),
    },
  },
};
