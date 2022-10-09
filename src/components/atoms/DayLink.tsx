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
  fontFamily: 'ldcBlack',
  fontSize: '$7',
  transition: 'all 0.2s ease-in-out',
  outline: 'solid 2px transparent',
  borderRadius: '$5',
  color: '$white',
  '&:hover, &:focus': {
    outlineColor: '$white',
    outlineOffset: '0px',
    border: 'none',
  },
  '@bp1': {
    height: '$10',
    width: '$10',
    fontSize: '$8',
    outline: 'solid 4px transparent',
    borderRadius: '$6',
  },
  '@bp3': {
    height: '$11',
    width: '$11',
    fontSize: '$9',
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
        textShadow: '3px 3px black',
        '@bp1': {
          textShadow: '4px 4px black',
        },
        '@bp3': {
          textShadow: '5px 5px black',
        },
      },
    },
  },
  compoundVariants: [],
});
