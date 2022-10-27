import React from 'react';
import { useStore } from '../../model/store';
import { CursorEffectType, useCursorEffect } from '../../utils/useCursorEffect';
import { Box } from '../atoms/Box';
import { Snowflakes } from '../atoms/Snowflakes';

export const EffectsLayer = () => {
  const { effects } = useStore();

  useCursorEffect(effects.keychain.enabled, CursorEffectType.springyEmoji);
  useCursorEffect(effects.sparkles.enabled, CursorEffectType.fairyDust);
  useCursorEffect(effects.sparkles.enabled, CursorEffectType.emojisRain);

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
