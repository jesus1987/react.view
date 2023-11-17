import React from 'react';
import { Container, Typography } from '@mui/material';
import MyGrid from './commponents/common/MyGrid';
const Body = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
      </Typography>
      {/* Add any other body content here */}
      <MyGrid></MyGrid>
    </Container>
  );
};

export default Body;