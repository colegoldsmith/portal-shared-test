import { Box, Typography } from '@mui/material';
import ThemeToggle from 'components/ThemeToggle';
import EllipsisTooltipText from 'components/EllipsisTooltipText';

interface Props {
  fullName: string;
  email: string;
}

const AccountMenuHeader = ({ fullName, email }: Props): JSX.Element => {
  return (
    <Box
      sx={theme => ({
        alignItems: 'center',
        borderBottom: `1px solid ${theme.palette.divider}`,
        display: 'grid',
        gap: 2,
        gridTemplateColumns: 'auto auto',
        justifyContent: 'space-between',
        padding: theme.spacing(1.25, 2),
      })}
    >
      <Box sx={{ display: 'grid' }}>
        <Typography
          sx={theme => ({
            color: 'text.primary',
            fontWeight: theme.typography.fontWeightBold,
          })}
          variant="body2"
        >
          {fullName}
        </Typography>
        <EllipsisTooltipText
          placement="left"
          sx={theme => ({ ...theme.typography.body2, color: 'text.tertiary' })}
        >
          {email}
        </EllipsisTooltipText>
      </Box>
      <ThemeToggle />
    </Box>
  );
};

export default AccountMenuHeader;
