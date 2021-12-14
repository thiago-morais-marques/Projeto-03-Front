import * as React from 'react';
import { Typography, Link } from '@mui/material';

const Copyright = () => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
    >
      {'© '}
      <Link
        color="inherit"
        href="/"
      >
        Iron Blogger
      </Link>
      {', '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
};

export default Copyright;
