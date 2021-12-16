import React, { useEffect, useState } from 'react';
import {
  Card, Grid, Box, Typography, Avatar, Container, CircularProgress, Backdrop,
} from '@mui/material';
import { getOneUser } from '../../../service/api';
import TemplatePage from '../../Templates/TemplatePage';
import HeroImage from '../../Misc/HeroImage';
import UserPostsList from './ProfileComponents/UserPostsList';
import ProfileInfoCard from './ProfileComponents/ProfileInfoCard';
import CreateNewPostCard from './ProfileComponents/CreateNewPostCard';

const Profile = () => {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const token = localStorage.getItem('token');
    const userResponse = await getOneUser(token);
    setUserInfo(userResponse);
  }, []);

  const decodedImage = `data:image/png;base64,${userInfo.profilePicture}`;

  useEffect(() => {
    if (userInfo.profilePicture) {
      setLoading(false);
    }
  }, [decodedImage]);

  return (
    <div>
      <HeroImage />
      <Container maxWidth="lg">
        { loading
          ? (
            <Backdrop
              sx={{ color: '#fff', zIndex: 5000 }}
              open={!loading}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          )
          : (
            <TemplatePage>
              <Card
                sx={{
                  mx: 0,
                  my: 5,
                  py: 5,
                  px: 10,
                  flex: 15,
                }}
              >
                <Grid container item display="flex">
                  <Grid
                    container
                    position="relative"
                    spacing={2}
                    justifyContent="center"
                    pb={3}
                    sx={{
                      borderBottom: 1,
                      borderColor: 'divider',
                      mx: 0,
                      display: 'flex',
                      alugnItems: 'center',
                    }}
                  >
                    <Grid item>
                      <Avatar src={decodedImage} />
                    </Grid>
                    <Grid item alignSelf="center">
                      <Typography variant="h5" fontWeight="medium">
                        {userInfo.name}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Box mb={3} item container>
                  <Grid container spacing={5} justifyContent="space-between" pt={4}>
                    <Grid xs={12} xl={5} item container spacing={3} display="flex">
                      <Grid
                        item
                        sx={{
                          flex: 'auto',
                        }}
                      >
                        <ProfileInfoCard title="Detalhes da Conta" userInfo={userInfo} />
                      </Grid>
                      <Grid container item>
                        <Box sx={{ flex: 'auto' }}>
                          <CreateNewPostCard />
                        </Box>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} xl={7}>
                      <UserPostsList posts={userInfo.posts} />
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </TemplatePage>
          )}
      </Container>
    </div>
  );
};

export default Profile;
