import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { styled, ThemeProvider } from '@mui/system';
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip, Menu, MenuItem, ListItemIcon, Divider, Typography} from '@mui/material';

import {PersonAdd, Settings, Logout} from '@mui/icons-material';
import Button from '@mui/material/Button';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Bell as BellIcon } from '../assets/icons/bell';
import { UserCircle as UserCircleIcon } from '../assets/icons/user-circle';
import { Users as UsersIcon } from '../assets/icons/users';
import theme from '../theme/theme';
import { logout } from '../../Business Layer/thunks/auth/auth.thunk';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const DashboardNavbarRoot = styled(AppBar)(( {theme} ) => ({
  
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
}));

const Navbar = function (props) {
  const navigate = useNavigate()
  const { onSidebarOpen, logout, ...other } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    console.log('Logout Pressed');
    return navigate('/login');
  };

  return (
    <>
    <ThemeProvider theme={theme}>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280
          },
          width: {
            lg: 'calc(100% - 280px)'
          }
        }}
        {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          {/* <Tooltip title="Search">
            <IconButton sx={{ ml: 1 }}>
              <SearchIcon fontSize="small" />
            </IconButton>
          </Tooltip> */}
          <Box sx={{ flexGrow: 1 }} />
          {/* <Tooltip title="Contacts">
            <IconButton sx={{ ml: 1 }}>
              <UsersIcon fontSize="small" />
            </IconButton>
          </Tooltip> */}

          
          {/* <Tooltip title="Notifications">
            <IconButton sx={{ ml: 1 }}>
              <Badge
                badgeContent={4}
                color="primary"
                variant="dot"
              >
                <BellIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip> */}

          <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
             <Avatar
            sx={{
              height: 40,
              width: 40,
              ml: 1
            }}
            src="https://upload.wikimedia.org/wikipedia/en/8/80/St_George_SC_%28logo%29.png"
          >
            <UserCircleIcon fontSize="small" />
          </Avatar>
          </IconButton>
        </Tooltip>