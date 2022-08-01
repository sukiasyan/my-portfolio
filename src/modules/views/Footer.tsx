import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { Container, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Copyright() {
  return (
    <Typography variant="caption">
      <Link
        color="inherit"
        href="https://mui.com/"
        sx={{
          textDecoration: "none",
        }}
      >
        © H. Sukiasyan {new Date().getFullYear()}
      </Link>
    </Typography>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  mr: 1,
  "&:hover": {
    backgroundColor: "warning.dark",
  },
};

export default function Footer() {
  return (
    <>
      <Stack
        direction="row"
        spacing={15}
        alignItems="center"
        justifyContent="center"
        justifyItems="center"
        textAlign="center"
        sx={{
          p: 2,
          backgroundColor: "#454444",
          color: "white",
          textDecoration: "none",
        }}
      >
        <Stack sx={{ display: "flex" }} direction="row">
          <Box component="a" href="https://mui.com/" sx={iconStyle}>
            <FacebookIcon />
          </Box>
          <Box component="a" href="https://twitter.com/MUI_hq" sx={iconStyle}>
            <TwitterIcon />
          </Box>
          <Box component="a" href="https://twitter.com/MUI_hq" sx={iconStyle}>
            <LinkedInIcon />
          </Box>
          <Box component="a" href="https://twitter.com/MUI_hq" sx={iconStyle}>
            <GitHubIcon />
          </Box>
        </Stack>

        <Copyright />
      </Stack>
    </>
  );
}
