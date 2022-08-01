import { Typography } from "@mui/material";
import { Box } from "@mui/system";
// import ProductHeroLayout from "./ProductHeroLayout";

export default function IntroPage() {
  return (
    <Box>
      <Typography
        color="inherit"
        align="center"
        variant="h2"
        sx={{ pt: 12, color: "#808080" }}
      >
        WEB+ MOBILE+ ENTHUSIASTIC+ HARD WORKING+
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="body1"
        sx={{ p: 4, color: "#808080" }}
      >
        Hello, I’m Hakob Sukiasyan. I Have {">"} 10 years of experience in Web
        and Mobile development. I am worked on a variety of brands and with
        agencies both big and small.
      </Typography>
    </Box>
  );
}
