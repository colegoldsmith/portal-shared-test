import { ThemeOptions } from '@mui/material';
import { typography, rounded } from '@astra/design-tokens';
import buttonOverrides from './overrides/Button';
import typographyOverrides from './overrides/Typography';
import iconButtonOverrides from './overrides/IconButton';
import textFieldOverrides from './overrides/TextField';
import tooltipOverrides from './overrides/Tooltip';
import toggleButtonOverrides from './overrides/ToggleButton';
import chipOverrides from './overrides/Chip';
import dialogOverrides from './overrides/Dialog';
import tableOverrides from './overrides/Table';
import tabsOverrides from './overrides/Tabs';
import radioOverrides from './overrides/Radio';
import linkOverrides from './overrides/Link';
import listOverrides from './overrides/List';
import menuOverrides from './overrides/Menu';
import switchOverrides from './overrides/Switch';
import loadingButtonOverrides from './overrides/LoadingButton';
import alertOverrides from './overrides/Alert';
import autocompleteOverrides from './overrides/Autocomplete';
import backdropOverrides from './overrides/Backdrop';

const muiCommonThemeOptions: ThemeOptions = {
  // component overrides
  components: {
    ...alertOverrides,
    ...autocompleteOverrides,
    ...backdropOverrides,
    ...buttonOverrides,
    ...chipOverrides,
    ...dialogOverrides,
    ...iconButtonOverrides,
    ...linkOverrides,
    ...listOverrides,
    ...loadingButtonOverrides,
    ...menuOverrides,
    ...radioOverrides,
    ...switchOverrides,
    ...tableOverrides,
    ...tabsOverrides,
    ...textFieldOverrides,
    ...toggleButtonOverrides,
    ...tooltipOverrides,
    ...typographyOverrides,
  },
  // borderRadius
  shape: { borderRadius: 4, rounded },
  // typography
  typography: {
    ...typography,
    fontFamily: '"Inter", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    // customize default MUI typography variants
    body1: typography['inter-base--medium'],
    body2: typography['inter-base--regular'],
    subtitle1: typography['inter-xs--medium'],
    subtitle2: typography['inter-xs--regular'],
    mono: typography['jetbrains-base--regular'],
    display: typography['sora-4xl--semibold'],
    h1: typography['sora-3xl--semibold'],
    h2: typography['sora-2xl--semibold'],
    h3: typography['inter-xl--semibold'],
    h4: typography['inter-lg--semibold'],
    h5: typography['inter-base--semibold'],
    button: {
      ...typography['inter-base--semibold'],
      textTransform: 'none',
    },
  },
};

export default muiCommonThemeOptions;
