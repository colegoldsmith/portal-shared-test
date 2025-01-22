import React from 'react';
import { Box, Typography } from '@mui/material';
import IconBadge from 'components/IconBadge';
import { ApplicationType } from 'types';

interface Props {
  backgroundColor: string;
  color: string;
  text: string;
  onClick: () => void;
  icon: React.ReactNode;
  type: ApplicationType;
}

const ApplicationSwitcherItem = ({
  backgroundColor,
  text,
  color,
  onClick,
  icon,
  type,
}: Props): JSX.Element => {
  return (
    // Tile Container - Includes Text
    <Box
      component="button"
      onClick={onClick}
      sx={{
        alignItems: 'center',
        backgroundColor: 'unset',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: 80,
        justifyContent: 'center',
        width: 80,
      }}
    >
      <IconBadge
        backgroundColor={backgroundColor}
        color={color}
        dataTestId={`application-tile-${type}`}
        icon={icon}
        sx={{
          backgroundColor: backgroundColor ?? 'background.level3',
          color: color ?? 'text.primary',
          height: 42,
          p: 1.5,
          width: 42,
        }}
      />
      <Typography
        sx={{
          fontFamily: 'Inter',
          mt: 0.5,
          textAlign: 'center',
          width: '100%',
        }}
        variant="body2"
      >
        {text}
      </Typography>
    </Box>
  );
};

export default ApplicationSwitcherItem;
