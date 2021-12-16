import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isLogged, Page, ...rest }) => {
  return isLogged ? <Page {...rest} /> : <Navigate to="/" />;
};

ProtectedRoute.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  Page: PropTypes.func.isRequired,
};

export default ProtectedRoute;
