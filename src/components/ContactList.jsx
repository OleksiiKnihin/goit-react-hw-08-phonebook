import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { Delete } from '@mui/icons-material';
import {
  Button,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  // Filtering contacts by name
  const getFilteredContacts = filterName => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
  };

  // Preparing contacts to render(filtered or all)
  const contactsToShow =
    filter.length > 0 ? getFilteredContacts(filter) : contacts;

  return (
    <TableContainer
      sx={{ mt: 3, backgroundColor: '#F8F8FF' }}
      component={Paper}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: '#87CEFA' }}>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactsToShow.map(contact => (
            <TableRow
              key={contact.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {contact.name}
              </TableCell>
              <TableCell align="center">{contact.number}</TableCell>
              <TableCell align="center">
                <Button
                  type="button"
                  variant="outlined"
                  startIcon={<Delete />}
                  onClick={() => dispatch(deleteContact(contact.id))}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
