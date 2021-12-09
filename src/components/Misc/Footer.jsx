import * as React from 'react';
import {
  Box, Container, Typography, Grid, Link,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Copyright from './FooterComponents/Copyright';
import sections from '../../assets/global/sections';

const Footer = () => {
  return (
    <Container maxWidth="lg">
      <Box
        component="footer"
        sx={{
          bgcolor: 'background.paper',
          py: 1,
          px: 3,
          mt: 4.5,
          mb: 0,
          position: 'relative',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography
              variant="subtitle2"
              align="center"
              color="text.secondary"
              component="h4"
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                pt: 2,
                pb: 0.5,
              }}
            >
              Páginas:
            </Typography>
            <Typography
              variant="body2"
              align="center"
              color="text.secondary"
              component="p"
              sx={{
                py: 1,
              }}
            >
              {sections.map((section) => (
                <li key={section.title}>
                  <Link
                    color="inherit"
                    noWrap
                    href={section.url}
                  >
                    {section.title}
                  </Link>
                </li>
              ))}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="subtitle2"
              align="center"
              color="text.secondary"
              component="h4"
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                pt: 2,
                pb: 0.5,
              }}
            >
              Registre-se:
            </Typography>
            <Typography
              variant="body2"
              align="center"
              color="text.secondary"
              component="p"
              sx={{
                py: 1,
              }}
            >
              <li>
                <Link
                  color="inherit"
                  noWrap
                  href="/login"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  color="inherit"
                  noWrap
                  href="/"
                >
                  Sign Up
                </Link>
              </li>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="subtitle2"
              align="center"
              color="text.secondary"
              component="h4"
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                pt: 2,
                pb: 0.5,
              }}
            >
              Siga-nos:
            </Typography>
            <Grid
              container
              direction="row"
              alignItems="center"
              sx={{
                justifyContent: 'space-evenly',
                px: 10,
                pt: 2,
              }}
            >
              <FacebookIcon
                fontSize="large"
                sx={{
                  color: 'rgb(25, 118, 210)',
                }}
              />
              <InstagramIcon
                fontSize="large"
                sx={{
                  color: '#E4405F',
                }}
              />
              <LinkedInIcon
                fontSize="large"
                sx={{
                  color: 'rgb(25, 118, 210)',
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Footer;
