import React, { useMemo } from 'react';
import { Box } from '../atoms/Box';
import { ColorLight, COLOR_KEYS } from '../atoms/ColorLight';

interface Props {
  enabled: boolean;
}

export const LightsEffect = ({ enabled }: Props) => {
  const lightsProps = useMemo(
    () =>
      [...Array(6)].map(() => {
        const nbLights = 1 + Math.floor(Math.random() * 3);
        return [...Array(nbLights)].map(() => ({
          color: COLOR_KEYS[Math.floor(Math.random() * COLOR_KEYS.length)],
          position: { x: Math.random(), y: Math.random() },
        }));
      }),
    []
  );

  return (
    <Box
      css={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        display: 'grid',
        gridTemplate: '1fr 1fr 1fr / 1fr 1fr',
        pointerEvents: 'none',
        opacity: enabled ? 1 : 0,
        transition: 'all 0.4s ease-in-out',
        zIndex: 100,
        '@bp2': {
          gridTemplate: '1fr 1fr / 1fr 1fr 1fr',
        },
        '> *': {
          position: 'relative',
        },
      }}
    >
      {lightsProps.map((area, i) => (
        <Box
          key={`area-${i}`}
          css={{
            '> *:not(:first-child)': {
              display: 'none',
              '@bp2': {
                display: 'initial',
              },
            },
          }}
        >
          {area.map((props, j) => (
            <ColorLight {...props} key={`light-${i}-${j}`} />
          ))}
        </Box>
      ))}
    </Box>
  );
};
