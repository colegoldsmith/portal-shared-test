import { ThemeOptions } from '@mui/material';
import { typography } from '@astra/design-tokens';

type TypographyTokenOverrides = {
  [key in keyof typeof typography]: true;
};

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides extends TypographyTokenOverrides {
    display: true;
    mono: true;
    code: true;
  }
}

const typographyOverrides: ThemeOptions['components'] = {
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        code: 'code',
        display: 'h1',
        mono: 'span',
      },
    },
    variants: [
      {
        props: { variant: 'code' },
        style: ({ theme }) => ({
          backgroundColor: theme.palette.background.level2,
          borderRadius: theme.shape.borderRadius,
          padding: theme.spacing(0.75, 1),
          ...theme.typography.mono,
        }),
      },
    ],
  },
};

export default typographyOverrides;
