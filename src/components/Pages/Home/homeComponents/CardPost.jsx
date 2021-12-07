import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Typography, Grid, Card, CardActionArea, CardContent, CardMedia,
} from '@mui/material';

const CardPost = (props) => {
  const { post, decodedImage } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {new Date(post.createdAt).toLocaleDateString('pt-BR')}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue lendo...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={decodedImage}
            alt={post.title}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
};

CardPost.propTypes = {
  post: PropTypes.shape({
    createdAt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  decodedImage: PropTypes.string.isRequired,
};

export default CardPost;
