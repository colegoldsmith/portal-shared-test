import React from 'react';
import {
  Link as MLink,
  LinkProps as MLinkProps,
  IconButton,
} from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { Link, LinkProps } from 'react-router-dom';

interface InterchangeableIconButtonProps {
  dataTestId?: string;
  onClick?: () => void;
  icon: React.ReactNode;
  sx?: SxProps<Theme>;
  href?: MLinkProps['href'];
  target?: string;
  to?: LinkProps['to'];
}

const InterchangeableIconButton = ({
  dataTestId,
  onClick,
  icon,
  sx,
  href,
  target,
  to,
}: InterchangeableIconButtonProps): JSX.Element => {
  return (
    <IconButton
      data-testid={dataTestId}
      onClick={onClick}
      sx={{ border: 'none', ...sx }}
      {...(to && { component: Link, to })}
      {...(href && { component: MLink, href })}
      {...(target && { target })}
    >
      {icon}
    </IconButton>
  );
};

export default InterchangeableIconButton;
