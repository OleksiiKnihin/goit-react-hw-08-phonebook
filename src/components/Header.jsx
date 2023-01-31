import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';
import { useAuth } from 'hooks/useAuth';
import { AppBar, Toolbar, Typography } from '@mui/material';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          to="/"
          variant="h5"
          sx={{
            fontWeight: 600,
            textDecoration: 'none',
            flexGrow: 1,
            color: 'inherit',
            display: { xs: 'none', md: 'block' },
            width: '200px',
          }}
        >
          <Navigation />
        </Typography>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};
