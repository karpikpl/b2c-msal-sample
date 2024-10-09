import React from 'react';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from 'react-router-dom';

export function Page3() {
  return (
    <div>
      <Typography variant="h4">Page 3</Typography>
      <Button component={RouterLink} to="/" variant="contained" color="primary">Go to Home</Button>
    </div>
  );
}
