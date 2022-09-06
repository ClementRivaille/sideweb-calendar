import { config, styled, theme } from '../../style/stitches.config';

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
  borderRadius: '$1',
  '&:hover, &:focus': {
    outlineColor: 'white',
  },
  '@bp1': {
    height: '$10',
    width: '$10',
    fontSize: '$7',
    outline: 'solid 4px transparent',
  },
  '@bp3': {
    height: '$11',
    width: '$11',
    fontSize: '$8',
    borderRadius: '$2',
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
        boxShadow: `inset 0px 0px 0px 6px ${config.theme.colors.red1}99`,
        '@bp1': {
          boxShadow: `inset 0px 0px 0px 9px ${config.theme.colors.red1}99`,
        },
        '@bp3': {
          boxShadow: `inset 0px 0px 0px 12px ${config.theme.colors.red1}99`,
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
  compoundVariants: [
    {
      disabled: false,
      special: true,
      css: {
        boxShadow: `inset 0px 0px 0px 6px ${config.theme.colors.red1}BB`,
        '@bp1': {
          boxShadow: `inset 0px 0px 0px 9px ${config.theme.colors.red1}BB`,
        },
        '@bp3': {
          boxShadow: `inset 0px 0px 0px 12px ${config.theme.colors.red1}BB`,
        },
      },
    },
  ],
});
