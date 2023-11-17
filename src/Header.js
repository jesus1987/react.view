import React from 'react';
import { AppBar, Toolbar, Typography, Button  } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
       <Toolbar>
        <Button component={Link} to="/mygrid" color="inherit">
          Listar
        </Button>
        <Button component={Link} to="/insert" color="inherit">
          Crear
        </Button>
        {/* Add any other header content here */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;