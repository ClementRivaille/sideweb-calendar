import React from 'react';
import { Box } from '../atoms/Box';
import { Calendar } from '../organisms/Calendar';
import { css } from '../../style/stitches.config';

export function Home() {
  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        minHeight: '100vh',
        gap: '$4',
        padding: '$4',
        '@bp1': {
          padding: '$5 $6',
        },
        '@bp2': {
          padding: '$5 $8',
        },
        '@bp3': {
          gap: '$8',
          padding: '$6 $11',
        },
      }}
    >
      <h1
        className={css({
          margin: '0',
          textAlign: 'center',
        })()}
      >
        Side Web Advent Calendar
      </h1>
      <Calendar />
    </Box>
  );
}
