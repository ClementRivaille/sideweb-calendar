import React from 'react';
import { GIFT_DAYS } from '../../model/effects';
import { useStore } from '../../model/store';
import { IconSwitch } from '../atoms/IconSwitch';
import { ToolBar } from '../atoms/ToolBar';

export const EffectsControls = () => {
  const { isDayUnlocked, effects, toggleEffect } = useStore();
  return (
    <ToolBar>
      {GIFT_DAYS.map((gift) => (
        <IconSwitch
          key={gift.effect}
          disabled={!isDayUnlocked(gift.day)}
          checked={effects[gift.effect].enabled}
          onChange={() => toggleEffect(gift.effect)}
          icon={isDayUnlocked(gift.day) ? gift.icon : 'gift'}
        />
      ))}
    </ToolBar>
  );
};
