import React, { useState } from 'react';
import faker from 'faker';

import { Widget } from '../index';

import styles from './app.scss';

function generateMessages() {
  const messageCount = 50;

  const messages = [];
  for (let id = 1; id <= messageCount; id += 1) {
    messages.push({
      id,
      date: Date.now(),
      sender: `${faker.name.firstName()} ${faker.name.lastName()}`,
      message: faker.lorem.sentences(),
      // avatar: faker.image.avatar(),
    });
  }

  messages.push(
    {
      id: 51,
      date: Date.now(),
      sender: 'Mark Wirblich',
      message: `👋 💩 🤪  ${faker.lorem.sentences()}`,
    },
    {
      id: 52,
      date: 1206080923628,
      sender: 'Mark Wirblich',
      message: faker.lorem.sentences(),
    },
    {
      id: 53,
      date: Date.now(),
      sender: 'Mark Wirblich',
      message: faker.lorem.sentences(),
    },
    {
      id: 54,
      date: Date.now(),
      sender: 'Mark Wirblich',
      message: 'Hi hows it going? https://github.com/simplworld/simpl-chat/ check this out',
    },
  );
  return messages;
}

const App = (props) => {
  const [messages, setMessages] = useState(generateMessages());
  console.log(messages);
  const handleSubmit = (message) => {
    const newMessage = {
      id: messages[messages.length - 1].id + 1,
      date: Date.now(),
      sender: 'Mark Wirblich',
      message,
    };
    setMessages(messages => [...messages, newMessage]);
  };

  return (
    <div className={styles.container}>
      <Widget
        data={messages}
        fixedPosition
        handleSubmit={handleSubmit}
        headerClassName={styles.bla}
      />
    </div>
  );
};

export default App;
