import React from 'react';
import classNames from 'classnames';

import styles from './header.scss';

const simplLogo = require('../../../assets/simpl_logo.png');

const Header = (props) => {
  const { title } = props;

  return (
    <div
      className={classNames(
        styles.container, {}
      )}
    >
      <div className={styles.left}>
        <img src={simplLogo} className={styles.logo} />
      </div>
      <div className={styles.center}>
        {title}
      </div>
      <div className={styles.right}>

      </div>
    </div>
  );
};

export default Header;
