import {
  AppBar,
  Toolbar,
  Button,
  Box,
  useTheme,
  Divider,
  useMediaQuery,
} from '@mui/material';
import { BookOpen, Gem, Settings } from 'lucide-react';
import { mixins } from '@astra/mui-themes';
import MiniDataStaxLogo from 'assets/svg/DataStaxLogos';
import AccountMenu from 'components/AccountMenu';
import ApplicationSwitcher from 'components/ApplicationSwitcher';
import IconBadge from 'components/IconBadge';
import InterchangeableLinkButton from 'components/InterchangeableLinkButton';
import OrganizationSelectButton from 'components/OrganizationSelectButton';
import { DATASTAX_DOCS_URL } from 'constants/links';
import { activeOrg } from 'constants/mockdata';

const TopNavigation = (): JSX.Element => {
  const showUpgradeButton = activeOrg.customerRelationship === 'qualified';
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <AppBar
      elevation={0}
      position="sticky"
      sx={theme => ({
        backgroundColor: 'background.paper',
        borderBottom: `1px solid ${theme.palette.divider}`,
        color: theme.palette.text.primary,
        paddingX: 3,
      })}
    >
      <Toolbar disableGutters sx={{ alignItems: 'center', display: 'flex' }}>
        <IconBadge
          backgroundColor="text.primary"
          color="background.body"
          icon={<MiniDataStaxLogo sx={{ pl: 0.25, width: 22 }} />}
          sx={{
            borderRadius: '3px',
            height: 30,
            width: 30,
          }}
        />
        <OrganizationSelectButton />
        <Box sx={{ alignItems: 'center', display: 'flex', gap: 1, ml: 3 }}>
          {showUpgradeButton && (
            <Button
              data-testid="upgrade-plan-button"
              size="small"
              startIcon={<Gem size={18} />}
              sx={{
                py: 0.5, // this will go away when the new variants are in place
                ...mixins.gradientButtonMixin(mixins.indigoButtonGradient),
                textWrap: 'nowrap',
                [theme.breakpoints.down('md')]: {
                  display: 'none',
                },
              }}
            >
              Upgrade
            </Button>
          )}
          {/* TODO: This Button will have its own variant in upcoming work */}
          <Button
            data-testid="get-credits-button"
            size="small"
            sx={{
              '&:hover': {
                backgroundColor: 'background.level2',
                color: 'text.primary',
              },
              backgroundColor: 'background.level1',
              border: 'none',
              borderRadius: 1,
              color: 'text.primary',
              py: 0.5,
              textWrap: 'nowrap',
              [theme.breakpoints.down('md')]: {
                display: 'none',
              },
            }}
          >
            Get free startup credits
          </Button>
        </Box>
        {/* Right Nav Actions */}
        <Box sx={{ alignItems: 'center', display: 'flex', ml: 'auto' }}>
          <InterchangeableLinkButton
            dataTestId="docs-link"
            href={DATASTAX_DOCS_URL}
            icon={<BookOpen color={theme.palette.text.secondary} size={18} />}
            target="_blank"
            text="Docs"
            useIconButton={isSmallScreen}
          />
          <InterchangeableLinkButton
            dataTestId="settings-button"
            icon={<Settings color={theme.palette.text.secondary} size={18} />}
            onClick={() => console.info('open da settings')}
            sx={{ ml: { md: 2, xs: 1 } }}
            text="Settings"
            useIconButton={isSmallScreen}
          />
          <Divider
            flexItem
            orientation="vertical"
            sx={{ mx: { md: 3, xs: 2 } }}
            variant="middle"
          />
          <ApplicationSwitcher />
          <AccountMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavigation;
