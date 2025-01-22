import { useTheme } from '@mui/material';
import {
  AstraLogo,
  LangflowLogo,
  MiniDataStaxLogo,
} from 'assets/svg/DataStaxLogos';
import { LANGFLOW_DEV_TARGET_URL, ASTRA_DEV_TARGET_URL } from 'constants/links';
import { DollarSign, Settings } from 'lucide-react';
import { ApplicationType } from 'types';
import { activeOrg } from 'constants/mockdata';

const useApplicationSwitcherConfig = () => {
  const theme = useTheme();

  const appSelectorStyleConfig = {
    [ApplicationType.GLOBAL_PORTAL]: {
      backgroundColor: theme.palette.text.primary,
      color: theme.palette.background.body,
      icon: <MiniDataStaxLogo sx={{ height: 14, pl: 0.25 }} />,
      onClick: () => {},
      text: 'DataStax',
    },
    [ApplicationType.LANGFLOW]: {
      backgroundColor: '#FF3276', // Todo: Needs Theme
      color: theme.palette.background.body,
      icon: <LangflowLogo />,
      onClick: () => (window.location.href = LANGFLOW_DEV_TARGET_URL),
      text: 'Langflow',
    },
    [ApplicationType.ASTRA_DB]: {
      backgroundColor: '#4F46E5', // Todo: Needs Theme
      color: theme.palette.background.body,
      icon: <AstraLogo />,
      onClick: () => (window.location.href = '/astra'),
      text: 'Astra DB',
    },
    [ApplicationType.ADMIN]: {
      backgroundColor: theme.palette.background.level3,
      color: theme.palette.text.primary,
      icon: <Settings />,
      onClick: () =>
        (window.location.href = `${ASTRA_DEV_TARGET_URL}/settings/org/${activeOrg.id}`),
      text: 'Admin',
    },
    [ApplicationType.BILLING]: {
      backgroundColor: theme.palette.background.level3,
      color: theme.palette.text.primary,
      icon: <DollarSign />,
      onClick: () =>
        (window.location.href = `${ASTRA_DEV_TARGET_URL}/settings/org/${activeOrg.id}/billing`),
      text: 'Billing',
    },
  };
  return {
    appSelectorStyleConfig,
  };
};

export default useApplicationSwitcherConfig;
