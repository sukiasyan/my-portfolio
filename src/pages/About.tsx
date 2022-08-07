import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import background from "../img/about.jpeg";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(() => ({
  main: {
    display: "flex",
    overflow: "hidden",
    color: "#6e6e6e",
    backgroundImage: `url(${background})`,
    "&:before": {
      backgroundImage: `url(${background})`,
      opacity: 0.5,
    },
  },
}));

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  px: 5,
};

function About() {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.main} id="about">
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Box sx={item}>
              <Typography variant="h4" gutterBottom component="div">
                About Me
              </Typography>
              <Typography variant="h4" gutterBottom component="div">
                HAKOB SUKIASYAN
              </Typography>
              <Typography variant="body2" gutterBottom component="div">
                WEB & MOBILE DEVELOPER
              </Typography>
              <Typography variant="body2" gutterBottom component="div">
                I am a very responsible and hardworking person, who do
                everything possible to bring your product to your goal.
              </Typography>

              <Typography variant="body2" gutterBottom component="div">
                <b>DATE OF BIRTH:</b> 16 FEB 1994
              </Typography>
              <Typography variant="body2" gutterBottom component="div">
                <b>PHONE:</b> +374 55 244468
              </Typography>
              <Typography variant="body2" gutterBottom component="div">
                <b>EMAIL:</b> ADKIRAKOSYAN[@]GMAIL.COM
              </Typography>
              <Typography variant="body2" gutterBottom component="div">
                <b>ADDRESS:</b> MINAS AVETISYAN 1 STREET, BUILDING 51,
                APARTMENTS 21, YEREVAN ARMENIA.
              </Typography>
              <Typography variant="body2" display="block">
                <b>WEBSITE:</b> HTTP://ASHOTKIRAKOSYAN.ML
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
