import React from 'react';
import classNames from 'classnames';

import styles from './styles.scss';


const SimplChatWidget = (props) => {
  const { fixedPosition } = props;
  return (
    <div
      className={classNames(
        styles.container, {
        [styles.fixedContainer]: fixedPosition
      })}
    >
      asdfassdfs
    </div>
  );
};

export default SimplChatWidget;
