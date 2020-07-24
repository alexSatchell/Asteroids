import React from 'react';
import {
  LoadingContainer,
  AsteroidAnimation,
  AsteroidContainer,
  Asteroid1,
  Asteroid2,
  Asteroid3,
} from './styles';

const Loading = () => {
  return (
    <LoadingContainer>
      <AsteroidContainer>
        <Asteroid1 src={require('./../../universe.png')}></Asteroid1>
        <Asteroid2 src={require('./../../universe.png')}></Asteroid2>
        <Asteroid3 src={require('./../../universe.png')}></Asteroid3>
      </AsteroidContainer>
    </LoadingContainer>
  );
};

export default Loading;
