import { ThemeOptions } from '@mui/material';

declare module '@mui/material/Switch' {
  interface SwitchPropsColorOverrides {
    info: false;
    default: false;
  }
}

const switchOverrides: ThemeOptions['components'] = {
  MuiSwitch: {
    styleOverrides: {
      root: {
        padding: 0,
      },
      sizeMedium: ({ theme }) => ({
        '&  .MuiSwitch-switchBase.Mui-checked': {
          transform: `translateX(${theme.spacing(1.75)})`,
        },
        '& .MuiSwitch-switchBase': {
          padding: theme.spacing(0.5),
        },
        '& .MuiSwitch-thumb': {
          height: 14,
          width: 14,
        },
        height: 22,
        width: 36,
      }),
      sizeSmall: ({ theme }) => ({
        '& .MuiSwitch-switchBase': {
          padding: 3,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
          transform: `translateX(${theme.spacing(1.25)})`,
        },
        '& .MuiSwitch-thumb': {
          height: 12,
          width: 12,
        },
        height: 18,
        width: 28,
      }),
      switchBase: ({ theme }) => ({
        '&.Mui-checked': {
          '& + .MuiSwitch-track': {
            border: 'none',
            opacity: 1,
          },
          '& .MuiSwitch-thumb': {
            backgroundColor: theme.palette.primary.contrastText,
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.3,
          },
        },
        '&.Mui-focusVisible': {
          '&.Mui-checked': {
            outlineColor: theme.palette.primary.contrastText,
          },
          outlineOffset: theme.spacing(-0.25),
        },
        '&:hover': {
          backgroundColor: 'transparent',
        },
        '&:not(.Mui-checked).Mui-disabled .MuiSwitch-thumb': {
          opacity: 0.2,
        },
        backgroundColor: 'transparent',
      }),
      thumb: ({ theme }) => ({
        backgroundColor: theme.palette.text.primary,
        boxShadow: 'none',
        transition: theme.transitions.create(['background-color', 'opacity']),
      }),
      track: ({ theme }) => ({
        backgroundColor: 'transparent',
        border: `2px solid ${theme.palette.text.primary}`,
        borderRadius: 36,
        opacity: 1,
      }),
    },
  },
};

export default switchOverrides;
