import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {
  SectionContainer,
  SectionIntro,
  SectionHeading,
  SectionSubtitle,
  TagChip,
} from './sectionPrimitives';
import { useContent } from '../../content';
import type { ExperienceItem } from '../../content/types';

const Timeline = styled(Stack)(({ theme }) => ({
  width: '100%',
  gap: theme.spacing(2),
}));

const EntryCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

const HonourableEntryCard = styled(EntryCard)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  borderStyle: 'dashed',
  opacity: 0.85,
  color: (theme.vars || theme).palette.text.secondary,
}));

const EntryHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.25),
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
}));

const RoleText = styled(Typography)(({ theme }) => ({
  color: (theme.vars || theme).palette.text.primary,
}));

const PeriodText = styled(Typography)(({ theme }) => ({
  color: (theme.vars || theme).palette.text.secondary,
}));

const DescriptionText = styled(Typography)(({ theme }) => ({
  color: (theme.vars || theme).palette.text.secondary,
}));

const TechRow = styled(Stack)(({ theme }) => ({
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  paddingTop: theme.spacing(0.5),
}));

const HonourableDivider = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  paddingTop: theme.spacing(1),
  color: (theme.vars || theme).palette.text.secondary,
  '&::before, &::after': {
    content: '""',
    flex: 1,
    height: 1,
    backgroundColor: (theme.vars || theme).palette.divider,
  },
}));

function EntryContent({ item }: { item: ExperienceItem }) {
  return (
    <>
      <EntryHeader>
        <RoleText variant="h6">
          {item.role} · {item.company}
        </RoleText>
        <PeriodText variant="body2">{item.period}</PeriodText>
      </EntryHeader>
      <DescriptionText variant="body1">{item.description}</DescriptionText>
      {item.tech.length > 0 && (
        <TechRow direction="row">
          {item.tech.map((tech) => (
            <TagChip
              key={tech}
              label={tech}
              size="small"
              variant="outlined"
              color="primary"
            />
          ))}
        </TechRow>
      )}
    </>
  );
}

export default function Experience() {
  const { experience } = useContent();
  const mainItems = experience.items.filter((item) => !item.honourableMention);
  const honourableItems = experience.items.filter((item) => item.honourableMention);

  return (
    <SectionContainer id="experience">
      <SectionIntro>
        <SectionHeading component="h2" variant="h4" gutterBottom>
          {experience.title}
        </SectionHeading>
        <SectionSubtitle variant="body1">{experience.subtitle}</SectionSubtitle>
      </SectionIntro>
      <Timeline>
        {mainItems.map((item) => (
          <EntryCard variant="outlined" key={`${item.company}-${item.period}`}>
            <EntryContent item={item} />
          </EntryCard>
        ))}
        {honourableItems.length > 0 && (
          <>
            <HonourableDivider>
              <Typography variant="caption">
                {experience.honourableMentionLabel}
              </Typography>
            </HonourableDivider>
            {honourableItems.map((item) => (
              <HonourableEntryCard
                variant="outlined"
                key={`${item.company}-${item.period}`}
              >
                <EntryContent item={item} />
              </HonourableEntryCard>
            ))}
          </>
        )}
      </Timeline>
    </SectionContainer>
  );
}
