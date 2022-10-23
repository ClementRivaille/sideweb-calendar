import React, { useEffect } from 'react';
import { spawn_snow, spawnSnowCSS } from '../../js/PureSnow.js';
import { Box } from './Box.js';

interface Props {
  enabled: boolean;
}

export const Snowflakes = ({ enabled }: Props) => {
  useEffect(() => {
    spawn_snow(200);
    spawnSnowCSS(200);
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
