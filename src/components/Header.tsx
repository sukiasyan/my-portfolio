import makeStyles from "@mui/styles/makeStyles";
import { HashLink as Link } from "react-router-hash-link";
import {
  AppBar,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ED6C03",
    boxShadow: "none",
  },
  link: {
    textDecoration: "none",
    color: "#6e6e6e",
  },
});

export const Header = () => {
  const classes = useStyles();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className={classes.root}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: "block",
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link smooth to="#introPage" className={classes.link}>
                    Home
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link smooth to="#about" className={classes.link}>
                    About
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to="/education" className={classes.link}>
                    Education
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link smooth to="#experience" className={classes.link}>
                    Experience
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link smooth to="#skills" className={classes.link}>
                    Skills
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link smooth to="#contacts" className={classes.link}>
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
