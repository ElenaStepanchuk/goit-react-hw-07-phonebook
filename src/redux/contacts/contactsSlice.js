// import { createSlice } from '@reduxjs/toolkit';
// import { allContacts, addContact, removeContact } from './contactsOperations';

// export const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: [],
//     filter: '',
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     changeFilter: (state, { payload }) => {
//       state.filter = payload;
//     },
//   },
//   extraReducers: {
//     [allContacts.pending]: state => {
//       state.isLoading = true;
//     },
//     [allContacts.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       state.contacts = payload;
//     },
//     [allContacts.rejected]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload;
//     },
//     [addContact.pending]: state => {
//       state.isLoading = true;
//     },
//     [addContact.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       state.contacts.push(payload);
//     },
//     [addContact.rejected]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload;
//     },
//     [removeContact.pending]: state => {
//       state.isLoading = true;
//     },
//     [removeContact.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       state.contacts = state.contacts.filter(contact => contact.id !== payload);
//     },
//     [removeContact.rejected]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload;
//     },
//   },
// });
// export const { changeFilter } = contactSlice.actions;
// export default contactSlice.reducer;
