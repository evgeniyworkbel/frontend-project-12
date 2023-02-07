import React from 'react';
import { useSelector } from 'react-redux';
import { } from 'react-bootstrap';

import { selectors as channelsSelectors } from '../slices/channelsSlice.js';

function ChannelInfo() {
  const { currentChannelId } = useSelector((state) => state.channels);
  const currentChannel = useSelector((state) => (
    channelsSelectors.selectById(state, currentChannelId)
  ));
  // console.log(currentChannelId);

  return (
    <div>
      <p>
        <span>#</span>
        {currentChannel.name}
      </p>
      <span>
        сообщений
      </span>
    </div>
  );
}

export default ChannelInfo;
