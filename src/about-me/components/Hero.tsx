import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useContent } from '../../content';

const HeroSection = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  backgroundRepeat: 'no-repeat',
  backgroundImage:
    'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(76, 45%, 90%), transparent)',
  ...theme.applyStyles('dark', {
    backgroundImage:
      'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(70, 45%, 13%), transparent)',
  }),
}));

const HeroContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column-reverse',
  alignItems: 'center',
  gap: theme.spacing(4),
  paddingTop: theme.spacing(14),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(14),
  },
}));

const HeroStack = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    alignItems: 'flex-start',
    width: '58%',
  },
}));

const Headline = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: 'clamp(2.25rem, 6vw, 3.5rem)',
  [theme.breakpoints.up('sm')]: {
    textAlign: 'left',
  },
}));

const RoleText = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: (theme.vars || theme).palette.primary.main,
  [theme.breakpoints.up('sm')]: {
    textAlign: 'left',
  },
}));

const Subtext = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: (theme.vars || theme).palette.text.secondary,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    textAlign: 'left',
  },
}));

const ButtonRow = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const PortraitFrame = styled(Box)(({ theme }) => ({
  width: 280,
  height: 280,
  borderRadius: '50%',
  overflow: 'hidden',
  flexShrink: 0,
  border: `2px solid ${(theme.vars || theme).palette.background.paper}`,
  boxShadow: (theme.vars || theme).shadows[1],
  [theme.breakpoints.up('sm')]: {
    width: 380,
    height: 380,
  },
  [theme.breakpoints.up('md')]: {
    width: 440,
    height: 440,
  },
}));

const PortraitImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center 30%',
});

export default function Hero() {
  const { hero } = useContent();

  return (
    <HeroSection id="hero">
      <HeroContainer>
        <HeroStack spacing={2} useFlexGap>
          <Chip label={hero.tagline} color="primary" variant="outlined" size="small" />
          <Headline variant="h1">{hero.name}</Headline>
          <RoleText variant="h5">{hero.role}</RoleText>
          <Subtext>{hero.intro}</Subtext>
          <ButtonRow direction={{ xs: 'column', sm: 'row' }} spacing={1.5} useFlexGap>
            <Button href="#experience" variant="contained" color="primary" size="large">
              {hero.primaryCta}
            </Button>
            <Button href="#contact" variant="outlined" color="primary" size="large">
              {hero.secondaryCta}
            </Button>
          </ButtonRow>
        </HeroStack>
        <PortraitFrame>
          <PortraitImage src="/portrait.png" alt={hero.name} />
        </PortraitFrame>
      </HeroContainer>
    </HeroSection>
  );
}
