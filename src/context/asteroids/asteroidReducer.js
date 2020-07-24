import moment from 'moment';

export default (state, action) => {
  switch (action.type) {
    case 'LOAD_ASTEROID_DATA':
      return {
        ...state,
        asteroids: action.payload,
      };
    case 'LOAD_NEXT_ASTEROID_DATA':
      return {
        ...state,
        currentDate: moment(state.currentDate)
          .add(1, 'days')
          .format('YYYY-MM-DD'),
        asteroids: action.payload,
      };
    case 'LOAD_PREVIOUS_ASTEROID_DATA':
      return {
        ...state,
        currentDate: moment(state.currentDate)
          .add(-1, 'days')
          .format('YYYY-MM-DD'),
        asteroids: action.payload,
      };
    case 'SORT_BY_CLOSEST':
      return {
        ...state,
        asteroids: action.payload.sort((a, b) => {
          return (
            Math.floor(a.close_approach_data[0].miss_distance.miles) >
            Math.floor(b.close_approach_data[0].miss_distance.miles)
          );
        }),
      };
    case 'SORT_BY_LARGEST':
      return {
        ...state,
        asteroids: action.payload.sort((a, b) => {
          return (
            a.estimated_diameter.feet.estimated_diameter_max >
            b.estimated_diameter.feet.estimated_diameter_max
          );
        }),
      };
    case 'SORT_BY_FASTEST':
      return {
        ...state,
        asteroids: action.payload.sort((a, b) => {
          return (
            Math.floor(
              a.close_approach_data[0].relative_velocity.miles_per_hour
            ) <
            Math.floor(
              b.close_approach_data[0].relative_velocity.miles_per_hour
            )
          );
        }),
      };
    default:
      return state;
  }
};
