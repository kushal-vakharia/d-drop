import { Box, Grid, styled, Typography } from '@mui/material';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';

export const LegalWorkflowSectionMainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
}));

export const LegalWorkflowSectionTitle = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  paddingInline: theme.spacing(10),
  paddingTop: theme.spacing(10),
  [theme.breakpoints.down('lg')]: {
    paddingBottom: theme.spacing(1.5),
    paddingInline: theme.spacing(4),
    paddingTop: theme.spacing(5),
  },
}));

export const LegalWorkflowSectionGridBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary[300],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const LegalWorkflowSectionGridSecondBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
  paddingBlock: theme.spacing(6),
  paddingInline: theme.spacing(10),
  maxWidth: '1280px',
  [theme.breakpoints.down('lg')]: {
    paddingBlock: theme.spacing(0),
    paddingInline: theme.spacing(0),
  },
}));

export const GrindBox = styled(Grid)(({ theme }) => ({
  '&.MuiGrid-root>.MuiGrid-item': {
    paddingBottom: theme.spacing(2),
  },
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(6),
  },
}));

export const GrinItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export const DoneOutlinedIconBox = styled(Grid)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  alignItems: 'center',
}));

export const DoneOutlinedIcons = styled(DoneOutlinedIcon)(() => ({
  color: '#303030CC',
  height: '18px',
  width: '18px',
}));

export const LegalWorkflowSectionText = styled(Typography)(() => ({
  fontWeight: 800,
  fontSize: '30px',
  lineHeight: '36px',
}));
