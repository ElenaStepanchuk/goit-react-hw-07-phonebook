import axios from 'axios';
// axios.defaults.baseURL = 'https://627e6e64271f386ceff80667.mockapi.io/';
export const fetchContacts = async () => {
  const { data } = await axios.get(
    'https://627e6e64271f386ceff80667.mockapi.io/'
  );
  return data;
};
