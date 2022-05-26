// import axios from 'axios';
// axios.defaults.baseURL = `https://627e6e64271f386ceff80667.mockapi.io`;

// export const fetchContacts = async () => {
//   const { data } = await axios.get('/api/v1/contacts?sortby=name');
//   return data;
// };

// export const fetchAddContacts = async () => {
//   const { data } = await axios.get('/api/v1/contacts?sortby=name');
//   return data;
// };

// export const fetchRemoveContacts = async () => {
//   const { data } = await axios.get(`/api/v1/contacts?sortby=name}`);
//   return data;
// };

// export const deleteContact = contactId => dispatch => {
//   dispatch(removeContactRequest());
//   axios
//     .delete(`/api/v1/contacts?sortby=name/${contactId}`)
//     .then(() => dispatch(removeContactSuccess(contactId)))
//     .catch(error => dispatch(removeContactError(error.message)));
// };
