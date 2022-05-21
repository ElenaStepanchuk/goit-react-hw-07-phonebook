import axios from 'axios';
axios.defaults.baseURL = `https://627e6e64271f386ceff80667.mockapi.io`;

export const fetchContacts = async () => {
  const { data } = await axios.get('/api/v1/contacts');
  return data;
};

export const fetchAddContacts = async ({ name, number, id }) => {
  const { data } = await axios.post(`/api/v1/contacts`, {
    name: `${name}`,
    number: `${number}`,
    id: `${id}`,
  });
  console.log(data);
  return data;
};
