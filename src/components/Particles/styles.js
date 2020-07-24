import styled from 'styled-components';
import { QUERIES } from '../../styles/styles';

export const ParticlesContainer = styled.div`
  grid-column: center-start / center-end;
  grid-row: 1;
  width: 100%;
  z-index: -1;
  height: auto;
  /* border: 1px solid blue; */

  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  @media (${QUERIES.medium}) {
    display: none;
  }
`;
