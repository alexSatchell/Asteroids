import styled from 'styled-components';
import { QUERIES } from '../../styles/styles';

export const ListContainer = styled.div`
  grid-column: center-start / center-end;
  grid-row: 3;
  height: auto;
  padding: 2rem;
  /* border: 1px solid orange; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;
  justify-items: center;

  @media (${QUERIES.large}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (${QUERIES.medium}) {
    grid-template-columns: 1fr;
  }
`;
