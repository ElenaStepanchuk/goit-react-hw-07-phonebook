// import axios from 'axios';
// axios.defaults.baseURL = `https://627e6e64271f386ceff80667.mockapi.io`;

// export const fetchContacts = async () => {
//   const { data } = await axios.get('/api/v1/contacts?sortby=name');
//   return data;
// };

// export const fetchAddContacts = async ({ name, number, id }) => {
//   const { data } = await axios.post(
//     `/api/v1/contacts?sortby=name&search=${name}`,
//     {
//       name: `${name}`,
//       number: `${number}`,
//       id: `${id}`,
//     }
//   );
//   console.log(data);
//   return data;
// };

// export const fetchFindContacts = async ({ name }) => {
//   const { data } = await axios.post(
//     `/api/v1/contacts?sortby=name&search=${name}`,
//     {
//       name: `${name}`,
//     }
//   );
//   console.log(data);
//   return data;
// };
