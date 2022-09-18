/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types */
import { ComponentProps } from '@stitches/react';
import React from 'react';
import { ReactComponent as CloseSvg } from '../../assets/icons/close.svg';
import { config, styled, theme } from '../../style/stitches.config';

const ButtonIcon = styled('button', {
  background: 'none',
  padding: 0,
  border: 'none',
  borderRadius: '$2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ':focus-visible': {
    outline: 'solid 2px $white',
    outlineOffset: 0,
  },
});

const StyledIcon = styled(CloseSvg, {
  color: '$white',
  height: '$5',
  width: '$5',
  '@bp2': {
    height: '$6',
    width: '$6',
  },
});

type AsType = React.ComponentType<any> | 'button' | 'a' | undefined;

export type ButtonProps<As extends AsType = undefined> = Omit<
  ComponentProps<typeof ButtonIcon>,
  'css' | 'as'
> &
  Omit<React.HTMLProps<HTMLLinkElement>, 'size' | 'css' | 'as' | 'icon'> &
  (As extends React.ComponentType<any>
    ? Omit<ComponentProps<As>, 'as'>
    : {}) & {
    as?: As;
  };

export function CloseButton<As extends AsType = undefined>(
  props: ButtonProps<As>
) {
  return (
    <ButtonIcon {...props} aria-label="Retour">
      <StyledIcon />
    </ButtonIcon>
  );
}
