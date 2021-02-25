import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Default({ children }) {
  return <Container>{children}</Container>;
}

Default.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Default;
