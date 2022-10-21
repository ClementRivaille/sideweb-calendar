import { ComponentProps } from '@stitches/react';
import React from 'react';
import { styled } from '../../style/stitches.config';
import { Icon, IconName } from './Icons';

const StyledCheckbox = styled('input', {
  position: 'absolute',
  opacity: 0,
});

const StyledLabel = styled('label', {
  color: '$white',
  cursor: 'pointer',
  transition: 'color 0.2s',
  position: 'relative',
  borderRadius: '$3',
  '[data-whatintent="keyboard"] &:focus-within': {
    outline: 'solid 2px rgb(255 255 255 / 0.6)',
    outlineOffset: '6px',
  },
  variants: {
    disabled: {
      true: {
        opacity: 0.4,
        cursor: 'default',
      },
    },
    checked: {
      true: {
        color: '$red1',
      },
    },
  },
});

type Props = {
  icon: IconName;
  label: string;
} & ComponentProps<typeof StyledCheckbox>;

export const IconSwitch = ({
  icon,
  label,
  disabled,
  checked,
  className,
  ...props
}: Props) => (
  <StyledLabel
    disabled={disabled}
    checked={checked}
    aria-label={label}
    className={className}
  >
    <Icon name={icon} />
    <StyledCheckbox
      type="checkbox"
      disabled={disabled}
      checked={checked}
      {...props}
    />
  </StyledLabel>
);
