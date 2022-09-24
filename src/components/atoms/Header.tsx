import { styled } from '../../style/stitches.config';

export const Header = styled('h1', {
  color: '$white',
  margin: 0,
  fontSize: '$6',
  fontWeight: 'bold',
  textAlign: 'center',
  '@bp2': {
    fontSize: '$8',
  },
  '@bp3': {
    fontSize: '$9',
  },
  variants: {
    level: {
      [1]: {
        '@bp3': {
          marginBottom: '$5',
        },
      },
      [2]: {
        textAlign: 'left',
        fontWeight: 'bold',
        '@bp2': {
          fontSize: '$7',
        },
        '@bp3': {
          fontSize: '$8',
        },
      },
    },
  },
  defaultVariants: {
    level: 1,
  },
});
