/* eslint-disable no-irregular-whitespace */
import React from 'react';
import { styled } from '../../style/stitches.config';

const FooterContent = styled('div', {
  background: '$blue2',
  padding: '$4',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'ataristocrat',
  lineHeight: '0.9',
  fontSize: '$5',
  gap: '$4',
  '& a': {
    color: '$white',
    textDecorationStyle: 'dotted',
  },
  '& img': {
    height: '$9',
  },
  '@bp2': {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    '& img': {
      height: '$10',
    },
    '@bp3': {
      fontSize: '$6',
    },
  },
});

export const Footer = () => (
  <FooterContent>
    <div>
      <a
        href="https://www.youtube.com/watch?v=DUB6eN1G1VQ&list=PLBL06fBaMpRNBPlXwaLkQTVzIBOEIpckf"
        target="_blank"
        rel="noreferrer"
      >
        Side Web
      </a>{' '}
      {`est une série de vidéos consacrée à la fan-création sur le web. Son but
      est de valoriser la création web amateure, en la revendiquant comme partie intégrante de notre culture. Toutes les œuvres, qu'elles soient méconnues, dérivées, ou même médiocres, méritent d'être reconnues ! Side Web est aussi une réflexion sur l'évolution du Web, en se remémorant Web des années 2000 pour le comparer à ce qu'il est devenu aujourd’hui.`}
      <br />
      {`Ce calendrier est une sorte de produit dérivé. Une petite célébration de diverses œuvres du web, aussi bien des fan-création que certains contenus originaux. À défaut d'y consacrer des vidéos, voilà une occasion de les commémorer. J'espère que vous y découvrirez des créations qui vous plairont !`}
    </div>
    <img src="/img/sideweb-logo.png" alt="Side web" />
  </FooterContent>
);
