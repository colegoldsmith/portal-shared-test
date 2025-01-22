import React from 'react';
import { Box, SxProps, Theme } from '@mui/material';

interface IconBadgeProps {
  color?: string;
  dataTestId?: string;
  backgroundColor?: string;
  icon: React.ReactNode;
  sx?: SxProps<Theme>;
}

const IconBadge = ({
  backgroundColor,
  color,
  dataTestId,
  icon,
  sx,
}: IconBadgeProps): JSX.Element => {
  return (
    <Box
      data-testid={dataTestId}
      sx={{
        alignItems: 'center',
        backgroundColor: backgroundColor ?? 'background.level2',
        borderRadius: '8px',
        color: color ?? 'text.primary',
        display: 'flex',
        height: 54,
        justifyContent: 'center',
        p: 1.5,
        width: 54,
        ...sx,
      }}
    >
      {icon}
    </Box>
  );
};

export default IconBadge;
