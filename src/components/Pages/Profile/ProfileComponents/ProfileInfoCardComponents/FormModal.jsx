import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import {
  Modal, Button, Form, Col,
} from 'react-bootstrap';
import {
  Grid, Box, Typography, IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { getOneUser, editUser, login } from '../../../../../service/api';
import MuiSnackBar from '../../../../Misc/Snackbar';

const loginSchema = yup.object().shape({
  userName: yup.string().required('Required field').min(5, 'Mimimum of 5 charracters').max(15, 'Maximum of 15 charracters'),
  name: yup.string().required('Required field').min(3, 'Mimimum of 3 charracters').max(100, 'Maximum of 150 charracters'),
  email: yup.string().required('Required Field').email('Invalid format'),
  password: yup.string().required('Required Field').max(10, 'Maximum of 10 characters'),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Required Field'),
  profilePicture: yup.string(),
});

const Input = styled('input')({
  display: 'none',
});

const token = localStorage.getItem('token');

const FormModal = ({ show, handleClose }) => {
  const [attach, setAttach] = useState('');
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const {
    values, touched, errors,
    handleChange, handleBlur, handleSubmit,
    setValues, setErrors,
  } = useFormik({
    initialValues: {
      userName: '',
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (formData) => {
      try {
        await editUser({
          name: formData.name,
          userName: formData.userName,
          email: formData.email,
          password: formData.password,
          profilePicture: attach,
        }, token);
        localStorage.removeItem('token');
        const tokenResponse = await login(formData.email, formData.password);
        localStorage.setItem('token', tokenResponse.token);
        handleClose();
        document.location.reload(true);
      } catch (error) {
        setErrors([{
          email: error.response.data.error,
        }]);
      }
    },
  });

  useEffect(async () => {
    const getToken = localStorage.getItem('token');
    const userResponse = await getOneUser(getToken);
    setValues(userResponse);
  }, []);

  const handleReaderLoaded = (e) => {
    const binaryString = e.target.result;
    const toBase64 = window.btoa(binaryString);
    setAttach(toBase64);
    setOpen(true);
    setDisabled(true);
  };

  const handleChangeFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = handleReaderLoaded;
      reader.readAsBinaryString(file);
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Editar
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Box sx={{ mt: 3, flexGrow: 1 }}>
            <Grid container spacing={1}>
              <Grid container item spacing={3}>
                <Grid item xs={6}>
                  <Form.Group as={Col} md="12" controlId="login-form">
                    <Form.Label>Nome Completo</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.name && !errors.name}
                      isInvalid={touched.name && errors.name}
                    />
                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                  </Form.Group>
                </Grid>
                <Grid item xs={6}>
                  <Form.Group as={Col} md="12" controlId="login-form">
                    <Form.Label>Nome de Usuário</Form.Label>
                    <Form.Control
                      type="text"
                      name="userName"
                      value={values.userName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.userName && !errors.userName}
                      isInvalid={touched.userName && errors.userName}
                    />
                    <Form.Control.Feedback type="invalid">{errors.userName}</Form.Control.Feedback>
                  </Form.Group>
                </Grid>
              </Grid>
              <Grid container item spacing={3}>
                <Grid item xs={6}>
                  <Form.Group as={Col} md="12" controlId="login-form">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.password && !errors.password}
                      isInvalid={touched.password && errors.password}
                    />
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                  </Form.Group>
                </Grid>
                <Grid item xs={6}>
                  <Form.Group as={Col} md="12" controlId="login-form">
                    <Form.Label>Confirmar Senha</Form.Label>
                    <Form.Control
                      type="password"
                      name="passwordConfirmation"
                      value={values.passwordConfirmation}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.passwordConfirmation && !errors.passwordConfirmation}
                      isInvalid={touched.passwordConfirmation && errors.passwordConfirmation}
                    />
                    <Form.Control.Feedback type="invalid">{errors.passwordConfirmation}</Form.Control.Feedback>
                  </Form.Group>
                </Grid>
              </Grid>
              <Grid container item spacing={3}>
                <Grid item xs={6}>
                  <Form.Group as={Col} md="12" controlId="login-form">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.email && !errors.email}
                      isInvalid={touched.email && errors.email}
                    />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                  </Form.Group>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: 'flex',
                    alignSelf: 'flex-end',
                  }}
                >
                  <label htmlFor="icon-button-file">
                    <Input
                      accept="image/*"
                      id="icon-button-file"
                      type="file"
                      name="profilePicture"
                      onChange={handleChangeFile}
                      disabled={disabled}
                    />
                    <IconButton color="primary" aria-label="upload picture" component="span" disabled={disabled}>
                      <PhotoCamera />
                    </IconButton>
                  </label>
                  <Typography sx={{ alignSelf: 'center' }}>
                    Selecione uma foto para o perfil
                  </Typography>
                  <MuiSnackBar type="success" msg="Foto anexada com sucesso!" open={open} setOpen={setOpen} />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">Enviar</Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

FormModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default FormModal;
