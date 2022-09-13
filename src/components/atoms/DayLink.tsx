import { config, styled } from '../../style/stitches.config';

export const DayLink = styled(`a`, {
  display: 'flex',
  height: '$9',
  width: '$9',
  padding: '$2',
  cursor: 'pointer',
  background: '$blue3',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  fontSize: '$6',
  transition: 'all 0.2s ease-in-out',
  outline: 'solid 2px transparent',
  borderRadius: '$5',
  color: 'white',
  '&:hover, &:focus': {
    outlineColor: 'white',
    outlineOffset: '0px',
    border: 'none',
  },
  '@bp1': {
    height: '$10',
    width: '$10',
    fontSize: '$7',
    outline: 'solid 4px transparent',
    borderRadius: '$6',
  },
  '@bp3': {
    height: '$11',
    width: '$11',
    fontSize: '$8',
    borderRadius: '$7',
  },
  variants: {
    disabled: {
      true: {
        cursor: 'not-allowed',
        pointerEvents: 'none',
        background: '$blue2',
      },
    },
    special: {
      true: {
        boxShadow: `inset 0px 0px 0px 3px ${config.theme.colors.blue4}`,
        '@bp1': {
          boxShadow: `inset 0px 0px 0px 4px ${config.theme.colors.blue4}`,
        },
        '@bp3': {
          boxShadow: `inset 0px 0px 0px 6px ${config.theme.colors.blue4}`,
        },
      },
    },
    active: {
      true: {
        fontWeight: 'bold',
        textShadow: '2px 2px 2px black',
        '@bp1': {
          textShadow: '3px 3px 2px black',
        },
        '@bp3': {
          textShadow: '4px 4px 2px black',
        },
      },
    },
  },
  compoundVariants: [],
});
