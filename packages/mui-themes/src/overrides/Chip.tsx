import { ChipProps, ThemeOptions } from '@mui/material';
import { outlinedChipMixin, softChipMixin } from '../mixins';
import { InputColor } from '../mixins/inputMixins';
import { COLORS } from './const';

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    neutral: true;
  }
  interface ChipPropsVariantOverrides {
    soft: true;
  }
}

const VARIANTS = {
  filled: softChipMixin,
  outlined: outlinedChipMixin,
  soft: softChipMixin,
};

const chipOverrides: ThemeOptions['components'] = {
  MuiChip: {
    defaultProps: {
      color: 'primary',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        '&.Mui-focusVisible': {
          backgroundColor: 'unset',
        },
        fontSize: theme.typography.caption.fontSize,
        fontWeight: theme.typography.fontWeightMedium,
      }),
      sizeMedium: ({ theme }) => ({
        height: theme.spacing(3),
      }),
      sizeSmall: ({ theme }) => ({
        height: theme.spacing(2.5),
      }),
    },
    variants: (Object.keys(COLORS) as Array<keyof typeof COLORS>).flatMap(
      color =>
        (Object.keys(VARIANTS) as Array<keyof typeof VARIANTS>).map(
          variant => ({
            props: {
              color: color as ChipProps['color'],
              variant: variant as ChipProps['variant'],
            },
            style: ({ theme }) =>
              VARIANTS[variant](COLORS[color] as InputColor, theme),
          })
        )
    ),
  },
};

export default chipOverrides;
