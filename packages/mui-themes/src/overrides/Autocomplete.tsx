import { ExpandMoreOutlined } from '@mui/icons-material';
import { ThemeOptions } from '@mui/material';

const autocompleteOverrides: ThemeOptions['components'] = {
  MuiAutocomplete: {
    defaultProps: {
      popupIcon: <ExpandMoreOutlined />,
      size: 'small',
    },
    styleOverrides: {
      popupIndicatorOpen: {
        transform: 'none',
      },
    },
  },
};

export default autocompleteOverrides;
