import React from 'react';
import classNames from 'classnames';

import Header from './components/header';
import Footer from './components/footer';
import List from './components/list';

import styles from './widget.scss';

const SimplChatWidget = (props) => {
  const { fixedPosition, data, handleSubmit } = props;

  return (
    <div
      className={classNames(
        styles.container, {
        [styles.fixedContainer]: fixedPosition
      }
      )}
    >
      <Header title="Hello 👋" />
      <List data={data} />
      <Footer handleSubmit={handleSubmit} />
    </div>
  );
};

export default SimplChatWidget;
