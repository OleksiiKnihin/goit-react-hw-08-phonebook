import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Box, Typography } from '@mui/material';

const styledNavLink = {
  textDecoration: 'none',
  color: 'inherit',
  padding: '2px 4px',
  borderRadius: '4px',
  alignItems: 'center',
  marginLeft: '10px',
};

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box>
      <Typography variant="h6" component={NavLink} to="/" sx={styledNavLink}>
        My phonebook
      </Typography>

      {isLoggedIn && (
        <Typography
          variant="h6"
          component={NavLink}
          sx={styledNavLink}
          to="/contacts"
        >
          Contacts
        </Typography>
      )}
    </Box>
  );
};
