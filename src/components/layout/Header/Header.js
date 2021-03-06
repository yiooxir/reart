import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import cx from 'classnames';
import Row from '../Row';
// import { assetProps, splitProps } from '../../assets';

const Header = props => {
  // const assets = splitProps(props);
  const { className, children, ...rest } = props;

  return (
    <Row className={cx('art-header', className)} {...rest}>
      {children}
    </Row>
  );
};

export default Header;
