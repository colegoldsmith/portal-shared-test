import { CSSObject, Theme, ThemeOptions } from '@mui/material';

export const selectedMixin = (theme: Theme): CSSObject => ({
  '&.Mui-selected': {
    '& .MuiTypography-root': {
      color: theme.palette.text.primary,
    },
    '&:hover': {
      backgroundColor: theme.palette.neutral.softHoverBg,
    },
    backgroundColor: theme.palette.neutral.softBg,
  },
});

const listOverrides: ThemeOptions['components'] = {
  MuiListItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        ...selectedMixin(theme),
        '&:hover': {
          backgroundColor: theme.palette.neutral.plainHoverBg,
        },
      }),
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        flexGrow: 0,
        ...selectedMixin(theme),
        '&:hover': {
          backgroundColor: theme.palette.neutral.plainHoverBg,
        },
      }),
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: 0,
      },
    },
  },
  MuiListItemText: {
    defaultProps: {
      primaryTypographyProps: {
        variant: 'caption',
      },
    },
  },
};

export default listOverrides;
