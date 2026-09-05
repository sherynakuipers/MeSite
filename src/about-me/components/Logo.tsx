import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const LogoRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const LogoBadge = styled(Box)(({ theme }) => ({
  width: 32,
  height: 32,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: (theme.vars || theme).palette.primary.main,
  color: (theme.vars || theme).palette.primary.contrastText,
  border: `1.5px solid ${(theme.vars || theme).palette.primary.contrastText}`,
  flexShrink: 0,
}));

const BadgeInitials = styled(Typography)({
  fontWeight: 700,
  lineHeight: 1,
});

const LogoWordmark = styled(Typography)(({ theme }) => ({
  color: 'inherit',
  fontWeight: 700,
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
}));

interface LogoProps {
  /** Initials shown in the badge. Change once you have a real logo mark. */
  initials?: string;
  /** Full name shown next to the badge. */
  name?: string;
  showName?: boolean;
}

export default function Logo({
  initials = 'SK',
  name = 'Sheryna Kuipers',
  showName = true,
}: LogoProps) {
  return (
    <LogoRow>
      <LogoBadge>
        <BadgeInitials variant="subtitle2">{initials}</BadgeInitials>
      </LogoBadge>
      {showName && <LogoWordmark variant="subtitle1">{name}</LogoWordmark>}
    </LogoRow>
  );
}
