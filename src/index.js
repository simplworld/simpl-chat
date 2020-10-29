import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Header from './components/header';
import Footer from './components/footer';
import List from './components/list';

import styles from './widget.scss';

const SimplChatWidget = (props) => {
  const {
    fixedPosition, data, className, headerClassName, footerClassName,
    handleSubmit, title, readOnly,
  } = props;

  return (
    <div
      className={classNames(
        styles.container, {
        [styles.fixedContainer]: fixedPosition
      },
      className
      )}
    >
      <Header
        title={title}
        headerClassName={headerClassName}
      />
      <List data={data} />
      {!readOnly && (
        <Footer
          handleSubmit={handleSubmit}
          footerClassName={footerClassName}
        />
      )}
    </div>
  );
};

SimplChatWidget.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  headerClassName: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  footerClassName: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  readOnly: PropTypes.bool,
  fixedPosition: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

SimplChatWidget.defaultProps = {
  title: 'Hello 👋',
  data: [],
  className: null,
  headerClassName: null,
  footerClassName: null,
  readOnly: false,
  fixedPosition: false,
  handleSubmit: () => {},
};

export default SimplChatWidget;
