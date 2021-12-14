import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, Grid, Container } from '@mui/material';
import { StoreContext } from '../../../context/store';
import TemplatePage from '../../Templates/TemplatePage';
import MainPost from './HomeComponents/MainPost';
import CardPost from '../../Misc/CardPost';
import HeroImage from '../../Misc/HeroImage';

const Home = ({ posts }) => {
  console.log(posts);
  const { [posts]: [data, setdata] } = useContext(StoreContext);
  const [searchFilter, setSearchFilter] = useState('');

  const mainPostIndex = Math.floor(Math.random() * data.length);

  return data.length > 0 && (
    <div>
      <HeroImage />
      <CssBaseline />
      <Container
        maxWidth="lg"
        style={{
          dixplay: 'flex',
        }}
      >
        <TemplatePage
          posts={data}
          setPosts={setdata}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        >
          <MainPost post={{ ...data[mainPostIndex] }} />
          <Grid
            container
            spacing={4}
            mb={4}
          >
            {data.map((post, i) => {
              if (i !== mainPostIndex) {
                const decodedImage = `data:image/png;base64,${post.imageURL}`;
                return (
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

Home.propTypes = {
  posts: PropTypes.string.isRequired,
};

export default Home;
