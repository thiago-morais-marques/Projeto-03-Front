import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Divider, Box, Typography, Grid,
} from '@mui/material';

import DeleteAccountButton from './ProfileInfoCardComponents/DeleteAccountButton';
import EditAccountButton from './ProfileInfoCardComponents/EditAccountButton';

const ProfileInfoCard = (props) => {
  const { title } = props;
  return (
    <Card sx={{ height: '100%' }}>
      <Grid
        container
        display="flex"
        alignContent="space-between"
        sx={{
          height: '100%',
        }}
      >
        <Grid>
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
          <Box p={2} item container>
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
                  Thiago Morais Marques
                </Typography>
              </Grid>
              <Grid item container display="flex" pt={1}>
                <Typography fontWeight="bold">
                  Nome de usuário:&nbsp;
                </Typography>
                <Typography fontWeight="regular" color="text">
                  thi.marques
                </Typography>
              </Grid>
              <Grid display="flex" pt={1}>
                <Typography fontWeight="bold">
                  Email:&nbsp;
                </Typography>
                <Typography fontWeight="regular" color="text">
                  xxx@xxx.com
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          container
          justifyContent="space-evenly"
          sx={{ flex: 1, mb: 2 }}
        >
          <EditAccountButton item />
          <DeleteAccountButton item />
        </Grid>
      </Grid>
    </Card>
  );
};

// Typechecking props for the ProfileInfoCard
ProfileInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ProfileInfoCard;
