import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography, Button,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const EditAccountButton = ({ handleShow }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ textTransform: 'none' }}
      startIcon={<EditIcon />}
      onClick={handleShow}
    >
      <Typography variant="subtitle1" fontWeight="medium">
        Editar conta
      </Typography>
    </Button>
  );
};

EditAccountButton.propTypes = {
  handleShow: PropTypes.func.isRequired,
};

export default EditAccountButton;
