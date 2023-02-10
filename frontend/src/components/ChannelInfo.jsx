import React from 'react';
import { useSelector } from 'react-redux';
import { } from 'react-bootstrap';

import { selectors as channelsSelectors } from '../slices/channelsSlice.js';

// TODO: add messages render (later)

function ChannelInfo() {
  const { currentChannelId } = useSelector((state) => state.channels);
  const currentChannel = useSelector((state) => (
    channelsSelectors.selectById(state, currentChannelId)
  ));

  return (
    <div className="small p-3 bg-light shadow-sm">
      <p className="m-0">
        <span className="fw-bold">#</span>
        <span className="fw-bold">
          {currentChannel && currentChannel.name}
        </span>
      </p>
      <span className="text-muted">
        сообщений
      </span>
    </div>
  );
}

export default ChannelInfo;
