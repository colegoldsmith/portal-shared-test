import { Dispatch, SetStateAction } from 'react';
import { Box, TextField, InputAdornment, Divider } from '@mui/material';
import { Search } from 'lucide-react';

interface Props {
  setOrganizationSearchItem: Dispatch<SetStateAction<string>>;
  organizationSearchItem: string;
}

const OrganizationSearch = ({
  setOrganizationSearchItem,
  organizationSearchItem,
}: Props): JSX.Element => {
  const onTextFieldChange = e => {
    e.preventDefault();
    setOrganizationSearchItem(e.target.value);
  };

  return (
    <Box sx={theme => ({ my: theme.spacing(0.5) })}>
      <TextField
        onChange={e => onTextFieldChange(e)}
        placeholder="Search orgs..."
        slotProps={{
          htmlInput: {
            'data-testid': 'organization-search-field',
          },
          input: {
            onKeyDown: e => e.stopPropagation(),
            startAdornment: (
              <InputAdornment position="start">
                <Search size={16} />
              </InputAdornment>
            ),
            sx: theme => ({
              ...theme.typography.body2,
            }),
          },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'none',
            },
          },
          pl: 0,
        }}
        value={organizationSearchItem}
      />
      <Divider orientation="horizontal" />
    </Box>
  );
};

export default OrganizationSearch;
