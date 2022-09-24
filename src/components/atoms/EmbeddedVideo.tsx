import React, { FunctionComponent } from 'react';
import { styled } from '../../style/stitches.config';

const Container = styled('div', {
  height: '$12',
  width: 'calc($12 * 16/9)',
  maxWidth: '100vw',
  objectFit: 'contain',
  '@bp1': {
    height: '$13',
    width: 'calc($13 * 16/9)',
  },
  '@bp2': {
    maxHeight: '45vh',
  },
  '@bp3': {
    height: '$14',
    width: 'calc($14 * 16/9)',
  },
});

interface Props {
  url: string;
}

export const EmbeddedVideo: FunctionComponent<Props> = ({ url }) => (
  <Container>
    <iframe
      width="100%"
      height="100%"
      src={url}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </Container>
);
