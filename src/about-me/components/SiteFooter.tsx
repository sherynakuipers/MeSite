import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logo from './Logo';
import { useContent } from '../../content';
import { socialLinks } from '../../content/socialLinks';

// A normal surface background, so the footer adapts to light/dark mode
// automatically instead of needing its own hand-tuned color for every mode.
const FooterBackground = styled(Box)(({ theme }) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
}));

const FooterContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  textAlign: 'center',
}));

const BioText = styled(Typography)(({ theme }) => ({
  color: (theme.vars || theme).palette.text.secondary,
  maxWidth: 480,
}));

const BottomRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  paddingTop: theme.spacing(3),
  width: '100%',
  borderTop: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
}));

const Copyright = styled(Typography)(({ theme }) => ({
  color: (theme.vars || theme).palette.text.secondary,
}));

export default function SiteFooter() {
  const { footer } = useContent();

  return (
    <FooterBackground>
      <FooterContainer>
        <Logo />
        <BioText variant="body2">{footer.bio}</BioText>
        <Stack direction="row" spacing={1}>
          <IconButton
            color="primary"
            size="small"
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="primary"
            size="small"
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
        <BottomRow>
          <Copyright variant="body2">
            {'© '}
            {new Date().getFullYear()} {footer.copyrightName}
          </Copyright>
        </BottomRow>
      </FooterContainer>
    </FooterBackground>
  );
}
