import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography, Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Modal,
} from 'react-bootstrap';
import { deleteUser } from '../../../../../service/api';

const DeleteAccountButton = () => {
  const [show, setShow] = useState(false);
  const [deleteAction, setDeleteAction] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const handleDelete = () => {
    setDeleteAction(true);
  };

  useEffect(async () => {
    if (deleteAction) {
      const token = localStorage.getItem('token');
      const userResponse = await deleteUser(token);
      localStorage.removeItem('token');
      navigate('/');
      return userResponse;
    }
    return null;
  }, [handleDelete]);

  return (
    <div>
      <Button
        onClick={handleShow}
        variant="outlined"
        color="primary"
        sx={{ textTransform: 'none' }}
        startIcon={<DeleteIcon />}
      >
        <Typography variant="subtitle1" fontWeight="medium">
          Deletar conta
        </Typography>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sua contá será apagada</Modal.Title>
        </Modal.Header>
        <Modal.Body>Confirmar operação?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeleteAccountButton;
