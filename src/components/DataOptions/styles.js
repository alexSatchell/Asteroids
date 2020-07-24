import styled, { keyframes } from 'styled-components';
import { COLORS, QUERIES } from './../../styles/styles';

export const NavContainer = styled.div`
  grid-column: center-start / center-end;
  grid-row: 2;
  padding: 2rem;

  display: grid;
  grid-template-rows: repeat(2, auto);
  justify-content: space-between;

  @media (${QUERIES.small}) {
    grid-template-rows: repeat(3, auto);
    justify-content: center;
  }
`;

export const AlternativeDates = styled.div`
  grid-row: 2;
  width: min-content;
  display: flex;

  @media (${QUERIES.medium}) {
    grid-row: 1;
  }

  @media (${QUERIES.small}) {
    grid-row: 2;
    width: 100%;
    padding: 0.5rem;
    justify-content: center;
  }
`;

export const GetCurrentDate = styled.p`
  width: max-content;
  margin: 0.7rem 1rem;
  transition: 0.2s ease-in-out;
  cursor: default;
  font-size: 1.4rem;
  /* border-bottom: 0.15rem solid ${COLORS.yellow}; */
  cursor: pointer;

  &:hover {
    color: ${COLORS.blue};
  }
`;

export const Divider = styled.p`
  margin: 0.7rem 0;
  font-size: 1.4rem;
  color: ${COLORS.lightGray};
`;

export const GetNextDate = styled.p`
  width: max-content;
  margin: 0.7rem 1rem;
  transition: 0.2s ease-in-out;
  cursor: default;
  font-size: 1.4rem;
  /* border-bottom: 0.15rem solid ${COLORS.yellow}; */
  cursor: pointer;


  &:hover {
    color: ${COLORS.blue};
  }
`;

export const CurrentDate = styled.p`
  grid-row: 1;
  font-size: 1.8rem;
  font-weight: bold;

  @media (${QUERIES.medium}) {
    margin: 0.7rem 0;
  }

  @media (${QUERIES.small}) {
    font-size: 2rem;
    padding: 1rem;
    border-bottom: 1px solid black;
    width: 100%;
  }
`;

export const FormGroup = styled.div`
  grid-row: 1;

  @media (${QUERIES.medium}) {
    width: 100%;
    padding: 1rem;
    grid-row: 2;
    grid-column: 1 / 3;
    display: flex;
    justify-content: center;
  }
  @media (${QUERIES.small}) {
    grid-row: 3;
  }
`;

export const Label = styled.label`
  /* font-weight: bold; */
  font-size: 1.4rem;
  margin-right: 1rem;
  font-weight: bold;
`;

export const Select = styled.select`
  width: 20rem;
  /* height: 1rem; */

  @media (${QUERIES.medium}) {
    width: 60%;
  }

  @media (${QUERIES.small}) {
    width: 70%;
  }
`;

export const Selection = styled.option``;

export const Span = styled.span`
  font-weight: normal;
`;

export const Colon = styled.i`
  display: inline-block;
  margin: 0 0.5rem;
  color: ${COLORS.yellow};
`;
export const TextAnimation = keyframes`
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
`;

export const Text = styled.div`
  display: inline-block;
`;

export const LoadingDot1 = styled.p`
  display: inline-block;
  animation-name: ${TextAnimation};
  animation-duration: 0.8s;
  animation-delay: 0.1s;
  animation-iteration-count: infinite;
`;

export const LoadingDot2 = styled.p`
  display: inline-block;
  animation-name: ${TextAnimation};
  animation-duration: 0.8s;
  animation-delay: 0.2s;
  animation-iteration-count: infinite;
`;

export const LoadingDot3 = styled.p`
  display: inline-block;
  animation-name: ${TextAnimation};
  animation-duration: 0.8s;
  animation-delay: 0.3s;
  animation-iteration-count: infinite;
`;
