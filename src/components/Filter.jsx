import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { TextField, Box } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onChange={handleChange}
    >
      <TextField
        id="standard-basic"
        label="Find contacts by name:"
        variant="standard"
        align="center"
      />
    </Box>
  );
};
