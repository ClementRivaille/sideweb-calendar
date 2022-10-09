import { styled } from '../../style/stitches.config';

export const Description = styled('div', {
  overflowY: 'auto',
  backgroundColor: '$blue2',
  color: '$white',
  padding: '$2 $3',
  fontFamily: 'ataristocrat',
  lineHeight: '0.8em',
  fontSize: '$5',
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  width: '100vw',
  '@bp1': {
    fontSize: '$6',
    padding: '$4',
    gap: '$3',
    width: 'auto',
    borderRadius: '$3',
  },
  '@bp3': {
    padding: '$3',
    fontSize: '$7',
  },
});
