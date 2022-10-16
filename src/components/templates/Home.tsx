import React from 'react';
import { Calendar } from '../organisms/Calendar';
import { Main } from '../atoms/Main';
import { Header } from '../atoms/Header';
import { Footer } from '../molecules/Footer';
import { Box } from '../atoms/Box';

export function Home() {
  return (
    <Box css={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Main css={{ flex: 1 }}>
        <Header>{`Calendrier de l'Avent Side Web`}</Header>
        <Calendar />
      </Main>
      <Footer />
    </Box>
  );
}
