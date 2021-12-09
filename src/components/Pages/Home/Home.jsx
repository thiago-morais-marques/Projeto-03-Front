import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid, Container } from '@mui/material';
import Header from '../../Misc/Header';
import Footer from '../../Misc/Footer';
import MainPost from './HomeComponents/MainPost';
import CardPost from './HomeComponents/CardPost';
import HeroImage from '../../Misc/HeroImage';
import { getAllPosts } from '../../../service/api';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const postsResponse = await getAllPosts();
    setPosts(postsResponse);
  }, []);

  const mainPostIndex = Math.floor(Math.random() * posts.length);

  return posts.length > 0 && (
    <div>
      <HeroImage />
      <CssBaseline />
      <Container
        maxWidth="lg"
        style={{
          flex: 1,
        }}
      >
        <Container
          style={{
            flex: 1,
          }}
        >
          <Header
            logo="Iron Blogger"
            className="logo"
          />
          <MainPost post={{ ...posts[mainPostIndex] }} />
          <Grid
            container
            spacing={4}
          >
            {posts.map((post, i) => {
              if (i !== mainPostIndex) {
                const decodedImage = `data:image/png;base64,${post.imageURL}`;
                return (
                  <CardPost key={post._id} post={post} decodedImage={decodedImage} />
                );
              }
              return null;
            })}
          </Grid>
        </Container>
        <Footer />
      </Container>
    </div>
  );
};

export default Home;
