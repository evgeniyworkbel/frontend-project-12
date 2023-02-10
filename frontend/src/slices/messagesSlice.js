import {
  createSlice,
  createEntityAdapter,
} from '@reduxjs/toolkit';

const messagesAdapter = createEntityAdapter();

// By default: { entities: {}, ids: [] }
const initialState = messagesAdapter.getInitialState();

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessages: messagesAdapter.addMany,
  },
});

export const { actions } = messagesSlice;
export const selectors = messagesAdapter.getSelectors((state) => state.messages);
export default messagesSlice.reducer;
