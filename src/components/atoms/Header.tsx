import { keyframes, styled } from '../../style/stitches.config';

const waveSm = keyframes({
  '0%': {
    transform: 'translateY(-4px)',
  },
  '50%': {
    transform: 'translateY(4px)',
  },
  '100%': {
    transform: 'translateY(-4px)',
  },
});

const waveLg = keyframes({
  '0%': {
    transform: 'translateY(-6px)',
  },
  '50%': {
    transform: 'translateY(6px)',
  },
  '100%': {
    transform: 'translateY(-6px)',
  },
});

export const Header = styled('h1', {
  color: '$white',
  margin: 0,
  fontSize: '$6',
  textAlign: 'center',
  fontWeight: 'normal',
  variants: {
    level: {
      [1]: {
        fontFamily: 'sticker',
        fontSize: '$8',
        color: '$white',
        textShadow: '7px 7px 4px black',
        animation: `${waveSm} 3s infinite ease-in-out`,
        '@bp2': {
          fontSize: '$9',
          animationName: `${waveLg}`,
        },
        '@bp3': {
          marginBottom: '$5',
          fontSize: '$10',
        },
        '@reduced-motion': {
          animation: 'none',
        },
      },
      [2]: {
        fontFamily: 'ldcBlack',
        textAlign: 'left',
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
