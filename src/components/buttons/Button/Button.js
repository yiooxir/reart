import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import { Content, Cell } from '../../layout';
import cx from 'classnames';

const Button = props => {
  const { className, children, ...rest } = props;

  return (
    <Cell className={cx('art-button content-row', className)} role="button" {...rest}>
      {children}
    </Cell>
  );
};

export default Button;