import React, { useContext, useEffect } from 'react';
import AsteroidContext from '../../context/asteroids/asteroidContext';
import Asteroid from './../NearEarthObject/';
import Loading from './../Loading';
import { ListContainer } from './styles';

// NEO (Near Earth Object)
// This component is a list to contain all NEO components

const NEOList = () => {
  const asteroidContext = useContext(AsteroidContext);

  const { asteroids, getAsteroids } = asteroidContext;

  useEffect(() => {
    getAsteroids();
  }, []);

  return (
    <ListContainer>
      {asteroids ? (
        asteroids.map((asteroid) => (
          <Asteroid key={asteroid.id} asteroid={asteroid} />
        ))
      ) : (
        <Loading />
      )}
    </ListContainer>
  );
};

export default NEOList;
