import { IconButtonProps, ThemeOptions } from '@mui/material';
import { plainInputMixin } from '../mixins';
import { InputColor } from '../mixins/inputMixins';
import { COLORS } from './const';

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    neutral: true;
    primary: true;
    error: true;
    success: true;
    warning: true;
  }
}

const iconButtonOverrides: ThemeOptions['components'] = {
  MuiIconButton: {
    defaultProps: {
      color: 'neutral',
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        borderRadius: '6px',
      },
    },
    variants: (Object.keys(COLORS) as Array<keyof typeof COLORS>).map(
      color => ({
        props: {
          color: color as IconButtonProps['color'],
        },
        style: ({ theme }) =>
          plainInputMixin(COLORS[color] as InputColor, theme),
      })
    ),
  },
};

export default iconButtonOverrides;
