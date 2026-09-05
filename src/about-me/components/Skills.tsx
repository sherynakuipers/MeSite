import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import {
  SectionContainer,
  SectionIntro,
  SectionHeading,
  SectionSubtitle,
} from './sectionPrimitives';
import { useContent } from '../../content';

const TierCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

const SkillRow = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  display: 'flex',
  gap: theme.spacing(1.5),
  alignItems: 'center',
}));

const TierGrid = styled(Grid)({
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
});

const TierDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(1),
  opacity: 0.8,
}));

const CheckIcon = styled(CheckCircleRoundedIcon)({
  width: 20,
});

const ButtonRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: theme.spacing(1),
}));

export default function Skills() {
  const { skills } = useContent();

  return (
    <SectionContainer id="skills">
      <SectionIntro>
        <SectionHeading component="h2" variant="h4" gutterBottom>
          {skills.title}
        </SectionHeading>
        <SectionSubtitle variant="body1">{skills.subtitle}</SectionSubtitle>
      </SectionIntro>
      <TierGrid container spacing={3}>
        {skills.tiers.map((tier) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={tier.title}>
            <TierCard variant="outlined">
              <CardContent>
                <Typography component="h3" variant="h6" gutterBottom>
                  {tier.title}
                </Typography>
                <TierDivider />
                {tier.items.map((line) => (
                  <SkillRow key={line}>
                    <CheckIcon color="primary" />
                    <Typography variant="subtitle2" component="span">
                      {line}
                    </Typography>
                  </SkillRow>
                ))}
              </CardContent>
            </TierCard>
          </Grid>
        ))}
      </TierGrid>
      <ButtonRow>
        <Button href="#contact" variant="contained" color="primary" size="large">
          {skills.buttonText}
        </Button>
      </ButtonRow>
    </SectionContainer>
  );
}
