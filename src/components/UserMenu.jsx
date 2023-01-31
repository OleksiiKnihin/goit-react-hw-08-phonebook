import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Box, Typography, Button } from '@mui/material';

const styledNavLink = {
  textDecoration: 'none',
  borderRadius: '4px',
  backgroundColor: '#fff',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  margin: '15px 5px',

  '&:hover': {
    color: 'primary.main',
    backgroundColor: '#00FFFF',
  },
  '&.active': {
    color: 'primary.main',
    backgroundColor: '#00FFFF',
  },
};

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box display="flex" gap={2}>
      <Typography variant="h6">
        <p>Welcome, Dear {user.name}</p>
      </Typography>
      <Button
        sx={styledNavLink}
        variant="outlined"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
