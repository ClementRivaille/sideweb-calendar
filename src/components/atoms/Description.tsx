import { styled } from '../../style/stitches.config';

export const Description = styled('div', {
  overflowY: 'auto',
  backgroundColor: '$blue2',
  color: '$white',
  padding: '$2 $3',
  fontSize: '$3',
  fontFamily: 'sans-serif',
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  width: '100vw',
  '@bp1': {
    fontSize: '$4',
    padding: '$4',
    gap: '$3',
    width: 'auto',
    borderRadius: '$3',
  },
  '@bp3': {
    padding: '$3',
  },
});
