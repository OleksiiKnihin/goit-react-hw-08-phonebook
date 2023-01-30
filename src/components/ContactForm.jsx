import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = event => {
    const { value } = event.target;
    setName(value);
  };

  const handleChangeNumber = event => {
    const { value } = event.target;
    setNumber(value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    handleSubmit({ name: name, number: number });
  };
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    const name = event.name;
    const number = event.number;

    if (contacts.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact({ name, number }));
    }
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          placeholder="Angelina Jolie"
          value={name}
          onChange={handleChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          placeholder="123-45-67"
          value={number}
          onChange={handleChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
