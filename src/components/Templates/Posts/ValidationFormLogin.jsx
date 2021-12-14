import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Form, Col, Button } from 'react-bootstrap';
// import TemplatePublic from '../../templates/TemplatePublic/TemplatePublic';
// import { login } from '../../../services/api';
import './Login.css';

const loginSchema = yup.object().shape({
  email: yup.string().required('Required Field').email('Must have email format'),
  password: yup.string().required('Required Field').max(150, 'Maximum of 150 characters'),
});

const ValidationFormLogin = ({ UserLogin }) => {
  // const navigate = useNavigate(/);
  return (
    <TemplatePublic>
      <h2 className="login-title">Iron Projects Manager</h2>

      <p className="login-text">Login into your account</p>

      <Form onSubmit={handleSubmit}>
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
          <Form.Control.Feedback>Ok!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="login-form">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            isValid={touched.password && !errors.password}
            isInvalid={touched.password && errors.password}
          />
          <Form.Control.Feedback>Ok!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" size="lg" className="login-submit-button">Login</Button>
      </Form>

    </TemplatePublic>
  );
};

export default ValidationFormLogin;