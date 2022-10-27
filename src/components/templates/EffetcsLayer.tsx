import React from 'react';
import { useStore } from '../../model/store';
import { useCursorEffect } from '../../utils/useCursorEffect';
import { Box } from '../atoms/Box';
import { Snowflakes } from '../atoms/Snowflakes';

export const EffectsLayer = () => {
  const { effects } = useStore();

  useCursorEffect(effects.keychain.enabled);

  return (
    <Box
      css={{
        pointerEvents: 'none',
      }}
    >
      {effects.snow.opened && <Snowflakes enabled={effects.snow.enabled} />}
    </Box>
  );
};
