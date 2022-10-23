import React from 'react';
import { useStore } from '../../model/store';
import { Box } from '../atoms/Box';
import { Snowflakes } from '../atoms/Snowflakes';

export const EffectsLayer = () => {
  const { effects } = useStore();

  return (
    <Box
      css={{
        pointerEvents: 'none',
      }}
    >
      <Snowflakes enabled={effects.snow.enabled} />
    </Box>
  );
};
