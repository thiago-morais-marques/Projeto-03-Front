import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid, Container } from '@mui/material';
import { getAllPosts } from '../../../service/api';
import TemplatePage from '../../Templates/TemplatePage';
import MainPost from './HomeComponents/MainPost';
import CardPost from '../../Misc/CardPost';
import HeroImage from '../../Misc/HeroImage';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const postsResponse = await getAllPosts();
    setPosts(postsResponse);
  }, []);

  const mainPostIndex = Math.floor(Math.random() * setPosts.length);

  return posts.length > 0 && (
    <div>
      <HeroImage />
      <CssBaseline />
      <Container
        maxWidth="lg"
        style={{
          dixplay: 'flex',
        }}
      >
        <TemplatePage setPosts={setPosts}>
          <MainPost post={{ ...posts[mainPostIndex] }} />
          <Grid
            container
            spacing={4}
            mb={4}
          >
            {posts.map((post, i) => {
              if (i !== mainPostIndex) {
                const decodedImage = `data:image/png;base64,${post.imageURL}`;
                return decodedImage.length > 0 && (
                  <CardPost key={post._id} post={post} decodedImage={decodedImage} />
                );
              }
              return null;
            })}
          </Grid>
        </TemplatePage>
      </Container>
    </div>
  );
};

export default Home;
