import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box, Avatar, Typography, IconButton, Menu, MenuItem, Divider, ListItemIcon, Tooltip,
} from '@mui/material';
import Logout from '@mui/icons-material/Logout';
import PostAddIcon from '@mui/icons-material/PostAdd';

const AvatarIcon = ({ logout, userInfo, decodedImage }) => {
  const [anchor, setAnchor] = useState(null);

  const open = Boolean(anchor);

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="subtitle1"
          color="text.secondary"
          component="p"
          sx={{
            ml: '4rem',
          }}
        >
          {userInfo.userName}
        </Typography>
        <Tooltip title="Configurações de Conta">
          <IconButton onClick={handleClick} size="small" sx={{ mx: 1 }}>
            <Avatar
              sx={{
                width: 32,
                height: 32,
              }}
              src={decodedImage}
              alt={userInfo.name}
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchor}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link
          to={`/profile/${userInfo._id}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <MenuItem>
            <Avatar
              src={decodedImage}
              alt={userInfo.name}
            />
            Minha Conta
          </MenuItem>
        </Link>
        <Divider />
        <Link to="/createpost" style={{ textDecoration: 'none', color: 'inherit' }}>
          <MenuItem href="/createpost">
            <ListItemIcon>
              <PostAddIcon fontSize="small" />
            </ListItemIcon>
            Criar um novo post
          </MenuItem>
        </Link>
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

AvatarIcon.propTypes = {
  logout: PropTypes.func.isRequired,
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
  decodedImage: PropTypes.string.isRequired,
};

export default AvatarIcon;
