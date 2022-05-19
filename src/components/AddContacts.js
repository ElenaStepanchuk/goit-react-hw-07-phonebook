import Form from './Form';
import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { add, remove } from '../redux/contacts/contactsAction';

const AddContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    // const contacts = localStorage.getItem('contacts');
    // const parsedContacts = JSON.parse(contacts);
    // setContacts(parsedContacts);
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);
  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const filterInputId = nanoid();
  const formSubmitHandler = (name, number) => {
    const normalizedName = name.toLowerCase();
    const addContacts = Object.values(contacts).find(contact => {
      if (contact.name)
        return contact.name.toLowerCase().includes(normalizedName);
    });
    if (addContacts) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(add({ id: nanoid(), name, number }));
  };
  const handleFilter = event => {
    setFilter(event.currentTarget.value);
  };
  const getFilterName = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const handleDelContact = contactId => {
    dispatch(remove(contactId));
  };
  return (
    <>
      <h1 className="title">Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />
      <h2 className="title">Contacts</h2>
      <Filter
        htmlFor={filterInputId}
        onChange={handleFilter}
        value={filter}
        id={filterInputId}
      />
      <ContactsList
        contacts={getFilterName()}
        onDelContact={handleDelContact}
      />
    </>
  );
};
export default AddContacts;
