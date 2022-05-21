import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as contactsAPI from './contactsApi';
import axios from 'axios';
axios.defaults.baseURL = `https://627e6e64271f386ceff80667.mockapi.io`;

// export const allContacts = async () => {
//   const { data } = await axios.get('/api/v1/contacts?sortby=name');
//   return data;
// };
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/v1/contacts?sortby=name');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
