import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, Divider, Box, Typography, Grid,
} from '@mui/material';
import DeleteAccountButton from './ProfileInfoCardComponents/DeleteAccountButton';
import EditAccountButton from './ProfileInfoCardComponents/EditAccountButton';
import FormModal from './ProfileInfoCardComponents/FormModal';

const ProfileInfoCard = ({ title, userInfo }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card sx={{ height: '100%' }}>
      <Grid
        container
        display="flex"
        alignContent="space-between"
        sx={{
          height: '100%', flexDirection: 'column',
        }}
      >
        <Grid sx={{ flex: 1 }}>
          <Box
            display="flex"
            item
            container
            justifyContent="space-between"
            alignItems="center"
            pt={2}
            px={2}
          >
            <Typography variant="h6" fontWeight="medium">
              {title}
            </Typography>
          </Box>
          <Box p={2} item container sx={{ flex: 1 }}>
            <Divider />
            <Grid
              item
              container
              py={1}
              pr={2}
            >
              <Grid item container display="flex" pt={1}>
                <Typography fontWeight="bold">
                  Nome completo:&nbsp;
                </Typography>
                <Typography fontWeight="regular" color="text">
                  {userInfo.name}
                </Typography>
              </Grid>
              <Grid item container display="flex" pt={1}>
                <Typography fontWeight="bold">
                  Nome de usuário:&nbsp;
                </Typography>
                <Typography fontWeight="regular" color="text">
                  {userInfo.userName}
                </Typography>
              </Grid>
              <Grid display="flex" pt={1}>
                <Typography fontWeight="bold">
                  Email:&nbsp;
                </Typography>
                <Typography fontWeight="regular" color="text">
                  {userInfo.email}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          container
          justifyContent="space-evenly"
          sx={{ mb: 2 }}
        >
          <EditAccountButton item handleShow={handleShow} />
          <FormModal show={show} handleClose={handleClose} />
          <DeleteAccountButton item />
        </Grid>
      </Grid>
    </Card>
  );
};

// Typechecking props for the ProfileInfoCard
ProfileInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  userInfo: PropTypes.shape({
    _id: PropTypes.string,
    userName: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    profilePicture: PropTypes.string,
    role: PropTypes.string,
    active: PropTypes.bool,
    posts: PropTypes.arrayOf(PropTypes.object),
    comments: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProfileInfoCard;
