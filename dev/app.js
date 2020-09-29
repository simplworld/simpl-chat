import React from 'react';
import faker from 'faker';

import { Widget } from '../index';

import styles from './app.scss';

function generateMessages() {
  const messageCount = 100;
  const messages = [];

  for (let id = 1; id <= messageCount; id += 1) {
    messages.push({
      id,
      date: Date.now(),
      sender: `${faker.name.firstName()} ${faker.name.lastName()}`,
      message: faker.lorem.sentences(),
    });
  }

  messages.push(
    {
      id: 101,
      date: Date.now(),
      sender: 'Mark Wirblich',
      message: faker.lorem.sentences(),
    },
    {
      id: 102,
      date: Date.now(),
      sender: 'Mark Wirblich',
      message: faker.lorem.sentences(),
    },
    {
      id: 103,
      date: Date.now(),
      sender: 'Mark Wirblich',
      message: faker.lorem.sentences(),
    },
  );
  return messages;
}

const App = (props) => {
  const list = generateMessages();
  return (
    <div className={styles.container}>
      <Widget
        data={list}
      //fixedPosition
      />
    </div>
  );
};

export default App;
