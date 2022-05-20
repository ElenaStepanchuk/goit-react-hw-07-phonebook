import axios from 'axios';
export const fetchContacts = async () => {
  const { data } = await axios.get(
    'https://627e6e64271f386ceff80667.mockapi.io/api/v1/contacts'
  );
  return data;
};

export const fetchAddContacts = async ({ contact }) => {
  const { data } = await axios.get(
    `https://627e6e64271f386ceff80667.mockapi.io/api/v1/contacts?filter=${contact}`
  );
  return data;
};
