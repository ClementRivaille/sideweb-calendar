import { StyledComponent } from '@stitches/react/types/styled-component';
import React, { ComponentType, SVGProps } from 'react';
import { ReactComponent as CloseSvg } from '../../assets/icons/close.svg';
import { ReactComponent as GiftSvg } from '../../assets/icons/gift.svg';
import { ReactComponent as TreeSvg } from '../../assets/icons/tree.svg';
import { ReactComponent as LightSvg } from '../../assets/icons/light.svg';
import { ReactComponent as ReindeerSvg } from '../../assets/icons/reindeer.svg';
import { ReactComponent as SnowflakeSvg } from '../../assets/icons/snowflake.svg';
import { ReactComponent as StarsSvg } from '../../assets/icons/stars.svg';
import { ReactComponent as SoundOnSvg } from '../../assets/icons/volume.svg';
import { ReactComponent as SoundOffSvg } from '../../assets/icons/volume-off.svg';
import { styled } from '../../style/stitches.config';

export type IconName =
  | 'gift'
  | 'close'
  | 'tree'
  | 'light'
  | 'reindeer'
  | 'snowflake'
  | 'stars'
  | 'soundOn'
  | 'soundOff';

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
  tree: buildStyledIcon(TreeSvg),
  light: buildStyledIcon(LightSvg),
  reindeer: buildStyledIcon(ReindeerSvg),
  snowflake: buildStyledIcon(SnowflakeSvg),
  stars: buildStyledIcon(StarsSvg),
  soundOn: buildStyledIcon(SoundOnSvg),
  soundOff: buildStyledIcon(SoundOffSvg),
};

type Props = {
  name: IconName;
} & Omit<SVGProps<SVGSVGElement>, 'ref'>;

export const Icon = ({ name, ...props }: Props) => {
  const IconElement = iconsMap[name];
  return <IconElement {...props} />;
};
