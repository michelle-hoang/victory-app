import axios from 'axios';

export const GET_CRIMES = 'GET_CRIMES';

export const getCrimes = crimes => {
  return {
    type: GET_CRIMES,
    crimes,
  };
};

export function fetchResources() {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/crimes');
      dispatch(getCrimes(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function crimeReducer(state = [], action) {
  switch (action.type) {
    case GET_CRIMES:
      return action.crimes;
    default:
      return state;
  }
}
