import React from 'react';
import {
  Card, Grid, Box, Typography, Avatar, Container,
} from '@mui/material';

import Header from '../../Misc/Header';
import Footer from '../../Misc/Footer';
import HeroImage from '../../Misc/HeroImage';
import UserPostsList from './ProfileComponents/UserPostsList';
import ProfileInfoCard from './ProfileComponents/ProfileInfoCard';
import CreateNewPostCard from './ProfileComponents/CreateNewPostCard';

const Profile = () => {
  return (
    <div>
      <HeroImage />
      <Container maxWidth="lg">
        <Header
          logo="Iron Blogger"
          className="logo"
        />
        <Card
          sx={{
            mx: 0,
            my: 5,
            py: 5,
            px: 10,
          }}
        >
          <Grid container item display="flex">
            <Grid
              container
              position="relative"
              spacing={2}
              justifyContent="center"
              alignItems="center"
              pb={3}
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                mx: 0,
              }}
            >
              <Grid item>
                <Avatar src="" />
              </Grid>
              <Grid item>
                <Box>
                  <Typography variant="h5" fontWeight="medium">
                    Thiago Morais Marques
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Box mb={3} item container>
            <Grid container spacing={5} justifyContent="space-between" pt={4}>
              <Grid xs={12} xl={5} item container spacing={3} display="flex">
                <Grid
                  item
                  alignItens="center"
                  sx={{
                    flex: 'auto',
                  }}
                >
                  <ProfileInfoCard
                    title="Detalhes da Conta"
                    shadow
                  />
                </Grid>
                <Grid container item>
                  <Box sx={{ flex: 'auto' }}>
                    <CreateNewPostCard />
                  </Box>
                </Grid>
              </Grid>
              <Grid item xs={12} xl={7}>
                <UserPostsList posts="" />
              </Grid>
            </Grid>
          </Box>
        </Card>
        <Footer />
      </Container>
    </div>
  );
};

export default Profile;
