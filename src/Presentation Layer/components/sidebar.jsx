import { useEffect } from 'react';
import { Link } from "react-router-dom";
// import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import { Logo } from './logo';
import { NavItem } from './nav-item';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import PeopleIcon from '@mui/icons-material/People';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
const items = [
  {
    href: '/',
    // icon: (<ChartBarIcon fontSize="small" />),
    icon: (<EventAvailableRoundedIcon/>),
    title: 'Events'
  },
  {
    href: '/scouts',
    icon: (<PeopleIcon/>),
    title: 'Scouts'
  },
  {
    href: '/account',
    icon: (<ManageAccountsRoundedIcon/>),
    title: 'Account'
  },

  // {
  //   href: '/products',
  //   icon: (<ShoppingBagIcon fontSize="small" />),
  //   title: 'Products'
  // },
  // {
  //   href: '/account',
  //   icon: (<UserIcon fontSize="small" />),
  //   title: 'Account'
  // },
  // {
  //   href: '/settings',
  //   icon: (<CogIcon fontSize="small" />),
  //   title: 'Settings'
  // },
  // {
  //   href: '/login',
  //   icon: (<LockIcon fontSize="small" />),
  //   title: 'Login'
  // },
  // {
  //   href: '/register',
  //   icon: (<UserAddIcon fontSize="small" />),
  //   title: 'Register'
  // },
  // {
  //   href: '/404',
  //   icon: (<XCircleIcon fontSize="small" />),
  //   title: 'Error'
  // }
];

export const Sidebar = (props) => {
  const { open, onClose } = props;
  // const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  // useEffect(
  //   () => {
  //     // if (!router.isReady) {
  //     //   return;
  //     // }

  //     if (open) {
  //       onClose?.();
  //     }
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [router.asPath]
  // );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >

        <div>

{/* ===================The Logo=================================== */}

          <Box sx={{ p: 3 }}>

          <Link to="/">
                <Logo
                  sx={{
                    height: 42,
                    width: 42
                  }}
                />
              </Link>
          </Box>

{/* ===================The Name=================================== */}


          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                px: 3,
                py: '11px',
                borderRadius: 1
              }}
            >
              <div>
                <Typography
                  color="inherit"
                  variant="subtitle1"
                >
                  Hope Football
                </Typography>
                <Typography
                  color="neutral.400"
                  variant="body2"
                >
                  Club
                  {' '}
                  : St. George F.C.
                </Typography>
              </div>
              {/* <SelectorIcon
                sx={{
                  color: 'neutral.500',
                  width: 14,
                  height: 14
                }}
              /> */}
            </Box>
          </Box>
        </div>
