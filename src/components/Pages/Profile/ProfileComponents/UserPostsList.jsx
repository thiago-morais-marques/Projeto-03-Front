import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Typography, Box, Avatar, Icon,
} from '@mui/material';

const UserPostList = (props) => {
  const { posts } = props;
  return (
    <Card sx={{ height: '100%' }}>
      <Box pt={2} px={2}>
        <Typography variant="h6" fontWeight="medium">
          Posts do usuário
        </Typography>
      </Box>
      <Box p={2}>
        <Box
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
        >
          { posts.map(({ image, title }) => (
            <Box
              key={title}
              component="li"
              display="flex"
              alignItems="center"
              py={1}
              sx={{
                borderTop: 1,
                borderColor: 'divider',
                bgcolor: 'background.paper',
              }}
            >
              <Box mr={2}>
                <Avatar
                  src={image}
                  variant="rounded"
                  alt="something here"
                  sx={{ width: 56, height: 56 }}
                />
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="center"
              >
                <Typography variant="button" fontWeight="medium">
                  {title}
                </Typography>
              </Box>
              <Box ml="auto">
                <Icon color="primary">edit</Icon>
                <Icon color="primary">delete</Icon>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Card>
  );
};

UserPostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UserPostList;
