import { ThemeOptions, createTheme } from '@mui/material';
import { dark } from '@astra/design-tokens';
import muiCommonThemeOptions from './commonThemeOptions';

const rawTheme = createTheme();

const muiDarkTheme = createTheme({
  ...muiCommonThemeOptions,
  components: {
    ...muiCommonThemeOptions.components,
    MuiPaper: {
      defaultProps: {
        variant: 'outlined',
      },
    },
  },
  palette: {
    mode: 'dark',
    // background
    background: {
      ...dark.background,
      default: dark.background.body,
      paper: dark.background.body,
    },
    // divider
    divider: dark.divider,
    // disabled
    disabledColor: dark.disabledColor,
    disabledBg: dark.disabledBg,
    // text
    text: dark.text,
    // data
    cyan: rawTheme.palette.augmentColor({
      color: dark.cyan,
      name: 'cyan',
    }),
    indigo: rawTheme.palette.augmentColor({
      color: dark.indigo,
      name: 'indigo',
    }),
    orange: rawTheme.palette.augmentColor({
      color: dark.orange,
      name: 'orange',
    }),
    fuchsia: rawTheme.palette.augmentColor({
      color: dark.fuchsia,
      name: 'fuchsia',
    }),
    teal: rawTheme.palette.augmentColor({
      color: dark.teal,
      name: 'teal',
    }),
    lime: rawTheme.palette.augmentColor({
      color: dark.lime,
      name: 'lime',
    }),
    pink: rawTheme.palette.augmentColor({
      color: dark.pink,
      name: 'pink',
    }),
    // intents
    error: dark.failure,
    neutral: rawTheme.palette.augmentColor({
      color: dark.neutral,
      name: 'neutral',
    }),
    success: dark.success,
    warning: dark.warning,
    primary: dark.primary,
  },
} as unknown as ThemeOptions);

export default muiDarkTheme;
