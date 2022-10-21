/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types */
import { ComponentProps } from '@stitches/react';
import React from 'react';
import { styled } from '../../style/stitches.config';
import { Icon, IconName } from './Icons';

const StyledButton = styled('button', {
  background: 'none',
  padding: 0,
  border: 'none',
  borderRadius: '$2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$white',
  cursor: 'pointer',
  ':focus-visible': {
    outline: 'solid 2px $white',
    outlineOffset: 0,
  },
});

type AsType = React.ComponentType<any> | 'button' | 'a' | undefined;

type IconButtonProps<As extends AsType = undefined> = Omit<
  ComponentProps<typeof StyledButton>,
  'css' | 'as'
> &
  Omit<React.HTMLProps<HTMLLinkElement>, 'size' | 'css' | 'as' | 'icon'> &
  (As extends React.ComponentType<any>
    ? Omit<ComponentProps<As>, 'as'>
    : {}) & {
    as?: As;
  } & {
    icon: IconName;
    label: string;
  };

export function IconButton<As extends AsType = undefined>({
  icon,
  label,
  ...props
}: IconButtonProps<As>) {
  return (
    <StyledButton {...props} aria-label={label}>
      <Icon name={icon} />
    </StyledButton>
  );
}
