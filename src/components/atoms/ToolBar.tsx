import { styled } from '../../style/stitches.config';

export const ToolBar = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  background: '$blue2',
  borderRadius: '$pill',
  padding: '$3 $5',
  '@bp2': {
    flexDirection: 'column',
    position: 'absolute',
    left: '0px',
    top: '50%',
    transform: 'translateY(-50%)',
    borderRadius: '0px $5 $5 0px',
    padding: '$4 $3',
  },
  '@bp3': {
    padding: '$5 $5 $5 $4',
  },
});
