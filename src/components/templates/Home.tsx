import React from 'react';
import { Box } from '../atoms/Box';
import { Calendar } from '../organisms/Calendar';
import { css } from '../../style/stitches.config';
import { Main } from '../atoms/Main';

export function Home() {
  return (
    <Main>
      <h1
        className={css({
          margin: '0',
          textAlign: 'center',
        })()}
      >
        Side Web Advent Calendar
      </h1>
      <Calendar />
    </Main>
  );
}
