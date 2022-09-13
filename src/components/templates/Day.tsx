import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box } from '../atoms/Box';

export const Day = () => {
  const { id } = useParams();

  return (
    <div>
      <div>The day is {id}</div>
      <Box as={Link} to="/" css={{ color: 'white' }}>
        Back
      </Box>
    </div>
  );
};
