import { styled } from '../../style/stitches.config';

export const EntryImg = styled('img', {
  height: '$12',
  maxWidth: '100vw',
  objectFit: 'contain',
  '@bp1': {
    height: '$13',
  },
  '@bp2': {
    maxHeight: '45vh',
  },
  '@bp3': {
    height: '$14',
  },
});
