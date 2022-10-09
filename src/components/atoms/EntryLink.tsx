import { styled } from '../../style/stitches.config';

export const EntryLink = styled('a', {
  display: 'block',
  padding: '$2 $3',
  border: 'dashed 2px $white',
  color: '$white',
  textDecoration: 'none',
  textShadow: '2px 2px black',
  fontFamily: 'ataristocrat',
  textTransform: 'uppercase',
  fontSize: '$6',
  '@bp1': {
    fontSize: '$7',
  },
  '@bp3': {
    fontSize: '$8',
  },
});
