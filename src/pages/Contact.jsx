import React from "react";
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Container sx={{ paddingTop: 4 }}>
      <Paper sx={{ padding: "20px", margingTop: "20px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          CONTACT
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Name" name="name" required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Email" name="email" required />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                multiline
                rows={4}
                fullWidth
                label="Massage"
                name="massage"
                required
              />
            </Grid>
            <Grid item>
              <Button variant="contained"> Submit</Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Contact;
