import React from 'react';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from 'react-router-dom';

export function Page2() {
  return (
    <div>
      <Typography variant="h4">Page 2</Typography>
      <Button component={RouterLink} to="/page3" variant="contained" color="primary">Go to Page 3</Button>
    </div>
  );
}
