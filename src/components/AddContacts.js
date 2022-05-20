import Form from './Form';
import React, { useEffect } from 'react';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
const AddContacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1 className="title">Phonebook</h1>
      <Form />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  );
};
export default AddContacts;
