import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "../components/Toolbar";
import { Avatar, Tooltip } from "@mui/material";

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: "#ED6C03" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24 }}
          >
            Hakob Sukiasyan
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Tooltip title="Hakob Sukiasyan">
              <Avatar alt="Hakob Sukiasyan" src="/static/images/avatar/2.jpg" />
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
