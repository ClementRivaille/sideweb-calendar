import { StyledComponent } from '@stitches/react/types/styled-component';
import React, { ComponentType, SVGProps } from 'react';
import { ReactComponent as CloseSvg } from '../../assets/icons/close.svg';
import { ReactComponent as GiftSvg } from '../../assets/icons/gift.svg';
import { styled } from '../../style/stitches.config';

export type IconName = 'gift' | 'close';

const buildStyledIcon = (icon: ComponentType<SVGProps<SVGSVGElement>>) =>
  styled(icon, {
    height: '$5',
    width: '$5',
    '@bp2': {
      height: '$6',
      width: '$6',
    },
  });

const iconsMap: {
  [key in IconName]: StyledComponent<ComponentType<SVGProps<SVGSVGElement>>>;
} = {
  close: buildStyledIcon(CloseSvg),
  gift: buildStyledIcon(GiftSvg),
};

type Props = {
  name: IconName;
} & Omit<SVGProps<SVGSVGElement>, 'ref'>;

export const Icon = ({ name, ...props }: Props) => {
  const IconElement = iconsMap[name];
  return <IconElement {...props} />;
};
