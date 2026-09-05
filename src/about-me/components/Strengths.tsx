import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import EmojiObjectsRoundedIcon from '@mui/icons-material/EmojiObjectsRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import { useContent } from '../../content';

// One icon per strength slot, in order. Swap these to match what you write
// in src/content/en.ts and src/content/nl.ts (strengths.items).
const icons = [
  <GroupsRoundedIcon key="groups" />,
  <ForumRoundedIcon key="forum" />,
  <ChecklistRoundedIcon key="checklist" />,
  <EmojiObjectsRoundedIcon key="emoji-objects" />,
  <AssignmentIndRoundedIcon key="assignment-ind" />,
];

const StrengthsSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(8),
  color: (theme.vars || theme).palette.common.white,
  backgroundColor: (theme.vars || theme).palette.primary.dark,
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(16),
  },
}));

const Inner = styled(Box)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.lg,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(6),
  },
}));

const IntroBox = styled(Box)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {
    width: '60%',
  },
}));

const Subtitle = styled(Typography)({
  color: 'hsl(76, 20%, 75%)',
});

const StrengthCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  color: 'inherit',
  padding: theme.spacing(3),
  height: '100%',
  borderColor: 'hsla(76, 25%, 80%, 0.2)',
  backgroundColor: (theme.vars || theme).palette.primary.main,
}));

const CardIcon = styled(Box)({
  color: 'hsl(76, 25%, 90%)',
  fontSize: '2rem',
  lineHeight: 1,
  '& svg': {
    fontSize: 'inherit',
  },
});

const CardDescription = styled(Typography)({
  color: 'hsl(76, 20%, 82%)',
});

const CardTitle = styled(Typography)({
  fontWeight: 500,
});

export default function Strengths() {
  const { strengths } = useContent();

  return (
    <StrengthsSection id="strengths">
      <Inner>
        <IntroBox>
          <Typography component="h2" variant="h4" gutterBottom>
            {strengths.title}
          </Typography>
          <Subtitle variant="body1">{strengths.subtitle}</Subtitle>
        </IntroBox>
        <Grid container spacing={2}>
          {strengths.items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.title}>
              <StrengthCard>
                <CardIcon>{icons[index]}</CardIcon>
                <div>
                  <CardTitle gutterBottom>{item.title}</CardTitle>
                  <CardDescription variant="body2">{item.description}</CardDescription>
                </div>
              </StrengthCard>
            </Grid>
          ))}
        </Grid>
      </Inner>
    </StrengthsSection>
  );
}
