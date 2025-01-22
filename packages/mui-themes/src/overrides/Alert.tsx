import { ThemeOptions } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const alertOverrides: ThemeOptions['components'] = {
  MuiAlert: {
    defaultProps: {
      iconMapping: { warning: <ErrorOutlineIcon /> },
      variant: 'standard',
    },
    styleOverrides: {
      action: ({ theme }) => ({
        padding: theme.spacing(0.5, 0, 0.5, 2),
      }),
      icon: {
        opacity: 1,
      },
      root: {
        alignItems: 'center',
      },
      standardError: ({ theme }) => ({
        '&.MuiPaper-root': {
          '& .MuiAlert-icon': {
            color: theme.palette.error.main,
          },
          backgroundColor: theme.palette.error.softBg,
        },
        color: theme.palette.error.main,
      }),
      standardInfo: ({ theme }) => ({
        '&.MuiPaper-root': {
          '& .MuiAlert-icon': {
            color: theme.palette.text.secondary,
          },
          backgroundColor: theme.palette.background.default,
        },
        border: `1px solid ${theme.palette.divider}`,
        color: theme.palette.text.primary,
      }),
      standardSuccess: ({ theme }) => ({
        '&.MuiPaper-root': {
          '& .MuiAlert-icon': {
            color: theme.palette.success.main,
          },
          backgroundColor: theme.palette.success.softBg,
        },
        color: theme.palette.success.main,
      }),
      standardWarning: ({ theme }) => ({
        '&.MuiPaper-root': {
          '& .MuiAlert-icon': {
            color: theme.palette.warning.main,
          },
          backgroundColor: theme.palette.warning.softBg,
        },
        color: theme.palette.warning.main,
      }),
    },
  },
};

export default alertOverrides;
