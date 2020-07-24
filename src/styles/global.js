import { createGlobalStyle } from 'styled-components';
import { QUERIES } from './styles';

export const GlobalStyles = createGlobalStyle`
    *, 
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html{
    box-sizing: border-box;
    font-size: 62.5%; 

    @media (${QUERIES.large}) { 
  }
}

    body {
        font-family: 'Roboto';
        font-weight: 400;
    }
`;
