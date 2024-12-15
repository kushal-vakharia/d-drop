'use client';

import { AppBar, Box, IconButton, Menu, styled } from '@mui/material';

export const GuestLayoutAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  boxShadow: 'none',
  height: 86,
  position: 'fixed',
  top: 0,
  left: '50%',
  transform: 'translate(-50%, 0%)',
  width: '100%',
  zIndex: 100,
  maxWidth: 1440,
}));

export const GuestLayoutNavBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: 86,
  paddingInline: theme.spacing(10),

  [theme.breakpoints.down('lg')]: {
    paddingInline: theme.spacing(4),
  },
}));

export const GuestLayoutNavItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(5),

  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

export const MenuIconButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
  },
}));

export const GuestLayoutAnchorLinkBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(6),
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

export const GuestLayoutHeaderMenu = styled(Menu)(() => ({
  '& .MuiPaper-root': {
    boxShadow: '0px 4px 10px 0px #0000001A',
  },
}));
