import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { linksUrl } from './global/globalVariables';

const Copyright = () => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
    >
      {'Copyright © '}
      <Link
        color="inherit"
        href={linksUrl.home}
      >
        Iron Blogger
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
};

export default Copyright;
