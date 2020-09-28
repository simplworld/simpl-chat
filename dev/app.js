import React from 'react';

import { Widget } from '../index';

import styles from './app.scss';

const App = (props) => {
  return (
    <div className={styles.container}>
      <Widget
      // fixedPosition
      />
    </div>
  );
};

export default App;
