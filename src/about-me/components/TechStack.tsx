import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { TagChip } from './sectionPrimitives';
import { useContent } from '../../content';

const TechStackSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const TechStackTitle = styled(Typography)(({ theme }) => ({
  color: (theme.vars || theme).palette.text.secondary,
  textAlign: 'center',
})) as typeof Typography;

const ChipRow = styled(Stack)(({ theme }) => ({
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginTop: theme.spacing(1.5),
}));

export default function TechStack() {
  const { techStack } = useContent();

  return (
    <TechStackSection id="tech-stack">
      <TechStackTitle component="p" variant="subtitle2">
        {techStack.title}
      </TechStackTitle>
      <ChipRow direction="row" spacing={1} useFlexGap>
        {techStack.items.map((item) => (
          <TagChip key={item} label={item} variant="outlined" color="primary" />
        ))}
      </ChipRow>
    </TechStackSection>
  );
}
