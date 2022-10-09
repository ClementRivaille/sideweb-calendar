import { globalCss } from './stitches.config';

export const globalStyle = globalCss({
  '@font-face': [
    {
      fontFamily: 'sticker',
      src: 'local("sticker"), url("/fonts/Sticker.ttf")',
    },
    {
      fontFamily: 'ataristocrat',
      src: 'local("ataristocrat"), url("/fonts/ATARISTOCRAT.ttf")',
    },
    {
      fontFamily: 'ldcBlack',
      src: 'local("ldcBlack"), url("/fonts/ldcBlackRound.ttf")',
    },
  ],
  body: {
    margin: 0,
    minHeight: '100%',
    backgroundColor: '$blue1',
    color: '$white',
    fontSize: '$3',
    fontFamily: 'sans-serif',
    '@bp1': {
      fontSize: '$4',
    },
  },
  '*': {
    boxSizing: 'border-box',
  },
});
