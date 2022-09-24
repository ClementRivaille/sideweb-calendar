import { globalCss } from './stitches.config';

export const globalStyle = globalCss({
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
