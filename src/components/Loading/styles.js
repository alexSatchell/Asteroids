import styled, { keyframes } from 'styled-components';

export const LoadingContainer = styled.div`
  grid-column: 1 / 4;
  /* border: 1px solid orange; */
  padding: 2rem;
  height: 20rem;
  width: 60%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AsteroidAnimation = keyframes`
  0% {
    -webkit-transform: translateZ(-1px) translateY(-1px) translateX(1px);
            transform: translateZ(-150px) translateY(-150px) translateX(150px);
    opacity: 0;
  }
  20% {
    -webkit-transform: translateZ(0) translateY(0) translateX(0);
            transform: translateZ(0) translateY(0) translateX(0);
    opacity: 1;
}
30% {
  -webkit-transform: translateZ(0) translateY(0) translateX(0);
            transform: translateZ(0) translateY(0) translateX(0);
    opacity: 0;
}
  100% {
    -webkit-transform: translateZ(0) translateY(0) translateX(0);
            transform: translateZ(0) translateY(0) translateX(0);
    opacity: 1;
}
`;

export const AsteroidContainer = styled.div`
  /* border: 1px solid black; */
  padding: 3rem;
`;

export const Asteroid1 = styled.img`
  width: 5rem;

  animation-name: ${AsteroidAnimation};
  animation-duration: 1.8s;
  animation-iteration-count: infinite;
`;
export const Asteroid2 = styled.img`
  width: 5rem;

  animation-name: ${AsteroidAnimation};
  animation-delay: 0.1s;
  animation-duration: 1.8s;
  animation-iteration-count: infinite;
`;
export const Asteroid3 = styled.img`
  width: 5rem;

  animation-name: ${AsteroidAnimation};
  animation-delay: 0.2s;
  animation-duration: 1.8s;
  animation-iteration-count: infinite;
`;
