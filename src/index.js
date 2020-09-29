import React from 'react';
import classNames from 'classnames';

import List from './components/list';

import styles from './widget.scss';

const SimplChatWidget = (props) => {
  const { fixedPosition, data } = props;
  return (
    <div
      className={classNames(
        styles.container, {
        [styles.fixedContainer]: fixedPosition
      }
      )}
    >
      <div className={styles.header}></div>
      <List data={data} />
      <div className={styles.footer}></div>
    </div>
  );
};

export default SimplChatWidget;
