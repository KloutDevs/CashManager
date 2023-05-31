"use client"

import { useState } from 'react';
import Link from "next/link";
import { useSession, signOut } from "next-auth/react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = {
  "Pricing": "pricing",
  "Bank Connect": "bank-connect",
  "Help": "help",
  "Blog": "blog",
  "About Us": "about"
}
const settings = {
  "Dashboard": "/app/dashboard",
  "Budgets": "/app/budegets",
  "Settings": "/app/settings/account",
}

const auth = {
  "Login": "login",
  "Register": "register",
}

function appBar() {
  const { data, status } = useSession(); /* Get data and status from the SessionProvider located in the RootLayout */

  if(status == "authenticated" || status == "unaunthenticated") console.log(status);

  const [anchorElNav, setAnchorElNav] = useState(null); //  Pages menu in the nav
  const [anchorElUser, setAnchorElUser] = useState(null); // User menu in the nav

  const handleOpenNavMenu = (event) => { /* Open the Navigator menu (Mobile) */
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => { /* Open the User menu */
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => { /* Close the Navigator menu (Mobile) */
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => { /* Close the User menu */
    setAnchorElUser(null);
  };

  return (
    <AppBar>
      <Container maxWidth="xl"> 
        <Toolbar disableGutters> {/* disableGutters: Disable padding */}
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CASH MANAGER
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="User navigation"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {Object.keys(pages).map((page) => (
                <MenuItem key={page + "-mobile"} onClick={handleCloseNavMenu}>
                  <Typography component="a" href={pages[page]} textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {Object.keys(pages).map((page) => (
              <Link key={page} href={pages[page]} onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >{page}</Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {data?.user !== undefined ? (
              <>
                <Tooltip title="Click here for see more">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      src={data?.user?.info?.image}
                      height="50"
                      width="50"
                      alt={data?.user?.info?.name}
                    />
                  </IconButton>
                </Tooltip>
              </>
            ) : (
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {Object.keys(auth).map((page) => (
                  <Link key={page} href={auth[page]} sx={{ color: 'white' }}>{page}</Link>
                ))}
              </Box>
            )
            }
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {Object.keys(settings).map((setting) => (

                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Link href={settings[setting]}>{setting}</Link>
                </MenuItem>
              ))}
              <MenuItem onClick={signOut}>
                <Typography textAlign="center">Log Out</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default appBar;