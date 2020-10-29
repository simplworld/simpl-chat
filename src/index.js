import React from 'react';
import classNames from 'classnames';

import Header from './components/header';
import List from './components/list';

import styles from './widget.scss';

const SimplChatWidget = (props) => {
  const { fixedPosition, data, title, readOnly } = props;

  return (
    <div
      className={classNames(
        styles.container, {
        [styles.fixedContainer]: fixedPosition
      }
      )}
    >
      <Header title={title} />
      <List data={data} />
      {!readOnly &&
        <div className={styles.footer}>
          <div className={styles.chatInputWrapper}>
            <textarea placeholder="Your message" className={styles.chatInput} />
          </div>
        </div>
      }
    </div>
  );
};

SimplChatWidget.defaultProps = {
  title: "Hello 👋",
  readOnly: false,
};

export default SimplChatWidget;
