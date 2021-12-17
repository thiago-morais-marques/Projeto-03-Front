import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import {
  Avatar, Button, CssBaseline, Grid, Box, Typography, Container, Link, IconButton,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import { Form, Col } from 'react-bootstrap';
import TemplatePage from '../../Templates/TemplatePage';
import MuiSnackBar from '../../Misc/Snackbar';
import { login, register } from '../../../service/api';

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

const UserSignUp = () => {
  const navigate = useNavigate();

  const [attach, setAttach] = useState('');
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const {
    values, touched, errors, handleChange, handleBlur, handleSubmit, setErrors,
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
        await register({
          name: formData.name,
          userName: formData.userName,
          email: formData.email,
          password: formData.password,
          profilePicture: attach,
        });
        const tokenResponse = await login(formData.email, formData.password);
        localStorage.setItem('token', tokenResponse.token);
        navigate('/');
      } catch (error) {
        setErrors([{
          email: error.response.data.error,
        }]);
      }
    },
  });

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
    <Container maxWidth="lg">
      <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
        <TemplatePage>
          <Container
            component="main"
            maxWidth="lg"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CssBaseline />
            <Box
              container
              item
              sx={{
                marginTop: 2.4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '50%',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign Up
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
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
                  <Grid item xs={12}>
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
                  <Grid item xs={12}>
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
                  <Grid item xs={12}>
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
                  <Grid item xs={12}>
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
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
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
                    <Typography>
                      Selecione uma foto para o perfil
                    </Typography>
                    <MuiSnackBar type="success" msg="Foto anexada com sucesso!" open={open} setOpen={setOpen} />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid item sx={{ display: 'flex' }}>
                  <Link href="/login" variant="body2" sx={{ flex: 1, textAlign: 'end' }}>
                    Já tem uma conta? Faça Login.
                  </Link>
                </Grid>
              </Box>
            </Box>
          </Container>
        </TemplatePage>
      </Grid>
    </Container>
  );
};

export default UserSignUp;
