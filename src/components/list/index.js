import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  List, CellMeasurer, CellMeasurerCache, AutoSizer
} from 'react-virtualized';
import ResizeObserver from 'react-resize-observer';

import ListItem from '../list-item';

import styles from './list.scss';

const MessageList = (props) => {
  const { data } = props;

  const [list, setList] = useState();
  const [scrollIndex, setScrollIndex] = useState();

  const cache = new CellMeasurerCache({
    fixedWidth: true,
    minHeight: 30,
  });

  useEffect(() => {
    setScrollIndex(data.length);
  }, [data]);

  useEffect(() => {
    if (data.length > 0 && list) {
      list.scrollToRow(data.length);
    }
  }, [data, list]);

  const theList = (l) => {
    setList(l);
  };

  function rowRenderer({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style, // Style object to be applied to row (to position it)
    parent
  }) {
    let previousUserID = false;
    let previousDate = false;

    if (data[index - 1]) {
      previousUserID = data[index - 1].sender;
      previousDate = data[index - 1].date;
    }

    return (
      <CellMeasurer
        cache={cache}
        columnIndex={0}
        key={key}
        // removing parent fixes the issue with scrollTo not targeting the last item
        // though its required ...
        parent={parent}
        rowIndex={index}
      >
        {({ measure }) => (
          <div key={key} style={style}>
            <ResizeObserver
              onResize={measure}
            />
            <ListItem
              // TODO add a unique key here to identify the sender
              userID={data[index].sender}
              previousUserID={previousUserID}
              username={data[index].sender}
              date={data[index].date}
              previousDate={previousDate}
              message={data[index].message}
              avatarURL={data[index].avatar}
            />
          </div>
        )}
      </CellMeasurer>
    );
  }

  return (
    <div
      className={classNames(
        styles.container, {
      })}
    >
      <AutoSizer>
        {({ width, height }) => (
          <List
            ref={theList}
            width={width}
            height={height}
            rowCount={data.length}
            rowHeight={cache.rowHeight}
            rowRenderer={rowRenderer}
            deferredMeasurementCache={cache}
            scrollToIndex={scrollIndex}
          />
        )}
      </AutoSizer>
    </div>
  );
};

MessageList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

MessageList.defaultProps = {
};

export default MessageList;
