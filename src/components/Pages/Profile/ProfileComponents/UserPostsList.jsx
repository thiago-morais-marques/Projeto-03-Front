import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Typography, Box, Avatar, Icon,
} from '@mui/material';

const UserPostList = ({ posts }) => {
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
          {posts.length === 0
            ? <Typography p={10} alignSelf="center">Posts não encontrados</Typography>
            : posts.map((post) => {
              const decodedImage = `data:image/png;base64,${post.imageURL}`;
              return post.imageURL.length > 0 && (
                <Box
                  key={post._id}
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
                      src={decodedImage}
                      variant="rounded"
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
                      {post.title}
                    </Typography>
                  </Box>
                  <Box ml="auto">
                    <Icon color="primary">edit</Icon>
                    <Icon color="primary">delete</Icon>
                  </Box>
                </Box>
              );
            })}
        </Box>
      </Box>
    </Card>
  );
};

UserPostList.defaultProps = {
  posts: [],
};

UserPostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};

export default UserPostList;
