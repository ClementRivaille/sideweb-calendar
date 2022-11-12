import React from 'react';
import { useStore } from '../../model/store';
import { CursorEffectType, useCursorEffect } from '../../utils/useCursorEffect';
import { useOrchestra } from '../../utils/useOrchestra';
import { Box } from '../atoms/Box';
import { ReindeerBackground } from '../atoms/ReindeerBackground';
import { Snowflakes } from '../atoms/Snowflakes';
import { LightsEffect } from '../molecules/LightsEffect';

export const EffectsLayer = () => {
  const { effects } = useStore();

  useCursorEffect(effects.keychain.enabled, CursorEffectType.springyEmoji);
  useCursorEffect(effects.sparkles.enabled, CursorEffectType.fairyDust);
  useCursorEffect(effects.sparkles.enabled, CursorEffectType.emojisRain);

  useOrchestra();

  return (
    <Box
      css={{
        pointerEvents: 'none',
      }}
    >
      {effects.background.opened && (
        <ReindeerBackground enabled={effects.background.enabled} />
      )}
      {effects.lights.opened && (
        <LightsEffect enabled={effects.lights.enabled} />
      )}
      {effects.snow.opened && <Snowflakes enabled={effects.snow.enabled} />}
    </Box>
  );
};
