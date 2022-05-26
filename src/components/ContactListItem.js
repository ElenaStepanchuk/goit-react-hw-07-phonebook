import React from 'react';
import css from './ContactsListItem.module.css';
import PropTypes from 'prop-types';
// import { contactsOperations } from 'redux/contacts';
// import { fetchRemoveContacts } from '../redux/contacts/contactsAction';
// import { useDispatch, useSelector } from 'react-redux';
const ContactListItem = ({ name, number, onDelContact }) => {
  // const dispatch = useDispatch();
  // const handleDelContact = contactId => {
  //   dispatch(contactsOperations.removeContacts(contactId));
  //   dispatch(fetchRemoveContacts(contactId));
  // };
  return (
    <>
      {name}: &nbsp; {number}
      <button className={css.del__btn} type="button" onClick={onDelContact}>
        Delete
      </button>
    </>
  );
};
export default ContactListItem;
ContactListItem.protoTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelContact: PropTypes.func.isRequired,
};
