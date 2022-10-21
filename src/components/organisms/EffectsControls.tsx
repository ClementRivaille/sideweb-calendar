import React from 'react';
import { GIFT_DAYS } from '../../model/effects';
import { ToolBar } from '../atoms/ToolBar';
import { EffectButton } from './EffectButton';

export const EffectsControls = () => {
  return (
    <ToolBar>
      {GIFT_DAYS.map((gift) => (
        <EffectButton key={gift.effect} gift={gift} />
      ))}
    </ToolBar>
  );
};
