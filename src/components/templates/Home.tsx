import React from 'react';
import { Calendar } from '../organisms/Calendar';
import { Main } from '../atoms/Main';
import { Header } from '../atoms/Header';
import { Footer } from '../molecules/Footer';
import { Box } from '../atoms/Box';
import { ToolBar } from '../atoms/ToolBar';
import { IconSwitch } from '../atoms/IconSwitch';

export function Home() {
  return (
    <Box css={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Main css={{ flex: 1 }}>
        <Header>{`Calendrier de l'Avent Side Web`}</Header>
        <ToolBar>
          <IconSwitch icon="gift" />
          <IconSwitch icon="gift" disabled />
          <IconSwitch icon="gift" checked />
        </ToolBar>
        <Calendar />
      </Main>
      <Footer />
    </Box>
  );
}
