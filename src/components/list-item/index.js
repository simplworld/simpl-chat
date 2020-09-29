import React from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';

import Avatar from '../avatar';

import styles from './list-item.scss';

const ListItem = (props) => {
  const { username, date, message, userID, previousUserID } = props;
  const dayjsDate = dayjs(date);
  const timestamp = dayjsDate.format('h:mm A');
  const miniTimestamp = dayjsDate.format('h:mm');

  const prevMsgSameSender = userID === previousUserID;
  return (
    <div
      className={classNames(
        styles.container, {
      })}
    >
      <div className={styles.background}>
        <div className={styles.column}>

          <div className={styles.columnLeft}>
            {!prevMsgSameSender && (
              <Avatar name={username} />
            )}
            {prevMsgSameSender && (
              <div className={styles.miniTimestamp}>
                <span>{miniTimestamp}</span>
              </div>
            )}
          </div>

          <div className={styles.columnRight}>
            {!prevMsgSameSender && (
              <React.Fragment>
                <span className={styles.username}>{username}</span>
                {' '}
                <span className={styles.timestamp}>{timestamp}</span>
                <br />
              </React.Fragment>
            )}
            <div className={styles.message}>{message}</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ListItem;
