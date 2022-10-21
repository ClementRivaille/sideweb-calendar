import React, { useMemo, useState } from 'react';
import { Gift } from '../../model/effects';
import { useStore } from '../../model/store';
import { css, keyframes } from '../../style/stitches.config';
import { IconButton } from '../atoms/IconButton';
import { IconSwitch } from '../atoms/IconSwitch';

interface EffectButtonProps {
  gift: Gift;
}

const openAnimation = keyframes({
  from: {
    transform: 'scale(0.5)',
  },
  to: {
    transform: 'scale(1.0)',
  },
});

const openedStyle = css({
  animationName: openAnimation(),
  animationDuration: '0.4s',
  animationTimingFunction: 'cubic-bezier(0.28, 0.46, 0, 1.4)',
});

export const EffectButton = ({ gift }: EffectButtonProps) => {
  const { isDayUnlocked, effects, toggleEffect, openEffect } = useStore();
  const state = useMemo(() => effects[gift.effect], [effects, gift]);

  const [opening] = useState(() => isDayUnlocked(gift.day) && !state.opened);

  return state.opened || !isDayUnlocked(gift.day) ? (
    <IconSwitch
      name={gift.effect}
      label={gift.label}
      disabled={!isDayUnlocked(gift.day)}
      checked={state.enabled}
      onChange={() => toggleEffect(gift.effect)}
      icon={isDayUnlocked(gift.day) ? gift.icon : 'gift'}
      className={(opening && openedStyle()) || ''}
    />
  ) : (
    <IconButton
      icon="gift"
      label="Ouvrir un cadeau"
      onClick={() => openEffect(gift.effect)}
    />
  );
};
