import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import {
  Avatar, Button, CssBaseline, Grid, Box, Typography, Container, Link,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Form, Col } from 'react-bootstrap';
import Header from '../../Misc/Header';
import Footer from '../../Misc/Footer';
import { login } from '../../../service/api';

const loginSchema = yup.object().shape({
  email: yup.string().required('Required Field').email('Invalid format'),
  password: yup.string().required('Required Field').max(10, 'Maximum of 10 characters'),
});

const UserLogin = () => {
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
        /* loginUser(); */
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
    <Container
      maxWidth="lg"
    >
      <Header
        logo="Iron Blogger"
        className="logo"
      />
      <Container
        component="main"
        maxWidth="lg"
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '62vh',
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
              <Link href="/" variant="body2" sx={{ flex: 1, textAlign: 'end' }}>
                Não tem uma conta? Cadastre-se
              </Link>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Container>
  );
};

export default UserLogin;
