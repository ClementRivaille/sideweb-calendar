import { styled } from '../../style/stitches.config';

export const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  gap: '$4',
  padding: '$4',

  '@bp1': {
    padding: '$5 $6',
  },
  '@bp2': {
    padding: '$5 $8',
  },
  '@bp3': {
    padding: '$6 $11',
  },
});
