import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'store/selectors';
import { removeContact } from 'store/contactsSlice';
import { List, Button } from './ContactList.styled';

export function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(contact => (
        <li key={contact.id}>
          {`${contact.name} : ${contact.number}`}
          {
            <Button
              type="button"
              name="delete"
              onClick={() => dispatch(removeContact(contact))}
            >
              Delete
            </Button>
          }
        </li>
      ))}
    </List>
  );
}
