import { styled, useColorScheme, Tooltip } from '@mui/material';
import ToggleButton, { toggleButtonClasses } from '@mui/material/ToggleButton';
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup';
import { colors } from '@astra/design-tokens';
import { Monitor, Sun, Moon } from 'lucide-react';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`&.${toggleButtonGroupClasses.root}`]: {
    alignItems: 'center',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '36px',
    display: 'flex',
    gap: theme.spacing(0.25),
    padding: theme.spacing(0.25),
    position: 'relative',
  },
  '& .thumb': {
    '&.dark': {
      backgroundColor: colors.purple[600],
      transform: `translateX(${theme.spacing(2.75)})`,
    },
    '&.light': {
      backgroundColor: colors.amber[300],
      transform: 'translateX(0)',
    },
    '&.system': {
      backgroundColor: theme.palette.neutral.solidBg,
      transform: `translateX(${theme.spacing(5.5)})`,
    },
    borderRadius: '50%',
    height: theme.spacing(2.5),
    position: 'absolute',
    transition: `${theme.transitions.create([
      'background-color',
      'transform',
    ])} !important`,
    width: theme.spacing(2.5),
  },
}));

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  [`&.${toggleButtonClasses.root}`]: {
    '&:hover': { background: theme.palette.neutral.plainHoverBg },
    borderRadius: '50%',
    borderWidth: 0,
    color: theme.palette.text.primary,
    height: theme.spacing(2.5),
    margin: 0,
    padding: 0,
    transition: `${theme.transitions.create([
      'background-color',
      'color',
    ])} !important`,
    width: theme.spacing(2.5),
  },
  [`&.${toggleButtonClasses.selected}`]: {
    '&.system': { color: theme.palette.neutral.solidColor },
    '&:hover': { backgroundColor: 'transparent' },
    '&:not(:first-of-type)': { borderWidth: 0 },
    backgroundColor: 'transparent',
  },
}));

const ThemeToggle = (): JSX.Element | null => {
  const { mode, setMode } = useColorScheme();

  const handleChange = (_, newMode) => {
    if (newMode) setMode(newMode);
  };

  if (!mode) return null;

  return (
    <StyledToggleButtonGroup
      aria-label="color theme"
      exclusive
      onChange={handleChange}
      size="small"
      value={mode}
    >
      <span className={`thumb ${mode}`} />
      <Tooltip title="Light Theme">
        <StyledToggleButton aria-label="light" className="light" value="light">
          <Sun size="0.8125rem" />
        </StyledToggleButton>
      </Tooltip>
      <Tooltip title="Dark Theme">
        <StyledToggleButton aria-label="dark" className="dark" value="dark">
          <Moon size="0.8125rem" />
        </StyledToggleButton>
      </Tooltip>
      <Tooltip title="System Theme">
        <StyledToggleButton
          aria-label="system"
          className="system"
          value="system"
        >
          <Monitor size="0.8125rem" />
        </StyledToggleButton>
      </Tooltip>
    </StyledToggleButtonGroup>
  );
};

export default ThemeToggle;
