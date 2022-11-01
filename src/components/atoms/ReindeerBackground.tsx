import { keyframes, styled } from '../../style/stitches.config';
import backgroundImgUrl from '../../assets/reindeer-bg.png';

const makeScroll = (size: number) =>
  keyframes({
    '0%': {
      backgroundPosition: '0px 0px',
    },
    '100%': {
      backgroundPosition: `-${size}px -${size}px`,
    },
  });

const scrollingMd = makeScroll(360);
const scrollingLg = makeScroll(720);

export const ReindeerBackground = styled('div', {
  position: 'absolute',
  width: '100vw',
  height: '100vh',
  backgroundImage: `url(${backgroundImgUrl})`,
  backgroundRepeat: 'repeat',
  backgroundSize: '360px',
  zIndex: -10,
  animation: `${scrollingMd} linear`,
  animationDuration: '12s',
  animationIterationCount: 'infinite',
  transition: 'all 1.2s ease-in-out',
  '@bp2': {
    backgroundSize: '720px',
    animationName: `${scrollingLg}`,
  },
  variants: {
    enabled: {
      false: {
        transitionDuration: '0.4s',
        opacity: 0,
      },
      true: { opacity: 0.3 },
    },
  },
});
