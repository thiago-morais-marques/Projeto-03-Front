import React, { useEffect, useState } from 'react';
import {
  CssBaseline, Grid, Container, Paper, Box, Typography, Link,
  CardActionArea, Card, CardContent, CardMedia,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import Header from '../../Misc/Header';
import Footer from '../../Misc/Footer';
// import MainPost from './homeComponents/MainPost';
import CardPost from './homeComponents/CardPost';
import HeroImage from '../../Misc/HeroImage';
import {
  theme, sections, mainPost, cardPosts,
} from '../../Misc/global/globalVariables';
// import { getAllPosts } from '../../../service/api';
import '../../Misc/styles/Logo.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(posts);
  return (
    <ThemeProvider theme={theme}>
      <HeroImage />
      <CssBaseline />
      <Container
        maxWidth="lg"
      >
        <Header
          logo="Iron Blogger"
          sections={sections}
          className="logo"
        />
        <Paper
          sx={{
            position: 'relative',
            backgroundColor: 'grey.800', // background-color
            color: '#fff',
            mb: 4, // margin-bottom
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${mainPost.image})`,
          }}
        >
          <img style={{ display: 'none' }} src={mainPost.image} alt={mainPost.title} />
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
                  {mainPost.title}
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  {mainPost.description}
                </Typography>
                <Link variant="subtitle1" href="#">
                  Continue lendo…
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <Grid
          container
          spacing={4}
          style={{
            paddingBottom: '4.5rem',
          }}
        >
          {cardPosts.map((post) => {
            {/* const decodedImage = `data:image/png;base64,${post.imageURL}`; */}
            return (
              <Grid item xs={12} md={6}>
                <CardActionArea component="a" href="#">
                  <Card sx={{ display: 'flex' }}>
                    <CardContent sx={{ flex: 1 }}>
                      <Typography component="h2" variant="h5">
                        {post.title}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {post.createdAt}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {post.description}
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        Continue lendo...
                      </Typography>
                    </CardContent>
                    {/* <CardMedia
                      component="img"
                      sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                      image={decodedImage}
                      alt={post.title}
                    /> */}
                  </Card>
                </CardActionArea>
              </Grid>
            );
          })}
        </Grid>
        <Footer
          title="Footer"
          description="Something here to give the footer a purpose!"
        />
      </Container>
    </ThemeProvider>
  );
};

export default Home;
