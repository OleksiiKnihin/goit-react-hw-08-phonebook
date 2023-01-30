import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Filter } from 'components/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { getIsLoading, getError } from 'redux/contacts/selectors';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Your phonebook</h1>
      <ContactForm />

      <h2>Contacts from your phonebook</h2>
      <div>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </div>
    </div>
  );
}
