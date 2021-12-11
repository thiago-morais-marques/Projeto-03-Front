import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(
  (props, ref) => {
    return (
      <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
    );
  },
);

const MuiSnackBar = ({
  type, msg, open, setOpen,
}) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        {msg}
      </Alert>
    </Snackbar>
  );
};

MuiSnackBar.propTypes = {
  type: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default MuiSnackBar;
