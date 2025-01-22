import { Box, Typography } from '@mui/material';

interface Props {
  bgColor?: string;
  textColor?: string;
  text: string;
}

const MenuItemBadge = ({ bgColor, textColor, text }: Props): JSX.Element => {
  return (
    <Box
      sx={theme => ({
        alignItems: 'center',
        backgroundColor: bgColor || theme.palette.background.level1,
        borderRadius: '3px',
        color: textColor || theme.palette.text.tertiary,
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(0.25, 0.75),
      })}
    >
      <Typography
        sx={{
          alignItems: 'center',
          display: 'flex',
          fontFamily: 'Inter',
          fontSize: 10,
          fontWeight: 600,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default MenuItemBadge;
