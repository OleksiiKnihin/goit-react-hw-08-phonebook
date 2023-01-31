import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { TextField, Box, Button } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        '& button': { m: 1, p: 2 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        type="text"
        name="name"
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        type="text"
        name="email"
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
        name="password"
      />
      <Button type="submit" variant="contained" size="small">
        Register
      </Button>
    </Box>
  );
};
