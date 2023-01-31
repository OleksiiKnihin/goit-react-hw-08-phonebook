import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Filter } from 'components/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { getIsLoading, getError } from 'redux/contacts/selectors';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Box } from '@mui/material';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box sx={{ m: 2 }}>
      <h2>Add new contact in your phonebook</h2>
      <ContactForm />

      <h2>Your list contacts:</h2>
      <div>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </div>
    </Box>
  );
}
