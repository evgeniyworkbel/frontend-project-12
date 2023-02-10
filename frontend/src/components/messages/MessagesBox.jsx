import React from 'react';
import { useSelector } from 'react-redux';
import { } from 'react-bootstrap';

function MessagesBox() {
  const { currentChannelId } = useSelector((state) => state.channels);
  console.log('' && currentChannelId);

  return (
    <>
    </>
  );
}

export default MessagesBox;
