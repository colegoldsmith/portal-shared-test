import { ButtonProps, ThemeOptions } from '@mui/material';
import { InputColor } from '../mixins/inputMixins';
import { COLORS, VARIANTS } from './const';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
  interface ButtonPropsSizeOverrides {
    large: false;
  }
  interface ButtonPropsVariantOverrides {
    soft: true;
    solid: true;
    outlined: true;
    plain: true;
  }
}

const buttonOverrides: ThemeOptions['components'] = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
      size: 'medium',
      variant: 'contained',
    },
    styleOverrides: {
      root: { border: '1px solid transparent' },
      sizeMedium: ({ theme }) => ({
        ...theme.typography.button,
        // Gross number but ensures a medium button is 40px height
        padding: theme.spacing(0.844, 1.5),
      }),
      sizeSmall: ({ theme }) => ({
        ...theme.typography.button,
        minWidth: theme.spacing(6),
        padding: theme.spacing(0.25, 1),
      }),
    },
    variants: (Object.keys(COLORS) as Array<keyof typeof COLORS>).flatMap(
      color =>
        (Object.keys(VARIANTS) as Array<keyof typeof VARIANTS>).map(
          variant => ({
            props: {
              color: color as ButtonProps['color'],
              variant: variant as ButtonProps['variant'],
            },
            style: ({ theme }) =>
              VARIANTS[variant](COLORS[color] as InputColor, theme),
          })
        )
    ),
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        '&.Mui-focusVisible': {
          outline: `2px solid ${theme.palette.text.primary}`,
          outlineOffset: 1,
        },
        '&a, & > a': {
          textDecoration: 'none',
        },
      }),
    },
  },
};

export default buttonOverrides;
