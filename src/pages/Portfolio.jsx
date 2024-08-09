import {
  Container,
  Paper,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from "@mui/material";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Memory Game",
    description: "Create a Memory puzzle game (HTML, CSS and JavaScript)",
    imgSrc: "../../src/images/GameProject.png",
  },
  {
    id: 2,
    title: "Wacky Tales Weaver Game",
    description: "Wacky Tales Weaver Game (HTML, CSS and JavaScript)",
    imgSrc: "../../src/images/Project---Wacky-Tales-Weaver.png",
  },
  {
    id: 3,
    title: "Weather Dashboard Application",
    description:
      "Weather Dashboard Application Using (HTML, CSS and JavaScript)",
    imgSrc: "../../src/images/Weather-Dashboard-Application.png",
  },
  {
    id: 4,
    title: "E commerse website",
    description: "Project description 2",
    imgSrc: "../../src/images/project-4.png",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Project description",
    imgSrc: "../../src/images/project-5.png",
  },
  {
    id: 6,
    title: "Project 6",
    description: "Project description 2",
    imgSrc: "../../src/images/project-6.png",
  },
];
const Portfolio = () => {
  return (
    <Container sx={{ paddingTop: 4 }}>
      <Paper>
        <Typography
          sx={{ paddingTop: 2, paddingBottom: 2 }}
          variant="h5"
          align="center"
        >
          PORTFOLIO
        </Typography>
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key="">
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.imgSrc}
                    alt="project.title"
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom component="div">
                      {project?.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project?.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default Portfolio;
