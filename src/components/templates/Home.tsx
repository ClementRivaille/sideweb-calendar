import React, { useEffect } from 'react';
import { Calendar } from '../organisms/Calendar';
import { Main } from '../atoms/Main';
import { Header } from '../atoms/Header';
import { Footer } from '../molecules/Footer';
import { Box } from '../atoms/Box';
import { EffectsControls } from '../organisms/EffectsControls';
import { useStore } from '../../model/store';

export function Home() {
  const { setMute } = useStore();
  useEffect(() => {
    setMute(false);
  }, [setMute]);

  return (
    <Box css={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Main css={{ flex: 1 }}>
        <Header>Le Calendrier Side Web</Header>
        <EffectsControls />
        <Calendar />
      </Main>
      <Footer />
    </Box>
  );
}
