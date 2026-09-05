import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {
  SectionContainer,
  SectionIntro,
  SectionHeading,
  SectionSubtitle,
} from './sectionPrimitives';
import { useContent } from '../../content';

const QuoteCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flexGrow: 1,
});

const QuoteText = styled(Typography)(({ theme }) => ({
  color: (theme.vars || theme).palette.text.secondary,
}));

const QuoteGridItem = styled(Grid)({
  display: 'flex',
});

function initialsFor(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

// Hidden until src/content/en.ts and src/content/nl.ts have real quotes in
// recommendations.items — no placeholder testimonials are shown.
export default function Recommendations() {
  const { recommendations } = useContent();

  if (recommendations.items.length === 0) {
    return null;
  }

  return (
    <SectionContainer id="recommendations">
      <SectionIntro>
        <SectionHeading component="h2" variant="h4" gutterBottom>
          {recommendations.title}
        </SectionHeading>
        <SectionSubtitle variant="body1">{recommendations.subtitle}</SectionSubtitle>
      </SectionIntro>
      <Grid container spacing={2}>
        {recommendations.items.map((item) => (
          <QuoteGridItem size={{ xs: 12, sm: 6, md: 4 }} key={item.name}>
            <QuoteCard variant="outlined">
              <CardContent>
                <QuoteText variant="body1" gutterBottom>
                  {item.quote}
                </QuoteText>
              </CardContent>
              <CardHeader
                avatar={<Avatar>{initialsFor(item.name)}</Avatar>}
                title={item.name}
                subheader={item.role}
              />
            </QuoteCard>
          </QuoteGridItem>
        ))}
      </Grid>
    </SectionContainer>
  );
}
