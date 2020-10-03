import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useKeyboardJs from 'react-use/lib/useKeyboardJs';

import classNames from 'classnames';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

import styles from './footer.scss';

const Footer = (props) => {
  const { handleSubmit, className } = props;
  const [showEmojis, setShowEmojis] = useState(false);
  const [text, setText] = useState('');
  const [isEnterPressed] = useKeyboardJs('enter');
  const [isEnterShiftPressed] = useKeyboardJs('enter + shift');

  useEffect(() => {
    if (isEnterPressed && !isEnterShiftPressed) {
      handleSubmit(text);
      setText('');
    }
  }, [isEnterPressed]);

  const handleSelectEmoji = (emoji, event) => {
    setShowEmojis(false);
    setText(`${text}${emoji.native}`);
  };

  const handleShowEmojis = () => {
    setShowEmojis(true);
  };

  const handleChange = (e) => {
    if (e.target.value !== '\n') {
      setText(e.target.value);
    }
    e.persist();
  };

  return (
    <div
      className={classNames(
        styles.container, className
      )}
    >
      {showEmojis && (
        <div className={styles.emojiPicker}>
          <Picker onClick={handleSelectEmoji} style={{ 'width': '100%', 'height': '100%' }} title="Select an emoji" />
        </div>
      )}
      <div className={styles.inputWrapper}>
        <textarea placeholder="Your message" value={text} onChange={handleChange} className={styles.input} />
      </div>
      <div className={styles.actions}>
        <button aria-label="Emojis" title="Emojis" data-index="2" type="button" className={styles.action} onClick={handleShowEmojis}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10" />
            <path d="M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0" />
          </svg>
        </button>
      </div>

    </div>
  );
};

Footer.propTypes = {
  handleSubmit: PropTypes.func,
  className: PropTypes.string,
};

Footer.defaultProps = {
  handleSubmit: () => { },
  className: null,
};

export default Footer;
