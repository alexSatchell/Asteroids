import React from 'react';
import {
  FooterContainer,
  Copyright,
  NasaLink,
  Span,
  NasaContainer,
} from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>&copy; 2020 Alexander M Satchell</Copyright>
      <NasaContainer>
        <Span>Data powered by</Span>{' '}
        <NasaLink target='_blank' href='https://api.nasa.gov/'>
          NASA
        </NasaLink>
      </NasaContainer>
    </FooterContainer>
  );
};

export default Footer;
