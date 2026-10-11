import React from 'react';
import { useSelector } from 'react-redux';
import { } from 'react-bootstrap';

function MessagesBox() {
  const { currentChannelId } = useSelector((state) => state.channels);

  return (
    <>{currentChannelId}</>
  );
}

export default MessagesBox;
