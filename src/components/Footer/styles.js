import styled from 'styled-components';
import { COLORS } from '../../styles/styles';
// import { NavLink } from 'react-router-dom';

export const FooterContainer = styled.div`
  grid-column: center-start / center-end;
  grid-row: 4;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
`;

export const NasaContainer = styled.div``;
export const Copyright = styled.p`
  font-size: 1.3rem;
`;

export const Span = styled.span`
  font-size: 1.3rem;
`;

export const NasaLink = styled.a`  outline: none;
text-decoration: none;
font-size: 1.3rem;
/* color: ${COLORS.jet}; */
position: relative;
transition: 0.2s ease;
font-weight: bold;
border-bottom: .15rem solid ${COLORS.yellow};
color: ${COLORS.title};

&:hover {
    color: ${COLORS.red};
}`;
