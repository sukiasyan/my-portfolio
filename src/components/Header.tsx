import makeStyles from '@mui/styles/makeStyles';
import { HashLink as Link } from 'react-router-hash-link';
import {
  AppBar,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#ED6C03',
    boxShadow: 'none',
  },
  link: {
    textDecoration: 'none',
    color: '#6e6e6e',
  },
  menuLink: {
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '15px',
    },
  },
  activeMenuLink: {
    textDecoration: 'underline',
    textUnderlineOffset: '15px',
    color: 'white',
  },
});

export const Header = () => {
  const classes = useStyles();
  const [isActive, setIsActive] = useState('');
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (val: string) => {
    setAnchorElNav(null);
    setIsActive(val);
  };

  return (
    <AppBar position='static' className={classes.root}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
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
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={() => handleCloseNavMenu('introPage')}
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
              }}
            >
              <Link
                smooth
                to='#introPage'
                className={
                  isActive === 'introPage'
                    ? classes.activeMenuLink
                    : classes.menuLink
                }
              >
                Home
              </Link>
            </Button>
            <Button
              onClick={() => handleCloseNavMenu('about')}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <Link
                smooth
                to='#about'
                className={
                  isActive === 'about'
                    ? classes.activeMenuLink
                    : classes.menuLink
                }
              >
                About
              </Link>
            </Button>
            <Button
              onClick={() => handleCloseNavMenu('skills')}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <Link
                smooth
                to='#skills'
                className={
                  isActive === 'skills'
                    ? classes.activeMenuLink
                    : classes.menuLink
                }
              >
                Skills
              </Link>
            </Button>
            <Button
              onClick={() => handleCloseNavMenu('experience')}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <Link
                smooth
                to='#experience'
                className={
                  isActive === 'experience'
                    ? classes.activeMenuLink
                    : classes.menuLink
                }
              >
                Experience
              </Link>
            </Button>
            <Button
              onClick={() => handleCloseNavMenu('portfolio')}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <Link
                smooth
                to='#portfolio'
                className={
                  isActive === 'portfolio'
                    ? classes.activeMenuLink
                    : classes.menuLink
                }
              >
                Portfolio
              </Link>
            </Button>
            <Button
              onClick={() => handleCloseNavMenu('contacts')}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <Link
                smooth
                to='#contacts'
                className={
                  isActive === 'contacts'
                    ? classes.activeMenuLink
                    : classes.menuLink
                }
              >
                Contacts
              </Link>
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
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
              <MenuItem onClick={() => handleCloseNavMenu('introPage')}>
                <Typography textAlign='center'>
                  <Link smooth to='#introPage' className={classes.link}>
                    Home
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => handleCloseNavMenu('about')}>
                <Typography textAlign='center'>
                  <Link smooth to='#about' className={classes.link}>
                    About
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => handleCloseNavMenu('skills')}>
                <Typography textAlign='center'>
                  <Link smooth to='#skills' className={classes.link}>
                    Skills
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => handleCloseNavMenu('experience')}>
                <Typography textAlign='center'>
                  <Link smooth to='#experience' className={classes.link}>
                    Experience
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => handleCloseNavMenu('portfolio')}>
                <Typography textAlign='center'>
                  <Link smooth to='#portfolio' className={classes.link}>
                    Portfolio
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => handleCloseNavMenu('contacts')}>
                <Typography textAlign='center'>
                  <Link smooth to='#contacts' className={classes.link}>
                    Contacts
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
