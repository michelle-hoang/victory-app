import axios from 'axios';

export const GET_INTERESTS = 'GET_INTERESTS';

export const getInterests = interests => {
  return {
    type: GET_INTERESTS,
    interests,
  };
};

export function fetchInterests() {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get('/api/interests');
      dispatch(getInterests(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function interestReducer(state = [], action) {
  switch (action.type) {
    case GET_INTERESTS:
      return action.interests;
    default:
      return state;
  }
}
