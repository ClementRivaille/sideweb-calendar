import { globalCss } from './stitches.config';

export const globalStyle = globalCss({
  body: {
    margin: 0,
    minHeight: '100%',
    backgroundColor: '$blue1',
    color: 'white',
    fontSize: '$4',
    fontFamily: 'sans-serif',
  },
  '*': {
    boxSizing: 'border-box',
  },
});
