import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'store/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export function ContactList() {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <>
      <List>
        {contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact}></ContactItem>
        ))}
      </List>
    </>
  );
}
