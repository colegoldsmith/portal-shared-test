import { ThemeOptions } from '@mui/material';

const tooltipOverrides: ThemeOptions['components'] = {
  MuiTooltip: {
    defaultProps: {
      arrow: true,
    },
    styleOverrides: {
      arrow: ({ theme }) => ({
        color: theme.palette.background.tooltip,
      }),
      tooltip: ({ theme }) => ({
        backgroundColor: theme.palette.background.tooltip,
        borderRadius: 3,
        color: theme.palette.primary.contrastText,
        fontSize: '0.875rem',
        fontWeight: 400,
      }),
    },
  },
};

export default tooltipOverrides;
