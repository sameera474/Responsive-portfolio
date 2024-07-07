import React from "react";
import { Button, Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(5,0,0,1)), url(${"https://images.unsplash.com/photo-1487338875411-8880f74114a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
        height: 600,
        width: "100vw",
        display: "flex",
        backgroundSize: "cover",
        backgroundPosition: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" gutterBottom>
        Welcome to my portfolio!
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        I'm a full stack developer, currently working remotely. My primary focus
        is on web development using React and Node.js.
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        I'm always looking for new opportunities to learn and grow.
      </Typography>
      <Button variant="contained" colour="primary">
        Contact me
      </Button>
    </Box>
  );
};

export default Home;
