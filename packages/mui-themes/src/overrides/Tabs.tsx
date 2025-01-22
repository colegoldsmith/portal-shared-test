import { ThemeOptions } from '@mui/material';

const tabOverrides: ThemeOptions['components'] = {
  MuiTab: {
    styleOverrides: {
      root: ({ theme }) => ({
        '&.Mui-focusVisible': {
          borderRadius: theme.shape.borderRadius,
          outlineOffset: -2,
        },
        '&.Mui-selected': {
          color: theme.palette.text.primary,
          fontWeight: 400,
        },
        '&.MuiButtonBase-root': {
          textTransform: 'none',
        },
        '&:hover': {
          '&.Mui-selected': {
            color: theme.palette.text.primary,
            fontWeight: 400,
          },
          borderBottom: `2px solid ${theme.palette.text.primary}`,
          color: theme.palette.text.primary,
          textDecoration: 'none',
        },
        borderBottom: `2px solid transparent`,
        color: theme.palette.text.tertiary,
        minWidth: 0,
        padding: theme.spacing(1, 1.5),
        textTransform: 'none',
        transition: theme.transitions.create(['color'], {
          duration: theme.transitions.duration.shortest,
        }),
        ...theme.typography['inter-base--semibold'],
      }),
    },
  },
  MuiTabs: {
    styleOverrides: {
      indicator: ({ theme }) => ({
        backgroundColor: theme.palette.text.primary,
      }),
      root: ({ theme }) => ({
        borderBottom: `1px solid ${theme.palette.divider}`,
      }),
    },
  },
};

export default tabOverrides;
