import React from "react";
import { Paper, Grid, Typography, Container } from "@mui/material";

const About = () => {
  return (
    <Container sx={{ paddingTop: 6 }}>
      <Paper sx={{ padding: "20px", marginTop: "2px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <img
              src="../../src/images/profile pic 2.gif"
              alt="Profile pic"
              style={{ width: "100%", borderRadius: "50%" }}
            ></img>
          </Grid>
          <Grid xs={12} sm={8}>
            <Typography variant="h5" paragraph>
              ABOUT ME
            </Typography>
            <Typography variant="body1" paragraph>
              I'm a Full-stack web developer based in Finland, crafting digital
              solutions with passion and precision.
            </Typography>
            <Typography variant="h6" paragraph>
              My Journey
            </Typography>
            <Typography variant="body1" paragraph>
              I work hard so other can learn programming
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default About;
