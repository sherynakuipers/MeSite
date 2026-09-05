import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// Shared by every section that follows the "centered intro + content below"
// layout: TechStack, Projects, Strengths, Skills, Recommendations, FaqSection.
export const SectionContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(16),
    gap: theme.spacing(6),
  },
}));

export const SectionIntro = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: '100%',
    textAlign: 'left',
  },
  [theme.breakpoints.up('md')]: {
    width: '60%',
    textAlign: 'center',
  },
}));

export const SectionHeading = styled(Typography)(({ theme }) => ({
  color: (theme.vars || theme).palette.text.primary,
})) as typeof Typography;

export const SectionSubtitle = styled(Typography)(({ theme }) => ({
  color: (theme.vars || theme).palette.text.secondary,
}));

// The vendored MuiChip customization clamps small chips to maxHeight: 20 without
// centering the label inside it, which reads as vertically off-center text.
// This wrapper fixes that everywhere a Chip is used to display a plain label.
export const TagChip = styled(Chip)({
  '& .MuiChip-label': {
    display: 'flex',
    alignItems: 'center',
    lineHeight: 1,
  },
});
