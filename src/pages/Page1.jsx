import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export function Page1() {
  return (
    <div>
      <Typography id="page1" variant="h4">Welcome to Page 1</Typography>
      <Button component={RouterLink} to="/page2" variant="contained" color="primary">Go to Page 2</Button>
    </div>
  );
}
