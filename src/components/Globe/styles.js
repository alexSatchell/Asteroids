import styled from 'styled-components';
import { QUERIES } from '../../styles/styles';

export const ThreeSceneContainer = styled.div`
  background: transparent;
  /* z-index: 2; */
  grid-column: 7 / 10;
  grid-row: 1;
  /* border: 1px solid blue; */
  border-radius: 50%;
  width: 40rem;
  height: 40rem;

  @media (${QUERIES.medium}) {
    display: none;
  }
`;
