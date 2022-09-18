import React from 'react';
import { Calendar } from '../organisms/Calendar';
import { Main } from '../atoms/Main';
import { Header } from '../atoms/Header';

export function Home() {
  return (
    <Main>
      <Header>Side Web Advent Calendar</Header>
      <Calendar />
    </Main>
  );
}
