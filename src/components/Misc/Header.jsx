import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Toolbar, Button, /* IconButton, */ TextField, Box, Typography, Link,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import linksUrl from './global/links';
import sections from './global/sections';
import './styles/Logo.css';

const Header = (props) => {
  const { logo } = props;

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
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          <Link
            className="logo-link"
            href={linksUrl.home}
          >
            {logo}
          </Link>
        </Typography>
        <Button
          variant="outlined"
          size="small"
          sx={{
            ml: 8,
          }}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          size="small"
          sx={{
            ml: 1,
          }}
        >
          SignUp
        </Button>
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
};

export default Header;
