import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './App.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { selectContacts } from 'store/selectors';
import { fetchContacts } from 'store/operations';
import icon from '../../image/icon.png';
export function App() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <img src={icon} alt="icon" width="80" height="80" />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p>You don't have any contacts yet.</p>
      ) : (
        <div>
          <Filter />
          <ContactList />
        </div>
      )}
    </Container>
  );
}
