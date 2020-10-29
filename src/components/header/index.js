import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './header.scss';

const simplLogo = require('../../../assets/simpl_logo.png');

const Header = (props) => {
  const { title, headerClassName } = props;

  return (
    <div
      className={classNames(
        styles.container, {},
        headerClassName
      )}
    >
      <div className={styles.left}>
        <img src={simplLogo} className={styles.logo} alt="logo" />
      </div>
      <div className={styles.center}>
        {title}
      </div>
      <div className={styles.right} />
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  headerClassName: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
};

Header.defaultProps = {
  title: 'Hello 👋',
  headerClassName: null,
};

export default Header;
