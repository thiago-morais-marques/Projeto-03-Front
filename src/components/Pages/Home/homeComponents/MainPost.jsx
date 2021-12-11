import React from 'react';
import PropTypes from 'prop-types';
import {
  Paper, Typography, Grid, Link, Box,
} from '@mui/material';

const MainPost = (props) => {
  const { post } = props;

  const decodedImage = `data:image/png;base64,${post.imageURL}`;
  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${decodedImage})`,
      }}
    >
      <img style={{ display: 'none' }} src={decodedImage} alt={post.title} />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography>
            <Link variant="subtitle1" href="/">
              Continue lendo…
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

MainPost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainPost;
