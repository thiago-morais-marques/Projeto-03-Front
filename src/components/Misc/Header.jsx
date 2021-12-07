/* eslint-disable react/jsx-indent */
import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { linksUrl } from './global/globalVariables';
import './styles/Logo.css';


const Header = (props) => {
  const { sections, logo } = props;

  return (
    <>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          bgcolor: 'background.paper',
        }}
      >
        <Button size="small">Subscribe</Button>
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
        <IconButton>
          <SearchIcon />
        </IconButton>
            <Button variant="outlined" size="small">
              <Link to={"/signup"}>Sign Up</Link>
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
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  logo: PropTypes.string.isRequired,
};

export default Header;
