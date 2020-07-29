import React, { useContext } from 'react';
import AsteroidContext from '../../context/asteroids/asteroidContext';
import moment from 'moment';
import {
  NavContainer,
  CurrentDate,
  GetCurrentDate,
  GetNextDate,
  AlternativeDates,
  Divider,
  FormGroup,
  Select,
  Selection,
  Span,
  Colon,
  Label,
  Text,
  LoadingDot1,
  LoadingDot2,
  LoadingDot3,
  DateContainer,
} from './styles';

const DataOptions = () => {
  const asteroidContext = useContext(AsteroidContext);
  const {
    asteroids,
    sortByClosest,
    sortByLargest,
    sortByFastest,
    viewNextDay,
    getAsteroids,
  } = asteroidContext;
  let date;
  let formattedDate;

  // only load data
  if (asteroids !== null) {
    date = asteroids[0].close_approach_data[0].close_approach_date;
    formattedDate = moment(date).format('MMMM Do, YYYY');
  } else {
    formattedDate = 'Loading...';
  }

  return (
    <NavContainer>
      <DateContainer>
        <CurrentDate>Showing Data for </CurrentDate>
        <Colon>:</Colon>
        {asteroids == null ? (
          <Text>
            <LoadingDot1>.</LoadingDot1>
            <LoadingDot2>.</LoadingDot2>
            <LoadingDot3>.</LoadingDot3>
          </Text>
        ) : (
          <Span>{formattedDate}</Span>
        )}
      </DateContainer>

      <FormGroup>
        <Label htmlFor='sort'>Sort By:</Label>
        <Select id='sort' name='sort'>
          <Selection></Selection>
          <Selection onClick={() => sortByClosest(asteroids)}>
            Closest Asteroid
          </Selection>
          <Selection onClick={() => sortByLargest(asteroids)}>
            Largest Asteroid
          </Selection>
          <Selection onClick={() => sortByFastest(asteroids)}>
            Fastest Asteroid
          </Selection>
          <Selection></Selection>
        </Select>
      </FormGroup>

      <AlternativeDates>
        <GetCurrentDate onClick={() => getAsteroids()}>
          Today's Data
        </GetCurrentDate>
        <Divider>|</Divider>
        <GetNextDate onClick={() => viewNextDay()}>
          {`Data for ${moment(new Date()).add(1, 'days').format('MMMM Do')}`}
        </GetNextDate>
      </AlternativeDates>
    </NavContainer>
  );
};

export default DataOptions;
