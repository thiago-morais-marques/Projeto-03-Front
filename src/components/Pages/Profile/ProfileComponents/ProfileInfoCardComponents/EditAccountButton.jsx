import React from 'react';
import {
  Typography, Button,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const EditAccountButton = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ textTransform: 'none' }}
      startIcon={<EditIcon />}
    >
      <Typography variant="subtitle1" fontWeight="medium">
        Editar conta
      </Typography>
    </Button>
  );
};

export default EditAccountButton;
