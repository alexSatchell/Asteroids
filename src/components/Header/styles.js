import styled from 'styled-components';
import { COLORS, QUERIES } from '../../styles/styles';

export const HeaderContainer = styled.div`
  grid-column: center-start / span 5;
  grid-row: 1;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: 40rem;
  padding: 2rem;
  color: ${COLORS.title};

  @media (${QUERIES.medium}) {
    grid-column: center-start / center-end;
    height: 30rem;
  }

  @media (${QUERIES.small}) {
    height: auto;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  background: #fff;
  border-bottom: 0.2rem solid ${COLORS.red};
  line-height: 120%;
  @media (${QUERIES.large}) {
    font-size: 4rem;
  }
  @media (${QUERIES.medium}) {
    font-size: 3.5rem;
    /* border: 1px solid black; */
  }
`;

export const SubTitle = styled.h2`
  font-size: 3.5rem;
  background: #fff;
  line-height: 120%;

  @media (${QUERIES.large}) {
    font-size: 2.5rem;
  }
  @media (${QUERIES.medium}) {
    font-size: 2rem;

    /* border: 1px solid black; */
  }
`;

export const About = styled.p`
  font-size: 1.8rem;
  background: #fff;
  padding: 1rem 0;
  line-height: 150%;
  color: ${COLORS.paragraph};
  font-family: 'Montserrat', sans-serif;

  @media (${QUERIES.large}) {
    font-size: 1.6rem;
  }
  @media (${QUERIES.medium}) {
    font-size: 1.6rem;
    /* border: 1px solid black; */
  }
`;
