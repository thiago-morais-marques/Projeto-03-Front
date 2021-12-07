import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid, Container } from '@mui/material';
import Header from '../../Misc/Header';
import Footer from '../../Misc/Footer';
import MainPost from './homeComponents/MainPost';
import CardPost from './homeComponents/CardPost';
import HeroImage from '../../Misc/HeroImage';
import { getAllPosts } from '../../../service/api';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const postsResponse = await getAllPosts();
    setPosts(postsResponse);
  }, []);

  return (
    <div>
      <HeroImage />
      <CssBaseline />
      <Container
        maxWidth="lg"
      >
        <Header
          logo="Iron Blogger"
          className="logo"
        />
        <MainPost post={{ ...posts[0] }} />
        <Grid
          container
          spacing={4}
        >
          {posts.map((post) => {
            const decodedImage = `data:image/png;base64,${post.imageURL}`;
            return (
              <CardPost key={post.title} post={post} decodedImage={decodedImage} />
            );
          })}
        </Grid>
        <Footer />
      </Container>
    </div>
  );
};

export default Home;
