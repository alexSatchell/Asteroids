import React, { useReducer } from 'react';
import AsteroidContext from './asteroidContext';
import asteroidReducer from './asteroidReducer';
import axios from 'axios';
import { API_KEY } from './../../config/config';
import moment from 'moment';

const AsteroidState = (props) => {
  const initialState = {
    asteroids: null,
    currentDate: moment(new Date()).format('YYYY-MM-DD'),
    previousDate: moment(new Date()).add(-1, 'days').format('YYYY-MM-DD'),
    nextDate: moment(new Date()).add(1, 'days').format('YYYY-MM-DD'),
  };

  const [state, dispatch] = useReducer(asteroidReducer, initialState);

  const getAsteroids = async () => {
    // If you're reading this, I want you too see my animation
    setTimeout(async () => {
      try {
        await axios
          .get(
            `https://api.nasa.gov/neo/rest/v1/feed?start_date=${initialState.currentDate}&end_date=${initialState.currentDate}&api_key=${API_KEY}`
          )
          .then((res) => {
            dispatch({
              type: 'LOAD_ASTEROID_DATA',
              payload: res.data.near_earth_objects[initialState.currentDate],
            });
          });
      } catch (error) {
        console.log(error);
      }
    }, 100);
  };

  const sortByClosest = (asteroids) => {
    dispatch({ type: 'SORT_BY_CLOSEST', payload: asteroids });
  };

  const sortByLargest = (asteroids) => {
    dispatch({ type: 'SORT_BY_LARGEST', payload: asteroids });
  };

  const sortByFastest = (asteroids) => {
    dispatch({ type: 'SORT_BY_FASTEST', payload: asteroids });
  };

  // const viewPreviousDay = () => {
  //   setTimeout(async () => {
  //     try {
  //       await axios
  //         .get(
  //           `https://api.nasa.gov/neo/rest/v1/feed?start_date=${initialState.previousDate}&end_date=${initialState.previousDate}&api_key=${API_KEY}`
  //         )
  //         .then((res) => {
  //           dispatch({
  //             type: 'LOAD_PREVIOUS_ASTEROID_DATA',
  //             payload: res.data.near_earth_objects[initialState.previousDate],
  //           });
  //         });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }, 100);
  // };

  const viewNextDay = async () => {
    try {
      await axios
        .get(
          `https://api.nasa.gov/neo/rest/v1/feed?start_date=${initialState.nextDate}&end_date=${initialState.nextDate}&api_key=${API_KEY}`
        )
        .then((res) => {
          dispatch({
            type: 'LOAD_NEXT_ASTEROID_DATA',
            payload: res.data.near_earth_objects[initialState.nextDate],
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AsteroidContext.Provider
      value={{
        asteroids: state.asteroids,
        currentDate: state.currentDate,
        previousDate: state.previousDate,
        nextDate: state.nextDate,
        getAsteroids,
        sortByClosest,
        sortByLargest,
        sortByFastest,
        viewNextDay,
      }}
    >
      {props.children}
    </AsteroidContext.Provider>
  );
};

export default AsteroidState;
