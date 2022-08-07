import Box from "@mui/material/Box";
import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(() => ({
  main: {
    color: "#6e6e6e",
  },
}));

const LinearProgressWithLabel = (
  props: LinearProgressProps & { value: number; description: string }
) => {
  return (
    <Stack direction="column">
      <Box sx={{ p: 1 }}>
        <Typography>{props.description}</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            variant="determinate"
            sx={{
              height: 20,
              borderRadius: 5,
            }}
            {...props}
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    </Stack>
  );
};

const CircularProgressWithLabel = (
  props: CircularProgressProps & { value: number }
) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
      }}
    >
      <CircularProgress variant="determinate" size={130} {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
};

const Skills = () => {
  const classes = useStyles();

  return (
    <>
      <Box
        textAlign="center"
        sx={{ mt: 8 }}
        className={classes.main}
        id="skills"
      >
        <Typography variant="h5">MY SKILLS VALUES</Typography>
      </Box>
      <Stack direction="row" className={classes.main}>
        <Container component="section" sx={{ mt: 8, mb: 4 }}>
          <Typography variant="subtitle1">TECHNICAL SKILLS</Typography>
          <LinearProgressWithLabel
            value={98}
            description="Html, CSS, JS, TypeScript"
          />
          <br />
          <LinearProgressWithLabel value={99} description="ReactJS" />
          <br />
          <LinearProgressWithLabel value={80} description="SolidJS" />
          <br />
          <LinearProgressWithLabel value={70} description="React Native" />
        </Container>
        <Container component="section" sx={{ mb: 4, pt: 8 }}>
          <Typography variant="subtitle1">KNOWLEDGE</Typography>
          <List sx={{ pt: 3 }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <EastOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Node JS" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <EastOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Unix, Linux" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <EastOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="APP Architecture" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <EastOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="WEB Server, RestApi " />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <EastOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Team Leading" />
              </ListItemButton>
            </ListItem>
          </List>
        </Container>
      </Stack>
      <Box textAlign="center" sx={{ mt: 8 }} className={classes.main}>
        <Typography variant="h5">LANGUAGES</Typography>
      </Box>
      <Stack
        direction="row"
        sx={{ m: 8 }}
        spacing={4}
        justifyContent="space-between"
        className={classes.main}
      >
        <Box textAlign="center">
          <CircularProgressWithLabel value={90} />
          <Typography>English</Typography>
        </Box>

        <Box textAlign="center">
          <CircularProgressWithLabel value={99} />
          <Typography>Armenian</Typography>
        </Box>
        <Box textAlign="center">
          <CircularProgressWithLabel value={70} />
          <Typography>Russian</Typography>
        </Box>
        <Box textAlign="center">
          <CircularProgressWithLabel value={20} />
          <Typography>Dutch</Typography>
        </Box>
      </Stack>
    </>
  );
};

export default Skills;
