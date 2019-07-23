import axios from 'axios';

export const GET_INTERESTS = 'GET_INTERESTS';
export const ADD_INTEREST = 'ADD_INTEREST';
export const REMOVE_INTEREST = 'DELETE_INTEREST';

export const getInterests = interests => {
  return {
    type: GET_INTERESTS,
    interests,
  };
};

export const addInterest = interest => {
  return {
    type: ADD_INTEREST,
    interest,
  };
};

export const removeInterest = interestId => {
  return {
    type: REMOVE_INTEREST,
    interestId,
  };
};

export function fetchInterests() {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/interests');
      dispatch(getInterests(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function postInterest(newInterest) {
  return async dispatch => {
    try {
      const { data } = await axios.post('/api/interests', newInterest);
      dispatch(addInterest(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteInterest(interestId) {
  return async dispatch => {
    try {
      await axios.delete(`/api/cookies/${interestId}`);
      dispatch(removeInterest(interestId));
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
