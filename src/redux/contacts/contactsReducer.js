import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { filtered } from '../contacts/contactsAction';
import { allContacts, addContacts, removeContacts } from './contactsOperations';
export const filterReducer = createReducer(``, {
  [filtered]: (_, action) => action.payload,
});
const entities = createReducer([], {
  [allContacts.fulfilled]: (_, action) => action.payload,
  [addContacts.fulfilled]: (state, action) => [
    ...Object.values(state),
    action.payload,
  ],
  [removeContacts.fulfilled]: (state, action) =>
    // state.filter(contact => contact.id !== action.payload),
    state.filter(({ id }) => id !== action.payload),
});
const isLoading = createReducer(false, {
  [allContacts.pending]: () => true,
  [allContacts.fulfilled]: () => false,
  [allContacts.rejected]: () => false,
  [addContacts.pending]: () => true,
  [addContacts.fulfilled]: () => false,
  [addContacts.rejected]: () => false,
  [removeContacts.pending]: () => true,
  [removeContacts.fulfilled]: () => false,
  [removeContacts.rejected]: () => false,
});
const error = createReducer(null, {
  [allContacts.rejected]: (_, action) => action.payload,
  [allContacts.pending]: () => null,
});
export default combineReducers({
  entities,
  isLoading,
  error,
});
