import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { getFilterContacts } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilterContacts);

  return (
    <ul>
      {contacts.map(({ name, phone, id }) => (
        <ContactListItem
          key={id}
          name={name}
          number={phone}
          deleteContact={() => dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
};
