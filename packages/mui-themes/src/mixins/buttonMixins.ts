import { CSSObject } from '@mui/material';

export const gradientButtonMixin = (linearGradientDef: string): CSSObject => {
  return {
    background: linearGradientDef,
    border: 'none',
    backgroundSize: '100%',
    backgroundPosition: '0%',
    transition: 'background-position 0.7s ease, background-size 0.7s ease',
    '&:hover': {
      backgroundPosition: '100%',
      backgroundSize: '200%',
      transition: 'background-position 0.7s ease, background-size 0.7s ease',
    },
  };
};
