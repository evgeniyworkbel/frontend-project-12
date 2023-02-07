import React from 'react';
import { useSelector } from 'react-redux';
import { Nav } from 'react-bootstrap';

import { selectors as channelsSelectors } from '../slices/channelsSlice.js';
import Channel from './Channel';

// TODO: replace svg with icons from react-bootstrap-icons package

function ChannelsList() {
  const channels = useSelector(channelsSelectors.selectAll);
  const { currentChannelId } = useSelector((state) => state.channels);
  console.log('!!!!!!', channels, currentChannelId);

  return (
    <>
      <div className="d-flex flex-row justify-content-between ps-4 pe-2">
        <span className="">Каналы</span>
        <button type="button" className="btn btn-group-vertical text-primary p-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
          <span className="visually-hidden">+</span>
        </button>
      </div>
      <Nav as="ul" justify variant="pills" className="flex-column p-2">
        {channels.map((item) => <Channel key={item.id} item={item} currentId={currentChannelId} />)}
      </Nav>
    </>
  );
}

export default ChannelsList;
