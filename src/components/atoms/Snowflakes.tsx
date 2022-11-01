import React, { useEffect } from 'react';
import { spawn_snow, spawnSnowCSS } from '../../js/PureSnow.js';
import { config } from '../../style/stitches.config.js';
import { Box } from './Box.js';

interface Props {
  enabled: boolean;
}

export const Snowflakes = ({ enabled }: Props) => {
  useEffect(() => {
    console.log(config.media.bp2);
    const amount = window.matchMedia(config.media.bp2).matches ? 400 : 200;
    spawn_snow(amount);
    spawnSnowCSS(amount);
  }, []);
  return (
    <Box
      id="snow"
      css={{
        overflow: 'hidden',
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        opacity: enabled ? 1 : 0,
        transition: 'opacity 0.8s ease-in-out',
      }}
    />
  );
};
