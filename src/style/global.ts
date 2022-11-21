import config from '../config';
import { globalCss } from './stitches.config';

export const globalStyle = globalCss({
  '@font-face': [
    {
      fontFamily: 'sticker',
      src: `local("sticker"), url("${config.baseUrl}/fonts/Sticker.ttf")`,
    },
    {
      fontFamily: 'ataristocrat',
      src: `local("ataristocrat"), url("${config.baseUrl}/fonts/ATARISTOCRAT.ttf")`,
    },
    {
      fontFamily: 'ldcBlack',
      src: `local("ldcBlack"), url("${config.baseUrl}/fonts/ldcBlackRound.ttf")`,
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
