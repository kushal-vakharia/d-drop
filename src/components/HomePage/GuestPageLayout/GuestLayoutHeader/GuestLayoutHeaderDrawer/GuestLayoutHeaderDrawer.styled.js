import { Box, Drawer, styled } from '@mui/material';

export const GuestLayoutNavItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(5),

  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

export const GuestLayoutNavDrawer = styled(Drawer)(({ theme }) => ({
  display: 'none',
  '& .MuiDrawer-paper': {
    width: '100%',
  },
  [theme.breakpoints.down('lg')]: {
    display: 'block',
  },
}));
