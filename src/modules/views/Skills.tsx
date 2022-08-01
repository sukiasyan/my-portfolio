import * as React from "react";
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

const Skills = () => {
  return (
    <>
      <Container component="section" sx={{ mt: 8 }}>
        <Typography variant="subtitle1">MY SKILLS VALUES</Typography>
      </Container>
      <Stack direction="row">
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
    </>
  );
};

export default Skills;
