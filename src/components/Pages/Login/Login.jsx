import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import {
  Avatar, Button, CssBaseline, Grid, Box, Typography, Container, Link,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Form, Col } from 'react-bootstrap';
import TemplatePage from '../../Templates/TemplatePage';
import { login } from '../../../service/api';

const loginSchema = yup.object().shape({
  email: yup.string().required('Required Field').email('Invalid format'),
  password: yup.string().required('Required Field').max(10, 'Maximum of 10 characters'),
});

const UserLogin = ({ loginUser }) => {
  const navigate = useNavigate();
  const {
    values, touched, errors, handleChange, handleBlur, handleSubmit, setErrors,
  } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: loginSchema,
    onSubmit: async (formData) => {
      try {
        const tokenResponse = await login(formData.email, formData.password);
        localStorage.setItem('token', tokenResponse.token);
        loginUser();
        navigate('/');
      } catch (error) {
        setErrors({
          email: error.response.data.error,
          password: error.response.data.error,
        });
      }
    },
  });

  return (
    <Container maxWidth="lg">
      <Grid
        container
        item
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '100%',
        }}
      >
        <TemplatePage>
          <Container
            item
            container
            maxWidth="xl"
            component="main"
            sx={{
              display: 'flex',
              position: 'relative',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 15,
            }}
          >
            <CssBaseline />
            <Grid
              container
              item
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                maxWidth: '50%',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Login
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
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
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Login
                </Button>
                <Grid item sx={{ display: 'flex' }}>
                  <Link href="/register" variant="body2" sx={{ flex: 1, textAlign: 'end' }}>
                    Não tem uma conta? Cadastre-se
                  </Link>
                </Grid>
              </Box>
            </Grid>
          </Container>
        </TemplatePage>
      </Grid>
    </Container>
  );
};

UserLogin.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

export default UserLogin;
