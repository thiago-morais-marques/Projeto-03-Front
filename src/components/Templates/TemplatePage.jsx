import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Toolbar, TextField, Box, Typography, Grid, Link,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { searchPosts, getOneUser } from '../../service/api';
import LoginSignUpButtons from './HeaderComponents/LoginSignUpButtons';
import AvatarIcon from './HeaderComponents/AvatarIcon';
import MuiSnackBar from '../Misc/Snackbar';
import '../../assets/styles/Logo.css';

const TemplatePage = ({ children, setPosts }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const verifyLoggedUser = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };
  const [isUserLogged, setIsUserLogged] = useState(verifyLoggedUser());

  useEffect(async () => {
    const token = localStorage.getItem('token');
    if (token) {
      const userResponse = await getOneUser(token);
      setUserInfo(userResponse);
      setIsUserLogged(true);
    }
  }, []);

  useEffect(async () => {
    try {
      if (search === '') {
        setSearch('');
      }
      const foundPosts = await searchPosts(search);
      if (foundPosts.length === 0) {
        setSearch('');
        throw new Error();
      }
      setPosts(foundPosts);
    } catch (error) {
      setOpen(true);
    }
  }, [search]);

  const decodedImage = `data:image/png;base64,${userInfo.profilePicture}`;

  useEffect(() => {
    if (userInfo.profilePicture) {
      setLoading(false);
    }
  }, [decodedImage]);

  const logout = () => {
    const tokenDelete = localStorage.clear('token');
    setIsUserLogged(false);
    navigate('/');
    return tokenDelete;
  };

  const sections = [
    { title: 'Finanças', url: '#' },
    { title: 'Tecnologia', url: '#' },
    { title: 'Sustentabilidade', url: '#' },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Grid
        sx={{
          height: '100vh',
          flex: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
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
              variant="standard"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  setSearch(e.target.value);
                }
              }}
            />
            <MuiSnackBar
              type="error"
              msg="Posts não encontrados"
              open={open}
              setOpen={setOpen}
            />
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
          { isUserLogged && !loading
            ? <AvatarIcon logout={logout} userInfo={userInfo} decodedImage={decodedImage} />
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
        <Grid
          container
          item
          component="footer"
          sx={{
            display: 'flex',
            bgcolor: 'background.paper',
            py: 1,
            px: 3,
            ml: 0,
            position: 'relative',
            alignSelf: 'flex-end',
            flex: 'auto',
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
          <Grid container item alignSelf="center" justifyContent="center">
            <Typography
              variant="body2"
              color="text.secondary"
            >
              {'© '}
              <Link
                color="inherit"
                href="/"
              >
                Iron Blogger
              </Link>
              {', '}
              {new Date().getFullYear()}
              .
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

TemplatePage.defaultProps = {
  children: '',
  setPosts: () => {},
};

TemplatePage.propTypes = {
  children: PropTypes.node,
  setPosts: PropTypes.func,
};

export default TemplatePage;
