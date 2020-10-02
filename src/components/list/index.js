import React from 'react';
import classNames from 'classnames';
import {
  List, CellMeasurer, CellMeasurerCache, AutoSizer
} from 'react-virtualized';
import ResizeObserver from 'react-resize-observer';

import ListItem from '../list-item';

import styles from './list.scss';

const MessageList = (props) => {
  const { data } = props;

  const cache = new CellMeasurerCache({
    fixedWidth: true,
    minHeight: 50,
  });

  function rowRenderer({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style, // Style object to be applied to row (to position it)
    parent
  }) {
    let previousUserID = false;

    if (data[index - 1]) {
      previousUserID = data[index - 1].sender
    }

    return (
      <CellMeasurer
        cache={cache}
        columnIndex={0}
        key={key}
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
              message={data[index].message}
              avatar={data[index].avatar}
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
            width={width}
            height={height}
            rowCount={data.length}
            rowHeight={cache.rowHeight}
            rowRenderer={rowRenderer}
          />
        )}
      </AutoSizer>
    </div>
  );
};

export default MessageList;
