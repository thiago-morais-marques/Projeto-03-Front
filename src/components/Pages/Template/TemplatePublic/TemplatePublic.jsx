import React from 'react';
import PropTypes from 'prop-types';

import './TemplatePublic.css';

const TemplatePublic = ({ children }) => (
  <div className="template-public-container">
    <div className="template-public-background">
      <h1>Iron Blogger</h1>
    </div>
    <div className="template-public-content">
      {children}
    </div>
  </div>
);

TemplatePublic.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TemplatePublic;