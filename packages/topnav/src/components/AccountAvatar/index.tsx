import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { IconButton, styled, Tooltip } from '@mui/material';
import Gravatar from 'react-gravatar';

const StyledGravatar = styled(Gravatar)(() => ({
  borderRadius: '50%',
  height: '100%',
  margin: 0,
  width: '100%',
}));

interface Props {
  userEmail: string;
  handleAvatarClick: (e: any) => void;
}

const AccountAvatar = ({
  userEmail,
  handleAvatarClick,
}: Props): JSX.Element => {
  return (
    <Tooltip placement="right" title={userEmail || ''}>
      <IconButton
        data-testid="account-avatar"
        onClick={handleAvatarClick}
        sx={{
          gap: 1,
          mr: { xs: 2, md: 0 },
        }}
      >
        {/* Empty string is necessary here to quiet test noise from React Gravatar  */}
        <StyledGravatar email={userEmail || ''} size={32} />
        <UnfoldMoreIcon
          sx={theme => ({
            color: theme.palette.text.tertiary,
            height: '18px',
            width: '18px',
            [theme.breakpoints.down('sm')]: {
              display: 'none',
            },
          })}
        />
      </IconButton>
    </Tooltip>
  );
};

export default AccountAvatar;
