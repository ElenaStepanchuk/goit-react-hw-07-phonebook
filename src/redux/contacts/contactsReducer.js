import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { fetchContacts } from './contactsOperations';
import { add, remove, filtered } from '../contacts/contactsAction';
const entities = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [add]: (state, action) => {
    return [...Object.values(state), action.payload];
  },
  [remove]: (state, action) => {
    return Object.values(state).filter(
      contact => contact.id !== action.payload
    );
  },
});
const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});
const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
});
export const filterReducer = createReducer(``, {
  [filtered]: (_, action) => action.payload,
});
export default combineReducers({
  entities,
  isLoading,
  error,
});
