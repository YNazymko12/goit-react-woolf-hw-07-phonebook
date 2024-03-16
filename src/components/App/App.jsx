import { useSelector } from 'react-redux';
import { Container } from './App.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { getContacts } from 'store/selectors';

export function App() {
  const contacts = useSelector(getContacts);

  return (
    <Container>
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
