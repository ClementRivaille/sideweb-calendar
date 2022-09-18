import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { keyframes } from '../style/stitches.config';
import { styled } from '@stitches/react';

type Stage = 'fadeIn' | 'fadeOut';

export interface RedirectState {
  redirect?: boolean;
}

const fadeIn = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': { opacity: 1 },
});
const fadeOut = keyframes({
  '0%': {
    opacity: 1,
  },
  '100%': { opacity: 0 },
});

export const FadeContent = styled('div', {
  maxHeight: '100vh',
  overflowY: 'auto',
  variants: {
    stage: {
      fadeIn: {
        animation: `${fadeIn} 400ms`,
      },
      fadeOut: {
        animation: `${fadeOut} 400ms`,
        opacity: 0,
      },
    },
  },
  defaultVariants: {
    stage: 'fadeIn',
  },
});

export const useRouteTransition = () => {
  const location = useLocation();

  const [displayedLocation, setDisplayedLocation] = useState(location);
  const [stage, setStage] = useState<Stage>('fadeIn');

  useEffect(() => {
    if (location.pathname !== displayedLocation.pathname) {
      if ((location.state as RedirectState)?.redirect) {
        setDisplayedLocation(location);
      } else {
        setStage('fadeOut');
      }
    }
  }, [location.pathname, displayedLocation.pathname]);

  const onAnimationEnd = useCallback(() => {
    if (stage === 'fadeOut') {
      setDisplayedLocation(location);
      setStage('fadeIn');
    }
  }, [stage]);

  return {
    contentProps: {
      stage,
      onAnimationEnd,
    },
    displayedLocation,
  };
};
