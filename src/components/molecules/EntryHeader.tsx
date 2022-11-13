import React, { FunctionComponent, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '../../style/stitches.config';
import { IconButton } from '../atoms/IconButton';
import { Header } from '../atoms/Header';
import { useStore } from '../../model/store';

const HeaderBackground = styled('div', {
  backgroundColor: '$red1',
  padding: '$2 $4',
  paddingTop: '$3',
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  borderRadius: '0px 0px $4 $4',
  position: 'absolute',
  top: 0,
  '@bp2': {
    position: 'unset',
  },
  '@bp3': {
    padding: '$3 $4',
    minWidth: '50vw',
    justifyContent: 'flex-end',
    borderRadius: '0px 0px $5 $5',
    [`> ${Header}`]: {
      flex: '1',
      textAlign: 'center',
    },
  },
});

interface Props {
  children: React.ReactNode;
}

export const EntryHeader: FunctionComponent<Props> = ({ children }) => {
  const { mute, setMute, effects } = useStore();
  const isSoundActive = useMemo(
    () => Object.values(effects).find((state) => state.enabled),
    [effects]
  );
  return (
    <HeaderBackground>
      {isSoundActive && (
        <IconButton
          icon={mute ? 'soundOff' : 'soundOn'}
          onClick={() => {
            console.log('YEAH?', !mute);
            setMute(!mute);
          }}
          label={mute ? 'Couper le son' : 'Activer le son'}
        />
      )}
      <Header level={2}>{children}</Header>
      <IconButton as={Link} to="/" label="retour" icon="close" />
    </HeaderBackground>
  );
};
