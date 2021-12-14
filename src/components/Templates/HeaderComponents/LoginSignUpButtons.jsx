import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const LoginSignUpButtons = () => {
  return (
    <div>
      <Link to="/login">
        <Button
          variant="outlined"
          size="small"
          sx={{
            ml: 8,
          }}
        >
          Login
        </Button>
      </Link>
      <Link to="/register">
        <Button
          variant="outlined"
          size="small"
          sx={{
            ml: 1,
          }}
        >
          SignUp
        </Button>
      </Link>
    </div>
  );
};

export default LoginSignUpButtons;
