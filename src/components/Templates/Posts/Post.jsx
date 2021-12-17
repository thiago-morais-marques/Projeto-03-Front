import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container, Card, Divider, Grid, CircularProgress
} from '@mui/material';
import { getOnePost } from '../../../service/api';
import '../../../assets/styles/Post.css';
// import img from '../../../assets/images/background.jpg';
import PostComment from './Comments/PostComment';
import TemplatePage from '../TemplatePage';
import HeroImage from '../../Misc/HeroImage';

const Post = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  console.log(id);

  useEffect(async () => {
    const userResponse = await getOnePost(id);
    console.log(userResponse);
    setPost(userResponse);
    setLoading(false);
  }, []);

  console.log(post);

  const decodedImage = `data:image/png;base64,${post.imageURL}`;

  useState(() => {
    if (post.imageURL) {
      setLoading(false);
    }
  }, [decodedImage]);

  return !loading && (
    <div>
      <HeroImage />
      <Container maxWidth="lg">
        <TemplatePage>
          <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
            <Grid container mt={4} mb={1}>
              <Card sx={{ display: 'flex', flexDirection: 'column' }}>
                <h1 className="title">
                  {post.title}
                </h1>
                <Divider sx={{ mx: 12 }} />
                <Grid
                  item
                  container
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  px={12}
                  pb={4}
                >
                  <img className="post-img" src={decodedImage} alt="post" />
                  <p className="text-content">
                    {post.text}
                  </p>
                </Grid>
              </Card>
            </Grid>
            <Card sx={{ display: 'flex', flexDirection: 'column', mb: 4 }}>
              {!loading
                ? <PostComment post={post} />
                : <CircularProgress sx={{ alignSelf: 'center' }} /> }
            </Card>
          </Grid>
        </TemplatePage>
      </Container>
    </div>
  );
};

export default Post;
