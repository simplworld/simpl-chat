import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Header from './components/header';
import Footer from './components/footer';
import List from './components/list';

import styles from './widget.scss';

const SimplChatWidget = (props) => {
  const {
    fixedPosition, data, handleSubmit, title, readOnly
  } = props;

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
      {!readOnly && (
        <Footer handleSubmit={handleSubmit} />
      )}
    </div>
  );
};

SimplChatWidget.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  readOnly: PropTypes.bool,
  fixedPosition: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

SimplChatWidget.defaultProps = {
  title: 'Hello 👋',
  data: [],
  readOnly: false,
  fixedPosition: false,
  handleSubmit: () => {},
};

export default SimplChatWidget;
