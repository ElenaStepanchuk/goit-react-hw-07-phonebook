import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';
export const filtered = createAction('contacts/filtered');

axios.defaults.baseURL = `https://627e6e64271f386ceff80667.mockapi.io`;

export const fetchContacts = async () => {
  const { data } = await axios.get('/api/v1/contacts?sortby=name');
  return data;
};

export const fetchAddContacts = async (name, number) => {
  const { data } = await axios.post(`/api/v1/contacts?sortby=name`, {
    name: `${name}`,
    number: `${number}`,
  });
  return data;
};

export const fetchRemoveContacts = async id => {
  const { data } = await axios.delete(
    `/api/v1/contacts?sortby=name&search=${id}`,
    { id: `${id}` }
  );
  console.log(data);
  return data;
};
