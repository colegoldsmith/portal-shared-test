import React from 'react';
import {
  Button,
  Box,
  Typography,
  Link as MLink,
  LinkProps as MLinkProps,
} from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { Link, LinkProps } from 'react-router-dom';
import InterchangeableIconButton from 'components/InterchangeableIconButton';

interface InterchangeableLinkButtonProps {
  dataTestId?: string;
  onClick?: () => void;
  text: string;
  icon: React.ReactNode;
  sx?: SxProps<Theme>;
  href?: MLinkProps['href'];
  target?: string;
  to?: LinkProps['to'];
  useIconButton?: boolean;
}
const InterchangeableLinkButton = ({
  onClick,
  text,
  icon,
  sx,
  href,
  target,
  to,
  dataTestId,
  useIconButton = false,
}: InterchangeableLinkButtonProps): JSX.Element => {
  return (
    <>
      {useIconButton ? (
        <InterchangeableIconButton
          dataTestId={dataTestId}
          onClick={onClick}
          sx={{ ...sx }}
          to={to}
          href={href}
          target={target}
          icon={icon}
        />
      ) : (
        <Button
          color="neutral"
          data-testid={dataTestId}
          onClick={onClick}
          size="small"
          startIcon={icon}
          sx={{ border: 'none', ...sx }}
          variant="outlined"
          {...(to && { component: Link, to })}
          {...(href && { component: MLink, href })}
          {...(target && { target })}
        >
          <Typography maxWidth={128} noWrap variant="button">
            <Box
              component="span"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {text}
            </Box>
          </Typography>
        </Button>
      )}
    </>
  );
};

export default InterchangeableLinkButton;
