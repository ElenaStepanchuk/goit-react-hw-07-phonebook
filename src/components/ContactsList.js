import React from 'react';
import ContactListItem from './ContactListItem';
import { useEffect } from 'react';
import css from './ContactsList.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import { contactsOperations } from 'redux/contacts';
import { allContacts } from 'redux/contacts/contactsOperations';
import { fetchRemoveContacts } from '../redux/contacts/contactsAction';
// import { remove } from '../redux/contacts/contactsAction';
// import { contactsSelectors } from 'redux/contacts';
const ContactsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allContacts());
  }, [dispatch]);

  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts.entities);
  const handleDelContact = contactId => {
    // dispatch(contactsOperations.removeContacts(contactId));
    dispatch(fetchRemoveContacts(contactId));
  };
  return (
    <ul className={css.contact__list}>
      {Object.values(contacts)
        .filter(contact => {
          if (contact.name)
            return contact.name.toLowerCase().includes(filter.toLowerCase());
        })
        .map(({ id, name, number }) => (
          <li className={css.contact__item} key={id}>
            <ContactListItem
              id={id}
              name={name}
              number={number}
              onDelContact={() => handleDelContact(id)}
            />
          </li>
        ))}
    </ul>
  );
};
export default ContactsList;
ContactsList.protoTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
