import { styled } from '../../style/stitches.config';

export const EntryLink = styled('a', {
  display: 'block',
  padding: '$2 $3',
  border: 'dashed 2px $white',
  color: '$white',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '$4',
  '@bp1': {
    fontSize: '$5',
  },
  '@bp3': {
    fontSize: '$6',
  },
});
