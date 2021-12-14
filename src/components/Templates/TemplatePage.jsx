import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Toolbar, TextField, Box, Typography, Grid, Link,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../../assets/styles/Logo.css';
import { getOneUser, searchPosts } from '../../service/api';
import LoginSignUpButtons from './HeaderComponents/LoginSignUpButtons';
import AvatarIcon from './HeaderComponents/AvatarIcon';
import MuiSnackBar from '../Misc/Snackbar';
import Copyright from './FooterComponents/Copyright';

const TemplatePage = ({ children }, props) => {
  const {
    setPosts, searchFilter, setSearchFilter,
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
            className="logo"
            href="/"
          >
            Iron Blogger
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
      {children}
      <Box
        container
        item
        component="footer"
        sx={{
          bgcolor: 'background.paper',
          py: 1,
          px: 3,
          m: 0,
          position: 'relative',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography
              variant="subtitle2"
              align="center"
              color="text.secondary"
              component="h4"
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                pt: 2,
                pb: 0.5,
              }}
            >
              Páginas:
            </Typography>
            <Typography
              variant="body2"
              align="center"
              color="text.secondary"
              component="p"
              sx={{
                py: 1,
              }}
            >
              {sections.map((section) => (
                <li key={section.title}>
                  <Link
                    color="inherit"
                    noWrap
                    href={section.url}
                  >
                    {section.title}
                  </Link>
                </li>
              ))}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="subtitle2"
              align="center"
              color="text.secondary"
              component="h4"
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                pt: 2,
                pb: 0.5,
              }}
            >
              Registre-se:
            </Typography>
            <Typography
              variant="body2"
              align="center"
              color="text.secondary"
              component="p"
              sx={{
                py: 1,
              }}
            >
              <li>
                <Link
                  color="inherit"
                  noWrap
                  href="/login"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  color="inherit"
                  noWrap
                  href="/register"
                >
                  Sign Up
                </Link>
              </li>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="subtitle2"
              align="center"
              color="text.secondary"
              component="h4"
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                pt: 2,
                pb: 0.5,
              }}
            >
              Siga-nos:
            </Typography>
            <Grid
              container
              direction="row"
              alignItems="center"
              sx={{
                justifyContent: 'space-evenly',
                px: 10,
                pt: 2,
              }}
            >
              <FacebookIcon
                fontSize="large"
                sx={{
                  color: 'rgb(25, 118, 210)',
                }}
              />
              <InstagramIcon
                fontSize="large"
                sx={{
                  color: '#E4405F',
                }}
              />
              <LinkedInIcon
                fontSize="large"
                sx={{
                  color: 'rgb(25, 118, 210)',
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Copyright />
      </Box>
    </>
  );
};

TemplatePage.defaultProps = {
  children: '',
};

TemplatePage.propTypes = {
  children: PropTypes.node,
  setPosts: PropTypes.func.isRequired,
  searchFilter: PropTypes.string.isRequired,
  setSearchFilter: PropTypes.func.isRequired,
};

export default TemplatePage;
