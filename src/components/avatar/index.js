import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './avatar.scss';

function stringToColour(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}

const Avatar = (props) => {
  const {
    name, small, medium, large, href, badge
  } = props;
  const letters = name.replace(/(\w)[^ ]+/g, '$1').replace(/[^\w]/, '').substring(0, 2) || '??';

  const classes = classNames(
    styles.avatar, {
    [styles.small]: small,
    [styles.medium]: medium,
    [styles.large]: large
  }
  );

  let content = letters;

  if (href) {
    content = <img src={href} alt={name} />;
  }

  return (
    <div
      className={classes}
      aria-hidden="true"
      title={name}
      style={{ backgroundColor: stringToColour(name) }}
    >
      <div className={styles.content}>{content}</div>
    </div>
  );
};

Avatar.propTypes = {
  name: PropTypes.string,

  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  href: PropTypes.string,
};

Avatar.defaultProps = {
  name: '??',
  small: true,
  medium: false,
  large: false,
};

export default Avatar;
