import { CSS, VariantProps } from '@stitches/react';
import React, { useMemo } from 'react';
import { keyframes, styled } from '../../style/stitches.config';

const toPercent = (v: number) => `${(v * 100).toString(10).substring(0, 2)}%`;

export enum LightColors {
  red = 'red',
  blue = 'blue',
  yellow = 'yellow',
  green = 'green',
  white = 'white',
}

export const COLOR_KEYS = Object.keys(LightColors) as Array<
  keyof typeof LightColors
>;

const COLORS: { [key in LightColors]: string } = {
  red: '#fd874e',
  blue: '#c584ff',
  yellow: '#edf764',
  green: '#55f58e',
  white: '#3bfeff',
};

const lightAnimationSm = keyframes({
  '0%': {
    boxShadow: '0 0 10vh 10vh $$lightColor',
    opacity: 0.5,
  },
  '100%': {
    boxShadow: '0 0 20vh 20vh $$lightColor',
    opacity: 0.6,
  },
});
const lightAnimationLg = keyframes({
  '0%': {
    opacity: 0.5,
    boxShadow: '0 0 9vw 9vw $$lightColor',
  },
  '100%': {
    opacity: 0.6,
    boxShadow: '0 0 14vw 14vw $$lightColor',
  },
});

const StyledLight = styled('div', {
  position: 'absolute',
  borderRadius: '$round',
  width: '0px',
  height: '0px',

  $$lightColor: '$colors$white',
  background: '$$lightColor',
  animationName: `${lightAnimationSm}`,
  animationIterationCount: 'infinite',
  animationDirection: 'alternate',
  animationFillMode: 'both',
  '@bp2': {
    animationName: `${lightAnimationLg}`,
  },
  variants: {
    color: COLOR_KEYS.reduce(
      (variants, key) => ({
        ...variants,
        [key]: {
          $$lightColor: COLORS[key],
        },
      }),
      {} as { [key in keyof typeof LightColors]: CSS }
    ),
  },
});

type Props = VariantProps<typeof StyledLight> & {
  position: { x: number; y: number };
};

export const ColorLight = ({ position, ...props }: Props) => {
  const animationProps = useMemo(
    () => ({
      animationDuration: `${4 + Math.random() * 3}s`,
      animationDelay: `${Math.random() * 6}s`,
      scale: 0.8 + Math.random() * 0.4,
    }),
    []
  );
  return (
    <StyledLight
      {...props}
      css={{
        left: toPercent(position.x),
        top: toPercent(position.y),
        transform: 'translate(-50%, -50%)',
        ...animationProps,
      }}
    />
  );
};
