import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';
import Logo from './Logo';
import LanguageToggle from './LanguageToggle';
import { useContent } from '../../content';

const StyledAppBar = styled(AppBar)({
  boxShadow: 'none',
  backgroundColor: 'transparent',
  backgroundImage: 'none',
  marginTop: 'calc(var(--template-frame-height, 0px) + 28px)',
});

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

const NavGroup = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
}));

const DesktopNavLinks = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const DesktopActions = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: theme.spacing(1),
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const MobileActions = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const StyledDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': {
    top: 'var(--template-frame-height, 0px)',
  },
});

const DrawerContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: (theme.vars || theme).palette.background.default,
}));

const DrawerHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
});

const DrawerDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

const DrawerLanguageRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: theme.spacing(1),
}));

export default function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen);
  const { nav } = useContent();

  const navLinks = [
    { label: nav.experience, href: '#experience' },
    { label: nav.strengths, href: '#strengths' },
    { label: nav.skills, href: '#skills' },
    { label: nav.recommendations, href: '#recommendations' },
    { label: nav.faq, href: '#faq' },
    { label: nav.contact, href: '#contact' },
  ];

  return (
    <StyledAppBar position="fixed" color="transparent" enableColorOnDark>
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <NavGroup>
            <Logo />
            <DesktopNavLinks>
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  href={link.href}
                  variant="text"
                  color="info"
                  size="small"
                >
                  {link.label}
                </Button>
              ))}
            </DesktopNavLinks>
          </NavGroup>
          <DesktopActions>
            <LanguageToggle />
            <ColorModeIconDropdown />
          </DesktopActions>
          <MobileActions>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuRoundedIcon />
            </IconButton>
            <StyledDrawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <DrawerContent>
                <DrawerHeader>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </DrawerHeader>
                <List>
                  {navLinks.map((link) => (
                    <ListItemButton
                      key={link.href}
                      component="a"
                      href={link.href}
                      onClick={toggleDrawer(false)}
                    >
                      {link.label}
                    </ListItemButton>
                  ))}
                </List>
                <DrawerDivider />
                <DrawerLanguageRow>
                  <LanguageToggle />
                </DrawerLanguageRow>
              </DrawerContent>
            </StyledDrawer>
          </MobileActions>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
}
