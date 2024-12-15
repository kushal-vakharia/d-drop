'use client';

import { Box, Grid, styled } from '@mui/material';

export const GuestLayoutFooterContainer = styled(Grid)(({ theme }) => ({
  paddingInline: theme.spacing(10),
  paddingBottom: theme.spacing(11.5),
  paddingTop: theme.spacing(12),
  [theme.breakpoints.down('md')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

export const TextCenterContainer = styled(Box)(({ theme }) => ({
  textAlign: 'left',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(6.25),
  },
}));

export const FooterInnerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  maxWidth: '256px',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

export const FooterLinkMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

export const FooterLinkContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));
