import styled from 'styled-components';

export const QUERIES = {
  large: `max-width: 1075px`,
  medium: `max-width: 800px`,
  small: `max-width: 650px`,
};

export const COLORS = {
  // Font
  title: '#0E101B',
  paragraph: '#021B27',
  paragraph2: '#c6cbdc',

  // Design Colors
  yellow: '#e7b211',
  blue: '#045277',
  red: '#ee2828',
  white: '#fff',
  lightGray: '#7E848B',
};

export const Layout = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  display: grid;
  grid-template-columns:
    1fr [center-start] repeat(8, minmax(min-content, 14rem))
    [center-end] 1fr;
  grid-template-rows: 1fr auto auto auto;

  margin: 0 auto;
  /* border: 1px solid black; */
`;
