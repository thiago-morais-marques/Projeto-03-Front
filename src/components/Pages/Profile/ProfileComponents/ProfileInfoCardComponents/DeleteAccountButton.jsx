import React from 'react';
import {
  Typography, Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteAccountButton = () => {
  return (
    <Button
      variant="outlined"
      color="primary"
      sx={{ textTransform: 'none' }}
      startIcon={<DeleteIcon />}
    >
      <Typography variant="subtitle1" fontWeight="medium">
        Deletar conta
      </Typography>
    </Button>
  );
};

export default DeleteAccountButton;
