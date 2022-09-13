import React from 'react';
import { useParams } from 'react-router-dom';

export const Day = () => {
  const { id } = useParams();

  return <div>The day is {id}</div>;
};
