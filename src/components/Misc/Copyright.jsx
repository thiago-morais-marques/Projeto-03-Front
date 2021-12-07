import * as React from 'react';
import { Typography, Link } from '@mui/material';
import linksUrl from './global/links';

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
        href={linksUrl.home}
      >
        Iron Blogger
      </Link>
      {', '}
      {new Date().getFullYear()}
      , todos os direitos reservados.
    </Typography>
  );
};

export default Copyright;
