import type { MouseEvent } from 'react';
import { styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useLanguage } from '../../i18n/language';
import type { Language } from '../../i18n/language';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  height: theme.spacing(4.5),
}));

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const handleChange = (_event: MouseEvent<HTMLElement>, next: Language | null) => {
    if (next) {
      setLanguage(next);
    }
  };

  return (
    <StyledToggleButtonGroup
      value={language}
      exclusive
      onChange={handleChange}
      size="small"
      color="primary"
      aria-label="Language"
    >
      <ToggleButton value="en" aria-label="English">
        EN
      </ToggleButton>
      <ToggleButton value="nl" aria-label="Nederlands">
        NL
      </ToggleButton>
    </StyledToggleButtonGroup>
  );
}
