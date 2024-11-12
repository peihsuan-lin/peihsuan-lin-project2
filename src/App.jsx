import * as React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import RuleIcon from '@mui/icons-material/Rule';
import { Outlet } from 'react-router-dom';
import { AppProvider } from '@toolpad/core/react-router-dom';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'game',
    title: 'Game',
    icon: <VideogameAssetIcon />,
  },
  {
    segment: 'rules',
    title: 'Rules',
    icon: <RuleIcon />,
  },
];

const BRANDING = {
  title: 'MineSweeper Game',
};

export default function App() {
  return (
    <AppProvider navigation={NAVIGATION} branding={BRANDING}>
      <Outlet />
    </AppProvider>
  );
}
