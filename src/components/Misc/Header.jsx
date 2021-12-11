import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import {
  Toolbar, TextField, Box, Typography, Link,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import sections from '../../assets/global/sections';
import '../../assets/styles/Logo.css';
import { getOneUser, searchPosts } from '../../service/api';
import LoginSignUpButtons from './HeaderComponents/LoginSignUpButtons';
import AvatarIcon from './HeaderComponents/AvatarIcon';

const Header = (props) => {
  const { logo } = props;

  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [search, setSearch] = useState('');

  useEffect(async () => {
    const token = localStorage.getItem('token');
    console.log('token recebido? R: ', token ? 'Sim' : 'Não');
    if (token) {
      const userResponse = await getOneUser(token);
      setUserInfo(userResponse);
      setLoggedIn(true);
    }
  }, []);

  const searchInput = async () => {
    try {
      const foundPosts = await searchPosts(search);
      // Se der algum erro com status DIFERENTE de 401, vai cair no catch abaixo

      setPosts(foundPosts);
    } catch (error) {
      // setShow(true);
    }
  };

  const handleChange = async (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    searchInput();
  }, [search]);
  // Chama a callback quando o componente termina de montar pela primeira vez
  // OU quando a variavel searchTitle é atualizada

  const logout = () => {
    const tokenDelete = localStorage.clear('token');
    setLoggedIn(false);
    console.log('comando de logout');
    return tokenDelete;
  };

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
            type="search"
            placeholder="Pesquisar"
            value={search}
            onChange={handleChange}
            variant="standard"
            InputLabelProps={{
              shrink: false,
            }}
          />
        </Box>
        <Typography
          className="logo"
          component="h2"
          variant="h5"
          color="inherit"
          noWrap
          sx={{
            flex: 1,
            ml: '17%',
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
};

export default Header;
