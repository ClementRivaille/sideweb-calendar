import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '../../style/stitches.config';
import { CloseButton } from '../atoms/CloseButton';
import { Header } from '../atoms/Header';

const HeaderBackground = styled('div', {
  backgroundColor: '$red1',
  padding: '$2 $4',
  paddingTop: '$3',
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  borderRadius: '0px 0px $4 $4',
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
  return (
    <HeaderBackground>
      <Header level={2}>{children}</Header>
      <CloseButton as={Link} to="/" />
    </HeaderBackground>
  );
};
