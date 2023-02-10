import React from 'react';
import { useSelector } from 'react-redux';
import { Nav } from 'react-bootstrap';
import { PlusSquare } from 'react-bootstrap-icons';

import { selectors as channelsSelectors } from '../../slices/channelsSlice.js';
import Channel from './Channel';

function ChannelsList() {
  const channels = useSelector(channelsSelectors.selectAll);
  const { currentChannelId } = useSelector((state) => state.channels);

  return (
    <>
      <div className="d-flex flex-row justify-content-between ps-4 pe-2">
        <span>Каналы</span>
        <button type="button" className="btn btn-group-vertical text-primary p-0">
          <PlusSquare color="royalblue" size={20} />
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
