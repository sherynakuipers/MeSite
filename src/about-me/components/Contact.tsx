import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  SectionContainer,
  SectionIntro,
  SectionHeading,
  SectionSubtitle,
} from './sectionPrimitives';
import { useContent } from '../../content';
import { socialLinks } from '../../content/socialLinks';

const ButtonRow = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(1),
}));

export default function Contact() {
  const { contact } = useContent();

  return (
    <SectionContainer id="contact">
      <SectionIntro>
        <SectionHeading component="h2" variant="h4" gutterBottom>
          {contact.title}
        </SectionHeading>
        <SectionSubtitle variant="body1">{contact.subtitle}</SectionSubtitle>
      </SectionIntro>
      <ButtonRow direction={{ xs: 'column', sm: 'row' }} spacing={1.5} useFlexGap>
        <Button
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          color="primary"
          size="large"
          startIcon={<LinkedInIcon />}
        >
          {contact.linkedinLabel}
        </Button>
        <Button
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          color="primary"
          size="large"
          startIcon={<GitHubIcon />}
        >
          {contact.githubLabel}
        </Button>
      </ButtonRow>
    </SectionContainer>
  );
}
