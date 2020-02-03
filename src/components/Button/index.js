import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './button.scss';

const Button = ({ children, size, onClick }) => {
  const prefix = 'btn';
  const classes = classNames(prefix, size && `${prefix}--${size}`);
  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: '',
  size: '',
  onClick: () => {},
};

export default Button;
