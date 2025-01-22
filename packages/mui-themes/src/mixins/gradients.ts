import { alpha } from '@mui/material';

export const brandGradient = theme =>
  `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.error.main}, ${theme.palette.warning.main})`;

export const brandGradientNudge = theme =>
  `linear-gradient(88deg, 
    ${alpha(theme.palette.primary.main, 0.3)} 5.86%,
    ${alpha(theme.palette.error.main, 0.3)} 51.23%, 
    ${alpha(theme.palette.warning.main, 0.3)} 96.61%)`;

export const indigoButtonGradient = `linear-gradient(120deg, #4F46E5 30%, #A855F7 70%)`;
