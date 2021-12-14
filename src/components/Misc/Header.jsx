import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import {
  Toolbar, TextField, Box, Typography, Link,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '../../assets/styles/Logo.css';
import { getOneUser, searchPosts } from '../../service/api';
import LoginSignUpButtons from '../Templates/HeaderComponents/LoginSignUpButtons';
import AvatarIcon from '../Templates/HeaderComponents/AvatarIcon';
import MuiSnackBar from './Snackbar';

const Header = (props) => {
  const {
    logo, setPosts, searchFilter, setSearchFilter,
  } = props;

  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(async () => {
    const token = localStorage.getItem('token');
    console.log('token recebido? R: ', token ? 'Sim' : 'Não');
    if (token) {
      const userResponse = await getOneUser(token);
      setUserInfo(userResponse);
      setLoggedIn(true);
    }
  }, []);

  useEffect(async () => {
    try {
      if (searchFilter === '') {
        setSearchFilter('');
      }
      const foundPosts = await searchPosts(searchFilter);
      if (foundPosts.length === 0) {
        setSearchFilter('');
        throw new Error();
      }
      setPosts(foundPosts);
    } catch (error) {
      setOpen(true);
    }
  }, [searchFilter]);

  const logout = () => {
    const tokenDelete = localStorage.clear('token');
    setLoggedIn(false);
    console.log('comando de logout');
    return tokenDelete;
  };

  const sections = [
    { title: 'Finanças', url: '#' },
    { title: 'Tecnologia', url: '#' },
    { title: 'Sustentabilidade', url: '#' },
  ];

  return (
    <>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          bgcolor: 'background.paper',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            mb: 1,
          }}
        >
          <SearchIcon
            sx={{
              color: 'action.active',
              mr: 1,
              my: 0.5,
            }}
          />
          <TextField
            id="search-bar"
            label="Pesquisar"
            type="search"
            // value={search}
            variant="standard"
            // onChange={handleChange}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                console.log('Enter key pressed');
                setSearchFilter(e.target.value);
              }
            }}
          />
          <MuiSnackBar type="error" msg="Posts não encontrados" open={open} setOpen={setOpen} />
        </Box>
        <Typography
          className="logo"
          component="h2"
          variant="h5"
          color="inherit"
          textAlign="center"
          noWrap
          sx={{
            flex: 1,
          }}
        >
          <Link
            className="logo-link"
            href="/"
          >
            {logo}
          </Link>
        </Typography>
        { loggedIn
          ? <AvatarIcon user={{ ...userInfo }} logout={logout} />
          : <LoginSignUpButtons /> }

      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{
          justifyContent: 'space-between',
          overflowX: 'auto',
          bgcolor: 'background.paper',
        }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body3"
            href={section.url}
            sx={{
              py: 1,
              px: 10,
              flexShrink: 0,
            }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </>
  );
};

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  setPosts: PropTypes.func.isRequired,
  searchFilter: PropTypes.string.isRequired,
  setSearchFilter: PropTypes.func.isRequired,
};

export default Header;
