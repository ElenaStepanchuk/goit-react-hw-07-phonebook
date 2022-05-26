import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAction from './contactsAction';
import * as contactsAPI from './contactsApi';
export const allContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    contactsAction.fetchAddContacts(name, number);
    try {
      const contacts = await contactsAPI.fetchAddContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const removeContacts = createAsyncThunk(
  'contacts/removeContact',
  async ({ id }, { rejectWithValue }) => {
    contactsAction.fetchRemoveContacts(id);
    try {
      const contacts = await contactsAPI.fetchRemoveContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
