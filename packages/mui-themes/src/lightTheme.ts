import { ThemeOptions, createTheme } from '@mui/material';
import { light } from '@astra/design-tokens';
import muiCommonThemeOptions from './commonThemeOptions';

const rawTheme = createTheme();

const muiLightTheme = createTheme({
  ...muiCommonThemeOptions,
  palette: {
    mode: 'light',
    // background
    background: {
      ...light.background,
      default: light.background.body,
      paper: light.background.body,
    },
    // divider
    divider: light.divider,
    // disabled
    disabledColor: light.disabledColor,
    disabledBg: light.disabledBg,
    // text
    text: light.text,
    // data
    cyan: rawTheme.palette.augmentColor({
      color: light.cyan,
      name: 'cyan',
    }),
    indigo: rawTheme.palette.augmentColor({
      color: light.indigo,
      name: 'indigo',
    }),
    orange: rawTheme.palette.augmentColor({
      color: light.orange,
      name: 'orange',
    }),
    fuchsia: rawTheme.palette.augmentColor({
      color: light.fuchsia,
      name: 'fuchsia',
    }),
    teal: rawTheme.palette.augmentColor({
      color: light.teal,
      name: 'teal',
    }),
    lime: rawTheme.palette.augmentColor({
      color: light.lime,
      name: 'lime',
    }),
    pink: rawTheme.palette.augmentColor({
      color: light.pink,
      name: 'pink',
    }),
    // intents
    error: light.failure,
    neutral: rawTheme.palette.augmentColor({
      color: light.neutral,
      name: 'neutral',
    }),
    success: light.success,
    warning: light.warning,
    primary: light.primary,
  },
} as unknown as ThemeOptions);

export default muiLightTheme;
