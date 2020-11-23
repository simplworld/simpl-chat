import React from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';
import Linkify from 'react-linkify';
import PropTypes from 'prop-types';

import Avatar from '../avatar';

import styles from './list-item.scss';

const ListItem = (props) => {
  const {
    username, date, previousDate, message, userID, previousUserID, avatarURL
  } = props;
  const dayjsDate = dayjs(date);
  let dayChanged = false;
  if (previousDate) {
    if (dayjs(previousDate).get('date') !== dayjsDate.get('date')) {
      dayChanged = true;
    }
  }
  const timestamp = dayjsDate.format('h:mm A');
  const miniTimestamp = dayjsDate.format('h:mm');
  const prevMsgSameSender = userID === previousUserID;

  const renderLeftColumn = () => {
    if (dayChanged) {
      return (
        <Avatar name={username} href={avatarURL} />
      );
    }

    if (prevMsgSameSender) {
      return (
        <div className={styles.miniTimestamp}>
          <span>{miniTimestamp}</span>
        </div>
      );
    }

    return (
      <Avatar name={username} href={avatarURL} />
    );
  };

  const renderMessageHeader = () => {
    if (!prevMsgSameSender) {
      return (
        <React.Fragment>
          <span className={styles.username}>{username}</span>
          {' '}
          <span className={styles.timestamp}>{timestamp}</span>
          <br />
        </React.Fragment>
      );
    }

    if (dayChanged) {
      return (
        <React.Fragment>
          <span className={styles.username}>{username}</span>
          {' '}
          <span className={styles.timestamp}>{timestamp}</span>
          <br />
        </React.Fragment>
      );
    }
  };

  const renderDividerDate = () => {
    if (dayjs().get('date') === dayjs(date).get('date')) {
      return ('Today');
    }
    return (dayjsDate.format('dddd, MMMM D'));
  };

  return (
    <React.Fragment>
      {dayChanged && (
        <div
          className={classNames(
            styles.container
          )}
        >
          <div className={styles.dividerContainer}>
            <div className={styles.dividerDate}>
              <div className={styles.dividerButton}>
                {renderDividerDate()}
              </div>
            </div>
            <div className={styles.divider} />
          </div>
        </div>
      )}
      <div
        className={classNames(
          styles.container, {
        })}
      >
        <div className={styles.background}>
          <div className={styles.column}>

            <div className={styles.columnLeft}>
              {renderLeftColumn()}
            </div>

            <div className={styles.columnRight}>
              {renderMessageHeader()}
              <div className={styles.message}><Linkify>{message}</Linkify></div>
            </div>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

ListItem.propTypes = {
  username: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  avatarURL: PropTypes.string,

};

ListItem.defaultProps = {
  avatarURL: '',
};

export default ListItem;
